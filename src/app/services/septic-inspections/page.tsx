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

const service = SERVICES.find((s) => s.slug === "septic-inspections")!;

export const metadata: Metadata = {
  title: "Septic System Inspection Oklahoma — Real Estate Inspections",
  description:
    "Septic system inspections for Oklahoma & Kansas real-estate transactions. Detailed written reports often within 48 hours. Trusted by realtors & lenders. Call (580) 747-6206.",
  alternates: { canonical: "/services/septic-inspections" },
};

const FAQS = [
  {
    question: "Is a septic inspection required to buy a home in Oklahoma?",
    answer:
      "Not by state law, but most lenders, title companies, and FHA/VA loans require one for homes on septic. We deliver the written report your closing needs.",
  },
  {
    question: "How long does a septic inspection take?",
    answer:
      "About 1–2 hours on site. The written report typically follows within 48 hours.",
  },
  {
    question: "What does a septic inspection check?",
    answer:
      "Tank condition, sludge level, baffles, lid, inlet and outlet pipes, distribution box, drain field, and code compliance. We also note maintenance recommendations.",
  },
  {
    question: "How much does a septic inspection cost in Oklahoma?",
    answer:
      "Inspection-only typically runs $200–$400, depending on tank size and access. Call (580) 747-6206 for an exact quote, or ask about bundling it with a pump-out.",
  },
  {
    question: "Do you provide inspection reports for lenders?",
    answer:
      "Yes. We can email the written report directly to your closing agent.",
  },
];

export default function SepticInspectionsPage() {
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
                Septic System Inspections in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  A written assessment of the tank, drain field, baffles, and code compliance, required
                  by most lenders. Reports within 48 hours so closings stay on schedule.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">What&apos;s Included</h2>
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
                  Schedule an Inspection
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
              <Image
                src={IMAGES.septicMobileHome}
                alt="Brower Inc. crew and trucks on site at a rural Oklahoma home with a septic system"
                width={600}
                height={400}
                className="h-80 w-full rounded-xl object-cover"
              />

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

          <div className="mt-16 border-t pt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">For Realtors &amp; Lenders</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Clear written reports, sent straight to the closing agent.{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Send us the property address
                </Link>{" "}
                to get on the calendar.
              </p>
            </div>
            <Image
              src={IMAGES.septicTruckRear}
              alt="Brower Inc. branded septic service truck on a gravel drive in rural Oklahoma"
              width={600}
              height={400}
              className="h-72 w-full rounded-xl object-cover"
            />
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
            <ServiceCrossLinks slug="septic-inspections" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="septic-inspections" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
