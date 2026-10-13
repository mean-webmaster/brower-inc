import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import QuoteConversion from "./QuoteConversion";

export const metadata: Metadata = {
  title: "Thank You | Brower Inc.",
  description: "Thanks for requesting a quote from Brower Inc.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 sm:py-32">
      <QuoteConversion />
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Thanks, we got your request.</h1>
        <p className="mt-6 text-lg text-gray-600">
          We&apos;ll get back to you with a quote soon. Need it faster? Give us a call.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Call {PHONE}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
