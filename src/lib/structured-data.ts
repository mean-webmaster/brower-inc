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
    areaServed: [
      { "@type": "State", name: "Oklahoma" },
      { "@type": "State", name: "Kansas" },
    ],
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "$$",
    image: `${SITE_URL}/images/brower-inc-og.jpg`,
    sameAs: [
      "https://www.facebook.com/TroysPortables/",
      "https://www.youtube.com/@TROYSPORTABLES",
      "https://www.linkedin.com/in/troy-brower-47824790/",
    ],
  };
}

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
    areaServed: [
      { "@type": "State", name: "Oklahoma" },
      { "@type": "State", name: "Kansas" },
    ],
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
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        postalCode: ADDRESS.zip,
        addressCountry: "US",
      },
    },
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
