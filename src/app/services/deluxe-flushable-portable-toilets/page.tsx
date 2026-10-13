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

const service = SERVICES.find((s) => s.slug === "deluxe-flushable-portable-toilets")!;

export const metadata: Metadata = {
  title: "Deluxe Flushable Portable Toilet Rental Oklahoma",
  description:
    "Flushable portable toilet rental with hands-free flush and built-in sink — perfect for Oklahoma weddings and upscale events. Delivered sanitized. Call (580) 747-6206.",
  alternates: { canonical: "/services/deluxe-flushable-portable-toilets" },
};

const FAQS = [
  {
    question: "What is a flushable portable toilet?",
    answer:
      "A porta potty upgraded with a foot-pump flush and a built-in sink. Each flush rinses waste into a sealed reservoir, so it feels closer to an indoor bathroom.",
  },
  {
    question: "How much does a deluxe flushable portable toilet cost in Oklahoma?",
    answer:
      "More than a standard porta potty, well below a VIP restroom trailer. Call (580) 747-6206 for a quote for your date and venue.",
  },
  {
    question: "Are deluxe flushable porta potties good for weddings?",
    answer:
      "Yes. They're our most-requested unit for weddings at rural and farm venues, without the cost of a full luxury trailer.",
  },
  {
    question: "Do flushable units need a water hookup?",
    answer:
      "No. Each unit has its own fresh-water reservoir, so it works off-grid. We refill it and empty the waste tank during servicing.",
  },
  {
    question: "How quickly can Brower Inc. deliver a deluxe flushable unit?",
    answer:
      "Typically within 24–48 hours of booking, with same-day delivery for emergencies. For May–October Saturdays, book at least a week ahead.",
  },
];

export default function DeluxeFlushablePage() {
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Deluxe Flushable Portable Toilet Rental in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                A hands-free foot-pump flush, a built-in sink, and more room than a standard porta potty.
              </p>

              {/* Quick Answer — AI / GEO citation block */}
              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  A porta potty with a foot-pump flush and a built-in sink: the middle option between a
                  standard unit and a luxury restroom trailer. Delivered across north-central Oklahoma
                  and southern Kansas.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Features &amp; Benefits</h2>
              <ul className="mt-4 space-y-3">
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
              </ul>

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
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={IMAGES.deluxeFlushable}
                  alt="Brower Inc. deluxe flushable portable toilet with Brower logo"
                  width={422}
                  height={736}
                  className="h-80 w-full rounded-xl border border-gray-200 bg-white object-contain p-2"
                />
                <Image
                  src={IMAGES.deluxeFlushableFootPump}
                  alt="Flush tank inside a deluxe flushable portable toilet with the hands-free foot pump on the floor"
                  width={1096}
                  height={1231}
                  className="h-80 w-full rounded-xl border border-gray-200 bg-white object-contain p-2"
                />
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Common Use Cases</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Standard Porta Potty vs. Deluxe Flushable vs. VIP Trailer
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Deluxe flushable sits between the two: real flushing and handwashing for a fraction of
              the trailer cost.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Standard porta potty",
                  blurb: "The budget choice. Clean and functional, no frills.",
                  image: IMAGES.portableRestroomLineup,
                  alt: "Brower Inc. standard portable restrooms lined up in a row on grass",
                  href: "/services/portable-restrooms",
                  cta: "See standard units",
                },
                {
                  title: "VIP restroom trailer",
                  blurb: "The premium option with full plumbing, A/C, and multiple stalls.",
                  image: IMAGES.vipExteriorSide,
                  alt: "Brower Inc. VIP shower and restroom trailer",
                  href: "/services/vip-shower-restroom-trailers",
                  cta: "See VIP trailers",
                },
              ].map((u) => (
                <Link
                  key={u.title}
                  href={u.href}
                  className="overflow-hidden rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <Image
                    src={u.image}
                    alt={u.alt}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900">{u.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{u.blurb}</p>
                    <span className="mt-3 inline-block text-xs font-medium text-primary">
                      {u.cta} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          <AreasWeServe />

          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((s) => s.slug !== service.slug)
                .slice(0, 4)
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
            <ServiceCrossLinks slug="deluxe-flushable-portable-toilets" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="deluxe-flushable-portable-toilets" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
