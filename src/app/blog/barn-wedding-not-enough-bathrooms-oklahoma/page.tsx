import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BlogRelatedContent } from "@/components/RelatedContent";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { IMAGES } from "@/lib/images";
import { PHONE } from "@/lib/constants";
import {
  getArticleSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  jsonLdString,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "Barn Wedding Venue Has Only 2 Bathrooms for 200 Guests? Do This",
  description:
    "Your Oklahoma barn or ranch wedding venue has 2 bathrooms for 200 guests. Here's the real fix — how many restrooms you actually need, luxury porta potty vs. trailer options, what it costs, and how to book before peak season sells out.",
  alternates: {
    canonical: "/blog/barn-wedding-not-enough-bathrooms-oklahoma",
  },
  openGraph: {
    title:
      "My Barn Wedding Venue Only Has 2 Bathrooms for 200 Guests — What Do I Do?",
    description:
      "The honest fix for the barn-wedding bathroom shortage in Oklahoma — how many units you really need, luxury porta potty vs. restroom trailer, real costs, and how early to book.",
    type: "article",
    url: "/blog/barn-wedding-not-enough-bathrooms-oklahoma",
    images: [
      {
        url: "/images/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "White Brower Inc. luxury restroom trailer parked at an elegant outdoor Oklahoma wedding venue at golden hour, with a white reception tent, string lights, and guests in the soft-focus background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Barn Wedding, 2 Bathrooms, 200 Guests — Here's What to Do",
    description:
      "How many restrooms you really need, luxury porta potty vs. trailer, real Oklahoma costs, and how early to book before peak season sells out.",
    images: [
      "/images/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question:
      "My barn wedding venue only has 2 bathrooms for 200 guests. Is that really a problem?",
    answer:
      "Yes. Two fixtures for 200 guests means lines all night — and the women's line will be brutal, since women's restroom trips take roughly twice as long. The rule of thumb is about one restroom per 50 guests for a 4-hour event, and you add capacity when you're serving alcohol or running longer. For 200 guests at a typical wedding with a bar, plan on roughly 4–6 units total (or a multi-stall restroom trailer that does the same job in one elegant footprint). The venue's two bathrooms become a nice backup, not the whole plan.",
  },
  {
    question: "How many porta potties do I need for a 200-person wedding?",
    answer:
      "Start at one unit per 50 guests for 4 hours — so 4 units for 200 people — then adjust up. Serving alcohol (people drink and use the restroom more) adds roughly 15–20%. Events past 4–5 hours add more. A heavily female guest list skews demand to the women's side. For most 200-guest Oklahoma weddings with a bar running 5+ hours, 5–6 units, or a 3-station-plus restroom trailer, keeps lines short. Our event calculator guide walks through the exact math.",
  },
  {
    question: "Will my guests judge me for renting porta potties at my wedding?",
    answer:
      "This is the fear behind almost every wedding-bathroom question, and the honest answer is: not if you rent the right unit. A standard construction-style porta potty at a formal wedding does read as an afterthought. But a deluxe flushable unit — or better, a luxury restroom trailer with running water, real flushing toilets, climate control, vanities, and mirrors — gets the opposite reaction. The most common comment vendors hear is that the trailer was 'nicer than the bathroom at home.' Guests notice an upgrade far more than they notice the absence of porcelain plumbing.",
  },
  {
    question:
      "Should I just let guests use the farmhouse and rely on the septic system?",
    answer:
      "Be very careful here. A typical residential septic tank is sized for a household, not for 200 guests using it in one evening — that volume can overwhelm the system, and the last thing you want is a backup during the reception in front of everyone. On family land you usually also have a private well on the same property, so a septic problem can become a water-safety problem. Renting restrooms protects the home's septic and well. If the house bathrooms will see heavy use anyway, it's worth pumping the septic before the event.",
  },
  {
    question: "Luxury porta potty or a full restroom trailer — which is right?",
    answer:
      "It comes down to guest count, budget, and whether you have power and water on site. Deluxe flushable / luxury porta potty units (with a foot-pump flush and built-in sink) are a big step up from standard, need no hookups, and suit smaller or budget-conscious weddings — figure a few hundred dollars per unit. A luxury restroom trailer (multiple private stalls, AC/heat, running water, LED lighting) is the showpiece for 100+ guests and upscale events, running roughly $1,200–$3,500 for a single day depending on size. For a 200-guest barn wedding, many couples pair one trailer with a couple of standard units for overflow.",
  },
  {
    question: "How far in advance should I book wedding restrooms in Oklahoma?",
    answer:
      "Sooner than you think. Oklahoma's wedding and event season runs May through October, and the same trucks and trailers are in demand for the summer construction and festival season at the same time. Luxury restroom trailers are limited inventory and book out first — aim for 3–6 months ahead for peak Saturdays. That said, if your date is close, still call: we'll tell you honestly what we can do rather than leave you guessing.",
  },
  {
    question: "Can Brower Inc. deliver to a rural barn or ranch venue?",
    answer:
      "Yes — rural delivery is what we do. Brower Inc. is based in Newkirk and serves barn, ranch, and backyard venues across 14 Oklahoma and 6 Kansas counties, including gravel-road and acreage sites that national chains won't drive to. We'll advise on placement (level, firm ground; screened from photos; downwind), confirm any power/water needs for a trailer, and quote flat all-in pricing — delivery, setup, and pickup included. Call (580) 747-6206 with your venue and date.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "the-math", label: "The Math: 2 Bathrooms vs. 200 Guests" },
  { id: "stigma", label: "Will Guests Judge Me?" },
  { id: "septic", label: "Don't Rely on the Farmhouse Septic" },
  { id: "options", label: "Your 3 Restroom Options" },
  { id: "cost", label: "What It Costs in Oklahoma" },
  { id: "placement", label: "Placement at a Barn/Ranch Venue" },
  { id: "booking", label: "When to Book (Don't Wait)" },
  { id: "how-we-help", label: "How Brower Inc. Helps" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Barn Wedding, Not Enough Bathrooms",
    href: "/blog/barn-wedding-not-enough-bathrooms-oklahoma",
  },
];

export default function BarnWeddingNotEnoughBathroomsPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "My Barn Wedding Venue Only Has 2 Bathrooms for 200 Guests — What Do I Do?",
              description:
                "The real fix for the Oklahoma barn-wedding bathroom shortage — how many restrooms you actually need, luxury porta potty vs. restroom trailer, what it costs, protecting the farmhouse septic, and how early to book.",
              slug: "barn-wedding-not-enough-bathrooms-oklahoma",
              datePublished: "2026-06-29",
              image:
                "https://browerinc.net/images/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-cover-newkirk-ok.webp",
            }),
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
          __html: jsonLdString(getBreadcrumbSchema(BREADCRUMBS)),
        }}
      />

      <Breadcrumbs items={BREADCRUMBS} />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Events, Weddings &amp; Gatherings
            </span>
            <time dateTime="2026-06-29">June 29, 2026</time>
            <span>9 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            My Barn Wedding Venue Only Has 2 Bathrooms for 200 Guests — What Do
            I Do?
          </h1>

          <Image
            src={IMAGES.blogCoverBarnWeddingBathrooms}
            alt="White Brower Inc. luxury restroom trailer parked at an elegant outdoor Oklahoma wedding venue at golden hour, with a white reception tent, string lights, and guests in the soft-focus background"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              You found the perfect Oklahoma barn. The light through the loft is
              gorgeous, the pasture is exactly the backdrop you pictured, and
              then somewhere between the deposit and the seating chart it hits
              you: <em>there are two bathrooms. For two hundred people.</em> And
              now you&apos;re lying awake picturing a line of guests in their
              good clothes snaking out the barn door.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Take a breath — this is one of the most common (and most fixable)
              problems at rural Oklahoma weddings. The barn doesn&apos;t need
              more plumbing; you just need the right restrooms brought in for the
              day. Here&apos;s exactly how many you need, how to do it without
              the dreaded &quot;porta potty at a wedding&quot; vibe, what it
              costs, and the mistake that can turn the night into an actual
              disaster.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Two fixtures can&apos;t serve 200 guests. Plan on roughly{" "}
                <strong>one restroom per 50 guests for a 4-hour event</strong> —
                so about <strong>4–6 units for 200 people</strong>, more if
                there&apos;s a bar or the reception runs long. The upgrade that
                erases the &quot;porta potty&quot; stigma is a{" "}
                <Link
                  href="/services/vip-shower-restroom-trailers"
                  className="text-primary hover:underline"
                >
                  luxury restroom trailer
                </Link>{" "}
                (running water, flushing toilets, AC, mirrors) — often paired
                with a couple of standard units for overflow. And{" "}
                <strong>don&apos;t lean on the farmhouse septic</strong>: 200
                guests can overwhelm a residential system. Book 3–6 months out
                for peak May–October dates.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Wedding date set and worried about the bathroom situation?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. delivers luxury restroom trailers and clean units to
                barn, ranch, and backyard venues across Oklahoma and southern
                Kansas — flat all-in pricing, delivery and pickup included.
              </p>
              <Link
                href="/services/vip-shower-restroom-trailers"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See VIP Restroom Trailers →
              </Link>
            </div>

            {/* H2: THE MATH */}
            <h2
              id="the-math"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Math: Why 2 Bathrooms and 200 Guests Don&apos;t Mix
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The standard planning rule is about{" "}
              <strong>one restroom per 50 guests</strong> for a four-hour event.
              That puts a 200-guest wedding at roughly four units as a baseline —
              and weddings almost always push past the baseline:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>There&apos;s a bar.</strong> Alcohol means more trips —
                add roughly 15–20% capacity.
              </li>
              <li>
                <strong>It runs long.</strong> Ceremony, cocktails, dinner,
                dancing — most receptions run 5+ hours, not 4.
              </li>
              <li>
                <strong>The women&apos;s line is the real bottleneck.</strong>{" "}
                Women&apos;s restroom trips take about twice as long, so demand
                isn&apos;t split evenly 50/50.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Add it up and a 200-guest Oklahoma wedding with a bar realistically
              wants <strong>5–6 units</strong> — or a multi-stall restroom
              trailer that delivers that capacity in one tidy footprint. The
              venue&apos;s two bathrooms don&apos;t disappear; they just become a
              convenient backup instead of the entire plan. For the full
              guest-count formula with every adjustment factor, see our{" "}
              <Link
                href="/blog/event-planning-restroom-guide"
                className="text-primary hover:underline"
              >
                event restroom calculator guide
              </Link>
              .
            </p>

            {/* H2: STIGMA */}
            <h2
              id="stigma"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              &quot;Will My Guests Judge Me?&quot; — The Real Worry
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Let&apos;s name the fear underneath the logistics, because it&apos;s
              the one that actually keeps couples up at night: <em>the bathroom
              is going to be the thing people remember, and it&apos;s going to
              make the whole wedding feel cheap.</em> The mental image is the
              gray construction-site box, and nobody wants that next to the
              dance floor.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here&apos;s the reframe: guests don&apos;t judge you for not having
              indoor plumbing in a pasture — they judge the <em>unit you
              choose</em>. Drop a standard porta potty at a black-tie reception
              and yes, it reads as an afterthought. Bring in a{" "}
              <Link
                href="/services/vip-shower-restroom-trailers"
                className="text-primary hover:underline"
              >
                luxury restroom trailer
              </Link>{" "}
              with flushing toilets, running-water vanities, real mirrors, AC,
              and soft lighting, and the reaction flips entirely. The line
              wedding vendors hear over and over is some version of{" "}
              <em>&quot;it was nicer than the bathroom at home.&quot;</em> Guests
              notice an upgrade far more than they notice the absence of a tiled
              restroom. If you want the side-by-side, our{" "}
              <Link
                href="/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma"
                className="text-primary hover:underline"
              >
                porta potty vs. luxury restroom trailer comparison
              </Link>{" "}
              lays out exactly what changes.
            </p>

            <Image
              src={IMAGES.blogHeroBarnWeddingBathrooms}
              alt="Interior of a Brower Inc. VIP restroom trailer showing private vanity stalls with running-water sinks, large framed mirrors, wood-look flooring, and warm LED lighting"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* H2: SEPTIC */}
            <h2
              id="septic"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Mistake That Turns It Into a Real Disaster: the Farmhouse
              Septic
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If the venue is family land — Grandma&apos;s place, the home ranch
              — the tempting shortcut is &quot;guests can just use the house.&quot;
              Resist it. A typical residential{" "}
              <Link
                href="/services/septic-services"
                className="text-primary hover:underline"
              >
                septic system
              </Link>{" "}
              is sized for a household, not for a few hundred people cycling
              through it in one evening. Overload it and you risk a backup{" "}
              <em>during the reception</em> — the single worst-case version of
              the bathroom problem.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              There&apos;s a second reason that matters on rural Oklahoma
              property: where there&apos;s a septic system, there&apos;s usually
              a <strong>private well on the same parcel</strong>. A septic
              problem on event day isn&apos;t just an inconvenience — it can
              become a drinking-water concern. Renting restrooms for the day
              protects both the home&apos;s septic <em>and</em> its well. And if
              you know the house bathrooms will still see heavy use, it&apos;s
              smart to have the{" "}
              <Link
                href="/services/septic-tank-pumping"
                className="text-primary hover:underline"
              >
                septic tank pumped
              </Link>{" "}
              beforehand so it starts the night with maximum capacity.
            </p>

            {/* H2: OPTIONS */}
            <h2
              id="options"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Your 3 Restroom Options (Good / Better / Best)
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Option
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Best for
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      The experience
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Standard units (for overflow)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Backup capacity, budget
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Clean and stocked, but basic — best tucked away as
                      overflow
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/deluxe-flushable-portable-toilets"
                        className="text-primary hover:underline"
                      >
                        Deluxe flushable units
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Smaller / budget-conscious weddings
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Foot-pump flush + built-in sink, roomier — no hookups
                      needed
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/vip-shower-restroom-trailers"
                        className="text-primary hover:underline"
                      >
                        Luxury restroom trailer
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      100+ guests, upscale events
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Private stalls, flushing toilets, AC/heat, running water,
                      mirrors, LED lighting
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For a 200-guest barn wedding, the sweet spot is usually a{" "}
              <strong>luxury restroom trailer as the centerpiece</strong> plus a
              couple of standard units placed out of sight for overflow — elegant
              where it counts, with capacity to spare. Brower Inc.&apos;s VIP
              trailers are 18-station units with heat and air conditioning,
              running water, and soap and paper-towel dispensers throughout.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Want a real number for your guest count and venue?
              </p>
              <p className="mt-2 text-gray-300">
                Tell us your guest count, date, and venue and we&apos;ll size it
                for you — trailer, units, and placement — in one flat all-in
                quote. We deliver to rural barn and ranch venues other companies
                won&apos;t.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: COST */}
            <h2
              id="cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What It Costs in Oklahoma (2026)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Real ranges for a single-day Oklahoma wedding, so you can budget
              before you call:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Standard unit:</strong> a modest per-unit day rate —
                great value as overflow capacity.
              </li>
              <li>
                <strong>Deluxe flushable / luxury porta potty:</strong> a few
                hundred dollars per unit, no hookups required.
              </li>
              <li>
                <strong>Luxury restroom trailer:</strong> roughly{" "}
                <strong>$1,200–$1,800</strong> for a 2-station trailer (100–150
                guests) and <strong>$2,200–$3,500</strong> for a larger 3-to-5
                station trailer (150–250 guests).
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              One thing to confirm up front on a trailer: <strong>power and
              water</strong>. Trailers run best with a standard outlet and a
              water hookup; on a remote pasture with neither, plan for a
              generator and a water tank (we&apos;ll tell you exactly what your
              site needs — no surprises on the invoice). For the full trailer
              pricing breakdown by size and add-ons, see our{" "}
              <Link
                href="/blog/restroom-trailer-rental-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma restroom trailer rental cost guide
              </Link>
              . The thing to avoid is the classic trap — a low quote that
              quietly grows with delivery, fuel, and &quot;service&quot; fees.
              Brower Inc. quotes one flat all-in number.
            </p>

            {/* H2: PLACEMENT */}
            <h2
              id="placement"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Placement at a Barn or Ranch Venue (Oklahoma Realities)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A few site details matter more on Oklahoma acreage than they would
              in a city park:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Firm, level ground.</strong> A restroom trailer needs a
                stable, reasonably level pad. Soft pasture or recently soaked
                ground can let a trailer sink or sit unevenly — we scout the spot
                with you.
              </li>
              <li>
                <strong>Wind.</strong> Oklahoma wind is no joke; units and
                trailers should be placed and anchored with that in mind, not
                left exposed on an open rise.
              </li>
              <li>
                <strong>Out of the photos, easy to find.</strong> Tuck units
                behind a tree line or simple screening — visible enough that
                guests find them, hidden enough that they&apos;re not in the
                first-dance backdrop.
              </li>
              <li>
                <strong>Downwind and lit.</strong> Place restrooms downwind of
                dining, and make sure there&apos;s lighting if the reception runs
                after dark.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For the complete event-day playbook — counts, placement, servicing,
              and weather adjustments — our{" "}
              <Link
                href="/blog/complete-guide-portable-restrooms-oklahoma-outdoor-events"
                className="text-primary hover:underline"
              >
                complete guide to portable restrooms for Oklahoma outdoor events
              </Link>{" "}
              goes deeper.
            </p>

            {/* H2: BOOKING */}
            <h2
              id="booking"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              When to Book (Please Don&apos;t Wait)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Oklahoma&apos;s wedding and event season runs{" "}
              <strong>May through October</strong> — and that&apos;s the same
              window when the summer construction and festival season is pulling
              on the same trailers and trucks. Luxury restroom trailers are{" "}
              <strong>limited inventory</strong> and book out first, so for a
              peak Saturday, reserve <strong>3–6 months ahead</strong>.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If your date is already close, call anyway. The worst outcome is
              the couple who assumes it&apos;s hopeless, never calls, and ends up
              with the two-bathroom line they were dreading. We&apos;ll give you
              a straight answer about what&apos;s available — that&apos;s the
              whole point of working with a real local company instead of a 1-800
              number.
            </p>

            {/* H2: HOW WE HELP */}
            <h2
              id="how-we-help"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Brower Inc. Helps
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;re a family-owned company in Newkirk, and we&apos;ve set up
              restrooms at everything from backyard ceremonies to big ranch
              weddings and upscale events at venues like the historic Marland
              Mansion in Ponca City. When you call us about your wedding:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>We size it for your guest count</strong> — trailer,
                units, and overflow — instead of selling you a number.
              </li>
              <li>
                <strong>We deliver to rural venues</strong> — gravel roads,
                pastures, and acreage that national chains turn down.
              </li>
              <li>
                <strong>Flat all-in pricing</strong> — delivery, setup, and
                pickup included, no fuel or surprise &quot;service&quot;
                surcharges.
              </li>
              <li>
                <strong>A real person answers</strong> — often the owner — before,
                during, and after your event.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We serve weddings across{" "}
              <Link
                href="/service-areas/ponca-city"
                className="text-primary hover:underline"
              >
                Ponca City
              </Link>
              , Kay County, and north-central Oklahoma into southern Kansas — and
              we&apos;re happy to coordinate directly with your venue or planner.
              See more on our{" "}
              <Link
                href="/industries/events-weddings"
                className="text-primary hover:underline"
              >
                events &amp; weddings page
              </Link>
              .
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Turn the bathroom worry into the detail guests rave about."
                description={`Send us your guest count, date, and venue and we'll size the right restroom setup and quote it flat all-in — delivery and pickup included, rural venues welcome. Call ${PHONE} to lock in your date.`}
              />
            </div>

            {/* FAQ */}
            <h2
              id="faq"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQAccordion faqs={FAQS} />
            </div>

            {/* CLOSING */}
            <h2 className="mt-12 text-2xl font-bold text-gray-900">
              The Barn Is Perfect — the Bathrooms Are an Easy Fix
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Two bathrooms for 200 guests isn&apos;t a reason to second-guess
              the venue you fell in love with. It&apos;s a logistics line item
              with a clean solution: the right number of the right units,
              delivered and placed for the day, protecting the farmhouse septic
              and keeping the lines short. Handled well, the restrooms go from
              your biggest worry to a detail guests actually compliment.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk and delivers luxury
              restroom trailers and clean units to barn, ranch, and backyard
              weddings across 14 Oklahoma and 6 Kansas counties — flat pricing, a
              real person on the phone, and rural venues welcome. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a wedding restroom quote
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent
            slug="barn-wedding-not-enough-bathrooms-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
