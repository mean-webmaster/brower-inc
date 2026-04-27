import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find what you need.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Go to Homepage
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
          >
            Call {PHONE}
          </a>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-sm font-semibold text-gray-900">Popular pages:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/services/portable-restrooms" className="text-primary hover:underline">
              Portable Restrooms
            </Link>
            <Link href="/services/septic-services" className="text-primary hover:underline">
              Septic Services
            </Link>
            <Link href="/service-areas" className="text-primary hover:underline">
              Service Areas
            </Link>
            <Link href="/faq" className="text-primary hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
