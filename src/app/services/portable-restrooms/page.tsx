import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, SERVICE_AREAS_DATA, PHONE, PHONE_HREF } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  jsonLdString,
} from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Porta Potty Rental Oklahoma — The Complete Guide",
  description:
    "Porta potty rental in Oklahoma — clean units delivered to events, jobsites & rural addresses across 20 counties. Weekly servicing. Call (580) 747-6206.",
  alternates: { canonical: "/services/portable-restrooms" },
};

const FAQS = [
  {
    question: "How much does porta potty rental cost in Oklahoma?",
    answer:
      "A standard porta potty in Oklahoma typically rents for $150–$250 per weekend event or $200–$400 per month for construction sites with weekly servicing. ADA-compliant units run slightly higher, deluxe flushable units more, and a full luxury restroom trailer can range from $1,500 to $3,500+ for a single event. Pricing depends on duration, location, servicing schedule, and unit type. See our complete 2026 Oklahoma porta potty pricing guide for line-item breakdowns.",
  },
  {
    question: "How fast can Brower Inc. deliver a porta potty?",
    answer:
      "For most addresses in our 20-county service area, we deliver within 24–48 hours of booking. Same-day delivery is available for emergencies — call (580) 747-6206 and we'll dispatch within the hour. From our Newkirk, OK headquarters, addresses within Kay County typically see delivery in 30–60 minutes. Remote rural addresses in Kansas may take 1–3 hours depending on access roads.",
  },
  {
    question: "How many porta potties do I need at my event or jobsite?",
    answer:
      "For events, a good rule of thumb is one unit per 50 guests for a 4-hour event, scaling up with duration and alcohol service. For OSHA construction sites under 29 CFR 1926.51, you need one toilet for up to 20 workers, two toilets for 20–199, and so on. Brower Inc. calculates the exact mix for you when you book — including how many should be ADA, how many should pair with handwashing stations, and whether you need a luxury unit for VIPs.",
  },
  {
    question: "Do you deliver porta potties to rural Oklahoma addresses?",
    answer:
      "Yes — rural delivery is our specialty. Brower Inc. is based in Newkirk, OK and our fleet navigates farm roads, oil-field service tracks, ranch gates, and unpaved properties across 14 counties in Oklahoma and 6 counties in southern Kansas. National providers route 'near me' searches to call centers that won't service addresses outside cities. We will. Call (580) 747-6206 with your address and we'll confirm delivery the same day.",
  },
  {
    question: "What's included with a porta potty rental?",
    answer:
      "Every Brower Inc. rental includes free delivery within our service area, professional placement, weekly servicing for long-term rentals (waste tank pump-out, restocking of toilet paper, hand sanitizer, and paper towels, full interior sanitization, and damage inspection), and pickup at the end of the rental period. There are no hidden fees or surprise charges — what we quote is what you pay.",
  },
  {
    question: "Are your porta potties ADA-compliant?",
    answer:
      "We offer dedicated ADA-compliant portable restrooms with ground-level zero-step entry, interior handrails, and a wheelchair turning radius — meeting 2010 ADA Standards for Accessible Design. Required for OSHA jobsites with workers who have mobility disabilities, and recommended for any public event. Our ADA units are also family-friendly when parents need to help small children.",
  },
  {
    question: "How clean are Brower Inc. porta potties?",
    answer:
      "Every unit is delivered freshly sanitized, fully stocked, and ready for use. Long-term rentals are serviced weekly: the tank is pumped, the interior is scrubbed and disinfected, supplies are restocked, and the unit is inspected for damage. Our 7-step cleaning protocol is documented in detail on our blog and you can request a service log for compliance documentation if your project requires it.",
  },
  {
    question: "Can I rent a porta potty for just one day or one weekend?",
    answer:
      "Absolutely. Brower Inc. offers single-day and weekend rentals for events, parties, and short jobs — alongside our long-term rental contracts for multi-month construction. Weekend rentals typically include delivery Friday morning and pickup Monday morning. Need a unit faster? Call (580) 747-6206 for same-day rental.",
  },
  {
    question: "Do you service oil & gas, agriculture, and government clients?",
    answer:
      "Yes — Brower Inc. serves construction, oil & gas, agriculture, events, weddings, film & TV productions, government/municipal projects, utilities, telecom, disaster relief, and real estate development. We've built our fleet and routes around the realities of north-central Oklahoma: remote properties, extreme weather, 24/7 operations, and crews that can't wait. See our industry-specific pages for the playbook on each.",
  },
  {
    question: "What's the difference between a porta potty, a deluxe flushable unit, and a VIP trailer?",
    answer:
      "A standard porta potty is the workhorse — clean, functional, no plumbing. A deluxe flushable unit adds a foot-pump flush and built-in sink, bringing real-bathroom comfort at a moderate price. A VIP restroom trailer is the premium tier: A/C, heat, running water, multiple stalls, and a luxury feel — used for upscale weddings, corporate events, and film productions. Most events use a mix, with a standard unit as the workhorse and a deluxe or VIP for guest-facing comfort.",
  },
];

