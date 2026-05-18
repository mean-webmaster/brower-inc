import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, SERVICE_AREAS_DATA, PHONE, PHONE_HREF } from "@/lib/constants";
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
      "An ADA-compliant portable restroom has ground-level zero-step entry, interior handrails, sufficient interior space for a wheelchair turning radius (typically 60 inches), and a wider door — all per the Americans with Disabilities Act 2010 Standards for Accessible Design. Brower Inc.'s units meet every requirement out of the gate.",
  },
  {
    question: "Does OSHA require ADA porta potties on construction sites?",
    answer:
      "Yes — when employees with mobility disabilities are present, OSHA requires reasonable accommodation, which generally means at least one ADA-accessible unit on site. ADA Title III also applies to events and public projects. We recommend at least 1 ADA unit per project site as a baseline.",
  },
  {
    question: "How many ADA units do I need at a public event?",
    answer:
      "ADA guidelines call for at least 5% of single-user toilet facilities (minimum 1) to be accessible. For most Oklahoma events under 500 guests, one ADA unit is enough. Larger festivals should plan one per 200–250 attendees. Brower Inc. helps you calculate the right mix when you book.",
  },
  {
    question: "Are ADA portable restrooms family-friendly?",
    answer:
      "Yes. The extra interior space and grab bars make ADA units ideal when parents need to assist children, or when caregivers accompany elderly guests. Many event clients book an ADA unit purely for the family-friendly versatility, even when ADA compliance isn't strictly required.",
  },
  {
    question: "Can I add a hand washing station to an ADA porta potty?",
    answer:
      "Absolutely — and we recommend it for inclusive accessibility. We pair our ADA-compliant porta potties with ADA-friendly hand washing stations that have lower basins reachable from a seated position. Bundle pricing is available when you book both.",
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
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  An ADA-compliant portable restroom meets the Americans with Disabilities Act
                  Standards for Accessible Design — featuring ground-level entry, interior
                  handrails, and a wheelchair turning radius. Brower Inc. provides ADA porta potties
                  across Oklahoma and southern Kansas for construction sites, public events, and
                  inclusive gatherings.
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
              <Image
                src={IMAGES.portableRestroomTrio}
                alt="Brower Inc. ADA-compliant portable restroom trio mounted on trailer ready for delivery in Newkirk, Oklahoma"
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

          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">
              OSHA, ADA &amp; the Oklahoma Construction Site
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              OSHA's sanitation standard{" "}
              <Link
                href="/blog/how-many-porta-potties-construction-site-oklahoma"
                className="text-primary hover:underline"
              >
                29 CFR 1926.51
              </Link>{" "}
              dictates how many portable restrooms you need on a construction site. When ADA Title I
              and Title III come into play — disabled employees on the crew, or public-facing
              project frontage — you also need at least one ADA-accessible unit. Brower Inc. pairs
              our standard fleet with ADA-compliant units so your jobsite stays compliant under both
              OSHA and ADA without the headache. Need a count? Our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                team will calculate the right mix for your project.
              </Link>
            </p>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600">
              ADA-compliant portable restroom rental throughout Oklahoma and southern Kansas.
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
          </div>

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

      <CTABanner />
    </>
  );
}
