"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { uploadImage } from "@/lib/supabase/storage";
import Image from "next/image";
import type { PortfolioItem, PortfolioImage } from "@/lib/supabase/types";

type PortfolioEditorProps = {
  item?: PortfolioItem;
  existingImages?: PortfolioImage[];
};

export function PortfolioEditor({ item, existingImages = [] }: PortfolioEditorProps) {
  const router = useRouter();
  const isEditing = !!item;

  const [title, setTitle] = useState(item?.title || "");
  const [slug, setSlug] = useState(item?.slug || "");
  const [description, setDescription] = useState(item?.description || "");
  const [content, setContent] = useState(item?.content || "");
  const [imageUrl, setImageUrl] = useState(item?.image_url || "");
  const [imageAlt, setImageAlt] = useState(item?.image_alt || "");
  const [category, setCategory] = useState(item?.category || "");
  const [location, setLocation] = useState(item?.location || "");
  const [published, setPublished] = useState(item?.published || false);
  const [featured, setFeatured] = useState(item?.featured || false);
  const [galleryImages, setGalleryImages] = useState<PortfolioImage[]>(existingImages);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing || !item?.slug) {
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

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const seoName = `brower-inc-portfolio-${title || "project"}-main`;
    const { url, error } = await uploadImage(file, "portfolio-images", seoName);

    if (error) {
      setError(`Image upload failed: ${error}`);
    } else {
      setImageUrl(url);
      if (!imageAlt) setImageAlt(title);
    }
    setUploading(false);
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploadingGallery(true);
    const supabase = createClient();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const seoName = `brower-inc-portfolio-${title || "project"}-${i + galleryImages.length + 1}`;
      const { url, error: uploadError } = await uploadImage(
        file,
        "portfolio-images",
        seoName,
        slug || "gallery"
      );

      if (!uploadError && item?.id) {
        // If editing, save to DB immediately
        const { data } = await supabase
          .from("portfolio_images")
          .insert({
            portfolio_item_id: item.id,
            image_url: url,
            image_alt: `${title} - Image ${galleryImages.length + i + 1}`,
            sort_order: galleryImages.length + i,
          })
          .select()
          .single();

        if (data) {
          setGalleryImages((prev) => [...prev, data]);
        }
      } else if (!uploadError) {
        // If creating new, store temporarily
        setGalleryImages((prev) => [
          ...prev,
          {
            id: `temp-${Date.now()}-${i}`,
            portfolio_item_id: "",
            image_url: url,
            image_alt: `${title} - Image ${prev.length + 1}`,
            sort_order: prev.length,
            created_at: new Date().toISOString(),
          },
        ]);
      }
    }
    setUploadingGallery(false);
  };

  const handleDeleteGalleryImage = async (image: PortfolioImage) => {
    if (!confirm("Remove this image?")) return;

    if (!image.id.startsWith("temp-")) {
      const supabase = createClient();
      await supabase.from("portfolio_images").delete().eq("id", image.id);
    }
    setGalleryImages((prev) => prev.filter((img) => img.id !== image.id));
  };

  const handleSave = async () => {
    if (!title || !slug || !description || !content) {
      setError("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setError("");
    const supabase = createClient();

    const itemData = {
      title,
      slug,
      description,
      content,
      image_url: imageUrl || null,
      image_alt: imageAlt || null,
      category: category || null,
      location: location || null,
      published,
      featured,
    };

    if (isEditing) {
      const { error } = await supabase
        .from("portfolio_items")
        .update(itemData)
        .eq("id", item.id);

      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
    } else {
      const { data: newItem, error } = await supabase
        .from("portfolio_items")
        .insert(itemData)
        .select()
        .single();

      if (error || !newItem) {
        setError(error?.message || "Failed to create portfolio item");
        setSaving(false);
        return;
      }

      // Save temporary gallery images
      const tempImages = galleryImages.filter((img) => img.id.startsWith("temp-"));
      if (tempImages.length > 0) {
        await supabase.from("portfolio_images").insert(
          tempImages.map((img, i) => ({
            portfolio_item_id: newItem.id,
            image_url: img.image_url,
            image_alt: img.image_alt,
            sort_order: i,
          }))
        );
      }
    }

    router.push("/admin/portfolio");
    router.refresh();
  };

  const categories = [
    "Construction",
    "Events",
    "Agriculture",
    "Commercial",
    "Residential",
    "Emergency",
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          {isEditing ? "Edit Portfolio Item" : "New Portfolio Item"}
        </h1>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            Featured
          </label>
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
            placeholder="e.g., Wind Farm Event Support - Kay County"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Slug *
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">/portfolio/</span>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Category & Location */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="e.g., Newkirk, OK"
            />
          </div>
        </div>

        {/* Main Image */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageUpload}
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
                placeholder="Image alt text"
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

        {/* Gallery Images */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Gallery Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryUpload}
            disabled={uploadingGallery}
            className="w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20"
          />
          {uploadingGallery && (
            <p className="mt-1 text-sm text-gray-500">
              Uploading gallery images...
            </p>
          )}
          {galleryImages.length > 0 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {galleryImages.map((img) => (
                <div key={img.id} className="group relative">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
                    <Image
                      src={img.image_url}
                      alt={img.image_alt || "Gallery image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => handleDeleteGalleryImage(img)}
                    className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-xs text-white shadow-md group-hover:block"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Short Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Brief description shown in portfolio listings"
          />
        </div>

        {/* Content */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Description *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Detailed project description..."
          />
        </div>
      </div>
    </div>
  );
}
