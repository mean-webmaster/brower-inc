import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import ServiceAreaMapSection from "@/components/ServiceAreaMap";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, PHONE, PHONE_HREF, EMAIL, SOCIAL, SERVICE_AREAS_DATA } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { getWebPageSchema, getFAQSchema, jsonLdString } from "@/lib/structured-data";

const HOMEPAGE_TITLE =
  "Porta Potty Rental Near Me — Oklahoma & Kansas | Brower Inc.";
const HOMEPAGE_DESCRIPTION =
  "Searching for porta potty rental near you? Brower Inc. delivers porta potties, VIP trailers & septic across 14 OK + 6 KS counties. Call (580) 747-6206.";

const HOMEPAGE_FAQS = [
  {
    question: "How fast can you deliver a porta potty to my Oklahoma or Kansas address?",
    answer:
      "From our Newkirk, OK headquarters, Brower Inc. typically delivers porta potty rentals within 24–48 hours across 14 Oklahoma and 6 southern Kansas counties. Same-day delivery is often available for weekend events and emergencies — call Troy directly at (580) 747-6206 to confirm availability.",
  },
  {
    question: "What does porta potty rental cost in Oklahoma and Kansas?",
    answer:
      "Standard porta potty rentals run $125–$250 per month for long-term jobsites and $100–$200 per event for weekend bookings. VIP luxury restroom trailers range $800–$2,500 depending on duration. Final pricing depends on delivery distance, servicing frequency, and unit type. See our 2026 cost guide for full breakdowns.",
  },
  {
    question: "Do you deliver porta potties to rural addresses?",
    answer:
      "Yes. Brower Inc. specializes in rural delivery across Kay, Garfield, Kingfisher, Logan, Cowley, Sumner, and other rural counties where national chains often refuse to go. Our crews routinely navigate farm roads, oil field access, cattle guards, and locked gates. If Google Maps shows your address, we can reach it.",
  },
  {
    question: "What areas of Oklahoma and Kansas does Brower Inc. serve?",
    answer:
      "We serve 14 north-central Oklahoma counties (including Kay, Garfield, Kingfisher, Logan, Noble, Pawnee, Osage, and Grant) plus 6 southern Kansas counties (Cowley, Sumner, Sedgwick, Butler, Harper, and Kingman). Cities include Newkirk, Ponca City, Blackwell, Tonkawa, Enid, Stillwater, Wichita, and Winfield.",
  },
  {
    question: "Can I rent a porta potty for just one day or one weekend?",
    answer:
      "Absolutely. Short-term rentals for weekend events, weddings, BBQs, and one-day functions are a core part of our business. Single-day pricing typically starts around $100 per unit including delivery, setup, and pickup. Call (580) 747-6206 to lock in a date during peak event season.",
  },
  {
    question: "What's included with a Brower porta potty rental?",
    answer:
      "Every rental includes delivery, setup, and pickup. Long-term rentals also include weekly servicing — waste removal, restocked toilet paper, hand sanitizer, paper towels, full sanitization, and damage inspection. ADA-compliant units are available, and add-on hand washing stations pair with any porta potty rental.",
  },
];

