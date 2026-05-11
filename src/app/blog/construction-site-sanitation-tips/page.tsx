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
    "OSHA Portable Restroom Requirements for Construction Sites (2025 Guide)",
  description:
    "Complete guide to OSHA standard 1926.51(c) portable restroom requirements for Oklahoma construction sites. Unit ratios, ADA compliance, hand washing rules, placement tips, and fines to avoid.",
  alternates: { canonical: "/blog/construction-site-sanitation-tips" },
};

const FAQS = [
  {
    question:
      "How many porta potties does OSHA require on a construction site?",
    answer:
      "OSHA standard 1926.51(c) requires a minimum of one toilet for every 20 workers on a construction site. For sites with 200 or more workers, the ratio drops to one toilet per 40 workers. These are minimums — peak shift counts, site layout, and worker spread across multiple floors or buildings often mean you need more.",
  },
  {
    question:
      "What is the OSHA fine for not having enough portable restrooms on site?",
    answer:
      "OSHA penalties for sanitation violations under 29 CFR 1926.51 can range from $16,131 per violation for a serious citation up to $161,323 per violation for willful or repeated violations (2025 penalty amounts adjusted for inflation). Repeat offenders face the highest penalties, and each missing or unsanitary unit can be cited as a separate violation.",
  },
  {
    question: "Does OSHA require hand washing stations on construction sites?",
    answer:
      "Yes. OSHA standard 1926.51(f) requires employers to provide adequate hand washing facilities on construction sites. Water must be potable, and soap and individual hand towels or warm-air blowers must be provided. Hand sanitizer alone does not satisfy the requirement — running water and soap are mandatory.",
  },
  {
    question: "Are ADA-compliant portable restrooms required on construction sites?",
    answer:
      "If any workers on site have mobility impairments, you must provide ADA-compliant restrooms under both OSHA and the Americans with Disabilities Act. Even without a current need, many general contractors include at least one ADA unit as a best practice to avoid last-minute scrambles when subcontractors bring workers with disabilities to the site.",
  },
  {
    question: "How often should portable restrooms be serviced on a construction site?",
    answer:
      "Weekly servicing is the industry standard for most construction sites. High-usage sites (20+ workers per unit) may need twice-weekly or daily service. Servicing includes pumping the tank, restocking toilet paper and hand sanitizer, cleaning all surfaces, and deodorizing. Brower Inc. includes weekly servicing in all long-term rental rates.",
  },
  {
    question:
      "Where should portable restrooms be placed on a construction site?",
    answer:
      "OSHA requires that toilet facilities be 'readily accessible' — generally within a 10-minute walk of all work areas. Place units on level ground, away from heavy equipment traffic lanes and crane swing paths. Keep them within 200 feet of the primary work area when possible, and cluster units near site entrances or break areas for maximum usage efficiency.",
  },
  {
    question:
      "Can workers refuse to work if there are not enough restrooms on site?",
    answer:
      "Yes. Under OSHA's General Duty Clause and specific sanitation standards, workers have the right to refuse work in conditions that pose a serious health hazard. Insufficient or unsanitary restroom facilities can constitute such a hazard. Workers can also file a confidential complaint with OSHA, which may trigger an inspection.",
  },
  {
    question:
      "What is the difference between construction site and event portable restroom requirements?",
    answer:
      "Construction site restrooms fall under OSHA regulations (29 CFR 1926.51) with specific ratios based on worker count and mandatory hand washing facilities. Event restrooms follow local health department guidelines that vary by municipality, typically requiring one unit per 50-100 guests depending on event duration, alcohol service, and gender ratio. Construction sites also require ongoing weekly service while events are typically single-service.",
  },
];

const TOC_ITEMS = [
  { id: "osha-requirements", label: "OSHA Requirements (1926.51)" },
  { id: "unit-ratio-chart", label: "How Many Units You Need" },
  { id: "hand-washing", label: "Hand Washing Station Rules" },
  { id: "ada-compliance", label: "ADA Compliance" },
  { id: "placement-tips", label: "Where to Place Units" },
  { id: "servicing-schedule", label: "Servicing Schedule" },
  { id: "common-violations", label: "Common Violations & Fines" },
  { id: "long-term-rentals", label: "Long-Term Rental Solutions" },
  { id: "faq", label: "FAQ" },
];

export default function ConstructionSiteSanitationTipsPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "OSHA Portable Restroom Requirements for Construction Sites (2025 Guide)",
              description:
                "Complete guide to OSHA standard 1926.51(c) portable restroom requirements for Oklahoma construction sites. Unit ratios, ADA compliance, hand washing rules, placement tips, and fines to avoid.",
              slug: "construction-site-sanitation-tips",
              datePublished: "2025-02-28",
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
                name: "Construction Site Sanitation",
                href: "/blog/construction-site-sanitation-tips",
              },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          {
            name: "Construction Site Sanitation",
            href: "/blog/construction-site-sanitation-tips",
          },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Construction
            </span>
            <time dateTime="2025-02-28">February 28, 2025</time>
            <span>11 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            OSHA Portable Restroom Requirements for Construction Sites: The
            Complete 2025 Compliance Guide
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            One missing porta potty can cost your jobsite $16,131 in OSHA fines.
            Here is everything Oklahoma contractors need to know about 29 CFR
            1926.51(c) — the exact unit ratios, hand washing rules, ADA
            requirements, and placement best practices that keep your site
            compliant and your crew productive.
          </p>

          <Image
            src={IMAGES.blogCoverConstructionSiteSanitation}
            alt="Row of seven branded blue Brower Inc. porta potties staged on a tamped-dirt area at an active Oklahoma residential subdivision construction site with wood framing and a yellow excavator behind"
            width={1600}
            height={900}
            className="mt-6 h-64 w-full rounded-xl object-cover sm:h-80"
            priority
          />

          {/* ─── OSHA Requirements ─────────────────────────────────────────── */}
          <h2
            id="osha-requirements"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            OSHA Standard 1926.51(c): What It Actually Says
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            OSHA&apos;s construction sanitation standard — 29 CFR 1926.51(c) —
            is the federal law that governs portable restroom requirements on
            every construction site in the United States. The standard is short
            but the consequences of ignoring it are not.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The rule applies to all construction employers, regardless of
            project size. Whether you are pouring a residential foundation in{" "}
            <Link
              href="/service-areas/kay-county"
              className="text-primary hover:underline"
            >
              Kay County
            </Link>{" "}
            or running a commercial build in{" "}
            <Link
              href="/service-areas/enid"
              className="text-primary hover:underline"
            >
              Enid
            </Link>
            , the requirements are the same. Here is what the standard mandates:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Toilet facilities must be provided for all employees
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Facilities must be &ldquo;readily accessible&rdquo; to workers at
              all times
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Minimum ratios are set based on the number of employees on site
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              All facilities must be maintained in a sanitary, operable condition
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Employers — not workers — are responsible for compliance
            </li>
          </ul>

          {/* ─── Unit Ratio Chart ──────────────────────────────────────────── */}
          <h2
            id="unit-ratio-chart"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            How Many Portable Restrooms Does Your Site Need?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The chart below shows OSHA&apos;s minimum requirements. These are
            based on the maximum number of workers on site during any single
            shift — not total employees across all shifts.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Workers on Site
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Minimum Toilets
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Recommended
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">1–20</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">1</td>
                  <td className="px-4 py-3 text-gray-600">2 (backup coverage)</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">21–40</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">2</td>
                  <td className="px-4 py-3 text-gray-600">3</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">41–60</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">3</td>
                  <td className="px-4 py-3 text-gray-600">4</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">61–80</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">4</td>
                  <td className="px-4 py-3 text-gray-600">5</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">81–100</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">5</td>
                  <td className="px-4 py-3 text-gray-600">6</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">101–150</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">6–7</td>
                  <td className="px-4 py-3 text-gray-600">8</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">200+</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    1 per 40 workers
                  </td>
                  <td className="px-4 py-3 text-gray-600">1 per 35 workers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
            <p className="text-sm font-semibold text-gray-900">
              Oklahoma pro tip
            </p>
            <p className="mt-1 text-sm text-gray-600">
              During summer months (June–August), Oklahoma heat regularly
              exceeds 100°F. Workers drink more water and use restrooms more
              frequently. Add 20–25% more units during peak heat to avoid lines
              that pull workers away from productive time.
            </p>
          </div>

          {/* ─── Hand Washing ──────────────────────────────────────────────── */}
          <h2
            id="hand-washing"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Hand Washing Station Requirements
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            OSHA standard 1926.51(f) requires adequate hand washing facilities
            on all construction sites.{" "}
            <strong>Hand sanitizer alone does not satisfy this requirement</strong>
            . You must provide running potable water, soap, and individual hand
            towels or warm-air blowers.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The rule is straightforward: every location where portable restrooms
            are placed should have a{" "}
            <Link
              href="/services/hand-washing-stations"
              className="text-primary hover:underline"
            >
              portable hand washing station
            </Link>{" "}
            nearby. For construction sites handling food, paint, solvents, or
            hazardous materials, additional hand washing points may be required
            under OSHA&apos;s hazard communication standards.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              One hand washing station for every cluster of portable restrooms
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Water must be potable (clean drinking water)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Soap and individual towels or blowers are mandatory — not optional
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Hand sanitizer can supplement but never replace hand washing
            </li>
          </ul>

          <Image
            src={IMAGES.handWashingStation}
            alt="Brower Inc. portable hand washing station ready for construction site deployment in Newkirk, Oklahoma"
            width={800}
            height={400}
            className="mt-6 h-56 w-full rounded-xl object-cover sm:h-72"
          />

          {/* ─── ADA Compliance ────────────────────────────────────────────── */}
          <h2
            id="ada-compliance"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            ADA-Compliant Portable Restroom Requirements
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The Americans with Disabilities Act requires that construction site
            restroom facilities be accessible to workers with disabilities. If
            any worker on your site has a mobility impairment, you are required
            to provide ADA-compliant portable restrooms.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ADA-compliant units are larger than standard porta potties —
            typically 60&quot; x 60&quot; or wider — with wheelchair ramp
            access, grab bars, and a lower toilet seat height. They cost
            approximately 25–40% more than standard units, but the cost of
            non-compliance is far higher.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Even if you do not currently have workers with disabilities on site,
            many general contractors in Oklahoma include at least one{" "}
            <Link
              href="/services/portable-restrooms"
              className="text-primary hover:underline"
            >
              ADA-accessible portable restroom
            </Link>{" "}
            as standard practice. Subcontractors rotate in and out — having an
            accessible unit ready avoids project delays.
          </p>

          {/* ─── Placement Tips ────────────────────────────────────────────── */}
          <h2
            id="placement-tips"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Where to Place Portable Restrooms on a Construction Site
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            OSHA says restrooms must be &ldquo;readily accessible,&rdquo; which
            is generally interpreted as within a 10-minute walk of all work
            areas. But smart placement goes beyond just meeting the minimum:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Near site entrances",
                desc: "Workers use restrooms when arriving and during breaks. Entrance placement maximizes convenience.",
              },
              {
                title: "On level, firm ground",
                desc: "Avoid mud, slopes, and gravel pits. Units must sit level to function properly and stay accessible.",
              },
              {
                title: "Away from crane swing paths",
                desc: "Never place units within the arc of a crane or under suspended loads. This is a separate OSHA violation.",
              },
              {
                title: "Within 200 feet of work areas",
                desc: "The closer the better. Workers who have to walk 5 minutes each way lose 10+ minutes of productive time per visit.",
              },
              {
                title: "Downwind when possible",
                desc: "Oklahoma wind is a factor. Position units so prevailing winds carry odors away from break and work areas.",
              },
              {
                title: "Accessible by service truck",
                desc: "Your rental provider needs truck access for weekly servicing. Don't box units in behind scaffolding or materials.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="rounded-lg border border-gray-200 bg-white p-4"
              >
                <p className="font-semibold text-gray-900">{tip.title}</p>
                <p className="mt-1 text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>

          {/* ─── Servicing Schedule ────────────────────────────────────────── */}
          <h2
            id="servicing-schedule"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Servicing Frequency: How Often Is Enough?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            OSHA requires that toilet facilities be &ldquo;maintained in a
            sanitary condition.&rdquo; What that looks like in practice depends
            on usage. Here is a general guide:
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Usage Level
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Workers per Unit
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Service Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">Standard</td>
                  <td className="px-4 py-3 text-gray-600">10–15</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    Weekly
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">Heavy</td>
                  <td className="px-4 py-3 text-gray-600">15–20</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    Twice weekly
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">Extreme</td>
                  <td className="px-4 py-3 text-gray-600">20+</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    3x/week or daily
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At Brower Inc., every{" "}
            <Link
              href="/services/long-term-rentals"
              className="text-primary hover:underline"
            >
              long-term construction rental
            </Link>{" "}
            includes weekly servicing in the base price — pumping, cleaning,
            restocking, and deodorizing. Need more frequent service? Call{" "}
            <a href="tel:+15807476206" className="text-primary hover:underline">
              {PHONE}
            </a>{" "}
            and we will adjust your schedule.
          </p>

          {/* ─── Common Violations & Fines ─────────────────────────────────── */}
          <h2
            id="common-violations"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Common OSHA Violations and What They Cost
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            OSHA inspectors look for sanitation compliance on every construction
            site visit. These are the most common violations they cite — and the
            2025 fine amounts:
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                violation: "No toilet facilities provided",
                fine: "$16,131",
                severity: "Serious",
              },
              {
                violation: "Insufficient number of units for worker count",
                fine: "$16,131",
                severity: "Serious",
              },
              {
                violation: "Unsanitary or inoperable facilities",
                fine: "$16,131",
                severity: "Serious",
              },
              {
                violation: "No hand washing facilities near restrooms",
                fine: "$16,131",
                severity: "Serious",
              },
              {
                violation:
                  "Restrooms not accessible to all workers (distance or ADA)",
                fine: "$16,131",
                severity: "Serious",
              },
              {
                violation: "Willful or repeated sanitation violations",
                fine: "Up to $161,323",
                severity: "Willful",
              },
            ].map((item) => (
              <div
                key={item.violation}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4"
              >
                <span
                  className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                    item.severity === "Willful"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.severity}
                </span>
                <div>
                  <p className="font-medium text-gray-900">{item.violation}</p>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Fine: {item.fine} per violation
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
            <p className="text-sm font-semibold text-gray-900">
              Each unit counts separately
            </p>
            <p className="mt-1 text-sm text-gray-600">
              If your site needs 5 portable restrooms and you only have 2, OSHA
              can cite you for 3 separate violations — that is $48,393 in fines
              from a single inspection. Renting extra units costs a fraction of
              one citation.
            </p>
          </div>

          {/* ─── Long-Term Rentals ─────────────────────────────────────────── */}
          <h2
            id="long-term-rentals"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Long-Term Construction Rental Solutions
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Most construction projects in Oklahoma run weeks to months — not
            days. That is why{" "}
            <Link
              href="/services/long-term-rentals"
              className="text-primary hover:underline"
            >
              Brower Inc.&apos;s long-term rental program
            </Link>{" "}
            is built specifically for contractors:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Monthly billing with weekly servicing included in the base rate
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Flexible unit counts — scale up or down as your crew size changes
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              ADA-compliant units available at every delivery
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <Link
                href="/services/hand-washing-stations"
                className="text-primary hover:underline"
              >
                Hand washing stations
              </Link>{" "}
              paired with every restroom cluster
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Serving{" "}
              <Link
                href="/service-areas"
                className="text-primary hover:underline"
              >
                14 counties across Oklahoma and southern Kansas
              </Link>
            </li>
          </ul>

          {/* ─── E-E-A-T Author Block ──────────────────────────────────────── */}
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
                Troy has spent years supplying portable restrooms to
                construction sites across Oklahoma — from single-home
                foundations in{" "}
                <Link
                  href="/service-areas/newkirk"
                  className="text-primary hover:underline"
                >
                  Newkirk
                </Link>{" "}
                to multi-phase commercial projects in{" "}
                <Link
                  href="/service-areas/ponca-city"
                  className="text-primary hover:underline"
                >
                  Ponca City
                </Link>{" "}
                and{" "}
                <Link
                  href="/service-areas/garfield-county"
                  className="text-primary hover:underline"
                >
                  Garfield County
                </Link>
                . He knows what it takes to keep a jobsite compliant, clean, and
                running on schedule.
              </p>
            </div>
          </div>

          {/* ─── Mid-article CTA ───────────────────────────────────────────── */}
          <div className="mt-10 rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
            <p className="text-lg font-bold text-gray-900">
              Need construction site restrooms in Oklahoma?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              OSHA-compliant units, hand washing stations, and ADA-accessible
              options — delivered and serviced weekly.
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
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-sm text-primary hover:underline"
                >
                  How Much Does It Cost to Rent a Porta Potty in Oklahoma?
                  (2026 Pricing Guide)
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/event-planning-restroom-guide"
                  className="text-sm text-primary hover:underline"
                >
                  How Many Portable Restrooms Do You Need for an Outdoor Event?
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/construction"
                  className="text-sm text-primary hover:underline"
                >
                  Construction Industry Portable Restroom Solutions
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
