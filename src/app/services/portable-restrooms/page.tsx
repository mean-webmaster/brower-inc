import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { GuidesForService, ServiceCrossLinks } from "@/components/RelatedContent";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  jsonLdString,
} from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[0];

const UNIT_TYPES = [
  {
    title: "Standard Maxim 300",
    blurb: "Our everyday unit in blue, tan, or pink. Built for jobsites and events.",
    image: IMAGES.portableRestroomLineup,
    alt: "Brower Inc. standard portable restrooms lined up and ready for an outdoor event",
    href: null,
    cta: "",
    contain: false,
  },
  {
    title: "Deluxe Flushable",
    blurb: "Foot-pump flush and a built-in sink. A step up without a full trailer.",
    image: IMAGES.deluxeFlushable,
    alt: "Brower Inc. deluxe flushable portable toilet",
    href: "/services/deluxe-flushable-portable-toilets",
    cta: "See deluxe flushable",
    contain: true,
  },
  {
    title: "ADA-Compliant",
    blurb: "Zero-step entry, grab bars, and room to turn a wheelchair.",
    image: IMAGES.adaRestroom,
    alt: "Brower Inc. ADA-compliant wheelchair-accessible portable restroom",
    href: "/services/ada-compliant-portable-restrooms",
    cta: "See ADA units",
    contain: true,
  },
  {
    title: "VIP Shower & Restroom Trailers",
    blurb: "Climate-controlled trailers with running water and private stalls.",
    image: IMAGES.vipExteriorSide,
    alt: "Brower Inc. VIP shower and restroom trailer",
    href: "/services/vip-shower-restroom-trailers",
    cta: "See VIP trailers",
    contain: false,
  },
  {
    title: "Hand Washing Stations",
    blurb: "Standalone, no hookups needed. Pairs with any restroom.",
    image: IMAGES.handWashingStation,
    alt: "Brower Inc. portable hand washing station",
    href: "/services/hand-washing-stations",
    cta: "See hand washing",
    contain: false,
  },
  {
    title: "Long-Term Rentals",
    blurb: "Weekly servicing for multi-month jobsites and commercial projects.",
    image: IMAGES.portableRestroomField,
    alt: "Brower Inc. portable restroom placed at a wind farm jobsite",
    href: "/services/long-term-rentals",
    cta: "See long-term rentals",
    contain: false,
  },
];

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
                  Brower Inc. delivers, services, and picks up portable restrooms for events,
                  jobsites, and rural properties across north-central Oklahoma and southern Kansas.
                  Choose from standard, deluxe flushable, ADA, and luxury trailer units.
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
              We drop off a clean portable restroom wherever there's no plumbing, service it on
              schedule, and pick it up when you're done. Porta potty, port-a-john, portable
              toilet: same service.
            </p>
          </div>

          {/* WHO NEEDS PORTA POTTY RENTAL */}
          <div id="who-needs-porta-potty-rental" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">
              Who needs porta potty rental in Oklahoma?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Pick your industry to see how we handle it.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { slug: "construction", title: "Construction", blurb: "OSHA-ready units, ADA, and hand wash stations with weekly service." },
                { slug: "events-weddings", title: "Events & Weddings", blurb: "Deluxe units and luxury trailers sized to your guest count." },
                { slug: "oil-gas", title: "Oil & Gas", blurb: "Remote field delivery and service in any weather." },
                { slug: "agriculture", title: "Agriculture", blurb: "Farm, ranch, and harvest crews on rural and unpaved sites." },
                { slug: "government-municipal", title: "Government & Municipal", blurb: "Parks, public events, and emergency mobilization." },
                { slug: "film-tv", title: "Film & TV", blurb: "Climate-controlled trailers for cast and crew." },
                { slug: "utilities-telecom", title: "Utilities & Telecom", blurb: "Storm restoration and remote substation crews." },
                { slug: "disaster-relief", title: "Disaster Relief", blurb: "Fast deployment after tornadoes and floods." },
                { slug: "real-estate", title: "Real Estate", blurb: "New construction sanitation and septic for managed properties." },
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
              The right unit for your guests, crew, or compliance needs.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {UNIT_TYPES.map((u) => {
                const card = (
                  <>
                    <Image
                      src={u.image}
                      alt={u.alt}
                      width={600}
                      height={400}
                      className={`h-56 w-full rounded-t-xl bg-white ${u.contain ? "object-contain p-3" : "object-cover"}`}
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900">{u.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{u.blurb}</p>
                      <span className="mt-3 inline-block text-xs font-medium text-primary">
                        {u.href ? `${u.cta} →` : "You're on this page"}
                      </span>
                    </div>
                  </>
                );
                return u.href ? (
                  <Link key={u.title} href={u.href} className="overflow-hidden rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all">
                    {card}
                  </Link>
                ) : (
                  <div key={u.title} className="overflow-hidden rounded-xl border border-gray-200">
                    {card}
                  </div>
                );
              })}
            </div>
          </div>

          {/* COST */}
          <div id="how-much-does-it-cost" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">
              How much does porta potty rental cost in Oklahoma?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Price depends on unit type, rental length, servicing, distance, and quantity.
              Here's the 2026 ballpark:
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
              For an exact quote, call{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE}</a> or see our{" "}
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
              Events and jobsites follow different rules.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">For events</h3>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              Plan one unit per 50 guests for a 4-hour event, plus more if food or alcohol is
              served. Add at least one ADA unit for any public event.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">For OSHA construction sites</h3>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              OSHA 29 CFR 1926.51: 1 toilet for up to 20 workers, 2 for 20–199, then 1 more per 40
              workers. Jobsites also need hand washing.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              See every crew size in{" "}
              <Link
                href="/blog/how-many-porta-potties-construction-site-oklahoma"
                className="text-primary hover:underline"
              >
                our OSHA construction calculator guide
              </Link>
              .
            </p>
          </div>

          {/* WHATS INCLUDED */}
          <div id="whats-included" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">What's included with your rental</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Every rental includes:
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
              See{" "}
              <Link href="/blog/how-clean-are-portable-restrooms" className="text-primary hover:underline">
                our 7-step cleaning protocol
              </Link>
              .
            </p>
          </div>

          {/* ADA */}
          <div id="ada-compliance" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">ADA compliance &amp; accessibility</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Our{" "}
              <Link href="/services/ada-compliant-portable-restrooms" className="text-primary hover:underline">
                ADA-compliant portable restrooms
              </Link>{" "}
              have zero-step entry, grab bars, and room to turn a wheelchair. Plan at least one
              for public events and for crews with a worker who needs one.
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
                  One day to one week, for weddings, festivals, and gatherings. Delivered clean,
                  picked up after.
                </p>
              </div>
              <Link
                href="/services/long-term-rentals"
                className="rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">Long-term & ongoing</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Weeks to years, for construction, oil and gas, and remote sites. Weekly pump-out,
                  restocking, and cleaning included.
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
              Storm cleanup, plumbing failure, or a last-minute event?{" "}
              <Link href="/services/emergency-porta-potty-rental" className="text-primary hover:underline">
                Emergency dispatch
              </Link>{" "}
              runs 24/7. Call{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE}</a> any hour.
            </p>
          </div>

          {/* AREAS WE SERVE */}
          <AreasWeServe />

          {/* WHY BROWER */}
          <div id="why-brower" className="mt-16 border-t pt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900">Why choose Brower Inc.</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Based in Newkirk and owner-operated by Troy Brower. Our own trucks, crew, and
              inventory.
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

      {/* Related services / industries / areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ServiceCrossLinks slug="portable-restrooms" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="portable-restrooms" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
