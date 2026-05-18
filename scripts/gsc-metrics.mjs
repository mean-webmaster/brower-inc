// Pulls Google Search Console performance metrics for Brower Inc.
//
// Usage:
//   node --env-file=.env.local scripts/gsc-metrics.mjs            # last 30 days, table + CSV
//   node --env-file=.env.local scripts/gsc-metrics.mjs --days 7   # last 7 days
//   node --env-file=.env.local scripts/gsc-metrics.mjs --days 90  # last 90 days
//   node --env-file=.env.local scripts/gsc-metrics.mjs --json     # JSON to stdout
//
// Required env vars (see scripts/GOOGLE-API-SETUP.md):
//   GOOGLE_SA_KEY_PATH    Path to service account JSON key (default .google-sa-key.json)
//   GSC_SITE_URL          The GSC property URL (URL-prefix: https://browerinc.net/, or
//                         Domain property: sc-domain:browerinc.net)

import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createSign } from "node:crypto";
import path from "node:path";

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const GSC_BASE = "https://www.googleapis.com/webmasters/v3";

const args = parseArgs(process.argv.slice(2));
const DAYS = args.days ?? 30;
const JSON_OUT = args.json ?? false;

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--days") out.days = Number(argv[++i]);
    else if (a === "--json") out.json = true;
  }
  return out;
}

function requireEnv(name, fallback) {
  const v = process.env[name] ?? fallback;
  if (!v) {
    console.error(`Missing required env var: ${name}`);
    console.error("Run with: node --env-file=.env.local scripts/gsc-metrics.mjs");
    process.exit(1);
  }
  return v;
}

function b64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken(saKeyPath) {
  const raw = await readFile(saKeyPath, "utf8");
  const sa = JSON.parse(raw);
  if (!sa.client_email || !sa.private_key) {
    throw new Error(`Service account JSON missing client_email/private_key`);
  }
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: sa.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(claim))}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer
    .sign(sa.private_key)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const jwt = `${unsigned}.${signature}`;
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`Token exchange failed (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  return json.access_token;
}

function ymd(d) {
  return d.toISOString().slice(0, 10);
}

async function querySearchAnalytics(token, siteUrl, body) {
  const enc = encodeURIComponent(siteUrl);
  const res = await fetch(
    `${GSC_BASE}/sites/${enc}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
  if (!res.ok) {
    throw new Error(`GSC query failed (${res.status}): ${await res.text()}`);
  }
  return res.json();
}

