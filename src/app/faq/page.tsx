import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import { FAQS } from "@/lib/constants";
import { getFAQSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ | Portable Restroom Rental Questions | Brower Inc.",
  description:
    "Frequently asked questions about portable restroom rentals, septic services, pricing, delivery, and more. Get answers from Brower Inc. in Newkirk, Oklahoma.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }}
      />
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our portable restroom rentals and septic
              services.
            </p>
          </div>

          <div className="mt-12">
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        description="Our team is happy to help. Contact us for personalized answers and a free quote."
      />
    </>
  );
}
