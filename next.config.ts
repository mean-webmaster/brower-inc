import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://dashboard.searchatlas.com https://*.searchatlas.com https://analytics.ahrefs.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://assets.cdn.filesafe.space https://bodhjxamjdyzneuirxdy.supabase.co https://*.google-analytics.com https://www.googletagmanager.com https://*.searchatlas.com https://analytics.ahrefs.com",
  "font-src 'self' data:",
  "connect-src 'self' https://bodhjxamjdyzneuirxdy.supabase.co https://*.google-analytics.com https://www.googletagmanager.com https://*.searchatlas.com https://analytics.ahrefs.com",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
      {
        protocol: "https",
        hostname: "bodhjxamjdyzneuirxdy.supabase.co",
        pathname: "/storage/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.browerinc.net" }],
        destination: "https://browerinc.net/:path*",
        permanent: true,
      },
      {
        source: "/blog/construction-site-sanitation-tips",
        destination:
          "/blog/osha-portable-restroom-requirements-construction-oklahoma",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
