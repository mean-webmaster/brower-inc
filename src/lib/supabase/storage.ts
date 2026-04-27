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

// SVG/GIF stay as-is (SVG is vector; GIF may be animated — canvas loses animation).
const WEBP_SKIP = /^(image\/svg|image\/gif|image\/webp)/i;

async function toWebP(file: File, quality = 0.85): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D canvas context unavailable");
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close?.();
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("WebP encode failed"))),
      "image/webp",
      quality
    );
  });
}

/**
 * Upload an image to Supabase Storage with an SEO-friendly filename.
 * Non-WebP rasters (png/jpg/etc) are re-encoded to WebP in the browser before upload.
 * SVG, GIF, and already-WebP files pass through unchanged.
 */
export async function uploadImage(
  file: File,
  bucket: "blog-images" | "portfolio-images",
  seoName: string,
  folder?: string
): Promise<{ url: string; error: string | null }> {
  const supabase = createClient();

  let body: Blob = file;
  let contentType = file.type;
  let extension = (file.name.split(".").pop() || "webp").toLowerCase();

  if (!WEBP_SKIP.test(file.type)) {
    try {
      body = await toWebP(file);
      contentType = "image/webp";
      extension = "webp";
    } catch (err) {
      return {
        url: "",
        error: `WebP conversion failed: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }

  const filename = generateSeoFilename(seoName, extension);
  const path = folder ? `${folder}/${filename}` : filename;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, body, {
      cacheControl: "3600",
      upsert: true, // Overwrite if exists
      contentType,
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
