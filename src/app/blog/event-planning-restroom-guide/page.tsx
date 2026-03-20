import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How Many Portable Restrooms for an Outdoor Event? | Brower Inc.",
  description:
    "Calculate the right number of portable restrooms for weddings, festivals, and outdoor events in Oklahoma. Practical guide from Brower Inc.",
  alternates: { canonical: "/blog/event-planning-restroom-guide" },
};

export default function BlogPost3() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: "Event Planning Restroom Guide", href: "/blog/event-planning-restroom-guide" },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Event Planning
            </span>
            <time dateTime="2025-02-10">February 10, 2025</time>
            <span>3 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            How Many Portable Restrooms Do You Need for an Outdoor Event?
          </h1>

          <div className="mt-4 flex h-64 items-center justify-center rounded-xl bg-gray-100 border border-gray-200">
            <p className="text-gray-500">Featured Image: Outdoor Event Setup</p>
          </div>

          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              One of the most common questions we get at Brower Inc. is &quot;How many portable
              restrooms do I need?&quot; The answer depends on several factors including guest
              count, event duration, and whether food and beverages are served.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Quick Reference Guide</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-900">Guests</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-900">4-Hour Event</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-900">8-Hour Event</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-3 text-gray-700">50</td><td className="px-4 py-3 text-gray-700">1-2</td><td className="px-4 py-3 text-gray-700">2-3</td></tr>
                  <tr><td className="px-4 py-3 text-gray-700">100</td><td className="px-4 py-3 text-gray-700">2-3</td><td className="px-4 py-3 text-gray-700">4-5</td></tr>
                  <tr><td className="px-4 py-3 text-gray-700">200</td><td className="px-4 py-3 text-gray-700">4-5</td><td className="px-4 py-3 text-gray-700">7-8</td></tr>
                  <tr><td className="px-4 py-3 text-gray-700">500</td><td className="px-4 py-3 text-gray-700">10-12</td><td className="px-4 py-3 text-gray-700">15-18</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Factors That Increase Needs</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Alcohol being served (increase by 20-30%)</li>
              <li>Events longer than 4 hours</li>
              <li>Limited or no permanent restroom access nearby</li>
              <li>High proportion of female guests</li>
              <li>Hot weather (increased hydration = more restroom use)</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Upgrade Options</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For weddings and upscale events, consider our{" "}
              <Link href="/services/vip-shower-restroom-trailers" className="text-primary hover:underline">
                VIP restroom trailers
              </Link>
              . They provide a premium experience with climate control, flushing toilets, and
              elegant interiors. Pair with{" "}
              <Link href="/services/hand-washing-stations" className="text-primary hover:underline">
                hand washing stations
              </Link>{" "}
              for complete guest comfort.
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-gray-50 border border-gray-200 p-6">
            <p className="font-semibold text-gray-900">Not sure how many you need?</p>
            <p className="mt-1 text-sm text-gray-600">
              Call us and we will give you a personalized recommendation based on your event details.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
