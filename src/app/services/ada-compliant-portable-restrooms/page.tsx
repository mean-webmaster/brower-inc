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

const service = SERVICES.find((s) => s.slug === "ada-compliant-portable-restrooms")!;

export const metadata: Metadata = {
  title: "ADA-Compliant Portable Restroom Rental Oklahoma",
  description:
    "Wheelchair-accessible porta potty rental in Oklahoma — meets ADA & OSHA requirements. Ground-level entry, interior handrails, family-friendly. Call (580) 747-6206.",
  alternates: { canonical: "/services/ada-compliant-portable-restrooms" },
};

const FAQS = [
  {
    question: "What makes a portable restroom ADA-compliant?",
    answer:
      "Zero-step entry, interior handrails, a wider door, and room for a wheelchair turning radius (typically 60 inches), per the 2010 ADA Standards for Accessible Design.",
  },
  {
    question: "Does OSHA require ADA porta potties on construction sites?",
    answer:
      "When employees with mobility disabilities are present, OSHA requires reasonable accommodation, which generally means at least one ADA unit on site. We recommend at least one per project site as a baseline.",
  },
  {
    question: "How many ADA units do I need at a public event?",
    answer:
      "ADA guidelines call for at least 5% of single-user toilets (minimum 1) to be accessible. One is usually enough under 500 guests; larger festivals should plan one per 200–250 attendees.",
  },
  {
    question: "Are ADA portable restrooms family-friendly?",
    answer:
      "Yes. The extra room and grab bars help parents assisting children and caregivers helping elderly guests.",
  },
  {
    question: "Can I add a hand washing station to an ADA porta potty?",
    answer:
      "Yes. We pair ADA units with hand washing stations that have lower basins reachable from a seated position.",
  },
];

export default function ADACompliantPage() {
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
                ADA-Compliant Portable Restroom Rental in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Wheelchair-accessible portable restrooms for jobsites and public events.
              </p>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  An ADA-compliant portable restroom has ground-level entry, interior handrails, and a
                  wheelchair turning radius. We deliver them across north-central Oklahoma and southern
                  Kansas.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Features &amp; Benefits</h2>
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
                  Get a Free Quote
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
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={IMAGES.adaRestroom}
                  alt="Brower Inc. ADA-compliant wheelchair-accessible portable restroom with Brower logo"
                  width={864}
                  height={1000}
                  className="h-80 w-full rounded-xl border border-gray-200 bg-white object-contain p-2"
                />
                <Image
                  src={IMAGES.adaRestroomInterior}
                  alt="Inside an ADA-compliant portable restroom showing the wide door opening, handrails, and flat floor"
                  width={925}
                  height={990}
                  className="h-80 w-full rounded-xl border border-gray-200 bg-white object-contain p-2"
                />
              </div>

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
              OSHA, ADA &amp; the Oklahoma Construction Site
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
              <Image
                src={IMAGES.portableRestroomNight}
                alt="Brower Inc. service truck and portable restrooms at a construction site"
                width={2048}
                height={1536}
                className="h-80 w-full rounded-xl object-cover"
              />
              <div>
                <p className="text-gray-600 leading-relaxed">
                  OSHA{" "}
                  <Link
                    href="/blog/how-many-porta-potties-construction-site-oklahoma"
                    className="text-primary hover:underline"
                  >
                    29 CFR 1926.51
                  </Link>{" "}
                  sets how many restrooms a jobsite needs. If a crew member or public frontage brings in
                  the ADA, add at least one accessible unit.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Need a count?{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    We&apos;ll calculate the right mix for your project.
                  </Link>
                </p>
              </div>
            </div>
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
            <ServiceCrossLinks slug="ada-compliant-portable-restrooms" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="ada-compliant-portable-restrooms" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
