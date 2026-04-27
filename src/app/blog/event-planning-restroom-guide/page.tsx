import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { IMAGES } from "@/lib/images";
import { PHONE } from "@/lib/constants";
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, jsonLdString } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "How Many Portable Restrooms for an Outdoor Event? (2025 Calculator Guide)",
  description:
    "Quick-reference chart for portable restroom counts at weddings, festivals, rodeos, and outdoor events in Oklahoma. Covers guest count, duration, alcohol, VIP upgrades, and booking timelines.",
  alternates: { canonical: "/blog/event-planning-restroom-guide" },
};

const FAQS = [
  {
    question:
      "How many portable restrooms do I need for a 200-person outdoor wedding?",
    answer:
      "For a 200-guest wedding lasting 4–6 hours with alcohol served, plan on 6–8 standard portable restrooms or 1–2 VIP restroom trailers (each trailer replaces 4–6 standard units). If the venue has some permanent restrooms, you can reduce the portable count — but never rely solely on indoor facilities for outdoor events.",
  },
  {
    question:
      "Should I rent standard porta potties or VIP trailers for my event?",
    answer:
      "It depends on the event tone. Weddings, corporate galas, and upscale private parties almost always benefit from VIP restroom trailers — guests expect climate control, running water, and mirrors. Rodeos, community festivals, sporting events, and casual backyard parties are well-served by clean standard units. Many organizers mix both: VIP trailers near the main gathering area and standard units near parking or perimeter areas.",
  },
  {
    question: "When should I book portable restrooms for my event?",
    answer:
      "Book at least 2–4 weeks in advance for most events. For peak season (May–September) weddings and festivals in Oklahoma, book 4–8 weeks ahead — inventory gets tight fast. Last-minute requests (under 1 week) can often still be fulfilled by Brower Inc. since we operate a 640+ unit fleet, but availability is never guaranteed during rodeo season and holiday weekends.",
  },
  {
    question: "How does alcohol affect the number of restrooms I need?",
    answer:
      "Alcohol increases restroom usage by 20–30%. Beer and mixed drinks cause the highest increase because of volume consumed. A 150-guest event without alcohol might need 3–4 units, but the same event with an open bar should plan for 5–6. This is the single most under-estimated factor in event restroom planning.",
  },
  {
    question: "Where should portable restrooms be placed at an event?",
    answer:
      "Place them within a 1–2 minute walk of the main gathering area — close enough for convenience but not so close that they dominate the view. Position them downwind of seating and food areas, on level ground with clear paths for guests and service truck access. For weddings, many planners screen units behind lattice panels or fabric draping.",
  },
  {
    question: "Do I need hand washing stations at my event?",
    answer:
      "If food is being served, yes — most Oklahoma county health departments require hand washing facilities at events with food vendors. Even without a requirement, hand washing stations dramatically improve guest satisfaction. Brower Inc. pairs portable hand washing stations with every event rental on request.",
  },
  {
    question:
      "What does it cost to rent portable restrooms for a weekend event in Oklahoma?",
    answer:
      "Standard portable restroom event rentals in Oklahoma typically run $100–$200 per unit for a weekend (delivery, pickup, and one cleaning included). VIP restroom trailers range from $800–$2,500 per event depending on size and features. For exact pricing based on your guest count and event type, call Brower Inc. at (580) 747-6206.",
  },
  {
    question:
      "What happens if we run out of restroom capacity during the event?",
    answer:
      "Long lines frustrate guests and create sanitation issues — overflowing units are the number one complaint at outdoor events. This is why we recommend the 'recommended' column in our chart rather than the bare minimum. Adding one extra unit costs $100–$150 and eliminates the risk of a sanitation failure that guests will remember longer than the event itself.",
  },
];

const TOC_ITEMS = [
  { id: "quick-reference", label: "Quick Reference Chart" },
  { id: "factors", label: "Factors That Change Your Count" },
  { id: "event-types", label: "Recommendations by Event Type" },
  { id: "vip-vs-standard", label: "VIP Trailers vs. Standard Units" },
  { id: "placement", label: "Where to Place Units" },
  { id: "booking-timeline", label: "When to Book" },
  { id: "faq", label: "FAQ" },
];

