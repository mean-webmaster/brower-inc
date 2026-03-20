export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          image_url: string | null;
          image_alt: string | null;
          author: string;
          published: boolean;
          created_at: string;
          updated_at: string;
          meta_title: string | null;
          meta_description: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          image_url?: string | null;
          image_alt?: string | null;
          author?: string;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
          meta_title?: string | null;
          meta_description?: string | null;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          image_url?: string | null;
          image_alt?: string | null;
          author?: string;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
          meta_title?: string | null;
          meta_description?: string | null;
        };
      };
      portfolio_items: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          content: string;
          image_url: string | null;
          image_alt: string | null;
          category: string | null;
          location: string | null;
          published: boolean;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description: string;
          content: string;
          image_url?: string | null;
          image_alt?: string | null;
          category?: string | null;
          location?: string | null;
          published?: boolean;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string;
          content?: string;
          image_url?: string | null;
          image_alt?: string | null;
          category?: string | null;
          location?: string | null;
          published?: boolean;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      portfolio_images: {
        Row: {
          id: string;
          portfolio_item_id: string;
          image_url: string;
          image_alt: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          portfolio_item_id: string;
          image_url: string;
          image_alt?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          portfolio_item_id?: string;
          image_url?: string;
          image_alt?: string | null;
          sort_order?: number;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

export type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];
export type PortfolioItem = Database["public"]["Tables"]["portfolio_items"]["Row"];
export type PortfolioImage = Database["public"]["Tables"]["portfolio_images"]["Row"];