function fmt(n, digits = 0) {
  if (typeof n !== "number") return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

async function main() {
  const saKeyPath = requireEnv("GOOGLE_SA_KEY_PATH", "./.google-sa-key.json");
  const siteUrl = requireEnv("GSC_SITE_URL");

  // GSC data has a 2–3 day lag; default end date is today - 3
  const end = new Date();
  end.setDate(end.getDate() - 3);
  const start = new Date(end);
  start.setDate(start.getDate() - DAYS + 1);

  const startDate = ymd(start);
  const endDate = ymd(end);

  const token = await getAccessToken(saKeyPath);

  // 1. Totals
  const totals = await querySearchAnalytics(token, siteUrl, {
    startDate,
    endDate,
    dimensions: [],
    rowLimit: 1,
  });
  const total = totals.rows?.[0] ?? {
    clicks: 0,
    impressions: 0,
    ctr: 0,
    position: 0,
  };

  // 2. Top queries
  const queries = await querySearchAnalytics(token, siteUrl, {
    startDate,
    endDate,
    dimensions: ["query"],
    rowLimit: 50,
  });

  // 3. Top pages
  const pages = await querySearchAnalytics(token, siteUrl, {
    startDate,
    endDate,
    dimensions: ["page"],
    rowLimit: 50,
  });

  if (JSON_OUT) {
    console.log(
      JSON.stringify(
        {
          range: { startDate, endDate, days: DAYS },
          totals: total,
          queries: queries.rows ?? [],
          pages: pages.rows ?? [],
        },
        null,
        2,
      ),
    );
    return;
  }

  console.log(`\nGoogle Search Console — ${startDate} to ${endDate} (${DAYS} days)`);
  console.log(`Site: ${siteUrl}\n`);
  console.log("+--------------------+--------------+");
  console.log("| Metric             |        Total |");
  console.log("+--------------------+--------------+");
  console.log(`| Clicks             | ${fmt(total.clicks).padStart(12)} |`);
  console.log(`| Impressions        | ${fmt(total.impressions).padStart(12)} |`);
  console.log(`| CTR (avg)          | ${(fmt(total.ctr * 100, 2) + "%").padStart(12)} |`);
  console.log(`| Position (avg)     | ${fmt(total.position, 1).padStart(12)} |`);
  console.log("+--------------------+--------------+");

  console.log("\nTop 10 queries by clicks:");
  console.log("+----------------------------------------------------+---------+------------+--------+-----------+");
  console.log("| Query                                              |  Clicks |  Impressions |    CTR |  Position |");
  console.log("+----------------------------------------------------+---------+------------+--------+-----------+");
  const topQueries = (queries.rows ?? [])
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10);
  for (const r of topQueries) {
    const q = (r.keys?.[0] ?? "").padEnd(50).slice(0, 50);
    console.log(
      `| ${q} | ${fmt(r.clicks).padStart(7)} | ${fmt(r.impressions).padStart(10)} | ${(fmt(r.ctr * 100, 1) + "%").padStart(6)} | ${fmt(r.position, 1).padStart(9)} |`,
    );
  }
  console.log("+----------------------------------------------------+---------+------------+--------+-----------+");

  console.log("\nTop 10 pages by clicks:");
  console.log("+----------------------------------------------------+---------+------------+--------+-----------+");
  console.log("| Page                                               |  Clicks |  Impressions |    CTR |  Position |");
  console.log("+----------------------------------------------------+---------+------------+--------+-----------+");
  const topPages = (pages.rows ?? [])
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10);
  for (const r of topPages) {
    const p = (r.keys?.[0] ?? "").replace(/^https?:\/\/[^/]+/, "").padEnd(50).slice(0, 50);
    console.log(
      `| ${p} | ${fmt(r.clicks).padStart(7)} | ${fmt(r.impressions).padStart(10)} | ${(fmt(r.ctr * 100, 1) + "%").padStart(6)} | ${fmt(r.position, 1).padStart(9)} |`,
    );
  }
  console.log("+----------------------------------------------------+---------+------------+--------+-----------+");

  // Write CSVs
  const dataDir = path.resolve("data");
  await mkdir(dataDir, { recursive: true });
  const stamp = ymd(new Date());

  const queriesCsv =
    "query,clicks,impressions,ctr,position\n" +
    (queries.rows ?? [])
      .map(
        (r) =>
          `"${(r.keys?.[0] ?? "").replace(/"/g, '""')}",${r.clicks},${r.impressions},${r.ctr},${r.position}`,
      )
      .join("\n");
  await writeFile(path.join(dataDir, `gsc-queries-${stamp}.csv`), queriesCsv);

  const pagesCsv =
    "page,clicks,impressions,ctr,position\n" +
    (pages.rows ?? [])
      .map(
        (r) =>
          `"${(r.keys?.[0] ?? "").replace(/"/g, '""')}",${r.clicks},${r.impressions},${r.ctr},${r.position}`,
      )
      .join("\n");
  await writeFile(path.join(dataDir, `gsc-pages-${stamp}.csv`), pagesCsv);

  console.log(`\nCSVs written: data/gsc-queries-${stamp}.csv and data/gsc-pages-${stamp}.csv`);
}

main().catch((err) => {
  console.error(`\nERROR: ${err.message}`);
  process.exit(1);
});
