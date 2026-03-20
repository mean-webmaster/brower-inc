import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createServerSupabaseClient();

  const { count: blogCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true });

  const { count: portfolioCount } = await supabase
    .from("portfolio_items")
    .select("*", { count: "exact", head: true });

  const stats = [
    {
      label: "Blog Posts",
      count: blogCount || 0,
      href: "/admin/blog",
      icon: "📝",
    },
    {
      label: "Portfolio Items",
      count: portfolioCount || 0,
      href: "/admin/portfolio",
      icon: "📸",
    },
  ];

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.href}
            href={stat.href}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-2 text-3xl">{stat.icon}</div>
            <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 text-gray-600 transition-colors hover:border-primary hover:text-primary"
        >
          <span className="text-2xl">+</span>
          <span className="font-medium">New Blog Post</span>
        </Link>
        <Link
          href="/admin/portfolio/new"
          className="flex items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 text-gray-600 transition-colors hover:border-primary hover:text-primary"
        >
          <span className="text-2xl">+</span>
          <span className="font-medium">New Portfolio Item</span>
        </Link>
      </div>
    </div>
  );
}
