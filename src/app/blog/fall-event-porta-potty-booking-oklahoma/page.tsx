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
  title: "Booking Porta Potties for Fall Events in Kay County: The Real Lead Times",
  description:
    "Fair week, the Cherokee Strip Cook-Off, homecoming, and October weddings all land in the same six weeks in north-central Oklahoma. Here's how far ahead you actually have to book portable restrooms, how many you need, and what a local fleet running out really looks like.",
  alternates: {
    canonical: "/blog/fall-event-porta-potty-booking-oklahoma",
  },
  openGraph: {
    title:
      "It's Mid-August in Kay County. Your Fall Event Needs Its Restrooms Booked Now.",
    description:
      "Fair week in Blackwell, the Cook-Off at Lake Ponca, homecoming, hunting camp, and peak October wedding season all hit within six weeks — and one local fleet covers all of it. The honest lead times and unit counts.",
    type: "article",
    url: "/blog/fall-event-porta-potty-booking-oklahoma",
    images: [
      {
        url: "/images/brower-inc-fall-event-porta-potty-booking-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "A small-town north-central Oklahoma county fair on a grassy fairground in early autumn golden light, with a neat row of clean bright blue Brower Inc. portable restroom units placed along the edge of the grounds beyond the vendor tents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Real Booking Lead Times for Fall Events in Kay County, OK",
    description:
      "Why every fall event in north-central Oklahoma competes for the same restroom fleet in the same six weeks — and how far ahead you actually need to call.",
    images: [
      "/images/brower-inc-fall-event-porta-potty-booking-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question:
      "How far in advance should I book portable restrooms for a fall event in Oklahoma?",
    answer:
      "For an ordinary fall Saturday — a church gathering, a birthday, a small fundraiser — four to six weeks is comfortable and two weeks is usually workable. For a wedding on a set October date, book three to six months out; October is the busiest wedding month in Oklahoma and that date cannot move. For a multi-day festival, fair, or anything needing ten or more units, three to six months. The one week we'd genuinely warn you about in Kay County is fair week and the weekends on either side of it, when a large share of the local fleet is already committed. Published booking-window advice varies wildly between sources — some say two weeks, some say twelve months — because it depends almost entirely on how flexible your date is and how many units you need.",
  },
  {
    question:
      "Is it too late to rent a porta potty for an event in three weeks?",
    answer:
      "Usually no, and you should call rather than assume. Three weeks out for two or three standard units on a fall weekend is normally fine. What gets tight at that range is the specialty inventory — ADA-accessible units, hand washing stations, and especially restroom trailers, which most local operators own only a handful of. If you're inside three weeks and you need a trailer for a wedding, that's the call to make today rather than Thursday. We'd rather tell you honestly what we have than take the booking and disappoint you on the date.",
  },
  {
    question: "How many portable restrooms do I need for a fall festival?",
    answer:
      "A common planning starting point is one unit per 50 attendees for a three- to four-hour event, adding roughly 15 to 25 percent if alcohol is served and about one more unit per hour beyond four. Multi-day events are a different calculation: you're sizing for peak simultaneous attendance, not total attendance across the weekend, and you also need a mid-event servicing schedule so day two doesn't start where day one ended. Be aware that published ratios genuinely conflict between sources — some planners use one per 25, some festival operators run one per 100 with aggressive servicing. Give us your peak-hour headcount, hours, and whether there's alcohol, and we'll size it with you rather than quote you a rule of thumb.",
  },
  {
    question:
      "Do I need ADA-accessible portable restrooms at a public event in Oklahoma?",
    answer:
      "If your event is open to the public, plan on it. Oklahoma doesn't publish a single statewide event restroom ratio — the requirements come from the individual city's special-event permit and from federal ADA obligations. The pattern across Oklahoma cities that do publish numbers is instructive: Tulsa and Oklahoma City both require at least 10 percent of restroom facilities to be accessible, and Norman requires a minimum of 5 percent. The rule that matters most in practice is simpler: if you place only one unit at a given location, that unit must be accessible, and every restroom bank needs a firm, level accessible route to it. Check your specific city or venue permit, and if you're on a fairground or a field, walk the route before you pick the spot.",
  },
  {
    question:
      "Why does a local company run out of units when the national websites always say they're available?",
    answer:
      "Because a real local operator has a real, countable fleet sitting in a yard, and a broker doesn't. Many of the 'local-looking' results for rural Oklahoma towns are national broker networks that own zero units — they take your booking and then try to find someone nearby to actually fill it. That's why the classic failure story is a booking confirmed months ahead and then cancelled days before the event as being 'outside the service area.' When we tell you a date is tight, it's because we can count the trailers in our yard. That's a worse sales answer and a much better outcome for your event.",
  },
  {
    question:
      "What does last-minute or rush delivery cost for portable restrooms?",
    answer:
      "Across the industry, rush and short-notice premiums generally run in the range of 20 to 35 percent, with same-day and weekend delivery surcharges commonly $50 to $150 on top. The bigger cost usually isn't the surcharge — it's the substitution. Late bookings get whatever's left, which might mean standard units where you wanted a trailer, or a delivery window that doesn't suit your setup schedule. Booking early is mostly about getting the equipment you actually wanted at the ordinary price.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "the-calendar", label: "The Kay County Fall Calendar" },
  { id: "lead-times", label: "How Far Ahead to Book" },
  { id: "sold-out", label: "What 'Sold Out' Means Locally" },
  { id: "how-many", label: "How Many Units You Need" },
  { id: "fall-specific", label: "The Fall-Specific Mistakes" },
  { id: "before-you-call", label: "What to Have Ready" },
  { id: "how-we-help", label: "How Brower Inc. Helps" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Booking Restrooms for Fall Events",
    href: "/blog/fall-event-porta-potty-booking-oklahoma",
  },
];

export default function FallEventPortaPottyBookingPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "It's Mid-August in Kay County. Every Fall Event You're Planning Already Needs Its Restrooms Booked.",
              description:
                "Fair week, the Cherokee Strip Cook-Off, homecoming, hunting camp, and peak October wedding season all land within six weeks in north-central Oklahoma. The honest booking lead times, unit counts, and fall-specific placement mistakes.",
              slug: "fall-event-porta-potty-booking-oklahoma",
              datePublished: "2026-08-12",
              image:
                "https://browerinc.net/images/brower-inc-fall-event-porta-potty-booking-oklahoma-blog-cover-newkirk-ok.webp",
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
            <time dateTime="2026-08-12">August 12, 2026</time>
            <span>9 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            It&apos;s Mid-August in Kay County. Every Fall Event You&apos;re
            Planning Already Needs Its Restrooms Booked.
          </h1>

          <Image
            src={IMAGES.blogCoverFallEventBooking}
            alt="A small-town north-central Oklahoma county fair on a grassy fairground in early autumn golden light, with a neat row of clean bright blue Brower Inc. portable restroom units placed along the edge of the grounds beyond the vendor tents"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Here is the thing nobody tells you about planning a fall event in
              north-central Oklahoma: <em>your event is not the only one</em>.
              Between the first week of September and the end of October, this
              corner of the state runs a nearly unbroken chain of fairs,
              cook-offs, homecomings, harvest festivals, hunting camps, and
              weddings — and every one of them needs the same finite pile of
              blue units, trailers, and hand washing stations that sits in a
              yard in Newkirk.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most people call about restrooms two to three weeks out, which is
              genuinely fine for most events on most weekends. The trouble is
              the weekends where it isn&apos;t, and there are several of those
              coming. This is a straight look at what the fall calendar around
              Kay County actually looks like, how far ahead you need to book for
              your specific kind of event, and the placement mistakes that only
              show up once the weather turns.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                For an ordinary fall Saturday, <strong>4–6 weeks</strong> is
                comfortable. For an <strong>October wedding</strong> — the
                busiest wedding month in Oklahoma, on a date that cannot move —
                book <strong>3–6 months</strong> ahead. For a{" "}
                <strong>multi-day festival or fair</strong>, or anything needing{" "}
                <strong>10+ units</strong>, three to six months. Restroom
                trailers and ADA units are the first things to go, because every
                local operator owns only a handful. Short-notice premiums across
                the industry run roughly <strong>20–35%</strong>, with weekend
                or same-day surcharges commonly <strong>$50–$150</strong> on
                top — assuming the equipment exists at all.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Already have a fall date on the calendar?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Tell us the date, the headcount, and where you are. We&apos;ll
                tell you honestly what&apos;s still open — including if the
                answer is &quot;not the trailer, but we can do units.&quot;
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Check Availability →
              </Link>
            </div>

            {/* H2: THE CALENDAR */}
            <h2
              id="the-calendar"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What the Fall Calendar Actually Looks Like Around Kay County
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you live here, none of these are news individually. Seeing them
              stacked on one page is the point — this is roughly six weeks of
              continuous demand, and it starts about three weeks from now.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Kay County Free Fair</strong> — September 7–13 at the
                Blackwell Event Center &amp; Fairgrounds. A full week of
                livestock shows, exhibits, and evening crowds, and the anchor of
                the local fall calendar.
              </li>
              <li>
                <strong>Cherokee Strip season in Ponca City</strong> — the
                Cherokee Strip Cook-Off at Lake Ponca in mid-September, a
                KCBS-sanctioned barbecue competition with vendors, live music,
                and family activities on the lake, plus the golf classic and the
                rest of the Cherokee Strip commemorations earlier in the month.
              </li>
              <li>
                <strong>Football and homecoming</strong> — Friday nights from
                late August onward, plus the tailgates, booster fundraisers, and
                alumni gatherings that ride along with them.
              </li>
              <li>
                <strong>Church and school fall festivals</strong> — the
                fall-festival and trunk-or-treat cluster through October, most
                of it outdoors on a parking lot or a field.
              </li>
              <li>
                <strong>Peak wedding season</strong> — October is when Oklahoma
                couples actually want to be outside: no 100° heat, no wind-driven
                spring storms. Barn venues, family land, and pasture ceremonies
                book out first.
              </li>
              <li>
                <strong>Hunting camps and lease season</strong> — dove opens
                September 1 and archery deer follows in October, which quietly
                puts a lot of people on remote ground for days at a time with no
                facilities within miles.
              </li>
              <li>
                <strong>Harvest and fall fieldwork</strong> — crews working long
                days a long way from a building, on the same weeks as everything
                above.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Notice what all of these have in common: <em>fixed dates</em>. A
              jobsite rental can start on Tuesday instead of Monday. A wedding
              cannot. Fair week cannot. That&apos;s the entire reason event
              restrooms have to be booked on a different timeline than anything
              else we rent.
            </p>

            {/* H2: LEAD TIMES */}
            <h2
              id="lead-times"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Far Ahead You Actually Need to Book
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Search this question and you&apos;ll get advice ranging from
              &quot;two weeks is plenty&quot; to &quot;twelve months for a
              popular Saturday,&quot; which is why nobody trusts any of it. Both
              are true for different events. Here&apos;s how we&apos;d actually
              answer it for this area:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-semibold text-gray-900">
                      Event type
                    </th>
                    <th className="py-2 pr-4 font-semibold text-gray-900">
                      Book this far ahead
                    </th>
                    <th className="py-2 font-semibold text-gray-900">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">
                      Backyard party, small fundraiser
                    </td>
                    <td className="py-2 pr-4">2–4 weeks</td>
                    <td className="py-2">
                      Standard units, flexible placement
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Church or school fall festival</td>
                    <td className="py-2 pr-4">4–6 weeks</td>
                    <td className="py-2">
                      Competes with every other October Saturday
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">Wedding (standard units)</td>
                    <td className="py-2 pr-4">2–3 months</td>
                    <td className="py-2">Immovable date, peak season</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">
                      Wedding (restroom trailer)
                    </td>
                    <td className="py-2 pr-4">3–6 months</td>
                    <td className="py-2">
                      Very limited trailer inventory anywhere local
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">
                      Multi-day festival, fair, rodeo
                    </td>
                    <td className="py-2 pr-4">3–6 months</td>
                    <td className="py-2">
                      Volume plus a mid-event servicing schedule
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Hunting camp / lease</td>
                    <td className="py-2 pr-4">3–4 weeks</td>
                    <td className="py-2">
                      Remote access needs planning, not inventory
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you&apos;re reading this in mid-August, the practical
              translation is: <strong>September events should be booked
              now</strong>, October weddings should already have been booked and
              are worth calling about today, and anything in November has room
              to breathe.
            </p>

            <Image
              src={IMAGES.communityEvent}
              alt="A Brower Inc. branded restroom trailer and white service truck parked along the far rail of a grassy Oklahoma community event arena, with lawn chairs set out around the ring and white vendor tents raised in the background before the crowd arrives"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* H2: SOLD OUT */}
            <h2
              id="sold-out"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What &quot;Sold Out&quot; Actually Means for a Local Operator
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is worth explaining plainly, because it&apos;s the part that
              makes national rental websites feel more reassuring than they
              deserve to be. Type your town into most of them and every date is
              available, every time. That&apos;s not confidence — it&apos;s that
              a lot of those sites are <strong>brokers who own no units</strong>.
              They take the booking first and go looking for someone with a truck
              second.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The failure mode is well documented and it is brutal: bookings
              confirmed months in advance, then cancelled days before the event
              as &quot;outside the service area&quot; — a fact that was equally
              true when the deposit was taken. One family described a wedding
              order originally around $340 that, after a last-minute
              cancellation, ended up costing them nearly triple to replace. If
              you want the longer version of how to spot this,{" "}
              <Link
                href="/blog/local-vs-national-portable-restroom-providers-oklahoma"
                className="text-primary hover:underline"
              >
                our comparison of local versus national providers
              </Link>{" "}
              walks through the tells.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A real local company works the other way, and it&apos;s less
              flattering: we have a specific number of units, a specific number
              of ADA units, and a small number of trailers. A unit committed to
              the fairgrounds is a unit that isn&apos;t at your wedding. When we
              say a date is tight, it&apos;s arithmetic, not a sales tactic —
              and when we say yes, the equipment already exists and it&apos;s
              already ours.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Got a September date and no restrooms lined up?
              </p>
              <p className="mt-2 text-gray-300">
                Call and we&apos;ll check the actual yard, not a national
                availability screen. Brower Inc. is locally owned in Newkirk and
                covers 14 Oklahoma and 6 Kansas counties.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: HOW MANY */}
            <h2
              id="how-many"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Many Units a Fall Event Actually Needs
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A working starting point, followed by the honest caveats:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>One unit per 50 attendees</strong> for a three- to
                four-hour event.
              </li>
              <li>
                <strong>Add 15–25%</strong> if you&apos;re serving alcohol.
              </li>
              <li>
                <strong>Add about one unit per hour</strong> beyond four hours.
              </li>
              <li>
                <strong>At least one ADA-accessible unit</strong> — and if
                you&apos;re only placing one unit somewhere, that one has to be
                the accessible one.
              </li>
              <li>
                <strong>A hand washing station</strong> per roughly four
                restrooms, and non-negotiably wherever food is served.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Two things change for fall events specifically. First,{" "}
              <strong>multi-day events are sized on peak simultaneous
              attendance</strong>, not on the weekend&apos;s total headcount —
              a fair that draws 4,000 people over a week might never have more
              than 600 on the grounds at once. Second, multi-day means{" "}
              <strong>servicing, not just delivery</strong>. The single most
              common complaint about festival restrooms anywhere is that they
              were fine on Friday and unusable by Saturday night. That&apos;s a
              servicing schedule problem, and it should be written into your
              quote before you sign anything.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              On accessibility: Oklahoma has no single statewide event ratio.
              The requirements come from your city&apos;s special-event permit
              plus federal ADA obligations, and the published numbers around the
              state give a useful sense of the expectation — Tulsa and Oklahoma
              City both call for at least 10% of restroom facilities to be
              accessible, and Norman sets a 5% minimum. Check your specific
              city or venue, and walk the route: an accessible unit at the far
              end of a soft, sloping field isn&apos;t accessible.{" "}
              <Link
                href="/blog/ada-portable-restroom-construction-oklahoma"
                className="text-primary hover:underline"
              >
                Our guide to ADA unit placement
              </Link>{" "}
              covers the surface and route requirements in more detail.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If your event is a wedding rather than a festival, the calculation
              shifts toward guest experience, and{" "}
              <Link
                href="/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma"
                className="text-primary hover:underline"
              >
                the standard-unit versus restroom-trailer comparison
              </Link>{" "}
              is the decision to make first, since it drives your lead time more
              than anything else. Venues with a couple of indoor bathrooms and a
              200-person guest list have their own math, covered in{" "}
              <Link
                href="/blog/barn-wedding-not-enough-bathrooms-oklahoma"
                className="text-primary hover:underline"
              >
                our barn wedding restroom guide
              </Link>
              .
            </p>

            {/* H2: FALL SPECIFIC */}
            <h2
              id="fall-specific"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Mistakes That Only Happen in the Fall
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Summer events fail on heat and odor. Fall events fail on entirely
              different things, and they catch experienced organizers out
              because the weather is so pleasant right up until it isn&apos;t.
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>The light goes early.</strong> A 6 p.m. October event
                that was comfortably lit in July is now finishing in the dark.
                Units placed at the dark end of a field stop getting used, and
                people start walking somewhere they shouldn&apos;t. Place them
                within reach of existing light or plan lighting for them.
              </li>
              <li>
                <strong>Soft ground, and this year especially.</strong> Kay
                County has had a genuinely wet 2026 — a top-five wettest June on
                record and a year-to-date well above normal, with the county at
                no drought classification at all in early August. Wet ground
                means two things: units need level, firm placement so they
                don&apos;t settle or tip, and our truck needs a route in that
                won&apos;t rut your pasture. Tell us about the gate and the
                approach when you book, not on delivery morning.
              </li>
              <li>
                <strong>Wind.</strong> Plains wind on an open fairground or a
                harvested field is the standard cause of tipped units, and
                it&apos;s worst on soft ground where anchoring is weakest.
                Placement against a treeline or a building beats the middle of
                an open field every time.
              </li>
              <li>
                <strong>The first cold snap.</strong> Late October can turn
                sharply. It rarely freezes hard enough this early to be a service
                problem, but it does change what guests will tolerate — a long
                walk to a unit at the edge of a dark, cold field is a very
                different ask in October than in June.
              </li>
              <li>
                <strong>Parking on the wrong ground.</strong> If your event is on
                a rural property with a septic system, keep vehicles off the
                drain field, and think about whether the house system can take
                the guest load at all —{" "}
                <Link
                  href="/blog/can-my-septic-handle-a-party-oklahoma"
                  className="text-primary hover:underline"
                >
                  we wrote the math on that separately
                </Link>
                .
              </li>
            </ol>

            {/* H2: BEFORE YOU CALL */}
            <h2
              id="before-you-call"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What to Have Ready When You Call
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Five minutes of prep turns a vague quote into a firm one:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>The date, and the setup and teardown windows.</strong>{" "}
                &quot;Delivered Friday morning, picked up Monday&quot; is a
                different job than &quot;delivered Saturday at 7 a.m.&quot;
              </li>
              <li>
                <strong>Peak simultaneous attendance</strong>, not total
                attendance — and be honest, since low-balling this is what
                creates lines.
              </li>
              <li>
                <strong>Hours, and whether alcohol is served.</strong>
              </li>
              <li>
                <strong>Whether it&apos;s a public event</strong>, which drives
                the accessibility requirement and possibly a city permit.
              </li>
              <li>
                <strong>The address, the gate, and the ground.</strong> Gravel
                drive, pasture, parking lot, locked gate, low branches — all of
                it matters for a truck that needs roughly 12 feet of overhead
                clearance and to park within about 25 feet of the placement
                spot.
              </li>
              <li>
                <strong>Whether you want a written all-in quote.</strong> You
                should. Ask for delivery, pickup, and any servicing to be named
                as line items, so the invoice matches the quote.
              </li>
            </ul>

            <blockquote className="mt-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;Every September we get the same two phone calls. One is
                somebody who booked in July and just wants to confirm the
                delivery time. The other is somebody with an event on Saturday
                who just realized there&apos;s nowhere for 300 people to go. We
                do everything we can for the second call, and sometimes we pull
                it off. But the first call is a better way to live.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Troy Brower, Owner | Brower Inc. | Newkirk, OK
              </p>
            </blockquote>

            {/* H2: HOW WE HELP */}
            <h2
              id="how-we-help"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Brower Inc. Handles Fall Events
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>
                  <Link
                    href="/services/portable-restrooms"
                    className="text-primary hover:underline"
                  >
                    Clean standard units
                  </Link>
                </strong>{" "}
                placed where they&apos;re convenient without being the
                centerpiece of your photos.
              </li>
              <li>
                <strong>
                  <Link
                    href="/services/ada-compliant-portable-restrooms"
                    className="text-primary hover:underline"
                  >
                    ADA-accessible units
                  </Link>
                </strong>{" "}
                — which are also simply the easiest units for older guests and
                anyone in a dress.
              </li>
              <li>
                <strong>
                  <Link
                    href="/services/vip-shower-restroom-trailers"
                    className="text-primary hover:underline"
                  >
                    VIP restroom trailers
                  </Link>
                </strong>{" "}
                for weddings and higher-end events — limited inventory, so this
                is the one to lock in early.
              </li>
              <li>
                <strong>
                  <Link
                    href="/services/hand-washing-stations"
                    className="text-primary hover:underline"
                  >
                    Stocked hand washing stations
                  </Link>
                </strong>{" "}
                wherever food is being served.
              </li>
              <li>
                <strong>Mid-event servicing on multi-day events</strong>, written
                into the quote so Saturday night doesn&apos;t undo Friday.
              </li>
              <li>
                <strong>Rural delivery that actually happens.</strong> Pasture
                gates, gravel section-line roads, and farm addresses are normal
                work here, not a reason to cancel two days out.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We serve{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay County
              </Link>{" "}
              including{" "}
              <Link
                href="/service-areas/ponca-city"
                className="text-primary hover:underline"
              >
                Ponca City
              </Link>{" "}
              and{" "}
              <Link
                href="/service-areas/blackwell"
                className="text-primary hover:underline"
              >
                Blackwell
              </Link>
              , plus 13 more Oklahoma counties and 6 in southern Kansas. If your
              event date has already slipped past comfortable,{" "}
              <Link
                href="/blog/emergency-portable-restroom-deployment-oklahoma"
                className="text-primary hover:underline"
              >
                our emergency deployment guide
              </Link>{" "}
              covers what&apos;s still possible on short notice.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Lock in your fall date before the calendar fills."
                description={`Tell us the date, the headcount, and the address, and we'll give you a written all-in quote with the servicing schedule named. Call ${PHONE} or request a quote.`}
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
              The Date Can&apos;t Move. The Booking Can.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nearly every restroom disaster we hear about started as a
              scheduling problem rather than an equipment problem. The units
              existed. Somebody just asked for them the week the whole county
              was asking for them. If you have a September or October date on a
              calendar somewhere, the cheapest thing you will do all month is
              spend ten minutes now confirming that the restrooms are handled.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk, answers its own phone,
              and has actual units in an actual yard. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a quote for your fall event
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent
            slug="fall-event-porta-potty-booking-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
