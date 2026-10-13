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

const service = SERVICES.find((s) => s.slug === "emergency-porta-potty-rental")!;

export const metadata: Metadata = {
  title: "Emergency Porta Potty Rental Oklahoma — Same-Day Delivery",
  description:
    "Emergency porta potty rental across Oklahoma & southern Kansas — 24/7 dispatch, same-day delivery for storms, plumbing failures, last-minute events. Call (580) 747-6206.",
  alternates: { canonical: "/services/emergency-porta-potty-rental" },
};

const FAQS = [
  {
    question: "How fast can Brower Inc. deliver an emergency porta potty?",
    answer:
      "For most emergencies we move toward your site within the hour and deliver the same day. Remote oil-field, ranch, or rural Kansas addresses can take 1–3 hours from the call.",
  },
  {
    question: "Do you really answer the phone 24/7?",
    answer:
      "Yes. Call (580) 747-6206 any hour, including weekends and holidays, and a Brower Inc. team member answers.",
  },
  {
    question: "What counts as an emergency porta potty rental?",
    answer:
      "Anything that can't wait: plumbing or septic failures, storm cleanup, event overflow, rushed jobsite starts, utility crews, and first responders.",
  },
  {
    question: "Are emergency units more expensive?",
    answer:
      "There's a modest after-hours and same-day surcharge, and you'll know the price before we dispatch. Ongoing storm or disaster contracts get volume rates.",
  },
  {
    question: "Can you scale up for major emergencies?",
    answer:
      "Yes. With a 1,375+ unit fleet we can deploy multiple units within hours, so call early in any developing situation.",
  },
];

const PHOTOS = [
  {
    image: IMAGES.vipWithHandwash,
    alt: "Brower Inc. pickup and trailer hauling portable restrooms through a parking lot at night",
    caption: "Rolling out after dark.",
  },
  {
    image: IMAGES.deliveryDaytime,
    alt: "Brower Inc. service truck carrying two portable restrooms across a grass field",
    caption: "Our own trucks and inventory.",
  },
];

export default function EmergencyPage() {
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

      {/* Urgent CTA banner at the top — emergency intent */}
      <div className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-medium">
            Need a porta potty today? We dispatch 24/7 across Oklahoma & southern Kansas.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-bold text-primary hover:bg-gray-100 transition-colors"
          >
            Call {PHONE} now →
          </a>
        </div>
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Emergency &amp; Same-Day Porta Potty Rental in Oklahoma
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Quick Answer
                </p>
                <p className="mt-2 text-base text-gray-800 leading-relaxed">
                  24/7 emergency and same-day porta potty rental across north-central Oklahoma and
                  southern Kansas. For most addresses, we dispatch within the hour and deliver the same day.
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">What You Get on Arrival</h2>
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
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Call {PHONE} — 24/7 Dispatch
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div>
              <Image
                src={IMAGES.deliveryLot}
                alt="Brower Inc. service truck with lights on after placing a portable restroom at night"
                width={600}
                height={400}
                className="h-80 w-full rounded-xl object-cover"
              />

              <h2 className="mt-10 text-2xl font-bold text-gray-900">When People Call Us</h2>
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
            <h2 className="text-3xl font-bold text-gray-900">Local Dispatch From Newkirk</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Our own trucks, dispatcher, and inventory, based in Newkirk. Want storm-season
              readiness?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Get us on retainer
              </Link>
              .
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

          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          <AreasWeServe heading="Emergency Coverage Area" />

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
            <ServiceCrossLinks slug="emergency-porta-potty-rental" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="emergency-porta-potty-rental" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
