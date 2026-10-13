import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { getCollectionPageSchema, jsonLdString } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Services | Portable Restrooms, Trailers & Septic | Oklahoma",
  description:
    "Brower Inc. offers portable restroom rental, VIP luxury trailers, hand washing stations, septic services & long-term rentals across Oklahoma. Call (580) 747-6206.",
  alternates: { canonical: "/services" },
};

const servicesPageSchema = getCollectionPageSchema({
  name: "Portable Sanitation & Septic Services",
  description:
    "Complete portable sanitation solutions across Oklahoma and southern Kansas — porta potty rental, VIP restroom trailers, hand washing stations, septic services, and long-term rentals.",
  url: "/services",
  items: SERVICES.map((s) => ({
    name: s.title,
    url: `/services/${s.slug}`,
    description: s.shortDescription,
  })),
});

const SERVICE_IMAGES: Record<string, string> = {
  "portable-restrooms": IMAGES.portableRestroomLineup,
  "vip-shower-restroom-trailers": IMAGES.trailer8DoorShower,
  "hand-washing-stations": IMAGES.handWashingStation,
  "septic-services": IMAGES.septicTruckRear,
  "long-term-rentals": IMAGES.fleetLineup,
  "deluxe-flushable-portable-toilets": IMAGES.deluxeFlushable,
  "ada-compliant-portable-restrooms": IMAGES.adaRestroom,
  "emergency-porta-potty-rental": IMAGES.deliveryLot,
  "septic-tank-pumping": IMAGES.septicPumpingClose,
  "septic-inspections": IMAGES.septicMobileHome,
};

// Product shots on white backgrounds: show the whole unit instead of cropping.
const CONTAIN_IMAGES = new Set([
  "vip-shower-restroom-trailers",
  "deluxe-flushable-portable-toilets",
  "ada-compliant-portable-restrooms",
]);

// Skip bullets that state county counts or reference other providers.
const showFeature = (feature: string) => !/county|call center/i.test(feature);

const SERVICE_ALT: Record<string, string> = {
  "portable-restrooms":
    "Brower Inc. porta potty lineup ready for event or construction site delivery in Newkirk, Oklahoma",
  "vip-shower-restroom-trailers":
    "Brower Inc. 8-door shower trailer with Brower logo",
  "hand-washing-stations":
    "Brower Inc. portable hand washing station in warehouse staging area in Newkirk, Oklahoma",
  "septic-services":
    "Brower Inc. branded septic pump truck rear view at job site in Newkirk, Oklahoma",
  "long-term-rentals":
    "Brower Inc. full fleet of trucks and equipment lined up for long-term rental deployment across Oklahoma",
  "deluxe-flushable-portable-toilets":
    "Brower Inc. deluxe flushable portable toilet with Brower logo",
  "ada-compliant-portable-restrooms":
    "Brower Inc. ADA-compliant wheelchair-accessible portable restroom with Brower logo",
  "emergency-porta-potty-rental":
    "Brower Inc. service truck placing a portable restroom at night",
  "septic-tank-pumping":
    "Brower Inc. technician performing septic tank pumping at a residential property in Newkirk, Oklahoma",
  "septic-inspections":
    "Brower Inc. septic crew and trucks on site at a rural mobile home",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(servicesPageSchema) }}
      />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Portable Restroom Rental &amp; Septic Services in Oklahoma
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Jobsite porta potties, luxury wedding trailers, and septic
              pumping across north-central Oklahoma and southern Kansas.
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

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={SERVICE_IMAGES[service.slug] || IMAGES.hero}
                    alt={
                      SERVICE_ALT[service.slug] ||
                      `Brower Inc. ${service.title} service in Oklahoma`
                    }
                    fill
                    className={
                      CONTAIN_IMAGES.has(service.slug)
                        ? "bg-white object-contain p-4"
                        : "object-cover"
                    }
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {service.slug === "vip-shower-restroom-trailers" && (
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      New:{" "}
                      <Link
                        href="/services/vip-shower-restroom-trailers#trailer-8-door-shower"
                        className="font-semibold text-primary hover:underline"
                      >
                        8-door shower trailer and 4-station restroom trailer
                      </Link>
                      .
                    </p>
                  )}

                  <ul className="mt-6 space-y-2">
                    {service.features.filter(showFeature).slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
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
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                    >
                      Learn More →
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — E-E-A-T */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Oklahoma Chooses Brower Inc.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              1,375+ unit fleet. Owner-operated. Always on call.
            </p>
          </div>

          <Image
            src={IMAGES.portableRestroomWarehouse}
            alt="Rows of Brower Inc. portable restrooms staged in a warehouse"
            width={2048}
            height={1536}
            className="mt-10 h-72 w-full rounded-2xl object-cover shadow-md sm:h-96"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "1,375+ Unit Fleet", body: "Inventory ready when you need it." },
              { title: "Owner-Operated", body: "Troy Brower personally manages every project." },
              { title: "24/7 Support", body: "We answer the phone day or night, including weekends and tornado season." },
              { title: "Weekly Servicing", body: "All long-term rentals include weekly cleaning, restocking, and inspection." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
