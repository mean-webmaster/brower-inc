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

const service = SERVICES.find((s) => s.slug === "deluxe-flushable-portable-toilets")!;

export const metadata: Metadata = {
  title: "Deluxe Flushable Portable Toilet Rental Oklahoma | Brower Inc.",
  description:
    "Flushable portable toilet rental with hands-free flush and built-in sink — perfect for Oklahoma weddings and upscale events. Delivered sanitized. Call (580) 747-6206.",
  alternates: { canonical: "/services/deluxe-flushable-portable-toilets" },
};

const FAQS = [
  {
    question: "What is a flushable portable toilet?",
    answer:
      "A flushable portable toilet is a porta potty upgraded with a foot-pump flush system and a built-in handwashing sink. Instead of a static tank, waste is rinsed into a sealed reservoir with each flush — the experience is much closer to an indoor bathroom than a standard porta potty.",
  },
  {
    question: "How much does a deluxe flushable portable toilet cost in Oklahoma?",
    answer:
      "Pricing depends on duration, location, and servicing schedule. Deluxe flushable units typically run higher than a standard porta potty but well below a full VIP restroom trailer — call Brower Inc. at (580) 747-6206 for a quote tailored to your event date and venue address.",
  },
  {
    question: "Are deluxe flushable porta potties good for weddings?",
    answer:
      "Yes — they're our most-requested unit for weddings at rural and farm venues. The flushable design and built-in sink mean guests get a clean, comfortable experience without the cost of a full luxury trailer. For high-end receptions, many couples mix one VIP trailer for bridal-party use with several flushable units for general guests.",
  },
  {
    question: "Do flushable units need a water hookup?",
    answer:
      "No. Each unit comes with its own onboard fresh-water reservoir for flushing and sink use, so they can be placed in any rural or off-grid location across Oklahoma and southern Kansas. We refill the fresh-water tank and empty the waste tank during regular servicing.",
  },
  {
    question: "How quickly can Brower Inc. deliver a deluxe flushable unit?",
    answer:
      "We typically deliver within 24–48 hours of booking and offer same-day delivery for emergencies. For wedding-season Saturdays, book at least one week ahead — flushable inventory moves fastest from May through October.",
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
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              {/* Quick Answer — AI / GEO citation block */}
              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  A deluxe flushable portable toilet is a porta potty with a foot-pump flush and a
                  built-in sink — the comfortable middle option between a standard porta potty and a
                  luxury restroom trailer. Brower Inc. delivers them across Oklahoma and southern
                  Kansas for weddings, corporate events, and upscale gatherings.
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
              <Image
                src={IMAGES.portableRestroomEvent}
                alt="Brower Inc. deluxe flushable portable toilet delivered to an outdoor wedding venue in Oklahoma"
                width={600}
                height={400}
                className="h-80 w-full rounded-xl object-cover"
              />

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
              Most outdoor events in Oklahoma fall into one of three brackets. A{" "}
              <Link href="/services/portable-restrooms" className="text-primary hover:underline">
                standard porta potty
              </Link>{" "}
              is the budget choice — clean, functional, but no frills. A{" "}
              <Link href="/services/vip-shower-restroom-trailers" className="text-primary hover:underline">
                VIP restroom trailer
              </Link>{" "}
              is the premium option with full plumbing, A/C, and multiple stalls. The deluxe
              flushable unit sits comfortably between the two: real flushing, real handwashing, and
              real comfort — at a fraction of the trailer cost. For most rural weddings and upscale
              gatherings, a mix of flushable units is the sweet spot.
            </p>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600">
              Deluxe flushable porta potty rental throughout Oklahoma and southern Kansas.
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
          </div>

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

      <CTABanner />
    </>
  );
}
