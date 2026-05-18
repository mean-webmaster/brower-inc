# Google API Setup — Persistent Access for GA4, GSC, and GBP

This is the **one-time setup** that lets every future session (Claude, scripts, monthly-report tooling) pull data from Google Analytics 4, Google Search Console, and Google Business Profile without re-authenticating, without OAuth flows, and without browser logins.

**Total time:** ~15 minutes (10 if you already have a Google Cloud project).

The whole pattern is: **one service account → three APIs → three property grants → three env vars**. Do every step in order.

---

## What you'll end up with

After this is done, you can run any of these three commands from `brower-inc/`:

```powershell
# Last 30 days of GBP performance (impressions, calls, direction requests, etc.)
node --env-file=.env.local scripts/gbp-metrics.mjs

# Last 30 days of GSC clicks, impressions, CTR, average position — by query + by page
node --env-file=.env.local scripts/gsc-metrics.mjs

# Last 30 days of GA4 sessions, users, conversions, top sources, top pages
node --env-file=.env.local scripts/ga4-metrics.mjs
```

Each writes a CSV to `brower-inc/data/` and prints a tidy summary table. CSVs are gitignored.

---

## Step 1 — Create (or pick) a Google Cloud project

1. Go to <https://console.cloud.google.com/>
2. Top bar → project picker → **New Project**
3. Name: `brower-inc-seo` (or reuse an existing one)
4. Click **Create**, then make sure that project is selected in the picker

If you already did this for GBP, skip ahead.

---

## Step 2 — Enable three APIs

In the Cloud Console search bar (top), search for each of these and click **Enable** on the API page:

1. **Business Profile Performance API** — for GBP metrics
2. **Search Console API** — for GSC metrics
3. **Google Analytics Data API** — for GA4 metrics

Each takes 5–10 seconds to flip to "enabled."

> ⚠️ Do **not** enable "Google My Business API" — that is the deprecated v4 API and is application-gated. The three above are the modern public ones.

---

## Step 3 — Create one service account (used for all three)

1. Cloud Console → **IAM & Admin** → **Service Accounts** → **Create service account**
2. Name: `brower-inc-metrics-reader`
3. Service account ID: `brower-inc-metrics-reader` (auto-filled)
4. Description: "Reads GBP / GSC / GA4 metrics for SEO reporting"
5. Click **Create and continue**
6. **Skip** the "Grant this service account access to project" step → **Continue**
7. **Skip** the "Grant users access" step → **Done**

Copy the service account email — it will look like:
`brower-inc-metrics-reader@brower-inc-seo.iam.gserviceaccount.com`

You will paste this email three times in the next steps.

---

## Step 4 — Download the service account JSON key

1. Click the service account you just created
2. Tab: **Keys** → **Add key** → **Create new key** → **JSON** → **Create**
3. A JSON file downloads automatically
4. Move it to this exact path: `brower-inc/.google-sa-key.json`

This file is the credential. **It is gitignored. Do not commit it.** If it ever leaks, revoke it in the Keys tab and generate a new one.

---

## Step 5 — Grant the service account access to each Google property

You need to add the service account email as a **user** of each property. Do this three times — once each for GBP, GSC, and GA4. Each takes about 60 seconds.

### 5a. Google Business Profile (GBP)

1. Go to <https://business.google.com/> and sign in with Troy's owner Google account
2. Pick the Brower Inc. location
3. Left sidebar → **Users** (sometimes called "Managers")
4. **Add users**
5. Paste the service account email
6. Role: **Manager** (not Owner — Manager is enough)
7. Click **Invite**

The service account auto-accepts. No further action needed on its side.

### 5b. Google Search Console (GSC)

1. Go to <https://search.google.com/search-console>
2. Pick the `browerinc.net` property
3. Settings (gear icon, lower left) → **Users and permissions**
4. **Add user**
5. Paste the service account email
6. Permission: **Restricted** is enough for reading metrics
7. Click **Add**

### 5c. Google Analytics 4 (GA4)

