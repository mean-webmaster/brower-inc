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

const service = SERVICES.find((s) => s.slug === "septic-tank-pumping")!;

export const metadata: Metadata = {
  title: "Septic Tank Pumping Oklahoma — Cleaning & Inspection",
  description:
    "Septic tank pumping across Oklahoma & southern Kansas — most homes need a pump every 3–5 years. Transparent pricing, same-week scheduling. Call (580) 747-6206.",
  alternates: { canonical: "/services/septic-tank-pumping" },
};

const FAQS = [
  {
    question: "How often should I pump my septic tank in Oklahoma?",
    answer:
      "Most homes need a pump every 3–5 years, depending on tank size, household size, and water use. We leave a written recommendation for your next pump.",
  },
  {
    question: "How much does septic tank pumping cost in Oklahoma?",
    answer:
      "Most residential pumps run $250–$500, depending on tank size and access. We quote flat rates up front; call (580) 747-6206.",
  },
  {
    question: "What happens during a septic pump-out?",
    answer:
      "We uncover the lid, pump out solids and liquid, rinse the tank, and check the baffles and pipes. Most jobs take 45–90 minutes.",
  },
  {
    question: "What are the warning signs my septic tank needs pumping?",
    answer:
      "Slow drains, gurgling pipes, sewage odor, soggy grass over the drain field, or backups at the lowest drain. Call (580) 747-6206 before it damages the drain field.",
  },
  {
    question: "Do you pump commercial and grease tanks?",
    answer:
      "Yes: commercial waste tanks, restaurant grease traps, and multi-tenant systems, on a recurring schedule if you need one.",
  },
];

const SEPTIC_SERVICES = [
  {
    title: "Pumping",
    blurb: "Removes the solids from the tank.",
    image: IMAGES.septicTruckRear,
    alt: "Brower Inc. branded septic pump truck in rural Oklahoma",
    href: null,
    cta: "",
  },
  {
    title: "Maintenance",
    blurb: "Catches small issues before they get expensive.",
    image: IMAGES.septicMobileHome,
    alt: "Brower Inc. crew servicing a septic system at a rural Oklahoma home",
    href: "/services/septic-services",
    cta: "See septic services",
  },
  {
    title: "Inspection",
    blurb: "A written report, usually for buying or selling a home.",
    image: IMAGES.septicTruckDirect,
    alt: "Rear of a Brower Inc. septic service truck",
    href: "/services/septic-inspections",
    cta: "See septic inspections",
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
                  Most rural Oklahoma homes need a pump every 3 to 5 years. We pump, rinse, and
                  inspect in one visit across north-central Oklahoma and southern Kansas.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">What&apos;s Included</h2>
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
                alt="Brower Inc. technician pumping a residential septic tank with the pump truck behind him"
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
              Brower Inc. handles all three.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SEPTIC_SERVICES.map((u) => {
                const card = (
                  <>
                    <Image
                      src={u.image}
                      alt={u.alt}
                      width={600}
                      height={400}
                      className="h-56 w-full rounded-t-xl object-cover"
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
            <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl">
              Want the deeper guide? Read{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                the Oklahoma homeowner&apos;s guide to septic maintenance
              </Link>
              .
            </p>
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
            <ServiceCrossLinks slug="septic-tank-pumping" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="septic-tank-pumping" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
