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
    "The Oklahoma Homeowner's Complete Guide to Septic System Maintenance (2026)",
  description:
    "Everything Oklahoma homeowners need to know about septic system maintenance — pumping schedules, warning signs, DEQ regulations, seasonal tips, and costs. Expert guide from a local septic service provider.",
  alternates: { canonical: "/blog/septic-system-maintenance-oklahoma" },
};

const FAQS = [
  {
    question: "How often should I pump my septic tank in Oklahoma?",
    answer:
      "Most Oklahoma households should pump their septic tank every 3 to 5 years. The exact interval depends on household size, tank capacity, water usage habits, and whether you use a garbage disposal. A family of four with a 1,000-gallon tank and a garbage disposal should pump closer to every 2 to 3 years. A couple with the same tank and no disposal can often go 4 to 5 years between pumpings.",
  },
  {
    question: "How much does septic pumping cost in Oklahoma?",
    answer:
      "Residential septic pumping in Oklahoma typically costs $250 to $500 per pump-out. The price varies based on tank size, accessibility, distance from the service provider, and how long it has been since the last pumping. Severely neglected tanks that require extra labor or multiple trips can cost more. Brower Inc. provides upfront pricing with no hidden fees — call (580) 747-6206 for an exact quote.",
  },
  {
    question: "What are the signs my septic system is failing?",
    answer:
      "The most common warning signs include slow-draining sinks and toilets, sewage odors inside or outside the home, standing water or soggy spots over the drain field, gurgling sounds in the plumbing, and unusually lush or green grass over the drain field area. Sewage backup into the house is the most serious sign and requires immediate professional service. If you notice any of these symptoms, do not wait — early intervention is far cheaper than a full system replacement.",
  },
  {
    question: "Can I pump my own septic tank in Oklahoma?",
    answer:
      "Technically, Oklahoma law does not prohibit homeowners from pumping their own tank, but it is strongly discouraged and practically infeasible. You need a licensed vacuum truck, proper disposal permits, and an approved disposal site — you cannot legally dump septage on your own property or into any waterway. The Oklahoma DEQ requires that septage be disposed of at an approved facility. The equipment alone costs tens of thousands of dollars, making professional pumping the only realistic option.",
  },
  {
    question: "What happens if I never pump my septic tank?",
    answer:
      "If you skip pumping indefinitely, solids accumulate in the tank and eventually overflow into the drain field. This clogs the drain field soil, causes sewage to surface in your yard, and can contaminate nearby groundwater and wells. A clogged drain field often requires complete replacement — costing $5,000 to $20,000 or more in Oklahoma. Regular pumping at $250 to $500 every few years is dramatically cheaper than replacing the entire system.",
  },
  {
    question:
      "What is the difference between aerobic and conventional septic systems?",
    answer:
      "A conventional (anaerobic) septic system uses a buried tank and gravity-fed drain field — bacteria break down waste without oxygen. An aerobic treatment unit (ATU) adds an air pump that introduces oxygen into the tank, dramatically accelerating bacterial decomposition. ATUs produce cleaner effluent and require smaller drain fields, making them popular on tight lots and in areas with high water tables. However, ATUs require electricity, more frequent maintenance (typically quarterly inspections), and cost more to install and operate. The Oklahoma DEQ has specific permitting requirements for each type.",
  },
  {
    question: "Does homeowners insurance cover septic system failure?",
    answer:
      "Standard homeowners insurance policies in Oklahoma typically do not cover septic system failure due to normal wear, neglect, or lack of maintenance. Some policies may cover sudden and accidental damage — for example, if a tree root unexpectedly crushes a septic line. Separate endorsements or riders for septic system coverage are available from some insurers. Check your specific policy and consider adding coverage if your system is older than 15 years. Either way, regular maintenance is your best financial protection.",
  },
  {
    question: "How do I find my septic tank on my property?",
    answer:
      "Start by checking your property records at the county clerk's office — the original installation permit often includes a site diagram showing the tank location. You can also follow the main sewer line from where it exits your home (usually a 4-inch PVC pipe in the basement or crawl space) outward into the yard. A septic professional can use a probe rod or electronic locator to pinpoint the tank. Look for subtle clues in your yard: a slight depression, a patch of grass that stays greener than its surroundings, or a spot where snow melts faster in winter. Brower Inc. can locate your tank as part of a routine pumping service call.",
  },
];

