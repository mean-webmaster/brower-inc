import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sanitizeHtml } from "@/lib/sanitize";
import type { PortfolioImage } from "@/lib/supabase/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  const { data: item } = await supabase
    .from("portfolio_items")
    .select("title, description")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!item) return {};

  return {
    title: `${item.title} | Our Work | Brower Inc.`,
    description: item.description,
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: item } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!item) notFound();

  let gallery: PortfolioImage[] = [];
  const { data: images } = await supabase
    .from("portfolio_images")
    .select("*")
    .eq("portfolio_item_id", item.id)
    .order("sort_order", { ascending: true });

  if (images) gallery = images;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Our Work", href: "/portfolio" },
          { name: item.title, href: `/portfolio/${item.slug}` },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {item.category && (
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                {item.category}
              </span>
            )}
            {item.location && <span>{item.location}</span>}
            <time dateTime={item.created_at}>
              {new Date(item.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">{item.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{item.description}</p>

          {/* Hero Image */}
          {item.image_url && (
            <Image
              src={item.image_url}
              alt={item.image_alt || item.title}
              width={900}
              height={500}
              className="mt-8 w-full rounded-xl object-cover"
              priority
            />
          )}

          {/* Content */}
          {item.content && (
            <div
              className="prose mt-10 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.content) }}
            />
          )}

          {/* Photo Gallery */}
          {gallery.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">Photos</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((img) => (
                  <div key={img.id} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={img.image_url}
                      alt={img.image_alt || item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Our Work
            </Link>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
