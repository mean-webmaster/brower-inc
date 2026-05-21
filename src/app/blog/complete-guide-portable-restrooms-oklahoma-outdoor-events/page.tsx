import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { IMAGES } from "@/lib/images";
import { PHONE } from "@/lib/constants";
import {
  getArticleSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  jsonLdString,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "The Complete Guide to Portable Restrooms for Oklahoma Outdoor Events",
  description:
    "The complete Oklahoma event-planner's guide to portable restroom rental — unit count, placement, servicing, alcohol & weather adjustments, luxury trailers, ADA, pricing, and a 12-week booking timeline. Real Oklahoma venues.",
  alternates: {
    canonical:
      "/blog/complete-guide-portable-restrooms-oklahoma-outdoor-events",
  },
  openGraph: {
    title:
      "The Complete Guide to Portable Restrooms for Oklahoma Outdoor Events",
    description:
      "Every formula, every Oklahoma adjustment, every common mistake — the complete planner's playbook for outdoor event sanitation.",
    type: "article",
    url: "/blog/complete-guide-portable-restrooms-oklahoma-outdoor-events",
    images: [
      {
        url: "/images/brower-inc-complete-guide-portable-restrooms-oklahoma-outdoor-events-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Brower Inc. luxury restroom trailer with two blue porta potties beside a white wedding tent at an Oklahoma outdoor venue at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Complete Guide to Portable Restrooms for Oklahoma Outdoor Events",
    description:
      "Every formula, every Oklahoma adjustment, every common mistake — the complete planner's playbook for outdoor event sanitation.",
    images: [
      "/images/brower-inc-complete-guide-portable-restrooms-oklahoma-outdoor-events-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question:
      "How many porta potties do I need for an outdoor event in Oklahoma?",
    answer:
      "The default Oklahoma event formula is 1 standard porta potty per 50 guests for a 4-hour event with no alcohol, 1 hand washing station per 4 toilet units, and at least 1 ADA-accessible unit at any public event. Add 30–50% more units if alcohol is served, +10–15% in Oklahoma summer heat (more hydration = more use), and one extra unit per additional 100 guests for every additional 4 hours beyond the first 4.",
  },
  {
    question:
      "How far in advance should I book event porta potties in Oklahoma?",
    answer:
      "For peak Oklahoma wedding and festival season (April through October), book 8 to 12 weeks in advance. Off-peak (November–February), 2 to 4 weeks is usually enough. For VIP luxury restroom trailers — Brower Inc. operates only 2 trailers — 12 to 16 weeks is recommended, especially for weekend dates between May and October. Last-minute booking is sometimes possible via the 24/7 emergency dispatch at (580) 747-6206.",
  },
  {
    question:
      "Do outdoor weddings really need ADA-accessible portable restrooms?",
    answer:
      "Yes — and most planners underestimate this. The ADA Title III standard applies to events open to the public, and even at private weddings, elderly guests, pregnant guests, parents with small children, and guests with temporary mobility issues (an injury, a cast, a cane) all benefit from ADA units. Brower Inc. defaults to at least one ADA-accessible unit at any wedding of 50+ guests — it's also the de facto family-friendly unit.",
  },
  {
    question:
      "What's the difference between a standard porta potty, a deluxe flushable, and a luxury restroom trailer?",
    answer:
      "Standard porta potties are single-stall stand-alone units with no running water — right for casual outdoor events, festivals, and worksites ($125–$250/event). Deluxe flushable porta potties add a hands-free foot-pump flush and a built-in sink with fresh water and soap, in a roomier interior — right for mid-tier weddings and corporate events ($250–$400/event). Luxury VIP restroom trailers are multi-stall climate-controlled trailers with private flushing stalls, vanity countertops, mirrors, running water, and LED lighting — right for upscale weddings, galas, and corporate events ($800–$2,500/event).",
  },
  {
    question:
      "How much does it cost to rent porta potties for an Oklahoma wedding?",
    answer:
      "A typical 100-guest, 5-hour wedding with bar service in Oklahoma runs $400–$800 for 3 standard porta potties + 1 ADA unit + 1 hand washing station, or $1,200–$2,800 for a luxury VIP restroom trailer with paired porta potties. Pricing varies by distance from Newkirk, OK (Brower Inc.'s base), delivery day, and whether on-site attendant service is added. See the full breakdown in our Oklahoma porta potty pricing guide.",
  },
  {
    question:
      "Do I need to provide porta potties at a backyard wedding or small private event?",
    answer:
      "If your venue has fewer indoor bathrooms than 1 per 25 guests, yes — backyard weddings with 50+ guests almost always need at least 1–2 outdoor units to prevent line build-up. House toilets also can't handle 100 flushes in 4 hours without septic stress, especially for properties on rural septic systems. A single Brower Inc. porta potty + a hand washing station is usually under $250 and saves the home plumbing.",
  },
  {
    question:
      "Where should portable restrooms be placed at an outdoor event?",
    answer:
      "Place units 50–100 feet from food and bar areas (close enough to be convenient, far enough that guests don't smell or see them while eating), on level ground, downwind of the main event area, and clearly visible from the reception/main gathering space. Avoid placing them under trees that drop sap or fruit, on slopes, or directly in sight of ceremony or photo areas. Brower Inc.'s delivery team will walk the venue and recommend placement free as part of every event quote.",
  },
  {
    question:
      "What if it rains, gets windy, or freezes during my Oklahoma event?",
    answer:
      "Brower Inc. anchors every unit at exposed outdoor venues to handle 50+ mph wind gusts common in Oklahoma. In Oklahoma summer heat (June–September), we recommend twice-weekly servicing or mid-event refresh for multi-day events. For shoulder-season outdoor events in November or February, we add winter additives to the holding tank to prevent freeze-up. For active severe weather (tornado watch, ice storm), call (580) 747-6206 — our 24/7 emergency dispatch handles relocations, replacements, and storm response.",
  },
  {
    question:
      "Are luxury restroom trailers worth the upgrade over standard porta potties?",
    answer:
      "For weddings, galas, corporate events, and any event where guest experience is part of the brand promise — yes. The 18-station Brower Inc. VIP trailer is climate-controlled, has running water at private flushing stalls, vanity counters with full-size mirrors, LED lighting, and a guest experience that feels like an indoor hotel bathroom. For festivals, outdoor concerts, construction events, and any event where 'good enough' is the standard, regular porta potties cost a fraction of the price and do the job. The cost difference is roughly 5–10× per unit.",
  },
  {
    question:
      "Does Brower Inc. deliver to rural Oklahoma event venues?",
    answer:
      "Yes — rural venue delivery is a Brower Inc. specialty. We regularly deliver to weddings at ranch venues, farm barns, lake properties, vineyard sites, and unmarked rural addresses across our 20-county service area in north-central Oklahoma and southern Kansas. National providers route 'near me' searches to call centers that won't service rural addresses — we live and dispatch out of Newkirk and our trucks navigate farm roads, ranch gates, and unpaved driveways daily.",
  },
  {
    question:
      "What's included in the price of an event porta potty rental?",
    answer:
      "Every Brower Inc. event rental includes free delivery within our 20-county service area, professional placement (we walk the venue with you or your planner), interior sanitization at install (every unit arrives spotless and fully stocked with toilet paper, hand sanitizer, paper towels), end-of-event pickup, and a single mid-event service for events running longer than 6 hours or with 200+ guests. There are no surprise add-ons — the quoted price is the invoice.",
  },
];

const TOC_ITEMS = [
  { id: "quick-formula", label: "The Oklahoma Event Restroom Formula" },
  { id: "guest-count", label: "Step 1: Calculate Your Guest Count" },
  { id: "unit-types", label: "Step 2: Pick Your Unit Mix" },
  { id: "adjustments", label: "Step 3: Apply Oklahoma Adjustments" },
  { id: "placement", label: "Step 4: Plan Placement" },
  { id: "servicing", label: "Step 5: Decide on Mid-Event Servicing" },
  { id: "booking-timeline", label: "Step 6: Book on the Right Timeline" },
  { id: "pricing", label: "Pricing — What an Oklahoma Event Actually Costs" },
  { id: "venues", label: "Oklahoma Venue Considerations" },
  { id: "examples", label: "Real Oklahoma Event Examples" },
  { id: "mistakes", label: "7 Mistakes That Ruin Event Sanitation" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Complete Guide to Portable Restrooms for Oklahoma Outdoor Events",
    href: "/blog/complete-guide-portable-restrooms-oklahoma-outdoor-events",
  },
];

export default function CompleteGuidePortableRestroomsOklahomaEventsPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "The Complete Guide to Portable Restrooms for Oklahoma Outdoor Events",
              description:
                "The complete Oklahoma event-planner's guide to portable restroom rental — unit count, placement, servicing, alcohol & weather adjustments, luxury trailers, ADA, pricing, and a 12-week booking timeline.",
              slug: "complete-guide-portable-restrooms-oklahoma-outdoor-events",
              datePublished: "2026-05-18",
              dateModified: "2026-05-19",
              image:
                "https://browerinc.net/images/brower-inc-complete-guide-portable-restrooms-oklahoma-outdoor-events-blog-cover-newkirk-ok.webp",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(getFAQSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(getBreadcrumbSchema(BREADCRUMBS)),
        }}
      />

      <Breadcrumbs items={BREADCRUMBS} />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Events, Weddings &amp; Gatherings
            </span>
            <time dateTime="2026-05-18">May 18, 2026</time>
            <span>15 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            The Complete Guide to Portable Restrooms for Oklahoma Outdoor
            Events
          </h1>

          <Image
            src={IMAGES.blogCoverCompleteGuideEvents}
            alt="Brower Inc. luxury restroom trailer with two blue porta potties beside a white wedding tent at an Oklahoma outdoor venue at golden hour"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          <div className="prose mt-8 max-w-none">
            {/* HOOK */}
            <p className="text-lg text-gray-700 leading-relaxed">
              The fastest way to ruin an otherwise perfect Oklahoma outdoor
              wedding, festival, or family reunion is a 20-minute line at the
              restrooms during the toast. The math behind preventing it is
              not complicated — but every Oklahoma planner we work with gets
              one of four numbers wrong: the count, the alcohol multiplier,
              the heat multiplier, or the placement. This guide closes all
              four.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ve delivered portable restrooms to thousands of Oklahoma
              outdoor events — weddings at Marland Mansion, rodeos at the Kay
              County Fairgrounds, music festivals in Stillwater, vineyard
              receptions in Cowley County, ranch reunions in Osage County. Every
              formula, multiplier, and venue tip below is what we&apos;ve learned
              actually works in the Oklahoma climate and on Oklahoma rural
              roads. Print it, save it, send it to your planner.
            </p>

            {/* QUICK ANSWER */}
            <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                The base Oklahoma event formula is{" "}
                <strong>
                  1 portable restroom per 50 guests for a 4-hour event
                </strong>
                , <strong>1 hand washing station per 4 toilet units</strong>,
                and <strong>at least 1 ADA-accessible unit</strong> on any
                event of 50+ guests. Multiply the unit count by{" "}
                <strong>1.3–1.5×</strong> if you&apos;re serving alcohol,{" "}
                <strong>1.1×</strong> in Oklahoma summer heat, and add{" "}
                <strong>one extra unit per 100 guests per extra 4 hours</strong>{" "}
                beyond the first 4. Book{" "}
                <strong>8–12 weeks ahead</strong> for peak season (April–
                October).
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Want us to plan the exact unit count and placement for your
                Oklahoma event?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Tell us guest count, hours, alcohol, venue, and date.
                We&apos;ll send back a complete unit plan — standard porta
                potties, ADA, hand wash, luxury trailer if you want it — with
                placement, servicing schedule, and a flat-rate quote in
                writing, usually within the hour.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get Your Free Event Plan →
              </Link>
            </div>

            {/* H2: QUICK FORMULA */}
            <h2
              id="quick-formula"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Oklahoma Event Restroom Formula
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here&apos;s the entire formula in three lines. Everything else in
              this guide is the &quot;why&quot; behind it and the edge cases.
            </p>
            <div className="mt-6 rounded-xl bg-gray-50 border-l-4 border-primary p-6 font-mono text-sm leading-relaxed text-gray-800">
              <p>
                <strong>BASE:</strong>{" "}
                <code>guests ÷ 50 × (event_hours ÷ 4)</code> = standard units
              </p>
              <p className="mt-2">
                <strong>ADJUSTMENTS:</strong>{" "}
                <code>× 1.4 if alcohol</code>{" "}
                <code>× 1.1 if Oklahoma summer</code>{" "}
                <code>+ 1 ADA unit always</code>
              </p>
              <p className="mt-2">
                <strong>HAND WASH:</strong>{" "}
                <code>1 station per 4 toilet units</code>
              </p>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The rest of this guide walks through every input — guest count,
              unit type, placement, mid-event service, booking timeline, and
              pricing — so you can plug in real numbers for your specific
              Oklahoma event.
            </p>

            {/* H2: GUEST COUNT */}
            <h2
              id="guest-count"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Step 1: Calculate Your Guest Count (Honestly)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The number we want is{" "}
              <strong>peak concurrent guests</strong>, not total RSVPs. For a
              wedding that&apos;s usually the reception headcount. For a
              festival or rodeo it&apos;s your single-day peak attendance, not
              cumulative ticket sales. For a corporate retreat or family
              reunion, it&apos;s the all-hands gathering window, not the trickle
              of arrivals across the day.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Common counting mistakes that lead to under-buying units:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Forgetting the vendor and staff headcount.</strong> A
                100-guest wedding usually adds 20–30 vendors and staff who use
                the same units.
              </li>
              <li>
                <strong>Counting only adult tickets.</strong> Children use
                restrooms more often than adults during a 4-hour window, not
                less — and family-friendly events skew heavily on volume.
              </li>
              <li>
                <strong>Ignoring shoulder hours.</strong> A wedding that
                technically runs ceremony 4–4:30, reception 5–10 still draws
                full-pressure restroom use from 4:30–11:30.
              </li>
              <li>
                <strong>Trusting the venue&apos;s indoor count.</strong> A
                venue claiming 4 indoor toilets at a 150-guest wedding still
                needs at least 1–2 outdoor units to prevent reception-hour
                lines.
              </li>
            </ul>

            {/* H2: UNIT TYPES */}
            <h2
              id="unit-types"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Step 2: Pick Your Unit Mix
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. operates four unit categories that show up at
              Oklahoma outdoor events. The right mix depends on your event
              tier, your guest demographics, and your budget.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Unit Type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Best For
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Event-Day Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/portable-restrooms"
                        className="text-primary hover:underline"
                      >
                        Standard Maxim 300
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Festivals, rodeos, casual outdoor events, family
                      reunions, budget weddings
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $125–$250 / event
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/ada-compliant-portable-restrooms"
                        className="text-primary hover:underline"
                      >
                        ADA-Accessible
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Required at any 50+ guest event; doubles as
                      family-friendly unit
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $200–$275 / event
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/deluxe-flushable-portable-toilets"
                        className="text-primary hover:underline"
                      >
                        Deluxe Flushable
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Mid-tier weddings, corporate retreats, fundraisers —
                      hands-free flush + built-in sink
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $250–$400 / event
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/vip-shower-restroom-trailers"
                        className="text-primary hover:underline"
                      >
                        VIP Luxury Trailer (18-station)
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Upscale weddings, galas, large corporate events,
                      celebrity-attended events
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $800–$2,500 / event
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/hand-washing-stations"
                        className="text-primary hover:underline"
                      >
                        Hand Washing Station
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Pair with every 4 toilet units; required at food
                      service
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $75–$150 / event
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              For more on the side-by-side trade-off between a standard porta
              potty and a luxury trailer, see our{" "}
              <Link
                href="/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma"
                className="text-primary hover:underline"
              >
                porta potty vs. luxury trailer comparison
              </Link>
              .
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              When to upgrade to the VIP trailer (and when not to)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Upgrade if:</strong> you&apos;re hosting an upscale
              wedding (250+ guests, bar service, formal attire), a corporate
              gala or fundraiser where guest experience is part of the brand,
              or a multi-day event where guests need shower facilities (the
              VIP trailer includes shower stalls). For these, the 18-station
              capacity covers 200–400 guests on its own.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>Stick with standard if:</strong> your event is casual,
              budget-conscious, or rural-themed (a ranch wedding, a
              ranch-style reception with country décor), or if your event is
              under 100 guests with a 3–4 hour timeline. Standard porta
              potties are clean, modern, and unobtrusive when delivered fresh
              by Brower Inc. — the guest experience is much better than the
              stereotype suggests.
            </p>

            {/* H2: ADJUSTMENTS */}
            <h2
              id="adjustments"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Step 3: Apply Oklahoma Adjustments
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The base formula assumes a 4-hour event, no alcohol, mild
              weather. Real Oklahoma outdoor events almost never fit that
              profile. Apply these multipliers in order:
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Condition
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Adjustment
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Beer / wine / cocktails served
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      × 1.3 – 1.5
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Hourly use rate doubles after the second drink
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Open bar (vs. cash bar)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">× 1.5</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Open bar → higher drink consumption → higher restroom
                      use
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Oklahoma summer (June–September)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">× 1.1</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Heat drives more hydration which drives more restroom
                      use
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Event longer than 4 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      +1 unit per 100 guests per extra 4 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Even pace of usage extends total volume
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Children-heavy event (60%+ kids)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">× 1.2</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Kids use restrooms more often than adults
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Cold weather (under 50°F)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">× 1.1</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Cold drives more restroom use (counterintuitive but
                      well-documented)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Public event (vs. private wedding)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">× 1.1</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Public events draw demographics with higher restroom
                      variance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>Stacking rule:</strong> apply multipliers cumulatively
              — an open-bar wedding in July at a public venue would multiply
              by 1.5 × 1.1 × 1.1 = 1.815, so a base of 4 units becomes 8.
              Round up.
            </p>

            {/* H2: PLACEMENT */}
            <h2
              id="placement"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Step 4: Plan Placement
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Where you put the units matters almost as much as how many you
              order. The right placement is invisible and the wrong placement
              becomes the thing guests talk about.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>50–100 feet from food and bar areas.</strong> Close
                enough to be convenient, far enough that guests don&apos;t see
                or smell units while they eat.
              </li>
              <li>
                <strong>Downwind of the main event area.</strong> Check the
                Oklahoma prevailing wind direction (typically south to north in
                summer, north to south in winter). Place units downwind of the
                ceremony, ceremony seating, and bar.
              </li>
              <li>
                <strong>Out of the photographer&apos;s sight lines.</strong>{" "}
                Walk the ceremony aisle, the first-dance floor, and the major
                photo spots. Place units somewhere these lines don&apos;t
                intersect.
              </li>
              <li>
                <strong>Level, well-drained ground.</strong> No slopes, no soft
                grass, no soggy lawn. A wedding rain plan must include unit
                relocation if the ground softens.
              </li>
              <li>
                <strong>Lit at night.</strong> Outdoor events extending past
                sunset need string lights, ground lighting, or torch lighting
                directing guests to the units. Brower Inc. units have ambient
                interior lighting but guests need a clear path.
              </li>
              <li>
                <strong>Cluster, don&apos;t scatter.</strong> A single cluster
                of 4 units beats 4 scattered units — guests find them faster,
                lines self-balance, and your servicing crew works one location.
              </li>
              <li>
                <strong>Mark them on the venue map.</strong> Print or email a
                simple venue diagram showing restroom locations to your
                planner and the venue manager.
              </li>
            </ul>

            {/* H2: SERVICING */}
            <h2
              id="servicing"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Step 5: Decide on Mid-Event Servicing
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most Oklahoma outdoor events under 4 hours don&apos;t need
              mid-event servicing — Brower Inc. delivers spotless, fully
              stocked units, and that holds for the event window. But these
              scenarios benefit from a mid-event refresh:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Multi-day events</strong> (rodeos, music festivals,
                weekend church gatherings, ranch reunions running Friday
                through Sunday)
              </li>
              <li>
                <strong>6+ hour single-day events</strong> with 100+ guests
              </li>
              <li>
                <strong>Festivals over 200 attendees</strong>
              </li>
              <li>
                <strong>Hot Oklahoma summer events</strong> where heat
                accelerates odor and tank-pressure issues
              </li>
              <li>
                <strong>Bar-heavy weddings</strong> where unit use is double
                the baseline
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Mid-event service includes pumping the waste tank, restocking
              toilet paper / hand sanitizer / paper towels, full interior
              sanitization, and a damage check. We schedule it during a
              low-traffic moment in your event (between ceremony and reception
              for weddings, between sets for music festivals, during a meal
              service for galas) so guests don&apos;t notice.
            </p>

            {/* H2: BOOKING TIMELINE */}
            <h2
              id="booking-timeline"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Step 6: Book on the Right Timeline
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Oklahoma&apos;s peak wedding and festival season runs April
              through October. Brower Inc. operates only 2 luxury VIP
              trailers, so for premium dates between May and October those
              book out 12–16 weeks in advance. Standard porta potties have
              more inventory but still book out on Saturday peaks.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Event Type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Recommended Booking Window
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Upscale wedding with VIP trailer (peak season)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      12–16 weeks
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Standard wedding (50–200 guests, peak season)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      8–12 weeks
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Festival, rodeo, large public event
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      8–12 weeks
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Corporate retreat, family reunion (50–150 guests)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4–8 weeks
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Off-peak (Nov–Feb) standard event
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      2–4 weeks
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Emergency / same-day (24/7 dispatch)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Call {PHONE}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* H2: PRICING */}
            <h2
              id="pricing"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Pricing — What an Oklahoma Event Actually Costs
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              All Brower Inc. prices below are 2026 Oklahoma flat-rate quotes,
              inclusive of delivery within our 20-county service area, install
              placement, full sanitization, end-of-event pickup, and toilet
              paper / hand sanitizer / paper towel stock. There are no
              surprise add-ons.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Event Profile
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical Setup
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Total Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Backyard BBQ — 50 guests, 4 hours, no alcohol
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 standard + 1 hand wash
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $200–$350
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Wedding — 100 guests, 5 hours, bar service
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      3 standard + 1 ADA + 1 hand wash
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $700–$1,200
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Upscale wedding — 200 guests, 6 hours, open bar
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      VIP trailer + 2 ADA porta potties + 1 hand wash
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $1,800–$3,200
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Corporate gala — 350 guests, indoor + outdoor, 5 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      VIP trailer + 3 deluxe flushable + 2 hand wash
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $2,800–$4,500
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Outdoor festival — 500 attendees, 6 hours, food service
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      10 standard + 1 ADA + 3 hand wash + mid-event service
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $2,000–$3,500
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Multi-day rodeo / fair — 2,000 attendees per day, 3 days
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      30 standard + 4 ADA + 8 hand wash + twice-daily service
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Custom quote — call {PHONE}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              For the full pricing model — what changes a quote, the
              six factors that move the final number, and the difference
              between event-day rates and long-term construction rates — see
              our{" "}
              <Link
                href="/blog/porta-potty-rental-cost-oklahoma"
                className="text-primary hover:underline"
              >
                2026 Oklahoma porta potty pricing guide
              </Link>
              .
            </p>

            {/* H2: VENUES */}
            <h2
              id="venues"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Oklahoma Venue Considerations
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ve delivered to most major outdoor venues across our
              service area. Each presents unique considerations:
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Ranch and farm venues (Kay, Osage, Garfield, Noble counties)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Long gravel or dirt driveways, gate codes, no signage. Tell us
              the gate code in advance and confirm the access track can
              accommodate our delivery truck (most can — we navigate cattle
              guards and dirt drives daily). Expect 30 minutes of buffer time
              for rural deliveries.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Lake venues (Kaw Lake, Sooner Lake, Lake Ponca)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Recreation areas vary in vehicle access — confirm with the Army
              Corps office or lake management before booking. Units placed at
              campgrounds need anchoring (lake winds are no joke), and
              shoreline placement requires drainage assessment.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Historic venues (Marland Mansion, county courthouses, museums)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Many historic sites require approval before any temporary
              structures, including porta potties. Coordinate with the venue
              steward and provide placement maps in advance. Some venues
              require luxury trailer setups only — call {PHONE} and we&apos;ll
              confirm what each specific venue accepts.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              City parks and municipal venues
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Most Oklahoma city parks require a permit for events of 50+
              attendees, which typically specifies portable restroom counts.
              Brower Inc. has worked with most municipal permitting offices
              across our service area — we can advise on what your specific
              city requires.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Vineyard and barn venues
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Increasingly popular for upscale Oklahoma weddings — vineyard
              and converted-barn venues usually have limited indoor restrooms,
              which makes outdoor units mandatory. Most fit a luxury trailer
              + standard units cleanly; placement is the main consideration
              (out of camera lines, downwind).
            </p>

            {/* H2: EXAMPLES */}
            <h2
              id="examples"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Real Oklahoma Event Examples
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Three composite examples from real Brower Inc. deployments
              every season:
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Example A — 120-guest ranch wedding, Osage County, June
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Setup:</strong> 3 standard porta potties + 1 ADA + 1
              hand washing station. <strong>Math:</strong> 120 ÷ 50 × (5 ÷ 4) ×
              1.4 (alcohol) × 1.1 (summer) = 4.6 → round to 5. Mix is 4
              toilet-equivalent units + ADA + hand wash to keep it
              presentable. <strong>Cost:</strong> ~$850 flat. Delivered Friday
              afternoon, picked up Sunday morning, no mid-event service
              (5-hour window, manageable).
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Example B — 280-guest gala wedding, Marland Mansion, October
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Setup:</strong> 1 VIP luxury restroom trailer (18-station)
              + 1 ADA-accessible portable + 1 hand washing station.{" "}
              <strong>Math:</strong> 280 guests × 6-hour reception with open
              bar — the trailer&apos;s 18 stations cover the entire reception
              with zero line at peak. The ADA portable handles guests with
              mobility needs. Hand wash placed near the catering tent.{" "}
              <strong>Cost:</strong> ~$2,650 flat. Delivered Friday for
              Saturday event, picked up Sunday.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Example C — 800-attendee summer music festival, Ponca City, July
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Setup:</strong> 14 standard porta potties + 2
              ADA-accessible + 4 hand washing stations + twice-daily
              mid-event service across the festival weekend.{" "}
              <strong>Math:</strong> 800 ÷ 50 × (8 ÷ 4) × 1.1 (summer) × 1.1
              (public event) = 38.7 → bumped to 16 units (we cluster, plus
              we&apos;re running multiple service refreshes which compresses
              line pressure). <strong>Cost:</strong> Custom multi-day quote
              with on-site servicing crew.
            </p>

            {/* H2: MISTAKES */}
            <h2
              id="mistakes"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              7 Mistakes That Ruin Event Sanitation
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Trusting the venue&apos;s indoor toilet count.</strong>{" "}
                4 indoor toilets cannot handle 150 guests during the
                first-dance-to-cake window. Always add outdoor units.
              </li>
              <li>
                <strong>Skipping the alcohol multiplier.</strong> A 100-guest
                wedding with bar service needs 4 units, not 2. Skipping the
                multiplier creates 20-minute lines during the toast.
              </li>
              <li>
                <strong>Placing units in photo sight lines.</strong> Wedding
                photographers swear at hosts who placed porta potties behind
                the ceremony arch. Walk every camera angle before placement.
              </li>
              <li>
                <strong>Forgetting the hand washing stations.</strong> Guests
                notice. Hand sanitizer alone doesn&apos;t cut it for a
                wedding — pair every 4 toilet units with a station.
              </li>
              <li>
                <strong>Booking too late for peak season.</strong> June
                Saturdays in Oklahoma book out 4 months ahead. October
                vineyard weddings are even tighter.
              </li>
              <li>
                <strong>No ADA unit at a public event.</strong> Beyond the
                ADA compliance question, you&apos;ll have guests with elderly
                relatives or pregnant attendees who quietly suffer or quietly
                leave.
              </li>
              <li>
                <strong>No lighting path to the units after dark.</strong>{" "}
                Brower Inc. units have interior lighting, but guests need to
                find them in the dark. Add string lights or torches on the
                walking path.
              </li>
            </ol>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Plan your Oklahoma event sanitation in one phone call."
                description={`Tell us guest count, hours, alcohol, venue, and date — we'll send back a complete unit plan with placement, servicing schedule, and a flat-rate quote in writing. Call ${PHONE} or use the form for a free event plan, usually within the hour.`}
              />
            </div>

            {/* FAQ */}
            <h2
              id="faq"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>

            {/* CLOSING */}
            <h2 className="mt-12 text-2xl font-bold text-gray-900">
              The Best Outdoor Events in Oklahoma Have Sanitation You
              Don&apos;t Have to Think About
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every wedding, festival, gala, and rodeo we&apos;ve worked has
              taught us the same thing: guests notice when sanitation
              fails, never when it succeeds. The goal of this entire guide is
              to make sure your event lands in the second column —
              invisible, clean, plenty of capacity, and zero crisis on the
              day-of.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. has done this for Oklahoma planners and hosts for
              nearly two decades. Locally owned in Newkirk, 640+ unit fleet
              dispatched from a single hub, two luxury VIP trailers, and 24/7
              event-week emergency support. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a free event plan
              </Link>{" "}
              and you&apos;ll have a flat-rate proposal in writing — usually
              within the hour.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
