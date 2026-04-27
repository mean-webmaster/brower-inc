import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { IMAGES } from "@/lib/images";
import {
  getArticleSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  jsonLdString,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "How Many Porta Potties Does Your Oklahoma Construction Site Need? (OSHA Calculator)",
  description:
    "Free OSHA porta potty calculator for Oklahoma construction sites. Covers the 29 CFR 1926.51 ratio (1:20, 1:40), hand wash requirements, ADA units, shift patterns, and real jobsite examples.",
  alternates: {
    canonical: "/blog/how-many-porta-potties-construction-site-oklahoma",
  },
  openGraph: {
    title:
      "How Many Porta Potties Does Your Oklahoma Construction Site Need? (OSHA Calculator)",
    description:
      "The OSHA ratio, a crew-size calculator, ADA rules, and real Oklahoma jobsite examples from Brower Inc.",
    type: "article",
    url: "/blog/how-many-porta-potties-construction-site-oklahoma",
    images: [
      {
        url: "/images/brower-inc-porta-potty-construction-site-osha-calculator-newkirk-ok.jpeg",
        width: 1600,
        height: 900,
        alt: "Row of blue Brower Inc. porta potties on an Oklahoma construction site — OSHA 29 CFR 1926.51 calculator guide",
      },
    ],
  },
};

const FAQS = [
  {
    question:
      "How many porta potties do I need for a 20-person Oklahoma construction crew?",
    answer:
      "One standard porta potty is the OSHA minimum for a crew of 1-20 workers under 29 CFR 1926.51(c). Brower Inc. recommends pairing that single unit with a hand washing station to stay compliant with the OSHA sanitation requirement, and upgrading to two units if workers are on-site longer than 8 hours per shift.",
  },
  {
    question:
      "What is the OSHA ratio for porta potties on a construction site?",
    answer:
      "The federal ratio set by OSHA 29 CFR 1926.51(c) is: 1 toilet for 1-20 workers, 2 toilets for 21-200 workers, and 1 additional toilet for every 40 workers above 200. Oklahoma follows federal OSHA enforcement — there is no state-specific variation for construction sanitation.",
  },
  {
    question:
      "Does a construction site need ADA-accessible porta potties in Oklahoma?",
    answer:
      "Yes, if the site employs workers with disabilities covered by the ADA. The Americans with Disabilities Act requires accessible sanitation for qualifying employees, and many Oklahoma general contractors add one ADA-compliant unit to every jobsite as a standard best practice to avoid discrimination complaints.",
  },
  {
    question:
      "How many porta potties do I need for a 50-person jobsite in Oklahoma?",
    answer:
      "Two porta potties plus a hand washing station meet OSHA 1926.51(c) for 21-200 workers. If the crew is split across two shifts of 25, two units are still sufficient — the OSHA ratio is based on peak headcount per shift, not total headcount across the day.",
  },
  {
    question:
      "How often should porta potties be serviced on an active Oklahoma construction site?",
    answer:
      "Weekly servicing is the Brower Inc. standard and meets OSHA's requirement to keep units sanitary. High-use sites (crews over 30, 12+ hour shifts, or summer heat in Oklahoma) often need 2-3 services per week. We adjust the schedule based on actual usage — not a one-size-fits-all contract.",
  },
  {
    question:
      "What are the OSHA fines for not having enough porta potties on a construction site?",
    answer:
      "Federal OSHA penalties for sanitation violations can reach $16,131 per violation for serious citations and up to $161,323 for willful or repeat violations. Oklahoma falls under federal OSHA jurisdiction for most construction work, so these federal penalty levels apply directly.",
  },
  {
    question:
      "Do I need separate porta potties for men and women on a construction site?",
    answer:
      "OSHA 29 CFR 1926.51(c)(3) requires separate toilet facilities for each sex when the workforce includes both men and women — unless the units are unisex single-occupancy with lockable doors. Most standard Brower Inc. porta potties qualify as unisex single-occupancy, which is why one combined count usually satisfies compliance.",
  },
  {
    question:
      "How far in advance should I book porta potties for an Oklahoma construction project?",
    answer:
      "Book at least 7-10 days in advance for standard deliveries, and 3-4 weeks in advance during peak Oklahoma construction season (April-October). Brower Inc. handles emergency same-day or next-day deliveries when possible — call (580) 747-6206 for urgent needs.",
  },
];

