import { createClient } from "./client";

/**
 * Generate an SEO-friendly filename from a title/description
 * e.g. "Brower Inc Septic Pumping at Johnson Farm" → "brower-inc-septic-pumping-at-johnson-farm.webp"
 */
export function generateSeoFilename(title: string, extension = "webp"): string {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
      .replace(/\s+/g, "-") // Spaces to hyphens
      .replace(/-+/g, "-") // Collapse multiple hyphens
      .replace(/^-|-$/g, "") // Trim leading/trailing hyphens
      .substring(0, 80) + // Limit length
    `.${extension}`
  );
}

/**
 * Upload an image to Supabase Storage with an SEO-friendly filename
 * Returns the public URL with the readable filename preserved
 */
export async function uploadImage(
  file: File,
  bucket: "blog-images" | "portfolio-images",
  seoName: string,
  folder?: string
): Promise<{ url: string; error: string | null }> {
  const supabase = createClient();

  // Generate SEO-friendly path
  const extension = file.name.split(".").pop() || "webp";
  const filename = generateSeoFilename(seoName, extension);
  const path = folder ? `${folder}/${filename}` : filename;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: true, // Overwrite if exists
      contentType: file.type,
    });

  if (error) {
    return { url: "", error: error.message };
  }

  // Get public URL - this preserves the SEO-friendly filename!
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(data.path);

  return { url: publicUrl, error: null };
}

/**
 * Delete an image from Supabase Storage
 */
export async function deleteImage(
  bucket: "blog-images" | "portfolio-images",
  path: string
): Promise<{ error: string | null }> {
  const supabase = createClient();
  const { error } = await supabase.storage.from(bucket).remove([path]);
  return { error: error?.message || null };
}

/**
 * Get public URL for a Supabase Storage image
 */
export function getImageUrl(
  bucket: "blog-images" | "portfolio-images",
  path: string
): string {
  const supabase = createClient();
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(path);
  return publicUrl;
}
