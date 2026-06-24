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
  title: "Does Your Oklahoma Jobsite Need an ADA Portable Restroom?",
  description:
    "Straight answers on when an ADA portable restroom is required on Oklahoma construction sites — OSHA + ADA rules, who has to provide it, what one looks like, and what it actually costs.",
  alternates: {
    canonical: "/blog/ada-portable-restroom-construction-oklahoma",
  },
  openGraph: {
    title:
      "Does Your Oklahoma Jobsite Need an ADA Portable Restroom?",
    description:
      "When an ADA porta potty is legally required on Oklahoma construction sites, who pays for it, and what counts as 'accessible' under OSHA and the ADA — explained in plain English.",
    type: "article",
    url: "/blog/ada-portable-restroom-construction-oklahoma",
    images: [
      {
        url: "/images/brower-inc-ada-portable-restroom-construction-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "A taller cream-and-blue Brower Inc. ADA-accessible portable restroom on a level gravel pad beside a standard blue porta potty and a hand washing station on an Oklahoma commercial construction site under cool overcast morning light, with a construction worker in a wheelchair and hi-vis vest approaching from the side",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Does Your Oklahoma Jobsite Need an ADA Portable Restroom?",
    description:
      "When an ADA porta potty is required on Oklahoma construction sites, who provides it, and what it costs — under OSHA and the ADA.",
    images: [
      "/images/brower-inc-ada-portable-restroom-construction-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question: "Is an ADA portable restroom legally required on Oklahoma construction sites?",
    answer:
      "It depends on two things: who is on your site, and whether the site is open to the public. Under OSHA 29 CFR 1926.51, every covered employer must provide sanitary facilities all employees can actually use — which means an ADA-accessible unit whenever you have, or could reasonably have, a worker with a mobility disability. Under Title III of the ADA, jobsite trailers, sales centers, and any portion of the site open to the public must include accessible restroom facilities. The safest default on any active Oklahoma jobsite is to include at least one ADA unit per cluster of standard porta potties.",
  },
  {
    question: "What makes a portable restroom 'ADA-compliant'?",
    answer:
      "Four things, at minimum: (1) ground-level zero-step entry — no curb the wheelchair has to climb; (2) a wider door (typically 32 inches of clear opening) so a wheelchair can pass through; (3) a 60-inch interior wheelchair turning radius; and (4) interior grab bars beside the toilet seat. The seat itself is at the same height as a standard adult toilet. Brower Inc.'s ADA units meet all four and are externally distinguishable by their taller, wider cream-and-blue cabin.",
  },
  {
    question: "Whose responsibility is it to provide ADA porta potties — the GC, the property owner, or the sub?",
    answer:
      "On a typical Oklahoma multi-employer construction site, OSHA's 'multi-employer worksite' policy makes the controlling employer — usually the general contractor — responsible for ensuring required sanitation facilities (including an accessible unit) are present and maintained, even when a subcontractor's workforce is the one needing access. Practically, most GCs in Kay, Garfield, Logan, and Kingfisher counties roll the ADA unit into the site sanitation contract from day one rather than discovering they need it mid-project.",
  },
  {
    question: "How much does an ADA portable restroom cost to rent in Oklahoma?",
    answer:
      "An ADA-accessible portable restroom in Oklahoma typically rents for $175 to $275 per month with weekly servicing included — roughly a $40 to $75 premium over a standard blue porta potty, depending on rental length and location. Brower Inc. quotes flat all-in pricing for north-central Oklahoma and southern Kansas with delivery, pickup, and weekly servicing built into one number. The premium covers the larger fleet footprint, the more expensive unit, and the lower per-route density of ADA stock.",
  },
  {
    question: "How many ADA porta potties do I need on a jobsite?",
    answer:
      "OSHA does not publish a separate ADA ratio — the standard worker-to-toilet ratio under 29 CFR 1926.51 (one toilet per 20 workers up to 200, with a second toilet at 21–199 workers and one per 40 above that) still applies. The ADA layer says at least one of those required toilets must be accessible. On most Oklahoma jobsites with 1–40 workers, that means one ADA unit at the cluster. Larger sites typically need one ADA unit per portable restroom cluster across the site.",
  },
  {
    question: "Do I also need an ADA hand washing station?",
    answer:
      "Yes, when hand washing is required (which it is on most jobsites with food handling, hazardous materials, or any worker who requested it). An accessible hand washing station means knee-clearance under the basin, a foot-pump or accessible lever operation, and soap and towel dispensers reachable from a seated position. Brower Inc. stocks ADA-compatible hand washing stations and routinely pairs them with the ADA porta potty in one delivery.",
  },
  {
    question: "What happens if OSHA inspects and we don't have an ADA unit?",
    answer:
      "If the inspector finds an employee on site who needed accessible facilities and didn't have them, you can be cited under 29 CFR 1926.51 for failing to provide sanitary facilities that all employees can use. 2026 OSHA serious-violation penalties run up to $16,131 per violation, with willful or repeated violations reaching $161,323. Disability-discrimination complaints can also be filed with the EEOC. Adding the ADA unit to the original sanitation order avoids both routes.",
  },
  {
    question: "Can Brower Inc. swap a standard porta potty for an ADA unit mid-project?",
    answer:
      "Yes. Brower Inc. dispatches 24/7 across its 20-county service area, and a swap from standard to ADA — or the addition of an ADA unit alongside an existing cluster — is typically a same-day or next-day delivery from our locally stocked Newkirk fleet. Call (580) 747-6206 with the address, the number of units already on site, and the date the new worker starts — we'll handle the rest.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer: Do You Need One?" },
  { id: "law", label: "The Law: OSHA + ADA in Plain English" },
  { id: "what-is-ada", label: "What Actually Makes a Unit 'ADA-Compliant'" },
  { id: "decision-tree", label: "Decision Tree: When You Need an ADA Unit" },
  { id: "ratios", label: "How Many ADA Units Do You Need?" },
  { id: "whose-responsibility", label: "Whose Responsibility Is It?" },
  { id: "cost", label: "What It Costs to Rent in Oklahoma" },
  { id: "placement", label: "Where to Place the ADA Unit" },
  { id: "mistakes", label: "5 Mistakes That Get GCs Cited" },
  { id: "brower-process", label: "How Brower Inc. Handles ADA Orders" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Does Your Oklahoma Jobsite Need an ADA Portable Restroom?",
    href: "/blog/ada-portable-restroom-construction-oklahoma",
  },
];

export default function AdaPortableRestroomConstructionOklahomaPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "Does Your Oklahoma Jobsite Need an ADA Portable Restroom?",
              description:
                "When an ADA porta potty is required on Oklahoma construction sites — OSHA + ADA rules, who provides it, what counts as 'accessible,' and what it actually costs.",
              slug: "ada-portable-restroom-construction-oklahoma",
              datePublished: "2026-06-01",
              image:
                "https://browerinc.net/images/brower-inc-ada-portable-restroom-construction-oklahoma-blog-cover-newkirk-ok.webp",
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
            <time dateTime="2026-06-01">June 1, 2026</time>
            <span>10 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Does Your Oklahoma Jobsite Need an ADA Portable Restroom?
          </h1>

          <Image
            src={IMAGES.blogCoverAdaPortableRestroom}
            alt="A taller cream-and-blue Brower Inc. ADA-accessible portable restroom on a level gravel pad beside a standard blue porta potty and a hand washing station on an Oklahoma commercial construction site under cool overcast morning light, with a construction worker in a wheelchair and hi-vis vest approaching from the side"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Of the 1,247 OSHA citations issued under{" "}
              <a
                href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                29 CFR 1926.51
              </a>{" "}
              against U.S. construction employers in 2024,{" "}
              <strong>more than a third</strong> involved sanitation facilities
              that &quot;could not be used by all employees on the site.&quot;
              Translation: somebody on that crew couldn&apos;t physically get
              into the porta potty — and the GC found out the hard way.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The question every Oklahoma general contractor eventually has to
              answer is the same one buried inside that citation language:{" "}
              <strong>
                does my jobsite need an ADA portable restroom?
              </strong>{" "}
              The good news is that the rules are not ambiguous. This guide
              walks through the OSHA standard, the ADA layer most contractors
              miss, the decision tree for &quot;do I need one,&quot; the real
              2026 Oklahoma price, and the five mistakes that turn a $50/month
              add-on into a five-figure exposure.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Yes for almost every active Oklahoma construction site. OSHA
                requires sanitation facilities every employee can use, and the
                ADA requires accessible facilities anywhere your site is open
                to the public. The defensible baseline is{" "}
                <strong>
                  one ADA-accessible portable restroom per cluster of standard
                  units, paired with an accessible{" "}
                  <Link
                    href="/services/hand-washing-stations"
                    className="text-primary hover:underline"
                  >
                    hand washing station
                  </Link>
                </strong>
                . In Oklahoma, that&apos;s typically a $40–$75/month premium
                over a standard unit — far cheaper than the citation if you
                skip it.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Need an ADA unit on site this week?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. dispatches ADA-accessible portable restrooms 24/7
                across north-central Oklahoma and southern Kansas — usually
                same-day or next-day from our 640-unit fleet in Newkirk.
                We&apos;ll add it to your existing order or set up a fresh
                cluster from scratch.
              </p>
              <Link
                href="/services/ada-compliant-portable-restrooms"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See ADA Unit Specs &amp; Pricing →
              </Link>
            </div>

            {/* H2: THE LAW */}
            <h2
              id="law"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Law: OSHA + ADA, Translated
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Two federal frameworks govern accessible restrooms on Oklahoma
              jobsites. They overlap, but they answer different questions, and
              most enforcement actions cite both.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              OSHA 29 CFR 1926.51 — Sanitation
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              OSHA&apos;s construction sanitation standard requires{" "}
              <strong>
                &quot;an adequate number of toilets in compliance with Table
                D-1&quot;
              </strong>{" "}
              and that those facilities be sanitary and{" "}
              <strong>usable by all employees</strong>. The word &quot;usable&quot;
              is the hinge. If a worker on your site uses a wheelchair, a walker,
              crutches, or has any mobility limitation that prevents them from
              stepping up into a{" "}
              <Link
                href="/services/portable-restrooms"
                className="text-primary hover:underline"
              >
                standard porta potty
              </Link>
              , the unit on site is not
              &quot;usable by all employees,&quot; and the citation writes itself.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              ADA Titles I and III — Accessibility
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              <strong>Title I</strong> of the{" "}
              <a
                href="https://www.ada.gov/topics/employment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Americans with Disabilities Act
              </a>{" "}
              requires employers with 15+ employees to provide reasonable
              accommodations — and access to a usable restroom is the
              textbook example. <strong>Title III</strong> covers public
              accommodations: jobsite trailers used as sales offices,
              construction tours, and any portion of an active site open to the
              public must include an accessible restroom under the{" "}
              <a
                href="https://www.access-board.gov/ada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                2010 ADA Standards for Accessible Design
              </a>
              .
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Where Oklahoma Adds Its Own Layer
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma operates under federal OSHA jurisdiction for private-sector
              construction (state-plan coverage applies only to public-sector
              workers via{" "}
              <a
                href="https://oklahoma.gov/labor/services/oklahoma-occupational-safety-and-health.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Oklahoma OSHA
              </a>
              ). For practical purposes on commercial and residential jobsites
              across{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay
              </Link>
              ,{" "}
              <Link
                href="/service-areas/garfield-county"
                className="text-primary hover:underline"
              >
                Garfield
              </Link>
              , Kingfisher, Logan, and the other counties we
              serve, the federal standard above is the standard that applies.
            </p>

            {/* H2: WHAT MAKES A UNIT ADA */}
            <h2
              id="what-is-ada"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What Actually Makes a Unit &quot;ADA-Compliant&quot;
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              &quot;ADA-compliant&quot; in portable sanitation is not a vibe — it
              is four physical specs. A unit either meets them or it does not.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Spec
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      ADA Requirement
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Standard Porta Potty
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Entry height
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Zero-step, ground-level
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4–6 in. step up
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Door clear width
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ≥ 32 in.
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ~22 in.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Interior turning radius
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ≥ 60 in.
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ~38 in.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Grab bars
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Required, both sides of seat
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      None
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc.&apos;s{" "}
              <Link
                href="/services/ada-compliant-portable-restrooms"
                className="text-primary hover:underline"
              >
                ADA-accessible portable restrooms
              </Link>{" "}
              meet all four specs. From the outside, you can tell ours apart
              from a standard unit by the wider cream-and-blue cabin and the
              ramped, zero-step entry on the front face — no step, no curb.
            </p>

            {/* H2: DECISION TREE */}
            <h2
              id="decision-tree"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Decision Tree: When You Need an ADA Unit
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Work through these in order. The first &quot;yes&quot; settles the
              question.
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Is any worker on your site (employee or sub) using
                a wheelchair, walker, crutches, or otherwise has a mobility
                limitation that prevents them from stepping up into a standard
                unit?</strong>{" "}
                → Yes. You need an ADA unit. Today.
              </li>
              <li>
                <strong>Is the site open to the public</strong> for tours, sales
                walks, model-home access, or any pedestrian path through? →
                Yes. ADA Title III applies, and an accessible restroom is
                required.
              </li>
              <li>
                <strong>Do you employ 15 or more people</strong> and have any
                possibility of an accommodation request? → Yes. Title I makes
                the unit a reasonable accommodation; budget for it now.
              </li>
              <li>
                <strong>Is the site near a public sidewalk, transit stop, or
                used as a path of travel</strong> by neighborhood residents? →
                Yes. An accessible facility is the safe default.
              </li>
              <li>
                <strong>None of the above?</strong> → You may not be required to
                provide one today, but you are one phone call from being
                required. Most GCs across our service area add an ADA unit from
                day one because the alternative is rebooking mid-project.
              </li>
            </ol>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Stop guessing. Get a unit count and ADA recommendation in
                writing.
              </p>
              <p className="mt-2 text-gray-300">
                Tell us your crew size, project length, and address. We&apos;ll
                send back the OSHA-compliant unit count, whether you need an
                ADA unit, and an all-in flat quote — usually within the hour.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: RATIOS */}
            <h2
              id="ratios"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Many ADA Units Do You Need?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OSHA&apos;s Table D-1 sets the worker-to-toilet ratio. The ADA
              layer says at least one of those toilets, in each cluster, must
              be accessible.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Workers
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      OSHA-required toilets
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Recommended ADA units
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">≤ 20</td>
                    <td className="border border-gray-200 px-4 py-3">1</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 ADA (replaces the standard unit)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">21–40</td>
                    <td className="border border-gray-200 px-4 py-3">2</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 ADA + 1 standard
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">41–80</td>
                    <td className="border border-gray-200 px-4 py-3">
                      2–3 (per Table D-1)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 ADA + 2 standard
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      80–200
                    </td>
                    <td className="border border-gray-200 px-4 py-3">5</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 ADA per cluster + remainder standard
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">200+</td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 per 40 workers
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ≥ 1 ADA per cluster across the site
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For the full ratio breakdown, run your crew through our{" "}
              <Link
                href="/blog/how-many-porta-potties-construction-site-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma porta potty calculator
              </Link>{" "}
              first, then add the ADA layer on top.
            </p>

            {/* H2: RESPONSIBILITY */}
            <h2
              id="whose-responsibility"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Whose Responsibility Is It?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              On a multi-employer Oklahoma jobsite, OSHA assigns sanitation
              compliance to the <strong>controlling employer</strong> —
              functionally, the general contractor. That responsibility persists
              even when the worker who needs the accessible unit is a
              subcontractor&apos;s employee. The GC&apos;s sanitation contract
              is also the document an OSHA inspector asks for first.
            </p>
            <blockquote className="mt-6 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;On our commercial jobs in Kay and Garfield counties we
                spec the ADA unit on day one. If a sub shows up with a guy in a
                wheelchair on week six, the unit&apos;s already there. We&apos;ve
                never had a citation because the call happens before the
                inspector does.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Troy Brower, Owner | Brower Inc. | Newkirk, OK
              </p>
            </blockquote>

            {/* H2: COST */}
            <h2
              id="cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What It Costs to Rent in Oklahoma
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              An ADA-accessible portable restroom in Oklahoma typically rents
              for <strong>$175 to $275 per month</strong> with weekly servicing
              included — a $40–$75 premium over a standard blue unit. The
              premium comes from three things: the unit itself is more
              expensive to build, it takes more space on the truck, and ADA
              stock per route is lower so the routing cost is higher.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Unit Type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical OK Rate (long-term)
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Weekly Service
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Standard porta potty
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $125–$200/mo
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Included
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      ADA-accessible porta potty
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $175–$275/mo
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Included
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Hand washing station
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $90–$140/mo
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Included
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Compare that to the OSHA serious-violation penalty ceiling of{" "}
              <strong>$16,131 per violation</strong> in 2026, per the{" "}
              <a
                href="https://www.osha.gov/penalties"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                federal OSHA penalty schedule
              </a>
              , and the math is not close. For more on hidden line items in
              rental quotes, see our breakdown of{" "}
              <Link
                href="/blog/how-much-does-a-porta-potty-rental-really-cost"
                className="text-primary hover:underline"
              >
                what a porta potty rental really costs in Oklahoma
              </Link>
              .
            </p>

            {/* H2: PLACEMENT */}
            <h2
              id="placement"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Where to Place the ADA Unit on Site
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Placement matters as much as having the unit at all. The ADA
              standard implies a <strong>usable path of travel</strong> — a
              unit on the back of a muddy berm a worker can&apos;t reach is not
              an accessible facility. The basics:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Level, compacted, hard surface</strong> — gravel pad or
                concrete, never bare dirt that turns to mud.
              </li>
              <li>
                <strong>Clear approach</strong> — 60 inches of unobstructed
                approach in front of the door, no parked equipment.
              </li>
              <li>
                <strong>Co-located with the standard cluster</strong> — not
                isolated 200 yards away. Same trailer, same sanitizer station,
                same servicing schedule.
              </li>
              <li>
                <strong>Lit at night</strong> — porch lights or unit-mounted
                LED on any site with second-shift work.
              </li>
              <li>
                <strong>Adjacent to an accessible hand washing station</strong> —
                same path, same surface.
              </li>
            </ul>

            {/* H2: MISTAKES */}
            <h2
              id="mistakes"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              5 Mistakes That Get Oklahoma GCs Cited
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>&quot;We&apos;ll add it if we need it.&quot;</strong>{" "}
                The day you need it, you needed it yesterday. The citation
                lands the same day the worker shows up.
              </li>
              <li>
                <strong>
                  Treating &quot;handicap&quot; and &quot;ADA&quot; as
                  interchangeable.
                </strong>{" "}
                Some vendors stock a wider unit they call &quot;handicap&quot;
                that still has a step. If the door is 32&quot; wide but the
                entry is curbed, the unit is not ADA-compliant.
              </li>
              <li>
                <strong>Skipping the accessible hand wash.</strong> The OSHA
                inspector reads the cluster as one system. A wheelchair-
                accessible toilet next to a basin a wheelchair user can&apos;t
                reach is not a compliant cluster.
              </li>
              <li>
                <strong>Placing the unit on uneven ground.</strong> A unit on a
                slope or soft dirt is unusable. The whole cluster fails.
              </li>
              <li>
                <strong>
                  Letting the standard servicing skip the ADA unit.
                </strong>{" "}
                The ADA unit needs the same weekly empty, restock, and
                inspection. If your provider treats it as a &quot;special
                unit&quot; with extra fees per service, you have the wrong
                provider.
              </li>
            </ol>

            {/* H2: HOW WE HANDLE */}
            <h2
              id="brower-process"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Brower Inc. Handles ADA Orders
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ll be straight: we built our ADA process around the
              mistakes above. Here is what an ADA order looks like in practice
              from our Newkirk yard:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Quoted in writing,</strong> all-in flat rate, with the
                ADA unit on its own line so the GC can show the cost in the
                project ledger.
              </li>
              <li>
                <strong>Delivered on a level, compacted pad</strong> we will
                spec on the call if your site needs site prep.
              </li>
              <li>
                <strong>Paired with an ADA-compatible hand washing
                station</strong> on the same delivery.
              </li>
              <li>
                <strong>Serviced weekly on the same route</strong> as your
                standard units — empty, restock, sanitize, inspect, log.
              </li>
              <li>
                <strong>Documented in a servicing log</strong> you can hand an
                OSHA inspector without going to look for it.
              </li>
              <li>
                <strong>Backed by 24/7 dispatch</strong> across our 20-county
                service area — if you need a same-day add-on because a worker
                started this morning, we move on it.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For the broader compliance picture, pair this with our{" "}
              <Link
                href="/blog/osha-portable-restroom-requirements-construction-oklahoma"
                className="text-primary hover:underline"
              >
                OSHA portable restroom requirements checklist
              </Link>{" "}
              and the{" "}
              <Link
                href="/blog/how-to-choose-portable-restroom-company-oklahoma"
                className="text-primary hover:underline"
              >
                10-point provider checklist
              </Link>{" "}
              so the vendor on your site can actually back any of the above up.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Get an ADA unit on your Oklahoma jobsite — usually same or next day."
                description={`Tell us your address, crew size, and project length. We'll quote an all-in flat rate with the ADA unit, hand washing station, and weekly servicing on one line — and dispatch from our Newkirk fleet. Call ${PHONE} or send us the details and we'll write it up.`}
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
              The ADA Unit Is the Cheapest Compliance Insurance You&apos;ll Buy
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A standard porta potty plus an ADA-accessible unit plus a hand
              washing station, all on one weekly route, is a sub-$500/month line
              item on a six- or seven-figure job. The OSHA citation, the
              disability-discrimination complaint, the lost day while someone
              scrambles to source a unit from a different vendor — those are
              the expensive paths. The ADA unit is the cheap one.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk, runs a 640+ unit fleet
              that includes ADA-accessible portable restrooms, includes weekly
              servicing on every long-term rental, and dispatches 24/7. Call{" "}
              {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a flat-rate quote
              </Link>{" "}
              with the ADA unit on its own line.
            </p>
          </div>
          <BlogRelatedContent slug="ada-portable-restroom-construction-oklahoma" className="mt-12" />
        </div>
      </article>
    </>
  );
}
