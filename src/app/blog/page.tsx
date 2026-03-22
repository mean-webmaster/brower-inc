import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { BLOG_POSTS } from "@/lib/blog";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Blog | Portable Restroom & Septic Tips | Brower Inc.",
  description:
    "Read expert tips on portable restroom rentals, event planning sanitation, construction site compliance, and septic maintenance from Brower Inc. in Oklahoma.",
  alternates: { canonical: "/blog" },
};

interface UnifiedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string | null;
  imageAlt: string;
  author: string;
}

export default async function BlogPage() {
  /* Fetch published Supabase posts */
  let supabasePosts: UnifiedPost[] = [];
  try {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("slug, title, excerpt, image_url, image_alt, author, created_at")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (data) {
      supabasePosts = data.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        date: p.created_at,
        image: p.image_url,
        imageAlt: p.image_alt || p.title,
        author: p.author,
      }));
    }
  } catch {
    /* Supabase unavailable — fall back to static posts only */
  }

  /* Merge static + Supabase, deduplicating by slug (Supabase wins) */
  const supabaseSlugs = new Set(supabasePosts.map((p) => p.slug));
  const staticPosts: UnifiedPost[] = BLOG_POSTS.filter(
    (p) => !supabaseSlugs.has(p.slug)
  ).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    image: p.image,
    imageAlt: p.imageAlt,
    author: "Troy Brower",
  }));

  const allPosts = [...supabasePosts, ...staticPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
            <p className="mt-4 text-lg text-gray-600">
              Tips, guides, and industry insights for portable sanitation and septic services
            </p>
          </div>

          {allPosts.length === 0 ? (
            <p className="mt-12 text-center text-gray-500">
              No posts yet — check back soon!
            </p>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={400}
                      height={200}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-gray-100">
                      <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">By {post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
