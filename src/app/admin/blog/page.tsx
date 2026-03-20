import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { DeleteBlogButton } from "@/components/admin/DeleteBlogButton";
export default async function AdminBlogList() {
  const supabase = await createServerSupabaseClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-primary px-4 py-2 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          + New Post
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500">No blog posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="mt-2 inline-block text-primary hover:underline"
          >
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{post.title}</p>
                    <p className="text-sm text-gray-500">/blog/{post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        post.published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10"
                      >
                        Edit
                      </Link>
                      <DeleteBlogButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
