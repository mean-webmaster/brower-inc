# Google Business Profile Metrics — One-Time Setup

This is the one-time setup to let `scripts/gbp-metrics.mjs` read Brower Inc.'s GBP performance metrics. After this is done, you can pull metrics any time with one command and never touch credentials again.

The whole thing takes ~10 minutes. Do every step in order.

---

## Step 1 — Create or pick a Google Cloud project

1. Go to <https://console.cloud.google.com/>
2. Top bar → project picker → **New Project**
3. Name: `brower-inc-seo` (or reuse an existing project if you have one for this client)
4. Click **Create**, then make sure that project is selected in the project picker

## Step 2 — Enable the Business Profile Performance API

1. In Cloud Console, search bar at top: **Business Profile Performance API**
2. Click into it → **Enable**
3. Wait ~10 seconds for it to flip to "enabled"

> ⚠️ This is the only API you need to enable. Do **not** enable "Google My Business API" — that is the deprecated v4 API and is gated by an application process.

## Step 3 — Create a service account

1. Cloud Console → **IAM & Admin** → **Service Accounts** → **Create service account**
2. Name: `gbp-metrics-reader`
3. Service account ID: `gbp-metrics-reader` (auto-filled)
4. Description: "Reads GBP performance metrics for SEO reporting"
5. Click **Create and continue**
6. **Skip** the "Grant this service account access to project" step — click **Continue**
7. **Skip** the "Grant users access" step — click **Done**

You'll now see the service account in the list. **Copy its email** — it will look like:
`gbp-metrics-reader@brower-inc-seo.iam.gserviceaccount.com`

You will need this email in Step 5.

## Step 4 — Download the service account key (JSON)

1. Click the service account you just created
2. Tab: **Keys** → **Add key** → **Create new key** → **JSON** → **Create**
3. A JSON file downloads automatically
4. Move it to this exact path: `brower-inc/.gbp-sa-key.json`

This file is the credential. It is already gitignored. **Do not commit it.** If you ever leak it, revoke it in the Keys tab of the service account.

## Step 5 — Add the service account as a Manager of the GBP listing

This is the critical step that lets the service account read metrics without OAuth.

1. Go to <https://business.google.com/> and sign in with Troy's Google account (the one that owns the Brower Inc. listing)
2. Pick the Brower Inc. location
3. Left sidebar → **Users** (sometimes called "Managers")
4. **Add users**
5. Paste the service account email you copied in Step 3
6. Role: **Manager** (not Owner — Manager is enough and safer)
7. Click **Invite**

The service account does not need to "accept" the invite — it auto-accepts because it's a service account.

## Step 6 — Find the GBP location ID

The location ID is a numeric/alphanumeric string that identifies the listing. Easiest way to get it:

**Option A — From the GBP dashboard URL:**
Open the location in <https://business.google.com/>, look at the URL. It contains something like `/n/1234567890123456789/`. That long number is the location ID.

**Option B — Via API:**
Once Steps 1–5 are done, run:

```powershell
node --env-file=.env scripts/gbp-list-locations.mjs
```

> (We can add this helper script later if Option A doesn't work — usually the URL trick is enough.)

## Step 7 — Add env vars

Open (or create) `brower-inc/.env` and add:

```
GBP_SA_KEY_PATH=./.gbp-sa-key.json
GBP_LOCATION_ID=<paste the location ID from Step 6>
```

That's it for setup.

---

## Running the script

From the `brower-inc/` directory:

```powershell
# Last 30 days (default), prints table + writes CSV to data/
node --env-file=.env scripts/gbp-metrics.mjs

# Custom window
node --env-file=.env scripts/gbp-metrics.mjs --days 7
node --env-file=.env scripts/gbp-metrics.mjs --days 90

# JSON output (for piping into other tools or reports)
node --env-file=.env scripts/gbp-metrics.mjs --json
```

What you'll see:

```
Google Business Profile — 2026-04-11 to 2026-05-10

+----------------------+-----------------+
| Metric               |   30-day total  |
+----------------------+-----------------+
| Total impressions    |          12,847 |
|   Desktop · Maps     |             523 |
|   Desktop · Search   |           1,204 |
|   Mobile · Maps      |           4,891 |
|   Mobile · Search    |           6,229 |
| Call clicks          |             142 |
| Website clicks       |             289 |
| Direction requests   |             318 |
| Conversations (chat) |               0 |
| Bookings             |               0 |
+----------------------+-----------------+

Daily breakdown written to: data/gbp-metrics-2026-05-11.csv
```

The CSV has one row per day for the whole window — useful for spotting trends and importing into Looker Studio or the monthly client report.

---

## Troubleshooting

**"PERMISSION_DENIED: The caller does not have permission"**
The service account isn't a manager of the location yet. Repeat Step 5 — the invite sometimes takes 5 minutes to propagate.

**"Performance API failed (404)"**
Location ID is wrong. Re-check Step 6.

**"Token exchange failed (400): invalid_grant"**
Service account key is corrupt or expired. Generate a new key (Step 4 again) — old keys can be revoked from the same Keys tab.

**Some metrics show 0 even though you know they're not**
The Performance API has a 1–2 day lag. Today's data won't appear until tomorrow. The script already accounts for this by using `yesterday` as the end date.
