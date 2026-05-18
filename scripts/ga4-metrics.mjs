// Pulls Google Analytics 4 metrics for Brower Inc.
//
// Usage:
//   node --env-file=.env.local scripts/ga4-metrics.mjs            # last 30 days, table + CSV
//   node --env-file=.env.local scripts/ga4-metrics.mjs --days 7   # last 7 days
//   node --env-file=.env.local scripts/ga4-metrics.mjs --json     # JSON to stdout
//
// Required env vars (see scripts/GOOGLE-API-SETUP.md):
//   GOOGLE_SA_KEY_PATH    Path to service account JSON key (default .google-sa-key.json)
//   GA4_PROPERTY_ID       The GA4 property ID (numeric, NOT the G-XXX measurement ID)

import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createSign } from "node:crypto";
import path from "node:path";

const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const GA4_BASE = "https://analyticsdata.googleapis.com/v1beta";

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
    console.error("Run with: node --env-file=.env.local scripts/ga4-metrics.mjs");
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

async function runReport(token, propertyId, body) {
  const res = await fetch(
    `${GA4_BASE}/properties/${propertyId}:runReport`,
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
    throw new Error(`GA4 report failed (${res.status}): ${await res.text()}`);
  }
  return res.json();
}

function fmt(n) {
  if (n === null || n === undefined) return "—";
  const num = typeof n === "string" ? Number(n) : n;
  if (Number.isNaN(num)) return n;
  return num.toLocaleString("en-US");
}

