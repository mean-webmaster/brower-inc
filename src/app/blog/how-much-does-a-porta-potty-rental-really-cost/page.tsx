import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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
  title: "How Much Does a Porta Potty Rental Really Cost?",
  description:
    "Quoted $150 for a porta potty rental but charged $287? Here's the exact line-by-line breakdown of what porta potty rental really costs in Oklahoma — and the hidden fees to kill before you book.",
  alternates: {
    canonical: "/blog/how-much-does-a-porta-potty-rental-really-cost",
  },
  openGraph: {
    title:
      "I Was Quoted $150 for a Porta Potty Rental But Charged $287 — Here's What Happened",
    description:
      "The exact fees that turn a $150 porta potty quote into a $287 invoice — and how to get an all-in flat price that matches your bill.",
    type: "article",
    url: "/blog/how-much-does-a-porta-potty-rental-really-cost",
    images: [
      {
        url: "/images/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "A single clean blue Brower Inc. porta potty on a residential gravel driveway in front of an Oklahoma home in bright morning light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Quoted $150 for a Porta Potty, Charged $287 — Here's What Happened",
    description:
      "The exact fees that turn a $150 porta potty quote into a $287 invoice — and how to avoid them.",
    images: [
      "/images/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question: "How much does a porta potty rental cost in Oklahoma?",
    answer:
      "A standard porta potty rental in Oklahoma typically runs $100–$200 for a single-day event and $125–$250 per month for a long-term construction or jobsite rental, with weekly servicing included. ADA-accessible units and hand washing stations add roughly $75–$150 each. Luxury restroom trailers for weddings and upscale events range from $800–$2,500 depending on duration. The honest answer depends on unit type, rental length, servicing frequency, and delivery distance — which is why you should always get an all-in flat quote in writing.",
  },
  {
    question: "Why was my porta potty rental invoice higher than the quote?",
    answer:
      "Almost always because the quote was a base rate only. Many providers advertise a low monthly or per-event number, then add delivery, pickup, fuel surcharges, environmental or disposal fees, and weekend charges on the invoice. A $150 quote can become $287 once those line items stack up. The fix is to ask for an all-in flat price that explicitly includes delivery, pickup, and the full servicing schedule before you book.",
  },
  {
    question: "What hidden fees are added to porta potty rentals?",
    answer:
      "The six most common are: a separate delivery fee, a separate pickup fee, a fuel or mileage surcharge, an environmental or 'disposal' fee, weekend or after-hours surcharges, and minimum rental-period charges. Damage and relocation fees can also appear. None of these are illegal, but a provider who folds them into one flat rate is far easier to budget for than one who reveals them on the final bill.",
  },
  {
    question: "Is a cheap porta potty rental quote a bad sign?",
    answer:
      "Not always — but a quote that's dramatically lower than everyone else's usually means fees are coming. The lowest base rate frequently ends up being the highest final invoice once surcharges are added. Compare final, all-in invoices between providers, not advertised base rates. The cheapest sticker price and the cheapest total are often two different companies.",
  },
  {
    question: "Does a porta potty rental price include cleaning and servicing?",
    answer:
      "It should, for any long-term rental. Weekly servicing — pumping the tank, restocking paper and sanitizer, scrubbing and deodorizing, and inspecting the unit — belongs in the flat monthly rate. If a provider bills servicing per visit, the true monthly cost is higher than the quote suggests. Brower Inc. includes weekly servicing on every long-term rental.",
  },
  {
    question: "How do I get an accurate porta potty rental quote?",
    answer:
      "Give the provider four details: unit type (standard, ADA, hand wash, or VIP trailer), how long you need it, your delivery address, and your event date or project length. Then ask one question: 'Is that the all-in price, delivery and pickup and servicing included, with nothing else on the invoice?' Get the answer in writing. A real local operator will give you a flat number on the spot.",
  },
];

const TOC_ITEMS = [
  { id: "the-breakdown", label: "The $150 Quote vs. the $287 Bill" },
  { id: "six-fees", label: "The 6 Fees That Inflated It" },
  { id: "real-cost", label: "What a Rental Really Costs in Oklahoma" },
  { id: "how-to-avoid", label: "How to Get a Quote That Matches Your Bill" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "How Much Does a Porta Potty Rental Really Cost?",
    href: "/blog/how-much-does-a-porta-potty-rental-really-cost",
  },
];

export default function HowMuchPortaPottyRentalReallyCostPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "I Was Quoted $150 for a Porta Potty Rental But Got Charged $287 — Here's Exactly What Happened",
              description:
                "The exact line-by-line breakdown of what a porta potty rental really costs in Oklahoma, and the six hidden fees that turn a low quote into a high invoice.",
              slug: "how-much-does-a-porta-potty-rental-really-cost",
              datePublished: "2026-05-26",
              image:
                "https://browerinc.net/images/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp",
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
              Pricing &amp; Buyer Guides
            </span>
            <time dateTime="2026-05-26">May 26, 2026</time>
            <span>8 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            I Was Quoted $150 for a Porta Potty Rental But Got Charged $287 —
            Here&apos;s Exactly What Happened
          </h1>

          <Image
            src={IMAGES.blogCoverHowMuchPortaPottyRentalCost}
            alt="A single clean blue Brower Inc. porta potty on a residential gravel driveway in front of an Oklahoma home in bright morning light"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          <div className="prose mt-8 max-w-none">
            {/* HOOK */}
            <p className="text-lg text-gray-700 leading-relaxed">
              The quote said <strong>$150</strong>. The invoice said{" "}
              <strong>$287</strong>. That&apos;s a 91% jump on a single porta
              potty rental for a one-weekend backyard graduation party — and the
              homeowner who called us about it wasn&apos;t angry about the money so
              much as the feeling of being tricked. She did everything right. She
              got a quote. She still got surprised.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you&apos;ve ever wondered{" "}
              <strong>how much a porta potty rental really costs</strong>, this
              is the answer nobody puts on their pricing page: the base rate is
              only the beginning. Here&apos;s the exact line-by-line breakdown of
              how $150 became $287, the six fees that did it, and how to get a
              quote that actually matches your bill.
            </p>

            {/* QUICK ANSWER */}
            <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                A standard porta potty rental in Oklahoma costs about{" "}
                <strong>$100–$200 per event</strong> or{" "}
                <strong>$125–$250 per month</strong> with weekly servicing
                included. Quotes balloon on the invoice when providers add
                delivery, pickup, fuel surcharges, and environmental fees
                separately — turning a $150 quote into a $287 bill. The fix:
                always ask for an <strong>all-in flat price in writing</strong>{" "}
                that includes delivery, pickup, and servicing, with nothing else
                on the invoice.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Want a porta potty price that won&apos;t change on the invoice?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Tell us your unit, dates, and address. We quote one all-in flat
                number — delivery, pickup, and servicing included — usually within
                the hour.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get a Flat, All-In Quote →
              </Link>
            </div>

            {/* H2: THE BREAKDOWN */}
            <h2
              id="the-breakdown"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The $150 Quote vs. the $287 Bill, Line by Line
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here is the actual structure of what happened — a composite built
              from the kind of invoice we see customers bring us every month. The
              quote wasn&apos;t a lie. It was just <em>only the base rate</em>.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Line Item
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      On the Quote
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      On the Invoice
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Base rental rate
                    </td>
                    <td className="border border-gray-200 px-4 py-3">$150</td>
                    <td className="border border-gray-200 px-4 py-3">$150</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Delivery fee
                    </td>
                    <td className="border border-gray-200 px-4 py-3">—</td>
                    <td className="border border-gray-200 px-4 py-3">$45</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Pickup fee
                    </td>
                    <td className="border border-gray-200 px-4 py-3">—</td>
                    <td className="border border-gray-200 px-4 py-3">$45</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Fuel surcharge
                    </td>
                    <td className="border border-gray-200 px-4 py-3">—</td>
                    <td className="border border-gray-200 px-4 py-3">$18</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Environmental / disposal fee
                    </td>
                    <td className="border border-gray-200 px-4 py-3">—</td>
                    <td className="border border-gray-200 px-4 py-3">$29</td>
                  </tr>
                  <tr className="bg-gray-100 font-semibold text-gray-900">
                    <td className="border border-gray-200 px-4 py-3">Total</td>
                    <td className="border border-gray-200 px-4 py-3">$150</td>
                    <td className="border border-gray-200 px-4 py-3">$287</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every one of those add-ons is legal. The problem is that none of
              them appeared on the quote, so the customer had no way to compare
              the <em>real</em> price against another provider. The{" "}
              <a
                href="https://consumer.ftc.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Federal Trade Commission
              </a>{" "}
              has a name for this pattern across industries — drip pricing — where
              the headline number is low and the mandatory fees show up later.
            </p>

            {/* H2: SIX FEES */}
            <h2
              id="six-fees"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The 6 Fees That Inflate a Porta Potty Quote
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              These are the surcharges that quietly turn a low quote into a high
              invoice. Ask about each one by name before you book:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Delivery fee.</strong> Charged to drop the unit. Often
                $35–$75 depending on distance.
              </li>
              <li>
                <strong>Pickup fee.</strong> Charged again to remove it —
                frequently the same amount as delivery, so it&apos;s easy to
                miss that you&apos;re paying twice.
              </li>
              <li>
                <strong>Fuel or mileage surcharge.</strong> A percentage or
                flat add-on that&apos;s especially common for rural and
                out-of-metro addresses.
              </li>
              <li>
                <strong>Environmental / disposal fee.</strong> Billed for waste
                disposal. Legitimate disposal follows{" "}
                <a
                  href="https://www.deq.ok.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Oklahoma DEQ
                </a>{" "}
                rules — but a good provider folds the cost into the flat rate
                instead of itemizing it as a surprise.
              </li>
              <li>
                <strong>Weekend / after-hours surcharge.</strong> Added when
                delivery or pickup falls on a Saturday, Sunday, or holiday —
                exactly when most events happen.
              </li>
              <li>
                <strong>Minimum rental period.</strong> You needed it for one
                Saturday, but you&apos;re billed for a full week or month
                minimum.
              </li>
            </ol>

            {/* H2: REAL COST */}
            <h2
              id="real-cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What a Porta Potty Rental Really Costs in Oklahoma
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Strip away the games and here are honest, all-in ranges for the
              Oklahoma and southern Kansas market. These already assume delivery,
              pickup, and standard servicing are included — the way a quote
              should be written.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Unit Type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical All-In Range
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Standard unit (event)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $100–$200 / event
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Parties, weddings, single-day
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Standard unit (long-term)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $125–$250 / month
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Construction, jobsites
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/services/hand-washing-stations"
                        className="text-primary hover:underline"
                      >
                        Hand washing station
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $75–$150 / month
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      OSHA add-on, food events
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      ADA-accessible unit
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Standard + modest premium
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Accessibility, public sites
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      <Link
                        href="/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma"
                        className="text-primary hover:underline"
                      >
                        VIP restroom trailer
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $800–$2,500 / event
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Weddings, upscale events
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              For the full factor-by-factor breakdown — duration, distance, unit
              type, and servicing frequency — see our complete{" "}
              <Link
                href="/blog/porta-potty-rental-cost-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma porta potty rental cost guide
              </Link>
              .
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                One number. Everything included. No surprises.
              </p>
              <p className="mt-2 text-gray-300">
                We quote porta potty rentals all-in and flat — delivery, pickup,
                and servicing in the price. The quote is the bill. Call Troy
                directly.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: HOW TO AVOID */}
            <h2
              id="how-to-avoid"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How to Get a Quote That Matches Your Bill
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              You don&apos;t need to become an expert in porta potty pricing. You
              need to ask the right questions and get the answers in writing:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>&quot;Is this the all-in price?&quot;</strong> Delivery,
                pickup, and servicing included, nothing else on the invoice.
              </li>
              <li>
                <strong>&quot;Are there any delivery, fuel, or environmental
                fees?&quot;</strong> Make them say the word &quot;no&quot; — or
                tell you the exact amounts.
              </li>
              <li>
                <strong>&quot;What&apos;s the minimum rental period?&quot;</strong>{" "}
                Confirm you&apos;re not paying for a week to use it one day.
              </li>
              <li>
                <strong>&quot;Can I get that in writing?&quot;</strong> A real
                local operator will send a flat quote without hesitation.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              That last point is the whole game. Choosing a provider you can
              trust on price is part of a bigger decision — our{" "}
              <Link
                href="/blog/how-to-choose-portable-restroom-company-oklahoma"
                className="text-primary hover:underline"
              >
                10-point provider checklist
              </Link>{" "}
              walks through the rest, from servicing to 24/7 support.
            </p>

            <blockquote className="mt-6 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;We quote one number and that&apos;s the number on the
                invoice. Delivery, pickup, servicing — it&apos;s all in there. I
                started doing it that way because I got tired of hearing how the
                last company nickel-and-dimed people. You shouldn&apos;t need a
                magnifying glass to rent a porta potty.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Troy Brower, Owner | Brower Inc. | Newkirk, OK
              </p>
            </blockquote>

            {/* STRONG CTA BEFORE FAQ */}
            <div className="mt-12 rounded-xl bg-primary/10 border border-primary/30 p-6">
              <p className="font-semibold text-gray-900 text-lg">
                Get a porta potty quote that&apos;s actually the price.
              </p>
              <p className="mt-2 text-gray-700">
                Tell us your unit type, dates, and address. We&apos;ll send back a
                flat, all-in number in writing — and that&apos;s exactly what
                you&apos;ll be billed.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors text-center"
                >
                  Get Your Free Quote →
                </Link>
                <a
                  href="tel:+15807476206"
                  className="inline-block rounded-lg border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>

            {/* FAQ */}
            <h2
              id="faq"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Frequently Asked Questions About Porta Potty Rental Cost
            </h2>
          </div>

          <div className="mt-6">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* RELATED LINKS */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">
              Related Brower Inc. resources
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                →{" "}
                <Link
                  href="/blog/porta-potty-rental-cost-oklahoma"
                  className="text-primary hover:underline"
                >
                  Porta potty rental cost in Oklahoma (2026 pricing guide)
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/blog/how-to-choose-portable-restroom-company-oklahoma"
                  className="text-primary hover:underline"
                >
                  How to choose a portable restroom provider (10-point checklist)
                </Link>
              </li>
              <li>
                →{" "}
                <Link
                  href="/services/portable-restrooms"
                  className="text-primary hover:underline"
                >
                  Porta potty rental services in Oklahoma &amp; Kansas
                </Link>
              </li>
              <li>
                →{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Get a free, all-in flat quote
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
