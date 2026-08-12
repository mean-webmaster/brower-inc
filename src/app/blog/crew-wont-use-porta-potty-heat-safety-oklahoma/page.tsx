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
  title: "Crew Won't Use the Porta Potty in the Heat? That's a Safety Problem",
  description:
    "When workers avoid a foul jobsite restroom they stop drinking water — in a 105°F Oklahoma heat index that becomes a heat-illness risk. What OSHA actually enforces in 2026, and how to fix it.",
  alternates: {
    canonical: "/blog/crew-wont-use-porta-potty-heat-safety-oklahoma",
  },
  openGraph: {
    title:
      "Your Crew Stopped Drinking Water to Avoid the Porta Potty. In 105° Heat, That's a Safety Problem.",
    description:
      "Workers who won't use a filthy jobsite restroom start rationing water instead. Here's the evidence, what OSHA can actually cite you for in 2026, and the fix that costs less than one inspection.",
    type: "article",
    url: "/blog/crew-wont-use-porta-potty-heat-safety-oklahoma",
    images: [
      {
        url: "/images/brower-inc-crew-wont-use-porta-potty-heat-safety-oklahoma-blog-cover-newkirk-ok.webp",
        width: 1600,
        height: 900,
        alt: "Construction workers taking a water break in the shade of a site trailer on a sun-baked north-central Oklahoma jobsite in intense summer heat, with a clean blue Brower Inc. portable restroom standing across the bare dirt lot nearby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Your Crew Stopped Drinking Water to Avoid the Porta Potty — That's a Heat-Safety Problem",
    description:
      "The sanitation problem nobody connects to heat illness, what OSHA actually enforces in 2026 (the heat standard is not final), and how to fix it.",
    images: [
      "/images/brower-inc-crew-wont-use-porta-potty-heat-safety-oklahoma-blog-cover-newkirk-ok.webp",
    ],
  },
};

const FAQS = [
  {
    question:
      "Is there a federal OSHA heat standard I have to comply with right now?",
    answer:
      "No — not a dedicated heat standard. As of July 2026 OSHA's Heat Injury and Illness Prevention rule (RIN 1218-AD39) is still at the proposed stage. The comment period closed in January 2025 and hearings wrapped in mid-2025, but the Unified Agenda projects a supplemental proposal in December 2026 and a final rule no earlier than October 2027. Anyone telling you a federal heat standard is in force today is wrong. What is enforceable right now is OSHA's National Emphasis Program on heat, renewed and expanded on April 10, 2026, plus the General Duty Clause — and neither Oklahoma nor Kansas has its own state heat standard, so federal enforcement applies directly.",
  },
  {
    question:
      "Can OSHA really cite me over a dirty porta potty on my jobsite?",
    answer:
      "Yes. 29 CFR 1926.51 requires toilet facilities in a sanitary condition, and OSHA's own interpretation is that a toilet in an unsanitary condition has not been 'provided' at all. That means having the correct number of units on site does not protect you if they are foul — the count and the condition are both part of the requirement. Worth knowing: 1926.51 sets no service frequency. It's a performance standard, so the interval is whatever it takes to keep the unit sanitary, which in an Oklahoma July is more often than in April.",
  },
  {
    question:
      "How many portable toilets does OSHA require on a construction site?",
    answer:
      "Under 29 CFR 1926.51(c)(1): 20 or fewer employees requires one toilet; more than 20 requires one toilet seat plus one urinal per 40 workers; and 200 or more requires one toilet seat plus one urinal per 50 workers. The widely repeated 'one per 10 workers' figure is an industry rule of thumb from the ANSI/PSAI Z4.3 standard, not the OSHA minimum — the two get blurred together constantly. We walk through the full count in our Oklahoma jobsite calculator.",
  },
  {
    question:
      "Does OSHA require a hand washing station with every construction porta potty?",
    answer:
      "Not universally, and this is commonly misstated. The handwashing requirement in 29 CFR 1926.51(f) applies to employees engaged in the application of paints, coatings, herbicides, or insecticides. Plenty of competitor blogs claim OSHA mandates handwashing at every construction toilet — that overstates the rule. That said, providing soap and water is good practice and a real hygiene benefit for any crew, and in agriculture the separate standard at 29 CFR 1928.110 does require handwashing facilities for employers of 11 or more hand-laborers.",
  },
  {
    question:
      "Do workers actually avoid drinking water because of bad restrooms?",
    answer:
      "The pattern is well documented in heat-exposed and shift-based work. In the TUC's Toilets at Work survey of 4,126 UK workers, respondents described deliberately not drinking during shifts because facilities were inadequate. A peer-reviewed study of 312 women workers in brick, steel, and agricultural work found that those restricting fluids to under a litre per shift had roughly four times the risk of urogenital problems, and that lacking toilet access carried about six times the odds. There is no US construction-specific study on this exact link, so we won't claim one — but the mechanism is consistent across sectors, and the consequence in a 105°F Oklahoma heat index is heat illness.",
  },
  {
    question:
      "How often should porta potties be serviced on an Oklahoma summer jobsite?",
    answer:
      "Once a week is a fair-weather baseline for a lightly used unit. On a busy summer jobsite, or anything serving more than roughly ten workers, twice a week is the practical standard, and high-traffic or 24/7 sites need more. To be straight with you: this is our professional recommendation based on running routes through north-central Oklahoma summers, not an OSHA or ANSI requirement — the regulation sets a sanitary-condition outcome, not an interval. Brower Inc. sets frequency to your headcount and the forecast rather than a fixed route. Call (580) 747-6206 with your site details.",
  },
];

const TOC_ITEMS = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-happens", label: "What Actually Happens on Site" },
  { id: "evidence", label: "The Evidence It's Real" },
  { id: "osha-2026", label: "What OSHA Enforces in 2026" },
  { id: "sanitary", label: "A Filthy Unit Doesn't Count" },
  { id: "the-fix", label: "The Fix Is Cheaper Than One Inspection" },
  { id: "how-we-help", label: "How Brower Inc. Handles It" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Crew Avoiding the Porta Potty in Heat",
    href: "/blog/crew-wont-use-porta-potty-heat-safety-oklahoma",
  },
];

