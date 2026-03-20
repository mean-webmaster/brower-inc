-- ============================================
-- Brower Inc - Initial Database Schema
-- ============================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA extensions;

-- ============================================
-- Blog Posts
-- ============================================
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  image_alt TEXT,
  author TEXT NOT NULL DEFAULT 'Brower Inc',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  meta_title TEXT,
  meta_description TEXT
);

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);

-- ============================================
-- Portfolio Items
-- ============================================
CREATE TABLE portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  image_alt TEXT,
  category TEXT,
  location TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_portfolio_items_slug ON portfolio_items(slug);
CREATE INDEX idx_portfolio_items_published ON portfolio_items(published);
CREATE INDEX idx_portfolio_items_category ON portfolio_items(category);

-- ============================================
-- Portfolio Images (gallery for each item)
-- ============================================
CREATE TABLE portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_item_id UUID NOT NULL REFERENCES portfolio_items(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_alt TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_portfolio_images_item ON portfolio_images(portfolio_item_id);

-- ============================================
-- Auto-update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER portfolio_items_updated_at
  BEFORE UPDATE ON portfolio_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- Row Level Security (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public can read published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Public can read published portfolio items"
  ON portfolio_items FOR SELECT
  USING (published = true);

CREATE POLICY "Public can read portfolio images for published items"
  ON portfolio_images FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM portfolio_items
      WHERE portfolio_items.id = portfolio_images.portfolio_item_id
      AND portfolio_items.published = true
    )
  );

-- Authenticated users (admin) can do everything
CREATE POLICY "Admin full access to blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access to portfolio items"
  ON portfolio_items FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access to portfolio images"
  ON portfolio_images FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================
-- Storage Buckets
-- ============================================

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880, -- 5MB
  ARRAY['image/webp', 'image/jpeg', 'image/png', 'image/avif']
);

-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'portfolio-images',
  'portfolio-images',
  true,
  10485760, -- 10MB
  ARRAY['image/webp', 'image/jpeg', 'image/png', 'image/avif']
);

-- Storage policies: public read, authenticated write
CREATE POLICY "Public read blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admin upload blog images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Admin update blog images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admin delete blog images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');

CREATE POLICY "Public read portfolio images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Admin upload portfolio images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'portfolio-images');

CREATE POLICY "Admin update portfolio images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Admin delete portfolio images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'portfolio-images');
