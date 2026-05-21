// Seeds the portfolio_items + portfolio_images tables with 8 realistic
// Oklahoma projects from Brower Inc.'s real-photo asset library.
//
// Idempotent: upserts by slug. Re-running replaces hero/content fields and
// rebuilds each item's gallery so edits to this file flow through.
//
// Usage:
//   node --env-file=.env.local scripts/seed-portfolio.mjs
//
// Required env vars (already in .env.local):
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Run with --env-file=.env.local.",
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const IMG = "/images";

const PORTFOLIO = [
  {
    slug: "wind-farm-portable-restrooms-kay-county",
    title: "Long-Term Portable Restrooms for a Kay County Wind Farm",
    description:
      "Standing rental of weather-rated portable restrooms for a wind farm operations and maintenance crew working across remote turbine pads in Kay County, Oklahoma.",
    content: `<p>Wind farm O&amp;M crews spend their day spread across dozens of turbine sites — sometimes miles between any building. We placed a fleet of standard units at the staging yard plus rotating field units at active turbine pads, with weekly servicing routed to match the crew's shift schedule.</p>
<p><strong>What it looked like:</strong> 6 standard units rotated across the property, branded Brower Inc. trucks on-site every Tuesday, deep cleans every two weeks during peak season, and a single point of contact for the site supervisor.</p>
<p><strong>Why standing rentals matter on rural sites:</strong> there is no nearby alternative. A unit that hasn't been serviced doesn't just inconvenience the crew — it stops work. The Brower team treats wind farm and oil &amp; gas sites as priority service routes for that reason.</p>`,
    image_url: `${IMG}/brower-inc-portable-restroom-wind-farm-field-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. portable restroom placed in an open Kay County wind farm field with turbine towers in the background",
    category: "Industrial & Energy",
    location: "Kay County, OK",
    featured: true,
    gallery: [
      {
        url: `${IMG}/brower-inc-portable-restroom-wind-farm-field-newkirk-ok.webp`,
        alt: "Brower Inc. standard portable restroom in a Kay County wind farm field",
      },
      {
        url: `${IMG}/brower-inc-service-truck-portable-restroom-delivery-daytime-newkirk-ok.webp`,
        alt: "Brower Inc. service truck delivering a portable restroom on a rural Oklahoma route",
      },
      {
        url: `${IMG}/brower-inc-portable-restroom-loaded-trailer-yard-newkirk-ok.webp`,
        alt: "Portable restrooms loaded on a Brower Inc. trailer at the Newkirk yard, ready for field delivery",
      },
    ],
  },
  {
    slug: "private-ranch-wedding-vip-trailer-kay-county",
    title: "Private Ranch Wedding — Luxury Trailer + Hand Wash Station",
    description:
      "Luxury restroom trailer with full-flush stalls and a separate hand washing station for a 180-guest evening wedding on a private Kay County ranch.",
    content: `<p>This couple chose a family ranch for their ceremony and reception — beautiful spot, no permanent restrooms. We delivered the luxury restroom trailer the morning before, leveled it on the chosen pad, ran power, and pre-tested every fixture before the bride's family arrived for setup.</p>
<p><strong>What it included:</strong> luxury restroom trailer with 4 private stalls split men's/women's, a separate hand washing station near the bar, ambient interior lighting, and a discreet pickup the morning after.</p>
<p><strong>Note from the planner:</strong> guests didn't believe it was a portable trailer until they walked inside. That's the goal — a wedding restroom should be invisible to the experience.</p>`,
    image_url: `${IMG}/brower-inc-vip-restroom-trailer-with-handwash-station-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. luxury restroom trailer with a separate hand washing station set up for a private Kay County ranch wedding",
    category: "Weddings & Private Events",
    location: "Kay County, OK",
    featured: true,
    gallery: [
      {
        url: `${IMG}/brower-inc-vip-restroom-trailer-with-handwash-station-newkirk-ok.webp`,
        alt: "Luxury restroom trailer plus hand washing station at a private Oklahoma ranch wedding",
      },
      {
        url: `${IMG}/brower-inc-vip-restroom-trailer-interior-vanity-stalls-newkirk-ok.webp`,
        alt: "Inside the Brower Inc. luxury restroom trailer — vanity and private flush stalls",
      },
      {
        url: `${IMG}/brower-inc-vip-restroom-trailer-interior-private-bathroom-newkirk-ok.webp`,
        alt: "Private bathroom interior of the Brower Inc. luxury restroom trailer",
      },
    ],
  },
  {
    slug: "northern-oklahoma-community-festival",
    title: "Multi-Day Community Festival — Standard + ADA Units",
    description:
      "Festival-grade sanitation plan for a three-day northern Oklahoma community gathering: standard units, ADA-accessible unit, hand washing stations, and twice-daily servicing.",
    content: `<p>Three-day outdoor community events have one job for the sanitation vendor: keep the line short and the units clean from gate-open Friday through tear-down Sunday. We delivered Thursday morning, walked placement with the event coordinator, and ran twice-daily servicing rounds — once before gate-open and again at the dinner break.</p>
<p><strong>What it looked like:</strong> standard units along two service rows, one ADA-accessible unit near the main stage, hand washing stations next to every concession cluster, and signage placed by our crew.</p>
<p><strong>Why placement matters:</strong> on a windy Oklahoma weekend, the difference between "great event" and "complaint thread on Facebook" is almost always upstream airflow and walking distance from the food vendors. We solve both at the placement walk.</p>`,
    image_url: `${IMG}/brower-inc-community-event-festival-service-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. portable restrooms lined up at a multi-day northern Oklahoma community festival, with a Brower service truck nearby",
    category: "Community Events",
    location: "Northern Oklahoma",
    featured: false,
    gallery: [
      {
        url: `${IMG}/brower-inc-community-event-festival-service-newkirk-ok.webp`,
        alt: "Brower Inc. portable restrooms at a community festival in northern Oklahoma",
      },
      {
        url: `${IMG}/brower-inc-portable-restroom-lineup-outdoor-event-ready-newkirk-ok.webp`,
        alt: "Lineup of Brower Inc. portable restrooms event-ready before gate-open",
      },
      {
        url: `${IMG}/brower-inc-hand-washing-station-warehouse-newkirk-ok.webp`,
        alt: "Brower Inc. hand washing station staged for event delivery",
      },
    ],
  },
  {
    slug: "commercial-construction-ponca-city",
    title: "Commercial Construction Project — Ponca City",
    description:
      "OSHA-compliant portable restroom and hand washing setup for a 25-person commercial construction crew in Ponca City, with weekly servicing tied to the project timeline.",
    content: `<p>The general contractor needed sanitation in place before framing started and walked off only after final punch-list. We sized the unit count to OSHA 29 CFR 1926.51 ratios for the active crew, added a hand washing station near the trailer, and scheduled weekly servicing on Monday mornings so the units were fresh for the week ahead.</p>
<p><strong>What it included:</strong> two standard portable restrooms, one ADA-accessible unit when crew size triggered the requirement, and a separate hand washing station with potable water and soap.</p>
<p><strong>OSHA compliance, in plain English:</strong> at this crew size you need 2 units, hand wash provided, sex-separated if applicable, and serviced weekly at minimum. We document each service visit on the route sheet so the GC has an audit trail if an OSHA inspector ever walks the site.</p>`,
    image_url: `${IMG}/brower-inc-portable-restroom-construction-site-rental-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. portable restroom and hand washing station on a Ponca City commercial construction site",
    category: "Construction & OSHA",
    location: "Ponca City, OK",
    featured: false,
    gallery: [
      {
        url: `${IMG}/brower-inc-portable-restroom-construction-site-rental-newkirk-ok.webp`,
        alt: "Brower Inc. portable restroom on a Ponca City commercial construction site",
      },
      {
        url: `${IMG}/brower-inc-hand-washing-station-warehouse-newkirk-ok.webp`,
        alt: "Brower Inc. hand washing station — required OSHA equipment for construction sites",
      },
      {
        url: `${IMG}/brower-inc-technician-industrial-jobsite-portrait-newkirk-ok.webp`,
        alt: "Brower Inc. service technician on a northern Oklahoma jobsite",
      },
    ],
  },
  {
    slug: "rodeo-weekend-vip-trailer",
    title: "Rodeo Weekend VIP Trailer",
    description:
      "VIP restroom trailer placed in the sponsor and contestant area at a weekend rodeo in northern Oklahoma — full power, climate control, and on-call servicing.",
    content: `<p>Rodeo weekends are long, hot, and dusty. The event committee wanted a real restroom — not a row of standard units — in the sponsor and contestant area near the chutes. We delivered the VIP trailer Thursday afternoon, ran power and water tie-ins, and stayed on-call through Saturday's main event for any quick top-offs.</p>
<p><strong>What it included:</strong> climate-controlled VIP trailer with private stalls, mirrors and vanity area, and a Brower technician available by phone all weekend.</p>
<p><strong>Why the VIP trailer earns its keep at a rodeo:</strong> sponsors, contestants, and stock contractors are on-site for 12-hour days. A clean, cool restroom inside the trailer is something they remember about your event the next year.</p>`,
    image_url: `${IMG}/brower-inc-vip-trailer-rodeo-event-arena-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. VIP restroom trailer parked beside the arena at a northern Oklahoma rodeo",
    category: "Events & Rodeos",
    location: "Northern Oklahoma",
    featured: false,
    gallery: [
      {
        url: `${IMG}/brower-inc-vip-trailer-rodeo-event-arena-newkirk-ok.webp`,
        alt: "Brower Inc. VIP restroom trailer at a northern Oklahoma rodeo arena",
      },
      {
        url: `${IMG}/brower-inc-vip-shower-restroom-trailer-exterior-side-newkirk-ok.webp`,
        alt: "Side view of the Brower Inc. VIP shower restroom trailer",
      },
      {
        url: `${IMG}/brower-inc-vip-restroom-trailer-interior-vanity-stalls-newkirk-ok.webp`,
        alt: "Interior of the Brower Inc. VIP restroom trailer — vanity area and private stalls",
      },
    ],
  },
  {
    slug: "residential-septic-pumping-tonkawa",
    title: "Residential Septic Pumping — Tonkawa, OK",
    description:
      "Routine septic tank pumping for a residential customer in Tonkawa, including pre-pump inspection, sludge measurement, and a written service record for the homeowner's file.",
    content: `<p>This homeowner hadn't had the tank pumped in close to four years and was starting to see slow drains in the lowest fixtures — a textbook "pump now" sign. We arrived, located the lid, measured sludge depth, pumped to a clean baseline, and left a written service record with the next-recommended-service date.</p>
<p><strong>What it included:</strong> arrival within the scheduled two-hour window, full tank pump (sludge + scum + liquid), a quick visual baffle inspection, and a written record showing tank size, gallons removed, and the next recommended service date.</p>
<p><strong>Why we leave a paper record:</strong> homeowners forget when the last pump happened. The record sits in their house file and answers the question the next time an inspector or a buyer asks.</p>`,
    image_url: `${IMG}/brower-inc-septic-pumping-service-residential-wide-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. septic pump truck servicing a residential property in Tonkawa, Oklahoma",
    category: "Septic Services",
    location: "Tonkawa, OK",
    featured: false,
    gallery: [
      {
        url: `${IMG}/brower-inc-septic-pumping-service-residential-wide-newkirk-ok.webp`,
        alt: "Brower Inc. pump truck on a Tonkawa residential septic service call — wide view",
      },
      {
        url: `${IMG}/brower-inc-septic-pumping-service-residential-close-newkirk-ok.webp`,
        alt: "Brower Inc. technician working at a residential septic tank lid",
      },
      {
        url: `${IMG}/brower-inc-septic-pump-truck-rear-view-branded-newkirk-ok.webp`,
        alt: "Rear view of the branded Brower Inc. septic pump truck",
      },
    ],
  },
  {
    slug: "overnight-oil-gas-pad-service-osage-county",
    title: "Overnight Oil & Gas Pad Service — Osage County",
    description:
      "After-hours service call to swap and clean a portable restroom at an active drilling pad in Osage County — the kind of unscheduled work that keeps a 24/7 oilfield crew running.",
    content: `<p>The toolpusher called late afternoon — the unit at the pad had taken a beating during a long push and the night crew was about to roll in. We pulled the unit out, swapped in a clean one, hauled the original back to Newkirk for full cleaning, and were off-site before the crew change.</p>
<p><strong>What it included:</strong> after-hours dispatch from Newkirk, unit swap and removal, full clean and return-to-fleet at our yard, billed against the standing oilfield service agreement.</p>
<p><strong>Why oilfield service is different:</strong> drilling pads run 24/7. Your sanitation vendor has to run the same way. We carry inventory specifically to handle this call type without scrambling the daytime route.</p>`,
    image_url: `${IMG}/brower-inc-portable-restroom-night-service-call-newkirk-ok.webp`,
    image_alt:
      "Brower Inc. portable restroom being serviced after dark on an Osage County oil and gas pad",
    category: "Oil & Gas",
    location: "Osage County, OK",
    featured: false,
    gallery: [
      {
        url: `${IMG}/brower-inc-portable-restroom-night-service-call-newkirk-ok.webp`,
        alt: "Brower Inc. portable restroom being serviced at night on an Osage County oil and gas pad",
      },
      {
        url: `${IMG}/brower-inc-service-truck-portable-restroom-delivery-night-newkirk-ok.webp`,
        alt: "Brower Inc. service truck on a nighttime portable restroom call",
      },
      {
        url: `${IMG}/brower-inc-full-fleet-trucks-equipment-lineup-newkirk-ok.webp`,
        alt: "Full Brower Inc. fleet of service trucks and equipment lined up at the Newkirk yard",
      },
    ],
  },
  {
    slug: "newkirk-holiday-light-display",
    title: "Newkirk Holiday Light Display",
    description:
      "A bit of community fun — Brower Inc.'s holiday light display in Newkirk, on the lot the trucks roll out of every morning. Folks slow down, kids point, and that's the point.",
    content: `<p>A small-town sanitation company isn't supposed to be a holiday landmark, but here we are. Every December the lot gets lit, the trucks get tinsel, and people drive by slow with the kids in the back seat. It's the part of the job we don't put on the invoice.</p>
<p><strong>Why it's on the portfolio page:</strong> Brower Inc. is a Newkirk business first and a sanitation company second. If you're hiring us to handle your event, your jobsite, or your home septic, this is the same crew you'll see at the Christmas parade.</p>`,
    image_url: `${IMG}/brower-inc-christmas-holiday-display-fun-newkirk-ok.webp`,
    image_alt:
      "Brower Inc.'s holiday light display in Newkirk, Oklahoma — service trucks decorated for the season",
    category: "Community",
    location: "Newkirk, OK",
    featured: false,
    gallery: [
      {
        url: `${IMG}/brower-inc-christmas-holiday-display-fun-newkirk-ok.webp`,
        alt: "Brower Inc. holiday light display on the Newkirk yard",
      },
      {
        url: `${IMG}/brower-inc-company-dog-mascot-service-truck-newkirk-ok.webp`,
        alt: "Brower Inc. company dog mascot riding along on a service truck",
      },
    ],
  },
];

