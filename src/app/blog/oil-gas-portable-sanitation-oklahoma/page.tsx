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
    "Portable Sanitation Solutions for Oklahoma's Oil & Gas Industry | Brower Inc.",
  description:
    "Oil field portable restrooms Oklahoma — drilling site sanitation, OSHA-compliant units for remote jobsites, long-term rental programs, and 24/7 service from Brower Inc. in Newkirk, OK.",
  alternates: {
    canonical: "/blog/oil-gas-portable-sanitation-oklahoma",
  },
};

const FAQS = [
  {
    question:
      "How far does Brower Inc. deliver portable restrooms to oil and gas sites?",
    answer:
      "Brower Inc. delivers portable restrooms to oil field and drilling sites across a 14-county service area covering northern Oklahoma and southern Kansas. We routinely deliver to remote well pads and drill sites 30 to 60 miles from our Newkirk depot. If your site is within our coverage area, distance is never an issue — we have the trucks and route planning to reach you on schedule every time.",
  },
  {
    question:
      "What is the minimum rental period for oil field portable restrooms?",
    answer:
      "Our standard minimum rental period is 28 days (one month), which aligns with most drilling phase timelines. However, we offer flexible terms for shorter mobilization periods and longer multi-well programs. Most oil and gas clients rent on a month-to-month basis with automatic renewal, and you can cancel or scale up with a phone call.",
  },
  {
    question:
      "How often are portable restrooms serviced on remote oil field sites?",
    answer:
      "Weekly servicing is our standard for all long-term oil field rentals. Each service visit includes full tank pump-out, interior cleaning and sanitizing, restocking toilet paper and hand sanitizer, and chemical recharge. For high-usage sites with 20 or more workers sharing a single unit, we recommend twice-weekly service. We schedule service days around rig operations to minimize disruption.",
  },
  {
    question:
      "What happens to the portable restrooms when the rig moves to a new location?",
    answer:
      "When your drilling rig relocates, we coordinate the restroom move with your rig-move schedule. We will pick up units from the completed well pad, service them at our depot, and deliver them to your next drill site — often within 24 to 48 hours of your move. There is no extra mobilization fee for moves within our service area. Just give us 48 hours notice and we handle the logistics.",
  },
  {
    question:
      "Are Brower Inc. portable restrooms safe to place in H2S zones on oil field sites?",
    answer:
      "Standard portable restrooms are non-sparking and contain no ignition sources, making them suitable for placement in most oil field environments. However, for sites with active H2S (hydrogen sulfide) exposure, unit placement must follow your site safety plan and API recommended practices. We work with your HSE team to determine safe placement distances from wellheads, separators, and tank batteries. Our drivers are trained on basic oil field safety protocols and will follow your site-specific entry requirements.",
  },
  {
    question:
      "How does Brower Inc. handle portable restroom service during Oklahoma winters?",
    answer:
      "Oklahoma winters bring ice storms, frozen roads, and temperatures well below freezing. We add extra deodorizer and antifreeze chemical to holding tanks during winter months to prevent freeze-ups. Our service trucks run chains when roads ice over, and we maintain service schedules even in poor weather. For sites on unpaved lease roads that become impassable, we communicate with your site contact and reschedule within 24 hours of road clearing. We have been operating through Oklahoma winters for years and have never missed a service week due to weather.",
  },
  {
    question:
      "How many portable restrooms does a typical drilling crew need?",
    answer:
      "A standard drilling crew of 15 to 20 workers per shift needs a minimum of 2 portable restrooms under OSHA guidelines, but we recommend 3 units for comfort and to account for peak usage during shift changes. If you are running 24-hour operations with two 12-hour shifts (30 to 40 total workers cycling through), plan for 4 to 5 units plus at least one hand washing station. We will help you calculate the right number based on your crew size and shift schedule.",
  },
  {
    question:
      "Does Brower Inc. offer emergency or rush delivery of portable restrooms to oil field sites?",
    answer:
      "Yes. We understand that oil field operations move fast and schedules change without warning. Brower Inc. offers same-day and next-day rush delivery for oil and gas clients within our service area. If you have a rig starting up, a surprise inspection, or an unexpected crew increase, call us at (580) 747-6206 and we will get units to your site as quickly as possible. Rush delivery fees may apply depending on distance and time of request.",
  },
];

