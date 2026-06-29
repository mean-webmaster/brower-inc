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
  title: "5 Warning Signs Your Septic Tank Needs Pumping (Oklahoma)",
  description:
    "The 5 warning signs your septic tank needs pumping — slow drains, gurgling, soggy or greener grass over the drain field, sewage odor, and backups. What each one means, how urgent it is, and what it costs in Oklahoma.",
  alternates: {
    canonical: "/blog/signs-septic-tank-needs-pumping-oklahoma",
  },
  openGraph: {
    title:
      "5 Warning Signs Your Septic Tank Needs Pumping (Don't Ignore #3)",
    description:
      "Slow drains, gurgling, soggy or greener grass over the drain field, sewage odor, backups — the warning signs Oklahoma homeowners should never ignore, explained by a local DEQ-licensed pumper.",
    type: "article",
    url: "/blog/signs-septic-tank-needs-pumping-oklahoma",
    images: [
      {
        url: "/images/brower-inc-signs-septic-tank-needs-pumping-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Branded white Brower Inc. vacuum septic pump truck on a gravel residential driveway in rural Oklahoma with a navy-uniformed technician operating a green pumping hose into a backyard septic cleanout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "5 Warning Signs Your Septic Tank Needs Pumping (Don't Ignore #3)",
    description:
      "The slow drains, gurgles, soggy grass, odors, and backups that mean it's time to pump — and what each one costs to ignore in Oklahoma.",
    images: [
      "/images/brower-inc-signs-septic-tank-needs-pumping-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question: "How do I know if my septic tank needs pumping?",
    answer:
      "Watch for five signs: (1) drains all over the house running slow at once; (2) toilets and drains gurgling; (3) a patch of grass over the drain field that's suddenly greener, taller, or soggy; (4) a sewage smell inside or out near the tank; and (5) sewage backing up into the lowest drains. Any one of these is your cue to schedule a pump — and if you simply can't remember the last time it was done, it's almost certainly due regardless of symptoms.",
  },
  {
    question: "Is greener grass over my septic drain field a good sign or a bad sign?",
    answer:
      "It's usually a warning, not a compliment. A drain field that's working correctly disperses treated effluent evenly and deep enough that the lawn above looks like the rest of your yard. When one strip of grass is noticeably greener, taller, or spongy underfoot, it often means effluent is rising too close to the surface because the tank is overfull and solids are clogging the field. Bright green grass plus any sogginess or odor means call a pumper before it surfaces.",
  },
  {
    question: "How urgent is a gurgling toilet on a septic system?",
    answer:
      "Gurgling means air is being forced back through the drains because wastewater can't flow out freely — the tank is full or the inlet is partially blocked. It's not a same-minute emergency, but it is an early backup warning. Schedule a pump within days, not months. If gurgling is paired with slow drains or sewage odor, treat it as urgent: the next stage is a backup into the house.",
  },
  {
    question: "What happens if I never pump my septic tank?",
    answer:
      "Solids that should be pumped out instead overflow into the drain field and clog the soil's ability to absorb water. Once the drain field fails, you're no longer looking at a $300–$500 pump — you're looking at a $3,000–$15,000 drain field replacement, or $10,000–$25,000+ for a full system. Homeowners who 'never had a problem' for 15 years are exactly the ones who get the catastrophic bill, because the damage is invisible until the field is already destroyed.",
  },
  {
    question: "How often should a septic tank be pumped in Oklahoma?",
    answer:
      "Most conventional Oklahoma tanks need pumping every 3 to 5 years; aerobic systems run closer to every 2 to 4 years. Household size, tank size, garbage-disposal use, and water volume move the number. Oklahoma's heavy clay soil also gives drain fields less margin for error than sandy soil does, so staying on the shorter end of the range is smart here. Have the sludge depth checked at each visit and pump on schedule rather than waiting for a sign.",
  },
  {
    question: "My drains are slow but nothing is backing up — should I wait?",
    answer:
      "Don't wait it out. Slow drains across multiple fixtures (not just one clogged sink) are one of the earliest signs the tank is near capacity. Catching it now is a routine, scheduled pump-out. Letting it progress to a backup means an emergency call, a mess inside the house, and real risk to the drain field. The cheapest time to act is while it's only annoying.",
  },
  {
    question: "Can Brower Inc. pump my septic tank in north-central Oklahoma?",
    answer:
      "Yes. Brower Inc. is a DEQ-licensed septic pumper based in Newkirk, and we pump conventional tanks, aerobic systems, and commercial tanks across 14 Oklahoma and 6 Kansas counties. We empty, rinse, and inspect the tank in one visit, quote flat all-in pricing with no mileage surcharge inside our service area, and leave you with a recommended next-pump date. Call (580) 747-6206 with your address.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "why-it-matters", label: "Why These Signs Matter" },
  { id: "sign-1", label: "1. Slow Drains Everywhere" },
  { id: "sign-2", label: "2. Gurgling Toilets & Pipes" },
  { id: "sign-3", label: "3. Greener / Soggy Grass (Don't Ignore)" },
  { id: "sign-4", label: "4. Sewage Odor" },
  { id: "sign-5", label: "5. Backups" },
  { id: "cost", label: "The $400 vs. $15,000 Math" },
  { id: "oklahoma", label: "Why Oklahoma Soil Raises the Stakes" },
  { id: "how-often", label: "How Often to Pump" },
  { id: "how-we-help", label: "How Brower Inc. Helps" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Signs Your Septic Tank Needs Pumping",
    href: "/blog/signs-septic-tank-needs-pumping-oklahoma",
  },
];

export default function SignsSepticTankNeedsPumpingPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "5 Warning Signs Your Septic Tank Needs Pumping (Don't Ignore #3)",
              description:
                "The five warning signs an Oklahoma septic tank needs pumping — slow drains, gurgling, soggy or greener grass over the drain field, sewage odor, and backups — what each means, how urgent it is, and what ignoring it costs.",
              slug: "signs-septic-tank-needs-pumping-oklahoma",
              datePublished: "2026-06-29",
              image:
                "https://browerinc.net/images/brower-inc-signs-septic-tank-needs-pumping-oklahoma-blog-cover-newkirk-ok.webp",
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
            <time dateTime="2026-06-29">June 29, 2026</time>
            <span>10 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            5 Warning Signs Your Septic Tank Needs Pumping (Don&apos;t Ignore
            #3)
          </h1>

          <Image
            src={IMAGES.blogCoverSepticWarningSigns}
            alt="Branded white Brower Inc. vacuum septic pump truck on a gravel residential driveway in rural Oklahoma with a navy-uniformed technician operating a green pumping hose into a backyard septic cleanout"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Here&apos;s the thing about a septic tank: it&apos;s buried in the
              yard, it never asks for anything, and for years it does its job so
              quietly you forget it&apos;s there. Which is exactly why the first
              real symptom tends to land with a jolt of dread — a slow drain, a
              gurgle, a smell — and the question almost every homeowner Googles
              at that moment is the same: <em>&quot;Is this the cheap problem,
              or the expensive one?&quot;</em>
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Good news: the difference between a $400 pump-out and a $15,000
              drain field replacement usually comes down to whether you act on
              the early signs or wait for the late ones. Below are the five
              warnings your tank gives you, in roughly the order they show up —
              what each one actually means, how urgent it is, and the one
              everybody misreads as <em>good</em> news (it&apos;s #3). If
              you&apos;re due for a{" "}
              <Link
                href="/services/septic-tank-pumping"
                className="text-primary hover:underline"
              >
                septic tank pumping
              </Link>{" "}
              in north-central Oklahoma, this is how to read your own system.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Your septic tank needs pumping when you notice{" "}
                <strong>
                  slow drains throughout the house, gurgling pipes, grass over
                  the drain field that&apos;s suddenly greener or soggy, sewage
                  odor, or backups
                </strong>
                . The earlier signs (slow drains, gurgling) mean schedule a pump
                soon; the later ones (soggy field, odor, backups) mean call now.
                And if you simply can&apos;t remember the last time it was
                pumped, it&apos;s due — most Oklahoma tanks need it{" "}
                <strong>every 3–5 years</strong>.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Seeing one of these signs right now?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. is a DEQ-licensed pumper based in Newkirk. We empty,
                rinse, and inspect your tank in one visit — flat all-in pricing,
                no mileage surcharge inside our 20-county service area.
              </p>
              <Link
                href="/services/septic-tank-pumping"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See Septic Pumping →
              </Link>
            </div>

            {/* H2: WHY IT MATTERS */}
            <h2
              id="why-it-matters"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Why These Signs Matter (the part nobody explains)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A septic tank works by letting solids settle to the bottom as
              sludge and grease float to the top as scum, while the relatively
              clear water in the middle flows out to the drain field to soak
              into the soil. Pumping removes that built-up sludge and scum.
              When you skip it too long, the solids rise high enough to wash out
              with the water and{" "}
              <strong>clog the drain field</strong> — and a clogged field is the
              expensive part. The tank you can pump; the field you often have to
              dig up and replace.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              So every sign below is really your system warning you that solids
              are getting too high <em>before</em> they reach the field. That&apos;s
              the whole game: pump on the warnings, protect the field, and a
              septic system will run for decades. As the{" "}
              <a
                href="https://www.epa.gov/septic/how-care-your-septic-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EPA&apos;s septic care guidance
              </a>{" "}
              puts it, routine pumping is the single cheapest thing you can do to
              keep the whole system alive.
            </p>

            {/* SIGN 1 */}
            <h2
              id="sign-1"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              1. Every Drain in the House Is Suddenly Slow
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              One slow sink is a clog. <strong>Multiple</strong> slow drains —
              the kitchen sink, the tub, the washing machine all draining
              sluggishly around the same time — point past the pipes to the tank
              itself. When the tank is near capacity, there&apos;s simply less
              room for water to move through, so everything backs up a beat.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the friendliest warning you&apos;ll get, because nothing
              has overflowed yet. Homeowners constantly talk themselves out of
              it — <em>&quot;it&apos;s draining, just slow, it&apos;s probably
              fine&quot;</em> — and that hesitation is exactly how a $400 pump
              becomes a $4,000 emergency. <strong>Urgency: schedule within a
              week or two.</strong>
            </p>

            {/* SIGN 2 */}
            <h2
              id="sign-2"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              2. Gurgling Toilets and Pipes
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Run the washing machine or a couple of showers and hear the toilet
              <em> bubble and glug</em>? That gurgle is air being pushed back up
              the drains because wastewater can&apos;t leave the house fast
              enough — the tank is full or the inlet is partly blocked. People
              describe it exactly this way: &quot;every time I do laundry the
              toilets gurgle.&quot;
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              It&apos;s a clear step up from slow drains. The system is now
              actively struggling to move water out.{" "}
              <strong>Urgency: schedule within days.</strong> If you&apos;re
              also catching whiffs of sewage (sign #4), don&apos;t wait the
              weekend out.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Drains slow and toilets gurgling already?
              </p>
              <p className="mt-2 text-gray-300">
                That combination usually means the tank is at capacity — the
                cheapest day to pump it is today, before it backs up. Brower
                Inc. runs daily septic routes across 14 Oklahoma and 6 Kansas
                counties.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* SIGN 3 */}
            <h2
              id="sign-3"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              3. The Grass Over the Drain Field Is Greener or Soggy (Don&apos;t
              Ignore This One)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the sign people get backwards. You walk the yard and
              notice one strip of grass that&apos;s greener, lusher, and growing
              faster than everything around it — right over the drain field. The
              instinct is to think, <em>&quot;great, free fertilizer, the
              system must be working.&quot;</em> It&apos;s one of the most common
              questions homeowners ask: <em>&quot;I&apos;ve heard greener grass
              over the drain field is bad, but I&apos;ve also heard it&apos;s a
              sign everything&apos;s working — which is it?&quot;</em>
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here&apos;s the honest answer: a healthy drain field disperses
              treated water deep and evenly, so the grass above it looks like the
              rest of your lawn. When one band is dramatically greener — and
              especially if the ground feels <strong>spongy or wet underfoot
              with no recent rain</strong> — it usually means effluent is rising
              too close to the surface because the tank is overfull and solids
              are starting to choke the field. The next stage is standing water
              and the smell of sewage in the yard.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>Urgency: call promptly.</strong> Caught at the
              greener-grass stage, a pump-out often relieves the field before
              it&apos;s permanently damaged. Caught at the standing-sewage stage,
              you may be looking at field repair. This is the difference #3 makes
              — which is why it&apos;s the one not to ignore.
            </p>

            <Image
              src={IMAGES.blogHeroSepticWarningSigns}
              alt="Close-up of a navy-uniformed Brower Inc. technician guiding a green vacuum hose into an open residential septic tank cleanout on a rural Oklahoma property in daylight"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* SIGN 4 */}
            <h2
              id="sign-4"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              4. A Sewage Smell — Inside or Out
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A properly functioning septic system is essentially odorless from
              the living areas of your home. When you start smelling sewage —
              near floor drains and bathrooms indoors, or out around the tank
              lids and drain field — gases that should be venting away are
              instead escaping because the system is backing up or the tank is
              full.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Outdoor sewage odor matters in Oklahoma for a specific reason: the
              state&apos;s rules require that effluent never{" "}
              <em>&quot;surface, pool, or flow across the ground.&quot;</em>{" "}
              Surfacing sewage isn&apos;t just unpleasant — it&apos;s a health
              issue and a potential compliance problem.{" "}
              <strong>Urgency: call now</strong>, especially if the smell comes
              with any sogginess over the field.
            </p>

            {/* SIGN 5 */}
            <h2
              id="sign-5"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              5. Sewage Backing Up Into the House
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the one nobody misses — dark water rising in the lowest
              drains or toilet, often in a basement or first-floor bathroom. By
              the time waste is coming back <em>in</em>, the tank is full and the
              system has nowhere left to put it. It&apos;s the late sign, the
              emergency, and the one that comes with cleanup and risk to the
              drain field.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>Urgency: emergency — stop adding water and call
              immediately.</strong> Don&apos;t run more laundry or dishes hoping
              it clears; you&apos;re only adding to what has nowhere to go.{" "}
              <Link
                href="/services/septic-services"
                className="text-primary hover:underline"
              >
                Emergency septic service
              </Link>{" "}
              is available, but the goal of this whole article is to help you
              never get here.
            </p>

            <blockquote className="mt-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;The backups we get called to at midnight almost always
                started as a slow drain somebody ignored months earlier. Nobody
                wants to spend money on a tank that &apos;seems fine.&apos; But a
                scheduled pump is a couple hundred bucks and an hour of my time.
                A backed-up house and a dead drain field is a different
                conversation entirely.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                — Troy Brower, Owner | Brower Inc. | Newkirk, OK
              </p>
            </blockquote>

            {/* H2: COST */}
            <h2
              id="cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The $400 vs. $15,000 Math
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The reason these signs are worth taking seriously is the brutal
              cost asymmetry between catching a problem early and catching it
              late:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What you&apos;re paying for
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      When
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Scheduled tank pump-out
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      On the early signs
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $300–$650
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Emergency / after-hours pump after a backup
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      On the late signs
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $450–$900+
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Drain field repair / partial replacement
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      After the field clogs
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $3,000–$15,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Full system replacement
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      After total failure
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $10,000–$25,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              That&apos;s the whole argument in one table. The homeowners who get
              the five-figure bill are almost never careless people — they&apos;re
              people who &quot;never had a problem,&quot; so they never pumped,
              right up until the field was already gone. For the full breakdown of
              what a pump-out actually costs and the factors that move the price,
              see our{" "}
              <Link
                href="/blog/septic-tank-pumping-cost-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma septic tank pumping cost guide
              </Link>
              .
            </p>

            {/* H2: OKLAHOMA */}
            <h2
              id="oklahoma"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Why Oklahoma Soil Raises the Stakes
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you live on rural property in Kay, Garfield, Noble, or Logan
              County, your drain field has less margin for error than the same
              system would in sandy soil. Much of north-central Oklahoma sits on
              <strong> dense red clay</strong> that drains slowly to begin with.
              When a tank is overdue and pushes solids into a clay-bound field,
              that field clogs faster and recovers slower than it would in
              looser ground — which is precisely why so many local homes run{" "}
              <Link
                href="/blog/aerobic-septic-system-oklahoma"
                className="text-primary hover:underline"
              >
                aerobic systems with spray dispersal
              </Link>{" "}
              instead of a conventional buried field.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Oklahoma&apos;s seasons add their own pressure. Heavy spring rain
              saturates the soil and leaves the field with nowhere to send water;
              hard winter freezes slow absorption further. A tank that&apos;s
              already near capacity going into a wet April is the one that
              surfaces. The takeaway: in Oklahoma clay, pump toward the{" "}
              <em>shorter</em> end of the 3–5 year window, not the longer one.
            </p>

            {/* H2: HOW OFTEN */}
            <h2
              id="how-often"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Often Should You Actually Pump?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Signs are the backstop, not the schedule. The goal is to pump{" "}
              <em>before</em> any sign shows up. General guidance for Oklahoma:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Conventional tank:</strong> every 3–5 years for an
                average household.
              </li>
              <li>
                <strong>Aerobic system:</strong> every 2–4 years (the
                pretreatment chamber fills faster).
              </li>
              <li>
                <strong>Larger household or daily garbage-disposal use:</strong>{" "}
                lean to the shorter end.
              </li>
              <li>
                <strong>Smaller tank or part-time/seasonal home:</strong> you
                may stretch the interval — but verify with a sludge check, not a
                guess.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The right move is to have the sludge depth measured at each service
              visit so the next pump is scheduled on data, not on a backup. For
              the complete homeowner routine — what to flush, what to never
              flush, and seasonal care — pair this with our{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma septic system maintenance guide
              </Link>
              .
            </p>

            {/* H2: HOW WE HELP */}
            <h2
              id="how-we-help"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How Brower Inc. Helps
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ve been pumping and servicing septic systems across
              northern Oklahoma since 1980 — conventional tanks, aerobic systems,
              commercial tanks, and grease traps. When you call us about any of
              the signs above, here&apos;s what you get:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>A DEQ-licensed pumper</strong> — not a general hauler —
                who can tell you whether it&apos;s a simple pump or something
                more.
              </li>
              <li>
                <strong>Flat all-in pricing</strong> — pump, rinse, inspection,
                and DEQ-compliant disposal in one number, quoted before we come
                out.
              </li>
              <li>
                <strong>No mileage surcharge</strong> inside our 14 Oklahoma and
                6 Kansas counties — rural addresses included.
              </li>
              <li>
                <strong>An honest read on the tank, baffles, and field</strong>{" "}
                while we&apos;re on site, so small problems get caught early.
              </li>
              <li>
                <strong>A recommended next-pump date in writing</strong>, so you
                never have to guess again.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Headquartered in Newkirk, we run daily routes through{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay County
              </Link>{" "}
              and across north-central Oklahoma and southern Kansas. Buying or
              selling a place with a septic system? A{" "}
              <Link
                href="/services/septic-inspections"
                className="text-primary hover:underline"
              >
                septic inspection
              </Link>{" "}
              tells you exactly what condition it&apos;s in before you sign.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Caught a warning sign? Get it pumped before it becomes a backup."
                description={`Tell us your address and we'll quote pump + inspection + DEQ disposal in one flat number — no mileage surcharge inside our 20-county service area. Call ${PHONE} or send us the details and we'll get you on the schedule.`}
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
              Don&apos;t Wait for the Backup
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A septic system gives you plenty of warning before it fails — slow
              drains, a gurgle, a too-green patch of grass, a faint smell. None
              of those are the disaster; they&apos;re the chance to avoid one.
              The homeowners who keep their systems running for thirty years are
              simply the ones who treat a slow drain as a phone call instead of a
              shrug.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk, fully DEQ-licensed, and
              pumps and services septic systems across 14 Oklahoma and 6 Kansas
              counties — flat pricing, no surprise fees, and a real person on the
              phone. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a septic service quote
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent
            slug="signs-septic-tank-needs-pumping-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
