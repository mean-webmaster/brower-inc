import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICES } from "@/lib/constants";
import { getServiceSchema } from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[4];

export const metadata: Metadata = {
  title: "Long-Term Portable Restroom Rental | Oklahoma | Brower Inc.",
  description:
    "Affordable long-term portable restroom rentals for construction sites and commercial projects in Oklahoma. Regular servicing included. Call Brower Inc. at (580) 747-6206.",
  alternates: { canonical: "/services/long-term-rentals" },
};

export default function LongTermRentalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(service)) }}
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
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{service.title}</h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-6 rounded-lg bg-gray-50 p-6">
                <h2 className="text-lg font-bold text-gray-900">What&apos;s Included in Weekly Servicing</h2>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Empty the waste tank
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Restock toilet paper, hand sanitizer, and paper towels
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Sanitize, scrub, and rinse the restroom
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Inspect for damage to ensure the unit is functioning properly
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  We also carry his-and-her options and handicap-accessible units depending on your needs. We will help you determine the required number of units based on usage frequency and the number of guests or employees.
                </p>
              </div>

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
                src={IMAGES.hero}
                alt="Brower Inc. fleet and portable restrooms ready for long-term rental in Newkirk, Oklahoma"
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

      <CTABanner />
    </>
  );
}
