import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, SERVICE_AREAS_DATA } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  jsonLdString,
} from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[4];

const FAQS = [
  {
    question: "How much does construction porta potty rental cost per month in Oklahoma?",
    answer:
      "A standard construction porta potty in Oklahoma typically rents for about $200–$300 per month with weekly servicing included. ADA-compliant units and high-traffic sites that need twice-weekly service cost more. Volume rates apply when you rent multiple units for a single jobsite. Because long-term pricing depends on unit count, service frequency, and distance from our Newkirk yard, call (580) 747-6206 for a project quote.",
  },
  {
    question: "Is weekly servicing included with a long-term rental?",
    answer:
      "Yes. Every Brower Inc. long-term rental includes weekly servicing: we empty the waste tank, restock toilet paper, hand sanitizer, and paper towels, sanitize and scrub the interior, and inspect the unit for damage. High-usage jobsites can be scheduled for additional service visits. You get a documented service schedule you can show for OSHA compliance.",
  },
  {
    question: "How many porta potties does my construction site need?",
    answer:
      "Under OSHA 29 CFR 1926.51, you need one toilet for crews up to 20 workers, two toilets for 20–199 workers, and one additional toilet per 40 workers beyond that. Sites with workers who have mobility disabilities also need at least one ADA-accessible unit, plus handwashing facilities. Brower Inc. calculates the exact mix for your crew size and adds handwashing stations where required.",
  },
  {
    question: "What's the difference between long-term and monthly porta potty rental?",
    answer:
      "They're the same thing in practice — a long-term or monthly porta potty rental is any rental billed on an ongoing (usually monthly) cycle with weekly servicing included, as opposed to a one-time event rental. Long-term rentals are built for multi-month construction, oil and gas field operations, and commercial projects, and they qualify for volume pricing the longer and larger the job.",
  },
  {
    question: "Do you offer ADA and his/her units for jobsites?",
    answer:
      "Yes. We carry ADA-compliant (handicap-accessible) units and his-and-her configurations alongside our standard Maxim 300 units. ADA units are required on OSHA jobsites where a worker has a mobility disability, and they're a smart default for any larger crew. We'll help you determine the right number and mix of units based on crew size and usage.",
  },
  {
    question: "Can you deliver to remote and rural jobsites?",
    answer:
      "Yes — rural and remote delivery is our specialty. From our Newkirk, OK base, our fleet reaches construction sites, oil-field service tracks, and remote work sites across 14 Oklahoma counties and 6 southern Kansas counties. National providers often won't service addresses outside city limits; we will. Call (580) 747-6206 with your jobsite location and we'll confirm delivery.",
  },
];

export const metadata: Metadata = {
  title: "Construction Porta Potty Rental Oklahoma | Long-Term Jobsite",
  description:
    "Construction porta potty rental in Oklahoma — long-term jobsite units with weekly servicing, ADA, and his/her options. Owner-operated. Call (580) 747-6206.",
  alternates: { canonical: "/services/long-term-rentals" },
};

export default function LongTermRentalsPage() {
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
                Construction &amp; Long-Term Porta Potty Rental in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-6 rounded-lg bg-gray-50 p-6">
                <h2 className="text-lg font-bold text-gray-900">What&apos;s Included in Weekly Servicing</h2>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Empty the waste tank
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Restock toilet paper, hand sanitizer, and paper towels
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Sanitize, scrub, and rinse the restroom
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Inspect for damage to ensure the unit is functioning properly
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  We also carry his-and-her options and handicap-accessible units depending on your needs. We will help you determine the required number of units based on usage frequency and the number of guests or employees.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Features & Benefits</h2>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                  Get a Free Quote
                </Link>
                <a href="tel:+15807476206" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  Call (580) 747-6206
                </a>
              </div>
            </div>

            <div>
              <Image
                src={IMAGES.fleetLineup}
                alt="Brower Inc. full fleet of trucks and equipment lined up for long-term rental deployment in Newkirk, Oklahoma"
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

          {/* FAQ */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Construction &amp; long-term rental FAQs</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          {/* Areas We Serve */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600">
              We provide long-term portable restroom rentals throughout Oklahoma and southern Kansas.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Oklahoma</h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS_DATA.filter(a => a.state === "OK").map(area => (
                    <Link key={area.slug} href={`/service-areas/${area.slug}`}
                      className="rounded-full bg-white border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Kansas</h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS_DATA.filter(a => a.state === "KS").map(area => (
                    <Link key={area.slug} href={`/service-areas/${area.slug}`}
                      className="rounded-full bg-white border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/service-areas" className="text-sm font-medium text-primary hover:text-primary-dark">
                View All Service Areas →
              </Link>
            </div>
          </div>

          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-lg border border-gray-200 p-4 hover:border-primary/30 hover:shadow-sm transition-all">
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
