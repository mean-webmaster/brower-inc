/**
 * Internal-link registry — the single source of truth for site interlinking.
 *
 * Goal: maximize SEO link equity flow between blogs (peer linking) and from
 * blogs into the money pages (services + locations + industries), and back the
 * other way (reverse links from money pages into supporting blog content).
 *
 * Everything that renders an internal link block should pull its targets from
 * here so anchors/labels stay consistent and slugs can't silently rot. When a
 * new blog/service/area is added, register it here once and every related block
 * picks it up.
 */

export interface LinkRef {
  href: string;
  /** Human anchor text. Kept descriptive + keyword-bearing for SEO. */
  label: string;
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

export const SERVICE_LABELS: Record<string, string> = {
  "portable-restrooms": "Standard portable restroom rentals",
  "ada-compliant-portable-restrooms": "ADA-compliant portable restrooms",
  "deluxe-flushable-portable-toilets": "Deluxe flushable portable toilets",
  "emergency-porta-potty-rental": "Emergency porta potty rental",
  "hand-washing-stations": "Hand washing stations",
  "long-term-rentals": "Long-term restroom rentals",
  "vip-shower-restroom-trailers": "VIP shower & restroom trailers",
  "septic-services": "Septic services",
  "septic-tank-pumping": "Septic tank pumping",
  "septic-inspections": "Septic inspections",
};

export function serviceLink(slug: string): LinkRef {
  return { href: `/services/${slug}`, label: SERVICE_LABELS[slug] ?? slug };
}

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                          */
/* ------------------------------------------------------------------ */

export const INDUSTRY_LABELS: Record<string, string> = {
  construction: "Construction & jobsite sanitation",
  "events-weddings": "Events & weddings",
  "oil-gas": "Oil & gas field sanitation",
  agriculture: "Agriculture & ranching",
  "government-municipal": "Government & municipal",
  "film-tv": "Film & TV production",
  "utilities-telecom": "Utilities & telecom",
  "disaster-relief": "Disaster relief",
  "real-estate": "Real estate & property",
};

export function industryLink(slug: string): LinkRef {
  return { href: `/industries/${slug}`, label: INDUSTRY_LABELS[slug] ?? slug };
}

/* ------------------------------------------------------------------ */
/* SERVICE AREAS (key locations — full list lives in constants.ts)    */
/* ------------------------------------------------------------------ */

export const AREA_LABELS: Record<string, string> = {
  "kay-county": "Kay County, Oklahoma",
  "garfield-county": "Garfield County, Oklahoma",
  "logan-county": "Logan County, Oklahoma",
  "kingfisher-county": "Kingfisher County, Oklahoma",
  "woods-county": "Woods County, Oklahoma",
  newkirk: "Newkirk, OK",
  "ponca-city": "Ponca City, OK",
  blackwell: "Blackwell, OK",
  tonkawa: "Tonkawa, OK",
  enid: "Enid, OK",
  stillwater: "Stillwater, OK",
  perry: "Perry, OK",
  guthrie: "Guthrie, OK",
  hennessey: "Hennessey, OK",
  crescent: "Crescent, OK",
};

export function areaLink(slug: string): LinkRef {
  return { href: `/service-areas/${slug}`, label: AREA_LABELS[slug] ?? slug };
}

/* ------------------------------------------------------------------ */
/* BLOGS                                                               */
/* ------------------------------------------------------------------ */

/** Short, keyword-bearing anchor text for each blog (better than the long H1). */
export const BLOG_LABELS: Record<string, string> = {
  "signs-septic-tank-needs-pumping-oklahoma":
    "5 warning signs your septic tank needs pumping",
  "barn-wedding-not-enough-bathrooms-oklahoma":
    "Barn wedding bathroom shortage — how many restrooms you need",
  "aerobic-septic-system-oklahoma":
    "Aerobic septic systems in Oklahoma (how they work & cost)",
  "restroom-trailer-rental-oklahoma":
    "Restroom trailer rental in Oklahoma (costs & sizes)",
  "ada-portable-restroom-construction-oklahoma":
    "ADA porta potty rules for Oklahoma jobsites",
  "septic-tank-pumping-cost-oklahoma":
    "Septic tank pumping cost in Oklahoma",
  "how-to-choose-portable-restroom-company-oklahoma":
    "How to choose a portable restroom provider (10-point checklist)",
  "how-much-does-a-porta-potty-rental-really-cost":
    "What a porta potty rental really costs (hidden fees)",
  "how-many-porta-potties-construction-site-oklahoma":
    "How many porta potties your site needs (OSHA calculator)",
  "porta-potty-vs-luxury-restroom-trailer-oklahoma":
    "Porta potty vs. luxury restroom trailer",
  "how-clean-are-portable-restrooms":
    "How clean are portable restrooms, really?",
  "oil-gas-portable-sanitation-oklahoma":
    "Portable sanitation for Oklahoma oil & gas sites",
  "septic-system-maintenance-oklahoma":
    "Oklahoma septic system maintenance guide",
  "porta-potty-rental-near-me-rural-oklahoma":
    "Porta potty rental near me (rural Oklahoma)",
  "porta-potty-rental-cost-oklahoma":
    "Oklahoma porta potty rental pricing guide",
  "portable-restroom-rental-guide":
    "The complete guide to renting portable restrooms",
  "complete-guide-portable-restrooms-oklahoma-outdoor-events":
    "Portable restrooms for Oklahoma outdoor events",
  "osha-portable-restroom-requirements-construction-oklahoma":
    "OSHA portable restroom requirements checklist",
  "event-planning-restroom-guide":
    "How many portable restrooms for an outdoor event?",
  "emergency-portable-restroom-deployment-oklahoma":
    "Emergency portable restroom deployment (disaster response)",
  "local-vs-national-portable-restroom-providers-oklahoma":
    "Local vs. national porta potty providers in Oklahoma",
};

export function blogLink(slug: string): LinkRef {
  return { href: `/blog/${slug}`, label: BLOG_LABELS[slug] ?? slug };
}

/* ------------------------------------------------------------------ */
/* CURATED RELATION MAP                                                */
/* ------------------------------------------------------------------ */

interface RelatedSpec {
  blogs?: string[];
  services?: string[];
  areas?: string[];
}

/**
 * Per-blog curated related content. Each blog points to 3–4 peer blogs and the
 * 2–3 services + 1–2 locations most relevant to its topic. Hand-curated so the
 * relationships are genuinely useful (not just same-category noise).
 */
export const BLOG_RELATIONS: Record<string, RelatedSpec> = {
  "signs-septic-tank-needs-pumping-oklahoma": {
    blogs: [
      "septic-tank-pumping-cost-oklahoma",
      "septic-system-maintenance-oklahoma",
      "aerobic-septic-system-oklahoma",
    ],
    services: ["septic-tank-pumping", "septic-services", "septic-inspections"],
    areas: ["kay-county", "garfield-county"],
  },
  "barn-wedding-not-enough-bathrooms-oklahoma": {
    blogs: [
      "restroom-trailer-rental-oklahoma",
      "porta-potty-vs-luxury-restroom-trailer-oklahoma",
      "complete-guide-portable-restrooms-oklahoma-outdoor-events",
      "event-planning-restroom-guide",
    ],
    services: [
      "vip-shower-restroom-trailers",
      "portable-restrooms",
      "deluxe-flushable-portable-toilets",
    ],
    areas: ["ponca-city", "stillwater"],
  },
  "aerobic-septic-system-oklahoma": {
    blogs: [
      "septic-system-maintenance-oklahoma",
      "septic-tank-pumping-cost-oklahoma",
      "porta-potty-rental-near-me-rural-oklahoma",
    ],
    services: ["septic-services", "septic-tank-pumping", "septic-inspections"],
    areas: ["kay-county", "garfield-county"],
  },
  "restroom-trailer-rental-oklahoma": {
    blogs: [
      "porta-potty-vs-luxury-restroom-trailer-oklahoma",
      "complete-guide-portable-restrooms-oklahoma-outdoor-events",
      "event-planning-restroom-guide",
    ],
    services: [
      "vip-shower-restroom-trailers",
      "portable-restrooms",
      "hand-washing-stations",
    ],
    areas: ["ponca-city", "stillwater"],
  },
  "ada-portable-restroom-construction-oklahoma": {
    blogs: [
      "osha-portable-restroom-requirements-construction-oklahoma",
      "how-many-porta-potties-construction-site-oklahoma",
      "how-to-choose-portable-restroom-company-oklahoma",
    ],
    services: [
      "ada-compliant-portable-restrooms",
      "portable-restrooms",
      "hand-washing-stations",
    ],
    areas: ["kay-county", "garfield-county"],
  },
  "septic-tank-pumping-cost-oklahoma": {
    blogs: [
      "septic-system-maintenance-oklahoma",
      "porta-potty-rental-cost-oklahoma",
      "porta-potty-rental-near-me-rural-oklahoma",
    ],
    services: ["septic-tank-pumping", "septic-services", "septic-inspections"],
    areas: ["kay-county", "garfield-county"],
  },
  "how-to-choose-portable-restroom-company-oklahoma": {
    blogs: [
      "how-much-does-a-porta-potty-rental-really-cost",
      "how-clean-are-portable-restrooms",
      "porta-potty-rental-cost-oklahoma",
    ],
    services: ["portable-restrooms", "long-term-rentals", "emergency-porta-potty-rental"],
    areas: ["kay-county", "ponca-city"],
  },
  "how-much-does-a-porta-potty-rental-really-cost": {
    blogs: [
      "porta-potty-rental-cost-oklahoma",
      "how-to-choose-portable-restroom-company-oklahoma",
      "porta-potty-vs-luxury-restroom-trailer-oklahoma",
    ],
    services: ["portable-restrooms", "hand-washing-stations", "deluxe-flushable-portable-toilets"],
    areas: ["kay-county", "ponca-city"],
  },
  "how-many-porta-potties-construction-site-oklahoma": {
    blogs: [
      "osha-portable-restroom-requirements-construction-oklahoma",
      "ada-portable-restroom-construction-oklahoma",
      "how-to-choose-portable-restroom-company-oklahoma",
    ],
    services: ["portable-restrooms", "hand-washing-stations", "ada-compliant-portable-restrooms"],
    areas: ["kay-county", "garfield-county"],
  },
  "porta-potty-vs-luxury-restroom-trailer-oklahoma": {
    blogs: [
      "complete-guide-portable-restrooms-oklahoma-outdoor-events",
      "event-planning-restroom-guide",
      "how-much-does-a-porta-potty-rental-really-cost",
    ],
    services: ["vip-shower-restroom-trailers", "portable-restrooms", "hand-washing-stations"],
    areas: ["ponca-city", "stillwater"],
  },
  "how-clean-are-portable-restrooms": {
    blogs: [
      "how-to-choose-portable-restroom-company-oklahoma",
      "porta-potty-rental-cost-oklahoma",
      "complete-guide-portable-restrooms-oklahoma-outdoor-events",
    ],
    services: ["portable-restrooms", "hand-washing-stations", "long-term-rentals"],
    areas: ["kay-county", "ponca-city"],
  },
  "oil-gas-portable-sanitation-oklahoma": {
    blogs: [
      "osha-portable-restroom-requirements-construction-oklahoma",
      "how-many-porta-potties-construction-site-oklahoma",
      "porta-potty-rental-near-me-rural-oklahoma",
    ],
    services: ["long-term-rentals", "portable-restrooms", "hand-washing-stations"],
    areas: ["garfield-county", "woods-county"],
  },
  "septic-system-maintenance-oklahoma": {
    blogs: [
      "septic-tank-pumping-cost-oklahoma",
      "porta-potty-rental-near-me-rural-oklahoma",
      "porta-potty-rental-cost-oklahoma",
    ],
    services: ["septic-services", "septic-tank-pumping", "septic-inspections"],
    areas: ["kay-county", "logan-county"],
  },
  "porta-potty-rental-near-me-rural-oklahoma": {
    blogs: [
      "porta-potty-rental-cost-oklahoma",
      "how-to-choose-portable-restroom-company-oklahoma",
      "septic-system-maintenance-oklahoma",
    ],
    services: ["portable-restrooms", "long-term-rentals", "emergency-porta-potty-rental"],
    areas: ["newkirk", "ponca-city", "enid"],
  },
  "porta-potty-rental-cost-oklahoma": {
    blogs: [
      "how-much-does-a-porta-potty-rental-really-cost",
      "how-to-choose-portable-restroom-company-oklahoma",
      "porta-potty-vs-luxury-restroom-trailer-oklahoma",
    ],
    services: ["portable-restrooms", "ada-compliant-portable-restrooms", "hand-washing-stations"],
    areas: ["kay-county", "ponca-city"],
  },
  "portable-restroom-rental-guide": {
    blogs: [
      "porta-potty-rental-cost-oklahoma",
      "how-to-choose-portable-restroom-company-oklahoma",
      "complete-guide-portable-restrooms-oklahoma-outdoor-events",
      "event-planning-restroom-guide",
    ],
    services: ["portable-restrooms", "vip-shower-restroom-trailers", "hand-washing-stations"],
    areas: ["kay-county", "ponca-city"],
  },
  "complete-guide-portable-restrooms-oklahoma-outdoor-events": {
    blogs: [
      "event-planning-restroom-guide",
      "porta-potty-vs-luxury-restroom-trailer-oklahoma",
      "porta-potty-rental-cost-oklahoma",
    ],
    services: ["vip-shower-restroom-trailers", "portable-restrooms", "hand-washing-stations"],
    areas: ["ponca-city", "stillwater"],
  },
  "osha-portable-restroom-requirements-construction-oklahoma": {
    blogs: [
      "how-many-porta-potties-construction-site-oklahoma",
      "ada-portable-restroom-construction-oklahoma",
      "how-to-choose-portable-restroom-company-oklahoma",
    ],
    services: ["portable-restrooms", "hand-washing-stations", "ada-compliant-portable-restrooms"],
    areas: ["kay-county", "garfield-county"],
  },
  "event-planning-restroom-guide": {
    blogs: [
      "complete-guide-portable-restrooms-oklahoma-outdoor-events",
      "porta-potty-vs-luxury-restroom-trailer-oklahoma",
      "porta-potty-rental-cost-oklahoma",
    ],
    services: ["portable-restrooms", "vip-shower-restroom-trailers", "hand-washing-stations"],
    areas: ["ponca-city", "stillwater"],
  },
  "emergency-portable-restroom-deployment-oklahoma": {
    blogs: [
      "porta-potty-rental-near-me-rural-oklahoma",
      "oil-gas-portable-sanitation-oklahoma",
      "how-many-porta-potties-construction-site-oklahoma",
    ],
    services: ["emergency-porta-potty-rental", "portable-restrooms", "hand-washing-stations"],
    areas: ["kay-county", "garfield-county"],
  },
  "local-vs-national-portable-restroom-providers-oklahoma": {
    blogs: [
      "how-to-choose-portable-restroom-company-oklahoma",
      "porta-potty-rental-near-me-rural-oklahoma",
      "porta-potty-rental-cost-oklahoma",
    ],
    services: ["portable-restrooms", "emergency-porta-potty-rental", "long-term-rentals"],
    areas: ["newkirk", "ponca-city"],
  },
};

/**
 * Resolve a blog's curated related content into ready-to-render link groups.
 * Unknown slugs (e.g. DB-driven posts not in the map) fall back to a sensible
 * default set so the dynamic route still gets useful links.
 */
export function getRelatedForBlog(slug: string): {
  blogs: LinkRef[];
  services: LinkRef[];
  areas: LinkRef[];
} {
  const spec = BLOG_RELATIONS[slug] ?? DEFAULT_RELATION;
  return {
    blogs: (spec.blogs ?? []).filter((s) => s !== slug).map(blogLink),
    services: (spec.services ?? []).map(serviceLink),
    areas: (spec.areas ?? []).map(areaLink),
  };
}

const DEFAULT_RELATION: RelatedSpec = {
  blogs: [
    "porta-potty-rental-cost-oklahoma",
    "how-to-choose-portable-restroom-company-oklahoma",
    "portable-restroom-rental-guide",
  ],
  services: ["portable-restrooms", "hand-washing-stations", "septic-services"],
  areas: ["kay-county", "ponca-city"],
};

/* ------------------------------------------------------------------ */
/* REVERSE LINKS — money pages → supporting blog content              */
/* ------------------------------------------------------------------ */

/** Which blogs each service page should surface as "related guides". */
export const SERVICE_TO_BLOGS: Record<string, string[]> = {
  "portable-restrooms": [
    "porta-potty-rental-cost-oklahoma",
    "how-to-choose-portable-restroom-company-oklahoma",
    "portable-restroom-rental-guide",
    "how-clean-are-portable-restrooms",
  ],
  "ada-compliant-portable-restrooms": [
    "ada-portable-restroom-construction-oklahoma",
    "osha-portable-restroom-requirements-construction-oklahoma",
    "how-many-porta-potties-construction-site-oklahoma",
  ],
  "deluxe-flushable-portable-toilets": [
    "barn-wedding-not-enough-bathrooms-oklahoma",
    "porta-potty-vs-luxury-restroom-trailer-oklahoma",
    "complete-guide-portable-restrooms-oklahoma-outdoor-events",
    "porta-potty-rental-cost-oklahoma",
  ],
  "emergency-porta-potty-rental": [
    "emergency-portable-restroom-deployment-oklahoma",
    "porta-potty-rental-near-me-rural-oklahoma",
    "local-vs-national-portable-restroom-providers-oklahoma",
    "porta-potty-rental-cost-oklahoma",
  ],
  "hand-washing-stations": [
    "osha-portable-restroom-requirements-construction-oklahoma",
    "how-many-porta-potties-construction-site-oklahoma",
    "complete-guide-portable-restrooms-oklahoma-outdoor-events",
  ],
  "long-term-rentals": [
    "oil-gas-portable-sanitation-oklahoma",
    "how-many-porta-potties-construction-site-oklahoma",
    "porta-potty-rental-cost-oklahoma",
  ],
  "vip-shower-restroom-trailers": [
    "restroom-trailer-rental-oklahoma",
    "barn-wedding-not-enough-bathrooms-oklahoma",
    "porta-potty-vs-luxury-restroom-trailer-oklahoma",
    "complete-guide-portable-restrooms-oklahoma-outdoor-events",
    "event-planning-restroom-guide",
  ],
  "septic-services": [
    "signs-septic-tank-needs-pumping-oklahoma",
    "aerobic-septic-system-oklahoma",
    "septic-system-maintenance-oklahoma",
    "septic-tank-pumping-cost-oklahoma",
    "porta-potty-rental-near-me-rural-oklahoma",
  ],
  "septic-tank-pumping": [
    "signs-septic-tank-needs-pumping-oklahoma",
    "septic-tank-pumping-cost-oklahoma",
    "aerobic-septic-system-oklahoma",
    "septic-system-maintenance-oklahoma",
    "porta-potty-rental-cost-oklahoma",
  ],
  "septic-inspections": [
    "aerobic-septic-system-oklahoma",
    "septic-system-maintenance-oklahoma",
    "septic-tank-pumping-cost-oklahoma",
  ],
};

export function getBlogsForService(slug: string): LinkRef[] {
  return (SERVICE_TO_BLOGS[slug] ?? []).map(blogLink);
}

/** Which blogs each industry page should surface as "related guides". */
export const INDUSTRY_TO_BLOGS: Record<string, string[]> = {
  construction: [
    "osha-portable-restroom-requirements-construction-oklahoma",
    "how-many-porta-potties-construction-site-oklahoma",
    "ada-portable-restroom-construction-oklahoma",
  ],
  "events-weddings": [
    "barn-wedding-not-enough-bathrooms-oklahoma",
    "complete-guide-portable-restrooms-oklahoma-outdoor-events",
    "restroom-trailer-rental-oklahoma",
    "event-planning-restroom-guide",
    "porta-potty-vs-luxury-restroom-trailer-oklahoma",
  ],
  "oil-gas": [
    "oil-gas-portable-sanitation-oklahoma",
    "porta-potty-rental-near-me-rural-oklahoma",
    "osha-portable-restroom-requirements-construction-oklahoma",
  ],
  agriculture: [
    "porta-potty-rental-near-me-rural-oklahoma",
    "aerobic-septic-system-oklahoma",
    "septic-system-maintenance-oklahoma",
    "porta-potty-rental-cost-oklahoma",
  ],
  "government-municipal": [
    "osha-portable-restroom-requirements-construction-oklahoma",
    "how-to-choose-portable-restroom-company-oklahoma",
    "porta-potty-rental-cost-oklahoma",
  ],
  "film-tv": [
    "restroom-trailer-rental-oklahoma",
    "porta-potty-vs-luxury-restroom-trailer-oklahoma",
    "complete-guide-portable-restrooms-oklahoma-outdoor-events",
    "how-clean-are-portable-restrooms",
  ],
  "utilities-telecom": [
    "oil-gas-portable-sanitation-oklahoma",
    "porta-potty-rental-near-me-rural-oklahoma",
    "how-many-porta-potties-construction-site-oklahoma",
  ],
  "disaster-relief": [
    "emergency-portable-restroom-deployment-oklahoma",
    "porta-potty-rental-near-me-rural-oklahoma",
    "porta-potty-rental-cost-oklahoma",
  ],
  "real-estate": [
    "signs-septic-tank-needs-pumping-oklahoma",
    "aerobic-septic-system-oklahoma",
    "septic-system-maintenance-oklahoma",
    "septic-tank-pumping-cost-oklahoma",
  ],
};

export function getBlogsForIndustry(slug: string): LinkRef[] {
  return (INDUSTRY_TO_BLOGS[slug] ?? []).map(blogLink);
}

/**
 * Blogs to surface on a location/service-area page. Locations are generic, so
 * we feature the broadest, highest-intent guides (pricing + "near me" + the
 * two evergreen pillars) for every area.
 */
export function getBlogsForArea(): LinkRef[] {
  return [
    "porta-potty-rental-near-me-rural-oklahoma",
    "porta-potty-rental-cost-oklahoma",
    "how-to-choose-portable-restroom-company-oklahoma",
    "septic-tank-pumping-cost-oklahoma",
  ].map(blogLink);
}

/* ------------------------------------------------------------------ */
/* SERVICE ↔ SERVICE / INDUSTRY / LOCATION cross-links                 */
/* ------------------------------------------------------------------ */

/**
 * Related ("you may also need") services per service page. Two clusters —
 * portable-sanitation and septic — with a couple of cross-cluster bridges
 * (e.g. long-term rentals ↔ septic) where the buyer overlap is real.
 */
export const SERVICE_TO_SERVICES: Record<string, string[]> = {
  "portable-restrooms": [
    "hand-washing-stations",
    "ada-compliant-portable-restrooms",
    "deluxe-flushable-portable-toilets",
    "long-term-rentals",
  ],
  "ada-compliant-portable-restrooms": [
    "portable-restrooms",
    "hand-washing-stations",
    "deluxe-flushable-portable-toilets",
  ],
  "deluxe-flushable-portable-toilets": [
    "vip-shower-restroom-trailers",
    "portable-restrooms",
    "hand-washing-stations",
  ],
  "emergency-porta-potty-rental": [
    "portable-restrooms",
    "hand-washing-stations",
    "long-term-rentals",
  ],
  "hand-washing-stations": [
    "portable-restrooms",
    "ada-compliant-portable-restrooms",
    "vip-shower-restroom-trailers",
  ],
  "long-term-rentals": [
    "portable-restrooms",
    "hand-washing-stations",
    "septic-services",
  ],
  "vip-shower-restroom-trailers": [
    "deluxe-flushable-portable-toilets",
    "hand-washing-stations",
    "portable-restrooms",
  ],
  "septic-services": [
    "septic-tank-pumping",
    "septic-inspections",
    "long-term-rentals",
  ],
  "septic-tank-pumping": [
    "septic-services",
    "septic-inspections",
    "portable-restrooms",
  ],
  "septic-inspections": [
    "septic-tank-pumping",
    "septic-services",
  ],
};

export function getRelatedServices(slug: string): LinkRef[] {
  return (SERVICE_TO_SERVICES[slug] ?? [])
    .filter((s) => s !== slug)
    .map(serviceLink);
}

/** Industries each service most commonly serves. */
export const SERVICE_TO_INDUSTRIES: Record<string, string[]> = {
  "portable-restrooms": ["construction", "events-weddings", "agriculture", "government-municipal"],
  "ada-compliant-portable-restrooms": ["construction", "government-municipal", "events-weddings"],
  "deluxe-flushable-portable-toilets": ["events-weddings", "film-tv", "real-estate"],
  "emergency-porta-potty-rental": ["disaster-relief", "construction", "utilities-telecom"],
  "hand-washing-stations": ["construction", "events-weddings", "government-municipal", "agriculture"],
  "long-term-rentals": ["oil-gas", "construction", "utilities-telecom", "government-municipal"],
  "vip-shower-restroom-trailers": ["events-weddings", "film-tv", "oil-gas"],
  "septic-services": ["real-estate", "agriculture", "government-municipal"],
  "septic-tank-pumping": ["real-estate", "agriculture"],
  "septic-inspections": ["real-estate", "agriculture"],
};

export function getIndustriesForService(slug: string): LinkRef[] {
  return (SERVICE_TO_INDUSTRIES[slug] ?? []).map(industryLink);
}

/**
 * Headline coverage areas linked from every service page (top counties + cities
 * by demand), capped at the /service-areas hub so we never over-link a single
 * page. The hub page then fans out to all 55 areas.
 */
export const SERVICE_COVERAGE_AREAS = [
  "kay-county",
  "garfield-county",
  "logan-county",
  "ponca-city",
  "enid",
  "stillwater",
];

export function getServiceAreasForService(): LinkRef[] {
  return [
    ...SERVICE_COVERAGE_AREAS.map(areaLink),
    { href: "/service-areas", label: "All 55 Oklahoma & Kansas service areas" },
  ];
}
