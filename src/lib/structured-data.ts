import {
  SITE_NAME,
  SITE_URL,
  PHONE,
  EMAIL,
  ADDRESS,
  SOCIAL,
} from "./constants";
import { IMAGES } from "./images";

/* ──────────────────────────────────────────────────────────────────────────
 *  Stable @id anchors for the global entity graph
 *  These are referenced from page-level schemas to link everything together.
 * ────────────────────────────────────────────────────────────────────────── */
export const SCHEMA_IDS = {
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
  website: `${SITE_URL}/#website`,
  troyBrower: `${SITE_URL}/#troy-brower`,
  logo: `${SITE_URL}/#logo`,
} as const;

/* Brower Inc. headquarters — 6475 N Union St, Newkirk, OK 74647
 * Coordinates from US Census Geocoder (street-level, address-matched). */
const GEO = {
  latitude: 36.889832,
  longitude: -97.085100,
} as const;

/* ──────────────────────────────────────────────────────────────────────────
 *  JSON-LD <script> renderer with XSS-safe escaping
 *  Per Next.js JSON-LD guide: replace `<` with its unicode equivalent so
 *  malicious strings can't break out of the script tag.
 * ────────────────────────────────────────────────────────────────────────── */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/* ══════════════════════════════════════════════════════════════════════════
 *  GLOBAL GRAPH NODES (injected sitewide via layout.tsx)
 * ══════════════════════════════════════════════════════════════════════════ */

export function getOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": SCHEMA_IDS.organization,
    name: SITE_NAME,
    legalName: "Brower Inc.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": SCHEMA_IDS.logo,
      url: IMAGES.logo,
      caption: SITE_NAME,
    },
    image: { "@id": SCHEMA_IDS.logo },
    description:
      "Brower Inc. is a locally owned portable sanitation and septic services company headquartered in Newkirk, Oklahoma, serving 14 counties across Oklahoma and southern Kansas.",
    founder: { "@id": SCHEMA_IDS.troyBrower },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Newkirk",
        addressRegion: "OK",
        addressCountry: "US",
      },
    },
    telephone: PHONE,
    email: EMAIL,
    sameAs: [SOCIAL.facebook, SOCIAL.youtube, SOCIAL.linkedin],
  };
}

