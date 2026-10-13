import type { Metadata } from "next";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICE_AREAS_DATA, PHONE, PHONE_HREF } from "@/lib/constants";
import { getCollectionPageSchema, jsonLdString } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Service Areas | Portable Restroom Rental Across Oklahoma",
  description:
    "Portable restrooms, VIP trailers & septic services across Oklahoma and southern Kansas. Based in Newkirk, OK. Call (580) 747-6206.",
  alternates: { canonical: "/service-areas" },
};

const serviceAreasPageSchema = getCollectionPageSchema({
  name: "Service Areas — Oklahoma & Kansas",
  description:
    "Brower Inc. serves north-central Oklahoma and southern Kansas with portable restroom rentals, VIP trailers, hand washing stations, and septic services.",
  url: "/service-areas",
  items: SERVICE_AREAS_DATA.map((a) => ({
    name: `${a.name}, ${a.state}`,
    url: `/service-areas/${a.slug}`,
    description: a.description,
  })),
});

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(serviceAreasPageSchema) }}
      />
      <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Portable Restroom Rental Service Areas in Oklahoma &amp; Kansas
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Based in Newkirk, Oklahoma, Brower Inc. serves north-central Oklahoma and southern
              Kansas. Pick your county or town below.
            </p>
          </div>

          <AreasWeServe
            heading="Counties & Towns We Serve"
            subheading="Grouped by county, A to Z."
            className="mt-12" showViewAll={false}
          />

          {/* Don't See Your Area */}
          <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900">Don&apos;t See Your Area?</h2>
            <p className="mt-4 text-gray-600">
              Give us a call. We&apos;re willing to travel when the job makes sense.
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
