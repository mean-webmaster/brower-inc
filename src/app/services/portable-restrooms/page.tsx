import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SERVICES } from "@/lib/constants";
import { getServiceSchema } from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Porta Potty Rental & Portable Restrooms | Newkirk OK | Brower Inc.",
  description:
    "Rent clean, reliable porta potties and portable restrooms in Oklahoma. Porta potty rental for events, construction sites, and outdoor activities. Fast delivery from Brower Inc. in Newkirk, OK. Serving Ponca City, Enid, Kay County & more. Call (580) 747-6206.",
  alternates: { canonical: "/services/portable-restrooms" },
};

export default function PortableRestroomsPage() {
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
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Many people know them as porta potties, portable toilets, or port-a-johns — no matter what you call them, Brower Inc. has you covered. Our featured unit is the Maxim 300, available in blue, tan, and pink (pink has been an area favorite!). Our porta potty rental service includes delivery, setup, regular servicing, and pickup so you can focus on your project or event.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">ADA-Compliant Restrooms</h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                To ensure maximum accessibility for your guests, we offer large and spacious restrooms specifically designed to meet and exceed ADA portable restroom guidelines. These larger units are also family friendly — perfect for parents who need to accompany their children to the restroom.
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
                src={IMAGES.portableRestroomHero}
                alt="Brower Inc. portable restrooms lined up and ready for delivery in Newkirk, Oklahoma"
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

          {/* Porta Potty SEO Section */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Porta Potty Rental in Oklahoma</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Searching for a porta potty rental near you? Brower Inc. is a trusted provider of porta potties across north-central Oklahoma. We deliver clean, well-maintained porta potty units to Ponca City, Enid, Blackwell, Tonkawa, Hennessey, Crescent, Guthrie, and communities throughout Kay County, Garfield County, Kingfisher County, Logan County, and Woods County. Whether you need a single porta potty for a weekend project or dozens for a large construction site, we offer flexible rental terms and reliable weekly servicing.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              Our porta potties are ideal for outdoor weddings, festivals, sporting events, farm and ranch work, oil field operations, and any job site that needs dependable sanitation. <Link href="/contact" className="text-primary font-medium hover:underline">Request a free porta potty rental quote</Link> or call us at (580) 747-6206.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
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