async function main() {
  const saKeyPath = requireEnv("GOOGLE_SA_KEY_PATH", "./.google-sa-key.json");
  const propertyId = requireEnv("GA4_PROPERTY_ID");

  // GA4 has 24–48hr lag; default end date is yesterday
  const end = new Date();
  end.setDate(end.getDate() - 1);
  const start = new Date(end);
  start.setDate(start.getDate() - DAYS + 1);

  const startDate = ymd(start);
  const endDate = ymd(end);

  const token = await getAccessToken(saKeyPath);

  const dateRanges = [{ startDate, endDate }];
  const coreMetrics = [
    { name: "sessions" },
    { name: "totalUsers" },
    { name: "activeUsers" },
    { name: "newUsers" },
    { name: "screenPageViews" },
    { name: "engagedSessions" },
    { name: "averageSessionDuration" },
    { name: "bounceRate" },
    { name: "conversions" },
  ];

  // 1. Site-wide totals
  const totals = await runReport(token, propertyId, {
    dateRanges,
    metrics: coreMetrics,
  });
  const tRow = totals.rows?.[0]?.metricValues ?? [];
  const totalsObj = {};
  coreMetrics.forEach((m, i) => {
    totalsObj[m.name] = tRow[i]?.value ?? "0";
  });

  // 2. Top channels
  const channels = await runReport(token, propertyId, {
    dateRanges,
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "conversions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 10,
  });

  // 3. Top pages
  const pages = await runReport(token, propertyId, {
    dateRanges,
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }, { name: "totalUsers" }],
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: 15,
  });

  // 4. Top sources (referrals/search)
  const sources = await runReport(token, propertyId, {
    dateRanges,
    dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }],
    metrics: [{ name: "sessions" }, { name: "totalUsers" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 15,
  });

  if (JSON_OUT) {
    console.log(
      JSON.stringify(
        {
          range: { startDate, endDate, days: DAYS },
          totals: totalsObj,
          channels: channels.rows ?? [],
          pages: pages.rows ?? [],
          sources: sources.rows ?? [],
        },
        null,
        2,
      ),
    );
    return;
  }

  console.log(`\nGoogle Analytics 4 — ${startDate} to ${endDate} (${DAYS} days)`);
  console.log(`Property: ${propertyId}\n`);

  console.log("+----------------------------+--------------+");
  console.log("| Metric                     |        Total |");
  console.log("+----------------------------+--------------+");
  console.log(`| Sessions                   | ${fmt(totalsObj.sessions).padStart(12)} |`);
  console.log(`| Total users                | ${fmt(totalsObj.totalUsers).padStart(12)} |`);
  console.log(`| Active users               | ${fmt(totalsObj.activeUsers).padStart(12)} |`);
  console.log(`| New users                  | ${fmt(totalsObj.newUsers).padStart(12)} |`);
  console.log(`| Pageviews                  | ${fmt(totalsObj.screenPageViews).padStart(12)} |`);
  console.log(`| Engaged sessions           | ${fmt(totalsObj.engagedSessions).padStart(12)} |`);
  console.log(
    `| Avg session duration (s)   | ${Number(totalsObj.averageSessionDuration ?? 0).toFixed(1).padStart(12)} |`,
  );
  console.log(
    `| Bounce rate                | ${(Number(totalsObj.bounceRate ?? 0) * 100).toFixed(2).padStart(11)}% |`,
  );
  console.log(`| Conversions                | ${fmt(totalsObj.conversions).padStart(12)} |`);
  console.log("+----------------------------+--------------+");

  console.log("\nTop channels by sessions:");
  console.log("+----------------------------+----------+----------+-------------+");
  console.log("| Channel                    | Sessions |    Users | Conversions |");
  console.log("+----------------------------+----------+----------+-------------+");
  for (const r of channels.rows ?? []) {
    const ch = (r.dimensionValues?.[0]?.value ?? "(unset)").padEnd(26).slice(0, 26);
    const v = r.metricValues ?? [];
    console.log(
      `| ${ch} | ${fmt(v[0]?.value).padStart(8)} | ${fmt(v[1]?.value).padStart(8)} | ${fmt(v[2]?.value).padStart(11)} |`,
    );
  }
  console.log("+----------------------------+----------+----------+-------------+");

  console.log("\nTop pages by pageviews:");
  console.log("+--------------------------------------------------+-----------+----------+");
  console.log("| Page                                             | Pageviews |    Users |");
  console.log("+--------------------------------------------------+-----------+----------+");
  for (const r of pages.rows ?? []) {
    const p = (r.dimensionValues?.[0]?.value ?? "(unset)").padEnd(48).slice(0, 48);
    const v = r.metricValues ?? [];
    console.log(
      `| ${p} | ${fmt(v[0]?.value).padStart(9)} | ${fmt(v[1]?.value).padStart(8)} |`,
    );
  }
  console.log("+--------------------------------------------------+-----------+----------+");

  console.log("\nTop sources/mediums by sessions:");
  console.log("+-----------------------------+-----------------+----------+----------+");
  console.log("| Source                      | Medium          | Sessions |    Users |");
  console.log("+-----------------------------+-----------------+----------+----------+");
  for (const r of sources.rows ?? []) {
    const src = (r.dimensionValues?.[0]?.value ?? "(unset)").padEnd(27).slice(0, 27);
    const med = (r.dimensionValues?.[1]?.value ?? "(unset)").padEnd(15).slice(0, 15);
    const v = r.metricValues ?? [];
    console.log(
      `| ${src} | ${med} | ${fmt(v[0]?.value).padStart(8)} | ${fmt(v[1]?.value).padStart(8)} |`,
    );
  }
  console.log("+-----------------------------+-----------------+----------+----------+");

  // Write CSVs
  const dataDir = path.resolve("data");
  await mkdir(dataDir, { recursive: true });
  const stamp = ymd(new Date());

  const pagesCsv =
    "page,pageviews,users\n" +
    (pages.rows ?? [])
      .map(
        (r) =>
          `"${(r.dimensionValues?.[0]?.value ?? "").replace(/"/g, '""')}",${r.metricValues?.[0]?.value ?? 0},${r.metricValues?.[1]?.value ?? 0}`,
      )
      .join("\n");
  await writeFile(path.join(dataDir, `ga4-pages-${stamp}.csv`), pagesCsv);

  console.log(`\nCSV written: data/ga4-pages-${stamp}.csv`);
}

main().catch((err) => {
  console.error(`\nERROR: ${err.message}`);
  process.exit(1);
});
