import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { GuidesForService, ServiceCrossLinks } from "@/components/RelatedContent";
import FAQAccordion from "@/components/FAQAccordion";
import { SERVICES } from "@/lib/constants";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema, jsonLdString } from "@/lib/structured-data";
import { IMAGES } from "@/lib/images";

const service = SERVICES[1];

const VIP_FAQS = [
  {
    question: "How much does a luxury restroom trailer rental cost in Oklahoma?",
    answer:
      "Generally $800 to $2,500 per event, depending on trailer size, event length, and delivery distance. Delivery, setup, post-event cleaning, and pickup are included.",
  },
  {
    question: "How many guests can a VIP restroom trailer handle?",
    answer:
      "One 18-station trailer replaces 4–6 standard portable restrooms. We'll size it to your guest count, event length, and whether alcohol is served.",
  },
  {
    question: "Do your restroom trailers have showers?",
    answer:
      "Yes. Our combo trailer has private shower stalls with running hot water for crews and multi-day events.",
  },
  {
    question: "Do VIP trailers need power and water hookups?",
    answer:
      "They carry onboard fresh-water tanks and run on standard power, with generator options for remote venues. We confirm power, water, and placement when we schedule delivery.",
  },
  {
    question: "Are luxury restroom trailers worth it for a wedding?",
    answer:
      "For most outdoor weddings, yes. Climate control, flushing toilets, and running water make it our most-requested guest-comfort upgrade.",
  },
  {
    question: "How far in advance should I book a VIP restroom trailer?",
    answer:
      "Book 2–3 months ahead for spring and fall event season. For shorter notice, call (580) 747-6206 to check availability.",
  },
];