export default function EventPlanningRestroomGuidePage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "How Many Portable Restrooms Do You Need for an Outdoor Event?",
              description:
                "Quick-reference chart for portable restroom counts at weddings, festivals, rodeos, and outdoor events in Oklahoma. Covers guest count, duration, alcohol, VIP upgrades, and booking timelines.",
              slug: "event-planning-restroom-guide",
              datePublished: "2025-02-10",
            })
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
          __html: jsonLdString(
            getBreadcrumbSchema([
              { name: "Blog", href: "/blog" },
              {
                name: "Event Restroom Guide",
                href: "/blog/event-planning-restroom-guide",
              },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          {
            name: "Event Restroom Guide",
            href: "/blog/event-planning-restroom-guide",
          },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Event Planning
            </span>
            <time dateTime="2025-02-10">February 10, 2025</time>
            <span>10 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            How Many Portable Restrooms Do You Need for an Outdoor Event? The
            Complete Oklahoma Guide
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            The difference between &ldquo;great event&rdquo; and &ldquo;never
            going back&rdquo; often comes down to restrooms. Here is exactly how
            many portable restrooms your Oklahoma wedding, festival, rodeo, or
            corporate event needs — plus the factors most planners forget.
          </p>

          <Image
            src={IMAGES.portableRestroomLineup}
            alt="Row of clean Brower Inc. portable restrooms lined up and ready for an outdoor event in Oklahoma"
            width={800}
            height={400}
            className="mt-6 h-64 w-full rounded-xl object-cover sm:h-80"
            priority
          />

          {/* ─── Quick Reference Chart ─────────────────────────────────────── */}
          <h2
            id="quick-reference"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Portable Restroom Quick Reference Chart
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Use this chart as your starting point. The &ldquo;minimum&rdquo;
            column keeps you functional. The &ldquo;recommended&rdquo; column
            keeps your guests comfortable and prevents lines.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Guests
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    4-Hour Event (min)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    4-Hour (recommended)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    8-Hour Event (min)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    8-Hour (recommended)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-900 font-medium">50</td>
                  <td className="px-4 py-3 text-gray-600">1</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">2</td>
                  <td className="px-4 py-3 text-gray-600">2</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">3</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-900 font-medium">100</td>
                  <td className="px-4 py-3 text-gray-600">2</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">3</td>
                  <td className="px-4 py-3 text-gray-600">4</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">5</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900 font-medium">200</td>
                  <td className="px-4 py-3 text-gray-600">4</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">6</td>
                  <td className="px-4 py-3 text-gray-600">7</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">9</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-900 font-medium">500</td>
                  <td className="px-4 py-3 text-gray-600">10</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">13</td>
                  <td className="px-4 py-3 text-gray-600">15</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">20</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    1,000
                  </td>
                  <td className="px-4 py-3 text-gray-600">20</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">25</td>
                  <td className="px-4 py-3 text-gray-600">30</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">40</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
            <p className="text-sm font-semibold text-gray-900">
              These numbers assume no alcohol
            </p>
            <p className="mt-1 text-sm text-gray-600">
              If your event includes beer, wine, or cocktails, add 20–30% more
              units. A 200-guest wedding with an open bar should plan for 8–10
              units instead of 6.
            </p>
          </div>

          {/* ─── Factors ───────────────────────────────────────────────────── */}
          <h2
            id="factors"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            6 Factors That Change Your Restroom Count
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The chart above is a baseline. These six factors can push your
            actual need up — sometimes dramatically:
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                factor: "Alcohol service",
                impact: "+20–30%",
                detail:
                  "Beer and mixed drinks increase usage the most. Wine-only events see a smaller bump. If your event has an open bar for 4+ hours, lean toward the high end.",
              },
              {
                factor: "Gender ratio",
                impact: "+10–20%",
                detail:
                  "Events with a higher proportion of female guests need more units. Women use restrooms more frequently and spend more time per visit. Weddings typically skew 55–60% female attendance.",
              },
              {
                factor: "Heat and humidity",
                impact: "+15–25%",
                detail:
                  "Oklahoma summers mean more water consumption and more restroom trips. June through August events should add extra capacity as a rule, especially for all-day festivals.",
              },
              {
                factor: "Event duration",
                impact: "2x for all-day",
                detail:
                  "An 8-hour event doesn't need exactly twice the units of a 4-hour event — but it's close. Longer events also need mid-event servicing for events over 8 hours with 200+ guests.",
              },
              {
                factor: "Food and catering",
                impact: "+10–15%",
                detail:
                  "Events with full meal service generate more restroom usage than appetizer-only or no-food events. Food trucks and BBQ catering increase the need further.",
              },
              {
                factor: "Children attending",
                impact: "+10%",
                detail:
                  "Family events with children require more frequent visits with shorter notice. Kids can't wait as long and need units placed closer to activity areas.",
              },
            ].map((item) => (
              <div
                key={item.factor}
                className="rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{item.factor}</p>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                    {item.impact}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* ─── Event Types ───────────────────────────────────────────────── */}
          <h2
            id="event-types"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Recommendations by Event Type
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Weddings &amp; Receptions
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Outdoor weddings in Oklahoma are popular from April through
                October. For 100–200 guests with a 5-hour reception and open
                bar, plan for 5–8 standard units — or replace them entirely with
                a{" "}
                <Link
                  href="/services/vip-shower-restroom-trailers"
                  className="text-primary hover:underline"
                >
                  VIP restroom trailer
                </Link>{" "}
                that provides a luxury experience with climate control, mirrors,
                and running water. One 8-station VIP trailer can replace 4–6
                standard porta potties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Festivals &amp; Community Events
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Town festivals, county fairs, and community celebrations in{" "}
                <Link
                  href="/service-areas/kay-county"
                  className="text-primary hover:underline"
                >
                  Kay County
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/garfield-county"
                  className="text-primary hover:underline"
                >
                  Garfield County
                </Link>
                , and across our{" "}
                <Link
                  href="/service-areas"
                  className="text-primary hover:underline"
                >
                  service area
                </Link>{" "}
                often run 8–12 hours with fluctuating attendance. Distribute
                units across the venue rather than clustering them in one spot.
                Plan for mid-event servicing on all-day events with 500+ guests.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Rodeos &amp; Sporting Events
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Rodeos are an Oklahoma staple, and they come with high restroom
                demand — large crowds, hot weather, beer sales, and long
                duration. A 500-person rodeo with beer vendors should plan for
                15–20 standard units with{" "}
                <Link
                  href="/services/hand-washing-stations"
                  className="text-primary hover:underline"
                >
                  hand washing stations
                </Link>{" "}
                near food areas. Brower Inc. has supplied restrooms for rodeos
                and arena events across north-central Oklahoma.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Corporate &amp; Private Parties
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Company picnics, outdoor fundraisers, and private estate parties
                are best served with VIP trailers for the main guest area and
                standard units for support staff and perimeter access. These
                events tend to be smaller (50–150 guests) but with higher
                expectations for cleanliness and comfort.
              </p>
            </div>
          </div>

          {/* ─── VIP vs Standard ───────────────────────────────────────────── */}
          <h2
            id="vip-vs-standard"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            VIP Restroom Trailers vs. Standard Portable Restrooms
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Not sure which to choose? Here is a side-by-side comparison:
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Standard Unit
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    VIP Trailer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Flushing toilets", "No", "Yes"],
                  ["Running water", "No", "Yes"],
                  ["Climate control", "No", "Yes (A/C & heat)"],
                  ["Mirrors & lighting", "Basic", "LED with vanity mirrors"],
                  ["Private stalls", "Single occupancy", "Multiple private stalls"],
                  ["Price per event", "$100–$200/unit", "$800–$2,500/trailer"],
                  ["Replaces how many", "1 unit", "4–6 standard units"],
                  ["Best for", "Casual events, large crowds", "Weddings, corporate, upscale"],
                ].map(([feature, standard, vip]) => (
                  <tr key={feature}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {feature}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{standard}</td>
                    <td className="px-4 py-3 text-gray-600">{vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Brower Inc.&apos;s{" "}
            <Link
              href="/services/vip-shower-restroom-trailers"
              className="text-primary hover:underline"
            >
              VIP shower and restroom trailers
            </Link>{" "}
            feature up to 18 stations with climate control, LED lighting, and
            private stalls. They are the most-requested upgrade for Oklahoma
            weddings.
          </p>

          {/* ─── Placement ─────────────────────────────────────────────────── */}
          <h2
            id="placement"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Where to Place Portable Restrooms at Your Event
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Placement is almost as important as quantity. Bad placement creates
            lines at some units while others sit empty, or puts restrooms
            upwind of the dinner tent.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>1–2 minute walk</strong> from the main gathering area —
              close enough for convenience, far enough for aesthetics
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Downwind</strong> of seating, food, and ceremony areas
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Level ground</strong> — units tilt on slopes, making doors
              hard to open and tanks uneven
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Well-lit path</strong> for evening events — guests need to
              find restrooms after dark
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Service truck access</strong> — our trucks need a clear
              path for delivery, pickup, and mid-event servicing
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Distribute, don&apos;t cluster</strong> — for events with
              200+ guests, split units into 2–3 locations to reduce lines
            </li>
          </ul>

          {/* ─── Booking Timeline ──────────────────────────────────────────── */}
          <h2
            id="booking-timeline"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            When to Book Your Event Restrooms
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Oklahoma&apos;s outdoor event season runs May through September, and
            inventory tightens fast. Here is a booking timeline:
          </p>

          <div className="mt-6 space-y-3">
            {[
              {
                timeframe: "6–8 weeks ahead",
                events: "Peak-season weddings (May–Sep), large festivals (500+ guests)",
              },
              {
                timeframe: "4–6 weeks ahead",
                events: "Spring/fall weddings, rodeos, county fairs",
              },
              {
                timeframe: "2–4 weeks ahead",
                events: "Corporate events, private parties, smaller gatherings",
              },
              {
                timeframe: "1–2 weeks ahead",
                events: "Off-season events, small parties — usually available but not guaranteed",
              },
              {
                timeframe: "Same week / emergency",
                events: "Call us — Brower Inc. operates a 640+ unit fleet and can often accommodate last-minute requests",
              },
            ].map((item) => (
              <div
                key={item.timeframe}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4"
              >
                <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {item.timeframe}
                </span>
                <p className="text-sm text-gray-600">{item.events}</p>
              </div>
            ))}
          </div>

          {/* ─── E-E-A-T Author Block ──────────────────────────────────────── */}
          <div className="mt-12 flex items-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <Image
              src={IMAGES.troyBrower}
              alt="Troy Brower, owner of Brower Inc., portable sanitation and event restroom expert in Newkirk, Oklahoma"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">
                Written by Troy Brower
              </p>
              <p className="text-sm text-gray-600">
                Founder &amp; Owner, Brower Inc.
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Troy has provided portable restrooms for hundreds of Oklahoma
                events — from 50-guest backyard weddings in{" "}
                <Link
                  href="/service-areas/newkirk"
                  className="text-primary hover:underline"
                >
                  Newkirk
                </Link>{" "}
                to 1,000+ person rodeos and festivals across{" "}
                <Link
                  href="/service-areas/kay-county"
                  className="text-primary hover:underline"
                >
                  Kay County
                </Link>{" "}
                and{" "}
                <Link
                  href="/service-areas/garfield-county"
                  className="text-primary hover:underline"
                >
                  Garfield County
                </Link>
                . He personally helps event planners choose the right unit count
                and type for every event.
              </p>
            </div>
          </div>

          {/* ─── Mid-article CTA ───────────────────────────────────────────── */}
          <div className="mt-10 rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
            <p className="text-lg font-bold text-gray-900">
              Not sure how many restrooms your event needs?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Tell us your guest count, event type, and date — we will give you
              an exact recommendation and quote within 24 hours.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+15807476206"
                className="inline-block rounded-lg border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* ─── FAQ Section ───────────────────────────────────────────────── */}
          <h2 id="faq" className="mt-12 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* ─── Related Reading ───────────────────────────────────────────── */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">Related reading</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/blog/portable-restroom-rental-guide"
                  className="text-sm text-primary hover:underline"
                >
                  The Complete Guide to Renting Portable Restrooms for Your
                  Event
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-sm text-primary hover:underline"
                >
                  How Much Does It Cost to Rent a Porta Potty in Oklahoma?
                  (2026 Pricing Guide)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vip-shower-restroom-trailers"
                  className="text-sm text-primary hover:underline"
                >
                  VIP Shower &amp; Restroom Trailers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
