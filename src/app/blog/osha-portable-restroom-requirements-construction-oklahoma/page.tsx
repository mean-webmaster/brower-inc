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
  title:
    "OSHA Portable Restroom Requirements: Oklahoma Construction Compliance Checklist",
  description:
    "The complete OSHA 29 CFR 1926.51 compliance checklist for Oklahoma construction sites — unit ratios, hand washing rules, ADA, sex separation, placement, servicing, and 2026 fine schedule. Print-ready.",
  alternates: {
    canonical: "/blog/osha-portable-restroom-requirements-construction-oklahoma",
  },
  openGraph: {
    title:
      "OSHA Portable Restroom Requirements: Oklahoma Construction Compliance Checklist",
    description:
      "Every line of 29 CFR 1926.51 translated into a print-ready checklist for Oklahoma jobsites — ratios, hand wash, ADA, sex separation, placement, servicing, fines.",
    type: "article",
    url: "/blog/osha-portable-restroom-requirements-construction-oklahoma",
    images: [
      {
        url: "/images/brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Brower Inc. portable restrooms and a hand washing station on an active Oklahoma construction site with steel framing in the background at golden hour — OSHA 29 CFR 1926.51 sanitation compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OSHA Portable Restroom Requirements: Oklahoma Construction Compliance Checklist",
    description:
      "Every line of 29 CFR 1926.51 translated into a print-ready checklist for Oklahoma jobsites — ratios, hand wash, ADA, sex separation, placement, servicing, fines.",
    images: [
      "/images/brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question:
      "Does Oklahoma have its own OSHA plan for construction sanitation, or does federal OSHA apply?",
    answer:
      "Federal OSHA applies. Oklahoma does not run a state-approved OSHA plan for private-sector construction, which means every Oklahoma jobsite — from Newkirk to Wichita — is inspected against federal 29 CFR 1926.51 exactly as written. Kansas private-sector sites fall under federal OSHA for the same reason. The only difference between Oklahoma and other states is which area office handles the inspection.",
  },
  {
    question:
      "What is the exact OSHA portable restroom requirement for construction in 2026?",
    answer:
      "OSHA 29 CFR 1926.51(c)(1) requires 1 toilet for crews of 1–20 workers, 1 toilet seat plus 1 urinal per 40 workers for crews of 21–200, and 1 toilet seat plus 1 urinal per 50 workers for crews over 200. These are minimums based on peak headcount per shift, not total headcount across multiple shifts. Hand washing is required separately under the same standard's hygiene provisions.",
  },
  {
    question:
      "Are hand sanitizer dispensers enough to meet OSHA hand washing requirements?",
    answer:
      "No. For workers handling lead, paint, asbestos, or materials that contact food, OSHA explicitly requires hand washing facilities with potable water and soap — sanitizer is not a substitute. On non-hazardous sites, sanitizer alongside the porta potty is generally accepted, but Brower Inc. recommends pairing a hand washing station with every 4 toilet units as a defensible best practice.",
  },
  {
    question:
      "Does my Oklahoma construction site need an ADA-compliant porta potty if no workers currently use a wheelchair?",
    answer:
      "OSHA does not mandate ADA units on every site, but ADA Title I requires reasonable accommodation when a worker with a mobility disability is assigned to the project. Because subcontractor crews change weekly, most Oklahoma general contractors add at least one ADA-accessible unit to every site of 20+ workers — it's cheaper than scrambling to swap a unit mid-project, and it eliminates ADA discrimination complaints.",
  },
  {
    question:
      "How quickly does OSHA respond to a sanitation complaint on an Oklahoma jobsite?",
    answer:
      "Formal complaints about inadequate or unsanitary portable toilets are handled as priority inspections — OSHA typically responds within 1 to 5 business days for non-imminent-danger sanitation complaints, and a federal compliance officer can be on site within hours for severe complaints. Anonymous worker complaints are common; never assume the absence of complaints means compliance is safe.",
  },
  {
    question:
      "What is the maximum OSHA fine for a missing or unsanitary porta potty in 2026?",
    answer:
      "Serious violations of 29 CFR 1926.51 can be cited at up to $16,131 per violation. Willful or repeated violations climb to a maximum of $161,323 per violation. Each missing or unsanitary unit can be cited as a separate violation, so a 60-worker site with zero porta potties can be cited multiple times in a single inspection.",
  },
  {
    question:
      "Where exactly should porta potties be placed on an Oklahoma construction site?",
    answer:
      "OSHA requires that toilet facilities be 'readily accessible,' which the agency interprets as roughly a 10-minute walk from any active work area. Place units on level, well-drained ground, away from crane swing paths and heavy equipment lanes, and within sight of break areas when possible. In Oklahoma summer heat, avoid full-day direct sun exposure — it accelerates odor and waste-tank pressure.",
  },
  {
    question:
      "Do separate male and female porta potties have to be provided?",
    answer:
      "29 CFR 1926.51(c)(3) requires separate facilities for each sex when both men and women are employed on the site — unless the units are single-occupancy, lockable, and unisex. Almost every standard Brower Inc. porta potty qualifies as single-occupancy unisex, which is why a combined count typically satisfies compliance. Always confirm with your specific OSHA area office when in doubt.",
  },
  {
    question:
      "What documentation should I keep to prove OSHA portable restroom compliance?",
    answer:
      "Keep the service contract showing unit type and quantity, the weekly servicing log (date, technician initials, what was restocked), the delivery receipt with date and address, and photos of the on-site units at install. Brower Inc. provides every long-term construction client with a digital servicing log they can hand to an inspector.",
  },
  {
    question:
      "Do I need an OSHA compliance plan in writing for the porta potty arrangement?",
    answer:
      "No standalone written plan is required for sanitation alone, but the standard sanitation arrangement is part of every site-specific safety plan under OSHA's general duty clause and many GC contracts. The simplest defensible documentation is a one-page sanitation memo listing unit count, location, servicing cadence, ADA provisions, and the provider's emergency contact.",
  },
];

const TOC_ITEMS = [
  { id: "who-enforces", label: "Who Enforces OSHA in Oklahoma & Kansas" },
  { id: "compliance-checklist", label: "The 10-Point Compliance Checklist" },
  { id: "ratio", label: "1. Unit Count & Ratio" },
  { id: "servicing", label: "2. Servicing & Cleanliness" },
  { id: "hand-washing", label: "3. Hand Washing Facilities" },
  { id: "ada", label: "4. ADA Accessibility" },
  { id: "sex-separation", label: "5. Sex Separation" },
  { id: "placement", label: "6. Placement & Accessibility" },
  { id: "privacy", label: "7. Privacy, Doors & Locks" },
  { id: "weather", label: "8. Weather & Oklahoma Site Conditions" },
  { id: "documentation", label: "9. Documentation & Servicing Logs" },
  { id: "emergency", label: "10. Emergency & Same-Day Coverage" },
  { id: "fines", label: "2026 Fine Schedule" },
  { id: "mistakes", label: "5 Mistakes That Trigger Oklahoma Citations" },
  { id: "examples", label: "Real Oklahoma Jobsite Examples" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "OSHA Portable Restroom Requirements — Oklahoma Compliance Checklist",
    href: "/blog/osha-portable-restroom-requirements-construction-oklahoma",
  },
];

export default function OshaPortableRestroomRequirementsPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "OSHA Portable Restroom Requirements: Oklahoma Construction Compliance Checklist",
              description:
                "The complete OSHA 29 CFR 1926.51 compliance checklist for Oklahoma construction sites — unit ratios, hand washing rules, ADA, sex separation, placement, servicing, and 2026 fine schedule.",
              slug: "osha-portable-restroom-requirements-construction-oklahoma",
              datePublished: "2026-05-18",
              dateModified: "2026-05-19",
              image:
                "https://browerinc.net/images/brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.webp",
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
            <time dateTime="2026-05-18">May 18, 2026</time>
            <span>12 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            OSHA Portable Restroom Requirements: The Oklahoma Construction
            Compliance Checklist
          </h1>

          <Image
            src={IMAGES.blogCoverOshaComplianceChecklist}
            alt="Brower Inc. portable restrooms and a hand washing station on an active Oklahoma construction site with steel framing in the background at golden hour — OSHA 29 CFR 1926.51 sanitation compliance"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          <div className="prose mt-8 max-w-none">
            {/* HOOK */}
            <p className="text-lg text-gray-700 leading-relaxed">
              An OSHA compliance officer can shut down a $4 million Oklahoma
              construction project before lunch over a problem that costs $200 a
              month to fix. The problem is{" "}
              <Link
                href="/services/portable-restrooms"
                className="text-primary hover:underline"
              >
                portable restrooms
              </Link>{" "}
              — wrong count,
              wrong cleanliness, no hand wash, no ADA unit. Inspectors look at
              sanitation first because it&apos;s easy to count and impossible to
              hide.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the print-ready compliance checklist Brower Inc. uses with
              every Oklahoma general contractor we deliver to — from a
              5-worker remodel in Newkirk to a 240-worker pipeline project in{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay County
              </Link>
              . Every line item maps back to the federal standard{" "}
              <a
                href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                29 CFR 1926.51
              </a>{" "}
              and is what we&apos;ve seen federal area offices in Oklahoma City,
              Tulsa, and Wichita actually cite over the last decade.
            </p>

            {/* QUICK ANSWER — AI-capture optimized */}
            <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Every Oklahoma construction site must provide{" "}
                <strong>at least 1 portable toilet per 20 workers</strong> on
                shift (under 29 CFR 1926.51(c)(1)), a separate{" "}
                <strong>hand washing facility</strong>, accessible{" "}
                <strong>ADA</strong> units when applicable, and{" "}
                <strong>weekly servicing</strong> at minimum. Federal OSHA
                enforces the standard in Oklahoma and Kansas. Fines run up to{" "}
                <strong>$16,131 per serious violation</strong> in 2026 — each
                missing or unsanitary unit can be cited separately.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Need a compliant porta potty plan for your Oklahoma jobsite?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Send us your crew size and address. We&apos;ll return an
                OSHA-compliant unit plan with weekly servicing, hand wash, and
                an ADA unit if you need one — flat-rate, in writing, usually
                within the hour.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get Your Free Compliance Plan →
              </Link>
            </div>

            {/* H2: WHO ENFORCES */}
            <h2
              id="who-enforces"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Who Enforces OSHA in Oklahoma &amp; Kansas
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Many states run their own OSHA-approved plans (California, Oregon,
              Washington, etc.). Oklahoma does not — and neither does Kansas for
              private-sector construction. That means every private-sector
              construction site in Brower Inc.&apos;s 20-county service area is
              inspected against the <strong>federal</strong> 29 CFR 1926.51
              standard, by a federal OSHA compliance officer dispatched out of
              one of three area offices:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Oklahoma City Area Office</strong> — covers most of
                north-central, central, and western Oklahoma (Kay,{" "}
                <Link
                  href="/service-areas/garfield-county"
                  className="text-primary hover:underline"
                >
                  Garfield
                </Link>
                , Noble, Payne, Logan, Kingfisher, Woods counties and others)
              </li>
              <li>
                <strong>Tulsa Area Office</strong> — covers eastern Oklahoma
              </li>
              <li>
                <strong>Wichita Area Office</strong> — covers all of Kansas
                including Sedgwick, Sumner, Cowley, Butler, Harper, Kingman
                counties
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              There is no Oklahoma-specific version of the rule, no relaxed
              variation for rural sites, and no leeway for short-duration
              projects. The standard applies identically to a 2-day reroof in
              Ponca City and a 9-month commercial build in Wichita.
            </p>

            {/* H2: CHECKLIST OVERVIEW */}
            <h2
              id="compliance-checklist"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The 10-Point OSHA Portable Restroom Compliance Checklist
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Print this page or screenshot the checklist below. Every line is
              what an OSHA compliance officer looks for when they roll up
              unannounced to your Oklahoma jobsite. If you can answer{" "}
              <strong>yes</strong> to all ten, you are defensibly compliant.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      #
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Compliance Item
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Correct unit count for peak shift headcount
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Weekly servicing minimum (more if usage warrants)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(4)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">3</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Hand washing facility provided
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(f) &amp; 1910.141
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">4</td>
                    <td className="border border-gray-200 px-4 py-3">
                      ADA-accessible unit when needed
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ADA Title I + OSHA general duty
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">5</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Sex-separated or unisex single-occupancy units
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(3)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">6</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Readily accessible placement (≈ 10-min walk)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1) interpretive
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">7</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Working door with privacy latch
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(3)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">8</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Adequate for Oklahoma weather (anchored, shaded if
                      possible, frost protection in winter)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      General duty clause
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">9</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Servicing log + delivery records on file
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Recordkeeping best practice
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">10</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Emergency / same-day replacement plan with provider
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Contract best practice
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* H2: RATIO */}
            <h2
              id="ratio"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              1. Unit Count &amp; Ratio (29 CFR 1926.51(c)(1))
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The single most-cited line of the construction sanitation standard
              is the toilet-to-worker ratio. The OSHA table is short:
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Workers Per Shift
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Minimum Toilets
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Reference
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">1–20</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 toilet
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)(i)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">21–200</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 toilet seat + 1 urinal per 40 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)(ii)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">200+</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 toilet seat + 1 urinal per 50 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1926.51(c)(1)(iii)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Two things contractors get wrong on the ratio:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Counting total headcount instead of peak shift.</strong>{" "}
                A site running two shifts of 25 needs the 21–200 tier (2
                toilets) — not the 50-worker tier — because peak shift is 25,
                not the combined 50.
              </li>
              <li>
                <strong>Forgetting subcontractors.</strong> If your crew is 18
                but the electrician&apos;s crew of 6 is on site the same day,
                your peak is 24 — you&apos;re in the 21–200 tier. The GC is
                responsible.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For a deeper walkthrough with crew-size scenarios, see our{" "}
              <Link
                href="/blog/how-many-porta-potties-construction-site-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma porta potty calculator
              </Link>
              .
            </p>

            {/* H2: SERVICING */}
            <h2
              id="servicing"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              2. Servicing &amp; Cleanliness (29 CFR 1926.51(c)(4))
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA does not put a specific number on servicing frequency, but
              the standard requires that toilet facilities be{" "}
              <strong>maintained in a sanitary condition</strong>. In practice,
              that means:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Weekly servicing minimum</strong> for any standard
                construction crew — Brower Inc.&apos;s default for all{" "}
                <Link
                  href="/services/long-term-rentals"
                  className="text-primary hover:underline"
                >
                  long-term rentals
                </Link>
                .
              </li>
              <li>
                <strong>Twice weekly</strong> for crews of 40+, 12-hour shifts,
                or 24/7 oilfield operations.
              </li>
              <li>
                <strong>Same-day response</strong> for any tipped, vandalized,
                or storm-damaged unit. (Brower Inc. dispatches 24/7 across all
                20 counties.)
              </li>
              <li>
                Restock paper, hand sanitizer, and paper towels every service.
              </li>
              <li>
                Scrub interior surfaces, deodorize, inspect for damage on every
                service.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The clearest signal a porta potty is{" "}
              <em>not</em> being properly serviced is the smell. Inspectors
              don&apos;t need a swab kit — they can tell from 20 feet away.
              That&apos;s why we publish our 7-step service protocol in our{" "}
              <Link
                href="/blog/how-clean-are-portable-restrooms"
                className="text-primary hover:underline"
              >
                cleanliness deep-dive
              </Link>
              .
            </p>

            {/* H2: HAND WASHING */}
            <h2
              id="hand-washing"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              3. Hand Washing Facilities (29 CFR 1926.51(f))
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the line that most often surprises Oklahoma contractors
              during their first inspection.{" "}
              <strong>
                Hand sanitizer alone does not satisfy OSHA hand washing
                requirements on sites where workers handle lead, paint,
                asbestos, or materials that contact food.
              </strong>{" "}
              Those sites require <strong>potable water + soap</strong>.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For everything else — typical framing, roofing, concrete, sitework
              — sanitizer inside the porta potty plus a paired hand washing
              station is the defensible standard. The hand washing station
              doesn&apos;t need a plumbing hookup; a foot-pump portable hand
              wash unit qualifies. Brower Inc.&apos;s{" "}
              <Link
                href="/services/hand-washing-stations"
                className="text-primary hover:underline"
              >
                hand washing stations
              </Link>{" "}
              come fully stocked with water, soap, and paper towels and require
              no electricity or water connection.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>Brower rule of thumb:</strong> One hand wash station per
              four porta potties, two per four if the site has 40+ workers or
              handles food.
            </p>

            {/* H2: ADA */}
            <h2
              id="ada"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              4. ADA Accessibility
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA itself does not name a specific ADA standard for portable
              toilets — but the{" "}
              <strong>Americans with Disabilities Act Title I</strong> obligates
              every covered employer to provide reasonable accommodation. When a
              worker with a mobility disability is on your site, you owe them
              an ADA-accessible portable restroom — period. Failing to provide
              one is an ADA discrimination violation, separate from OSHA
              enforcement.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Because subcontractor crews rotate weekly on most Oklahoma
              jobsites, the defensible practice is to add at least one{" "}
              <Link
                href="/services/ada-compliant-portable-restrooms"
                className="text-primary hover:underline"
              >
                ADA-accessible unit
              </Link>{" "}
              to any site of 20+ workers. The cost difference is minimal, it
              eliminates last-minute scrambling, and the larger interior also
              doubles as the de facto family-friendly unit for any public-facing
              site (open house, model home, public-works project).
            </p>

            {/* H2: SEX SEPARATION */}
            <h2
              id="sex-separation"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              5. Sex Separation (29 CFR 1926.51(c)(3))
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              When both men and women work the site, OSHA requires separate
              facilities — unless the units are{" "}
              <strong>single-occupancy with lockable doors</strong>. Almost
              every standard porta potty qualifies as single-occupancy unisex,
              which is why most Oklahoma sites can run a single combined unit
              count rather than doubling up by sex.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The exception is multi-stall trailer units (rare on construction
              sites). If you ever upgrade to a multi-stall trailer for a
              long-duration project, designate it as men&apos;s or women&apos;s
              with signage and add a single-occupancy unit for the other sex.
            </p>

            {/* H2: PLACEMENT */}
            <h2
              id="placement"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              6. Placement &amp; Accessibility
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The standard says &quot;readily accessible.&quot; OSHA&apos;s
              interpretive guidance — and what every inspector applies in
              practice — translates to roughly a <strong>10-minute walk</strong>{" "}
              from any active work area. For a small site this is automatic; for
              a sprawling site like a 40-acre solar build or a 4-block pipeline
              run, it means staging units in multiple locations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">Placement rules of thumb:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Level, well-drained ground.</li>
              <li>
                <strong>Away from crane swing paths and equipment lanes.</strong>{" "}
                A tipped unit is an immediate citation and a sanitation hazard.
              </li>
              <li>
                Within sight of break areas — workers actually use units they
                can see.
              </li>
              <li>
                In Oklahoma summer, avoid full-day direct sun if possible. Heat
                accelerates odor and tank-pressure issues.
              </li>
              <li>
                Cluster at site entrances or break trailers for high-visibility
                handwashing pairing.
              </li>
            </ul>

            {/* H2: PRIVACY */}
            <h2
              id="privacy"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              7. Privacy, Doors &amp; Locks
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every unit must have a working door, a privacy latch, and walls
              tall enough to provide reasonable privacy. Broken doors and
              non-functional latches are cited as routinely as missing units —
              don&apos;t assume your provider checks during weekly service.
              Brower Inc.&apos;s service protocol explicitly inspects the door,
              hinges, latch, and roof on every visit.
            </p>

            {/* H2: WEATHER */}
            <h2
              id="weather"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              8. Weather &amp; Oklahoma Site Conditions
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Oklahoma weather puts construction sanitation under unique stress.
              The general duty clause requires employers to provide facilities
              that are usable in conditions that occur — which in Oklahoma
              means:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Wind anchoring.</strong> 50+ mph straight-line winds and
                derechos hit Oklahoma every year. Unanchored units blow over.
                Brower Inc. uses ground anchors or sandbag systems on any site
                exposed to open terrain.
              </li>
              <li>
                <strong>Summer heat.</strong> 100°F+ summers spike usage (more
                hydration) and accelerate odor. Sites running through July /
                August often need a service-frequency bump to twice weekly.
              </li>
              <li>
                <strong>Winter freeze.</strong> December / January nighttime
                temps below 20°F can freeze waste tank chemistry. Winter
                additives in the holding tank prevent this — Brower Inc.
                switches over in November.
              </li>
              <li>
                <strong>Tornado &amp; ice storm recovery.</strong> When a
                tornado or ice storm hits, sites need{" "}
                <Link
                  href="/services/emergency-porta-potty-rental"
                  className="text-primary hover:underline"
                >
                  emergency same-day replacement
                </Link>{" "}
                of damaged units. We dispatch 24/7 for storm response.
              </li>
            </ul>

            {/* H2: DOCUMENTATION */}
            <h2
              id="documentation"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              9. Documentation &amp; Servicing Logs
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Compliance is what you can prove. When an OSHA officer asks how
              often the unit is serviced, &quot;weekly&quot; is not a defense —
              the log is. Keep on file:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>The signed service contract showing unit type, count, and frequency.</li>
              <li>The weekly servicing log (date, technician, items restocked).</li>
              <li>The delivery receipt with date and address.</li>
              <li>Photos at install showing placement, signage, and ADA unit (if applicable).</li>
              <li>Any storm-response service tickets.</li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. provides every long-term construction client with a
              digital servicing log accessible at any time — you can email the
              link straight to an inspector.
            </p>

            {/* H2: EMERGENCY */}
            <h2
              id="emergency"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              10. Emergency &amp; Same-Day Coverage
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A unit can be compliant on Monday and a citation on Tuesday. A
              tipped trailer, a vandalized door, a tornado-damaged stall — any
              of these turn your site non-compliant within hours. The defensible
              answer is{" "}
              <Link
                href="/blog/how-to-choose-portable-restroom-company-oklahoma"
                className="text-primary hover:underline"
              >
                a provider
              </Link>{" "}
              who will dispatch same-day:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>24/7 dispatch.</strong> A real person picks up day or
                night.
              </li>
              <li>
                <strong>Same-day replacement</strong> within the 20-county
                service area.
              </li>
              <li>
                <strong>Fleet stored locally</strong> — not routed from
                out-of-state on a 2-day truck schedule.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Call {PHONE} at any hour. Trucks move toward the site within the
              hour.
            </p>

            {/* H2: FINES */}
            <h2
              id="fines"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              2026 Federal OSHA Fine Schedule for Sanitation Violations
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA penalties are inflation-adjusted every January. The 2026
              maximums for portable restroom violations under 29 CFR 1926.51
              are:
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Violation Type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      2026 Maximum Per Violation
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Other-than-serious</td>
                    <td className="border border-gray-200 px-4 py-3">$16,131</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Serious</td>
                    <td className="border border-gray-200 px-4 py-3">$16,131</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Failure to abate</td>
                    <td className="border border-gray-200 px-4 py-3">$16,131 per day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Willful or repeated</td>
                    <td className="border border-gray-200 px-4 py-3">$161,323</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The headline figure is misleading. Each missing or unsanitary unit
              can be cited as a <strong>separate</strong> violation, which is
              why an under-supplied site can rack up multiple citations in a
              single inspection. A 60-worker site running zero porta potties has
              been cited for upwards of $48,000 in a single visit.
            </p>

            {/* H2: MISTAKES */}
            <h2
              id="mistakes"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              5 Mistakes That Actually Trigger Oklahoma OSHA Citations
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From a decade of delivering to Oklahoma and Kansas jobsites,
              here are the five missteps we see most often — every one
              avoidable.
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Under-counting the peak shift.</strong> GC books for
                their own 15-worker crew, then the framer and electrician bring
                10 more bodies on Tuesday. The peak is 25, the count is wrong,
                the citation is written.
              </li>
              <li>
                <strong>Hand sanitizer-only on a lead-paint site.</strong>{" "}
                Demolition, repaint, or historic-building work that disturbs
                lead requires water-and-soap hand washing. Sanitizer is not a
                substitute and inspectors know it.
              </li>
              <li>
                <strong>Letting servicing slip from weekly to biweekly to
                &quot;whenever.&quot;</strong> Cost-cutting on service is the
                fastest path to a citation. Inspectors smell unmaintained units
                from the gate.
              </li>
              <li>
                <strong>No ADA unit when a sub brings a worker with a
                wheelchair.</strong> Subcontractor crews change weekly. The GC
                is responsible. Default to one ADA on every site of 20+ to
                eliminate the scramble.
              </li>
              <li>
                <strong>Unanchored units on a windy site.</strong> A toppled
                unit is a sanitation hazard, a worker safety hazard, and an
                obvious citation. Brower Inc. anchors every unit placed in open
                terrain.
              </li>
            </ol>

            {/* H2: EXAMPLES */}
            <h2
              id="examples"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Real Oklahoma Jobsite Examples
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Three real-world Brower Inc. deployment scenarios — composite
              examples from actual Oklahoma construction projects we serve
              every week.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Example A — 12-Worker Kay County Remodel
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Setup:</strong> 1 standard porta potty + 1 paired hand
              washing station, weekly servicing.{" "}
              <strong>Why:</strong> 1–20 tier requires 1 toilet; hand wash is
              best practice; weekly is the minimum cadence.{" "}
              <strong>Add ADA if:</strong> any worker uses a wheelchair, or the
              project is public-facing (open house pre-sale, etc.).
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Example B — 50-Worker Wichita Commercial Build (Sedgwick County,
              KS)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Setup:</strong> 2 standard porta potties + 1 ADA-accessible
              unit + 2 hand washing stations, weekly servicing.{" "}
              <strong>Why:</strong> 21–200 tier requires 2 toilets; we add the
              ADA proactively for sub crews; one hand wash per 4 units is
              minimum, and we bump to 2 for the 50-worker shift comfort.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Example C — 240-Worker Pipeline / Solar Build, Western Oklahoma
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Setup:</strong> 6 standard porta potties + 1 ADA + 3 hand
              washing stations, twice-weekly servicing, wind-anchored,
              distributed across the 4-mile right-of-way in 2 clusters.{" "}
              <strong>Why:</strong> Above 200 tier is 1 toilet per 50; peak
              shift drives the count; the distributed placement keeps every
              worker within the 10-minute walk OSHA interpretive guidance
              requires.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Stop guessing at OSHA compliance."
                description={`Tell us your crew size, project length, and address. We'll send back an OSHA-compliant porta potty plan — unit count, ADA, hand wash, and weekly servicing — flat-rate and in writing, usually within the hour. Call ${PHONE} or use the form.`}
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
              Compliance Is Easier When You Don&apos;t Have to Think About It
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The OSHA portable restroom standard is short, specific, and easy
              to follow once you know what inspectors look for. The hard part is
              keeping every line on this checklist green for 6, 12, or 18 months
              of an active build — through weather, subcontractor turnover,
              crew expansions, and storm seasons.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              That&apos;s the job Brower Inc. does for Oklahoma and southern
              Kansas general contractors every week. Locally owned in Newkirk,
              1,375+ unit fleet stored on-site, 24/7 dispatch, and a servicing
              log every inspector accepts. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a free compliance plan
              </Link>{" "}
              and you&apos;ll have a flat-rate proposal in writing — usually
              within the hour.
            </p>
          </div>
          <BlogRelatedContent slug="osha-portable-restroom-requirements-construction-oklahoma" className="mt-12" />
        </div>
      </article>
    </>
  );
}
