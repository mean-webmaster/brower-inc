import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { INDUSTRIES } from "@/lib/industries";
import { getCollectionPageSchema, jsonLdString } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Industries We Serve | Portable Restroom Rental by Industry | Oklahoma",
  description:
    "Brower Inc. provides portable restroom rental for construction, oil & gas, events, agriculture, government, film production, utilities & disaster relief in Oklahoma.",
  alternates: { canonical: "/industries" },
};

const industriesPageSchema = getCollectionPageSchema({
  name: "Industries We Serve",
  description:
    "Brower Inc. provides industry-specific portable sanitation solutions for construction, oil & gas, events, agriculture, government, film production, utilities, disaster relief, and real estate across Oklahoma and southern Kansas.",
  url: "/industries",
  items: INDUSTRIES.map((i) => ({
    name: i.name,
    url: `/industries/${i.slug}`,
    description: i.shortDescription,
  })),
});

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(industriesPageSchema) }}
      />
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From construction sites and oil fields to weddings and emergency
              disaster response, Brower Inc. delivers clean, reliable portable
              sanitation solutions tailored to your industry&apos;s specific needs.
              Serving 20 counties across Oklahoma and southern Kansas with a
              640+ unit fleet.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
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

      {/* Industry Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={industry.icon}
                    />
                  </svg>
                </div>

                <h2 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {industry.name}
                </h2>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {industry.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.stats.slice(0, 3).map((stat) => (
                    <span
                      key={stat.label}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {stat.value} {stat.label}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Learn More
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brower — E-E-A-T Summary */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Industries Across Oklahoma Trust Brower Inc.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Owner-operated. Field-tested. Built for Oklahoma&apos;s toughest conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">We Go Where Others Won&apos;t</h3>
              <p className="mt-2 text-sm text-gray-600">
                Competitors cluster in OKC and Tulsa. We own north-central Oklahoma — delivering to remote oil fields, rural farms, and small-town events across 20 counties.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Owner Answers the Phone</h3>
              <p className="mt-2 text-sm text-gray-600">
                When you call (580) 747-6206, you reach Troy Brower — not a call center. Direct accountability means your project gets personal attention from the owner.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">640+ Units, One Standard</h3>
              <p className="mt-2 text-sm text-gray-600">
                Our fleet is one of the largest in north-central Oklahoma. Every unit receives the same weekly servicing protocol — clean, stocked, and inspected.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Oklahoma Weather-Hardened</h3>
              <p className="mt-2 text-sm text-gray-600">
                100°F summers, tornado season, ice storms, and 40+ mph winds. We have protocols for every Oklahoma weather scenario because we live and work in it.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Restrooms + Septic</h3>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;re one of the only north-central Oklahoma providers offering both portable sanitation and septic services — deeper expertise from understanding both sides.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">24/7 — Truly</h3>
              <p className="mt-2 text-sm text-gray-600">
                Emergencies don&apos;t wait for Monday. Tornado strikes at 2 AM? Saturday night event crisis? We answer every time because Oklahoma doesn&apos;t have business hours for disasters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Discuss Your Industry's Needs?"
        description="Tell us about your project and we'll recommend the right portable sanitation solution for your industry."
      />
    </>
  );
}
