import { SITE_NAME, SITE_URL, PHONE, EMAIL, ADDRESS, BUSINESS_HOURS } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Brower Inc. provides portable restrooms, luxury VIP restroom trailers, hand washing stations, septic services, and long-term rentals throughout Oklahoma.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "$$",
    image: `${SITE_URL}/images/brower-inc-og.jpg`,
    sameAs: [
      "https://www.facebook.com/braborinc",
      "https://www.linkedin.com/company/brower-inc",
    ],
  };
}

export function getServiceSchema(service: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
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

export function getBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
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
