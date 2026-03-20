import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICE_AREAS_DATA, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Portable Restroom Rental Across Oklahoma",
  description:
    "Brower Inc. delivers portable restrooms, VIP trailers, and septic services throughout Oklahoma. Serving Kay County, Garfield County, Kingfisher County, Logan County, Woods County, and more. Based in Newkirk, OK.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const primaryAreas = SERVICE_AREAS_DATA.filter((a) => a.isPrimary);
  const countyAreas = SERVICE_AREAS_DATA.filter(
    (a) => a.type === "county" && !a.isPrimary
  );
  const otherCityAreas = SERVICE_AREAS_DATA.filter(
    (a) => a.type === "city" && !a.isPrimary
  );

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
              Based in Newkirk, Oklahoma, Brower Inc. proudly serves communities across
              the state with portable restroom rentals, VIP restroom trailers, hand washing
              stations, and septic services. We&apos;re local — but willing to travel when the
              job makes sense.
            </p>
          </div>

          {/* Primary Service Area: Kay County */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">
              <span className="text-primary">●</span> Primary Service Area — Kay County
            </h2>
            <p className="mt-2 text-gray-600">
              Our home base. Fast delivery, competitive rates, and same-day service often available.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {primaryAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                        {area.name}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        {area.type === "county" ? "County" : area.county} • {area.distance}
                      </p>
                    </div>
                    <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                    {area.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                    View Details →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Nearby Counties */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">
              Nearby Counties We Serve
            </h2>
            <p className="mt-2 text-gray-600">
              We regularly serve these neighboring counties with the same quality and professionalism.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {countyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                    {area.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">~{area.distance} away</p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {area.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                    View Details →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cities We Serve */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">
              Cities &amp; Communities
            </h2>
            <p className="mt-2 text-gray-600">
              Individual city service pages with local details and nearby area information.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {otherCityAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-sm font-medium text-gray-900">{area.name}</span>
                    <p className="text-xs text-gray-500">{area.county}, {area.state}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Don't See Your Area */}
          <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900">Don&apos;t See Your Area?</h2>
            <p className="mt-4 text-gray-600">
              We&apos;re always willing to travel when the job makes sense. If you don&apos;t see
              your city or county listed, give us a call — we may still be able to serve you.
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
