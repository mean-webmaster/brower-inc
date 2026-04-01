/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://browerinc.net",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/login"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/login"],
      },
    ],
  },
};
