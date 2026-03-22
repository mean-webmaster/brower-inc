import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export default function CTABanner({
  title = "Ready to Get a Free Quote?",
  description = "Contact Brower Inc. today for reliable portable restroom rentals, luxury trailers, and septic services throughout Oklahoma.",
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-white">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href={PHONE_HREF}
            className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
