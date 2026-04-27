import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { IMAGES } from "@/lib/images";
import { PHONE } from "@/lib/constants";
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, jsonLdString } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "The Complete Guide to Renting Portable Restrooms in Oklahoma (2025)",
  description:
    "Everything Oklahoma event planners and contractors need to know about renting portable restrooms — types of units, the rental process, what's included, delivery logistics, and how to choose a provider.",
  alternates: { canonical: "/blog/portable-restroom-rental-guide" },
};

const FAQS = [
  {
    question: "What is included in a portable restroom rental?",
    answer:
      "A standard rental from Brower Inc. includes delivery, placement, pickup, and servicing. For long-term construction rentals, weekly servicing (pumping, cleaning, restocking toilet paper and hand sanitizer, deodorizing) is included in the monthly rate. For event rentals, one pre-event cleaning and post-event pickup are included. There are no hidden fuel surcharges, environmental fees, or weekend delivery upcharges.",
  },
  {
    question: "How far in advance should I book portable restrooms?",
    answer:
      "For standard construction rentals, 1–2 weeks is usually sufficient. For events, book 2–4 weeks ahead for standard units and 4–8 weeks ahead for VIP restroom trailers during peak season (May–September). Last-minute requests can often be accommodated from our 640+ unit fleet, but availability during rodeo season and holiday weekends is never guaranteed.",
  },
  {
    question: "How does delivery and pickup work?",
    answer:
      "We deliver units on a flatbed truck. You tell us where to place them (or we recommend placement based on your site layout). Our driver positions each unit on level ground at your specified location. For events, we typically deliver the day before and pick up the day after. For construction sites, units stay as long as your rental term runs. You don't need to be on-site for delivery if placement instructions are clear.",
  },
  {
    question: "Can I rent just one portable restroom?",
    answer:
      "Absolutely. Single-unit rentals are common for small construction projects, backyard parties, and residential septic emergencies. There is no minimum order. Whether you need 1 unit or 100, the process is the same — call, tell us what you need, and we deliver.",
  },
  {
    question:
      "What is the difference between a standard porta potty and a VIP restroom trailer?",
    answer:
      "Standard portable restrooms are self-contained single-occupancy units with a toilet, hand sanitizer, and ventilation. VIP restroom trailers are multi-station trailers with flushing toilets, running water, climate control (A/C and heat), vanity mirrors, LED lighting, and private stalls. VIP trailers require a flat surface and typically need access to a power source. One VIP trailer replaces 4–6 standard units.",
  },
  {
    question: "Do portable restrooms smell bad?",
    answer:
      "Clean, well-maintained units do not smell bad. The odor complaints people associate with porta potties come from units that are under-serviced or overcrowded. Brower Inc. uses commercial-grade deodorizers and maintains all units on a regular servicing schedule. If you have ever had a bad experience with a competitor's unit, the problem was the provider — not the product.",
  },
  {
    question: "What happens if a unit gets damaged or tipped over during my event?",
    answer:
      "Call us immediately at (580) 747-6206. We offer 24/7 emergency support and can dispatch a replacement unit or right a tipped unit. Normal wear and tear is covered in your rental rate. Intentional damage or vandalism may incur a repair fee, which we'll discuss with you before charging. For high-wind events, we can stake units to prevent tipping.",
  },
  {
    question: "Do you serve areas outside of Oklahoma?",
    answer:
      "Yes. In addition to our 14-county Oklahoma service area, we serve 6 counties in southern Kansas including Sedgwick County (Wichita), Sumner County, Cowley County, Butler County, Harper County, and Barber County. Our two depots in Newkirk and Ponca City position us to serve north-central Oklahoma and south-central Kansas efficiently.",
  },
];

const TOC_ITEMS = [
  { id: "types-of-units", label: "Types of Portable Restrooms" },
  { id: "rental-process", label: "How the Rental Process Works" },
  { id: "whats-included", label: "What's Included in Your Rental" },
  { id: "choosing-a-provider", label: "How to Choose a Provider" },
  { id: "prepare-your-site", label: "Preparing Your Site" },
  { id: "during-your-rental", label: "During Your Rental" },
  { id: "red-flags", label: "Red Flags to Watch For" },
  { id: "faq", label: "FAQ" },
];

