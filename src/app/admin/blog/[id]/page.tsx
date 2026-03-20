import { createServerSupabaseClient } from "@/lib/supabase/server";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { notFound } from "next/navigation";
export default async function EditBlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    notFound();
  }

  return <BlogEditor post={post} />;
}