export const metadata: Metadata = {
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getWebPageSchema({
              name: HOMEPAGE_TITLE,
              description: HOMEPAGE_DESCRIPTION,
              url: "/",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(getFAQSchema(HOMEPAGE_FAQS)),
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <Image
          src={IMAGES.hero}
          alt="Brower Inc. full fleet lineup — service trucks, equipment, and portable restrooms in Newkirk, Oklahoma"
          fill
          className="object-cover"
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-primary">Porta Potty Rental &amp; Septic Services</span>{" "}Across Oklahoma &amp; Southern Kansas
            </h1>
            <p className="mt-6 text-lg text-gray-300 sm:text-xl">
              Clean porta potties, VIP restroom trailers, and septic services —
              delivered to the rural addresses national chains skip.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-primary-dark transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { label: "Locally Owned", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            { label: "Licensed & Insured", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { label: "24/7 Support", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: "Oklahoma + Southern Kansas", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Brower — quick value prop for visitors + SEO-friendly for porta potty rental queries */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-l-4 border-primary bg-gray-50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Why Brower Inc.
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Local Porta Potty Rental &amp; Septic Services You Can Count On
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Brower Inc. is an owner-operated portable sanitation company based in
              Newkirk, Oklahoma. We deliver clean Maxim 300 porta potties, VIP restroom
              trailers, hand washing stations, and full septic services across 10
              Oklahoma and 9 southern Kansas counties. Whether it&apos;s a weekend wedding,
              a long-term construction site, or an emergency call at 2&nbsp;a.m. — Troy
              and the crew show up with clean units, on time, every time.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Locally owned since day one · Newkirk, OK headquarters
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive portable sanitation solutions for every need
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                shortDescription={service.shortDescription}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Guides — internal-link hub for high-intent blog content */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Helpful Guides for Renting in Oklahoma
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Pricing, OSHA rules, comparison guides, and rural delivery — answers before you book.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/blog/osha-portable-restroom-requirements-construction-oklahoma",
                eyebrow: "OSHA Checklist",
                title: "OSHA Portable Restroom Requirements — Oklahoma Compliance Checklist",
                blurb: "Print-ready 29 CFR 1926.51 checklist: ratios, hand wash, ADA, sex separation, placement, servicing, and the 2026 fine schedule.",
              },
              {
                href: "/blog/complete-guide-portable-restrooms-oklahoma-outdoor-events",
                eyebrow: "Events Pillar",
                title: "Portable Restrooms for Oklahoma Outdoor Events — The Complete Guide",
                blurb: "Unit count formula, alcohol & weather multipliers, ADA, luxury trailers, pricing, and a 12-week booking timeline.",
              },
              {
                href: "/blog/porta-potty-rental-cost-oklahoma",
                eyebrow: "Pricing",
                title: "Porta Potty Rental Cost in Oklahoma (2026 Guide)",
                blurb: "Transparent 2026 pricing for standard, ADA, hand wash, and VIP units — plus 6 factors that change your final price.",
              },
              {
                href: "/blog/how-many-porta-potties-construction-site-oklahoma",
                eyebrow: "OSHA Calculator",
                title: "How Many Porta Potties for Your Construction Site?",
                blurb: "OSHA 1926.51 ratio, hand wash rules, ADA guidance, shift-pattern adjustments, and real Oklahoma jobsite examples.",
              },
              {
                href: "/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma",
                eyebrow: "Comparison",
                title: "Porta Potty vs. Luxury Restroom Trailer",
                blurb: "Side-by-side comparison — features, pricing, guest experience, and when each one is the right call for your event.",
              },
              {
                href: "/blog/porta-potty-rental-near-me-rural-oklahoma",
                eyebrow: "Rural Delivery",
                title: "Why 'Porta Potty Near Me' Fails Rural Oklahomans",
                blurb: "Why search results miss rural Kay, Garfield, and Cowley counties — and how to actually get a unit delivered to your address.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.eyebrow}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{post.blurb}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Read the guide
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm font-medium text-primary hover:text-primary-dark">
              View all guides &rarr;
            </Link>
          </div>
        </div>
      </section>


      {/* Meet the Owner */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={IMAGES.troyBrower}
                alt="Troy Brower, owner of Brower Inc. portable restroom and septic services in Newkirk, Oklahoma"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Troy Brower</h2>
              <p className="mt-1 text-lg font-medium text-primary">Owner &amp; Operator</p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Troy Brower is the founder and owner of Brower Inc. Based right here in Newkirk, Oklahoma, Troy built this business on a simple promise: provide clean, reliable portable sanitation and septic services that people can count on. From personally overseeing deliveries to making sure every unit is spotless, Troy takes pride in treating every customer like a neighbor — because most of them are.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Area Map */}
      <ServiceAreaMapSection />

      {/* FAQ — captures "porta potty rental near me" PAA traffic + drives FAQPage rich result */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The questions Oklahoma and Kansas customers ask most before booking a portable restroom.
            </p>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={HOMEPAGE_FAQS} />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have a question we didn&apos;t cover?{" "}
              <a href={PHONE_HREF} className="font-semibold text-primary hover:text-primary-dark">
                Call Troy at {PHONE}
              </a>{" "}
              — he answers personally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
