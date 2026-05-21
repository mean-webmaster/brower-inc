import { IMAGES } from "./images";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-many-porta-potties-construction-site-oklahoma",
    title:
      "How Many Porta Potties Does Your Oklahoma Construction Site Need? (OSHA Calculator)",
    excerpt:
      "Free OSHA porta potty calculator for Oklahoma construction sites. Covers the 29 CFR 1926.51 ratio (1:20, 1:40), hand wash requirements, ADA units, shift patterns, and real jobsite examples.",
    date: "2026-04-23",
    readTime: "9 min read",
    category: "Construction & Jobsite Compliance",
    image: IMAGES.blogCoverOshaConstructionCalculator,
    imageAlt:
      "Row of blue Brower Inc. porta potties lined up on an Oklahoma construction site — OSHA 29 CFR 1926.51 compliance calculator cover",
  },
  {
    slug: "porta-potty-vs-luxury-restroom-trailer-oklahoma",
    title:
      "Porta Potty vs. Luxury Restroom Trailer: Which Is Right for Your Oklahoma Event?",
    excerpt:
      "Side-by-side comparison of porta potty rental vs. luxury restroom trailer rental for Oklahoma weddings and events — features, pricing, guest experience, and when each one is the right call.",
    date: "2026-04-23",
    readTime: "10 min read",
    category: "Events, Weddings & Gatherings",
    image: IMAGES.blogCoverPortaPottyVsLuxuryTrailer,
    imageAlt:
      "Blue Brower Inc. porta potty next to a white luxury restroom trailer at an outdoor Oklahoma wedding venue — side-by-side comparison cover",
  },
  {
    slug: "how-clean-are-portable-restrooms",
    title: "How Clean Are Portable Restrooms, Really? Inside Brower Inc.'s Cleaning Process",
    excerpt:
      "The honest answer about portable restroom cleanliness — plus Brower Inc.'s 7-step weekly servicing protocol, what causes odors, and how to spot a provider that actually cleans their units.",
    date: "2026-04-12",
    readTime: "10 min read",
    category: "Authority",
    image: IMAGES.blogCoverHowCleanArePortableRestrooms,
    imageAlt:
      "Brower Inc. technician in navy uniform wiping down a freshly-detailed blue porta potty with a microfiber cloth inside a clean industrial warehouse in Newkirk, Oklahoma",
  },
  {
    slug: "oil-gas-portable-sanitation-oklahoma",
    title: "Portable Sanitation Solutions for Oklahoma's Oil & Gas Industry",
    excerpt:
      "Complete guide to portable restroom requirements for Oklahoma drilling sites, pipeline construction, and wind farms — OSHA compliance, remote servicing logistics, and long-term rental solutions.",
    date: "2026-04-12",
    readTime: "11 min read",
    category: "Industry Solutions",
    image: IMAGES.blogCoverOilGasPortableSanitation,
    imageAlt:
      "Blue Brower Inc. porta potty in the foreground of an Oklahoma oil and gas site with a drilling rig, pump jack, and a wind turbine on the horizon",
  },
  {
    slug: "septic-system-maintenance-oklahoma",
    title: "The Oklahoma Homeowner's Complete Guide to Septic System Maintenance",
    excerpt:
      "Everything Oklahoma homeowners need to know about septic system care — pumping schedules, warning signs, DEQ regulations, seasonal tips, and what it costs in 2026.",
    date: "2026-04-12",
    readTime: "12 min read",
    category: "Septic & Property Maintenance",
    image: IMAGES.blogCoverSepticSystemMaintenance,
    imageAlt:
      "Branded white Brower Inc. vacuum septic pump truck on a gravel residential driveway in rural Oklahoma with a technician operating a green pumping hose into a backyard septic cleanout",
  },
  {
    slug: "porta-potty-rental-near-me-rural-oklahoma",
    title: "Porta Potty Rental Near Me: Why That Search Gives Rural Oklahomans the Wrong Results",
    excerpt:
      "Searching 'porta potty rental near me' from Newkirk, Ponca City, or Enid surfaces national chains that won't deliver to your rural address. Here's why — and what to do instead.",
    date: "2026-04-09",
    readTime: "9 min read",
    category: "Local Guide",
    image: IMAGES.blogCoverPortaPottyRentalNearMeRuralOklahoma,
    imageAlt:
      "Blue porta potty beside a rural Oklahoma gravel road with a red service pickup at golden hour",
  },
  {
    slug: "porta-potty-rental-cost-oklahoma",
    title: "How Much Does It Cost to Rent a Porta Potty in Oklahoma? (2026 Pricing Guide)",
    excerpt:
      "Transparent 2026 pricing for porta potty rentals in Oklahoma — standard units, ADA, hand wash stations, and VIP trailers, plus the 6 factors that change your final price.",
    date: "2026-04-07",
    readTime: "11 min read",
    category: "Pricing & Buyer Guides",
    image: IMAGES.blogCoverPortaPottyRentalCostOklahoma,
    imageAlt: "Four Brower Inc. porta potties on a concrete pad in rural Oklahoma with wheat fields and Brower Inc. branding at dusk",
  },
  {
    slug: "portable-restroom-rental-guide",
    title: "The Complete Guide to Renting Portable Restrooms in Oklahoma",
    excerpt:
      "Everything Oklahoma event planners and contractors need to know about renting portable restrooms — types of units, the rental process, what's included, delivery logistics, and how to choose a provider.",
    date: "2025-03-15",
    readTime: "12 min read",
    category: "Rental Guide",
    image: IMAGES.blogCoverPortableRestroomRentalGuide,
    imageAlt:
      "Red Brower Inc. flatbed service truck staged beside a freshly-delivered blue porta potty on a concrete pad at an Oklahoma property at sunrise",
  },
  {
    slug: "complete-guide-portable-restrooms-oklahoma-outdoor-events",
    title:
      "The Complete Guide to Portable Restrooms for Oklahoma Outdoor Events",
    excerpt:
      "The complete Oklahoma event-planner's guide to portable restroom rental — unit count, placement, servicing, alcohol & weather adjustments, luxury trailers, ADA, pricing, and a 12-week booking timeline. Real Oklahoma venues.",
    date: "2026-05-18",
    readTime: "15 min read",
    category: "Events, Weddings & Gatherings",
    image: IMAGES.blogCoverCompleteGuideEvents,
    imageAlt:
      "Brower Inc. luxury restroom trailer with two blue porta potties beside a white wedding tent at an Oklahoma outdoor venue at golden hour",
  },
  {
    slug: "osha-portable-restroom-requirements-construction-oklahoma",
    title:
      "OSHA Portable Restroom Requirements: The Oklahoma Construction Compliance Checklist",
    excerpt:
      "The complete OSHA 29 CFR 1926.51 compliance checklist for Oklahoma construction sites — unit ratios, hand washing rules, ADA, sex separation, placement, servicing, and the 2026 fine schedule. Print-ready.",
    date: "2026-05-18",
    readTime: "12 min read",
    category: "Construction & Jobsite Compliance",
    image: IMAGES.blogCoverOshaComplianceChecklist,
    imageAlt:
      "Brower Inc. portable restrooms and a hand washing station on an active Oklahoma construction site with steel framing in the background at golden hour — OSHA 29 CFR 1926.51 sanitation compliance",
  },
  {
    slug: "event-planning-restroom-guide",
    title: "How Many Portable Restrooms for an Outdoor Event? (2025 Calculator Guide)",
    excerpt:
      "Quick-reference chart for portable restroom counts at weddings, festivals, rodeos, and outdoor events in Oklahoma. Covers guest count, duration, alcohol, VIP upgrades, and booking timelines.",
    date: "2025-02-10",
    readTime: "10 min read",
    category: "Event Planning",
    image: IMAGES.blogCoverEventPlanningRestroom,
    imageAlt:
      "Long perspective row of branded blue Brower Inc. porta potties on freshly cut grass at an outdoor Oklahoma wedding venue with a white peaked tent and warm string lights at golden hour",
  },
];
