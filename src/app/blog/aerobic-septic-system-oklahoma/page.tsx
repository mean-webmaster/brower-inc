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
  title: "Aerobic Septic Systems in Oklahoma: Cost & Maintenance",
  description:
    "How aerobic septic systems work in Oklahoma — aerobic vs. conventional, real 2026 maintenance and pumping costs, DEQ service-contract rules, and the 7 warning signs of a failing system.",
  alternates: {
    canonical: "/blog/aerobic-septic-system-oklahoma",
  },
  openGraph: {
    title:
      "Aerobic Septic Systems in Oklahoma: How They Work, Cost & Maintenance",
    description:
      "Aerobic vs. conventional septic, real 2026 Oklahoma costs, DEQ service-contract rules, and the warning signs of a failing aerobic system — explained by a local DEQ-licensed pumper.",
    type: "article",
    url: "/blog/aerobic-septic-system-oklahoma",
    images: [
      {
        url: "/images/brower-inc-aerobic-septic-system-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Branded white-and-red Brower Inc. vacuum septic pump truck parked beside a rural Oklahoma ranch home with a green spray-irrigated lawn, a navy-uniformed technician servicing an aerobic septic system control panel in bright daylight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aerobic Septic Systems in Oklahoma: How They Work, Cost & Maintenance",
    description:
      "Aerobic vs. conventional septic, real 2026 Oklahoma costs, DEQ service rules, and the warning signs of a failing system.",
    images: [
      "/images/brower-inc-aerobic-septic-system-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question: "What is an aerobic septic system, in plain terms?",
    answer:
      "An aerobic septic system (also called an aerobic treatment unit, or ATU) is an onsite wastewater system that pumps air into the treatment tank so oxygen-loving bacteria can break down waste far more thoroughly than a passive conventional tank. The cleaner effluent is then disinfected and dispersed — usually through spray heads onto a designated lawn area. Oklahoma uses these heavily because much of the state's heavy clay soil can't absorb conventional drain-field effluent well enough.",
  },
  {
    question: "How much does an aerobic septic system cost in Oklahoma in 2026?",
    answer:
      "A new aerobic system installed in Oklahoma typically runs $9,000–$16,000 depending on tank size, site conditions, and spray-field layout. Ongoing costs are the part most homeowners forget: a required maintenance/service contract runs $150–$350 per year, pumping every 2–4 years runs $400–$650, and replacement chlorine tablets, air pump diaphragms, and spray heads add $75–$300 a year. Brower Inc. quotes flat all-in pricing for pumping and service across our 20-county service area.",
  },
  {
    question: "How often does an aerobic septic tank need to be pumped?",
    answer:
      "Most aerobic systems need pumping every 2 to 4 years — more often than a conventional tank because the aeration process keeps more solids in suspension and the pretreatment tank fills steadily. Household size, water use, and whether a garbage disposal is used all shorten the interval. The aerobic alarm panel and a noticeable drop in effluent clarity are your real-world signals; don't wait for a backup.",
  },
  {
    question: "Does Oklahoma require a maintenance contract for an aerobic septic system?",
    answer:
      "Yes. The Oklahoma Department of Environmental Quality (DEQ) requires aerobic treatment units to be inspected and maintained under a service contract — generally three inspections per year by a certified maintenance provider for the first two years, then on an ongoing basis. This is a legal requirement, not an upsell. Letting the contract lapse can put the homeowner out of compliance and voids most manufacturer warranties.",
  },
  {
    question: "What's the difference between an aerobic and a conventional septic system?",
    answer:
      "A conventional system relies on anaerobic (no-oxygen) bacteria and lets gravity carry partially-treated effluent into an underground drain field. An aerobic system actively adds oxygen, treats waste to a much higher standard, disinfects it, and sprays the clean effluent above ground. Aerobic systems cost more to install and require ongoing service, but they work where conventional drain fields fail — tight clay soils, high water tables, and small or sloped lots, all common across Oklahoma.",
  },
  {
    question: "What are the warning signs my aerobic system is failing?",
    answer:
      "The big seven: (1) the alarm panel light or buzzer is on; (2) sewage odors near the tank or spray heads; (3) the air pump is silent or constantly running; (4) cloudy, gray, or foul-smelling spray effluent; (5) soggy ground or ponding around the spray field; (6) slow drains or gurgling indoors; (7) chlorinator empty for weeks. Any one warrants a service call — the alarm exists specifically so a small problem doesn't become a backup or a DEQ violation.",
  },
  {
    question: "Can Brower Inc. pump and service my aerobic septic system?",
    answer:
      "Yes. Brower Inc. is a DEQ-licensed pumper based in Newkirk, and we pump and service aerobic systems, conventional tanks, and commercial systems across 14 Oklahoma and 6 Kansas counties. We handle pump-outs, inspections, and routine servicing, and we quote flat all-in pricing with no mileage surcharge inside our service area. Call (580) 747-6206 with your address and system type.",
  },
  {
    question: "How long does an aerobic septic system last in Oklahoma?",
    answer:
      "With consistent maintenance, an aerobic treatment unit lasts 20–30 years. The tank and chambers outlast the mechanical parts — air pumps (5–7 years), spray heads, and control floats are the components that get replaced along the way. Skipping the service contract is the single biggest cause of premature failure; the systems that die early are almost always the ones that went years without inspection.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-is", label: "What Is an Aerobic Septic System?" },
  { id: "aerobic-vs-conventional", label: "Aerobic vs. Conventional Septic" },
  { id: "why-oklahoma", label: "Why So Many Oklahoma Homes Have Them" },
  { id: "how-works", label: "How an Aerobic System Works" },
  { id: "maintenance", label: "The Maintenance It Requires" },
  { id: "cost", label: "What It Costs in Oklahoma (2026)" },
  { id: "pumping", label: "How Often to Pump an Aerobic Tank" },
  { id: "warning-signs", label: "7 Signs Your System Is Failing" },
  { id: "deq-rules", label: "Oklahoma DEQ Rules & Service Contracts" },
  { id: "how-we-help", label: "How Brower Inc. Services Aerobic Systems" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Aerobic Septic Systems in Oklahoma",
    href: "/blog/aerobic-septic-system-oklahoma",
  },
];

export default function AerobicSepticSystemOklahomaPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "Aerobic Septic Systems in Oklahoma: How They Work, Cost & Maintenance",
              description:
                "A complete Oklahoma homeowner's guide to aerobic septic systems — how they work, aerobic vs. conventional, real 2026 costs, DEQ service-contract rules, pumping frequency, and the warning signs of failure.",
              slug: "aerobic-septic-system-oklahoma",
              datePublished: "2026-06-22",
              image:
                "https://browerinc.net/images/brower-inc-aerobic-septic-system-oklahoma-blog-cover-newkirk-ok.webp",
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
            <time dateTime="2026-06-22">June 22, 2026</time>
            <span>12 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Aerobic Septic Systems in Oklahoma: How They Work, Cost &amp;
            Maintenance
          </h1>

          <Image
            src={IMAGES.blogCoverAerobicSepticSystem}
            alt="Branded white-and-red Brower Inc. vacuum septic pump truck parked beside a rural Oklahoma ranch home with a green spray-irrigated lawn, a navy-uniformed technician servicing an aerobic septic system control panel in bright daylight"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Roughly <strong>1 in 5</strong> Oklahoma homes is not connected to
              a city sewer — and across great stretches of the state&apos;s
              heavy red clay, the system in the yard isn&apos;t a simple buried
              tank. It&apos;s an <strong>aerobic septic system</strong>: a small
              wastewater treatment plant with an air pump, a control panel, and
              spray heads that water the lawn with disinfected effluent. It works
              beautifully where a conventional drain field would fail — and it
              fails fast when nobody maintains it.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you just bought a rural Oklahoma property and found an alarm box
              on a post in the back yard, this guide is for you. We&apos;ll cover
              how an aerobic system actually works, how it differs from a
              conventional tank, what it really costs to run in 2026, the{" "}
              <Link
                href="/services/septic-services"
                className="text-primary hover:underline"
              >
                Oklahoma septic service
              </Link>{" "}
              rules the DEQ enforces, and the warning signs that mean call today.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                An aerobic septic system treats household wastewater with
                oxygen-fed bacteria, disinfects it, and sprays clean effluent
                onto a designated lawn area — making it the go-to choice for
                Oklahoma&apos;s tight clay soils and small lots. Expect{" "}
                <strong>$9,000–$16,000 to install</strong>, a{" "}
                <strong>DEQ-required service contract</strong> ($150–$350/yr),
                and <strong>pumping every 2–4 years</strong> ($400–$650). The
                non-negotiable rule: keep the maintenance contract active —
                it&apos;s the law in Oklahoma and it&apos;s what makes the system
                last 20-plus years.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Need your aerobic system pumped or serviced in Oklahoma?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. is DEQ-licensed and pumps aerobic and conventional
                systems across 14 Oklahoma and 6 Kansas counties. Flat all-in
                pricing, no mileage surcharge inside our service area.
              </p>
              <Link
                href="/services/septic-services"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See Septic Services →
              </Link>
            </div>

            {/* H2: WHAT IS */}
            <h2
              id="what-is"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What Is an Aerobic Septic System?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              An aerobic septic system — formally an{" "}
              <strong>aerobic treatment unit (ATU)</strong> — is an onsite
              wastewater system that adds oxygen to the treatment process. A
              small air pump continuously bubbles air through the waste, feeding
              aerobic (oxygen-loving) bacteria that digest solids far more
              completely than the anaerobic bacteria in a conventional tank. The
              result is cleaner effluent that can be disinfected and sprayed
              above ground instead of buried in a drain field.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The U.S. Environmental Protection Agency classifies these as
              advanced treatment systems. As the{" "}
              <a
                href="https://www.epa.gov/septic/types-septic-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EPA&apos;s guide to septic system types
              </a>{" "}
              explains, aerobic treatment units use the same biological process
              as a municipal sewage plant — just sized for one home. That higher
              treatment level is exactly why Oklahoma counties allow them on
              lots where a conventional system would never pass a perc test.
            </p>

            {/* H2: AEROBIC VS CONVENTIONAL */}
            <h2
              id="aerobic-vs-conventional"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Aerobic vs. Conventional Septic: The Honest Comparison
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Neither system is &quot;better&quot; in the abstract — the right
              one depends on your soil, lot size, and budget. Here is the
              straight comparison:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Factor
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Conventional
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Aerobic (ATU)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Treatment method
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Anaerobic (no oxygen)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Aerobic (added oxygen)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Effluent dispersal
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Buried drain field
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Above-ground spray
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Works in heavy clay?
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Often no
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Moving parts
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      None
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Air pump, floats, sprayers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Install cost (OK, 2026)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $5,000–$10,000
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $9,000–$16,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Required service contract
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      No
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Yes (DEQ)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Pump frequency
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      3–5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      2–4 years
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you&apos;re weighing the running costs of either system, our{" "}
              <Link
                href="/blog/septic-tank-pumping-cost-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma septic tank pumping cost guide
              </Link>{" "}
              breaks down the pumping side in detail for both types.
            </p>

            {/* H2: WHY OKLAHOMA */}
            <h2
              id="why-oklahoma"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Why So Many Oklahoma Homes Have Aerobic Systems
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Drive any rural road around Kay, Garfield, Noble, or Logan County
              and you&apos;ll see the tell-tale spray heads watering green
              circles of lawn. Three things make aerobic systems the default
              choice across much of Oklahoma:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Heavy clay soil.</strong> Much of north-central Oklahoma
                sits on dense clay that drains slowly. Conventional drain fields
                need soil that absorbs effluent; clay doesn&apos;t cooperate, so
                a conventional system clogs and surfaces.
              </li>
              <li>
                <strong>Small or sloped lots.</strong> A conventional drain
                field needs a lot of usable square footage. Aerobic spray
                dispersal fits properties where there&apos;s simply no room for a
                buried field.
              </li>
              <li>
                <strong>Higher treatment standards.</strong> Because the
                effluent is sprayed above ground, it must be treated and
                disinfected to a high standard first — which the aerobic process
                delivers and county health departments require.
              </li>
            </ul>

            <Image
              src={IMAGES.blogHeroAerobicSepticSystem}
              alt="Close-up of an aerobic septic system control and alarm panel with a green spray head misting a residential Oklahoma lawn while a navy-uniformed Brower Inc. technician inspects the unit in clear daylight"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* H2: HOW WORKS */}
            <h2
              id="how-works"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How an Aerobic System Works (the 3 Stages)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most Oklahoma aerobic systems move wastewater through three tanks
              or chambers before it ever reaches the lawn:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Trash / pretreatment tank.</strong> Solids settle out
                here, just like the first stage of a conventional tank. This is
                the chamber that fills with sludge and needs periodic pumping.
              </li>
              <li>
                <strong>Aeration chamber.</strong> The air pump injects oxygen,
                supercharging the bacteria that digest the remaining waste. This
                is the &quot;aerobic&quot; step and the heart of the system.
              </li>
              <li>
                <strong>Clarifying / disinfection chamber.</strong> The treated
                water clears, gets disinfected (usually by chlorine tablets or a
                UV unit), and is pumped to the spray heads that distribute it
                across the designated lawn area.
              </li>
            </ol>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A control panel runs the air pump and spray pump on timers, and an{" "}
              <strong>alarm</strong> warns you the moment the air pump fails or a
              float sticks. That alarm is the single most important part of the
              system to pay attention to — more on that below.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Alarm going off? Don&apos;t wait it out.
              </p>
              <p className="mt-2 text-gray-300">
                An aerobic alarm means the system has stopped treating waste
                properly — every day it runs untreated raises the risk of a
                backup and a DEQ violation. Brower Inc. dispatches across 14
                Oklahoma and 6 Kansas counties, day or night.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: MAINTENANCE */}
            <h2
              id="maintenance"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Maintenance Your Aerobic System Requires
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is where aerobic systems differ most from a buried
              conventional tank you can almost ignore. An aerobic system has
              mechanical parts and a disinfection step, so it needs routine
              attention. The{" "}
              <a
                href="https://www.epa.gov/septic/how-care-your-septic-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EPA&apos;s septic care guidance
              </a>{" "}
              stresses that advanced systems like ATUs require more frequent
              professional service than conventional ones. In practice, that
              means:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Keep the air pump running.</strong> If it&apos;s silent,
                treatment has stopped. Air pumps last 5–7 years and the
                diaphragm is a routine replacement part.
              </li>
              <li>
                <strong>Keep the chlorinator stocked.</strong> Use only
                septic-rated tablets — never pool chlorine, which is the wrong
                chemical and damages the system.
              </li>
              <li>
                <strong>Keep the spray heads clear</strong> of mowing debris and
                check that they&apos;re actually rotating during a spray cycle.
              </li>
              <li>
                <strong>Pump the pretreatment tank on schedule</strong> (every
                2–4 years) so solids don&apos;t carry into the aeration chamber.
              </li>
              <li>
                <strong>Maintain the DEQ service contract</strong> — required
                inspections catch small failures before they become backups.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For the broader homeowner routine that applies to both system
              types, pair this with our{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma septic system maintenance guide
              </Link>
              .
            </p>

            {/* H2: COST */}
            <h2
              id="cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What an Aerobic Septic System Costs in Oklahoma (2026)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The sticker price is only half the story. Here&apos;s the full
              picture for a typical Oklahoma residential system in 2026:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Cost Item
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Frequency
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      2026 Range (OK)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      New system install
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      One-time
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $9,000–$16,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      DEQ service contract
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Annual
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $150–$350
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Tank pumping
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2–4 yrs
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $400–$650
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Chlorine tablets
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Annual
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $40–$120
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Air pump / diaphragm
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 5–7 yrs
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $150–$500
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Spray head / float repair
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      As needed
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $75–$300
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Budget roughly <strong>$400–$700 a year</strong> in routine
              running costs once you average pumping across the cycle. That is
              dramatically cheaper than the alternative — a neglected aerobic
              system that fails inspection or backs up can cost several thousand
              to rehabilitate.
            </p>

            <blockquote className="mt-6 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;The aerobic systems we get called to rescue are almost
                never bad equipment. They&apos;re good systems that went three or
                four years with a dead air pump and an empty chlorinator because
                nobody was on a service contract. Keep up the maintenance and
                these things just run.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Troy Brower, Owner | Brower Inc. | Newkirk, OK
              </p>
            </blockquote>

            {/* H2: PUMPING */}
            <h2
              id="pumping"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Often to Pump an Aerobic Tank
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Aerobic systems generally need pumping{" "}
              <strong>every 2 to 4 years</strong> — a bit more often than a
              conventional tank, because the pretreatment chamber accumulates
              solids steadily and an overloaded chamber pushes solids into the
              aeration stage, where they foul the whole process. The exact
              interval depends on:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Household size</strong> — more people, more solids,
                shorter cycle.
              </li>
              <li>
                <strong>Garbage disposal use</strong> — disposals load the tank
                fast; pump on the 2-year end if you use one daily.
              </li>
              <li>
                <strong>Tank and chamber size</strong> — smaller pretreatment
                tanks fill sooner.
              </li>
              <li>
                <strong>Water usage</strong> — high-volume laundry and long
                showers push more through the system.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Don&apos;t guess — have the sludge depth checked at each service
              visit and pump when it&apos;s due, not after a problem. A
              scheduled pump is a routine{" "}
              <Link
                href="/services/septic-tank-pumping"
                className="text-primary hover:underline"
              >
                septic tank pumping
              </Link>{" "}
              call; an emergency one after a backup costs more and risks the
              spray field.
            </p>

            {/* H2: WARNING SIGNS */}
            <h2
              id="warning-signs"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              7 Warning Signs Your Aerobic System Is Failing
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Aerobic systems give you more warning than conventional ones — if
              you know what to watch for. Any one of these means schedule
              service:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>The alarm light or buzzer is on.</strong> The system is
                telling you the air pump or a float has failed.
              </li>
              <li>
                <strong>Sewage odor</strong> near the tank lids or the spray
                heads.
              </li>
              <li>
                <strong>The air pump is silent</strong> — or, conversely,
                running constantly and hot.
              </li>
              <li>
                <strong>Cloudy, gray, or foul spray effluent.</strong> Properly
                treated effluent is clear and nearly odorless.
              </li>
              <li>
                <strong>Soggy ground or ponding</strong> around the spray field.
              </li>
              <li>
                <strong>Slow drains or gurgling</strong> inside the house.
              </li>
              <li>
                <strong>The chlorinator has been empty for weeks</strong> —
                untreated effluent is being sprayed onto your lawn.
              </li>
            </ol>

            {/* H2: DEQ RULES */}
            <h2
              id="deq-rules"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Oklahoma DEQ Rules &amp; Required Service Contracts
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Onsite wastewater systems in Oklahoma are regulated by the{" "}
              <a
                href="https://www.deq.ok.gov/water-quality-division/onsite-sewage-treatment-systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Oklahoma DEQ Onsite Sewage Treatment Systems program
              </a>
              . Two rules matter most for aerobic owners:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>A maintenance/service contract is mandatory.</strong>{" "}
                Aerobic treatment units must be inspected by a certified
                maintenance provider on a set schedule. This is a legal
                requirement and it protects the public water that the sprayed
                effluent eventually reaches.
              </li>
              <li>
                <strong>Pumpers and installers must be DEQ-licensed.</strong>{" "}
                Septage can only be removed and disposed of by a licensed pumper
                at a permitted facility. Always confirm a provider&apos;s license
                before they touch the system — Brower Inc. provides certificate
                copies on request.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The treatment standards these rules enforce mirror the
              national-level certifications for advanced onsite systems published
              by independent bodies like{" "}
              <a
                href="https://www.nsf.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NSF
              </a>
              , which sets the performance standards most ATU manufacturers build
              to. The takeaway for a homeowner: an aerobic system is a regulated
              treatment plant, and staying on a service contract keeps you
              compliant and your warranty intact.
            </p>

            {/* H2: HOW WE HELP */}
            <h2
              id="how-we-help"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Brower Inc. Services Aerobic Systems
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ve been pumping and servicing onsite systems across
              northern Oklahoma since 1980 — aerobic units, conventional tanks,
              commercial systems, and grease traps. When you call us about an
              aerobic system, here&apos;s what you get:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>A DEQ-licensed pumper</strong> who knows aerobic systems,
                not a general hauler.
              </li>
              <li>
                <strong>Flat all-in pricing</strong> — pump, rinse, inspection,
                and DEQ-compliant disposal in one number.
              </li>
              <li>
                <strong>No mileage surcharge</strong> inside our 20-county
                Oklahoma and Kansas service area.
              </li>
              <li>
                <strong>An honest assessment</strong> of the air pump,
                chlorinator, floats, and spray heads while we&apos;re on site —
                so small parts get caught before they become a backup.
              </li>
              <li>
                <strong>A recommended next-service date</strong> in writing.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Headquartered in Newkirk, we run daily routes through{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay County
              </Link>{" "}
              and across north-central Oklahoma and southern Kansas. If
              you&apos;re also evaluating a system before a property purchase, a{" "}
              <Link
                href="/services/septic-inspections"
                className="text-primary hover:underline"
              >
                septic inspection
              </Link>{" "}
              tells you exactly what you&apos;re buying.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Get aerobic septic service from a DEQ-licensed local pumper."
                description={`Tell us your address and system type and we'll quote pump + inspection + DEQ disposal in one flat number — no mileage surcharge inside our 20-county service area. Call ${PHONE} or send us the details and we'll schedule a visit.`}
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
              An Aerobic System Is Easy — If You Maintain It
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              An aerobic septic system is the reason thousands of rural Oklahoma
              homes can sit on clay soil and small lots and still handle their
              own wastewater cleanly. The technology is proven; the only thing
              that ever goes wrong is neglect — a dead air pump, an empty
              chlorinator, a lapsed service contract, a tank pumped years too
              late.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk, fully DEQ-licensed, and
              services aerobic and conventional systems across 14 Oklahoma and 6
              Kansas counties — flat pricing, no surprise fees, and a real person
              on the phone. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a septic service quote
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent
            slug="aerobic-septic-system-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
