import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import { SERVICES, PHONE, PHONE_HREF, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portable Restroom Rental & Septic Services | Newkirk, OK",
  description:
    "Brower Inc. offers portable restroom rentals, VIP luxury restroom trailers, hand washing stations, septic pumping, and long-term rentals in Newkirk, Oklahoma. Call (580) 747-6206 for a free quote.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Oklahoma&apos;s Trusted{" "}
              <span className="text-primary">Portable Sanitation</span> Provider
            </h1>
            <p className="mt-6 text-lg text-gray-300 sm:text-xl">
              Portable restrooms, luxury VIP trailers, hand washing stations, and septic
              services for events, construction sites, and commercial projects throughout
              Oklahoma.
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
            { label: "Serving All of Oklahoma", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
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

      {/* Testimonials */}
      <Testimonials />

      {/* Service Area Mention */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-50 p-8 sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Serving Communities Across Oklahoma</h2>
              <p className="mt-4 text-lg text-gray-600">
                Based in Newkirk, OK, we deliver and service portable restrooms throughout the state.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {SERVICE_AREAS.slice(0, 12).map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                >
                  {area}
                </span>
              ))}
              <Link
                href="/service-areas"
                className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
              >
                View All Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