const TOC = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-is-porta-potty-rental", label: "What is porta potty rental?" },
  { id: "who-needs-porta-potty-rental", label: "Who needs porta potty rental" },
  { id: "types-of-units", label: "Types of portable restrooms we offer" },
  { id: "how-much-does-it-cost", label: "How much does porta potty rental cost?" },
  { id: "how-many-do-you-need", label: "How many porta potties do you need?" },
  { id: "whats-included", label: "What's included with your rental" },
  { id: "ada-compliance", label: "ADA compliance & accessibility" },
  { id: "long-term-vs-short-term", label: "Long-term vs. short-term rentals" },
  { id: "emergency-rentals", label: "Emergency & same-day rentals" },
  { id: "areas-we-serve", label: "Areas we serve" },
  { id: "why-brower", label: "Why choose Brower Inc." },
  { id: "faq", label: "Frequently asked questions" },
  { id: "resources", label: "Resources" },
];

export default function PortableRestroomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(getServiceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getBreadcrumbSchema([
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(getFAQSchema(FAQS)) }}
      />
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Porta Potty Rental in Oklahoma — The Complete Guide
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              {/* Quick Answer — AI / GEO citation block */}
              <div id="quick-answer" className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6 scroll-mt-24">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  Porta potty rental in Oklahoma is the service of delivering, servicing, and
                  picking up portable toilets for events, construction sites, oil-field operations,
                  and rural properties. Brower Inc. is a locally owned provider based in Newkirk,
                  Oklahoma, serving 14 counties in north-central Oklahoma and 6 counties in
                  southern Kansas with a 1,375+ unit fleet — including standard, ADA-compliant,
                  deluxe flushable, and luxury restroom trailers.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>

            <div>
              <Image
                src={IMAGES.portableRestroomHero}
                alt="Brower Inc. porta potty rental fleet — portable restrooms lined up and ready for delivery in Newkirk, Oklahoma"
                width={600}
                height={400}
                className="h-80 w-full rounded-xl object-cover"
              />

              {/* Table of contents */}
              <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  On This Page
                </p>
                <ol className="mt-3 space-y-1.5 text-sm">
                  {TOC.map((item, i) => (
                    <li key={item.id} className="flex gap-2">
                      <span className="text-gray-400">{i + 1}.</span>
                      <a href={`#${item.id}`} className="text-primary hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* WHAT IS PORTA POTTY RENTAL */}
          <div id="what-is-porta-potty-rental" className="mt-20 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">What is porta potty rental?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Porta potty rental is the end-to-end service of providing portable, self-contained
              restrooms wherever permanent plumbing isn't available. A provider — like Brower
              Inc. — delivers a sanitized unit to your address, places it in the right spot,
              services it on a regular schedule, and picks it up when you're done. The unit
              itself contains a holding tank for waste, a fresh-water reservoir for hand sanitizer
              or sink use (on deluxe models), and ventilation to keep odors in check.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              Most people in Oklahoma know them as porta potties, portable toilets, port-a-johns,
              or porta loos, and the service itself as portable restroom rental or porta potties
              for rent. Regardless of the name, the service is the same — and so are the rules
              around how many you need, how often they're serviced, and what counts as compliant.
              We'll cover all of that below.
            </p>
          </div>

          {/* WHO NEEDS PORTA POTTY RENTAL */}
          <div id="who-needs-porta-potty-rental" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">
              Who needs porta potty rental in Oklahoma?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              We serve nine industries across north-central Oklahoma and southern Kansas. Each
              one has different needs — different unit mixes, servicing cadences, delivery
              requirements, and compliance rules. Click into your industry to see how Brower Inc.
              handles it.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { slug: "construction", title: "Construction", blurb: "OSHA-compliant porta potty rental for jobsites — Maxim 300, ADA, handwash bundles, weekly service." },
                { slug: "events-weddings", title: "Events & Weddings", blurb: "Discreet placement, deluxe units, luxury trailers, and unit-count guidance for any guest count." },
                { slug: "oil-gas", title: "Oil & Gas", blurb: "Remote field delivery, 24/7 operations, extreme weather, multi-regulation compliance." },
                { slug: "agriculture", title: "Agriculture", blurb: "Farm and ranch sanitation — OSHA field-sanitation compliant, rural and unpaved delivery." },
                { slug: "government-municipal", title: "Government & Municipal", blurb: "Emergency mobilization, public events, parks, and government-procurement-friendly billing." },
                { slug: "film-tv", title: "Film & TV", blurb: "Climate-controlled trailers for talent, remote-location delivery, flexible production schedules." },
                { slug: "utilities-telecom", title: "Utilities & Telecom", blurb: "Storm restoration urgency, remote substations, out-of-state crew staging." },
                { slug: "disaster-relief", title: "Disaster Relief", blurb: "Emergency deployment for tornadoes, floods, and large-scale displacement events." },
                { slug: "real-estate", title: "Real Estate", blurb: "New construction sanitation + septic maintenance for managed properties." },
              ].map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="rounded-lg border border-gray-200 p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-gray-900">{i.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{i.blurb}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-primary">
                    See the playbook →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* TYPES OF UNITS */}
          <div id="types-of-units" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">Types of portable restrooms we offer</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Not every project needs the same unit. We carry the full range — from the
              workhorse standard porta potty to a fully plumbed luxury restroom trailer — so we
              can pair the right mix for your guests, crew, or compliance requirements.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900">Standard Maxim 300</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Our featured unit — spacious, well-built, and available in blue, tan, or pink.
                  The workhorse for construction sites, festivals, and budget-conscious events.
                </p>
                <p className="mt-3 text-xs font-medium text-gray-500">
                  Same page — you're here.
                </p>
              </div>
              <Link
                href="/services/deluxe-flushable-portable-toilets"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">Deluxe Flushable</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Foot-pump flush and a built-in sink — the comfort upgrade for weddings,
                  corporate events, and family reunions without paying for a full trailer.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-primary">
                  See deluxe flushable →
                </span>
              </Link>
              <Link
                href="/services/ada-compliant-portable-restrooms"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">ADA-Compliant</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Ground-level entry, interior handrails, wheelchair turning radius. Required on
                  most OSHA jobsites and at ADA-Title-III public events.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-primary">
                  See ADA units →
                </span>
              </Link>
              <Link
                href="/services/vip-shower-restroom-trailers"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">VIP Shower & Restroom Trailers</h3>
                <p className="mt-2 text-sm text-gray-600">
                  18-station luxury trailers with A/C, heat, running water, and full-size mirrors.
                  Used for upscale weddings, corporate events, film productions, and galas.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-primary">
                  See VIP trailers →
                </span>
              </Link>
              <Link
                href="/services/hand-washing-stations"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">Hand Washing Stations</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Standalone units — no hookups needed. The ideal pairing with any porta potty,
                  especially for food-service events and OSHA construction sites.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-primary">
                  See handwashing →
                </span>
              </Link>
              <Link
                href="/services/long-term-rentals"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">Long-Term Rentals</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Weekly servicing included. Built for multi-month construction, oil and gas, and
                  commercial projects. Volume rates available.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-primary">
                  See long-term →
                </span>
              </Link>
            </div>
          </div>

          {/* COST */}
          <div id="how-much-does-it-cost" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">
              How much does porta potty rental cost in Oklahoma?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Pricing in Oklahoma depends on five things: unit type, rental duration, servicing
              schedule, delivery distance, and quantity. Here's the working ballpark for 2026:
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  <tr>
                    <th className="px-4 py-3">Unit type</th>
                    <th className="px-4 py-3">Weekend event</th>
                    <th className="px-4 py-3">Monthly (long-term)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Standard Maxim 300</td>
                    <td className="px-4 py-3">$150 – $250</td>
                    <td className="px-4 py-3">$200 – $300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">ADA-compliant</td>
                    <td className="px-4 py-3">$200 – $350</td>
                    <td className="px-4 py-3">$300 – $450</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Deluxe flushable</td>
                    <td className="px-4 py-3">$275 – $450</td>
                    <td className="px-4 py-3">$400 – $600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Hand washing station</td>
                    <td className="px-4 py-3">$100 – $175</td>
                    <td className="px-4 py-3">$125 – $200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">VIP restroom trailer</td>
                    <td className="px-4 py-3">$1,500 – $3,500+</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              For an exact quote tailored to your address, dates, and unit mix, call us at{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE}</a> or read
              the deep-dive in our{" "}
              <Link href="/blog/porta-potty-rental-cost-oklahoma" className="text-primary hover:underline">
                2026 Oklahoma porta potty rental cost guide
              </Link>
              .
            </p>
          </div>

          {/* HOW MANY DO YOU NEED */}
          <div id="how-many-do-you-need" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">
              How many porta potties do you need?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Two completely different rules apply depending on whether it's an event or a
              jobsite.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">For events</h3>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              A working baseline is one unit per 50 guests for a 4-hour event. Scale up if the
              event runs longer than 4 hours, if alcohol is served (people use the restroom
              more), or if food is served (same). Add at least one ADA unit for any public event.
              For weddings over 200 guests, plan to mix in a deluxe flushable or VIP trailer for
              guest comfort.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">For OSHA construction sites</h3>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              OSHA 29 CFR 1926.51 sets the minimums: 1 toilet for crews up to 20, 2 toilets for
              20–199, and 1 additional toilet per 40 workers beyond that. You also need at least
              one ADA-accessible unit if any worker has a mobility disability, plus separate
              handwashing facilities (which can be standalone hand wash stations or built into
              deluxe units).
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              For a worked example with diagrams,{" "}
              <Link
                href="/blog/how-many-porta-potties-construction-site-oklahoma"
                className="text-primary hover:underline"
              >
                our OSHA construction calculator guide
              </Link>{" "}
              walks through every crew size from 5 to 200+.
            </p>
          </div>

          {/* WHATS INCLUDED */}
          <div id="whats-included" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">What's included with your rental</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Every Brower Inc. porta potty rental is a turnkey service. Here's the full list of
              what you get:
            </p>
            <ul className="mt-6 space-y-3 max-w-3xl">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Free delivery and pickup within our 20-county service area</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Transparent flat-rate pricing — what we quote is what you pay</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">24/7 phone support — call (580) 747-6206 day or night</span>
              </li>
            </ul>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl">
              Want to see exactly what "weekly servicing" means?{" "}
              <Link href="/blog/how-clean-are-portable-restrooms" className="text-primary hover:underline">
                Our 7-step cleaning protocol is documented in full
              </Link>{" "}
              — including the chemicals we use and the inspection checklist we run.
            </p>
          </div>

          {/* ADA */}
          <div id="ada-compliance" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">ADA compliance &amp; accessibility</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              To ensure maximum accessibility for your guests and crew, Brower Inc. offers
              dedicated{" "}
              <Link href="/services/ada-compliant-portable-restrooms" className="text-primary hover:underline">
                ADA-compliant portable restrooms
              </Link>{" "}
              that meet the 2010 ADA Standards for Accessible Design — ground-level zero-step
              entry, interior handrails and grab bars, ample wheelchair turning radius, and
              wider doors. These larger units are also family friendly, perfect when parents need
              to accompany their children or caregivers assist elderly guests.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              On OSHA-regulated construction sites with workers who have mobility disabilities,
              an ADA-compliant unit is required as a reasonable accommodation. On public events
              under ADA Title III, the rule of thumb is at least 5% of single-user facilities
              (minimum 1) must be accessible. We help you calculate the right mix when you book.
            </p>
          </div>

          {/* LONG TERM VS SHORT TERM */}
          <div id="long-term-vs-short-term" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">
              Long-term vs. short-term rentals
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Most porta potty rentals fall into one of two buckets:
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900">Short-term & events</h3>
                <p className="mt-2 text-sm text-gray-600">
                  One day to one week. Weekend weddings, festivals, family gatherings, sporting
                  events, photo and film shoots. Delivered fresh, picked up at the end. No
                  servicing during a short rental unless the event runs multiple days.
                </p>
              </div>
              <Link
                href="/services/long-term-rentals"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">Long-term & ongoing</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Weeks, months, or years. Multi-month construction projects, oil and gas field
                  operations, commercial developments, remote work sites. Includes weekly waste
                  pump-out, restocking, sanitization, and damage inspection.
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-primary">
                  Learn about long-term rentals →
                </span>
              </Link>
            </div>
          </div>

          {/* EMERGENCY */}
          <div id="emergency-rentals" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">Emergency &amp; same-day rentals</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Plumbing failure, storm cleanup, last-minute event scale-up, urgent jobsite start?{" "}
              <Link href="/services/emergency-porta-potty-rental" className="text-primary hover:underline">
                Brower Inc.'s emergency dispatch
              </Link>{" "}
              runs 24/7. Call{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE}</a> at any
              hour — a real Brower team member answers, not a national call center — and we'll
              be moving toward your address within the hour. Same-day delivery is standard across
              our 20-county area; oil-field and remote-Kansas addresses typically see 1–3 hour
              delivery from the call.
            </p>
          </div>

          {/* AREAS WE SERVE */}
          <div id="areas-we-serve" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
              We deliver portable restrooms and porta potties throughout 14 counties in
              north-central Oklahoma and 6 counties in southern Kansas. Click into your area for
              local context, common venues, and same-day availability.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Oklahoma
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS_DATA.filter((a) => a.state === "OK").map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="rounded-full bg-white border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Kansas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS_DATA.filter((a) => a.state === "KS").map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="rounded-full bg-white border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/service-areas" className="text-sm font-medium text-primary hover:text-primary-dark">
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* WHY BROWER */}
          <div id="why-brower" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">Why choose Brower Inc.</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              National providers route Oklahoma "porta potty near me" searches into out-of-state
              call centers, who sub-contract to whoever's free. By the time the handoff is done,
              you've lost hours — and you have no idea who's actually showing up. Brower Inc. is
              the local provider. Based in Newkirk, Oklahoma. Owner-operated by Troy Brower.
              Our own trucks, our own dispatcher, our own inventory in our own yard.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "1,375+ Unit Fleet", body: "One of the largest fleets in north-central Oklahoma — inventory ready when you need it." },
                { title: "Owner-Operated", body: "Troy personally manages every project. No call centers, no excuses, no handoffs." },
                { title: "24/7 Support", body: "We answer the phone day or night, including weekends and tornado season." },
                { title: "Weekly Servicing", body: "All long-term rentals include weekly cleaning, restocking, and inspection." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          {/* RESOURCES */}
          <div id="resources" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900">
              Porta potty rental resources & guides
            </h2>
            <p className="mt-2 text-gray-600">
              Deep-dives on pricing, OSHA, comparisons, and rural delivery — read before you
              book.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/blog/porta-potty-rental-cost-oklahoma",
                  title: "2026 Oklahoma Pricing Guide",
                  blurb: "Transparent costs for standard, ADA, hand wash, and VIP units.",
                },
                {
                  href: "/blog/how-many-porta-potties-construction-site-oklahoma",
                  title: "OSHA Construction Calculator",
                  blurb: "How many units your jobsite needs under 29 CFR 1926.51 — by crew size.",
                },
                {
                  href: "/blog/porta-potty-rental-near-me-rural-oklahoma",
                  title: "Rural Oklahoma Delivery",
                  blurb: "Why 'near me' search misses rural addresses — and how to actually get a unit out there.",
                },
                {
                  href: "/blog/how-clean-are-portable-restrooms",
                  title: "How Clean Our Units Really Are",
                  blurb: "The 7-step weekly servicing protocol — what 'clean' actually means.",
                },
                {
                  href: "/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma",
                  title: "Porta Potty vs. Luxury Trailer",
                  blurb: "When to upgrade for your wedding, gala, or corporate event.",
                },
                {
                  href: "/blog/osha-portable-restroom-requirements-construction-oklahoma",
                  title: "OSHA Compliance Checklist (2026)",
                  blurb: "Print-ready 29 CFR 1926.51 checklist — ratios, ADA, sex separation, placement, servicing, and the 2026 fine schedule.",
                },
                {
                  href: "/blog/complete-guide-portable-restrooms-oklahoma-outdoor-events",
                  title: "Complete Oklahoma Events Guide",
                  blurb: "Unit count formula, alcohol & weather multipliers, luxury trailers, pricing, and a 12-week booking timeline.",
                },
                {
                  href: "/blog/portable-restroom-rental-guide",
                  title: "Complete Rental Walkthrough",
                  blurb: "From quote to pickup — what the process looks like end-to-end.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="rounded-lg border border-gray-200 p-4 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <h3 className="font-medium text-gray-900">{post.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{post.blurb}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* RELATED SERVICES */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900">Related services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((s) => s.slug !== service.slug)
                .slice(0, 8)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg border border-gray-200 p-4 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-medium text-gray-900">{s.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">{s.shortDescription}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
