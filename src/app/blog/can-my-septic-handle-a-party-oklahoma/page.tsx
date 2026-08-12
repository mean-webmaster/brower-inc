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
  title: "Can My Septic Handle 80 Guests? The Math Before Your Party",
  description:
    "Hosting a reunion, graduation party, or backyard wedding on a rural Oklahoma septic system? Here's what 80 guests actually put through a 1,000-gallon tank, why the damage isn't about volume, and how to protect the drain field.",
  alternates: {
    canonical: "/blog/can-my-septic-handle-a-party-oklahoma",
  },
  openGraph: {
    title:
      "We're Hosting 80 People at the Farm — Can the Septic Actually Take It?",
    description:
      "The honest math on what a large gathering does to a residential septic system in Oklahoma, why surge flow is the real threat to your drain field, and what to do in the two weeks beforehand.",
    type: "article",
    url: "/blog/can-my-septic-handle-a-party-oklahoma",
    images: [
      {
        url: "/images/brower-inc-can-my-septic-handle-a-party-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "A large family gathering under a shade tent on a rural north-central Oklahoma farm property on a bright summer day, with clean blue Brower Inc. portable restroom units placed discreetly at the edge of the lawn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Can My Septic Handle 80 Guests? The Honest Math Before Your Reunion",
    description:
      "What a large gathering really does to a 1,000-gallon tank, why surge flow — not volume — is what wrecks drain fields, and how Oklahoma homeowners protect the system.",
    images: [
      "/images/brower-inc-can-my-septic-handle-a-party-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question: "Can my septic system handle 80 to 100 guests for one day?",
    answer:
      "It depends far less on the number of guests than on how concentrated the use is. Oklahoma's rules require a minimum 1,000-gallon tank for a home with four or fewer bedrooms, and a tank that size is designed around a household of roughly four to five people — not eighty in an afternoon. Even at a conservative five gallons of use per guest, 80 people put around 400 gallons through the system in a few hours. The tank may not overflow, but that surge is what causes problems, because it pushes water through faster than solids can settle out. Many systems survive a party fine; the ones that don't tend to be systems that were already near their limit.",
  },
  {
    question:
      "Why is a party harder on a septic system than the same water used over a week?",
    answer:
      "Because a septic tank works by giving solids time to settle. Michigan State University Extension notes a tank needs roughly 24 hours of settling time, and a day of heavy party use reduces or eliminates it. When water surges in faster than that, it stirs up the settled sludge layer and carries solids out to the drain field, which is not designed to receive them. That's the damage mechanism — not the tank filling up. Solids in the drain field clog the soil's ability to absorb, and that failure is what turns into a five-figure repair rather than a routine pump.",
  },
  {
    question: "Should I pump my septic tank before a big party?",
    answer:
      "Usually yes, and MSU Extension recommends exactly that — inspecting and pumping beforehand, especially if it hasn't been done recently. Timing matters: schedule it a few days to two weeks before the event, not the morning of. Pumping gives you maximum working capacity and, just as importantly, gets the tank inspected so you find out about a failing baffle or a struggling drain field on a normal Tuesday instead of during your daughter's graduation party. In the Oklahoma City metro, routine pumping generally runs a few hundred dollars, against $5,000 to $20,000 for drain field replacement.",
  },
  {
    question:
      "How many portable restrooms do I need for a party at my house?",
    answer:
      "A common planning figure is one unit per 50 guests for a three- to four-hour event, adding roughly 15 to 25 percent if you're serving alcohol, plus about one more unit for every hour beyond four. For an 80- to 100-guest afternoon with drinks, that generally lands at two to three units, plus at least one ADA-accessible unit and a hand washing station. We'll be honest that published ratios vary a lot between sources — some planners recommend as tight as one per 25 — so treat these as a starting point and call us with your guest count, hours, and whether you're serving alcohol.",
  },
  {
    question:
      "Will renting portable restrooms actually protect my septic system?",
    answer:
      "Yes, and it's the single most effective thing you can do, because it diverts the load before it ever reaches the tank. This isn't just our sales pitch — Michigan State University Extension lists renting a portable restroom as a recommended way to protect a septic system during large gatherings. Guests using rented units instead of the house means the surge that would have churned your tank simply never happens. For a one-day event, the rental cost is a small fraction of what a damaged drain field costs to replace.",
  },
  {
    question:
      "Who regulates septic systems in Oklahoma — the county or the state?",
    answer:
      "The Oklahoma Department of Environmental Quality regulates on-site sewage statewide under OAC 252:641 — not county health departments. This surprises a lot of homeowners, and it's the opposite of how it works in Kansas, where permitting and enforcement are usually delegated to the county. In Oklahoma, installing or modifying a system requires an Authorization to Construct from DEQ, and the work must be inspected and approved before backfill. Brower Inc. is a DEQ-licensed pumper working across north-central Oklahoma and south-central Kansas.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "the-math", label: "What 80 Guests Actually Put In" },
  { id: "the-real-risk", label: "Surge, Not Volume, Is the Real Risk" },
  { id: "already-close", label: "Is Your System Already Near the Line?" },
  { id: "before", label: "What to Do in the Two Weeks Before" },
  { id: "how-many", label: "How Many Restrooms to Rent" },
  { id: "how-we-help", label: "How Brower Inc. Helps" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Can My Septic Handle a Party?",
    href: "/blog/can-my-septic-handle-a-party-oklahoma",
  },
];

export default function CanMySepticHandleAPartyPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "We're Hosting 80 People at the Farm — Can the Septic Actually Take It?",
              description:
                "What a large summer gathering really does to a residential Oklahoma septic system, why surge flow threatens the drain field, and how to protect it beforehand.",
              slug: "can-my-septic-handle-a-party-oklahoma",
              datePublished: "2026-07-20",
              image:
                "https://browerinc.net/images/brower-inc-can-my-septic-handle-a-party-oklahoma-blog-cover-newkirk-ok.webp",
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
              Septic &amp; Property Maintenance
            </span>
            <time dateTime="2026-07-20">July 20, 2026</time>
            <span>9 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            We&apos;re Hosting 80 People at the Farm — Can the Septic Actually
            Take It?
          </h1>

          <Image
            src={IMAGES.blogCoverSepticParty}
            alt="A large family gathering under a shade tent on a rural north-central Oklahoma farm property on a bright summer day, with clean blue Brower Inc. portable restroom units placed discreetly at the edge of the lawn"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              The date is set, the tent is rented, and somewhere around week
              three of planning a thought arrives that you can&apos;t quite put
              down: <em>everybody is going to be using one bathroom, and
              that bathroom runs to a septic tank buried out in the yard that
              nobody has thought about in years.</em>
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              It&apos;s a reasonable thing to worry about, and the honest answer
              is more nuanced than either &quot;you&apos;ll be fine&quot; or
              &quot;you&apos;re about to have a disaster.&quot; Most systems
              survive a party. The ones that don&apos;t were usually already
              close to the line, and the failure rarely looks like the tank
              overflowing — it looks like a drain field that quietly stops
              working a few weeks later. Here&apos;s the actual math, the real
              damage mechanism, and what to do in the two weeks before your
              guests arrive.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Oklahoma requires a minimum{" "}
                <strong>1,000-gallon tank</strong> for a home with four or fewer
                bedrooms — sized for a household of about{" "}
                <strong>four to five people</strong>, not eighty in an
                afternoon. The danger isn&apos;t the tank filling up; it&apos;s{" "}
                <strong>surge flow</strong>. A septic tank needs roughly{" "}
                <strong>24 hours</strong> for solids to settle, and party
                traffic collapses that window, stirring sludge and pushing
                solids into the <strong>drain field</strong> — the part that
                costs <strong>$5,000 to $20,000</strong> to replace. The two
                fixes that work: <strong>pump and inspect beforehand</strong>,
                and <strong>rent portable restrooms</strong> so the load never
                reaches the tank at all.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Event coming up on a rural property?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. does both sides of this — DEQ-licensed septic
                pumping and clean portable restrooms — so one local call covers
                protecting the system and handling the guests.
              </p>
              <Link
                href="/services/septic-services"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See Septic Services →
              </Link>
            </div>

            {/* H2: THE MATH */}
            <h2
              id="the-math"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What 80 Guests Actually Put Into the System
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Start with what your tank was built for. Under Oklahoma&apos;s
              on-site sewage rules (OAC 252:641-7-4), a residence with{" "}
              <strong>four or fewer bedrooms</strong> requires a tank of at
              least <strong>1,000 gallons</strong>, with another{" "}
              <strong>250 gallons</strong> for each additional bedroom. That
              1,000-gallon minimum is engineered around a household of roughly
              four to five residents using water the way households do — spread
              across a day, with long quiet stretches overnight.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Now put a party on it. The EPA figures average indoor water use at
              up to <strong>70 gallons per person per day</strong>, but a guest
              at an afternoon event isn&apos;t showering or running laundry — so
              the realistic number is far lower, in the range of a few gallons
              each once you account for flushes and handwashing. Even being
              conservative:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>80 guests × ~5 gallons</strong> ≈{" "}
                <strong>400 gallons</strong> — roughly 40% of a minimum-size
                tank&apos;s entire volume.
              </li>
              <li>
                <strong>Compressed into three or four hours</strong>, rather
                than spread across a day like normal household use.
              </li>
              <li>
                <strong>On top of</strong> whatever your household is already
                putting in that same day — and if guests are staying over, the
                next morning is worse.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              You&apos;ll see much scarier figures floating around — some sources
              claim 200 guests generate over 2,200 gallons. We&apos;d treat that
              as a high-end estimate rather than a rule; it depends heavily on
              event length and whether people are eating, drinking, and staying
              for hours. The point isn&apos;t the exact gallon count. It&apos;s
              that a system sized for five people is being asked to absorb
              something on the order of a day&apos;s household flow in an
              afternoon.
            </p>

            {/* H2: THE REAL RISK */}
            <h2
              id="the-real-risk"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Surge, Not Volume, Is What Actually Damages the System
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the part most homeowners have backwards, and it changes
              what you should be worried about. A septic tank isn&apos;t just a
              holding container — it&apos;s a settling chamber. Solids sink into
              a sludge layer at the bottom, grease floats to the top, and
              relatively clear liquid in the middle is what&apos;s supposed to
              flow out to the drain field. That separation takes time. Michigan
              State University Extension puts the settling window at roughly{" "}
              <strong>24 hours</strong>, and notes that a day of party water use{" "}
              <strong>reduces or eliminates</strong> it.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              When water comes in faster than solids can settle, two things
              happen at once: the incoming flow{" "}
              <strong>stirs up the sludge layer</strong> that has been sitting
              quietly for years, and it{" "}
              <strong>pushes that disturbed material out the outlet</strong> and
              into the drain field. The drain field is soil engineered to absorb
              liquid — it is emphatically not designed to receive solids. Once
              solids clog those soil pores, absorption capacity drops and
              doesn&apos;t come back on its own.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              That&apos;s why the failure so often shows up{" "}
              <em>weeks after</em> the event, not during it. The party goes
              fine. Then in September the grass over the field is suspiciously
              lush, there&apos;s a soft spot that never dries, and the drains are
              slow. The cost gap between the two outcomes is brutal:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-semibold text-gray-900">
                      Outcome
                    </th>
                    <th className="py-2 font-semibold text-gray-900">
                      Typical cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">
                      Routine pump &amp; inspection beforehand
                    </td>
                    <td className="py-2">A few hundred dollars</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4">
                      Drain field replacement, average soil
                    </td>
                    <td className="py-2">$3,000 – $8,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Drain field replacement, heavy clay or high water table
                    </td>
                    <td className="py-2">$15,000 – $20,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              That clay figure is not a footnote in this part of Oklahoma. Soil
              type drives drain field sizing dramatically — one homeowner on a
              rural-living forum described how his 20-by-20-foot field in good
              draining ground would have needed to be{" "}
              <strong>60 by 40 feet in clay</strong>, six times the area for the
              same house.
            </p>

            <Image
              src={IMAGES.blogHeroSepticParty}
              alt="A white-and-red Brower Inc. vacuum septic pump truck parked on a rural Oklahoma property with a navy-uniformed technician kneeling on the lawn connecting a green suction hose to pump a residential septic tank on a clear summer day"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* H2: ALREADY CLOSE */}
            <h2
              id="already-close"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Is Your System Already Near the Line?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A healthy system with recent maintenance handles a gathering far
              better than one that&apos;s been quietly deteriorating. Before you
              plan around it, check whether any of these are true:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>You don&apos;t know when it was last pumped.</strong> If
                the answer is &quot;the previous owners handled that,&quot;
                assume it&apos;s overdue. Our guide on{" "}
                <Link
                  href="/blog/septic-tank-never-pumped-oklahoma"
                  className="text-primary hover:underline"
                >
                  tanks that haven&apos;t been pumped in years
                </Link>{" "}
                covers where you actually stand.
              </li>
              <li>
                <strong>Drains are already a little slow</strong>, or a toilet
                gurgles. That&apos;s the system telling you it has no spare
                capacity — see{" "}
                <Link
                  href="/blog/signs-septic-tank-needs-pumping-oklahoma"
                  className="text-primary hover:underline"
                >
                  the warning signs worth acting on
                </Link>
                .
              </li>
              <li>
                <strong>There&apos;s a green stripe or soft ground</strong> over
                the drain field. Grass that&apos;s noticeably lusher over the
                field can mean effluent is surfacing rather than absorbing.
              </li>
              <li>
                <strong>The ground is already saturated.</strong> Worth noting
                this year: Oklahoma came off one of its wettest Junes on record
                statewide, and a drain field working through already-wet soil has
                less absorption capacity in reserve than the same field in a dry
                season.
              </li>
              <li>
                <strong>It&apos;s an older system on clay.</strong> Common across
                Kay County and the surrounding area, and the least forgiving
                combination for a surge.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Any one of those means get it looked at before the event rather
              than after. Finding a failing baffle in July is a service call;
              finding it during a graduation party is a very different day.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Event in the next few weeks and an unknown tank?
              </p>
              <p className="mt-2 text-gray-300">
                Get it pumped and inspected while it&apos;s still routine. Brower
                Inc. is DEQ-licensed and covers 14 Oklahoma and 6 Kansas
                counties — and we can bring restrooms for the day too.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: BEFORE */}
            <h2
              id="before"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What to Do in the Two Weeks Before
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A short, practical list — roughly in order of how much difference
              each one makes:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-600">
              <li>
                <strong>Rent portable restrooms.</strong> This is the highest-
                impact step because it removes the load entirely instead of
                trying to survive it. Michigan State University Extension
                explicitly lists renting a portable restroom among its
                recommendations for protecting a septic system during large
                gatherings — that&apos;s a land-grant university, not a rental
                company, saying it.
              </li>
              <li>
                <strong>Pump and inspect the tank a few days to two weeks
                out.</strong> Not the morning of — you want the inspection
                findings early enough to act on them. MSU Extension recommends
                arranging inspection and pumping ahead of the party, especially
                if it hasn&apos;t been done recently.
              </li>
              <li>
                <strong>Spread out household water use.</strong> Run laundry and
                dishwashers in the days before, not the day of. Every load you
                move off the event day is capacity you get back.
              </li>
              <li>
                <strong>Put a small sign in the bathroom.</strong> Nothing but
                toilet paper down the toilet — no wipes, no paper towels, no
                feminine products. Guests don&apos;t know your house is on
                septic unless you tell them.
              </li>
              <li>
                <strong>Know where the tank and field are</strong>, and keep
                cars, the tent, and the dance floor off the drain field. Driving
                or parking on it compacts the soil and damages the lines.
              </li>
              <li>
                <strong>Watch for trouble during the event.</strong> A slow
                flush or a gurgle mid-party is your cue to move everyone to the
                rented units immediately, before it becomes a backup.
              </li>
            </ol>

            {/* H2: HOW MANY */}
            <h2
              id="how-many"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Many Restrooms Should You Actually Rent?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ll give you a working number and then be straight about how
              much the published guidance varies. A widely used planning
              starting point:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>One unit per 50 guests</strong> for a three- to
                four-hour event.
              </li>
              <li>
                <strong>Add roughly 15–25%</strong> if you&apos;re serving
                alcohol.
              </li>
              <li>
                <strong>Add about one unit per hour</strong> beyond four hours.
              </li>
              <li>
                <strong>At least one ADA-accessible unit</strong>, which is also
                simply the easiest unit for older guests and anyone in formal
                clothes.
              </li>
              <li>
                <strong>A hand washing station</strong> — roughly one per four
                restrooms.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For an 80- to 100-guest afternoon with drinks, that lands at{" "}
              <strong>two to three units plus a hand washing station</strong>.
              Now the honesty part: ratio guidance genuinely conflicts between
              sources. Some wedding planners recommend as tight as one stall per
              25 guests; festival operators run closer to one per 50 for
              all-day events; and the frequently quoted industry-association
              figure of one per 100 is difficult to verify at its source because
              the standard is paywalled. Anyone giving you a single confident
              number is oversimplifying. Tell us guest count, hours, and whether
              there&apos;s alcohol, and we&apos;ll size it with you.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If the event is a wedding rather than a family gathering,{" "}
              <Link
                href="/blog/barn-wedding-not-enough-bathrooms-oklahoma"
                className="text-primary hover:underline"
              >
                our guide for venues with too few bathrooms
              </Link>{" "}
              covers the guest-experience side, and{" "}
              <Link
                href="/blog/porta-potty-vs-luxury-restroom-trailer-oklahoma"
                className="text-primary hover:underline"
              >
                the comparison of standard units versus a restroom trailer
              </Link>{" "}
              is worth reading before you decide.
            </p>

            <blockquote className="mt-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;We get the same call every summer — somebody&apos;s got a
                reunion or a graduation coming up and they&apos;re nervous about
                the septic. Pumping it beforehand and putting a couple of units
                out back is a few hundred dollars. Digging up a drain field in
                the fall because the tank got churned is a different number
                entirely. It&apos;s not a close call.&quot;
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
              How Brower Inc. Helps With Both Halves
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most companies do one side of this. We do both, which is why a
              single call handles the whole problem:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>
                  <Link
                    href="/services/septic-services"
                    className="text-primary hover:underline"
                  >
                    DEQ-licensed septic pumping and inspection
                  </Link>
                </strong>{" "}
                scheduled ahead of your event, with an honest read on whether
                the system is in shape for it.
              </li>
              <li>
                <strong>
                  <Link
                    href="/services/portable-restrooms"
                    className="text-primary hover:underline"
                  >
                    Clean portable restrooms
                  </Link>
                </strong>{" "}
                delivered and placed where they&apos;re convenient but not the
                centerpiece — including ADA units.
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
                — worth having anywhere food is being served.
              </li>
              <li>
                <strong>Rural delivery that actually happens.</strong> Gravel
                roads and farm addresses are normal work for us, not an excuse
                to cancel two days out.
              </li>
              <li>
                <strong>A written, all-in quote</strong> and a real local number
                answered by a person — no surprise surcharges after the fact.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              One more thing worth knowing as an Oklahoma homeowner: septic is
              regulated <strong>statewide by Oklahoma DEQ</strong> under OAC
              252:641, not by your county health department — which catches
              people out, since Kansas does delegate it to counties. If
              you&apos;re also weighing longer-term system questions,{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                our Oklahoma septic maintenance guide
              </Link>{" "}
              covers the ongoing schedule.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Protect the septic before the guests arrive."
                description={`Tell us your event date, guest count, and where you are, and we'll get the tank pumped ahead of time and put the right number of restrooms on site. Call ${PHONE} or request a quote.`}
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
              The Party Isn&apos;t the Problem. The Surge Is.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your septic system isn&apos;t fragile — it&apos;s specialized. It
              does one job well, which is separating solids from liquid slowly,
              and a large gathering is the one condition that takes away the
              time it needs to do it. Pump it beforehand so it starts with full
              capacity, rent enough restrooms that most of the load never
              arrives, and keep vehicles off the drain field. Do those three
              things and the system will almost certainly be fine.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk and handles both septic
              service and portable restrooms across 14 Oklahoma and 6 Kansas
              counties. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a quote for your event
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent
            slug="can-my-septic-handle-a-party-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
