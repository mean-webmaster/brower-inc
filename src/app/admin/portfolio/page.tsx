import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Image from "next/image";
export default async function AdminPortfolioList() {
  const supabase = await createServerSupabaseClient();
  const { data: items } = await supabase
    .from("portfolio_items")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <Link
          href="/admin/portfolio/new"
          className="rounded-lg bg-primary px-4 py-2 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          + New Item
        </Link>
      </div>

      {!items || items.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500">No portfolio items yet.</p>
          <Link
            href="/admin/portfolio/new"
            className="mt-2 inline-block text-primary hover:underline"
          >
            Add your first project
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/admin/portfolio/${item.id}`}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video bg-gray-100">
                {item.image_url ? (
                  <Image
                    src={item.image_url}
                    alt={item.image_alt || item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl text-gray-300">
                    📷
                  </div>
                )}
                <div className="absolute right-2 top-2 flex gap-1">
                  {item.featured && (
                    <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
                      Featured
                    </span>
                  )}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.published ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {item.category && `${item.category} • `}
                  {item.location || "No location"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
