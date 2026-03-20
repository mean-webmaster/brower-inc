import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Portable Restroom & Septic Tips | Brower Inc.",
  description:
    "Read expert tips on portable restroom rentals, event planning sanitation, construction site compliance, and septic maintenance from Brower Inc. in Oklahoma.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
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

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex h-48 items-center justify-center bg-gray-100">
                  <p className="text-sm text-gray-500">Blog Post Image</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                      {post.category}
                    </span>
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
                    <span className="text-xs text-gray-500">{post.readTime}</span>
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
        </div>
      </section>
    </>
  );
}