1. Go to <https://analytics.google.com/>
2. Pick the Brower Inc. property (the one whose Measurement ID is `G-RD41VKS37T`)
3. Bottom-left gear icon → **Admin** → in the **Property** column → **Property access management**
4. **+** button (top right) → **Add users**
5. Paste the service account email
6. Roles: **Viewer** (read-only)
7. **Notify by email:** uncheck (the service account doesn't have an inbox)
8. Click **Add**

---

## Step 6 — Find the three property IDs

You need three IDs to pass into the scripts.

### 6a. GBP location ID
Open the location in <https://business.google.com/>. Look at the URL — it contains something like `/n/1234567890123456789/`. That long number is your GBP location ID.

### 6b. GSC site URL
This one is easy: the site URL itself.
- **If the property is a "URL prefix" property:** `https://browerinc.net/`
- **If it's a "Domain" property:** `sc-domain:browerinc.net`

You can see which type at <https://search.google.com/search-console> — the property name in the dropdown tells you (Domain properties show without a protocol; URL-prefix shows with `https://`).

### 6c. GA4 property ID
In GA4 → Admin → Property column → **Property details**. The numeric **Property ID** is what you need (it's a 9-digit number — not the Measurement ID `G-RD41VKS37T`).

---

## Step 7 — Add env vars to `.env.local`

Open `brower-inc/.env.local` and add these lines (replace placeholder values with what you got in Step 6):

```env
# Google API service account credential (one file, used by all 3 scripts)
GOOGLE_SA_KEY_PATH=./.google-sa-key.json

# GBP — location ID from Step 6a
GBP_LOCATION_ID=1234567890123456789

# GSC — site URL from Step 6b (note: the trailing slash on URL-prefix properties matters)
GSC_SITE_URL=https://browerinc.net/

# GA4 — numeric property ID from Step 6c (NOT the G-XXX measurement ID)
GA4_PROPERTY_ID=123456789
```

> If you already had `GBP_SA_KEY_PATH` from the older GBP-only setup, you can leave it — but going forward, both old and new scripts will read `GOOGLE_SA_KEY_PATH` if present.

---

## Step 8 — Verify everything works

From `brower-inc/`, run each script. Each should print a clean summary within ~5 seconds.

```powershell
node --env-file=.env.local scripts/gbp-metrics.mjs --days 7
node --env-file=.env.local scripts/gsc-metrics.mjs --days 7
node --env-file=.env.local scripts/ga4-metrics.mjs --days 7
```

If any one fails, see Troubleshooting below.

---

## Running the scripts (everyday usage)

```powershell
# 30-day default
node --env-file=.env.local scripts/gbp-metrics.mjs
node --env-file=.env.local scripts/gsc-metrics.mjs
node --env-file=.env.local scripts/ga4-metrics.mjs

# Custom window
node --env-file=.env.local scripts/gsc-metrics.mjs --days 90

# JSON output (for piping into other tools)
node --env-file=.env.local scripts/ga4-metrics.mjs --json
```

CSVs land in `brower-inc/data/` with timestamped filenames. The directory is gitignored.

---

## Troubleshooting

### "PERMISSION_DENIED" / 403
The service account isn't a user of that property yet. Repeat Step 5 for the failing service. Permission propagation takes 5–10 minutes after grant.

### "Token exchange failed: invalid_grant"
The service account JSON key is corrupt or expired. Generate a new key (Step 4 again).

### "API has not been enabled in project"
You skipped Step 2 for that API. Enable it in the Cloud Console.

### GA4 returns empty data even though traffic exists
GA4 has a 24–48 hour data lag. Today's data won't appear until tomorrow. The script uses `yesterday` as the end date by default.

### GSC returns empty data
GSC has a 2–3 day data lag. The script accounts for this by using `today - 3 days` as the end date by default.

### "GA4 property not found"
You probably pasted the Measurement ID (`G-XXX`) instead of the numeric Property ID. Re-check Step 6c.

---

## Security

- The service account JSON is in `.gitignore` (`*-sa-key.json`)
- Keys do not expire by default. Rotate every 12 months as a best practice (Step 4 again, delete old key)
- The service account has **read-only** access to all three properties — it cannot modify GBP, GSC, or GA4 settings
- If you ever suspect the key is compromised, revoke it in Cloud Console → Service Accounts → Keys → trash icon

---

## Future: monthly client report automation

Once these three scripts work, the next pass can chain them into a single `npm run monthly-report` command that pulls 30-day data from all three, computes month-over-month deltas, and writes a Markdown report to `daily-reports/monthly-YYYY-MM.md`. Ask Claude to wire that up after you've confirmed all three scripts are returning live data.
