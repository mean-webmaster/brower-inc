// Pulls Google Business Profile performance metrics for Brower Inc.
//
// Usage:
//   node --env-file=.env scripts/gbp-metrics.mjs            # last 30 days, table + CSV
//   node --env-file=.env scripts/gbp-metrics.mjs --days 7   # last 7 days
//   node --env-file=.env scripts/gbp-metrics.mjs --json     # JSON to stdout (for piping)
//
// Required env vars:
//   GBP_SA_KEY_PATH      Absolute or relative path to service account JSON key
//   GBP_LOCATION_ID      The GBP location id (just the numeric/string id, no "locations/" prefix)
//
// One-time GCP setup is documented in scripts/GBP-SETUP.md.

import { readFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createSign } from "node:crypto";
import path from "node:path";

const SCOPE = "https://www.googleapis.com/auth/business.manage";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const PERF_BASE = "https://businessprofileperformance.googleapis.com/v1";

const DAILY_METRICS = [
  "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
  "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
  "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
  "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
  "CALL_CLICKS",
  "WEBSITE_CLICKS",
  "BUSINESS_DIRECTION_REQUESTS",
  "BUSINESS_CONVERSATIONS",
  "BUSINESS_BOOKINGS",
];

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

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required env var: ${name}`);
    console.error("Run with: node --env-file=.env scripts/gbp-metrics.mjs");
    process.exit(1);
  }
  return v;
}

function b64url(input) {
  return Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function getAccessToken(saKeyPath) {
  const raw = await readFile(saKeyPath, "utf8");
  const sa = JSON.parse(raw);
  if (!sa.client_email || !sa.private_key) {
    throw new Error(`Service account JSON at ${saKeyPath} is missing client_email or private_key`);
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
    const txt = await res.text();
    throw new Error(`Token exchange failed (${res.status}): ${txt}`);
  }
  const json = await res.json();
  return json.access_token;
}

function dateNDaysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
}

function ymd({ year, month, day }) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

async function fetchMetrics(locationId, accessToken, days) {
  const end = dateNDaysAgo(1);
  const start = dateNDaysAgo(days);
  const params = new URLSearchParams();
  for (const m of DAILY_METRICS) params.append("dailyMetrics", m);
  params.set("dailyRange.start_date.year", String(start.year));
  params.set("dailyRange.start_date.month", String(start.month));
  params.set("dailyRange.start_date.day", String(start.day));
  params.set("dailyRange.end_date.year", String(end.year));
  params.set("dailyRange.end_date.month", String(end.month));
  params.set("dailyRange.end_date.day", String(end.day));

  const url = `${PERF_BASE}/locations/${locationId}:fetchMultiDailyMetricsTimeSeries?${params}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Performance API failed (${res.status}): ${txt}`);
  }
  return { data: await res.json(), start, end };
}

function summarize(apiResponse) {
  const series = apiResponse.multiDailyMetricTimeSeries?.[0]?.dailyMetricTimeSeries ?? [];
  const summary = {};
  const byDate = new Map();

  for (const s of series) {
    const metric = s.dailyMetric;
    const points = s.timeSeries?.datedValues ?? [];
    let total = 0;
    for (const p of points) {
      const value = Number(p.value ?? 0);
      total += value;
      const key = ymd(p.date);
      if (!byDate.has(key)) byDate.set(key, {});
      byDate.get(key)[metric] = value;
    }
    summary[metric] = total;
  }

  return { summary, byDate };
}

function prettyName(metric) {
  return metric
    .replace(/^BUSINESS_/, "")
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function printTable(summary, days, start, end) {
  const totalImpressions =
    (summary.BUSINESS_IMPRESSIONS_DESKTOP_MAPS ?? 0) +
    (summary.BUSINESS_IMPRESSIONS_DESKTOP_SEARCH ?? 0) +
    (summary.BUSINESS_IMPRESSIONS_MOBILE_MAPS ?? 0) +
    (summary.BUSINESS_IMPRESSIONS_MOBILE_SEARCH ?? 0);

  const rows = [
    ["Metric", `${days}-day total`],
    ["Total impressions", totalImpressions.toLocaleString()],
    ["  Desktop · Maps", (summary.BUSINESS_IMPRESSIONS_DESKTOP_MAPS ?? 0).toLocaleString()],
    ["  Desktop · Search", (summary.BUSINESS_IMPRESSIONS_DESKTOP_SEARCH ?? 0).toLocaleString()],
    ["  Mobile · Maps", (summary.BUSINESS_IMPRESSIONS_MOBILE_MAPS ?? 0).toLocaleString()],
    ["  Mobile · Search", (summary.BUSINESS_IMPRESSIONS_MOBILE_SEARCH ?? 0).toLocaleString()],
    ["Call clicks", (summary.CALL_CLICKS ?? 0).toLocaleString()],
    ["Website clicks", (summary.WEBSITE_CLICKS ?? 0).toLocaleString()],
    ["Direction requests", (summary.BUSINESS_DIRECTION_REQUESTS ?? 0).toLocaleString()],
    ["Conversations (chat)", (summary.BUSINESS_CONVERSATIONS ?? 0).toLocaleString()],
    ["Bookings", (summary.BUSINESS_BOOKINGS ?? 0).toLocaleString()],
  ];

  const w0 = Math.max(...rows.map((r) => r[0].length));
  const w1 = Math.max(...rows.map((r) => r[1].length));
  const sep = `+-${"-".repeat(w0)}-+-${"-".repeat(w1)}-+`;

  console.log(`\nGoogle Business Profile — ${ymd(start)} to ${ymd(end)}\n`);
  console.log(sep);
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    console.log(`| ${r[0].padEnd(w0)} | ${r[1].padStart(w1)} |`);
    if (i === 0) console.log(sep);
  }
  console.log(sep);
}

async function writeCsv(byDate, outDir) {
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });
  const today = new Date().toISOString().slice(0, 10);
  const file = path.join(outDir, `gbp-metrics-${today}.csv`);
  const header = ["date", ...DAILY_METRICS];
  const lines = [header.join(",")];
  const dates = [...byDate.keys()].sort();
  for (const d of dates) {
    const row = byDate.get(d);
    lines.push([d, ...DAILY_METRICS.map((m) => row[m] ?? 0)].join(","));
  }
  await writeFile(file, lines.join("\n") + "\n");
  return file;
}

async function main() {
  const saKeyPath = requireEnv("GBP_SA_KEY_PATH");
  const locationId = requireEnv("GBP_LOCATION_ID");

  if (!existsSync(saKeyPath)) {
    console.error(`Service account key not found at: ${saKeyPath}`);
    process.exit(1);
  }

  const accessToken = await getAccessToken(saKeyPath);
  const { data, start, end } = await fetchMetrics(locationId, accessToken, DAYS);
  const { summary, byDate } = summarize(data);

  if (JSON_OUT) {
    console.log(JSON.stringify({ range: { start: ymd(start), end: ymd(end) }, summary, daily: Object.fromEntries(byDate) }, null, 2));
    return;
  }

  printTable(summary, DAYS, start, end);
  const csvFile = await writeCsv(byDate, path.resolve("data"));
  console.log(`\nDaily breakdown written to: ${csvFile}\n`);
}

main().catch((err) => {
  console.error(`\nERROR: ${err.message}`);
  process.exit(1);
});
