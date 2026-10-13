import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { GuidesForService, ServiceCrossLinks } from "@/components/RelatedContent";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  jsonLdString,
} from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[2];

const FAQS = [
  {
    question: "How much does a portable hand washing station rental cost in Oklahoma?",
    answer:
      "Typically about $100–$175 per weekend event or $125–$200 per month for jobsites with regular servicing. Call (580) 747-6206 for a free quote.",
  },
  {
    question: "Do portable hand washing stations need a water hookup?",
    answer:
      "No. They arrive stocked with potable water, soap, and paper towels, with a built-in waste tank, so no plumbing or power is needed.",
  },
  {
    question: "Are hand washing stations required on OSHA construction sites?",
    answer:
      "Yes. OSHA 29 CFR 1926.51 requires hand washing facilities for construction crews, and county health departments require them near food vendors at events.",
  },
  {
    question: "How many hand washing stations do I need?",
    answer:
      "A common guideline is one station per 1–2 portable restrooms, plus one per food-vendor area. We help you size it when you book.",
  },
  {
    question: "Can I pair hand washing stations with porta potty rentals?",
    answer:
      "Yes, that's the most common setup. We deliver them with your restrooms in one drop-off.",
  },
];

const PHOTOS = [
  {
    image: IMAGES.technician,
    alt: "Brower Inc. hand washing station set beside a restroom trailer and a standard portable restroom",
    caption: "Next to a restroom trailer and a standard unit.",
  },
  {
    image: IMAGES.portableRestroomEvent,
    alt: "Brower Inc. service truck with portable restrooms and a hand washing station set up at an event venue",
    caption: "Set up with a row of restrooms at an event venue.",
  },
];

export const metadata: Metadata = {
  title: "Portable Hand Washing Station Rental Oklahoma | Brower",
  description:
    "Portable hand washing station rental in Oklahoma for events, construction & food vendors. OSHA-compliant, fully stocked, no hookups needed. Call (580) 747-6206.",
  alternates: { canonical: "/services/hand-washing-stations" },
};

export default function HandWashingStationsPage() {
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
                Portable Hand Washing Station Rental in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Features & Benefits</h2>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                  Get a Free Quote
                </Link>
                <a href="tel:+15807476206" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  Call (580) 747-6206
                </a>
              </div>
            </div>

            <div>
              <Image
                src={IMAGES.handWashingStation}
                alt="Row of Brower Inc. portable hand washing stations in the Newkirk, Oklahoma shop"
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

          {/* Pairs with restrooms */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Hand Washing Station Rental in Oklahoma</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Pair them with our{" "}
              <Link href="/services/portable-restrooms" className="text-primary font-medium hover:underline">
                portable restroom rentals
              </Link>{" "}
              for complete jobsite or event sanitation.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {PHOTOS.map((p) => (
                <figure key={p.caption} className="overflow-hidden rounded-xl border border-gray-200">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                  />
                  <figcaption className="p-4 text-sm text-gray-600">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Hand washing station FAQs</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          <AreasWeServe />

          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-lg border border-gray-200 p-4 hover:border-primary/30 hover:shadow-sm transition-all">
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
            <ServiceCrossLinks slug="hand-washing-stations" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="hand-washing-stations" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
