import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Construction Site Sanitation: OSHA Requirements | Brower Inc.",
  description:
    "Learn about OSHA portable restroom requirements for construction sites in Oklahoma. Compliance tips and best practices from Brower Inc.",
  alternates: { canonical: "/blog/construction-site-sanitation-tips" },
};

export default function BlogPost2() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: "Construction Site Sanitation Tips", href: "/blog/construction-site-sanitation-tips" },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              Construction
            </span>
            <time dateTime="2025-02-28">February 28, 2025</time>
            <span>4 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Construction Site Sanitation: OSHA Requirements and Best Practices
          </h1>

          <div className="mt-4 flex h-64 items-center justify-center rounded-xl bg-gray-100 border border-gray-200">
            <p className="text-gray-500">Featured Image: Portable Restroom at Construction Site</p>
          </div>

          <div className="prose mt-8 max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Maintaining proper sanitation on construction sites is not just about worker
              comfort — it is a legal requirement. OSHA mandates that employers provide
              adequate toilet facilities for workers, and failure to comply can result in
              significant fines.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">OSHA Requirements</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              According to OSHA standard 1926.51(c), construction sites must provide a minimum
              of one toilet for every 20 workers. For sites with 200 or more employees, one
              toilet per 40 workers is required. All facilities must be maintained in a sanitary
              condition.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Best Practices</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Schedule regular weekly servicing to maintain cleanliness</li>
              <li>Position units close to work areas but away from heavy equipment traffic</li>
              <li>Include{" "}
                <Link href="/services/hand-washing-stations" className="text-primary hover:underline">
                  hand washing stations
                </Link>{" "}
                near restroom units</li>
              <li>Consider ADA-compliant units for accessibility</li>
              <li>Plan for additional units during peak workforce periods</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Long-Term Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For multi-month construction projects, our{" "}
              <Link href="/services/long-term-rentals" className="text-primary hover:underline">
                long-term rental program
              </Link>{" "}
              offers discounted rates with scheduled regular servicing. This takes the hassle
              out of sanitation management so you can focus on building.
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-gray-50 border border-gray-200 p-6">
            <p className="font-semibold text-gray-900">Need construction site restrooms?</p>
            <p className="mt-1 text-sm text-gray-600">
              Brower Inc. offers flexible rental terms and reliable servicing for sites across Oklahoma.
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
