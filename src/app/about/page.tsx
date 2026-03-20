import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Portable Restroom & Septic Company in Oklahoma",
  description:
    "Learn about Brower Inc., a locally owned portable restroom rental and septic services company based in Newkirk, Oklahoma. Proudly serving communities across the state.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About Brower Inc.</h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Brower Inc. is a locally owned and operated portable sanitation company based in
              Newkirk, Oklahoma. We specialize in providing reliable, clean portable restrooms,
              luxury VIP restroom trailers, hand washing stations, and professional septic services
              to communities and businesses throughout Oklahoma.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded with a commitment to quality and customer service, Brower Inc. has grown
              from a small local operation into one of Oklahoma&apos;s trusted portable sanitation
              providers. We understand that sanitation is essential — whether it&apos;s for a
              wedding, a construction project, or a community festival — and we take pride in
              delivering clean, well-maintained units on time, every time.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To provide Oklahoma with the highest quality portable sanitation solutions through
              exceptional service, reliable equipment, and a genuine commitment to our customers
              and communities. We believe everyone deserves access to clean, comfortable restroom
              facilities, no matter the location.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-gray-900">Why Choose Brower Inc.?</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Locally Owned & Operated",
                  text: "We are your neighbors. As a local business, we understand Oklahoma communities and are invested in our region.",
                },
                {
                  title: "Reliable Service",
                  text: "On-time delivery, regular maintenance, and prompt pickup. You can count on us to be there when you need us.",
                },
                {
                  title: "Clean & Well-Maintained",
                  text: "Every unit is thoroughly cleaned and sanitized before delivery. Regular servicing keeps them in top condition.",
                },
                {
                  title: "Flexible Solutions",
                  text: "From single-day events to multi-month construction projects, we tailor our services to your specific needs.",
                },
                {
                  title: "Competitive Pricing",
                  text: "Fair, transparent pricing with no hidden fees. We offer free quotes and volume discounts for larger projects.",
                },
                {
                  title: "24/7 Support",
                  text: `Need emergency service? Call us at ${PHONE}. We are here for you around the clock.`,
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
