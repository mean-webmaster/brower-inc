import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BlogRelatedContent } from "@/components/RelatedContent";
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
  title: "Septic Tank Pumping Cost in Oklahoma (2026 Pricing Guide)",
  description:
    "Transparent 2026 pricing for septic tank pumping in Oklahoma — average cost by tank size, the 7 factors that change your final price, and how to avoid the $890 'quote shock' homeowners keep telling us about.",
  alternates: {
    canonical: "/blog/septic-tank-pumping-cost-oklahoma",
  },
  openGraph: {
    title:
      "Septic Tank Pumping Cost in Oklahoma: What to Expect in 2026",
    description:
      "Real Oklahoma septic pumping prices for 2026 — by tank size, by county, and the line items that secretly inflate the invoice.",
    type: "article",
    url: "/blog/septic-tank-pumping-cost-oklahoma",
    images: [
      {
        url: "/images/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Branded white-and-red Brower Inc. vacuum septic pump truck parked on a gravel driveway beside a rural Oklahoma ranch home in bright midday sunlight, with a navy-uniformed technician operating a green vacuum hose into an open green residential septic cleanout in the front lawn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Septic Tank Pumping Cost in Oklahoma: What to Expect in 2026",
    description:
      "Real Oklahoma septic pumping prices for 2026 — by tank size, by county, and the line items that inflate the invoice.",
    images: [
      "/images/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question: "How much does septic tank pumping cost in Oklahoma in 2026?",
    answer:
      "A standard residential septic pump-out in north-central Oklahoma runs $275 to $525 in 2026 for a typical 1,000–1,500-gallon tank, all-in. Smaller 750-gallon tanks fall closer to the low end; larger 2,000+ gallon tanks, multi-tank systems, hard-to-reach lids, and emergency overflow callouts push the price higher. Brower Inc. quotes flat all-in pricing — pump, rinse, inspection, and waste disposal in one number — across 14 Oklahoma and 6 Kansas counties.",
  },
  {
    question: "Why did one company quote me $275 and another $890 for the same job?",
    answer:
      "The spread almost always comes from three places: (1) the second company is charging separately for waste disposal, mileage, or 'environmental fees' the first company built into the rate; (2) one of them inspected the tank before quoting and the other did not; or (3) one is a small local operator with a local route and the other is dispatching from out of state. The actual job is the same. Ask any provider for an all-in flat quote in writing that names disposal, mileage, and inspection.",
  },
  {
    question: "How often should I pump my septic tank in Oklahoma?",
    answer:
      "Most rural Oklahoma homes need their septic tank pumped every 3 to 5 years. The exact interval depends on tank size, household size, and water usage — a four-person family with a 1,000-gallon tank should plan for every 3 years; a two-person family with a 1,500-gallon tank can stretch to 5 years. The Oklahoma DEQ-recommended baseline and EPA SepticSmart guidance both align on the 3–5 year window for most systems.",
  },
  {
    question: "What's included in a Brower Inc. septic pumping service in Oklahoma?",
    answer:
      "A complete pump-out (every gallon of liquid and solid waste removed), a tank rinse, a visual inspection of the baffles and tank walls, DEQ-compliant waste disposal, and a written follow-up note recommending your next pump date. No upsells on site. Same flat rate that was quoted. We also pump aerobic systems, restaurant grease tanks, and multi-tank commercial systems.",
  },
  {
    question: "Does Oklahoma require a permit or licensed pumper for septic work?",
    answer:
      "Yes. The Oklahoma Department of Environmental Quality (DEQ) regulates onsite sewage systems, and pumpers must hold a DEQ-issued license to legally remove and dispose of septage. Always confirm your provider is DEQ-licensed before they touch the tank — disposal at a non-licensed site or by a non-licensed pumper exposes the property owner to DEQ enforcement. Brower Inc. is fully DEQ-licensed and provides certificate copies on request.",
  },
  {
    question: "What signs mean I need to pump my Oklahoma septic tank right now?",
    answer:
      "Six warning signs trigger an immediate pump: (1) slow drains throughout the house; (2) gurgling sounds in toilets or pipes; (3) sewage odors near the tank or drain field; (4) wet, spongy, or unusually green grass over the drain field; (5) sewage backing up into the lowest drain in the house; (6) the alarm panel on an aerobic system is going off. Don't wait — emergency pump-outs cost more than scheduled ones, and a full backup can damage the drain field, which is the most expensive part of the system to replace.",
  },
  {
    question: "How much does septic tank pumping cost in rural Kay, Garfield, or Logan County?",
    answer:
      "The same range as the Oklahoma City and Tulsa metros — $275 to $525 for most residential jobs — without the mileage surcharges that out-of-area pumpers add. Brower Inc. is headquartered in Newkirk and runs daily routes across Kay, Garfield, Kingfisher, Logan, Noble, Grant, Pawnee, Osage, Payne, and the Kansas border counties. Rural delivery is a routine call, not a premium.",
  },
  {
    question: "Can Brower Inc. pump my septic tank the same day I call?",
    answer:
      "Often, yes — especially for emergency overflow callouts. We dispatch 24/7 across our 20-county service area and keep open route slots most days. For scheduled (non-emergency) pumps, we typically book within the same week. Call (580) 747-6206 with the address and tank size, and we'll quote and schedule on the same call.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer: The 2026 Price" },
  { id: "by-size", label: "Cost by Tank Size" },
  { id: "factors", label: "7 Factors That Change Your Final Price" },
  { id: "hidden-fees", label: "Hidden Fees: Why Quotes Vary Wildly" },
  { id: "by-county", label: "Cost by County in Our Service Area" },
  { id: "frequency", label: "How Often to Pump (and Why It Saves Money)" },
  { id: "warning-signs", label: "6 Signs You Need a Pump Right Now" },
  { id: "emergency", label: "Emergency vs. Scheduled Pump Cost" },
  { id: "compared", label: "Cost of Pumping vs. Cost of Skipping It" },
  { id: "how-we-quote", label: "How Brower Inc. Quotes a Pump" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Septic Tank Pumping Cost in Oklahoma (2026 Pricing Guide)",
    href: "/blog/septic-tank-pumping-cost-oklahoma",
  },
];

export default function SepticTankPumpingCostOklahomaPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "Septic Tank Pumping Cost in Oklahoma: What to Expect in 2026",
              description:
                "Transparent 2026 pricing for septic tank pumping in Oklahoma — by tank size, by county, the 7 factors that change your final price, and how to avoid hidden fees.",
              slug: "septic-tank-pumping-cost-oklahoma",
              datePublished: "2026-06-01",
              image:
                "https://browerinc.net/images/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp",
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
              Septic &amp; Property Maintenance
            </span>
            <time dateTime="2026-06-01">June 1, 2026</time>
            <span>10 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Septic Tank Pumping Cost in Oklahoma: What to Expect in 2026
          </h1>

          <Image
            src={IMAGES.blogCoverSepticTankPumpingCost}
            alt="Branded white-and-red Brower Inc. vacuum septic pump truck parked on a gravel driveway beside a rural Oklahoma ranch home in bright midday sunlight, with a navy-uniformed technician operating a green vacuum hose into an open green residential septic cleanout in the front lawn"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              An Oklahoma homeowner near Tonkawa called us last month with three
              quotes for a routine septic pump-out on a standard 1,000-gallon
              tank: <strong>$275, $450, and $890.</strong> Same tank. Same
              driveway. Same job. The cheapest quote and the most expensive
              quote were separated by more than 3&times; — and one of them was
              from a national chain dispatching out of state.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              That kind of spread is not random.{" "}
              <Link
                href="/services/septic-services"
                className="text-primary hover:underline"
              >
                Septic pumping in Oklahoma
              </Link>{" "}
              has
              a real, defensible market price, and the quotes that fall outside
              it are doing something specific — usually unbundling fees that
              should be built into the rate, or charging a long-haul premium.
              This guide gives you the actual 2026 numbers, the seven things
              that move them, and the questions to ask before you let a truck
              onto your property.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                In 2026, a standard residential septic pump-out in Oklahoma
                costs <strong>$275–$525 all-in</strong> for most 1,000–1,500-
                gallon tanks. Smaller 750-gallon tanks come in near the low
                end; larger 2,000+ gallon tanks, aerobic systems, multi-tank
                commercial properties, hard-to-reach lids, and after-hours
                emergencies push the price higher. <strong>The single rule:</strong>{" "}
                get an all-in flat quote in writing — pump, rinse,{" "}
                <Link
                  href="/services/septic-inspections"
                  className="text-primary hover:underline"
                >
                  inspection
                </Link>
                ,
                and DEQ-compliant disposal — before the truck arrives.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Want a flat-rate septic pumping quote for your Oklahoma
                property?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Tell us your address and (if you know it) tank size. Brower
                Inc. quotes flat — pump, rinse, inspection, and disposal in one
                number — usually within the hour. No mileage surcharge for
                addresses inside our 20-county service area.
              </p>
              <Link
                href="/services/septic-tank-pumping"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See Septic Pumping Service →
              </Link>
            </div>

            {/* H2: BY SIZE */}
            <h2
              id="by-size"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Septic Pumping Cost by Tank Size (Oklahoma, 2026)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Tank size is the single biggest driver of price. A larger tank
              means more waste, more disposal weight, and more time on site.
              These are the typical all-in flat rates across our north-central
              Oklahoma service area for a routine, scheduled pump:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Tank Size
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical Household
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      2026 Flat Rate (OK)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      750 gallons
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1–2 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $275–$375
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      1,000 gallons
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      3–4 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $325–$425
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      1,250 gallons
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4–5 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $375–$475
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      1,500 gallons
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      5–6 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $425–$525
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      2,000+ gallons
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Large/multi-family
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $525–$725
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Aerobic system
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Mound/spray system
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $400–$650
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Restaurant grease trap
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Commercial kitchen
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $300–$800 by size
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              These are flat all-in rates — pump, rinse, inspection, DEQ
              disposal. Mileage inside our service area is included. If you
              don&apos;t know your tank size, the property&apos;s septic
              installation permit on file with the{" "}
              <a
                href="https://www.deq.ok.gov/water-quality-division/onsite-sewage-treatment-systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Oklahoma DEQ Onsite Sewage Treatment Systems office
              </a>{" "}
              will list it.
            </p>

            {/* H2: FACTORS */}
            <h2
              id="factors"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              7 Factors That Change Your Final Septic Pumping Price
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Two homeowners with the same tank size on the same street can get
              different invoices for legitimate reasons. These are the seven
              that actually matter:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Tank size and depth.</strong> The bigger and deeper the
                tank, the more time, hose, and disposal weight per visit.
              </li>
              <li>
                <strong>How long since the last pump.</strong> A tank pumped
                yearly is mostly liquid. A tank pumped after 12 years is dense,
                hardened solids that take longer to break up and remove. We
                wrote about this exact scenario in our{" "}
                <Link
                  href="/blog/septic-system-maintenance-oklahoma"
                  className="text-primary hover:underline"
                >
                  Oklahoma septic maintenance guide
                </Link>
                .
              </li>
              <li>
                <strong>Lid accessibility.</strong> A surface-level riser is
                fastest. A buried lid under sod, decking, or driveway gravel
                adds 20–45 minutes of digging.
              </li>
              <li>
                <strong>Number of compartments / tanks.</strong> Most modern
                Oklahoma tanks are two-compartment; both have to be pumped or
                solids cross over and the job is half-done.
              </li>
              <li>
                <strong>System type.</strong> Aerobic systems with spray heads
                and timer panels require more inspection time than a passive
                conventional tank.
              </li>
              <li>
                <strong>Distance from the pumper&apos;s base.</strong> Pumpers
                routed in from another county or state pass the mileage along.
                A locally-based pumper does not.
              </li>
              <li>
                <strong>Scheduling type.</strong> A scheduled, planned pump is
                cheaper than a same-day or after-hours emergency overflow
                callout. Always.
              </li>
            </ol>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Skip the $890 quote shock.
              </p>
              <p className="mt-2 text-gray-300">
                Brower Inc. is DEQ-licensed, headquartered in Newkirk, and runs
                daily routes across 14 Oklahoma and 6 Kansas counties. Flat
                pricing, no mileage surcharge inside the service area, same
                truck and crew that&apos;s been doing this since 1980.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: HIDDEN FEES */}
            <h2
              id="hidden-fees"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Hidden Fees: Why Two Quotes Can Vary by $600
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The $275-vs-$890 spread we opened with is almost always the same
              four line items the lower quote didn&apos;t name. Watch for these
              when you compare:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>&quot;Environmental disposal fee&quot; or
                &quot;dump fee&quot;</strong> ($75–$150). The pumper has to pay
                the DEQ-permitted treatment facility to receive the waste. That
                cost should be inside the flat rate, not a line item.
              </li>
              <li>
                <strong>Mileage / fuel surcharge</strong> ($45–$200). Anything
                over $25 means the truck is routed in from out of area.
              </li>
              <li>
                <strong>Lid uncovering / digging fee</strong> ($50–$150). Often
                disclosed only after the truck arrives. Ask in advance whether
                this is included for a buried lid.
              </li>
              <li>
                <strong>Inspection or &quot;tank certification&quot;
                fee</strong> ($75–$150). For routine pumps, a visual inspection
                of the tank walls and baffles should be part of the service —
                not an upcharge.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The fix is one sentence on the phone:{" "}
              <em>
                &quot;What is the all-in flat price, including disposal,
                mileage, lid access, and inspection?&quot;
              </em>{" "}
              The provider who can answer in one number is the one you book.
            </p>

            {/* H2: BY COUNTY */}
            <h2
              id="by-county"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Septic Pumping Cost by County in Our Service Area
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Because we run daily routes from Newkirk, the cost to pump a
              standard residential tank does <em>not</em> meaningfully change
              from county to county inside our 20-county service area. The same
              flat rate applies whether you&apos;re in Ponca City, Enid,
              Stillwater, Guthrie, or across the Kansas border in Arkansas City
              or Winfield. The difference comes from the pumpers who don&apos;t
              route to those areas every day:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>
                  <Link
                    href="/service-areas/kay-county"
                    className="text-primary hover:underline"
                  >
                    Kay County
                  </Link>{" "}
                  (Newkirk, Ponca City, Blackwell,
                Tonkawa)</strong> — home base. Same-week scheduling, no
                surcharge.
              </li>
              <li>
                <strong>
                  <Link
                    href="/service-areas/garfield-county"
                    className="text-primary hover:underline"
                  >
                    Garfield
                  </Link>
                  , Noble, Kingfisher, Logan, Pawnee, Osage,
                Payne, Grant, Major, Alfalfa, Woods, Woodward Counties</strong>{" "}
                — daily route territory. Same flat rate.
              </li>
              <li>
                <strong>Southern Kansas (Sumner, Cowley, Harper, Barber,
                Kingman, Sedgwick Counties)</strong> — regular cross-border
                route. Same flat rate.
              </li>
              <li>
                <strong>Outside our 20-county area</strong> — we can quote, but
                expect a higher mileage component honestly priced into the
                rate.
              </li>
            </ul>

            {/* H2: FREQUENCY */}
            <h2
              id="frequency"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Often to Pump (and Why It Saves Money Long-Term)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The{" "}
              <a
                href="https://www.epa.gov/septic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EPA SepticSmart program
              </a>{" "}
              and the Oklahoma DEQ both recommend pumping every 3 to 5 years
              for most residential systems. The exact interval inside that
              window depends on:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Household size</strong> — more people = more solids.
              </li>
              <li>
                <strong>Tank size</strong> — smaller tanks fill faster.
              </li>
              <li>
                <strong>Water usage</strong> — long showers, dishwashers
                running daily, and heavy laundry shorten the cycle.
              </li>
              <li>
                <strong>Garbage disposal use</strong> — disposals add solids
                fast; pump on the 3-year end if you use one daily.
              </li>
              <li>
                <strong>Soil conditions over the drain field</strong> —
                Oklahoma&apos;s heavy clay soils slow leach-out and shorten the
                drain field&apos;s effective life.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Skipping pumps to save the $400 today is the most expensive thing
              you can do. A full tank starts pushing solids into the drain
              field — and a failed drain field replacement runs{" "}
              <strong>$5,000 to $20,000+</strong> in Oklahoma. The pump pays
              for itself many times over.
            </p>

            <blockquote className="mt-6 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;The customers who call us in a panic are almost never the
                ones who skipped one pump. They&apos;re the ones who skipped
                three or four. By the time it backs up into the house, the
                drain field is gone, and they&apos;re looking at twenty grand
                instead of four hundred bucks.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Troy Brower, Owner | Brower Inc. | Newkirk, OK
              </p>
            </blockquote>

            {/* H2: WARNING SIGNS */}
            <h2
              id="warning-signs"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              6 Signs You Need a Pump Right Now
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Any one of these means a tank that is at or past capacity. Two or
              more at the same time means call today.
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Slow drains everywhere in the house</strong> — not just
                one fixture. A single slow drain is a clog; all of them slow at
                once is the septic.
              </li>
              <li>
                <strong>Gurgling sounds in toilets or pipes</strong> when water
                drains elsewhere. Air is being forced back up because there&apos;s
                no room in the tank.
              </li>
              <li>
                <strong>Sewage odor near the tank or drain field.</strong>
              </li>
              <li>
                <strong>The grass over the drain field is unusually green,
                wet, or spongy</strong> — fertilizer from a failing field. We
                cover this one in detail in the maintenance guide.
              </li>
              <li>
                <strong>Sewage backing up</strong> into the lowest drain in the
                house (basement floor drain, ground-floor toilet, laundry
                drain).
              </li>
              <li>
                <strong>Aerobic system alarm panel light or audible
                alarm.</strong> The alarm exists for one reason.
              </li>
            </ol>

            {/* H2: EMERGENCY VS SCHEDULED */}
            <h2
              id="emergency"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Emergency vs. Scheduled Pump Cost
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The cheapest pump is the one you book a week ahead on a route the
              truck is already running. The most expensive is the 9 PM Sunday
              emergency callout for a sewage backup. The math is roughly:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Service Type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Scheduled, business hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Base flat rate
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Same-day, business hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      +$50–$100
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      After-hours / weekend
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      +$100–$200
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Holiday emergency
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      +$200–$300
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* H2: PUMP VS SKIP */}
            <h2
              id="compared"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Cost of Pumping vs. Cost of Skipping It
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The real cost comparison is not pump-A vs. pump-B. It&apos;s pump
              now vs. don&apos;t.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Scenario
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical 2026 Oklahoma Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Scheduled pump every 3–5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $275–$525
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Emergency pump after backup
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $475–$825
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Drain field repair after partial failure
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $1,500–$5,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Full drain field replacement
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $5,000–$20,000+
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Indoor sewage backup cleanup &amp; restoration
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $2,000–$10,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              One scheduled pump every 4 years is $400. Replacing a drain field
              once is the equivalent of 50 years of scheduled pumps. The
              maintenance schedule is the cheap path; the &quot;I&apos;ll get
              to it later&quot; path is not.
            </p>

            {/* H2: HOW WE QUOTE */}
            <h2
              id="how-we-quote"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Brower Inc. Quotes a Septic Pump
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Straight, repeatable, no surprise on the invoice. Here is what
              the call looks like:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>You tell us the address, tank size (if known), and
                last pump date.</strong>
              </li>
              <li>
                <strong>We quote a flat all-in price</strong> — pump, rinse,
                inspection, DEQ-compliant disposal — over the phone.
              </li>
              <li>
                <strong>We confirm a scheduled date and a 2-hour arrival
                window,</strong> in writing.
              </li>
              <li>
                <strong>We arrive with the right-sized vacuum truck</strong> —
                no second visit because the wrong rig was dispatched.
              </li>
              <li>
                <strong>We pump every gallon, rinse the tank, inspect the
                baffles and walls, and log a recommended next pump date.</strong>
              </li>
              <li>
                <strong>The invoice matches the quote.</strong> The whole
                point.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For the ongoing-care side of the system, pair this with the{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma homeowner&apos;s septic maintenance guide
              </Link>{" "}
              — it covers what happens between pumps, the warning signs above
              in more detail, and the DEQ rules that apply to your system.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Get a flat-rate Oklahoma septic pumping quote — usually within the hour."
                description={`Tell us your address, tank size if you know it, and approximately when it was last pumped. We'll quote pump + rinse + inspection + DEQ disposal in one number, schedule a 2-hour window, and stand behind the price. Call ${PHONE} or send us the details.`}
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
              The Pump Is Cheap. The Avoidance Is Not.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Septic tank pumping in Oklahoma in 2026 is a $275–$525 line item
              on a four-year schedule. Done. The expensive things are the
              quotes with hidden fees, the long-haul mileage from out-of-state
              pumpers, and the years you skip until a drain field replacement
              shows up on the invoice instead.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk, fully DEQ-licensed, and
              runs daily septic routes across 14 Oklahoma and 6 Kansas
              counties. Flat pricing, no mileage surcharge, no
              &quot;environmental fee&quot; on top, and a real person on the
              phone day or night. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a flat-rate septic quote
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent slug="septic-tank-pumping-cost-oklahoma" className="mt-12" />
        </div>
      </article>
    </>
  );
}
