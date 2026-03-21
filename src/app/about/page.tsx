import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { PHONE, PHONE_HREF, EMAIL, SOCIAL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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
            <Image
              src={IMAGES.fleetLineup}
              alt="Brower Inc. full fleet of septic trucks and portable restroom delivery vehicles in Newkirk, Oklahoma"
              width={800}
              height={400}
              className="mt-8 w-full rounded-xl object-cover"
            />
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Brower Inc. is a locally owned and operated portable sanitation company based in
              Newkirk, Oklahoma. We specialize in providing reliable, clean portable restrooms,
              luxury VIP restroom trailers, hand washing stations, and professional septic services
              to communities and businesses throughout Oklahoma.
            </p>

            {/* Meet Troy */}
            <div className="mt-12 rounded-2xl bg-gray-50 p-8 sm:p-10">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                <Image
                  src={IMAGES.troyBrower}
                  alt="Troy Brower, owner of Brower Inc. portable restroom and septic services in Newkirk, Oklahoma"
                  width={240}
                  height={240}
                  className="h-60 w-60 shrink-0 rounded-xl object-cover shadow-md"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Meet Troy Brower</h2>
                  <p className="mt-1 text-sm font-medium text-primary">Owner &amp; Operator</p>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Troy Brower is the founder and owner of Brower Inc. Based in Newkirk, Oklahoma, Troy built this business on a simple promise: provide clean, reliable portable sanitation and septic services that people can count on. From personally overseeing deliveries to making sure every unit is spotless, Troy takes pride in treating every customer like a neighbor — because most of them are.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {PHONE}
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {EMAIL}
                    </a>
                    <a
                      href={SOCIAL.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={SOCIAL.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      YouTube
                    </a>
                    <a
                      href={SOCIAL.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
