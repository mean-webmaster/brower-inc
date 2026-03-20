"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function DeleteBlogButton({ postId }: { postId: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const supabase = createClient();
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", postId);

    if (error) {
      alert("Error deleting post: " + error.message);
    } else {
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
    >
      Delete
    </button>
  );
}
