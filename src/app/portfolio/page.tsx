import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { PortfolioItem } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Our Work | Projects & Portfolio | Brower Inc.",
  description:
    "See examples of Brower Inc. portable restroom setups, VIP trailer installations, and septic projects across Oklahoma — from weddings and rodeos to construction sites.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  let items: PortfolioItem[] = [];
  try {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase
      .from("portfolio_items")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (data) items = data;
  } catch {
    /* Supabase unavailable */
  }

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean)));

  return (
    <>
      <Breadcrumbs items={[{ name: "Our Work", href: "/portfolio" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Work</h1>
            <p className="mt-4 text-lg text-gray-600">
              From festival grounds to construction sites — see how Brower Inc. delivers
              clean, reliable sanitation across Oklahoma.
            </p>
          </div>

          {categories.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {items.length === 0 ? (
            <p className="mt-12 text-center text-gray-500">
              Portfolio coming soon — check back for project highlights!
            </p>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.image_alt || item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      {item.category && (
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {item.category}
                        </span>
                      )}
                      {item.location && (
                        <span className="text-xs text-gray-500">{item.location}</span>
                      )}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
