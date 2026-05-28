import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICES, SERVICE_AREAS_DATA, PHONE, PHONE_HREF } from "@/lib/constants";
import { INDUSTRIES } from "@/lib/industries";
import { getIndustrySchema, getBreadcrumbSchema, jsonLdString } from "@/lib/structured-data";

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
      <section className="relative bg-gray-900 py-20 sm:py-28">
        <Image
          src={industry.image}
          alt={industry.imageAlt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {industry.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-200">
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

      {/* Trust Stats Bar */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {industry.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {industry.name} Sanitation Challenges We Solve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We understand the specific portable restroom needs of Oklahoma&apos;s {industry.name.toLowerCase()} industry — and we&apos;ve built our services around solving them.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {industry.painPoints.map((point, index) => (
              <div
                key={point.title}
                className="grid gap-8 rounded-xl border border-gray-200 bg-white p-8 lg:grid-cols-2"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    How Brower Inc. Solves This
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {point.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brower Inc. */}
      <section className="bg-gray-50 py-16 sm:py-24">
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

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Owner-Operated</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  When you call Brower Inc., you reach Troy Brower — not a call center. Owner accountability means your job matters personally.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">1,375+ Unit Fleet</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  One of the largest fleets in north-central Oklahoma. We always have inventory ready — even for emergency and large-scale deployments.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Emergencies don&apos;t wait for business hours. We answer the phone 24/7, including weekends, holidays, and during Oklahoma&apos;s storm season.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">We Go Where Others Won&apos;t</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Rural Oklahoma is our home turf. We deliver to remote locations across 20 counties — unpaved roads, farm access routes, and restricted sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section (if applicable) */}
      {industry.complianceTitle && industry.complianceContent && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {industry.complianceTitle}
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {industry.complianceContent}
                </p>
              </div>
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
          <p className="mt-4 text-center text-gray-600">
            Brower Inc. offers a complete range of portable sanitation solutions tailored to {industry.name.toLowerCase()} needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) =>
              service ? (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
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
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              {industry.name} Portable Restroom FAQ
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Common questions about portable restroom services for Oklahoma&apos;s {industry.name.toLowerCase()} industry.
            </p>

            <div className="mt-12 space-y-8">
              {industry.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-200 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Areas We Serve
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Brower Inc. provides {industry.name.toLowerCase()} portable restroom services throughout Oklahoma and southern Kansas.
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
          <div className="mt-6 text-center">
            <Link
              href="/service-areas"
              className="text-sm font-medium text-primary hover:text-primary-dark"
            >
              View All Service Areas →
            </Link>
          </div>
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
                className="rounded-lg border border-gray-200 p-4 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <h3 className="font-medium text-gray-900">{ind.name}</h3>
                <p className="mt-1 text-xs text-gray-500">
                  {ind.shortDescription}
                </p>
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

      <CTABanner
        title={industry.ctaTitle}
        description={industry.ctaDescription}
      />
    </>
  );
}