const NEW_TRAILERS = [
  {
    id: "trailer-8-door-shower",
    title: "New: 8-Door, 8-Station Shower Trailer",
    blurb:
      "Eight private showers, each with its own outside door and temperature control. Built for work crews, long-running jobsites, and multi-day events.",
    image: IMAGES.trailer8DoorShower,
    imageAlt: "Brower Inc. 8-door, 8-station shower trailer with Brower logo",
    imageSize: { width: 2400, height: 982 },
    floorPlan: IMAGES.trailer8DoorShowerFloorPlan,
    floorPlanAlt:
      "Floor plan of the Brower Inc. 8-door shower trailer showing eight private shower rooms with sinks, water heaters, and a 200-gallon fresh water tank",
    floorPlanSize: { width: 2330, height: 1058 },
    specs: [
      ["Stations", "8"],
      ["Doors", "8"],
      ["Length | w/ Tongue", "28′ | 32′"],
      ["Road Width | w/ Steps Down", "8′5″ | 10′5″"],
      ["Ride Height | w/ AC", "10′5″ | 11′6″"],
      ["Fresh Water", "200 gal"],
      ["Wastewater", "1,100 gal"],
      ["Weight", "12,500 lbs"],
      ["Axle", "(2) 7,000 lb Torsion"],
      ["Wheels", "16″ Aluminum"],
    ],
  },
  {
    id: "trailer-4-station",
    title: "New: 4-Door, 4-Station Restroom Trailer",
    blurb:
      "Four private stations, each with its own outside door. A compact trailer for jobsites and events with tight access.",
    image: IMAGES.trailer4Station,
    imageAlt: "Brower Inc. 4-door, 4-station restroom trailer with Brower logo",
    imageSize: { width: 2001, height: 1331 },
    floorPlan: IMAGES.trailer4StationFloorPlan,
    floorPlanAlt:
      "Floor plan of the Brower Inc. 4-door, 4-station restroom trailer showing four private restrooms with sinks and a center fresh water tank",
    floorPlanSize: { width: 1956, height: 1249 },
    specs: [
      ["Stations", "4"],
      ["Doors", "4"],
      ["Approx. Uses", "1,400"],
      ["Length | w/ Tongue", "14′4″ | 19′"],
      ["Width | w/ Steps Down", "6′5″ | 9′2″"],
      ["Height | w/ AC", "10′2″ | 11′3″"],
      ["Fresh Water", "200 gal"],
      ["Wastewater", "400 gal"],
      ["Weight", "5,280 lbs"],
      ["Axle", "7,000 lb Torsion"],
      ["Wheels", "16″ Aluminum"],
    ],
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
        dangerouslySetInnerHTML={{ __html: jsonLdString(getFAQSchema(VIP_FAQS)) }}
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
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Climate-controlled restroom and shower trailers with private flushing stalls and running water. For weddings, corporate events, and jobsites across north-central Oklahoma and southern Kansas.
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

              <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-900">18-Station Trailer Floor Plan</h2>
                <Image
                  src={IMAGES.vipFloorPlan}
                  alt="Floor plan layout of Brower Inc. 18-station VIP restroom and shower trailer showing private stalls, sinks, and showers"
                  width={849}
                  height={584}
                  className="mt-3 w-full rounded-xl border border-gray-200 bg-white p-2"
                />
              </div>

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

          {/* New Trailers */}
          {NEW_TRAILERS.map((trailer) => (
            <div key={trailer.id} id={trailer.id} className="mt-16 scroll-mt-24 border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900">{trailer.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">{trailer.blurb}</p>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <Image
                    src={trailer.image}
                    alt={trailer.imageAlt}
                    width={trailer.imageSize.width}
                    height={trailer.imageSize.height}
                    className="w-full rounded-xl border border-gray-200 bg-white object-contain"
                  />
                  <h3 className="mt-6 text-xl font-bold text-gray-900">Floor Plan</h3>
                  <Image
                    src={trailer.floorPlan}
                    alt={trailer.floorPlanAlt}
                    width={trailer.floorPlanSize.width}
                    height={trailer.floorPlanSize.height}
                    className="mt-3 w-full rounded-xl border border-gray-200 bg-white p-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Specifications</h3>
                  <dl className="mt-3 divide-y divide-gray-200 rounded-xl border border-gray-200">
                    {trailer.specs.map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                        <dt className="text-gray-600">{label}</dt>
                        <dd className="font-semibold text-gray-900 text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                      Get a Free Quote
                    </Link>
                    <a href="tel:+15807476206" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Call (580) 747-6206
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Alternate Trailer Layout */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Shower &amp; Restroom Combo Trailer</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Restrooms plus dedicated shower stalls. Built for oil field crews, disaster relief, and multi-day festivals.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <Image
                  src={IMAGES.vipExteriorWarehouse}
                  alt="Brower Inc. VIP shower and restroom combo trailer in warehouse, Newkirk, Oklahoma"
                  width={1920}
                  height={1080}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Combo Trailer Floor Plan</h3>
                <Image
                  src={IMAGES.vipFloorPlanAlt}
                  alt="Floor plan of Brower Inc. VIP shower and restroom combo trailer showing shower stalls, restroom stalls, and sinks"
                  width={1317}
                  height={658}
                  className="mt-3 w-full rounded-xl border border-gray-200 bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* 3-Station Compact Trailer */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">3-Station Compact Restroom Trailer</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Flushing toilets, running water, and climate control in a smaller footprint. Sized for intimate weddings and tight jobsites.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <Image
                  src={IMAGES.vip3Station}
                  alt="Brower Inc. 3-station compact restroom trailer in Newkirk, Oklahoma"
                  width={4032}
                  height={3024}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Compact Trailer Floor Plan</h3>
                <Image
                  src={IMAGES.vip3StationFloorPlan}
                  alt="Floor plan of Brower Inc. 3-station compact restroom trailer showing three private stalls with flushing toilets and sinks"
                  width={1206}
                  height={644}
                  className="mt-3 w-full rounded-xl border border-gray-200 bg-white p-2"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-gray-600">Stations</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">18&prime;</p>
                    <p className="text-sm text-gray-600">Length</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-gray-600">Doors</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">6&prime;5&Prime;</p>
                    <p className="text-sm text-gray-600">Width</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Gallery */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">See Our VIP Trailers</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              Inside and out.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image src={IMAGES.vipInteriorVanity} alt="VIP restroom trailer interior with vanity and private stalls" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipInteriorShower} alt="VIP shower trailer interior with shower stalls" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipInteriorBathroom} alt="VIP restroom trailer private bathroom interior" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipExteriorAngle} alt="VIP restroom trailer exterior angle view" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.technician} alt="Brower Inc. multi-door restroom trailer set up with a hand washing station and a Brower portable restroom" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
              <Image src={IMAGES.vipTrailersLot} alt="Brower Inc. VIP restroom trailers and portable restrooms staged in the Newkirk, Oklahoma lot" width={400} height={300} className="h-56 w-full rounded-lg object-cover" />
            </div>
          </div>

          {/* VIP Trailer SEO Section */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Luxury Porta Potty Rental Is the Wedding-Day Upgrade</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
              <Image
                src={IMAGES.rodeoEvent}
                alt="Brower Inc. VIP shower and restroom trailer set up beside a rodeo arena at night"
                width={2048}
                height={1536}
                className="h-80 w-full rounded-xl object-cover"
              />
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Climate control, flushing toilets, and private stalls make it the most-requested upgrade for outdoor weddings in Oklahoma. Delivery, setup, cleaning, and pickup are included.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Pair it with our <Link href="/services/hand-washing-stations" className="text-primary font-medium hover:underline">hand washing stations</Link>, or <Link href="/contact" className="text-primary font-medium hover:underline">request a free VIP trailer quote</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* VIP Trailer FAQ — visible Q&A backed by FAQPage structured data */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-8 max-w-4xl">
              <FAQAccordion faqs={VIP_FAQS} />
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
            <ServiceCrossLinks slug="vip-shower-restroom-trailers" />
          </div>
        </div>
      </section>

      {/* Related blog guides */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <GuidesForService slug="vip-shower-restroom-trailers" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