export default function PortableRestroomRentalGuidePage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "The Complete Guide to Renting Portable Restrooms for Your Event",
              description:
                "Everything Oklahoma event planners and contractors need to know about renting portable restrooms — types of units, the rental process, what's included, delivery logistics, and how to choose a provider.",
              slug: "portable-restroom-rental-guide",
              datePublished: "2025-03-15",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(getFAQSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getBreadcrumbSchema([
              { name: "Blog", href: "/blog" },
              {
                name: "Portable Restroom Rental Guide",
                href: "/blog/portable-restroom-rental-guide",
              },
            ]),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          {
            name: "Portable Restroom Rental Guide",
            href: "/blog/portable-restroom-rental-guide",
          },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Rental Guide
            </span>
            <time dateTime="2025-03-15">March 15, 2025</time>
            <span>12 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            The Complete Guide to Renting Portable Restrooms in Oklahoma
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Renting a portable restroom should be simple — call, schedule, done.
            But if you have never rented one before, you probably have questions
            about types, pricing, what is included, and how to avoid getting
            burned by a bad provider. This guide covers every step of the
            process so you know exactly what to expect.
          </p>

          <Image
            src={IMAGES.portableRestroomEvent}
            alt="Brower Inc. portable restrooms delivered and set up at an outdoor event venue in Oklahoma"
            width={800}
            height={400}
            className="mt-6 h-64 w-full rounded-xl object-cover sm:h-80"
            priority
          />

          {/* ─── Types of Units ────────────────────────────────────────────── */}
          <h2
            id="types-of-units"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Types of Portable Restrooms Available
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Not all portable restrooms are the same. The right choice depends on
            your use case — a construction site has very different needs than a
            wedding reception. Here are the main types:
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900">
                Standard Portable Restrooms
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                The workhorse of the industry. Single-occupancy units with a
                toilet, hand sanitizer dispenser, ventilation, and a locking
                door. Brower Inc.&apos;s featured unit is the Maxim 300 —
                available in blue, tan, and pink (an area favorite). These are
                the right choice for{" "}
                <Link
                  href="/services/portable-restrooms"
                  className="text-primary hover:underline"
                >
                  construction sites
                </Link>
                , casual outdoor events, and any situation where function matters
                more than aesthetics.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900">
                ADA-Compliant Units
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Larger units with wheelchair ramp access, grab bars, and a wider
                interior (typically 60&quot; x 60&quot; or more). Required on
                construction sites with workers who have mobility impairments,
                and strongly recommended at public events to ensure
                accessibility for all guests.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900">
                VIP Shower &amp; Restroom Trailers
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Multi-station trailers with flushing toilets, running water,
                climate control, LED lighting, vanity mirrors, and private
                stalls. Brower Inc.&apos;s{" "}
                <Link
                  href="/services/vip-shower-restroom-trailers"
                  className="text-primary hover:underline"
                >
                  VIP trailers
                </Link>{" "}
                feature up to 18 stations and are the top choice for Oklahoma
                weddings, corporate events, and film/TV productions. One trailer
                replaces 4–6 standard units.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900">
                Hand Washing Stations
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Standalone{" "}
                <Link
                  href="/services/hand-washing-stations"
                  className="text-primary hover:underline"
                >
                  portable hand washing stations
                </Link>{" "}
                with running water, soap, and paper towels. Required by OSHA on
                construction sites and by most county health departments at
                events with food vendors. Should be paired with every restroom
                cluster.
              </p>
            </div>
          </div>

          {/* ─── Rental Process ────────────────────────────────────────────── */}
          <h2
            id="rental-process"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            How the Portable Restroom Rental Process Works
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Here is the step-by-step process when you rent from Brower Inc.:
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                step: "1",
                title: "Contact us",
                detail:
                  "Call (580) 747-6206 or submit a quote request through our website. Tell us what you need — number of units, type (standard, ADA, VIP), dates, and delivery location.",
              },
              {
                step: "2",
                title: "Get your quote",
                detail:
                  "We provide an all-in price — no surprise fees. The quote includes delivery, placement, servicing, and pickup. If you need help deciding how many units, we'll recommend based on your worker count or guest count.",
              },
              {
                step: "3",
                title: "Schedule delivery",
                detail:
                  "We confirm your delivery date and time. For events, we typically deliver the day before. For construction, we deliver on your project start date. Tell us where to place units or we'll recommend based on your site layout.",
              },
              {
                step: "4",
                title: "We deliver and place",
                detail:
                  "Our driver brings units on a flatbed truck and positions each one on level ground at your specified location. You don't need to be on-site if placement instructions are clear.",
              },
              {
                step: "5",
                title: "Ongoing servicing (long-term rentals)",
                detail:
                  "For construction and long-term rentals, we service units weekly — pumping, cleaning, restocking, and deodorizing. This is included in your monthly rate.",
              },
              {
                step: "6",
                title: "Pickup",
                detail:
                  "When your rental period ends or your event is over, we pick up all units. For events, pickup is typically the morning after. For construction, call us when you're done and we'll schedule removal.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── What's Included ───────────────────────────────────────────── */}
          <h2
            id="whats-included"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            What Is Included in Your Rental Price
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Pricing transparency matters. Here is exactly what Brower Inc.
            includes in every rental — and what some competitors charge extra
            for:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-900">
                Always included with Brower Inc.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  Delivery and placement
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  Pickup and removal
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  Weekly servicing (long-term)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  Toilet paper and hand sanitizer
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  Tank pumping and deodorizing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  Normal wear and tear coverage
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-red-900">
                Common competitor hidden fees
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">&#10007;</span>
                  Fuel surcharges
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">&#10007;</span>
                  Environmental/disposal fees
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">&#10007;</span>
                  Weekend delivery upcharges
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">&#10007;</span>
                  Restocking charges
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">&#10007;</span>
                  Damage waiver fees
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">&#10007;</span>
                  Late pickup penalties
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            For full pricing details, read our{" "}
            <Link
              href="/blog/porta-potty-rental-cost-oklahoma"
              className="text-primary hover:underline"
            >
              Oklahoma porta potty rental cost guide
            </Link>
            .
          </p>

          {/* ─── Choosing a Provider ───────────────────────────────────────── */}
          <h2
            id="choosing-a-provider"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            How to Choose a Portable Restroom Provider
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Not all rental companies are equal. Here are the five things to ask
            before signing a rental agreement:
          </p>
          <ol className="mt-4 space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-primary">1.</span>
              <span>
                <strong>&ldquo;Is this an all-in price?&rdquo;</strong> — Get
                the total cost in writing, including delivery, servicing, and
                pickup. If the quote says &ldquo;starting at&rdquo; or
                &ldquo;base rate,&rdquo; ask what is not included.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-primary">2.</span>
              <span>
                <strong>&ldquo;How often do you service?&rdquo;</strong> — Weekly
                is standard for construction. If a provider services every two
                weeks, units will be noticeably worse — especially in Oklahoma
                summer heat.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-primary">3.</span>
              <span>
                <strong>&ldquo;Are you local?&rdquo;</strong> — Local providers
                can respond to emergencies faster, charge less for delivery, and
                know the terrain.{" "}
                <Link
                  href="/about"
                  className="text-primary hover:underline"
                >
                  Brower Inc. is based in Newkirk, Oklahoma
                </Link>{" "}
                — not a national chain dispatching from out of state.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-primary">4.</span>
              <span>
                <strong>&ldquo;What if I need more units mid-project?&rdquo;</strong>{" "}
                — Workforce size changes on construction sites. Good providers
                let you scale up or down without penalties.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-primary">5.</span>
              <span>
                <strong>&ldquo;Do you offer 24/7 emergency support?&rdquo;</strong>{" "}
                — Tipped units, overflow emergencies, and last-minute event
                changes happen. You need a provider who answers the phone at
                10 PM on a Saturday.
              </span>
            </li>
          </ol>

          {/* ─── Prepare Your Site ─────────────────────────────────────────── */}
          <h2
            id="prepare-your-site"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Preparing Your Site for Delivery
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A little preparation before delivery day saves time and prevents
            placement problems:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Clear a level area</strong> — each standard unit needs
              roughly a 4&apos; x 4&apos; footprint. VIP trailers need
              approximately 8&apos; x 30&apos; of flat surface.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Ensure truck access</strong> — our delivery truck needs a
              clear path at least 10 feet wide to the placement area.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Mark the placement location</strong> — a cone, flag, or
              spray-painted X tells our driver exactly where you want each unit.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Check for overhead obstructions</strong> — our truck uses
              a hydraulic lift. Low-hanging branches, power lines, or
              structures overhead may need to be cleared.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <strong>Consider wind direction</strong> — in Oklahoma, prevailing
              winds come from the south. Place units so odors blow away from
              gathering or work areas.
            </li>
          </ul>

          {/* ─── During Your Rental ────────────────────────────────────────── */}
          <h2
            id="during-your-rental"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            During Your Rental: Keeping Units in Good Shape
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Between service visits, a few simple practices keep units clean and
            functional:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Keep doors closed when not in use — keeps out rain, wind, and
              debris
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Do not place trash or construction debris in the tank — it causes
              pump failures
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Report issues immediately — a tipped unit or broken latch should
              be fixed the same day, not next service visit
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              For events over 8 hours with 200+ guests, request mid-event
              servicing when you book
            </li>
          </ul>

          {/* ─── Red Flags ─────────────────────────────────────────────────── */}
          <h2
            id="red-flags"
            className="mt-12 text-2xl font-bold text-gray-900"
          >
            Red Flags When Choosing a Portable Restroom Provider
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Watch for these warning signs that a rental company may not deliver
            the service you are paying for:
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Quote says \"starting at\" without listing what is and isn't included",
              "No local address or phone number — just a national 1-800 line",
              "Service frequency is every two weeks instead of weekly",
              "Requires long-term contracts with cancellation penalties",
              "Cannot provide ADA-compliant units on request",
              "No weekend or after-hours support",
              "Units are visibly worn, stained, or damaged in photos or on delivery",
            ].map((flag) => (
              <div
                key={flag}
                className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3"
              >
                <span className="mt-0.5 shrink-0 text-red-500">&#9888;</span>
                <p className="text-sm text-gray-700">{flag}</p>
              </div>
            ))}
          </div>

          {/* ─── E-E-A-T Author Block ──────────────────────────────────────── */}
          <div className="mt-12 flex items-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <Image
              src={IMAGES.troyBrower}
              alt="Troy Brower, owner of Brower Inc., portable restroom rental expert in Newkirk, Oklahoma"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">
                Written by Troy Brower
              </p>
              <p className="text-sm text-gray-600">
                Founder &amp; Owner, Brower Inc.
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Troy operates a 640+ unit fleet serving{" "}
                <Link
                  href="/service-areas"
                  className="text-primary hover:underline"
                >
                  14 counties across Oklahoma and southern Kansas
                </Link>
                . He personally handles quotes, coordinates deliveries, and
                ensures every rental — whether it is one unit for a backyard
                party or 50 units for a commercial build — gets the same level
                of service.
              </p>
            </div>
          </div>

          {/* ─── Mid-article CTA ───────────────────────────────────────────── */}
          <div className="mt-10 rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
            <p className="text-lg font-bold text-gray-900">
              Ready to rent portable restrooms in Oklahoma?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Tell us what you need — unit count, type, dates, and location. We
              will have an all-in quote to you within 24 hours.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+15807476206"
                className="inline-block rounded-lg border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* ─── FAQ Section ───────────────────────────────────────────────── */}
          <h2 id="faq" className="mt-12 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* ─── Related Reading ───────────────────────────────────────────── */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">Related reading</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-sm text-primary hover:underline"
                >
                  How Much Does It Cost to Rent a Porta Potty in Oklahoma?
                  (2026 Pricing Guide)
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/event-planning-restroom-guide"
                  className="text-sm text-primary hover:underline"
                >
                  How Many Portable Restrooms Do You Need for an Outdoor Event?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/construction-site-sanitation-tips"
                  className="text-sm text-primary hover:underline"
                >
                  OSHA Portable Restroom Requirements for Construction Sites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