async function seed() {
  let inserted = 0;
  let updated = 0;
  let galleryRows = 0;
  let errors = 0;

  for (const item of PORTFOLIO) {
    const { gallery, ...itemFields } = item;

    // Upsert by slug
    const { data: existing } = await supabase
      .from("portfolio_items")
      .select("id")
      .eq("slug", itemFields.slug)
      .maybeSingle();

    let itemId;
    if (existing) {
      const { data, error } = await supabase
        .from("portfolio_items")
        .update({ ...itemFields, published: true })
        .eq("id", existing.id)
        .select("id")
        .single();
      if (error) {
        console.error(`  ✗ Update failed for ${itemFields.slug}:`, error.message);
        errors++;
        continue;
      }
      itemId = data.id;
      updated++;
      console.log(`  ↻ Updated: ${itemFields.title}`);
    } else {
      const { data, error } = await supabase
        .from("portfolio_items")
        .insert({ ...itemFields, published: true })
        .select("id")
        .single();
      if (error) {
        console.error(`  ✗ Insert failed for ${itemFields.slug}:`, error.message);
        errors++;
        continue;
      }
      itemId = data.id;
      inserted++;
      console.log(`  ✓ Inserted: ${itemFields.title}`);
    }

    // Rebuild gallery for this item (delete + insert keeps it idempotent)
    await supabase.from("portfolio_images").delete().eq("portfolio_item_id", itemId);

    if (gallery && gallery.length) {
      const rows = gallery.map((g, i) => ({
        portfolio_item_id: itemId,
        image_url: g.url,
        image_alt: g.alt,
        sort_order: i,
      }));
      const { error: gErr } = await supabase.from("portfolio_images").insert(rows);
      if (gErr) {
        console.error(`  ✗ Gallery insert failed for ${itemFields.slug}:`, gErr.message);
        errors++;
      } else {
        galleryRows += rows.length;
      }
    }
  }

  console.log("");
  console.log("Done.");
  console.log(`  Inserted: ${inserted}`);
  console.log(`  Updated:  ${updated}`);
  console.log(`  Gallery rows: ${galleryRows}`);
  console.log(`  Errors: ${errors}`);
  if (errors > 0) process.exit(1);
}

seed().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
