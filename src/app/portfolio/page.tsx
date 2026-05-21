import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import PortfolioGallery from "@/components/PortfolioGallery";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sanitizeHtml } from "@/lib/sanitize";
import type { PortfolioImage, PortfolioItem } from "@/lib/supabase/types";
import { getCollectionPageSchema, jsonLdString } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Work | Projects & Portfolio",
  description:
    "Real Brower Inc. projects across Oklahoma — portable restroom setups, VIP trailer installations, and septic services from weddings, rodeos, festivals, and construction sites.",
  alternates: { canonical: "/portfolio" },
};

type ItemWithGallery = PortfolioItem & { gallery: PortfolioImage[] };

export default async function PortfolioPage() {
  let items: ItemWithGallery[] = [];

  try {
    const supabase = await createServerSupabaseClient();
    const { data: rows } = await supabase
      .from("portfolio_items")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: true });

    if (rows && rows.length) {
      const { data: images } = await supabase
        .from("portfolio_images")
        .select("*")
        .in(
          "portfolio_item_id",
          rows.map((r) => r.id),
        )
        .order("sort_order", { ascending: true });

      const byItem = new Map<string, PortfolioImage[]>();
      (images ?? []).forEach((img) => {
        const arr = byItem.get(img.portfolio_item_id) ?? [];
        arr.push(img);
        byItem.set(img.portfolio_item_id, arr);
      });

      items = rows.map((r) => ({ ...r, gallery: byItem.get(r.id) ?? [] }));
    }
  } catch {
    /* Supabase unavailable — render the empty state below */
  }

  const portfolioPageSchema = getCollectionPageSchema({
    name: "Our Work — Brower Inc. Portfolio",
    description:
      "Real Brower Inc. projects across Oklahoma and southern Kansas — portable restroom setups, VIP trailer installations, and septic services from weddings, rodeos, festivals, and construction sites.",
    url: "/portfolio",
    items: items.map((item) => ({
      name: item.title,
      url: `/portfolio#${item.slug}`,
      description: item.description,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(portfolioPageSchema) }}
      />
      <Breadcrumbs items={[{ name: "Our Work", href: "/portfolio" }]} />

      {/* Intro */}
      <section className="border-b border-gray-200 bg-gray-50 py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
            Our Work
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real Brower Inc. projects across Oklahoma
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-600 sm:mt-5 sm:text-lg">
            Wind farms, ranch weddings, county festivals, construction crews,
            rodeo weekends, residential septic, oilfield calls — the routes
            our trucks actually run. Tap any photo to see it full-size.
          </p>

          {/* Jump nav — horizontal scroll on mobile, wraps on desktop */}
          {items.length > 0 && (
            <nav
              aria-label="Jump to a project"
              className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-8 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
            >
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.slug}`}
                  className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-gray-300 bg-white px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="font-semibold">
                    {item.category ?? item.title}
                  </span>
                  {item.location && (
                    <span className="ml-2 text-gray-500">· {item.location}</span>
                  )}
                </a>
              ))}
            </nav>
          )}
        </div>
      </section>

      {/* Project sections */}
      {items.length === 0 ? (
        <section className="py-20 sm:py-24">
          <p className="mx-auto max-w-2xl px-4 text-center text-gray-500">
            Portfolio coming soon — check back for project highlights.
          </p>
        </section>
      ) : (
        <div className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <section
              key={item.id}
              id={item.slug}
              className="scroll-mt-20 py-12 sm:scroll-mt-24 sm:py-20"
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                    {item.category ?? "Project"}
                  </span>
                  {item.location && (
                    <span className="text-gray-500">{item.location}</span>
                  )}
                  <span className="text-gray-400" aria-hidden="true">·</span>
                  <span className="text-gray-500">
                    Project {String(idx + 1).padStart(2, "0")} of{" "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  {item.title}
                </h2>

                <p className="mt-3 max-w-3xl text-base text-gray-600 sm:mt-4 sm:text-lg">
                  {item.description}
                </p>

                {item.image_url && (
                  <PortfolioGallery
                    hero={{
                      url: item.image_url,
                      alt: item.image_alt || item.title,
                    }}
                    gallery={item.gallery.map((g) => ({
                      url: g.image_url,
                      alt: g.image_alt || item.title,
                    }))}
                    preload={idx === 0}
                  />
                )}

                {item.content && (
                  <div
                    className="prose prose-sm mt-6 max-w-none sm:prose-base sm:mt-8 prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(item.content),
                    }}
                  />
                )}

                {idx < items.length - 1 && (
                  <div className="mt-10 text-right sm:mt-12">
                    <a
                      href={`#${items[idx + 1].slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Next project
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      <CTABanner />
    </>
  );
}