const TOC_ITEMS = [
  { id: "why-specialized-sanitation", label: "Why Oil & Gas Sites Need Specialized Sanitation" },
  { id: "osha-oil-field-requirements", label: "OSHA Requirements for Oil Field Restrooms" },
  { id: "oklahoma-challenges", label: "Oklahoma-Specific Challenges" },
  { id: "types-of-units", label: "Types of Units for Oil Field Operations" },
  { id: "servicing-remote-locations", label: "Servicing Remote Locations" },
  { id: "long-term-rental-solutions", label: "Long-Term Rental Solutions" },
  { id: "wind-farm-pipeline", label: "Wind Farm & Pipeline Construction" },
  { id: "faq", label: "FAQ" },
];

export default function OilGasPortableSanitationOklahomaPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "Portable Sanitation Solutions for Oklahoma's Oil & Gas Industry",
              description:
                "Oil field portable restrooms Oklahoma — drilling site sanitation, OSHA-compliant units for remote jobsites, long-term rental programs, and 24/7 service from Brower Inc. in Newkirk, OK.",
              slug: "oil-gas-portable-sanitation-oklahoma",
              datePublished: "2026-04-12",
              image: "https://browerinc.net/images/brower-inc-portable-restrooms-luxury-trailers-garden-event-newkirk-ok.webp",
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
                name: "Oil & Gas Portable Sanitation",
                href: "/blog/oil-gas-portable-sanitation-oklahoma",
              },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          {
            name: "Oil & Gas Portable Sanitation",
            href: "/blog/oil-gas-portable-sanitation-oklahoma",
          },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Industry Solutions
            </span>
            <time dateTime="2026-04-12">April 12, 2026</time>
            <span>11 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Portable Sanitation Solutions for Oklahoma&apos;s Oil &amp; Gas
            Industry
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Oklahoma&apos;s oil and gas industry operates in some of the most
            remote, demanding environments in the state. Drill sites sit miles
            from the nearest town, crews work around the clock in 12-hour
            shifts, and weather swings from 110&deg;F summer heat to ice storms
            that shut down county roads. Keeping workers safe, healthy, and
            OSHA-compliant starts with one of the most basic needs on any
            jobsite: clean, accessible portable restrooms. Here is how Brower
            Inc. solves the sanitation challenge for Oklahoma&apos;s energy
            sector.
          </p>

          <Image
            src={IMAGES.portableRestroomField}
            alt="Brower Inc. portable restroom stationed at a wind farm and open field site in rural Oklahoma with clear sky and flat terrain"
            width={800}
            height={400}
            className="mt-6 h-64 w-full rounded-xl object-cover sm:h-80"
            priority
          />

          {/* ─── Why Oil & Gas Sites Need Specialized Sanitation ──────────── */}
          <h2
            id="why-specialized-sanitation"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Why Oil &amp; Gas Sites Need Specialized Portable Sanitation
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Oil field portable restrooms in Oklahoma face conditions that
            standard event or residential rentals never encounter. A drill pad
            on a lease road 40 miles from the nearest gas station is not the
            same as a weekend festival in a city park. The sanitation provider
            you choose has to understand these differences — and plan for them.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Here are the realities that make oil and gas sanitation a
            specialized service:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Remote locations:</strong> Drill sites in{" "}
              <Link
                href="/service-areas"
                className="text-primary hover:underline"
              >
                Kay County, Grant County, Osage County, and Noble County
              </Link>{" "}
              are often 20 to 50 miles from the nearest service depot. Some
              well pads are accessible only via unpaved lease roads that
              become impassable after rain or ice.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>24/7 operations:</strong> Drilling rigs run two 12-hour
              shifts — day tour and night tour. That means portable restrooms
              see continuous use, not just during business hours. A unit that
              would last a week on a standard construction site can fill in
              three to four days on a 24-hour drill site.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Extreme weather exposure:</strong> Oklahoma&apos;s oil
              patch experiences temperature swings from well over 100&deg;F in
              July to below 10&deg;F in January. Units need chemical
              formulations that work in both extremes, and tanks must be
              treated with antifreeze compounds during winter months to
              prevent freeze-ups that render restrooms unusable.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Multiple crews and contractors:</strong> A typical
              drilling operation involves the drilling contractor, mud
              logging company, wireline crew, casing crew, and various
              service companies cycling through the location. At peak
              activity, 30 to 50 workers may be on site simultaneously —
              far more than the 15-person drilling crew alone.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Safety-sensitive environments:</strong> Oil field sites
              have restricted areas, H2S monitoring zones, and strict traffic
              management plans. Restroom placement and service vehicle access
              must be coordinated with the site safety team — you cannot just
              drop a unit anywhere.
            </li>
          </ul>

          {/* ─── OSHA Requirements for Oil Field Restrooms ────────────────── */}
          <h2
            id="osha-oil-field-requirements"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            OSHA Requirements for Oil Field Portable Restrooms
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Oil and gas operations fall under the same OSHA construction
            sanitation standard — 29 CFR 1926.51(c) — that governs every other
            construction site in the country. There is no oil field exemption.
            The standard requires one toilet for every 20 workers, facilities
            must be readily accessible, and they must be maintained in a
            sanitary condition.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            But drilling sites introduce additional safety and compliance
            layers that standard{" "}
            <Link
              href="/blog/construction-site-sanitation-tips"
              className="text-primary hover:underline"
            >
              construction site sanitation
            </Link>{" "}
            does not typically involve:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>H2S (hydrogen sulfide) considerations:</strong> On
              sites with known H2S exposure risk, portable restroom placement
              must account for wind direction and safe standoff distances from
              wellheads, separators, and flowback equipment. Workers in H2S
              zones must be able to reach restroom facilities without removing
              respiratory protection prematurely.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Hazmat and chemical exposure:</strong> Crews handling
              drilling fluids, cement, and chemical additives need hand
              washing access that goes beyond basic OSHA requirements. A{" "}
              <Link
                href="/services/hand-washing-stations"
                className="text-primary hover:underline"
              >
                portable hand washing station
              </Link>{" "}
              with running water and soap is not just an OSHA box to check —
              it protects workers from chemical burns and dermatitis from
              prolonged skin contact with drilling mud and completion fluids.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Shift-change peak loads:</strong> When two 12-hour
              shifts overlap during crew change, restroom demand spikes
              dramatically. Sites that seem adequately equipped during normal
              operations can have workers waiting in line during the 30-minute
              changeover window. OSHA calculates the required number of units
              based on the maximum number of workers on site at any one time —
              including shift overlap periods.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Site access for service vehicles:</strong> OSHA
              requires facilities to be maintained in sanitary condition,
              which means your service provider needs reliable vehicle access
              to reach and pump units. On oil field sites with security gates,
              cattle guards, and controlled-entry policies, this has to be
              coordinated in advance.
            </li>
          </ul>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Workers on Site (Peak Shift)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    OSHA Minimum
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Recommended for 24/7 Drilling
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">1&ndash;20</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">1</td>
                  <td className="px-4 py-3 text-gray-600">
                    2&ndash;3 (continuous use)
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">21&ndash;40</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">2</td>
                  <td className="px-4 py-3 text-gray-600">
                    4 (shift overlap buffer)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">41&ndash;60</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">3</td>
                  <td className="px-4 py-3 text-gray-600">
                    5&ndash;6 (multiple service companies)
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">60+</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    1 per 20 workers
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    1 per 12&ndash;15 workers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
            <p className="text-sm font-semibold text-gray-900">
              OSHA fine reminder
            </p>
            <p className="mt-1 text-sm text-gray-600">
              In 2026, OSHA serious violations carry fines up to $16,550 per
              violation. On a drill site with 40 workers and only one
              portable restroom, an inspector could cite you for the missing
              unit — that is a five-figure fine for a rental that costs a
              fraction of the penalty each month.
            </p>
          </div>

          {/* ─── Oklahoma-Specific Challenges ──────────────────────────────── */}
          <h2
            id="oklahoma-challenges"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Oklahoma-Specific Challenges for Oil Field Sanitation
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Providing drilling site portable toilets in Oklahoma is not the
            same as supplying units in the Permian Basin or the Bakken. The
            state&apos;s geography, climate, and infrastructure create a unique
            set of challenges that only a local provider truly understands.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Distance from service depots",
                desc: "Oklahoma's oil and gas activity is spread across the northern and central parts of the state. Well pads in Osage County, Grant County, and the Anadarko Basin can be 30 to 60 miles from the nearest sanitation service provider. A provider based in Oklahoma City may not service sites in Kay County efficiently. Brower Inc. operates from Newkirk — right in the heart of northern Oklahoma's oil patch.",
              },
              {
                title: "Unpaved lease roads",
                desc: "Most Oklahoma drill sites are accessed via unimproved lease roads — gravel, caliche, or bare dirt. After a spring thunderstorm or winter ice event, these roads can become rutted, muddy, or completely impassable. Service trucks need heavy-duty suspension and experienced drivers who know when to chain up and when to wait.",
              },
              {
                title: "High wind exposure",
                desc: "Oklahoma is one of the windiest states in the country. Sustained winds of 25 to 40 mph are common on open drill pads, and gusts during severe weather can exceed 60 mph. Portable restrooms must be anchored or weighted to prevent tip-overs. Brower Inc. uses tie-down stakes and concrete ballast blocks on high-wind sites.",
              },
              {
                title: "Summer heat above 100\u00B0F",
                desc: "From June through September, Oklahoma oil field temperatures regularly exceed 100\u00B0F. Heat accelerates chemical breakdown in holding tanks, increases odor, and drives higher worker water consumption (which means more restroom visits). Summer sites need more frequent service and stronger deodorizing treatments.",
              },
              {
                title: "Winter ice and freeze-ups",
                desc: "January and February bring ice storms that coat roads and equipment. Holding tank chemicals can freeze if not properly treated, rendering restrooms unusable at the worst possible time. Brower Inc. switches to winter-grade chemical formulations starting in November and adds antifreeze agents to every tank.",
              },
              {
                title: "Cattle guards and locked gates",
                desc: "Most Oklahoma lease roads cross ranch land with cattle guards, locked gates, and restricted access points. Service drivers need gate codes, landowner contacts, and familiarity with rural road networks. A provider from out of the area will lose hours navigating access — a local provider already knows the routes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-4"
              >
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ─── Types of Units ────────────────────────────────────────────── */}
          <h2
            id="types-of-units"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Types of Portable Restroom Units for Oil Field Operations
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Not every oil field site needs the same equipment. The right mix
            of units depends on crew size, shift structure, site layout, and
            how long the operation will last. Here is what Brower Inc. deploys
            to drilling sites, completion pads, and production facilities
            across Oklahoma:
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Standard Portable Restrooms
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The workhorse of any oil field sanitation setup. Our{" "}
            <Link
              href="/services/portable-restrooms"
              className="text-primary hover:underline"
            >
              standard portable restrooms
            </Link>{" "}
            (the Maxim 300 model) are the units you will see on every active
            drill pad and well site in Oklahoma. They feature a 60-gallon
            holding tank, ventilation stack, interior coat hook, and built-in
            hand sanitizer dispenser. These units handle the bulk of daily
            crew use and are sized to be transported on flatbed trailers to
            remote locations.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Ideal for drilling pads, completion sites, and production
              battery locations
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Tank capacity supports 10 to 15 workers per unit with weekly
              service
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Available in blue, tan, and pink (the area favorite for
              charity and awareness events)
            </li>
          </ul>

          <Image
            src={IMAGES.portableRestroomWarehouse}
            alt="Brower Inc. portable restroom fleet inventory at the Newkirk, Oklahoma warehouse ready for oil field deployment"
            width={800}
            height={400}
            className="mt-6 h-56 w-full rounded-xl object-cover sm:h-72"
          />

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            ADA-Compliant Units
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            OSHA and the Americans with Disabilities Act require accessible
            restroom facilities if any worker on site has a mobility
            impairment. Even if your current crew does not include anyone
            needing ADA accommodation, subcontractors and service companies
            rotate through oil field sites regularly. Having at least one
            ADA-compliant unit on location is a best practice that avoids
            compliance scrambles.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Wider interior (60&quot; x 60&quot; minimum) with wheelchair
              ramp access
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Grab bars, lower seat height, and accessible door hardware
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Recommended: one ADA unit per drill site regardless of current
              crew needs
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Hand Washing Stations
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            OSHA standard 1926.51(f) mandates hand washing facilities with
            running water and soap on all construction sites — and oil field
            sites are no exception.{" "}
            <Link
              href="/services/hand-washing-stations"
              className="text-primary hover:underline"
            >
              Portable hand washing stations
            </Link>{" "}
            are especially critical on drilling and completion sites where
            workers handle drilling fluids, cement slurry, and chemical
            additives that can cause skin irritation or chemical burns.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Fresh water reservoir with foot-pump operation — no external
              water hookup needed
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Soap, paper towels, and hand sanitizer included with every
              delivery
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Paired with restroom clusters to satisfy OSHA hand washing
              requirements
            </li>
          </ul>

          <Image
            src={IMAGES.handWashingStation}
            alt="Brower Inc. portable hand washing station at the Newkirk, Oklahoma warehouse ready for oil field site delivery"
            width={800}
            height={400}
            className="mt-6 h-56 w-full rounded-xl object-cover sm:h-72"
          />

          {/* ─── Mid-article CTA ──────────────────────────────────────────── */}
          <div className="mt-10 rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
            <p className="text-lg font-bold text-gray-900">
              Need oil field portable restrooms in Oklahoma?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              OSHA-compliant units, hand washing stations, and flexible
              long-term programs — delivered to your drill site and serviced
              on schedule.
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

          {/* ─── Servicing Remote Locations ────────────────────────────────── */}
          <h2
            id="servicing-remote-locations"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            How Brower Inc. Services Remote Oil Field Locations
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The biggest complaint oil and gas companies have about portable
            sanitation providers is reliability. A missed service visit on a
            remote drill site does not just mean an unpleasant restroom — it
            can mean an OSHA violation, a worker complaint, and a stalled
            operation while the crew waits for someone to show up.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Brower Inc. operates from{" "}
            <Link
              href="/service-areas"
              className="text-primary hover:underline"
            >
              Newkirk, Oklahoma
            </Link>{" "}
            — positioned in the center of northern Oklahoma&apos;s most
            active oil and gas producing counties. Here is how we maintain
            reliable service to sites that other providers struggle to reach:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Route planning around rig operations:</strong> We
              schedule service visits during daylight hours and coordinate
              with your company man or pusher to avoid arriving during
              critical operations like tripping pipe, running casing, or
              cementing. Our drivers check in with the site contact before
              entering the location.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Heavy-duty service trucks:</strong> Our pump trucks are
              built for rural Oklahoma roads — four-wheel-drive capable,
              high-clearance, and equipped with all the hose length needed to
              reach units placed deep inside a drill pad without driving
              heavy equipment across the location.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Gate codes and access coordination:</strong> We
              maintain a database of gate codes, landowner contacts, and
              access instructions for every active site we service. Your
              foreman gives us the information once, and every driver on our
              team has it for every visit.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Weather contingency plans:</strong> When ice or mud
              makes a lease road impassable, we do not just skip the visit.
              We communicate with your site contact, monitor road conditions,
              and reschedule within 24 hours of the road becoming passable.
              Our drivers know these roads — they know which ones drain fast
              and which ones stay muddy for days.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Service documentation:</strong> Every service visit is
              logged with date, time, driver name, and services performed.
              For oil and gas clients who need compliance documentation for
              audits or inspections, we provide service records on request.
            </li>
          </ul>

          <Image
            src={IMAGES.deliveryDaytime}
            alt="Brower Inc. service truck delivering portable restrooms on a rural Oklahoma road during daytime for oil field site setup"
            width={800}
            height={400}
            className="mt-6 h-56 w-full rounded-xl object-cover sm:h-72"
          />

          {/* ─── Long-Term Rental Solutions ────────────────────────────────── */}
          <h2
            id="long-term-rental-solutions"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Long-Term Rental Solutions for Multi-Month Drilling Projects
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A single horizontal well in Oklahoma can take 30 to 90 days to
            drill and complete. Multi-well pad programs run six months to a
            year. Pipeline construction projects stretch across entire
            counties over the course of a season. Short-term rental pricing
            does not make sense for these timelines — and neither does
            managing a new delivery for every project phase.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Brower Inc.&apos;s{" "}
            <Link
              href="/services/long-term-rentals"
              className="text-primary hover:underline"
            >
              long-term rental program
            </Link>{" "}
            is designed specifically for the oil and gas industry&apos;s
            extended project timelines:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Monthly billing:</strong> Flat monthly rate that
              includes weekly servicing, chemical recharge, and all
              consumables (toilet paper, hand sanitizer, soap). No surprise
              fees for routine maintenance.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Flexible scaling:</strong> Starting with 3 units for
              the spud phase but need 6 when the completion crew arrives?
              Call us and we will add units within 24 to 48 hours. Scaling
              back down when crews demobilize is just as easy.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Rig-move coordination:</strong> When you move the rig
              to the next well on the pad or to a new location entirely, we
              pick up, service, and redeploy your units to the new site. No
              extra mobilization fees within our{" "}
              <Link
                href="/service-areas"
                className="text-primary hover:underline"
              >
                service area
              </Link>
              .
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Dedicated account management:</strong> Oil and gas
              clients get a direct contact at Brower Inc. — not a call
              center. When you need to add units, change service days, or
              coordinate a rig move, you call the same person every time.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Volume pricing:</strong> Multi-unit and multi-month
              commitments qualify for discounted rates. The longer the
              project and the more units you need, the more competitive the
              pricing becomes. Call{" "}
              <a
                href="tel:+15807476206"
                className="text-primary hover:underline"
              >
                {PHONE}
              </a>{" "}
              for a custom quote.
            </li>
          </ul>

          <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
            <p className="text-sm font-semibold text-gray-900">
              Multi-well pad example
            </p>
            <p className="mt-1 text-sm text-gray-600">
              A typical 4-well horizontal pad program in northern Oklahoma
              runs 6 to 8 months from spud to final completion. During that
              time, crew sizes fluctuate from 15 during drilling to 50+
              during simultaneous completions. Brower Inc. manages the entire
              sanitation program — scaling units up and down as crews change
              — on a single monthly contract.
            </p>
          </div>

          {/* ─── Wind Farm & Pipeline Construction ─────────────────────────── */}
          <h2
            id="wind-farm-pipeline"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Wind Farm and Pipeline Construction Sanitation
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Oklahoma is not just oil and gas. The state ranks third in the
            nation for wind energy production, and the wind farm construction
            boom shows no signs of slowing. Pipeline construction —
            gathering lines, transmission lines, and midstream infrastructure
            — keeps pace with drilling activity. Both of these sectors create
            sanitation challenges that are similar to oil field work but with
            their own twists.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Wind Farm Construction Sites
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Wind farm projects spread across thousands of acres. A single
            wind farm may have 50 to 200 turbine pads spread across a
            10-mile area, with construction crews working on multiple pads
            simultaneously. Portable restrooms need to be distributed across
            the site — not clustered in one location — so workers at every
            active pad have accessible facilities within OSHA&apos;s
            &ldquo;readily accessible&rdquo; standard.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Units deployed in clusters of 2 to 3 at active turbine pad
              groups, moved as construction progresses across the site
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Extra anchoring required — wind farm sites are, by definition,
              the windiest locations in the state
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Long project timelines (12 to 18 months) make monthly
              long-term rental programs the most cost-effective option
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Brower Inc. services multiple active wind farm projects across
              northern Oklahoma and southern Kansas
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Pipeline Construction
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Pipeline construction is a linear operation — the work front
            moves forward every day, and the restrooms have to move with it.
            A 20-mile gathering line project does not need 20 miles of
            portable restrooms on day one. It needs a leapfrog strategy where
            units are picked up from completed sections and redeployed ahead
            of the active work front.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Units repositioned weekly or bi-weekly to follow the
              construction spread
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Right-of-way access requires coordination with landowners and
              the pipeline company&apos;s ROW agent
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Multiple crews (clearing, trenching, welding, backfill) need
              restroom access at different points along the route
              simultaneously
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Brower Inc. manages the relocation logistics so your project
              manager does not have to
            </li>
          </ul>

          <Image
            src={IMAGES.portableRestroomLineup}
            alt="Lineup of Brower Inc. portable restrooms staged for deployment to an Oklahoma energy sector construction project"
            width={800}
            height={400}
            className="mt-6 h-56 w-full rounded-xl object-cover sm:h-72"
          />

          {/* ─── E-E-A-T Author Block ─────────────────────────────────────── */}
          <div className="mt-12 flex items-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <Image
              src={IMAGES.troyBrower}
              alt="Troy Brower, owner of Brower Inc., portable sanitation and septic services expert in Newkirk, Oklahoma"
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
                Troy has spent years providing portable sanitation to
                oil field operations, wind farm construction, and pipeline
                projects across Oklahoma and southern Kansas. From single-well
                pads in{" "}
                <Link
                  href="/service-areas"
                  className="text-primary hover:underline"
                >
                  Kay County
                </Link>{" "}
                to multi-well programs spanning three counties, he knows what
                it takes to keep remote jobsites clean, compliant, and running
                without sanitation delays.
              </p>
            </div>
          </div>

          {/* ─── FAQ Section ──────────────────────────────────────────────── */}
          <h2 id="faq" className="mt-12 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Common questions from oil and gas companies, drilling contractors,
            and energy-sector project managers about portable sanitation in
            Oklahoma.
          </p>
          <div className="mt-6">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* ─── Related Reading ──────────────────────────────────────────── */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">Related reading</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/blog/construction-site-sanitation-tips"
                  className="text-sm text-primary hover:underline"
                >
                  OSHA Portable Restroom Requirements for Construction Sites
                  (Complete Compliance Guide)
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
                  href="/services/portable-restrooms"
                  className="text-sm text-primary hover:underline"
                >
                  Portable Restroom Rental Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/long-term-rentals"
                  className="text-sm text-primary hover:underline"
                >
                  Long-Term Portable Restroom Rental Program
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/oil-gas"
                  className="text-sm text-primary hover:underline"
                >
                  Oil &amp; Gas Industry Sanitation Solutions
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
