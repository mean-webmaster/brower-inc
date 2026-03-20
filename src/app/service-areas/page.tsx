import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICE_AREAS, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Portable Restroom Rental Across Oklahoma",
  description:
    "Brower Inc. delivers portable restrooms, VIP trailers, and septic services throughout Oklahoma including Ponca City, Stillwater, Enid, OKC, Tulsa, and more. Based in Newkirk, OK.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Service Areas
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Based in Newkirk, Oklahoma, Brower Inc. proudly serves communities across the
              state with portable restroom rentals, VIP restroom trailers, hand washing
              stations, and septic services.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Cities & Regions We Serve
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4"
                >
                  <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900">Don&apos;t See Your Area?</h2>
            <p className="mt-4 text-gray-600">
              We are always expanding our service area. If you do not see your city listed,
              give us a call — we may still be able to serve you.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
