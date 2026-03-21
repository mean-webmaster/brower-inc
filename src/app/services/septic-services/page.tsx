import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICES } from "@/lib/constants";
import { getServiceSchema } from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[3];

export const metadata: Metadata = {
  title: "Septic Services | Septic Tank Pumping Oklahoma | Brower Inc.",
  description:
    "Professional septic tank pumping, maintenance, and inspection services in Oklahoma. Residential and commercial. Call Brower Inc. at (580) 747-6206 for reliable septic service.",
  alternates: { canonical: "/services/septic-services" },
};

export default function SepticServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(service)) }}
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
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{service.title}</h1>
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
