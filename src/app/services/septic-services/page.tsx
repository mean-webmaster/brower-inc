import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { GuidesForService, ServiceCrossLinks } from "@/components/RelatedContent";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  jsonLdString,
} from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[3];

const FAQS = [
  {
    question: "How much does septic tank pumping cost in Oklahoma?",
    answer:
      "Most residential pumping runs roughly $250–$600, depending on tank size, lid access, and distance. Call (580) 747-6206 for a firm quote.",
  },
  {
    question: "How often should I pump my septic tank?",
    answer:
      "Most tanks need pumping every 3–5 years, depending on tank size and household water use. Regular pumping keeps solids out of the drain field.",
  },
  {
    question: "What are the signs I need septic service?",
    answer:
      "Slow drains, sewage odor, soggy or extra-green grass over the drain field, standing water, or gurgling pipes. Call early, before it becomes a backup.",
  },
  {
    question: "Do you offer emergency septic service near me?",
    answer:
      "Yes. We offer 24/7 emergency response for septic backups and same-week scheduling for routine pumping across north-central Oklahoma and southern Kansas.",
  },
  {
    question: "Do you install aerobic and conventional septic systems?",
    answer:
      "Yes. We survey the site, recommend the right system for your soil and lot, and install conventional or aerobic systems.",
  },
  {
    question: "Do you provide residential and commercial septic pumping?",
    answer:
      "Both: residential tanks, commercial systems, grease traps, and aerobic systems. Businesses can set up a recurring pumping schedule.",
  },
];

const PHOTOS = [
  {
    image: IMAGES.septicTruckRear,
    alt: "Brower Inc. branded septic pump truck parked on a gravel drive in rural Oklahoma",
    caption: "Our septic pump truck.",
  },
  {
    image: IMAGES.septicMobileHome,
    alt: "Brower Inc. crew and trucks servicing a septic system at a rural Oklahoma home",
    caption: "On site at a rural home.",
  },
];

export const metadata: Metadata = {
  title: "Septic Pumping Near Me — Oklahoma & Kansas",
  description:
    "Searching for septic pumping near me? Brower Inc. provides septic tank pumping, repair & aerobic install across Oklahoma & southern Kansas. Call (580) 747-6206.",
  alternates: { canonical: "/services/septic-services" },
};

export default function SepticServicesPage() {
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
                Septic Pumping Near You — Across Oklahoma &amp; Southern Kansas
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Septic Repair</h2>
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">
                    Smelly puddles or sewage backing up? We find the problem and fix it.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Septic &amp; Aerobic Installation</h2>
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">
                    Site survey, excavation, and install for conventional and aerobic systems.
                  </p>
                </div>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Our Septic Services Include</h2>
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
                  Schedule Service
                </Link>
                <a href="tel:+15807476206" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  Call (580) 747-6206
                </a>
              </div>
            </div>

            <div>
              <Image
                src={IMAGES.septicPumpingClose}
                alt="Brower Inc. technician performing septic tank pumping service at residential property in Oklahoma"
                width={600}
                height={400}
                className="h-80 w-full rounded-xl object-cover"
              />

              <h2 className="mt-10 text-2xl font-bold text-gray-900">Who We Serve</h2>
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

          {/* Septic coverage */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Septic Pumping Near Me — Oklahoma &amp; Kansas</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Residential and commercial septic service across north-central Oklahoma and southern
              Kansas.{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">Schedule your septic service</Link> or call (580) 747-6206.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {PHOTOS.map((p) => (
                <figure key={p.caption} className="overflow-hidden rounded-xl border border-gray-200">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                  />
                  <figcaption className="p-4 text-sm text-gray-600">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Septic services — frequently asked questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          <AreasWeServe />

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
            <ServiceCrossLinks slug="septic-services" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="septic-services" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
