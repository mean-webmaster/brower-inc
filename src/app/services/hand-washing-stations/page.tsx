import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { GuidesForService, ServiceCrossLinks } from "@/components/RelatedContent";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES, SERVICE_AREAS_DATA } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  jsonLdString,
} from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[2];

const FAQS = [
  {
    question: "How much does a portable hand washing station rental cost in Oklahoma?",
    answer:
      "A portable hand washing station in Oklahoma typically rents for about $100–$175 per weekend event or $125–$200 per month for long-term jobsites with regular servicing. Pricing depends on the number of stations, how often they're serviced, and delivery distance from our Newkirk base. Call (580) 747-6206 for a free quote.",
  },
  {
    question: "Do portable hand washing stations need a water hookup?",
    answer:
      "No. Our portable hand washing stations are fully self-contained — they arrive stocked with potable water, soap, and paper towels, and include a waste containment tank. No plumbing, hose, or electrical hookup is required, which is what makes them ideal for remote jobsites, fields, and outdoor events with no infrastructure.",
  },
  {
    question: "Are hand washing stations required on OSHA construction sites?",
    answer:
      "Yes. OSHA 29 CFR 1926.51 requires employers to provide adequate hand washing facilities for construction crews, especially where workers handle hazardous materials or eat on site. Our stations meet that standard. For food-service events, Oklahoma county health departments also require hand washing facilities near food vendors.",
  },
  {
    question: "How many hand washing stations do I need?",
    answer:
      "A common guideline is one hand washing station per 1–2 portable restrooms, and at least one per food-vendor area at events. For construction sites, scale with crew size and OSHA requirements. Brower Inc. helps you calculate the right number based on your guest count or crew size when you book.",
  },
  {
    question: "Can I pair hand washing stations with porta potty rentals?",
    answer:
      "Absolutely — that's the most common setup. We deliver hand washing stations alongside our portable restroom and ADA unit rentals so your event or jobsite has complete sanitation in one drop-off. Bundling delivery also keeps costs down versus separate trips.",
  },
];

export const metadata: Metadata = {
  title: "Portable Hand Washing Station Rental Oklahoma | Brower",
  description:
    "Portable hand washing station rental in Oklahoma for events, construction & food vendors. OSHA-compliant, fully stocked, no hookups needed. Call (580) 747-6206.",
  alternates: { canonical: "/services/hand-washing-stations" },
};

export default function HandWashingStationsPage() {
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
                Portable Hand Washing Station Rental in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Your guests deserve to be germ-free as they eat and socialize. These stations pair perfectly with portable toilet rentals — place them near your bathroom area or around the venue. They minimize water waste and keep the nearby area as clean as possible.
              </p>

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
                src={IMAGES.handWashingStation}
                alt="Brower Inc. portable hand washing station rental in Newkirk, Oklahoma"
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

          {/* Hand Washing Station SEO Section */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Portable Hand Washing Station Rental in Oklahoma</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Need a portable hand washing station for your construction site, outdoor event, or food service operation? Brower Inc. delivers clean, fully stocked hand washing stations across north-central Oklahoma — including Ponca City, Enid, Blackwell, Tonkawa, Hennessey, Stillwater, and communities throughout Kay County, Garfield County, Kingfisher County, and Logan County. Our stations meet OSHA construction site requirements (29 CFR 1926.51) and Oklahoma county health department standards for events with food vendors.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              Every hand washing station rental includes potable water, soap, paper towels, and a waste containment tank. Pair them with our <Link href="/services/portable-restrooms" className="text-primary font-medium hover:underline">portable restroom rentals</Link> for complete jobsite or event sanitation. <Link href="/contact" className="text-primary font-medium hover:underline">Request a free quote</Link> or call us at (580) 747-6206.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Hand washing station FAQs</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          {/* Areas We Serve */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600">
              We deliver hand washing stations throughout Oklahoma and southern Kansas.
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

      {/* Related services / industries / areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ServiceCrossLinks slug="hand-washing-stations" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="hand-washing-stations" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
