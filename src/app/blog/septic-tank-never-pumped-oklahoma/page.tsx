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
  title: "My Septic Tank Hasn't Been Pumped in 12 Years — Am I in Trouble?",
  description:
    "Haven't pumped your septic tank in 10, 12, or 20 years? Here's the honest answer on whether you've already damaged it, how to tell today, and the $400-vs-$20,000 math — from a DEQ-licensed Oklahoma pumper.",
  alternates: {
    canonical: "/blog/septic-tank-never-pumped-oklahoma",
  },
  openGraph: {
    title:
      "My Septic Tank Hasn't Been Pumped in 12 Years — Am I Already in Trouble?",
    description:
      "The honest answer for Oklahoma homeowners who've gone years without pumping — whether the damage is done, how to check today, and what it costs to catch it early vs. late.",
    type: "article",
    url: "/blog/septic-tank-never-pumped-oklahoma",
    images: [
      {
        url: "/images/brower-inc-septic-tank-never-pumped-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Branded white-and-red Brower Inc. vacuum septic pump truck parked beside a weathered rural north-central Oklahoma farmhouse at midday, a navy-uniformed technician lifting the lid on a long-neglected backyard septic tank cleanout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "My Septic Tank Hasn't Been Pumped in 12 Years — Am I Already in Trouble?",
    description:
      "Years without pumping doesn't automatically mean disaster — but here's how to tell which side of the line you're on before it costs you five figures.",
    images: [
      "/images/brower-inc-septic-tank-never-pumped-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question:
      "Is it too late if my septic tank hasn't been pumped in 12 years?",
    answer:
      "Not necessarily. A tank that's gone 12 years may simply be overdue and fine after a pump — or the solids may already have reached the drain field and started clogging it. You can't know which from the surface, and neither can anyone else without looking. The right move is a pump-out with an inspection of the sludge level, baffles, and outlet: if the field is still healthy, you've caught it in time; if it's struggling, catching it now is still far cheaper than waiting for it to fail completely.",
  },
  {
    question: "My neighbor never pumped his tank in 40 years — why should I?",
    answer:
      "Two reasons. First, survivorship talk is misleading — you hear about the tank that lasted 40 years, not the neighbors who replaced a $15,000 drain field quietly. Second, north-central Oklahoma's dense clay soil gives a drain field far less margin than sandy ground, so a neglected tank here clogs the field faster. A pump every 3–5 years is a couple hundred dollars; a failed field is five figures. The math isn't close.",
  },
  {
    question: "What actually happens inside a septic tank you never pump?",
    answer:
      "Solids settle to the bottom as sludge and grease floats up as scum, while the clear water in the middle flows out to the drain field. Pumping removes that sludge and scum. Skip it long enough and the solids build up until there's no room left — so they wash out with the water and clog the soil in the drain field. Once the field can't absorb water, you're no longer looking at a pump; you're looking at digging up and replacing the field.",
  },
  {
    question:
      "How can I tell if my old septic tank has already damaged the drain field?",
    answer:
      "Watch for slow drains throughout the house, gurgling toilets, a strip of grass over the field that's suddenly greener or soggy with no rain, sewage odor around the tank or field, or backups into the lowest drains. Any of those means the system is already straining. But the field can be partway compromised with no obvious symptom yet — which is exactly why a pump plus inspection is the only way to know for certain.",
  },
  {
    question: "How much does it cost to pump a long-overdue septic tank?",
    answer:
      "A scheduled pump-out in Oklahoma typically runs about $300–$650 depending on tank size and access. An older, heavily loaded tank can take longer and cost a little more if the sludge is compacted, but it's still in the hundreds. Compare that to $3,000–$15,000 for drain field repair or $10,000–$25,000+ for a full system replacement, and the case for pumping an overdue tank now makes itself. Brower Inc. quotes flat all-in pricing before we come out.",
  },
  {
    question:
      "Can Brower Inc. pump and inspect a neglected septic tank in north-central Oklahoma?",
    answer:
      "Yes. Brower Inc. is a DEQ-licensed septic pumper based in Newkirk. On an overdue tank we pump it out, rinse it, and inspect the sludge level, baffles, and outlet so you get a straight answer on whether the field is still healthy — plus a recommended next-pump date in writing. We serve 14 Oklahoma and 6 Kansas counties with no mileage surcharge inside our service area. Call (580) 747-6206 with your address.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "breathe", label: "First, Take a Breath" },
  { id: "what-happens", label: "What's Actually Happening in There" },
  { id: "myth", label: "The '40 Years, No Problem' Myth" },
  { id: "how-to-tell", label: "How to Tell Which Situation You're In" },
  { id: "cost", label: "The $400 vs. $20,000 Math" },
  { id: "oklahoma", label: "Why Oklahoma Clay Raises the Stakes" },
  { id: "what-to-do", label: "What to Actually Do First" },
  { id: "how-we-help", label: "How Brower Inc. Helps" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Septic Tank Never Pumped — Am I in Trouble?",
    href: "/blog/septic-tank-never-pumped-oklahoma",
  },
];

export default function SepticTankNeverPumpedPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "My Septic Tank Hasn't Been Pumped in 12 Years — Am I Already in Trouble?",
              description:
                "The honest answer for Oklahoma homeowners who've gone years without pumping a septic tank — whether the damage is already done, how to tell today, the cost of catching it early vs. late, and why clay soil raises the stakes.",
              slug: "septic-tank-never-pumped-oklahoma",
              datePublished: "2026-07-13",
              image:
                "https://browerinc.net/images/brower-inc-septic-tank-never-pumped-oklahoma-blog-cover-newkirk-ok.webp",
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
            <time dateTime="2026-07-13">July 13, 2026</time>
            <span>8 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            My Septic Tank Hasn&apos;t Been Pumped in 12 Years — Am I Already in
            Trouble?
          </h1>

          <Image
            src={IMAGES.blogCoverSepticNeverPumped}
            alt="Branded white-and-red Brower Inc. vacuum septic pump truck parked beside a weathered rural north-central Oklahoma farmhouse at midday, a navy-uniformed technician lifting the lid on a long-neglected backyard septic tank cleanout"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Maybe you just bought the place and the previous owner &quot;thinks
              it was done a while back.&quot; Maybe you&apos;ve lived there for
              years, everything drains fine, and it hit you at 11pm that you have
              genuinely never had the tank pumped. Either way you&apos;re here
              typing some version of the same anxious question:{" "}
              <em>&quot;It&apos;s been over a decade — did I already wreck
              it?&quot;</em>
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here&apos;s the straight answer, from a DEQ-licensed pumper who
              opens neglected tanks across north-central Oklahoma every week:
              going years without pumping does <strong>not</strong> automatically
              mean the system is ruined — but it does mean you&apos;re rolling
              dice you can stop rolling today. This post explains what&apos;s
              actually happening down there, how to tell which situation
              you&apos;re in, and why a{" "}
              <Link
                href="/services/septic-tank-pumping"
                className="text-primary hover:underline"
              >
                septic tank pumping
              </Link>{" "}
              right now is the cheapest insurance you&apos;ll ever buy.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                A tank that&apos;s gone 12 years is badly overdue but{" "}
                <strong>not automatically damaged</strong>. One of two things is
                true: it&apos;s simply full and fine after a pump, or solids have
                already reached the drain field and started clogging it — and you
                can&apos;t tell which from the surface. The fix is the same either
                way: <strong>get it pumped and inspected now</strong>. If the
                field&apos;s healthy, you caught it. If it&apos;s struggling,
                catching it today still beats a $15,000 replacement later.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Not sure how bad it is? That&apos;s exactly what an inspection
                answers.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. is a DEQ-licensed pumper in Newkirk. We pump, rinse,
                and read the tank in one visit — flat all-in pricing, no mileage
                surcharge inside our 20-county service area.
              </p>
              <Link
                href="/services/septic-tank-pumping"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See Septic Pumping →
              </Link>
            </div>

            {/* H2: BREATHE */}
            <h2
              id="breathe"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              First, Take a Breath — 12 Years Isn&apos;t Automatically a Disaster
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The panic usually comes from a half-remembered rule (&quot;pump
              every three years or else&quot;) colliding with the realization
              that you blew past it years ago. So let&apos;s reset the fear: the
              3–5 year schedule is a <em>maintenance</em> target designed to keep
              you comfortably ahead of trouble, not a doomsday clock where the
              tank self-destructs at year six.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Plenty of tanks that went a decade between pumps come back to full
              health after one service, because they were never overloaded enough
              to push solids into the field. Others that went the same twelve
              years are already in trouble — a big household, a garbage disposal
              running daily, an undersized tank. The number of years is a warning
              flag, not a verdict. What matters is what the solids have been doing
              the whole time.
            </p>

            {/* H2: WHAT HAPPENS */}
            <h2
              id="what-happens"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What&apos;s Actually Happening in There
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A septic tank does something quietly clever: solids sink to the
              bottom as <strong>sludge</strong>, grease and lighter matter float
              on top as <strong>scum</strong>, and the relatively clear water in
              the middle flows out to the drain field to soak safely into the
              soil. Pumping exists to remove that bottom sludge and top scum
              before they build up too far.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Skip pumping long enough and the sludge layer keeps rising until
              there&apos;s no settling room left. Now solids get carried out with
              the water and into the drain field, where they{" "}
              <strong>clog the soil&apos;s ability to absorb</strong>. That&apos;s
              the whole ballgame. The tank is cheap to empty; the field is
              expensive to replace. Every extra year without pumping is another
              year the sludge line creeps toward the outlet. As the{" "}
              <a
                href="https://www.epa.gov/septic/how-care-your-septic-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EPA&apos;s septic guidance
              </a>{" "}
              puts it, routine pumping is the single cheapest thing you can do to
              keep the entire system alive.
            </p>

            {/* H2: MYTH */}
            <h2
              id="myth"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The &quot;My Neighbor Never Pumped in 40 Years&quot; Myth
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every rural county has this legend, and it&apos;s the single most
              expensive piece of advice in septic ownership. Someone always knows
              a place that &quot;never got pumped and never had a problem.&quot;
              Two things are going on. First, it&apos;s survivorship bias — you
              hear about the tank that beat the odds, never about the three
              neighbors who quietly wrote a $12,000–$18,000 check for a new drain
              field and didn&apos;t brag about it at the co-op.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Second, and more important here: soil is destiny. A tank in loose
              sandy ground has a very forgiving drain field. A tank in the{" "}
              <strong>dense red clay</strong> that covers much of Kay, Garfield,
              Noble, and Logan counties does not. Same neglect, very different
              outcome. Betting your field on a story about someone else&apos;s
              dirt is how the &quot;I never had a problem&quot; homeowner becomes
              the &quot;I can&apos;t believe it was $15,000&quot; homeowner.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Been more than five years — or you honestly don&apos;t know?
              </p>
              <p className="mt-2 text-gray-300">
                That&apos;s reason enough to pump and get eyes on the tank. Brower
                Inc. runs daily septic routes across 14 Oklahoma and 6 Kansas
                counties, and we&apos;ll tell you straight whether it&apos;s a
                simple pump or something more.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: HOW TO TELL */}
            <h2
              id="how-to-tell"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              How to Tell Which Situation You&apos;re In (Today)
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              You can&apos;t confirm the field&apos;s condition without opening
              the tank, but your house and yard will tell you how urgent it is
              right now. Walk through this quick read:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Multiple slow drains at once</strong> — kitchen, tub, and
                laundry all sluggish together points at the tank, not a single
                clog.
              </li>
              <li>
                <strong>Gurgling toilets</strong> when you run water elsewhere —
                air being forced back because waste can&apos;t leave fast enough.
              </li>
              <li>
                <strong>A greener or soggy strip of grass</strong> over the drain
                field with no recent rain — effluent surfacing because the tank
                is overfull. (The sign people wrongly read as &quot;good.&quot;)
              </li>
              <li>
                <strong>Sewage odor</strong> near the tank lids, the field, or
                indoors.
              </li>
              <li>
                <strong>Any backup</strong> into the lowest drains — the late,
                do-not-wait sign.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Zero symptoms is good news but not a green light — it usually means
              you&apos;ve caught it in the overdue-but-okay window, which is
              exactly when a pump is cheapest and most effective. Any symptoms and
              you&apos;re into &quot;call promptly&quot; territory. We break each
              of these down in{" "}
              <Link
                href="/blog/signs-septic-tank-needs-pumping-oklahoma"
                className="text-primary hover:underline"
              >
                the 5 warning signs your septic tank needs pumping
              </Link>
              .
            </p>

            <Image
              src={IMAGES.blogHeroSepticNeverPumped}
              alt="Close-up of a navy-uniformed Brower Inc. technician measuring the thick sludge layer in an overfull residential septic tank with a sludge-depth stick on a rural Oklahoma property in daylight"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* H2: COST */}
            <h2
              id="cost"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The $400 vs. $20,000 Math
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is why a long-overdue tank is worth acting on the day you think
              of it. The gap between catching it early and catching it late
              isn&apos;t 20% — it&apos;s two orders of magnitude:
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
                      Overdue tank pump-out + inspection
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Before the field is damaged
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      $300–$650
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      Emergency pump after a backup
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Once it surfaces or backs up
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
              A pump on an overdue tank is a few hundred dollars and an hour. The
              only way that number ever becomes a five-figure one is by waiting
              until the field is already gone. For the full breakdown of what
              moves the price, see our{" "}
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
              Why Oklahoma Clay Raises the Stakes
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If your place sits on rural ground in{" "}
              <Link
                href="/service-areas/kay-county"
                className="text-primary hover:underline"
              >
                Kay County
              </Link>{" "}
              or anywhere across north-central Oklahoma, your drain field is
              probably working in dense red clay that drains slowly to begin with.
              A neglected tank that starts pushing solids into a clay-bound field
              clogs it faster and lets it recover slower than the same mistake
              would in sandy soil. That&apos;s a big reason so many local homes
              run{" "}
              <Link
                href="/blog/aerobic-septic-system-oklahoma"
                className="text-primary hover:underline"
              >
                aerobic systems with spray dispersal
              </Link>{" "}
              instead of a conventional buried field.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              There&apos;s a regulatory angle too. Septic systems in Oklahoma are
              overseen by the <strong>DEQ</strong> — the state, not your county —
              and the rules require that effluent never{" "}
              <em>&quot;surface, pool, or flow across the ground.&quot;</em> A
              badly overdue tank that surfaces sewage in the yard isn&apos;t just
              a mess; it can become a compliance problem on top of a repair bill.
              Pumping on schedule keeps you clear of both.
            </p>

            {/* H2: WHAT TO DO */}
            <h2
              id="what-to-do"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What to Actually Do First
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Stop stress-Googling and schedule a pump-out.</strong>{" "}
                It&apos;s the same first step whether the tank is fine or failing,
                so there&apos;s nothing to decide.
              </li>
              <li>
                <strong>Ask for an inspection with the pump.</strong> A good
                pumper reads the sludge depth, checks the baffles, and looks at
                whether the outlet is passing clean — that&apos;s how you learn
                the field&apos;s real condition.
              </li>
              <li>
                <strong>Ease off the water until it&apos;s done</strong> if
                you&apos;re seeing any symptoms — skip the extra laundry loads and
                long showers so you&apos;re not adding to a full tank.
              </li>
              <li>
                <strong>Get a next-pump date in writing.</strong> Once you know
                the sludge level, you can schedule on data instead of guessing for
                another decade.
              </li>
            </ol>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you just bought the property, this doubles as your baseline: for
              the whole homeowner routine — what to flush, what to never flush,
              and seasonal care — pair this with our{" "}
              <Link
                href="/blog/septic-system-maintenance-oklahoma"
                className="text-primary hover:underline"
              >
                Oklahoma septic system maintenance guide
              </Link>
              .
            </p>

            <blockquote className="mt-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;People are scared to call because they think I&apos;m going
                to tell them they ruined a twelve-year-old tank. Most of the time
                I don&apos;t — we pump it, I check the field, and they&apos;re
                fine. The ones who wait another two years hoping it sorts itself
                out are the ones I end up quoting a new drain field. Calling early
                is almost never the expensive mistake.&quot;
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
              How Brower Inc. Helps
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ve been pumping and servicing septic systems across northern
              Oklahoma since 1980 — including plenty of tanks nobody had touched in
              a decade or two. When you call us about an overdue system,
              here&apos;s what you get:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>A DEQ-licensed pumper</strong> — not a general hauler —
                who can tell whether it&apos;s a simple pump or the field&apos;s in
                trouble.
              </li>
              <li>
                <strong>Pump, rinse, and inspection in one visit</strong>, so you
                get a real read on the sludge level, baffles, and outlet.
              </li>
              <li>
                <strong>Flat all-in pricing</strong> quoted before we come out —
                pump, rinse, and DEQ-compliant disposal in one number.
              </li>
              <li>
                <strong>No mileage surcharge</strong> inside our 14 Oklahoma and 6
                Kansas counties — rural addresses included.
              </li>
              <li>
                <strong>A recommended next-pump date in writing</strong>, so
                you&apos;re never guessing again.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Buying or selling a place with an unknown septic history? A{" "}
              <Link
                href="/services/septic-inspections"
                className="text-primary hover:underline"
              >
                septic inspection
              </Link>{" "}
              tells you exactly what condition the system is in before you sign —
              far cheaper than inheriting someone else&apos;s neglect.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Overdue tank? Get it pumped and inspected before it's a drain field."
                description={`Tell us your address and we'll quote pump + inspection + DEQ disposal in one flat number — no mileage surcharge inside our 20-county service area. Call ${PHONE} or send the details and we'll get you on the schedule.`}
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
              The Cheapest Day to Pump Was Years Ago. The Second Cheapest Is
              Today.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Twelve years without a pump is a reason to call, not a reason to
              despair. The vast majority of overdue tanks are still saveable — but
              only for as long as the drain field holds, and nobody can tell you
              how long that is without looking. The homeowners who keep their
              systems running for decades aren&apos;t the ones who never made a
              mistake; they&apos;re the ones who fixed it the moment they realized.
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
            slug="septic-tank-never-pumped-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