export default function CrewWontUsePortaPottyHeatSafetyPage() {
  return (
    <>
      <BlogTableOfContents items={TOC_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            getArticleSchema({
              title:
                "Your Crew Stopped Drinking Water to Avoid the Porta Potty. In 105° Heat, That's a Safety Problem.",
              description:
                "Why workers ration water rather than use a foul jobsite restroom, what OSHA actually enforces on heat and sanitation in 2026, and how Oklahoma contractors fix it.",
              slug: "crew-wont-use-porta-potty-heat-safety-oklahoma",
              datePublished: "2026-07-20",
              image:
                "https://browerinc.net/images/brower-inc-crew-wont-use-porta-potty-heat-safety-oklahoma-blog-cover-newkirk-ok.webp",
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
              Construction &amp; Jobsite Compliance
            </span>
            <time dateTime="2026-07-20">July 20, 2026</time>
            <span>9 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Your Crew Stopped Drinking Water to Avoid the Porta Potty. In 105°
            Heat, That&apos;s a Safety Problem.
          </h1>

          <Image
            src={IMAGES.blogCoverCrewHeatSafety}
            alt="Construction workers taking a water break in the shade of a site trailer on a sun-baked north-central Oklahoma jobsite in intense summer heat, with a clean blue Brower Inc. portable restroom standing across the bare dirt lot nearby"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-6 aspect-video w-full rounded-xl object-cover"
            preload
          />

          {/* HOOK */}
          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nobody on your crew is going to walk up and say{" "}
              <em>&quot;I&apos;ve stopped drinking water because the toilet is
              disgusting.&quot;</em> What you see instead is quieter: the cooler
              barely goes down all afternoon, two guys are making a long run to
              the gas station mid-morning, and somebody who&apos;s been fine all
              season gets dizzy at 3pm and has to sit in a truck with the A/C
              running.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Those things are connected, and the connection is one almost
              nobody in this industry writes about. A restroom bad enough that
              people avoid it doesn&apos;t just cost you comfort and billable
              minutes — in an Oklahoma July it quietly pushes your crew toward
              dehydration, which is the front end of heat illness. This post
              lays out what&apos;s actually documented, what OSHA can and
              can&apos;t cite you for in 2026 (there&apos;s a lot of bad
              information going around), and what the fix actually costs.
            </p>

            {/* QUICK ANSWER */}
            <div
              id="quick-answer"
              className="mt-8 scroll-mt-24 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
            >
              <p className="font-semibold text-gray-900">Quick Answer</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Workers in heat-exposed trades ration fluids when restrooms are
                inadequate — it&apos;s documented in survey and peer-reviewed
                research, and the downstream risk in a{" "}
                <strong>105°F Oklahoma heat index</strong> is heat illness. On
                the compliance side, the federal{" "}
                <strong>heat standard is not final</strong> — it&apos;s still a
                proposed rule, with a final version projected no earlier than
                October 2027. What <em>is</em> enforceable today is OSHA&apos;s
                heat National Emphasis Program, renewed{" "}
                <strong>April 10, 2026</strong> for five years, plus the General
                Duty Clause and the sanitation rule at 29 CFR 1926.51 — under
                which a toilet in an <em>unsanitary condition</em> counts as not
                provided at all.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="font-semibold text-gray-900">
                Unit bad enough that your guys are driving off-site?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Brower Inc. sets service frequency to your headcount and the
                forecast, restocks every visit, and documents each stop —
                locally owned in Newkirk, real person on the phone.
              </p>
              <Link
                href="/services/long-term-rentals"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                See Long-Term Jobsite Rentals →
              </Link>
            </div>

            {/* H2: WHAT HAPPENS */}
            <h2
              id="what-happens"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What Actually Happens on Site
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The behavior chain is simple and it runs the same way on almost
              every site. The unit gets unpleasant. People start putting off
              using it. Putting it off is easier if you&apos;re not drinking
              much. So the water intake drops — not as a decision anybody makes
              out loud, just as the path of least resistance. And in
              north-central Oklahoma in July, reduced fluid intake in direct sun
              is precisely the condition that produces heat exhaustion.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A worker on a building site in Leyton described the underlying
              problem about as plainly as it can be put:
            </p>
            <blockquote className="mt-6 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;The portaloos are serviced once a week and they are OK for
                about two days before they become full and unusable.&quot;
              </p>
              <p className="mt-3 text-sm text-gray-500">
                — building site worker, via{" "}
                <em>Hazards</em> magazine
              </p>
            </blockquote>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Two usable days out of seven. That&apos;s not a complaint about
              luxury — it&apos;s a description of a facility that exists on
              paper and not in practice for most of the week. And this is not an
              isolated gripe: a SafeWork SA audit of{" "}
              <strong>168 building sites</strong> found{" "}
              <strong>90 sites</strong> without clean, hygienic, convenient
              toilets, <strong>13 with none at all</strong>, 39% not being
              regularly cleaned, and 64% with little to no soap. The regulator
              issued 103 improvement notices, and noted that 88% of the failures
              were on residential construction.
            </p>

            {/* H2: EVIDENCE */}
            <h2
              id="evidence"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Evidence That Workers Really Do Ration Water
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We want to be careful here, because this is a place where it would
              be easy to overstate. There is{" "}
              <strong>no US construction-specific study</strong> proving that
              American jobsite workers dehydrate themselves because of bad
              porta potties, and we&apos;re not going to pretend otherwise. What
              exists is consistent evidence of the same behavior across other
              heat-exposed and shift-based occupations:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                In the TUC&apos;s <em>Toilets at Work</em> survey of{" "}
                <strong>4,126 workers</strong>, respondents described
                deliberately not drinking on shift because facilities were
                inadequate — one firefighter put it as{" "}
                <em>
                  &quot;During a night shift I don&apos;t drink as I should as
                  there&apos;s a great lack of facilities at an incident.&quot;
                </em>
              </li>
              <li>
                A peer-reviewed study of <strong>312 women workers</strong> in
                brick, steel, and agricultural work found 64% had no workplace
                toilet, and 87% of those reported genitourinary problems.
                Workers restricting fluids to under a litre per shift carried
                roughly <strong>four times the risk</strong>; lacking toilet
                access carried about <strong>six times the odds</strong> of
                urogenital issues.
              </li>
              <li>
                Heat is already the deadliest end of this. Of{" "}
                <strong>986 occupational heat-related deaths</strong> recorded
                between 1992 and 2022, <strong>334 — about 34% — were in
                construction</strong>. Oklahoma specifically recorded five
                construction heat fatalities between 2011 and 2023.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Read those together and the honest conclusion is not &quot;bad
              toilets kill workers.&quot; It&apos;s narrower and more useful:{" "}
              <strong>
                restroom quality is a lever on hydration behavior, hydration
                behavior is a lever on heat illness, and construction is where
                heat kills most.
              </strong>{" "}
              If you&apos;re already running water, shade, and rest breaks —
              and you should be — a restroom your crew will actually walk into
              is part of the same system, not a separate comfort item.
            </p>

            <Image
              src={IMAGES.blogHeroCrewHeatSafety}
              alt="A navy-uniformed Brower Inc. technician restocking and sanitizing a clean blue portable restroom beside a stocked hand washing station on an Oklahoma construction site under bright summer sun"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />

            {/* H2: OSHA 2026 */}
            <h2
              id="osha-2026"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              What OSHA Actually Enforces on Heat in 2026
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              There is a great deal of confused information circulating about
              this, including from vendors who ought to know better. Here is the
              accurate picture as of July 2026.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              The federal heat standard is not final
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              OSHA&apos;s Heat Injury and Illness Prevention rulemaking (RIN
              1218-AD39) published as a proposed rule in August 2024. The
              comment period closed in January 2025 and the informal public
              hearing ran through July 2025. It remains at the{" "}
              <strong>proposed rule stage</strong>: the Unified Agenda projects
              a supplemental proposal around December 2026 and a{" "}
              <strong>final rule no earlier than October 2027</strong>. If a
              salesperson tells you that you must comply with a federal heat
              standard today, they are either mistaken or selling something.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              For planning purposes, the proposal would trigger at an{" "}
              <strong>80°F heat index</strong> — drinking water at one quart per
              employee per hour, paid rest breaks in cooled areas, and
              acclimatization for new workers&apos; first week — with a{" "}
              <strong>90°F high-heat trigger</strong> adding mandatory paid
              15-minute breaks every two hours plus symptom monitoring. Those
              numbers may shift before anything is final, so treat them as a
              direction of travel rather than a checklist.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              What is enforceable right now
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>The heat National Emphasis Program.</strong> The prior
                NEP expired April 8, 2026 and OSHA replaced it almost
                immediately — the updated program took effect{" "}
                <strong>April 10, 2026</strong>, runs{" "}
                <strong>five years through 2031</strong>, and expands coverage
                to <strong>55 high-risk industries</strong>, up from 33.
                Inspectors ask about heat programs on &quot;heat priority
                days,&quot; defined as a heat index of{" "}
                <strong>80°F or above</strong>.
              </li>
              <li>
                <strong>The General Duty Clause.</strong> With no specific heat
                standard, this is how OSHA cites serious heat hazards — and it
                applies in full here, because{" "}
                <strong>
                  neither Oklahoma nor Kansas has a state heat standard
                </strong>
                . Only California, Oregon, Washington, Nevada, Colorado, and
                Maryland do.
              </li>
              <li>
                <strong>29 CFR 1926.51 — sanitation.</strong> Covered in detail
                in the next section, and the part most directly in your control.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For context on why this matters locally: Oklahoma City recorded
              its <strong>hottest year on record through June 2026</strong>, and
              over the July 4th weekend the OKC forecast hit 101°F with a{" "}
              <strong>105°F heat index</strong>, while Tulsa reached a{" "}
              <strong>109°F heat index</strong>. Both sit well above the NEP&apos;s
              80°F heat-priority threshold. On a day like that, an inspector
              walking your site is not a hypothetical.
            </p>

            {/* MID CTA */}
            <div className="mt-12 rounded-xl bg-gray-900 p-8 text-white">
              <p className="text-lg font-semibold">
                Heat index over 80° and a unit nobody wants to open?
              </p>
              <p className="mt-2 text-gray-300">
                That&apos;s the combination that turns into a complaint. Brower
                Inc. runs documented summer routes across north-central Oklahoma
                and south-central Kansas and can step up your frequency this
                week.
              </p>
              <a
                href="tel:+15807476206"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Call {PHONE}
              </a>
            </div>

            {/* H2: SANITARY */}
            <h2
              id="sanitary"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              Having Enough Units Doesn&apos;t Help If They&apos;re Filthy
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the part contractors most often get wrong. The counts in{" "}
              <strong>29 CFR 1926.51(c)(1)</strong> are straightforward:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>20 or fewer employees</strong> — one toilet.
              </li>
              <li>
                <strong>More than 20</strong> — one toilet seat and one urinal
                per 40 workers.
              </li>
              <li>
                <strong>200 or more</strong> — one toilet seat and one urinal
                per 50 workers.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              But hitting those numbers is only half the requirement. OSHA&apos;s
              own interpretation is that a toilet in an{" "}
              <strong>unsanitary condition</strong> has not been
              &quot;provided&quot; — meaning the right number of foul units can
              still be a violation. Condition is not a courtesy. It is part of
              the standard.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Two more things worth getting right, because competitor content
              routinely misstates both:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>1926.51 sets no service frequency.</strong> It&apos;s a
                performance standard — the interval is whatever keeps the unit
                sanitary. Nobody can honestly tell you &quot;OSHA requires
                weekly service,&quot; because it doesn&apos;t say that.
              </li>
              <li>
                <strong>Handwashing is not universally required</strong> on
                construction sites. The requirement at 1926.51(f) applies to
                employees applying paints, coatings, herbicides, or
                insecticides. It&apos;s still good practice everywhere — and in
                agriculture, 29 CFR 1928.110 does require toilets, potable
                water, and handwashing within a quarter-mile walk for employers
                of 11 or more hand-laborers, at one facility per 20 employees.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The frequently cited &quot;one unit per 10 workers&quot; figure
              comes from the ANSI/PSAI Z4.3 industry standard, not from OSHA —
              the two get blurred together constantly. If you want the counts
              worked out for your headcount, our{" "}
              <Link
                href="/blog/how-many-porta-potties-construction-site-oklahoma"
                className="text-primary hover:underline"
              >
                OSHA porta potty calculator for Oklahoma jobsites
              </Link>{" "}
              runs the math, and{" "}
              <Link
                href="/blog/osha-portable-restroom-requirements-construction-oklahoma"
                className="text-primary hover:underline"
              >
                our OSHA compliance checklist
              </Link>{" "}
              covers the rest of 1926.51.
            </p>

            {/* H2: THE FIX */}
            <h2
              id="the-fix"
              className="mt-12 scroll-mt-24 text-2xl font-bold text-gray-900"
            >
              The Fix Costs Less Than One Bad Afternoon
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              None of this requires a program or a consultant. It requires a
              unit people will walk into, in weather that makes that harder:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Raise the service frequency for summer.</strong> Weekly
                is a fair-weather baseline. Busy sites, or anything above about
                ten workers, realistically want twice a week in July and August.
                We&apos;ll say plainly that this is our recommendation from
                running these routes — not a regulatory requirement.
              </li>
              <li>
                <strong>Put the unit in shade if you possibly can.</strong>{" "}
                Cooler interior, less odor, and a shorter walk means people
                actually use it instead of driving somewhere.
              </li>
              <li>
                <strong>Keep hand sanitizer out of direct sun.</strong> Alcohol
                sanitizer is meant to be stored roughly between 59°F and 86°F;
                heat drives off the alcohol and reduces its effectiveness. A
                bottle cooking on a sun-baked surface all afternoon is doing
                less than you think.
              </li>
              <li>
                <strong>Stock it like you mean it.</strong> Paper, soap or
                sanitizer, and a wiped seat on every visit. The SafeWork SA
                audit found 64% of sites with little to no soap — that&apos;s the
                detail that quietly tells a crew nobody is checking.
              </li>
              <li>
                <strong>Pair it with water and shade.</strong> The restroom is
                one leg of the hydration system. If the water is warm and the
                only shade is a truck cab, fixing the toilet alone won&apos;t
                change behavior.
              </li>
            </ul>

            <blockquote className="mt-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
              <p className="text-gray-700 italic">
                &quot;When a super calls me in July, nine times out of ten it
                isn&apos;t really about the toilet — it&apos;s that his guys are
                disappearing for twenty minutes at a time. You fix the unit and
                the trips to the gas station stop. That&apos;s the whole
                conversation.&quot;
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
              How Brower Inc. Handles Oklahoma Summer Jobsites
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;ve run portable restroom routes through north-central
              Oklahoma summers for decades, and we build the service around the
              conditions rather than a fixed calendar:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                <strong>Frequency set to headcount and forecast</strong> —
                twice-weekly or more on busy summer sites, not a national route
                schedule that never changes.
              </li>
              <li>
                <strong>Documented visits</strong>, so &quot;did anybody
                actually come out?&quot; stops being a question you have to
                argue about.
              </li>
              <li>
                <strong>Full pump, sanitize, and restock every stop</strong> —
                including paper and sanitizer, every time.
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
                where the work calls for them — required for some tasks, good
                practice for all of them.
              </li>
              <li>
                <strong>Placement advice built in</strong> — shade and airflow,
                and close enough that nobody rationalizes a drive.
              </li>
              <li>
                <strong>A real local number</strong> answered by someone who can
                add a visit this week, rather than a 1-800 queue and a
                next-business-day callback. We covered that gap in{" "}
                <Link
                  href="/blog/local-vs-national-portable-restroom-providers-oklahoma"
                  className="text-primary hover:underline"
                >
                  local vs. national providers
                </Link>
                .
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Same standard whether it&apos;s a building site, an{" "}
              <Link
                href="/blog/oil-gas-portable-sanitation-oklahoma"
                className="text-primary hover:underline"
              >
                oilfield lease
              </Link>
              , or a summer event: a unit clean enough that your people will
              actually use it. If yours is already past that line, our{" "}
              <Link
                href="/blog/porta-potty-smells-like-ammonia-summer-oklahoma"
                className="text-primary hover:underline"
              >
                guide to summer ammonia smell
              </Link>{" "}
              walks through diagnosing whether it&apos;s the heat or a provider
              stretching visits.
            </p>

            {/* CTA BANNER */}
            <div className="mt-12">
              <CTABanner
                title="Get a jobsite restroom your crew will actually use this summer."
                description={`Tell us your site, headcount, and how long you'll be there, and we'll set a summer service frequency that keeps the unit sanitary and your crew drinking water. Call ${PHONE} or send the details for a quote.`}
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
              A Restroom Nobody Will Use Isn&apos;t a Restroom
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              You can have the right number of units on site, current on the
              paperwork, and still have a sanitation problem — because the
              measure that matters is whether people will walk in. When they
              won&apos;t, they adapt in ways you don&apos;t see until somebody
              goes down at 3pm on a 105° day.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Brower Inc. is locally owned in Newkirk and services portable
              restrooms across 14 Oklahoma and 6 Kansas counties — summer
              frequency matched to your site, documented visits, and a real
              person on the phone. Call {PHONE} or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                request a jobsite rental quote
              </Link>
              .
            </p>
          </div>
          <BlogRelatedContent
            slug="crew-wont-use-porta-potty-heat-safety-oklahoma"
            className="mt-12"
          />
        </div>
      </article>
    </>
  );
}
