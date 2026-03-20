export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "portable-restroom-rental-guide",
    title: "The Complete Guide to Renting Portable Restrooms for Your Event",
    excerpt:
      "Everything you need to know about renting portable restrooms — from how many units you need to delivery logistics and tips for keeping guests comfortable.",
    date: "2025-03-15",
    readTime: "5 min read",
    category: "Event Planning",
  },
  {
    slug: "construction-site-sanitation-tips",
    title: "Construction Site Sanitation: OSHA Requirements and Best Practices",
    excerpt:
      "Learn about OSHA portable restroom requirements for construction sites, how to stay compliant, and best practices for maintaining a safe and sanitary worksite.",
    date: "2025-02-28",
    readTime: "4 min read",
    category: "Construction",
  },
  {
    slug: "event-planning-restroom-guide",
    title: "How Many Portable Restrooms Do You Need for an Outdoor Event?",
    excerpt:
      "A practical guide to calculating the right number of portable restrooms for weddings, festivals, corporate events, and other outdoor gatherings in Oklahoma.",
    date: "2025-02-10",
    readTime: "3 min read",
    category: "Event Planning",
  },
];
