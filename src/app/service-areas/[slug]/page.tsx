import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICE_AREAS_DATA, SERVICES, PHONE, PHONE_HREF } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return SERVICE_AREAS_DATA.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS_DATA.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = SERVICE_AREAS_DATA.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const nearbyAreas = area.nearbyAreas
    .map((s) => SERVICE_AREAS_DATA.find((a) => a.slug === s))
    .filter(Boolean);

  const breadcrumbItems = [
    { name: "Service Areas", href: "/service-areas" },
    { name: area.name, href: `/service-areas/${area.slug}` },
  ];

  const locationLabel =
    area.type === "county"
      ? `${area.name}, ${area.state}`
      : `${area.name}, ${area.state}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              {area.isPrimary && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Primary Service Area
                </span>
              )}
              {area.type === "city" && area.county && (
                <span>{area.county}, {area.state}</span>
              )}
              {area.distance !== "Home base" && (
                <span>~{area.distance} from Newkirk</span>
              )}
              {area.distance === "Home base" && (
                <span className="font-medium text-primary">Our Home Base</span>
              )}
            </div>

            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Portable Restroom Rental &amp; Septic Services in {locationLabel}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {area.content.intro}
            </p>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              Whether you call it a porta potty, portable toilet, or portable restroom, Brower Inc. delivers clean, serviced units to {area.name} and the surrounding area. Contact us for a free porta potty rental quote.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${area.coordinates.lng}!3d${area.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${area.name}, ${area.state} — Brower Inc. service area`}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Brower Inc. in {area.name}?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {area.content.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Services Available in {area.name}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {area.content.servicesHighlight}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Nearby Service Areas
            </h2>
            <p className="mt-2 text-gray-600">
              We also serve these nearby communities:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyAreas.map((nearby) =>
                nearby ? (
                  <Link
                    key={nearby.slug}
                    href={`/service-areas/${nearby.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        {nearby.name}
                      </span>
                      {nearby.type === "city" && nearby.county && (
                        <p className="text-xs text-gray-500">{nearby.county}</p>
                      )}
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
