import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { PHONE, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Affiliates Program | Brower Inc.",
  description:
    "Join the Brower Inc. affiliates program. Partner with Oklahoma's trusted portable restroom and septic services provider.",
  alternates: { canonical: "/affiliates" },
};

export default function AffiliatesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Affiliates", href: "/affiliates" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Affiliates Program</h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Interested in partnering with Brower Inc.? We are always looking for trusted
            partners who share our commitment to quality service and customer satisfaction.
          </p>

          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-xl font-semibold text-gray-900">Partner With Us</h2>
            <p className="mt-4 text-gray-600">
              Whether you are an event planner, construction company, property manager, or
              related business, we would love to explore partnership opportunities. Our
              affiliates program offers:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Referral commissions",
                "Priority scheduling",
                "Dedicated account support",
                "Co-marketing opportunities",
                "Volume pricing for partners",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">Get Started</h2>
            <p className="mt-4 text-gray-600">
              To learn more about our affiliates program or to apply, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>{" "}
              or call us at{" "}
              <a href="tel:+15807476206" className="text-primary hover:underline">{PHONE}</a>.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
