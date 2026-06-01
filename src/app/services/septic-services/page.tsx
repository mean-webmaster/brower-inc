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

const service = SERVICES[3];

const FAQS = [
  {
    question: "How much does septic tank pumping cost in Oklahoma?",
    answer:
      "Most residential septic tank pumping in Oklahoma runs roughly $250–$600, depending on tank size (1,000 vs. 1,500 gallons), how accessible the lid is, how full the tank is, and your distance from our Newkirk base. Commercial tanks and grease traps are quoted by volume. Because pricing varies with access and condition, call (580) 747-6206 for a firm quote tailored to your property.",
  },
  {
    question: "How often should I pump my septic tank?",
    answer:
      "As a rule of thumb, most septic tanks need pumping every 3–5 years. The exact interval depends on tank size, household size, and water usage — a large family on a small tank may need service every 2–3 years, while a couple on a 1,500-gallon tank may go closer to 5. Regular pumping prevents solids from reaching the drain field, which is the single most expensive part of a septic system to repair.",
  },
  {
    question: "What are the signs I need septic service?",
    answer:
      "Call for service if you notice slow drains throughout the house, sewage odor near the tank or drain field, unusually green or spongy grass over the drain field, standing water or wet spots in the yard, or gurgling sounds in your plumbing. These are early warnings of a tank that's overdue for pumping or a developing backup. Addressing them early is far cheaper than an emergency cleanup.",
  },
  {
    question: "Do you offer emergency septic service near me?",
    answer:
      "Yes. Brower Inc. provides 24/7 emergency response for septic backups across north-central Oklahoma and southern Kansas, alongside same-week scheduling for routine pumping. We're based in Newkirk, OK and serve homeowners and businesses in Ponca City, Enid, Blackwell, Tonkawa, Stillwater, Perry, and the surrounding rural counties. Call (580) 747-6206 any hour and a Brower team member — not a call center — answers.",
  },
  {
    question: "Do you install aerobic and conventional septic systems?",
    answer:
      "Yes. We perform a site survey, recommend the right system for your soil and lot, and install both conventional and aerobic septic systems. We have the equipment to excavate safely and install the system correctly the first time, so you avoid the repeat costs that come from a rushed or undersized install.",
  },
  {
    question: "Do you provide residential and commercial septic pumping?",
    answer:
      "Both. Brower Inc. pumps and services residential septic tanks, commercial systems, restaurant grease traps, and aerobic systems throughout our Oklahoma and southern Kansas service area. Property managers and businesses can set up a recurring pumping schedule so a tank is never the reason a property goes offline.",
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
                    A malfunctioning septic system will affect the plumbing throughout your location. When water cannot drain out properly, it will seek the path of least resistance — leading to smelly puddles on your lawn or unsanitary sewage backup in your home. Putting off a septic repair will not make the situation better. You need an expert to assess the problem and fix it.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Septic &amp; Aerobic Installation</h2>
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">
                    Make Brower Inc. your go-to company for septic installation services. We can perform a site survey on a convenient day and install your system correctly the first time. We have the necessary skills and equipment to excavate safely, and no matter which system you choose — including aerobic systems — you can rest assured that we can install it in a timely manner.
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

          {/* Septic Services SEO Section */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Septic Pumping Near Me — Brower&apos;s Oklahoma &amp; Kansas Coverage</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Searching for septic pumping near me? Brower Inc. provides residential and commercial septic services across north-central Oklahoma and southern Kansas — including septic tank pumping, repair, inspection, and aerobic system installation. We serve homeowners and businesses in Ponca City, Enid, Blackwell, Tonkawa, Newkirk, Stillwater, Perry, and rural properties throughout Kay County, Garfield County, Noble County, Logan County, Woods County, and southern Kansas. Most septic tanks need pumping every 3–5 years to prevent backups, drain field damage, and costly emergency repairs.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              Not sure when your tank was last pumped? Signs you need service include slow drains, sewage odor near the tank or drain field, standing water in your yard, and gurgling sounds in your plumbing. Brower Inc. offers same-week scheduling for routine pumping and 24/7 emergency response for septic backups. <Link href="/contact" className="text-primary font-medium hover:underline">Schedule your septic service</Link> or call (580) 747-6206.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Septic services — frequently asked questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          {/* Areas We Serve */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600">
              We provide septic services throughout Oklahoma and southern Kansas.
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
