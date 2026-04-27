/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://browerinc.net",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/login", "/apple-icon.png"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/login", "/_next/"],
      },
      // AI Search Bots — ALLOW (show content in AI search results)
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // AI Training Bots — BLOCK (scrape for model training data)
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
    ],
  },
};
