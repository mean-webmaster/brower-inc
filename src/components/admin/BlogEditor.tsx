"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { uploadImage, generateSeoFilename } from "@/lib/supabase/storage";
import Image from "next/image";
import type { BlogPost } from "@/lib/supabase/types";

type BlogEditorProps = {
  post?: BlogPost;
};

export function BlogEditor({ post }: BlogEditorProps) {
  const router = useRouter();
  const isEditing = !!post;

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [imageUrl, setImageUrl] = useState(post?.image_url || "");
  const [imageAlt, setImageAlt] = useState(post?.image_alt || "");
  const [author, setAuthor] = useState(post?.author || "Brower Inc");
  const [published, setPublished] = useState(post?.published || false);
  const [metaTitle, setMetaTitle] = useState(post?.meta_title || "");
  const [metaDescription, setMetaDescription] = useState(
    post?.meta_description || ""
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // Auto-generate slug from title
  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing || !post?.slug) {
      setSlug(
        value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "")
      );
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const seoName = `brower-inc-blog-${title || "post"}-${Date.now()}`;
    const { url, error } = await uploadImage(file, "blog-images", seoName);

    if (error) {
      setError(`Image upload failed: ${error}`);
    } else {
      setImageUrl(url);
      if (!imageAlt) {
        setImageAlt(title);
      }
    }
    setUploading(false);
  };

  const handleSave = async () => {
    if (!title || !slug || !excerpt || !content) {
      setError("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setError("");

    const supabase = createClient();

    const postData = {
      title,
      slug,
      excerpt,
      content,
      image_url: imageUrl || null,
      image_alt: imageAlt || null,
      author,
      published,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
    };

    if (isEditing) {
      const { error } = await supabase
        .from("blog_posts")
        .update(postData)
        .eq("id", post.id);

      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
    } else {
      const { error } = await supabase.from("blog_posts").insert(postData);

      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
    }

    router.push("/admin/blog");
    router.refresh();
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          {isEditing ? "Edit Post" : "New Blog Post"}
        </h1>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            Published
          </label>
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-primary px-6 py-2 font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            {saving ? "Saving..." : isEditing ? "Update" : "Create"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6">
        {/* Title */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your blog post title"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Slug *
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">/blog/</span>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="your-blog-post-slug"
            />
          </div>
        </div>

        {/* Featured Image */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Featured Image
          </label>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20"
              />
              {uploading && (
                <p className="mt-1 text-sm text-gray-500">Uploading...</p>
              )}
              <input
                type="text"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Image alt text (for SEO & accessibility)"
              />
            </div>
            {imageUrl && (
              <div className="relative h-24 w-32 overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src={imageUrl}
                  alt={imageAlt || "Preview"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Excerpt *
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Brief summary shown in blog listings"
          />
        </div>

        {/* Content */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Content * (Markdown supported)
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-mono text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Write your blog post content here..."
          />
        </div>

        {/* Author */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* SEO */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">SEO</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Meta Title
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={title || "Custom page title for search engines"}
              />
              <p className="mt-1 text-xs text-gray-400">
                {(metaTitle || title).length}/60 characters
              </p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Meta Description
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={
                  excerpt || "Custom description for search engine results"
                }
              />
              <p className="mt-1 text-xs text-gray-400">
                {(metaDescription || excerpt).length}/160 characters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