const TOC_ITEMS = [
  { id: "how-septic-systems-work", label: "How Your Septic System Works" },
  { id: "pumping-schedule", label: "How Often to Pump" },
  { id: "pumping-schedule-table", label: "Pumping Schedule by Household" },
  { id: "warning-signs", label: "Warning Signs You Need Service" },
  { id: "oklahoma-deq-regulations", label: "Oklahoma DEQ Regulations" },
  {
    id: "what-not-to-put-in-septic",
    label: "What to Never Put in Your Septic",
  },
  { id: "seasonal-maintenance", label: "Seasonal Maintenance Tips" },
  { id: "septic-pumping-cost", label: "Cost of Septic Pumping in Oklahoma" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function SepticSystemMaintenanceOklahomaPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "The Oklahoma Homeowner's Complete Guide to Septic System Maintenance",
              description:
                "Everything Oklahoma homeowners need to know about septic system maintenance — pumping schedules, warning signs, DEQ regulations, seasonal tips, and costs. Expert guide from a local septic service provider.",
              slug: "septic-system-maintenance-oklahoma",
              datePublished: "2026-04-12",
              image: IMAGES.septicPumpingWide,
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
                name: "Septic System Maintenance",
                href: "/blog/septic-system-maintenance-oklahoma",
              },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          {
            name: "Septic System Maintenance",
            href: "/blog/septic-system-maintenance-oklahoma",
          },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Septic &amp; Property Maintenance
            </span>
            <time dateTime="2026-04-12">April 12, 2026</time>
            <span>12 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            The Oklahoma Homeowner&apos;s Complete Guide to Septic System
            Maintenance
          </h1>

          <Image
            src={IMAGES.septicPumpingWide}
            alt="Brower Inc. residential septic pumping service in progress at an Oklahoma home"
            width={1600}
            height={900}
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            priority
          />

          <div className="prose mt-8 max-w-none">
            {/* HOOK */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Nearly <strong>one in three</strong> Oklahoma homes relies on a
              septic system instead of a municipal sewer connection. That is
              roughly 500,000 households across the state — and according to the
              Oklahoma Department of Environmental Quality, a significant
              percentage of those systems are overdue for basic maintenance that
              costs less than a car payment.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you own a home with a septic tank anywhere in Oklahoma — whether
              you are in rural{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay County
              </Link>
              , the outskirts of{" "}
              <Link
                href="/service-areas/ponca-city"
                className="text-primary hover:underline"
              >
                Ponca City
              </Link>
              , or a new build in{" "}
              <Link
                href="/service-areas/garfield-county"
                className="text-primary hover:underline"
              >
                Garfield County
              </Link>{" "}
              — this guide covers everything you need to keep your system healthy
              for decades. We will walk through how your system works, when to
              pump, what the warning signs look like, what Oklahoma regulations
              require, and what the whole thing actually costs.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              No engineering degree required. Just practical advice from a team
              that has pumped and maintained septic systems across north-central
              Oklahoma for years.
            </p>

            {/* QUICK ANSWER */}
            <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Most Oklahoma homeowners should have their septic tank pumped
                every <strong>3 to 5 years</strong>, at a typical cost of{" "}
                <strong>$250 to $500</strong>. The exact interval depends on
                household size, tank capacity, and water usage. Regular
                maintenance prevents drain field failure — a repair that can cost{" "}
                <strong>$5,000 to $20,000+</strong>. Watch for slow drains,
                odors, and standing water over the drain field as warning signs
                that service is overdue.
              </p>
            </div>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: HOW SEPTIC SYSTEMS WORK */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="how-septic-systems-work"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Your Septic System Works (The Simple Version)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Before you can maintain a septic system, it helps to understand
              what is actually happening underground. The good news: the
              mechanics are straightforward, even if the biology is impressive.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every time you flush a toilet, run a dishwasher, or take a shower,
              the wastewater leaves your home through a single main drain line
              and flows into a buried{" "}
              <strong>septic tank</strong> — typically a concrete, fiberglass, or
              polyethylene container holding 1,000 to 1,500 gallons. Inside the
              tank, three things happen:
            </p>
            <ul className="mt-4 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Separation:</strong> Heavy solids sink to the bottom,
                  forming a layer called sludge. Lighter materials like grease,
                  oil, and soap float to the top, forming a scum layer. The
                  relatively clear liquid in the middle is called effluent.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Bacterial breakdown:</strong> Naturally occurring
                  anaerobic bacteria (bacteria that thrive without oxygen) go to
                  work digesting the organic solids. This biological process is
                  the engine of your septic system — and it is the reason harsh
                  chemicals can cause so much damage.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Baffles:</strong> Internal baffles (walls inside the
                  tank) prevent the scum layer and sludge from flowing out with
                  the effluent. They are the bouncers at the door — only the
                  relatively clean middle layer gets to leave.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The clarified effluent flows from the tank into the{" "}
              <strong>drain field</strong> (also called a leach field) — a
              network of perforated pipes buried in gravel-filled trenches. The
              effluent slowly percolates through the gravel and into the
              surrounding soil, where additional natural bacteria finish the
              treatment process. By the time the water reaches the groundwater
              table, it has been naturally filtered and treated.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The entire system is passive — no pumps, no electricity, no moving
              parts (in a conventional system). It works by gravity and biology.
              Your only job is to keep the conditions right for the bacteria and
              to pump out the accumulated sludge before it overwhelms the tank.
            </p>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: HOW OFTEN TO PUMP */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="pumping-schedule"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Often Should You Pump Your Septic Tank?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The standard recommendation from the EPA and the Oklahoma DEQ is
              to pump your septic tank every{" "}
              <strong>3 to 5 years</strong>. That range exists because no two
              households are identical — several factors push you toward the
              shorter or longer end of that window.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Factors That Change Your Pumping Interval
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Household size:</strong> More people means more
                  wastewater. A family of five generates roughly 2.5 times the
                  wastewater of a couple, filling the tank proportionally faster.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Tank size:</strong> A 1,500-gallon tank has 50% more
                  capacity than a 1,000-gallon tank. Larger tanks buy you more
                  time between pump-outs for the same household size.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Water usage:</strong> High-flow showerheads, frequent
                  laundry loads, and running the dishwasher daily all push more
                  water through the system. Every gallon that enters the tank
                  displaces effluent into the drain field — and if solids have
                  not had enough time to settle, they go with it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Garbage disposal use:</strong> A garbage disposal
                  increases the volume of solids entering your tank by 30 to 50
                  percent. If you use one regularly, reduce your pumping interval
                  by at least one year.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Water softener backwash:</strong> Salt-based water
                  softeners regenerate by flushing brine into the septic system.
                  The high sodium content can disrupt bacterial activity and
                  increase sludge volume. If you have a water softener, consider
                  pumping on the shorter end of the schedule.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The honest answer? <strong>When in doubt, pump sooner</strong>.
              Pumping a year early costs the same as pumping on time. Pumping a
              year late can cost thousands in drain field damage.
            </p>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: PUMPING SCHEDULE TABLE */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="pumping-schedule-table"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Septic Pumping Schedule by Household Size and Tank Capacity
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Use this table to estimate how often your tank needs pumping. These
              intervals assume normal water usage, no garbage disposal, and a
              conventional anaerobic system. If you use a garbage disposal,
              subtract one year from each estimate.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Household Size
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      750-Gallon Tank
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      1,000-Gallon Tank
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      1,250-Gallon Tank
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      1,500-Gallon Tank
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      1 person
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 6 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 8 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 9 years
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      2 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 3 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 4 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 6 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      3 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 3 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 4 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 5 years
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      4 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 1.5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2.5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 3 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 4 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      5 people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 1 year
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2.5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 3 years
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      6+ people
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Annually
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 1.5 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2 years
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Every 2.5 years
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Source: Adapted from EPA &quot;A Homeowner&apos;s Guide to Septic
              Systems&quot; estimates. With garbage disposal, subtract 1 year
              from each interval. With water softener, subtract 6 to 12 months.
            </p>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: WARNING SIGNS */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="warning-signs"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Warning Signs Your Septic System Needs Service
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your septic system will not send you a notification, but it does
              send signals. Catching these signs early is the difference between
              a routine $300 pump-out and a $15,000 drain field replacement.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              1. Slow Drains Throughout the House
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A single slow drain is usually a localized clog. When{" "}
              <em>every</em> drain in the house is sluggish — kitchen sink,
              bathroom sink, shower, and bathtub — the problem is almost
              certainly downstream at the septic tank. The tank is full and
              wastewater has nowhere to go efficiently.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              2. Sewage Odors Inside or Outside
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              If you smell rotten eggs or raw sewage near your drains, in the
              yard over the tank or drain field, or anywhere around your home,
              your system is telling you something is wrong. Gases from an
              overfull tank can push back through the plumbing or vent through
              saturated drain field soil.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              3. Standing Water or Soggy Spots in the Yard
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Puddles or consistently wet, soggy ground over the drain field —
              especially when there has been no rain — indicate that the soil can
              no longer absorb effluent. This is one of the most serious signs
              because it suggests the drain field may be failing.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              4. Gurgling Pipes
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Gurgling sounds when you flush a toilet or run water are caused by
              air trapped in the plumbing — often because wastewater is backing
              up from a full tank. If the gurgling is new and persistent across
              multiple fixtures, schedule a pumping.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              5. Unusually Lush Grass Over the Drain Field
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A strip of grass that is conspicuously greener, taller, and
              thicker than the rest of your lawn — specifically over the drain
              field — is being fertilized by effluent that is not being properly
              treated. The grass loves it. Your drain field does not. This is an
              early-stage warning that gives you time to act before the system
              fails completely.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              6. Sewage Backup Into the Home
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              This is the emergency. If wastewater is coming back up through
              floor drains, toilets, or tubs, your system is critically
              overloaded. Stop using water immediately and call a septic
              professional. This is a health hazard — raw sewage contains
              bacteria, viruses, and parasites that can cause serious illness.
            </p>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Noticing any of these signs?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Do not wait for the problem to get worse. Brower Inc. provides
                same-week septic pumping service across our{" "}
                <Link
                  href="/service-areas"
                  className="text-primary hover:underline"
                >
                  Oklahoma and Kansas service area
                </Link>
                .
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Schedule Septic Service →
              </Link>
            </div>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: OKLAHOMA DEQ REGULATIONS */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="oklahoma-deq-regulations"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Oklahoma DEQ Regulations for Septic Systems
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The{" "}
              <a
                href="https://www.deq.ok.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Oklahoma Department of Environmental Quality (DEQ)
              </a>{" "}
              regulates septic systems under Title 252, Chapter 641 — the
              &quot;Individual and Small Public On-Site Sewage Treatment
              Systems&quot; rules. As a homeowner, here is what you need to know:
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Permits for New Installations
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Any new septic system installation in Oklahoma requires a permit
              from the DEQ before construction begins. The permit process
              includes a site evaluation (soil testing, percolation testing, and
              setback measurements) to ensure the property can support a septic
              system. Your county may have additional requirements beyond the
              state level. The installer — not the homeowner — typically handles
              the permitting process, but the homeowner is ultimately
              responsible for ensuring the system was installed with proper
              permits.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Setback Requirements
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma DEQ rules specify minimum distances between septic system
              components and other site features. The septic tank must be at
              least 5 feet from any building foundation and 50 feet from any
              water well. Drain fields require even larger setbacks — typically
              50 to 100 feet from wells, property lines, streams, and other
              water features. These distances exist to protect groundwater and
              neighboring properties.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Repairs and Modifications
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Significant repairs or modifications to an existing system —
              replacing a drain field, adding capacity, or converting from a
              conventional to an aerobic system — also require DEQ permits.
              Minor repairs like replacing a baffle or fixing a cracked lid
              typically do not. When in doubt, contact your county DEQ office
              before starting work.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Aerobic System Maintenance Contracts
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              If your home has an aerobic treatment unit (ATU), Oklahoma law
              requires a maintenance contract with a certified provider. ATUs
              must be inspected at least twice per year, and the maintenance
              provider must submit compliance reports to the DEQ. This is not
              optional — failure to maintain an ATU can result in fines and
              orders to connect to municipal sewer if available.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Selling a Home With a Septic System
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma does not currently require a septic inspection before
              selling a home, but many mortgage lenders (especially FHA and VA)
              require one as a condition of financing. Even when not legally
              required, a pre-sale septic inspection and pump-out protects both
              buyer and seller. A failed system discovered during due diligence
              can delay or kill a sale. We recommend pumping and inspecting
              before listing — it costs far less than a price renegotiation.
            </p>

            <Image
              src={IMAGES.septicTruckRear}
              alt="Brower Inc. branded septic pump truck ready for residential service in Oklahoma"
              width={800}
              height={400}
              className="mt-6 h-64 w-full rounded-xl object-cover"
            />

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: WHAT NOT TO PUT IN YOUR SEPTIC */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="what-not-to-put-in-septic"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What to Never Put in Your Septic System
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your septic system is a biological treatment plant, not a trash
              can. The bacteria inside the tank are doing the heavy lifting —
              and these common household items will kill them, clog your system,
              or both.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Grease, Fats, and Cooking Oil
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Grease solidifies as it cools, forming a thick scum layer that the
              tank cannot process. Over time, grease builds up in the inlet and
              outlet baffles, blocking flow and forcing solids into the drain
              field. Pour cooled grease into a container and throw it in the
              trash — never down the drain.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Household Chemicals and Cleaners
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Bleach, antibacterial soap, drain cleaners, and harsh chemical
              cleaners kill the bacteria your septic system depends on. Small
              amounts of normal household cleaning products are generally fine —
              the system can handle what normal living produces. But dumping a
              bottle of drain cleaner down the sink or using excessive amounts of
              bleach can set your bacterial colony back weeks.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              &quot;Flushable&quot; Wipes
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The word &quot;flushable&quot; on the package means the wipe will
              physically fit through the toilet — nothing more. Unlike toilet
              paper, which breaks down in water within minutes, wipes retain
              their structural integrity for months or years. They accumulate in
              the tank, wrap around baffles, and create blockages that require
              professional removal. If your household uses wipes, throw them in
              the trash.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Paint, Solvents, and Automotive Fluids
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Latex paint, oil-based paint, paint thinner, gasoline, motor oil,
              antifreeze, and any petroleum-based product will destroy the
              bacterial environment in your tank and can contaminate
              groundwater. These materials must be disposed of at a household
              hazardous waste collection site — most Oklahoma counties hold
              annual collection events.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Medications
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Flushing expired or unused medications introduces antibiotics,
              hormones, and other compounds that disrupt the bacterial balance in
              your tank and can pass through the drain field into groundwater.
              Oklahoma pharmacies and law enforcement agencies participate in
              drug take-back programs — use those instead.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Other Items to Keep Out
            </h3>
            <ul className="mt-3 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Feminine hygiene products</strong> — do not break down
                  and cause blockages
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Dental floss</strong> — wraps around components and
                  does not decompose
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Cat litter</strong> — even &quot;flushable&quot;
                  varieties add excessive solids and may contain parasites
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Coffee grounds</strong> — do not decompose in the tank
                  and add to sludge volume
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Cigarette butts</strong> — filters are plastic and
                  never break down
                </span>
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The rule of thumb: if it is not human waste or toilet paper, it
              does not belong in your septic system.
            </p>
          </div>

          {/* MID CTA */}
          <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
            <p className="text-lg font-semibold">
              Time to schedule your septic service?
            </p>
            <p className="mt-2 text-gray-300">
              Troy answers the phone personally. No voicemail maze, no
              dispatcher — just a straight answer and a date on the calendar.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Schedule Septic Service
              </Link>
              <a
                href="tel:+15807476206"
                className="inline-block rounded-lg border-2 border-white px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                Call {PHONE}
              </a>
            </div>
          </div>

          <div className="prose mt-12 max-w-none">
            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: SEASONAL MAINTENANCE TIPS */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="seasonal-maintenance"
              className="mt-0 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Seasonal Septic Maintenance Tips for Oklahoma
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Oklahoma&apos;s climate — ice storms in January, 100-degree heat in
              July, and severe thunderstorms in between — puts unique demands on
              your septic system. Here is how to protect it through every season.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Winter (December - February): Freeze Protection
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma winters can drop below zero, especially in the northern
              counties around{" "}
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
              . While the buried tank itself rarely freezes (ground insulation
              and the warmth of decomposition keep it above freezing), exposed
              pipes and shallow drain field lines are vulnerable.
            </p>
            <ul className="mt-3 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Keep a layer of mulch or leaf cover over the drain field to
                  insulate shallow lines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Do not compact snow over the drain field by driving or parking
                  vehicles on it — compacted snow conducts cold more efficiently
                  than loose cover
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  If your home will be vacant during a cold snap, run a small
                  amount of water periodically to keep pipes from freezing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Insulate any exposed risers or clean-out pipes above grade
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Spring (March - May): Inspection Season
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Spring is the best time of year to schedule your septic inspection
              and pumping in Oklahoma. The ground has thawed, making tank access
              easy, and you are ahead of the summer heat that makes pumping more
              unpleasant and demand higher. Spring is also when heavy rains can
              expose drain field problems that were hidden during the dry winter
              months.
            </p>
            <ul className="mt-3 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Schedule your pump-out or inspection in March or April when
                  providers have the most availability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Walk the drain field after spring rains — standing water or
                  unusually soft spots warrant a professional evaluation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Check that no tree roots have grown toward the tank or drain
                  field over the winter
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Summer (June - August): Water Management
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Oklahoma summers mean higher water usage — more showers, more
              laundry, kids home from school, and guests visiting. All of that
              extra water flows through your septic system.
            </p>
            <ul className="mt-3 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Spread laundry loads throughout the week instead of doing
                  multiple loads in one day — spacing water usage gives the tank
                  time to process
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Fix any leaky faucets or running toilets — a single running
                  toilet can add 200 gallons per day to your septic load
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Direct sprinkler runoff and gutter downspouts away from the
                  drain field — saturating the field with irrigation water
                  reduces its ability to absorb effluent
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Fall (September - November): Preparation
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Fall is your last comfortable window for outdoor septic work
              before winter. If you skipped your spring pumping, do it now.
            </p>
            <ul className="mt-3 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Pump before Thanksgiving and holiday season — extra guests
                  dramatically increase system load, and you want maximum tank
                  capacity heading into the busiest household water-usage period
                  of the year
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Rake leaves away from the drain field area to prevent matting
                  that traps moisture and reduces air circulation in the soil
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Mark the location of your tank access lids so you can find
                  them if they are covered by snow in January
                </span>
              </li>
            </ul>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* H2: COST OF SEPTIC PUMPING */}
            {/* ────────────────────────────────────────────────────────────── */}
            <h2
              id="septic-pumping-cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Much Does Septic Pumping Cost in Oklahoma?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Residential septic pumping in Oklahoma typically costs{" "}
              <strong>$250 to $500 per pump-out</strong>. That range covers the
              vast majority of standard residential tanks (750 to 1,500 gallons)
              in our{" "}
              <Link
                href="/service-areas"
                className="text-primary hover:underline"
              >
                service area
              </Link>
              .
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Factors That Affect Your Price
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Tank size:</strong> A 750-gallon tank takes less time
                  to pump than a 1,500-gallon tank. Larger tanks cost more.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Accessibility:</strong> A tank with a ground-level
                  riser lid is quick to access. A buried tank that requires
                  digging to expose the lid adds labor time and cost.
                  Installing a riser (a one-time investment of $200 to $400)
                  saves money on every future pumping.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Distance from provider:</strong> Pumping companies
                  factor in travel time and fuel. Living within a provider&apos;s
                  primary service area keeps costs lower. Brower Inc. serves a
                  20-county area across Oklahoma and southern Kansas from our
                  Newkirk headquarters.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Time since last pumping:</strong> A severely neglected
                  tank (10+ years without pumping) may require extra effort to
                  break up and remove compacted sludge, or multiple trips if the
                  tank is extremely full.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Emergency vs. scheduled service:</strong> A planned
                  pump-out during normal business hours will always cost less
                  than an emergency call when sewage is backing into your home
                  on a Saturday night.
                </span>
              </li>
            </ul>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Service
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical Cost (Oklahoma)
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Standard residential pump-out
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $250 - $500
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      750 - 1,500 gallon tank, accessible lid
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Pump-out with buried lid (digging required)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $350 - $600
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Add $100-$150 for excavation labor
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Riser installation (one-time)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $200 - $400
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Brings access lid to ground level permanently
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Emergency pump-out (after hours)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $400 - $750
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Evenings, weekends, holidays
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Full drain field replacement
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $5,000 - $20,000+
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      The cost of not maintaining your system
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Put differently: a $350 pump-out every 3 to 4 years costs about{" "}
              <strong>$100 per year</strong> — less than $9 a month. A drain
              field replacement costs the equivalent of 50 to 60 pump-outs all
              at once. Regular maintenance is not just cheaper; it is cheaper by
              an order of magnitude.
            </p>

            {/* COMPARISON CTA */}
            <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-semibold text-gray-900">
                Already comparing septic costs with porta potty rental?
              </p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                If you are building a new home or have a temporary need during a
                septic repair, a portable restroom can bridge the gap. Read our{" "}
                <Link
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-primary hover:underline"
                >
                  complete guide to porta potty rental costs in Oklahoma
                </Link>{" "}
                for transparent pricing.
              </p>
            </div>

            {/* OWNER E-E-A-T */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center rounded-xl bg-gray-50 border border-gray-200 p-6">
              <Image
                src={IMAGES.troyBrower}
                alt="Troy Brower, owner of Brower Inc. septic and portable sanitation services in Newkirk, Oklahoma"
                width={120}
                height={120}
                className="h-30 w-30 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  About the author
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Troy Brower is the founder and owner of Brower Inc., a locally
                  owned portable sanitation and septic services company
                  headquartered in Newkirk, Oklahoma. Troy and his team have
                  pumped and maintained septic systems across north-central
                  Oklahoma and southern Kansas for years — from single-family
                  homes on rural acreages to mobile home parks and small
                  commercial properties. He personally oversees every aspect of
                  the business, from equipment maintenance to customer calls.
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  — Troy Brower, Owner | Newkirk, Oklahoma
                </p>
              </div>
            </div>

            {/* STRONG CTA BEFORE FAQ */}
            <div className="mt-12 rounded-xl bg-primary/10 border border-primary/30 p-6">
              <p className="font-semibold text-gray-900 text-lg">
                Ready to schedule your septic pumping?
              </p>
              <p className="mt-2 text-gray-700">
                Tell us your address, tank size (if you know it), and when you
                were last pumped. We will give you a straight price and get you
                on the calendar — usually within the same week.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors text-center"
                >
                  Schedule Septic Service →
                </Link>
                <a
                  href="tel:+15807476206"
                  className="inline-block rounded-lg border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>

            {/* H2: FAQ */}
            <h2
              id="faq"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Frequently Asked Questions About Septic System Maintenance in
              Oklahoma
            </h2>
          </div>

          <div className="mt-6">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* RELATED LINKS */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">Related reading</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                →{" "}
                <Link
                  href="/services/septic-services"
                  className="text-primary hover:underline"
                >
                  Brower Inc. septic pumping and maintenance services
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-primary hover:underline"
                >
                  How much does it cost to rent a porta potty in Oklahoma?
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/service-areas"
                  className="text-primary hover:underline"
                >
                  Full list of Oklahoma and Kansas service areas
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/service-areas/kay-county"
                  className="text-primary hover:underline"
                >
                  Septic services in Kay County, Oklahoma
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/service-areas/ponca-city"
                  className="text-primary hover:underline"
                >
                  Septic services in Ponca City, Oklahoma
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline"
                >
                  Get a free septic service quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <CTABanner
        title="Need Septic Service in Oklahoma?"
        description="Brower Inc. provides reliable septic pumping and maintenance across north-central Oklahoma and southern Kansas. Call today for a straight price and fast scheduling."
      />
    </>
  );
}
