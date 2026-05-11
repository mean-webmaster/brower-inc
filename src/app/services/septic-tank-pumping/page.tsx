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

const service = SERVICES.find((s) => s.slug === "septic-tank-pumping")!;

export const metadata: Metadata = {
  title: "Septic Tank Pumping Oklahoma | Cleaning & Inspection | Brower Inc.",
  description:
    "Septic tank pumping across Oklahoma & southern Kansas — most homes need a pump every 3–5 years. Transparent pricing, same-week scheduling. Call (580) 747-6206.",
  alternates: { canonical: "/services/septic-tank-pumping" },
};

const FAQS = [
  {
    question: "How often should I pump my septic tank in Oklahoma?",
    answer:
      "Most rural Oklahoma homes need a septic pump every 3–5 years. The exact interval depends on tank size, household size, water usage, and whether you have a garbage disposal. Brower Inc. provides a written follow-up recommendation after every pump so you know exactly when to schedule the next one.",
  },
  {
    question: "How much does septic tank pumping cost in Oklahoma?",
    answer:
      "Most residential septic pumps in Oklahoma range from $250 to $500 depending on tank size, accessibility, and whether the lid needs to be uncovered. Brower Inc. quotes flat rates up front — no on-site upsells, no surprise charges. Call (580) 747-6206 for a quote based on your address.",
  },
  {
    question: "What happens during a septic pump-out?",
    answer:
      "Our technician locates and uncovers the access lid, lowers the vacuum hose, and removes solids, scum, and liquid from the tank. We then rinse the tank, inspect baffles and inlet/outlet pipes, look for obvious signs of damage or drain-field issues, and seal the lid. The whole job typically takes 45–90 minutes.",
  },
  {
    question: "What are the warning signs my septic tank needs pumping?",
    answer:
      "Slow drains throughout the house, gurgling pipes, sewage odors near the tank or drain field, lush or soggy grass over the drain field, and backups at the lowest drain (often the basement) are all classic signs. If you see any of these, call (580) 747-6206 — waiting risks expensive drain-field damage.",
  },
  {
    question: "Do you pump commercial and grease tanks?",
    answer:
      "Yes. In addition to residential septic, Brower Inc. services commercial waste tanks, restaurant grease traps, and multi-tenant property systems across Oklahoma and southern Kansas. We schedule recurring service for property managers and food-service operators on flexible cadences.",
  },
];

export default function SepticPumpingPage() {
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
                Septic Tank Pumping &amp; Cleaning in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  Most rural Oklahoma homes need a septic tank pump every 3 to 5 years. Brower Inc.
                  performs full pump-outs, tank rinsing, and inspection in a single visit — serving
                  residential homeowners, commercial properties, and rural homesteads across
                  north-central Oklahoma and southern Kansas with transparent flat-rate pricing.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">What's Included</h2>
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
                  Schedule a Pump-Out
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
                src={IMAGES.septicPumpingClose}
                alt="Brower Inc. technician performing residential septic tank pumping in Newkirk, Oklahoma"
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
              Pumping vs. Maintenance vs. Inspection
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Pumping is just one part of keeping a septic system healthy. Pumping removes the
              solids; ongoing{" "}
              <Link href="/services/septic-services" className="text-primary hover:underline">
                septic maintenance
              </Link>{" "}
              keeps the bacteria balance right and catches small issues before they become
              expensive; a{" "}
              <Link href="/services/septic-inspections" className="text-primary hover:underline">
                septic inspection
              </Link>{" "}
              is a written assessment usually required for real-estate transactions. Most rural
              Oklahoma homeowners need the first two on a recurring schedule and the third only
              when buying or selling. Brower Inc. handles all three.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              Want the deeper guide?{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                The Oklahoma Homeowner's Complete Guide to Septic System Maintenance
              </Link>{" "}
              walks through everything from pump intervals to drain-field health.
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
              Septic tank pumping throughout Oklahoma and southern Kansas.
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