export function getLocalBusinessNode() {
  return {
    "@type": "LocalBusiness",
    "@id": SCHEMA_IDS.localBusiness,
    name: SITE_NAME,
    description:
      "Brower Inc. provides portable restrooms, luxury VIP restroom trailers, hand washing stations, septic services, and long-term rentals throughout Oklahoma and southern Kansas.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: [IMAGES.logo, IMAGES.ogImage, IMAGES.fleetLineup],
    logo: { "@id": SCHEMA_IDS.logo },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: `https://www.google.com/maps/place/${encodeURIComponent(ADDRESS.full)}`,
    areaServed: [
      { "@type": "State", name: "Oklahoma" },
      { "@type": "State", name: "Kansas" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    /* 24/7 emergency service is genuinely offered */
    specialOpeningHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "24/7 emergency service available",
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Check", "Credit Card", "Invoice"],
    currenciesAccepted: "USD",
    parentOrganization: { "@id": SCHEMA_IDS.organization },
    founder: { "@id": SCHEMA_IDS.troyBrower },
    employee: { "@id": SCHEMA_IDS.troyBrower },
    sameAs: [SOCIAL.facebook, SOCIAL.youtube, SOCIAL.linkedin],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Portable Sanitation & Septic Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portable Restroom Rental",
            url: `${SITE_URL}/services/portable-restrooms`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VIP Shower & Restroom Trailer Rental",
            url: `${SITE_URL}/services/vip-shower-restroom-trailers`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hand Washing Station Rental",
            url: `${SITE_URL}/services/hand-washing-stations`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Septic Services",
            url: `${SITE_URL}/services/septic-services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Long-Term Portable Restroom Rentals",
            url: `${SITE_URL}/services/long-term-rentals`,
          },
        },
      ],
    },
  };
}

export function getWebSiteNode() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Oklahoma's trusted provider of portable restrooms, luxury trailers, hand washing stations, and septic services. Locally owned in Newkirk, OK.",
    publisher: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
  };
}

export function getTroyBrowerNode() {
  return {
    "@type": "Person",
    "@id": SCHEMA_IDS.troyBrower,
    name: "Troy Brower",
    givenName: "Troy",
    familyName: "Brower",
    jobTitle: "Founder & Owner",
    description:
      "Troy Brower is the founder and owner of Brower Inc., a locally owned portable sanitation and septic services company in Newkirk, Oklahoma. Troy personally oversees deliveries, equipment maintenance, and customer relationships.",
    image: `${SITE_URL}${IMAGES.troyBrower}`,
    telephone: PHONE,
    email: EMAIL,
    worksFor: { "@id": SCHEMA_IDS.organization },
    sameAs: [SOCIAL.linkedin, SOCIAL.facebook],
    knowsAbout: [
      "Portable Sanitation",
      "Septic Services",
      "Portable Restroom Rental",
      "VIP Restroom Trailers",
      "Construction Site Sanitation",
      "Event Restroom Planning",
      "Oklahoma DEQ Regulations",
    ],
  };
}

/**
 * The full sitewide @graph injected by layout.tsx.
 * Connects Organization → LocalBusiness → WebSite → Person into one entity graph
 * so AI search models (ChatGPT, Perplexity, Google AI Overviews) can resolve
 * Brower Inc. as a single linked entity rather than four disconnected blobs.
 */
export function getBaseGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getLocalBusinessNode(),
      getWebSiteNode(),
      getTroyBrowerNode(),
    ],
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  PAGE-LEVEL SCHEMA HELPERS
 *  Single-node schemas injected into individual pages alongside the global
 *  @graph from layout.tsx.
 * ══════════════════════════════════════════════════════════════════════════ */

export function getServiceSchema(service: {
  title: string;
  slug: string;
  description: string;
}) {
  const alternateName =
    service.slug === "portable-restrooms"
      ? ["Porta Potty Rental", "Portable Toilet Rental", "Port-a-John Rental"]
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    ...(alternateName && { alternateName }),
    description: service.description,
    provider: { "@id": SCHEMA_IDS.localBusiness },
    areaServed: [
      { "@type": "State", name: "Oklahoma" },
      { "@type": "State", name: "Kansas" },
    ],
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE_URL}/images/brower-inc-og.jpg`,
    datePublished: article.datePublished,
    author: { "@id": SCHEMA_IDS.troyBrower },
    publisher: { "@id": SCHEMA_IDS.organization },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

export function getIndustrySchema(industry: {
  name: string;
  slug: string;
  heroDescription: string;
  faqs: { question: string; answer: string }[];
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/industries/${industry.slug}#service`,
      name: `Portable Restroom Rental for ${industry.name}`,
      description: industry.heroDescription,
      provider: { "@id": SCHEMA_IDS.localBusiness },
      areaServed: [
        { "@type": "State", name: "Oklahoma" },
        { "@type": "State", name: "Kansas" },
      ],
      serviceType: [
        "Portable Restroom Rental",
        "Porta Potty Rental",
        "VIP Restroom Trailer Rental",
        "Hand Washing Station Rental",
        "Septic Services",
      ],
      url: `${SITE_URL}/industries/${industry.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: industry.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function getServiceAreaSchema(area: {
  name: string;
  slug: string;
  type: "county" | "city";
  state: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Portable Restroom Rental in ${area.name}, ${area.state}`,
    description: area.description,
    provider: { "@id": SCHEMA_IDS.localBusiness },
    areaServed: {
      "@type": area.type === "county" ? "AdministrativeArea" : "City",
      name: `${area.name}, ${area.state}`,
    },
    serviceType: [
      "Portable Restroom Rental",
      "Porta Potty Rental",
      "VIP Restroom Trailer Rental",
      "Hand Washing Station Rental",
      "Septic Pumping Service",
    ],
    url: `${SITE_URL}/service-areas/${area.slug}`,
  };
}

/**
 * Per-area LocalBusiness variant for /service-areas/[slug] pages.
 * Distinct @id from the global LocalBusiness so Google treats it as a
 * geo-scoped instance and can surface the business in the local pack
 * for that specific city/county query.
 */
export function getLocalBusinessForArea(area: {
  name: string;
  slug: string;
  type: "county" | "city";
  state: string;
  description: string;
  geo?: { lat: number; lng: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness-${area.slug}`,
    name: `${SITE_NAME} — ${area.name}, ${area.state}`,
    description: area.description,
    url: `${SITE_URL}/service-areas/${area.slug}`,
    telephone: PHONE,
    email: EMAIL,
    image: [IMAGES.logo, IMAGES.ogImage],
    logo: { "@id": SCHEMA_IDS.logo },
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    ...(area.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
    }),
    areaServed: {
      "@type": area.type === "county" ? "AdministrativeArea" : "City",
      name: `${area.name}, ${area.state}`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    specialOpeningHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "24/7 emergency service available",
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Check", "Credit Card", "Invoice"],
    currenciesAccepted: "USD",
    parentOrganization: { "@id": SCHEMA_IDS.organization },
    sameAs: [SOCIAL.facebook, SOCIAL.youtube, SOCIAL.linkedin],
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  NEW PAGE-TYPE SCHEMAS (the gaps the schema-guardian audit found)
 * ══════════════════════════════════════════════════════════════════════════ */

/** Generic WebPage — for any page that doesn't fit a more specific type */
export function getWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; href: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${page.url}#webpage`,
    name: page.name,
    description: page.description,
    url: `${SITE_URL}${page.url}`,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
    ...(page.breadcrumbs && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: page.breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.href}`,
        })),
      },
    }),
  };
}

/** AboutPage — for /about. Also references Troy as the main entity. */
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    name: `About ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME}, a locally owned portable restroom rental and septic services company based in Newkirk, Oklahoma.`,
    url: `${SITE_URL}/about`,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.organization },
    mainEntity: { "@id": SCHEMA_IDS.troyBrower },
    inLanguage: "en-US",
  };
}

/** ContactPage — for /contact. Includes a contactPoint for the business. */
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    name: `Contact ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for portable restroom rentals, VIP trailers, and septic services in Oklahoma and southern Kansas.`,
    url: `${SITE_URL}/contact`,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.localBusiness },
    mainEntity: {
      "@type": "Organization",
      "@id": SCHEMA_IDS.organization,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE,
          email: EMAIL,
          contactType: "Customer Service",
          areaServed: ["US-OK", "US-KS"],
          availableLanguage: "English",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: PHONE,
          contactType: "Emergency",
          areaServed: ["US-OK", "US-KS"],
          availableLanguage: "English",
          description: "24/7 emergency portable sanitation and septic service",
        },
      ],
    },
    inLanguage: "en-US",
  };
}

/**
 * CollectionPage with embedded ItemList.
 * Use for hub/index pages: /services, /service-areas, /industries, /portfolio, /press
 */
export function getCollectionPageSchema(page: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${page.url}#webpage`,
    name: page.name,
    description: page.description,
    url: `${SITE_URL}${page.url}`,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: page.items.length,
      itemListElement: page.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: `${SITE_URL}${item.url}`,
        ...(item.description && { description: item.description }),
      })),
    },
  };
}

/** Blog index page schema — Blog node with embedded list of recent posts. */
export function getBlogIndexSchema(posts: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    description:
      "Tips, guides, and industry insights for portable sanitation, event planning, construction site compliance, and septic maintenance from Brower Inc.",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@id": SCHEMA_IDS.troyBrower },
      publisher: { "@id": SCHEMA_IDS.organization },
    })),
  };
}

/** CreativeWork schema for individual portfolio items. */
export function getPortfolioItemSchema(item: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
  category?: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/portfolio/${item.slug}#work`,
    name: item.title,
    description: item.description,
    url: `${SITE_URL}/portfolio/${item.slug}`,
    image: item.image,
    datePublished: item.datePublished,
    creator: { "@id": SCHEMA_IDS.organization },
    author: { "@id": SCHEMA_IDS.troyBrower },
    ...(item.category && { genre: item.category }),
    ...(item.location && {
      contentLocation: {
        "@type": "Place",
        name: item.location,
      },
    }),
    isPartOf: { "@id": SCHEMA_IDS.website },
  };
}
