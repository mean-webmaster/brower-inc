import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { GuidesForIndustry } from "@/components/RelatedContent";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/constants";
import { INDUSTRIES } from "@/lib/industries";
import { IMAGES } from "@/lib/images";
import { getIndustrySchema, getBreadcrumbSchema, jsonLdString } from "@/lib/structured-data";

// Product shots on white backgrounds look best uncropped.
const CONTAIN_IMAGES = new Set<string>([
  IMAGES.trailer8StationFlex,
  IMAGES.trailer4Station,
  IMAGES.adaRestroom,
  IMAGES.adaRestroomInterior,
  IMAGES.deluxeFlushable,
  IMAGES.deluxeFlushableFootPump,
]);

function imgFit(src: string) {
  return CONTAIN_IMAGES.has(src) ? "bg-white object-contain p-3" : "object-cover";
}

const SERVICE_IMAGES: Record<string, string> = {
  "portable-restrooms": IMAGES.portableRestroomHero,
  "vip-shower-restroom-trailers": IMAGES.vipExteriorAngle,
  "hand-washing-stations": IMAGES.handWashingStation,
  "septic-services": IMAGES.septicTruckRear,
  "long-term-rentals": IMAGES.portableRestroomWarehouse,
};

const WHY_TILES = [
  {
    title: "Owner-Operated",
    text: "Call and you reach Troy Brower directly.",
    icon: ["M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"],
  },
  {
    title: "1,375+ Unit Fleet",
    text: "Inventory ready, even for large and emergency jobs.",
    icon: ["M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"],
  },
  {
    title: "24/7 Availability",
    text: "Weekends, holidays, and storm season.",
    icon: ["M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"],
  },
  {
    title: "Rural Delivery",
    text: "Unpaved roads and remote sites across north-central Oklahoma and southern Kansas.",
    icon: [
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    ],
  },
];

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: `/industries/${industry.slug}` },
  ];

  const relatedServices = industry.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 4);

  const schemas = getIndustrySchema({
    name: industry.name,
    slug: industry.slug,
    heroDescription: industry.heroDescription,
    faqs: industry.faqs,
  });

  return (
    <>
      {/* Structured Data: Service + FAQ Schema */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(getBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {industry.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {industry.heroDescription}
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
            </div>
          </div>
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            width={900}
            height={600}
            priority
            className={`h-72 w-full rounded-xl sm:h-96 ${imgFit(industry.image)}`}
          />
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="border-y bg-white py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {industry.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Strip */}
      {industry.gallery && industry.gallery.length > 0 && (
        <section className="pt-12">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {industry.gallery.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className={`h-56 w-full rounded-xl border border-gray-100 ${imgFit(photo.src)}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Pain Points & Solutions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {industry.name} Challenges We Solve
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {industry.painPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-500">{point.description}</p>
                <p className="mt-3 flex gap-2 text-gray-800">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point.solution}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brower Inc. */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Oklahoma&apos;s {industry.name} Industry Trusts Brower Inc.
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {industry.whyBrower}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WHY_TILES.map((tile) => (
                <div key={tile.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      {tile.icon.map((d) => (
                        <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                      ))}
                    </svg>
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-900">{tile.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{tile.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section (if applicable) */}
      {industry.complianceTitle && industry.complianceContent && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-xl border-l-4 border-primary bg-primary/5 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {industry.complianceTitle}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {industry.complianceContent}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Services for This Industry */}
      <section className={industry.complianceTitle ? "bg-gray-50 py-16" : "py-16"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Our Services for {industry.name}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) =>
              service ? (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                >
                  {SERVICE_IMAGES[service.slug] && (
                    <Image
                      src={SERVICE_IMAGES[service.slug]}
                      alt={`Brower Inc. ${service.title.toLowerCase()}`}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center text-sm font-medium text-primary">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            {industry.name} Portable Restroom FAQ
          </h2>
          <div className="mt-10">
            <FAQAccordion faqs={industry.faqs} />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AreasWeServe className="" />
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Other Industries We Serve
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group overflow-hidden rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <Image
                  src={ind.image}
                  alt={ind.imageAlt}
                  width={400}
                  height={260}
                  className={`h-36 w-full ${imgFit(ind.image)}`}
                />
                <h3 className="p-4 font-medium text-gray-900 group-hover:text-primary">{ind.name}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/industries"
              className="text-sm font-medium text-primary hover:text-primary-dark"
            >
              View All Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForIndustry slug={industry.slug} />
          </div>
        </div>
      </section>

      <CTABanner
        title={industry.ctaTitle}
        description={industry.ctaDescription}
      />
    </>
  );
}