const TOC_ITEMS = [
  { id: "osha-ratio", label: "The OSHA Ratio at a Glance" },
  { id: "quick-calculator", label: "Porta Potty Calculator (by Crew Size)" },
  { id: "hand-washing", label: "Hand Washing Station Requirements" },
  { id: "ada-requirements", label: "When You Need an ADA Unit" },
  { id: "shift-patterns", label: "Multi-Shift & 24/7 Site Adjustments" },
  { id: "oklahoma-specifics", label: "Oklahoma-Specific Considerations" },
  { id: "real-examples", label: "Real Oklahoma Jobsite Examples" },
  { id: "common-mistakes", label: "5 Compliance Mistakes to Avoid" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Blog", href: "/blog" },
  {
    name: "Porta Potty Calculator for Oklahoma Construction Sites",
    href: "/blog/how-many-porta-potties-construction-site-oklahoma",
  },
];

export default function HowManyPortaPottiesConstructionSitePage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "How Many Porta Potties Does Your Oklahoma Construction Site Need? (OSHA Calculator)",
              description:
                "Free OSHA porta potty calculator for Oklahoma construction sites. Covers the 29 CFR 1926.51 ratio (1:20, 1:40), hand wash requirements, ADA units, shift patterns, and real jobsite examples.",
              slug: "how-many-porta-potties-construction-site-oklahoma",
              datePublished: "2026-04-23",
              image:
                "https://browerinc.net/images/brower-inc-porta-potty-construction-site-osha-calculator-newkirk-ok.jpeg",
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
              Construction &amp; Jobsite Compliance
            </span>
            <time dateTime="2026-04-23">April 23, 2026</time>
            <span>9 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            How Many Porta Potties Does Your Oklahoma Construction Site Need?
            (OSHA Calculator)
          </h1>

          <Image
            src={IMAGES.blogCoverOshaConstructionCalculator}
            alt="Row of blue Brower Inc. porta potties lined up on an Oklahoma construction site — OSHA 29 CFR 1926.51 compliance calculator cover"
            width={1600}
            height={900}
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            priority
          />

          <div className="prose mt-8 max-w-none">
            {/* HOOK */}
            <p className="text-lg text-gray-700 leading-relaxed">
              The fastest way to turn a profitable Oklahoma construction job
              into an OSHA citation is to under-count porta potties. The
              federal ratio under{" "}
              <a
                href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                29 CFR 1926.51(c)
              </a>{" "}
              is not a suggestion — it is a hard minimum, and inspectors do
              count.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This guide gives you the exact unit count for any Oklahoma
              jobsite, the hand wash rules most contractors miss, ADA
              considerations, and shift-pattern adjustments — plus a pocket
              calculator you can use before you pick up the phone to book.
              Every number comes from the OSHA standard itself and from what
              Brower Inc. actually delivers to construction sites across Kay,
              Garfield, Kingfisher, and Sedgwick counties every week.
            </p>

            {/* QUICK ANSWER — AI-capture optimized */}
            <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                For an Oklahoma construction site, OSHA 29 CFR 1926.51(c)
                requires <strong>1 porta potty for 1-20 workers</strong>,{" "}
                <strong>2 units for 21-200 workers</strong>, and{" "}
                <strong>1 additional unit for every 40 workers</strong> above
                200. A hand washing station is required alongside the toilets
                whenever toilet facilities are used. Add one ADA-accessible
                unit for crews with disabled workers.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Want us to run the numbers for your specific jobsite?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Tell us crew size, project length, and address. We&apos;ll
                return an OSHA-compliant unit plan and a flat monthly price in
                writing — usually within the hour.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get Your Free Jobsite Plan →
              </Link>
            </div>

            {/* H2: OSHA RATIO */}
            <h2
              id="osha-ratio"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The OSHA Porta Potty Ratio at a Glance
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA&apos;s construction sanitation standard{" "}
              <strong>29 CFR 1926.51(c)</strong> is what every Oklahoma general
              contractor is inspected against. It has three tiers based on the
              number of workers on-site per shift. Here is the exact language
              translated into a table you can screenshot for your project
              binder.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Workers On-Site (Per Shift)
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Minimum Porta Potties Required
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      OSHA Reference
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      1-20 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 toilet
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)(i)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      21-200 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      2 toilets (or 1 toilet + 1 urinal per 40 workers)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)(ii)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Over 200 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 toilet + 1 urinal per 40 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)(iii)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              The ratio counts workers per shift — not the total headcount
              across the day. A site with two shifts of 15 workers needs the
              1-unit minimum, not 2 units.
            </p>

            {/* H2: QUICK CALCULATOR */}
            <h2
              id="quick-calculator"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Porta Potty Calculator by Crew Size (Oklahoma)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Skip the math. Here are the most common Oklahoma crew sizes
              we deliver for every week, with the OSHA-compliant unit count
              plus our recommended comfort-level count (which accounts for
              peak usage and Oklahoma summer heat).
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Crew Size
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      OSHA Minimum
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Brower Comfort Plan
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Hand Wash Stations
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      1-10 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      11-20 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      21-40 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">3</td>
                    <td className="border border-gray-200 px-4 py-3">1-2</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      41-80 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">4</td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      81-160 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">5-6</td>
                    <td className="border border-gray-200 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      161-200 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">7-8</td>
                    <td className="border border-gray-200 px-4 py-3">4</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      240 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">3</td>
                    <td className="border border-gray-200 px-4 py-3">8-9</td>
                    <td className="border border-gray-200 px-4 py-3">4-5</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      400 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">5</td>
                    <td className="border border-gray-200 px-4 py-3">12-14</td>
                    <td className="border border-gray-200 px-4 py-3">6-7</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              The OSHA minimum is what keeps you legal. The Brower comfort
              plan is what keeps a crew from losing 15 minutes of productive
              time per worker per day standing in line — particularly during
              hot Oklahoma summers when hydration-driven restroom usage
              spikes.
            </p>

            {/* SIMPLE FORMULA */}
            <div className="mt-8 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                Rule of Thumb
              </p>
              <p className="mt-2 text-lg font-semibold">
                OSHA minimum + one extra unit per 25 workers above the
                minimum = a crew that never waits.
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Under-counting causes productivity loss. Over-counting by one
                unit per 25 workers is usually worth it.
              </p>
            </div>

            {/* H2: HAND WASHING */}
            <h2
              id="hand-washing"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Hand Washing Stations: The Rule Most Contractors Miss
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA{" "}
              <a
                href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                29 CFR 1926.51(f)
              </a>{" "}
              requires that an adequate supply of potable water be provided
              for drinking, washing, and food preparation on every
              construction site. In practice, that means every jobsite with
              porta potties also needs at least one{" "}
              <Link
                href="/services/hand-washing-stations"
                className="text-primary hover:underline"
              >
                hand washing station
              </Link>
              .
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              The Brower Inc. standard:
            </p>
            <ul className="mt-3 list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>1 hand washing station per 2 porta potties</strong> as
                a starting ratio
              </li>
              <li>
                <strong>1 station per 25 workers</strong> when food is
                consumed on-site
              </li>
              <li>
                Stations stocked with soap, potable water, and paper towels —
                refilled during weekly servicing
              </li>
              <li>
                No plumbing or hookups required — Brower&apos;s standalone
                units work on any Oklahoma jobsite
              </li>
            </ul>

            <Image
              src={IMAGES.handWashingStation}
              alt="Brower Inc. standalone hand washing station for OSHA-compliant Oklahoma construction sites — no hookups required"
              width={800}
              height={400}
              className="mt-6 h-64 w-full rounded-xl object-cover"
            />

            {/* H2: ADA */}
            <h2
              id="ada-requirements"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              When You Need an ADA-Accessible Porta Potty
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA does not explicitly mandate ADA units on every
              construction site, but the Americans with Disabilities Act does
              require reasonable accommodation for covered employees — and
              sanitation is about as reasonable as accommodations get.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The Brower Inc. recommendation for Oklahoma general contractors:
            </p>
            <ul className="mt-3 list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>Crews with any ADA-qualifying worker:</strong> At
                least one ADA-accessible unit, full stop
              </li>
              <li>
                <strong>Public-facing construction zones</strong> (downtown
                buildouts, retail remodels): One ADA unit as a best practice
                even without a qualifying employee
              </li>
              <li>
                <strong>Large commercial projects (50+ workers):</strong> One
                ADA unit added by default to reduce discrimination-complaint
                exposure
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              ADA-compliant units typically cost 25-40% more than a standard
              blue Maxim 300 — about $175-$325/month in Oklahoma. We cover
              the cost comparison in detail in our{" "}
              <Link
                href="/blog/porta-potty-rental-cost-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma porta potty rental cost guide
              </Link>
              .
            </p>
          </div>

          {/* MID CTA */}
          <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
            <p className="text-lg font-semibold">
              Mixed crew? Let us build the plan for you.
            </p>
            <p className="mt-2 text-gray-300">
              Tell Troy your crew breakdown and we&apos;ll line up the exact
              right mix of standard units, ADA-accessible units, and hand wash
              stations — OSHA-compliant and fully serviced.
            </p>
            <a
              href="tel:+15807476206"
              className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Call (580) 747-6206
            </a>
          </div>

          <div className="prose mt-12 max-w-none">
            {/* H2: SHIFT PATTERNS */}
            <h2
              id="shift-patterns"
              className="scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Multi-Shift, Night Work, and 24/7 Site Adjustments
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The OSHA ratio is based on peak headcount per shift, which
              creates two pitfalls contractors fall into on multi-shift jobs.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Pitfall 1: Under-counting by splitting headcount across shifts
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Two shifts of 25 workers each is not &quot;a 50-person site&quot;
              for OSHA purposes. It is two back-to-back 25-person sites, and
              two units would satisfy 1926.51(c). The risk is productivity,
              not compliance.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Pitfall 2: Under-servicing by ignoring usage doubling
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A 2-unit site with 25 workers using them for 8 hours gets
              serviced weekly. A 2-unit site with 50 workers across two
              shifts using them for 16+ hours generates double the waste
              volume — and needs 2-3 services per week to stay sanitary.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Brower Inc. prices multi-shift and 24/7 sites accordingly. We
              will quote the realistic service schedule up front so the
              contractor is not forced to choose between a higher bill and a
              non-compliant unit.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Night-shift lighting
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              For sites running past sundown (oil and gas work, emergency
              infrastructure, highway overnights), we add solar-powered LED
              lighting to each unit as a safety measure — no hookups, no
              generators, no trip hazard complaints.
            </p>

            {/* H2: OKLAHOMA SPECIFICS */}
            <h2
              id="oklahoma-specifics"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Oklahoma-Specific Considerations
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The federal OSHA standard is the same everywhere, but how you
              meet it on an Oklahoma jobsite has a few local twists.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Heat and ventilation
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma summers regularly exceed 100&deg;F. A standard Maxim
              300 porta potty has a tall vent stack that pulls hot interior
              air upward — but neglected units become unusable at peak heat.
              Weekly (or better, twice-weekly) servicing is not a luxury in
              July in Ponca City. It is the difference between a compliant
              unit and a de facto non-compliant one.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Wind and tip-over risk
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma is a top-ten windiest state. Units placed on open
              jobsites — particularly in Kay, Woods, and Kingfisher counties
              — should be strapped or weighted during storm season
              (March-June). Brower Inc. secures every unit at delivery as
              standard practice.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Rural access and delivery
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Many Oklahoma jobsites — particularly oil pads, wind-farm
              construction, and agricultural infrastructure — sit on gravel
              section-line roads well off the highway. National chains
              routinely refuse these deliveries. Brower Inc. makes them every
              day. If you&apos;re unsure whether a rural address is
              serviceable, call and we&apos;ll tell you on the spot.
            </p>

            <Image
              src={IMAGES.portableRestroomConstruction}
              alt="Brower Inc. blue porta potty at an active Oklahoma construction site — OSHA 1926.51 compliant placement"
              width={800}
              height={400}
              className="mt-6 h-64 w-full rounded-xl object-cover"
            />

            {/* H2: REAL EXAMPLES */}
            <h2
              id="real-examples"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Real Oklahoma Jobsite Examples
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              These are anonymized versions of actual Brower Inc. jobsite
              deployments from the past 12 months.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Example 1: 14-person residential build — Ponca City
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A 9-month custom home build with a core crew of 14 framers,
              electricians, and plumbers. OSHA minimum: 1 unit. Brower plan:
              1 standard porta potty + 1 hand washing station, serviced
              weekly. Total monthly cost: about $250 all-in.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Example 2: 45-person commercial remodel — Enid
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A 4-month retail buildout with 45 workers across one shift.
              OSHA minimum: 2 units. Brower plan: 3 standard units + 1
              ADA-accessible unit + 2 hand wash stations, serviced
              twice-weekly during drywall/paint phases. Total monthly cost:
              about $925 all-in.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Example 3: 120-person infrastructure project — Wichita, KS
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A highway-expansion project with 120 workers across two
              shifts (75 day / 45 night). OSHA minimum: 2 units. Brower
              plan: 5 standard units + 1 ADA-accessible unit + 3 hand wash
              stations + overnight LED lighting package, serviced 3x per
              week. Total monthly cost: about $1,900 all-in.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Example 4: 22-worker oil and gas crew — Woods County
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A 24/7 drilling operation with 22 workers rotating across
              three shifts. OSHA minimum for peak-shift headcount: 2 units.
              Brower plan: 2 standard units + 1 hand wash station, serviced
              3x per week because of round-the-clock usage. Total monthly
              cost: about $725 all-in with remote-access surcharge.
            </p>

            {/* TESTIMONIAL */}
            <blockquote className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="text-gray-700 italic">
                &quot;Brower Inc. delivered everything we needed for our
                Oklahoma commercial project. Quick response, clean equipment,
                and they actually knew the OSHA ratios better than my site
                super.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Sarah Henderson, Project Manager | Enid, OK
              </p>
            </blockquote>

            {/* H2: COMMON MISTAKES */}
            <h2
              id="common-mistakes"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              5 Compliance Mistakes to Avoid
            </h2>
            <ol className="mt-4 list-decimal pl-6 text-gray-600 leading-relaxed space-y-3">
              <li>
                <strong>Counting total headcount instead of per-shift.</strong>{" "}
                The OSHA ratio is based on peak workers on-site per shift.
                Over-counting is expensive; under-counting is a citation.
              </li>
              <li>
                <strong>
                  Forgetting the hand washing station requirement.
                </strong>{" "}
                A site with porta potties and no hand wash station is two
                violations, not one.
              </li>
              <li>
                <strong>
                  Placing units more than a &quot;reasonable walking
                  distance&quot; from the work area.
                </strong>{" "}
                OSHA interprets this as within 200 feet in most cases — park
                units close to where the crew actually works.
              </li>
              <li>
                <strong>Skipping weekly servicing to save money.</strong> An
                un-serviced unit can be cited as a non-compliant facility
                regardless of whether the correct number was rented.
              </li>
              <li>
                <strong>
                  Assuming a provider&apos;s contract covers everything.
                </strong>{" "}
                National chains often bill servicing, delivery, and pickup
                separately. Ask for an all-in written quote — the way{" "}
                <Link
                  href="/services/long-term-rentals"
                  className="text-primary hover:underline"
                >
                  Brower long-term rentals
                </Link>{" "}
                are structured by default.
              </li>
            </ol>

            {/* OWNER E-E-A-T */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center rounded-xl bg-gray-50 border border-gray-200 p-6">
              <Image
                src={IMAGES.troyBrower}
                alt="Troy Brower, owner of Brower Inc. — portable sanitation and septic services in Newkirk, Oklahoma"
                width={120}
                height={120}
                className="h-30 w-30 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  Why we quote OSHA plans, not rentals
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  &quot;A contractor shouldn&apos;t have to memorize 29 CFR
                  1926.51 to rent a porta potty. Tell me your crew size and
                  project length and I&apos;ll tell you what OSHA requires,
                  what keeps your guys from standing in line, and what it
                  costs. One phone call, one written quote.&quot;
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  — Troy Brower, Owner | Newkirk, Oklahoma
                </p>
              </div>
            </div>

            {/* STRONG CTA BEFORE FAQ */}
            <div className="mt-12 rounded-xl bg-primary/10 border border-primary/30 p-6">
              <p className="font-semibold text-gray-900 text-lg">
                Get an OSHA-compliant jobsite plan in writing.
              </p>
              <p className="mt-2 text-gray-700">
                Tell us crew size, project length, and address. We&apos;ll
                spec the exact unit count, hand wash stations, and service
                schedule — then quote one flat monthly price.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors text-center"
                >
                  Get Your Free Jobsite Plan →
                </Link>
                <a
                  href="tel:+15807476206"
                  className="inline-block rounded-lg border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Call (580) 747-6206
                </a>
              </div>
            </div>

            {/* H2: FAQ */}
            <h2
              id="faq"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Frequently Asked Questions: Porta Potty Requirements on Oklahoma
              Construction Sites
            </h2>
          </div>

          <div className="mt-6">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* RELATED LINKS */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">
              Related Brower Inc. resources
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                →{" "}
                <Link
                  href="/services/portable-restrooms"
                  className="text-primary hover:underline"
                >
                  Porta potty rental services in Oklahoma &amp; Kansas
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/services/hand-washing-stations"
                  className="text-primary hover:underline"
                >
                  Hand washing station rentals
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/services/long-term-rentals"
                  className="text-primary hover:underline"
                >
                  Long-term porta potty rentals for construction
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/blog/construction-site-sanitation-tips"
                  className="text-primary hover:underline"
                >
                  OSHA portable restroom requirements for construction sites
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-primary hover:underline"
                >
                  How much does a porta potty rental cost in Oklahoma?
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline"
                >
                  Get a free, no-obligation jobsite plan
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
