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

const service = SERVICES[1];

const FAQS = [
  {
    question: "How much does a luxury restroom trailer rental cost in Oklahoma?",
    answer:
      "VIP restroom trailer rental in Oklahoma generally ranges from $800 to $2,500 per event, depending on trailer size, event duration, and delivery distance from our Newkirk base. Each rental includes delivery, setup, post-event cleaning, and pickup. For an exact quote tailored to your venue and date, call (580) 747-6206.",
  },
  {
    question: "How many guests can a VIP restroom trailer handle?",
    answer:
      "Our 18-station luxury restroom trailers comfortably serve large events and replace 4–6 standard portable restrooms. As a planning rule, one well-appointed trailer handles a few hundred guests for a typical wedding or corporate event; we'll recommend the right configuration based on your guest count, event length, and whether alcohol is served.",
  },
  {
    question: "Do your restroom trailers have showers?",
    answer:
      "Yes. We offer combined VIP shower and restroom trailers with private shower stalls and running hot water — popular for film and TV productions, disaster-relief staging, multi-day festivals, and ranch events where crews or guests need to clean up on site. Ask about shower-equipped configurations when you book.",
  },
  {
    question: "Do VIP trailers need power and water hookups?",
    answer:
      "Our luxury trailers carry onboard fresh-water tanks and can run on standard power, with generator options available for remote venues that have no electrical hookup. We confirm power and water needs and the best placement when we schedule your delivery, so the trailer is fully functional from the moment guests arrive.",
  },
  {
    question: "Are luxury restroom trailers worth it for a wedding?",
    answer:
      "For most outdoor weddings, yes — a VIP trailer with climate control, flushing toilets, running water, and full-size mirrors is the single most-requested guest-comfort upgrade and protects formalwear and the overall experience. Our porta potty vs. luxury restroom trailer comparison guide breaks down exactly when the upgrade is worth it for your guest count and budget.",
  },
  {
    question: "How far in advance should I book a VIP restroom trailer?",
    answer:
      "Because we run a limited number of luxury trailers, book 2–3 months ahead for peak wedding and event season (spring and fall) to guarantee availability for your date. We can sometimes accommodate shorter notice — call (580) 747-6206 to check availability for your event.",
  },
];

export const metadata: Metadata = {
  title: "Luxury Porta Potty Rental Oklahoma | VIP Trailers | Brower",
  description:
    "Luxury porta potty rental in Oklahoma — 18-station VIP restroom trailers with AC, flushing toilets & private stalls. Ideal for weddings. Call (580) 747-6206.",
  alternates: { canonical: "/services/vip-shower-restroom-trailers" },
};

export default function VIPTrailersPage() {
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
                Luxury Porta Potty Rental in Oklahoma — VIP Restroom Trailers
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>

              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Each trailer includes spacious fully enclosed private stalls with running water, soap and paper towel dispensers, large countertops, full-size mirrors, and superior LED lighting. For safety, the trailers feature stairs with sturdy handrails on both sides and porch lights.
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
                src={IMAGES.vipExteriorSide}
                alt="Brower Inc. VIP shower and restroom trailer exterior with branding in Newkirk, Oklahoma"
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

          {/* VIP Gallery */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">See Our VIP Trailers</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Take a closer look at the premium interiors and exteriors of our 18-station VIP restroom and shower trailers. These units are designed for comfort and style at any event.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image src={IMAGES.vipInteriorVanity} alt="VIP restroom trailer interior with vanity and private stalls" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipInteriorShower} alt="VIP shower trailer interior with shower stalls" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipInteriorBathroom} alt="VIP restroom trailer private bathroom interior" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipExteriorAngle} alt="VIP restroom trailer exterior angle view" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipExteriorCloseup} alt="VIP restroom trailer exterior closeup with branding" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipWithHandwash} alt="VIP restroom trailer paired with hand washing station" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
            </div>
          </div>

          {/* VIP Trailer SEO Section */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Luxury Porta Potty Rental Is the Wedding-Day Upgrade</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Looking for a luxury porta potty rental for your Oklahoma wedding, corporate event, or film production? Brower Inc.&apos;s VIP shower and restroom trailers deliver a premium guest experience with climate control, flushing toilets, running water, LED lighting, and private stalls. We serve events across north-central Oklahoma — including Ponca City, Enid, Stillwater, Guthrie, and communities throughout Kay County, Garfield County, Logan County, and southern Kansas. Our 18-station luxury restroom trailers replace 4–6 standard portable restrooms and are the most-requested upgrade for outdoor weddings in Oklahoma.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
              VIP trailer rental pricing ranges from $800–$2,500 per event depending on trailer size, event duration, and delivery distance. Each rental includes delivery, setup, post-event cleaning, and pickup. Pair with our <Link href="/services/hand-washing-stations" className="text-primary font-medium hover:underline">hand washing stations</Link> for complete guest comfort. <Link href="/contact" className="text-primary font-medium hover:underline">Request a free VIP trailer quote</Link> or call (580) 747-6206.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Luxury restroom trailer FAQs</h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>
          </div>

          {/* Areas We Serve */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Areas We Serve</h2>
            <p className="mt-2 text-center text-gray-600">
              We provide VIP shower and restroom trailer service throughout Oklahoma and southern Kansas.
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
