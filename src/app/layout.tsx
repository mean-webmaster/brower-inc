import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE} | Newkirk, OK`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Brower Inc. provides portable restroom rentals, VIP luxury restroom trailers, hand washing stations, septic services, and long-term rentals in Newkirk, Oklahoma. Serving all of Oklahoma.",
  keywords: [
    "portable restroom rental",
    "porta potty rental Oklahoma",
    "luxury restroom trailer",
    "septic services Oklahoma",
    "portable toilet Newkirk OK",
    "construction site restrooms",
    "event restroom rental",
    "hand washing station rental",
    "long-term portable restroom rental",
    "VIP restroom trailer Oklahoma",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Oklahoma's trusted provider of portable restrooms, luxury trailers, and septic services. Locally owned in Newkirk, OK.",
    images: [
      {
        url: IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: "Brower Inc. - Portable Restrooms & Septic Services in Newkirk, Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Oklahoma's trusted provider of portable restrooms, luxury trailers, and septic services.",
    images: [IMAGES.ogImage],
  },
  icons: {
    icon: IMAGES.favicon,
    apple: IMAGES.favicon,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
