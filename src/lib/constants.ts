export const SITE_NAME = "Brower Inc.";
export const SITE_URL = "https://browerinc.net";
export const SITE_TAGLINE =
  "Portable Restrooms, Luxury Trailers & Septic Services";
export const PHONE = "(580) 747-6206";
export const PHONE_HREF = "tel:+15807476206";
export const EMAIL = "troy@browerinc.net";
export const ADDRESS = {
  street: "Newkirk",
  city: "Newkirk",
  state: "OK",
  zip: "74647",
  full: "Newkirk, OK 74647",
};
export const SOCIAL = {
  facebook: "https://www.facebook.com/TroysPortables/",
  youtube: "https://www.youtube.com/@TROYSPORTABLES",
  linkedin: "https://www.linkedin.com/in/troy-brower-47824790/",
};
export const BUSINESS_HOURS = "Monday - Friday: 8:00 AM - 5:00 PM";

export const SERVICES = [
  {
    title: "Portable Restrooms",
    slug: "portable-restrooms",
    shortDescription:
      "Portable restroom and porta potty rental for events, construction sites, and temporary needs across Oklahoma and southern Kansas.",
    description:
      "We have many different types of units to fit your needs. Our featured unit is the Maxim 300 — available in blue, tan, and pink (an area favorite!). From construction sites to special events and weddings, our portable restrooms and porta potties are extremely nice and very spacious. Whether you are hosting a backyard BBQ or a public celebration, Brower Inc. delivers and maintains high-quality porta potty units throughout Oklahoma and southern Kansas. We serve Kay County, Garfield County, Kingfisher County, Logan County, and communities across the Kansas border.",
    features: [
      "Maxim 300 units — spacious and well-built",
      "Available in blue, tan, and pink",
      "Regular cleaning and maintenance included",
      "ADA-compliant units available",
      "Hand sanitizer dispensers included",
      "Flexible rental periods with fast delivery",
    ],
    useCases: [
      "Outdoor weddings and receptions",
      "Construction sites",
      "Community festivals and fairs",
      "Backyard BBQs and family gatherings",
      "Farm and ranch operations",
      "Sporting events and public celebrations",
    ],
    icon: "restroom",
  },
  {
    title: "VIP Shower & Restroom Trailers",
    slug: "vip-shower-restroom-trailers",
    shortDescription:
      "High-end luxury mobile restroom trailers with premium amenities serving Oklahoma and Kansas.",
    description:
      "Elevate your event with our 2 VIP restroom shower and luxury trailers — 18-station units designed to make you feel at home. These amazingly clean and extremely comfortable luxury trailers provide heat and air conditioning, spacious fully enclosed private stalls, running water, and superior LED lighting. Perfect for weddings, golf outings, corporate functions, casino events, and any upscale or large gathering throughout Oklahoma and southern Kansas.",
    features: [
      "18-station capacity per trailer",
      "Heat and air conditioning",
      "Running water with soap and paper towel dispensers",
      "Large countertops and full-size mirrors",
      "Superior LED lighting throughout",
      "Stairs with sturdy handrails and porch lights for safety",
    ],
    useCases: [
      "Upscale weddings and galas",
      "Golf outings and corporate functions",
      "Casino events and VIP gatherings",
      "Film and production sets",
      "Large festivals and community events",
      "Long-term luxury rental needs",
    ],
    icon: "vip",
  },
  {
    title: "Hand Washing Stations",
    slug: "hand-washing-stations",
    shortDescription:
      "Portable hand washing solutions for events and worksites in Oklahoma and Kansas.",
    description:
      "Hand washing stations are cost-effective, eco-friendly, and always sincerely appreciated by guests. They are standalone units that do not require additional electricity or water hookups, so you can host your event in any secluded or rustic location. Each station comes fully stocked with water, paper towels, and soap — making cleanliness easy in any environment. Available for delivery throughout Oklahoma and southern Kansas.",
    features: [
      "Standalone — no electricity or water hookup needed",
      "Fully stocked with soap, water, and paper towels",
      "Cost-effective and eco-friendly",
      "Minimizes water waste",
      "Available for long-term and short-term plans",
      "Perfect companion to portable restroom rentals",
    ],
    useCases: [
      "Birthday parties and outdoor gatherings",
      "Company excursions and corporate events",
      "Construction sites",
      "Food festivals and outdoor dining",
      "Agricultural operations",
      "Any event where cleanliness matters",
    ],
    icon: "handwash",
  },
  {
    title: "Septic Services",
    slug: "septic-services",
    shortDescription:
      "Septic system maintenance, pumping, and sanitation support in Oklahoma and Kansas.",
    description:
      "When it is time for septic pumping, Brower Inc. is the company you can depend on. Solid waste slowly accumulates in your tank and can lead to backups and other problems once the tank exceeds its holding capacity. A septic pump from our crew empties the tank, giving it a fresh start. We also handle septic repair and full septic and aerobic system installation — including site surveys. Serving homeowners and businesses across Oklahoma and southern Kansas.",
    features: [
      "Septic tank pumping and cleaning",
      "Septic repair for malfunctioning systems",
      "Septic and aerobic system installation",
      "Site surveys for new installations",
      "Emergency service available",
      "Residential and commercial service",
    ],
    useCases: [
      "Residential septic maintenance",
      "Septic system repair and troubleshooting",
      "New septic or aerobic system installation",
      "Commercial property management",
      "Real estate transaction inspections",
      "Rural property maintenance",
    ],
    icon: "septic",
  },
  {
    title: "Long-Term Rentals",
    slug: "long-term-rentals",
    shortDescription:
      "Extended rental options for ongoing construction or commercial projects in Oklahoma and Kansas.",
    description:
      "Supplying your family members, employees, or team with modern conveniences can be challenging in remote places. You can rent our portable restrooms for weeks, months, or even years. All long-term rentals come completely sanitized and stocked with toilet paper and hand sanitizer. We stop by weekly to empty the waste tank, restock toilet paper, hand sanitizer, and paper towels, sanitize, scrub, and rinse each unit, and inspect for damage. Available throughout Oklahoma and southern Kansas.",
    features: [
      "Weekly servicing included (waste, restock, sanitize, inspect)",
      "Rentals available for weeks, months, or years",
      "Delivered fully sanitized and stocked",
      "His-and-her options available",
      "Handicap-accessible units available",
      "Add-on hand washing stations",
    ],
    useCases: [
      "Multi-month construction projects",
      "Oil and gas field operations",
      "Commercial building developments",
      "Remote work sites without facilities",
      "Agricultural seasonal needs",
      "Ongoing industrial sites",
    ],
    icon: "longterm",
  },
];

export type ServiceAreaData = {
  name: string;
  slug: string;
  type: "county" | "city";
  county?: string;
  state: string;
  isPrimary: boolean;
  distance: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  nearbyAreas: string[];
  coordinates: { lat: number; lng: number };
  content: {
    intro: string;
    whyChooseUs: string;
    servicesHighlight: string;
  };
};

export const SERVICE_AREAS_DATA: ServiceAreaData[] = [
  // === PRIMARY: Kay County ===
  {
    name: "Kay County",
    slug: "kay-county",
    type: "county",
    state: "OK",
    isPrimary: true,
    distance: "Home base",
    coordinates: { lat: 36.8172, lng: -97.0253 },
    description:
      "Our home county. Brower Inc. is based in Newkirk and serves all of Kay County with fast, reliable porta potty rental, portable restrooms, and septic services.",
    metaTitle: "Portable Restroom Rental & Septic Services in Kay County, OK",
    metaDescription:
      "Brower Inc. provides porta potty rental, portable restrooms, VIP restroom trailers, hand washing stations, and septic services throughout Kay County, Oklahoma. Based in Newkirk. Call (580) 747-6206.",
    nearbyAreas: ["ponca-city", "newkirk", "blackwell", "tonkawa"],
    content: {
      intro:
        "As a Kay County-based business, Brower Inc. is proud to serve our home community with the highest quality portable sanitation solutions. Whether you need a porta potty rental in Kay County for a construction project or portable restrooms for a community event, we deliver fast from Ponca City to Newkirk, Blackwell to Tonkawa.",
      whyChooseUs:
        "Being headquartered in Kay County means shorter response times, lower delivery costs, and a team that truly knows the area. We have served local construction projects, community events, agricultural operations, and residential septic needs for years.",
      servicesHighlight:
        "Whether you need portable restrooms for the Ponca City rodeo, VIP trailers for a Kaw Lake event, hand washing stations for a Blackwell festival, or septic pumping at your Tonkawa property, Brower Inc. has you covered.",
    },
  },
  {
    name: "Ponca City",
    slug: "ponca-city",
    type: "city",
    county: "Kay County",
    state: "OK",
    isPrimary: true,
    distance: "15 minutes",
    coordinates: { lat: 36.7070, lng: -97.0856 },
    description:
      "Brower Inc. provides reliable porta potty rental, portable restrooms, VIP trailers, and septic services to Ponca City and the surrounding area.",
    metaTitle: "Portable Restroom Rental in Ponca City, OK | Brower Inc.",
    metaDescription:
      "Porta potty rental and portable restrooms in Ponca City, Oklahoma. VIP trailers, hand washing stations, and septic pumping also available. Local service from Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kay-county", "newkirk", "blackwell", "tonkawa"],
    content: {
      intro:
        "Ponca City is one of the communities closest to our Newkirk headquarters, making it one of our fastest service areas. Need a porta potty in Ponca City? We regularly provide porta potties and portable restrooms for construction sites, outdoor events, oil field operations, and community gatherings throughout the area.",
      whyChooseUs:
        "Just minutes from our base, Ponca City clients enjoy priority scheduling, same-day delivery options, and competitive rates. We know the area inside and out, from industrial sites to residential neighborhoods.",
      servicesHighlight:
        "From portable restrooms at Ponca City construction sites to VIP trailers for events at Marland Mansion, hand washing stations at Lake Ponca, or septic pumping for local homes, we deliver and service units throughout the Ponca City area.",
    },
  },
  {
    name: "Newkirk",
    slug: "newkirk",
    type: "city",
    county: "Kay County",
    state: "OK",
    isPrimary: true,
    distance: "Home base",
    coordinates: { lat: 36.8672, lng: -97.0508 },
    description:
      "Brower Inc. is headquartered in Newkirk, OK — our home base for portable restroom rentals and septic services across Oklahoma.",
    metaTitle: "Portable Restroom & Septic Services in Newkirk, OK | Brower Inc.",
    metaDescription:
      "Brower Inc. is Newkirk, Oklahoma's local portable restroom rental and septic service company. Fast delivery, clean units, competitive prices. Call (580) 747-6206.",
    nearbyAreas: ["kay-county", "ponca-city", "blackwell", "tonkawa"],
    content: {
      intro:
        "Newkirk is where it all started. Brower Inc. is proudly headquartered right here, which means Newkirk residents and businesses get the fastest delivery times and best rates in our service area.",
      whyChooseUs:
        "As your neighbors, we are invested in keeping Newkirk clean and well-served. Our equipment is stored locally, so same-day service is often available. We know every road, every neighborhood, and every event venue in town.",
      servicesHighlight:
        "From portable restrooms at the Kay County Fairgrounds to septic pumping for rural properties around Newkirk, we handle it all. Local businesses, farmers, and event organizers trust Brower Inc. for reliable service.",
    },
  },
  {
    name: "Blackwell",
    slug: "blackwell",
    type: "city",
    county: "Kay County",
    state: "OK",
    isPrimary: true,
    distance: "20 minutes",
    coordinates: { lat: 36.8045, lng: -97.2828 },
    description:
      "Serving Blackwell with portable restrooms, hand washing stations, VIP trailers, and septic services.",
    metaTitle: "Portable Restroom Rental in Blackwell, OK | Brower Inc.",
    metaDescription:
      "Brower Inc. serves Blackwell, Oklahoma with portable restroom rentals, VIP trailers, hand washing stations, and septic pumping. Fast local delivery. Call (580) 747-6206.",
    nearbyAreas: ["kay-county", "ponca-city", "tonkawa", "newkirk"],
    content: {
      intro:
        "Blackwell is within easy reach of our Newkirk headquarters. We proudly serve Blackwell's construction projects, community events, agricultural needs, and residential septic systems with reliable, professional service.",
      whyChooseUs:
        "With our base just 20 minutes away, Blackwell gets fast delivery and responsive service. We regularly serve construction sites, events at the Top of Oklahoma Museum, and residential septic needs throughout the Blackwell area.",
      servicesHighlight:
        "Need portable restrooms for a Blackwell construction project? VIP trailers for a community event? Hand washing stations for a local festival? Septic pumping for your property? We have you covered.",
    },
  },
  {
    name: "Tonkawa",
    slug: "tonkawa",
    type: "city",
    county: "Kay County",
    state: "OK",
    isPrimary: true,
    distance: "10 minutes",
    coordinates: { lat: 36.6781, lng: -97.3103 },
    description:
      "Quick, reliable portable restroom delivery and septic services for Tonkawa, OK.",
    metaTitle: "Portable Restroom Rental in Tonkawa, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, VIP trailers, and septic services in Tonkawa, Oklahoma. Just 10 minutes from our base. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kay-county", "ponca-city", "newkirk", "blackwell"],
    content: {
      intro:
        "Tonkawa is one of our closest service areas, just 10 minutes from our base. Whether it is Northern Oklahoma College campus events, local construction, or residential needs, Brower Inc. delivers fast and reliable sanitation solutions.",
      whyChooseUs:
        "Our proximity to Tonkawa means you get the fastest response times in our service area. Same-day delivery is almost always available for Tonkawa customers.",
      servicesHighlight:
        "We provide portable restrooms for Tonkawa construction projects, VIP trailers for events, hand washing stations for campus gatherings, and septic services for homes and businesses throughout the area.",
    },
  },
  // === Kingfisher County ===
  {
    name: "Kingfisher County",
    slug: "kingfisher-county",
    type: "county",
    state: "OK",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 35.9453, lng: -97.9311 },
    description:
      "Brower Inc. serves Kingfisher County with portable restrooms, VIP trailers, and septic services — including Hennessey and surrounding communities.",
    metaTitle: "Portable Restroom Rental in Kingfisher County, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, luxury VIP trailers, hand washing stations, and septic services for Kingfisher County, Oklahoma. Serving Hennessey and surrounding areas. Call (580) 747-6206.",
    nearbyAreas: ["hennessey", "garfield-county", "logan-county", "enid"],
    content: {
      intro:
        "Brower Inc. extends our porta potty rental and portable sanitation services to Kingfisher County, covering Hennessey and surrounding communities. From agricultural operations to construction sites and community events, we bring the same reliable porta potty delivery and service our Kay County neighbors depend on.",
      whyChooseUs:
        "While we are based in Newkirk, we regularly serve Kingfisher County and have the fleet to handle deliveries efficiently. Our competitive rates and professional service make us a smart choice for Kingfisher County projects.",
      servicesHighlight:
        "From portable restrooms for Kingfisher County construction and farming operations to VIP trailers for community celebrations and septic services for rural properties, Brower Inc. brings quality sanitation solutions to your area.",
    },
  },
  {
    name: "Hennessey",
    slug: "hennessey",
    type: "city",
    county: "Kingfisher County",
    state: "OK",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 36.1412, lng: -97.8986 },
    description:
      "Portable restroom rentals and septic services available in Hennessey, OK from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Hennessey, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, VIP trailers, and hand washing stations in Hennessey, Oklahoma. Septic services also available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kingfisher-county", "enid", "crescent", "garfield-county"],
    content: {
      intro:
        "Hennessey residents and businesses can count on Brower Inc. for professional porta potty rental and portable sanitation services. We regularly deliver porta potties, portable restrooms, VIP trailers, and hand washing stations to the Hennessey area for events, construction, and agricultural operations.",
      whyChooseUs:
        "We travel to Hennessey because the job makes sense. When you need reliable, clean portable sanitation or septic services, Brower Inc. delivers the same quality our home county clients expect.",
      servicesHighlight:
        "Whether it is portable restrooms for a Hennessey construction project, VIP trailers for a local event, or septic pumping for a rural Kingfisher County property, we have the equipment and experience to get the job done.",
    },
  },
  // === Logan County ===
  {
    name: "Logan County",
    slug: "logan-county",
    type: "county",
    state: "OK",
    isPrimary: false,
    distance: "1 hour",
    coordinates: { lat: 35.9178, lng: -97.4395 },
    description:
      "Brower Inc. provides portable restroom rentals and septic services throughout Logan County, including Crescent and Guthrie.",
    metaTitle: "Portable Restroom Rental in Logan County, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, VIP trailers, and septic pumping in Logan County, Oklahoma. Serving Crescent, Guthrie, and surrounding areas. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["crescent", "guthrie", "kingfisher-county", "garfield-county"],
    content: {
      intro:
        "Brower Inc. serves Logan County with dependable porta potty rental, portable restrooms, and septic services. From Crescent to Guthrie, we deliver clean, well-maintained porta potties for construction sites, events, and agricultural operations across the county.",
      whyChooseUs:
        "Logan County is well within our service range. We have the fleet and logistics to deliver reliably, and our competitive pricing means you are getting great value without sacrificing quality.",
      servicesHighlight:
        "From portable restrooms at Logan County construction sites to VIP trailers for Guthrie's historic events, hand washing stations for Crescent community gatherings, and septic services for rural properties, Brower Inc. is your local sanitation partner.",
    },
  },
  {
    name: "Crescent",
    slug: "crescent",
    type: "city",
    county: "Logan County",
    state: "OK",
    isPrimary: false,
    distance: "1 hour",
    coordinates: { lat: 35.9523, lng: -97.5928 },
    description:
      "Portable restroom and septic services for Crescent, OK from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Crescent, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, VIP trailers, and hand washing stations in Crescent, Oklahoma. Septic pumping available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["logan-county", "guthrie", "kingfisher-county", "hennessey"],
    content: {
      intro:
        "Crescent is part of our Logan County service area. Brower Inc. delivers porta potties, portable restrooms, VIP trailers, and hand washing stations to Crescent for construction, events, and agricultural needs.",
      whyChooseUs:
        "We are willing to travel to Crescent because we believe every community deserves access to quality sanitation services. Our professional team ensures on-time delivery and clean, well-maintained equipment.",
      servicesHighlight:
        "Whether you need portable restrooms for a Crescent-area construction project, VIP trailers for a private event, or septic pumping for your property, Brower Inc. provides reliable service at competitive rates.",
    },
  },
  // === Garfield County ===
  {
    name: "Garfield County",
    slug: "garfield-county",
    type: "county",
    state: "OK",
    isPrimary: false,
    distance: "1 hour",
    coordinates: { lat: 36.3795, lng: -97.7828 },
    description:
      "Brower Inc. serves Garfield County with portable restrooms, VIP trailers, hand washing stations, and septic services — including Enid.",
    metaTitle: "Portable Restroom Rental in Garfield County, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, luxury VIP trailers, and septic services for Garfield County, Oklahoma. Serving Enid and surrounding areas. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["enid", "kingfisher-county", "kay-county", "woods-county"],
    content: {
      intro:
        "Garfield County is one of our key service areas for porta potty rental and portable restroom delivery. Brower Inc. provides comprehensive portable sanitation and septic services throughout the county, with Enid being our primary delivery hub in the region.",
      whyChooseUs:
        "We serve Garfield County regularly and have established efficient delivery routes to keep costs competitive. Our fleet is equipped to handle large-scale events, multi-unit construction deliveries, and routine septic maintenance.",
      servicesHighlight:
        "From portable restrooms for Enid construction projects and oil field operations to VIP trailers for events at the Garfield County Fairgrounds, we bring full-service portable sanitation to your doorstep.",
    },
  },
  {
    name: "Enid",
    slug: "enid",
    type: "city",
    county: "Garfield County",
    state: "OK",
    isPrimary: false,
    distance: "1 hour",
    coordinates: { lat: 36.3956, lng: -97.8784 },
    description:
      "Full-service portable restroom rentals and septic services in Enid, OK from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Enid, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, VIP luxury trailers, and hand washing stations in Enid, Oklahoma. Professional septic services also available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["garfield-county", "kingfisher-county", "kay-county", "woods-county"],
    content: {
      intro:
        "Enid is one of the largest cities in our service area, and Brower Inc. is proud to serve its growing community. Looking for porta potty rental in Enid? We deliver porta potties, portable restrooms, VIP trailers, and hand washing stations for everything from major construction projects to weekend events.",
      whyChooseUs:
        "As one of our most frequently served cities outside Kay County, Enid clients benefit from regular delivery routes, competitive pricing, and the same responsive service our local customers expect.",
      servicesHighlight:
        "Need portable restrooms for an Enid-area job site? VIP trailers for a corporate event? Hand washing stations for a food festival? Septic pumping for your home or business? Brower Inc. delivers throughout the Enid metro area.",
    },
  },
  // === Woods County (Extended) ===
  {
    name: "Woods County",
    slug: "woods-county",
    type: "county",
    state: "OK",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 36.7608, lng: -98.8622 },
    description:
      "Extended service available to Woods County for portable restrooms and septic services from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Woods County, OK | Brower Inc.",
    metaDescription:
      "Brower Inc. offers extended portable restroom rental and septic services to Woods County, Oklahoma. Serving Alva and surrounding areas. Call (580) 747-6206.",
    nearbyAreas: ["garfield-county", "kay-county", "enid"],
    content: {
      intro:
        "Brower Inc. offers extended porta potty rental and portable restroom service to Woods County, including Alva and surrounding communities. While farther from our Newkirk base, we are happy to travel when the job makes sense — whether it is a large event, a multi-unit porta potty delivery for construction, or ongoing project support.",
      whyChooseUs:
        "We extend our reach to Woods County for projects that need reliable portable sanitation. Our professional fleet and experienced team make long-distance deliveries efficient, and we ensure units are well-maintained throughout your rental period.",
      servicesHighlight:
        "From portable restrooms for Woods County oil field operations and agricultural projects to VIP trailers for community events in Alva, Brower Inc. brings quality portable sanitation to northwestern Oklahoma.",
    },
  },
  // === Other service areas (no individual page, listed in grid) ===
  {
    name: "Stillwater",
    slug: "stillwater",
    type: "city",
    county: "Payne County",
    state: "OK",
    isPrimary: false,
    distance: "45 minutes",
    coordinates: { lat: 36.1156, lng: -97.0584 },
    description: "Portable restroom rentals and septic services for Stillwater, OK.",
    metaTitle: "Portable Restroom Rental in Stillwater, OK | Brower Inc.",
    metaDescription: "Rent portable restrooms and VIP trailers in Stillwater, Oklahoma. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["perry", "kay-county", "logan-county"],
    content: {
      intro: "Stillwater, home of Oklahoma State University, is a key part of our service area. We provide portable restrooms for game day events, campus construction, local festivals, and residential septic services throughout the Stillwater area.",
      whyChooseUs: "Just 45 minutes from our base, Stillwater clients enjoy reliable delivery and competitive pricing. We frequently serve OSU events, Stillwater construction projects, and surrounding Payne County communities.",
      servicesHighlight: "From portable restrooms for OSU game-day tailgates to VIP trailers for Stillwater weddings, hand washing stations for food events, and septic pumping for local properties, Brower Inc. has Stillwater covered.",
    },
  },
  {
    name: "Perry",
    slug: "perry",
    type: "city",
    county: "Noble County",
    state: "OK",
    isPrimary: false,
    distance: "30 minutes",
    coordinates: { lat: 36.2895, lng: -97.2884 },
    description: "Portable restroom and septic services for Perry, OK.",
    metaTitle: "Portable Restroom Rental in Perry, OK | Brower Inc.",
    metaDescription: "Portable restroom rentals and septic services in Perry, Oklahoma. Fast delivery from Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["stillwater", "kay-county", "logan-county"],
    content: {
      intro: "Perry and Noble County are well within our primary service range. We serve Perry's Cherokee Strip celebration, local construction sites, and agricultural operations with dependable portable sanitation.",
      whyChooseUs: "Just 30 minutes away, Perry gets fast, reliable service at competitive rates. We know Noble County well and are proud to serve this community.",
      servicesHighlight: "From portable restrooms for the Cherokee Strip Celebration to septic pumping for Perry-area homes, Brower Inc. delivers quality service to Noble County.",
    },
  },
  {
    name: "Guthrie",
    slug: "guthrie",
    type: "city",
    county: "Logan County",
    state: "OK",
    isPrimary: false,
    distance: "1 hour",
    coordinates: { lat: 35.8789, lng: -97.4253 },
    description: "Portable restroom rentals and septic services for Guthrie, OK.",
    metaTitle: "Portable Restroom Rental in Guthrie, OK | Brower Inc.",
    metaDescription: "Rent portable restrooms and VIP trailers in Guthrie, Oklahoma. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["logan-county", "crescent", "edmond"],
    content: {
      intro: "Guthrie, Oklahoma's original state capital, hosts numerous events and historic celebrations year-round. Brower Inc. provides portable sanitation for Guthrie events, construction, and residential needs.",
      whyChooseUs: "We serve Guthrie regularly as part of our Logan County route, offering reliable delivery and professional service for this vibrant community.",
      servicesHighlight: "From portable restrooms for Guthrie's historic district events to septic services for surrounding properties, we are proud to serve Oklahoma's first capital city.",
    },
  },
  // === KANSAS SERVICE AREAS ===
  // --- Kansas Counties ---
  {
    name: "Harper County",
    slug: "harper-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.19, lng: -98.07 },
    description: "Portable restroom rental and septic services for Harper County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Harper County, KS",
    metaDescription: "Porta potty rental, portable restrooms, VIP restroom trailers, and septic services in Harper County, Kansas. Brower Inc. delivers. Call (580) 747-6206.",
    nearbyAreas: ["anthony-ks", "harper-ks", "sumner-county-ks", "kingman-county-ks", "kay-county"],
    content: {
      intro: "Harper County, Kansas sits just across the state line from our Oklahoma base, making it one of our most accessible Kansas service areas. From wheat harvests and county fairs to rural home sites, Brower Inc. provides porta potty rental in Harper County for every occasion.",
      whyChooseUs: "Our proximity in Newkirk, OK means Harper County customers enjoy fast delivery, competitive pricing, and the same reliable service we bring to our Oklahoma neighbors. We treat every Kansas job with the same urgency and professionalism.",
      servicesHighlight: "We offer portable restrooms for Harper County construction sites, VIP restroom trailers for community events, hand washing stations for agricultural operations, and septic pumping for rural properties throughout the county.",
    },
  },
  {
    name: "Kingman County",
    slug: "kingman-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 37.65, lng: -98.11 },
    description: "Portable restroom rental and septic services for Kingman County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Kingman County, KS",
    metaDescription: "Rent porta potties, portable restrooms, and VIP trailers in Kingman County, Kansas. Septic services available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kingman-ks", "norwich-ks", "harper-county-ks", "sedgwick-county-ks", "sumner-county-ks"],
    content: {
      intro: "Kingman County sits in south-central Kansas and is known for its productive farmland and tight-knit communities. Brower Inc. brings reliable porta potty rental to Kingman County for construction projects, farm operations, and local events alike.",
      whyChooseUs: "Operating from our Oklahoma headquarters, we serve Kingman County with dependable scheduling and competitive rates that make choosing Brower Inc. an easy decision. Our crews know the route and deliver on time, every time.",
      servicesHighlight: "Kingman County customers count on us for standard and deluxe portable restrooms, hand washing stations for outdoor gatherings, VIP restroom trailers for weddings, and septic services for homes outside city limits.",
    },
  },
  {
    name: "Sedgwick County",
    slug: "sedgwick-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.68, lng: -97.46 },
    description: "Portable restroom rental and septic services for Sedgwick County and the greater Wichita area.",
    metaTitle: "Portable Restroom Rental & Septic Services in Sedgwick County, KS",
    metaDescription: "Porta potty rental, VIP restroom trailers, hand washing stations, and septic services in Sedgwick County and Wichita, KS. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["wichita-ks", "derby-ks", "haysville-ks", "goddard-ks", "butler-county-ks", "sumner-county-ks"],
    content: {
      intro: "Sedgwick County is home to Wichita, the largest city in Kansas, and a booming metro area with constant construction, festivals, and large-scale events. Brower Inc. provides portable restroom rental in Sedgwick County to meet the demands of this growing region.",
      whyChooseUs: "We bring Oklahoma hustle to the Wichita metro, offering competitive pricing that often beats local competitors. Our reliable fleet and professional crews make Brower Inc. a trusted sanitation partner in Sedgwick County.",
      servicesHighlight: "From large construction sites in downtown Wichita to outdoor festivals at Sedgwick County Park, we supply portable restrooms, VIP trailers, hand washing stations, and long-term rental solutions across the county.",
    },
  },
  {
    name: "Sumner County",
    slug: "sumner-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.23, lng: -97.48 },
    description: "Portable restroom rental and septic services for Sumner County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Sumner County, KS",
    metaDescription: "Portable restrooms, porta potties, VIP trailers, and septic pumping in Sumner County, KS. Brower Inc. serves Wellington, Caldwell & more. Call (580) 747-6206.",
    nearbyAreas: ["wellington-ks", "belle-plaine-ks", "caldwell-ks", "sedgwick-county-ks", "cowley-county-ks", "harper-county-ks", "kay-county"],
    content: {
      intro: "Sumner County borders Oklahoma directly and is one of the closest Kansas counties to our base. Known for its wheat production and the annual Wheat Festival in Wellington, Sumner County is a natural extension of our service territory for porta potty rental and septic services.",
      whyChooseUs: "Just across the state line, Sumner County gets some of our fastest Kansas delivery times. Brower Inc. offers the reliability and fair pricing that Sumner County farmers, contractors, and event planners deserve.",
      servicesHighlight: "We provide portable restrooms for Sumner County agricultural operations, VIP restroom trailers for the Wellington Wheat Festival, hand washing stations for outdoor markets, and septic services for rural Sumner County homes.",
    },
  },
  {
    name: "Cowley County",
    slug: "cowley-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 37.23, lng: -96.83 },
    description: "Portable restroom rental and septic services for Cowley County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Cowley County, KS",
    metaDescription: "Rent porta potties, portable restrooms, and VIP trailers in Cowley County, KS. Serving Winfield and Arkansas City. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["winfield-ks", "arkansas-city-ks", "sumner-county-ks", "butler-county-ks", "chautauqua-county-ks", "kay-county"],
    content: {
      intro: "Cowley County, Kansas is home to Winfield and Arkansas City, two vibrant communities near the Oklahoma border. From the world-renowned Walnut Valley Festival to ongoing construction and development, Brower Inc. provides porta potty rental across Cowley County.",
      whyChooseUs: "Our Newkirk, Oklahoma base puts us within easy reach of Cowley County, and we regularly serve Winfield and Arkansas City with fast turnarounds and honest pricing. Count on Brower Inc. for dependable sanitation services.",
      servicesHighlight: "Cowley County customers rely on us for portable restrooms at the Walnut Valley Festival, VIP trailers for campus events at Southwestern College, hand washing stations, and residential septic pumping throughout the county.",
    },
  },
  {
    name: "Butler County",
    slug: "butler-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.78, lng: -96.83 },
    description: "Portable restroom rental and septic services for Butler County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Butler County, KS",
    metaDescription: "Porta potty rental, VIP restroom trailers, and septic services in Butler County, KS. Serving El Dorado, Augusta & Andover. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["el-dorado-ks", "augusta-ks", "andover-ks", "sedgwick-county-ks", "cowley-county-ks", "greenwood-county-ks"],
    content: {
      intro: "Butler County is the largest county in Kansas by area, stretching from the Wichita suburbs to the Flint Hills. With El Dorado Lake drawing visitors and steady oil-field activity, Brower Inc. delivers porta potty rental and sanitation solutions throughout Butler County.",
      whyChooseUs: "We serve Butler County with the same commitment to quality and punctuality that our Oklahoma customers enjoy. Competitive rates and a well-maintained fleet make Brower Inc. the smart choice for Butler County sanitation needs.",
      servicesHighlight: "Our Butler County services include portable restrooms for El Dorado Lake events, VIP restroom trailers for weddings and corporate gatherings, hand washing stations for oil-field sites, and septic pumping for rural residences.",
    },
  },
  {
    name: "Chautauqua County",
    slug: "chautauqua-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.02, lng: -96.25 },
    description: "Portable restroom rental and septic services for Chautauqua County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Chautauqua County, KS",
    metaDescription: "Portable restrooms, porta potties, and septic pumping in Chautauqua County, KS. Serving Sedan and Cedar Vale. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sedan-ks", "cedar-vale-ks", "cowley-county-ks", "elk-county-ks"],
    content: {
      intro: "Chautauqua County is a rural gem in southeastern Kansas known for rolling tallgrass prairie and small-town charm. Whether it is a community event in Sedan or a ranch project near Cedar Vale, Brower Inc. brings reliable porta potty rental to Chautauqua County.",
      whyChooseUs: "Even in remote areas of Chautauqua County, Brower Inc. delivers on schedule and at fair prices. Our experience serving rural Oklahoma translates perfectly to the wide-open spaces of southeastern Kansas.",
      servicesHighlight: "We supply portable restrooms for Chautauqua County ranching operations, VIP trailers for community celebrations, hand washing stations for outdoor events, and septic services for homes throughout the county.",
    },
  },
  {
    name: "Elk County",
    slug: "elk-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "3 hours",
    coordinates: { lat: 37.45, lng: -96.24 },
    description: "Portable restroom rental and septic services for Elk County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Elk County, KS",
    metaDescription: "Rent porta potties and portable restrooms in Elk County, KS. Septic pumping available. Serving Howard and Longton. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["howard-ks", "longton-ks", "chautauqua-county-ks", "greenwood-county-ks"],
    content: {
      intro: "Elk County is a quiet, scenic corner of Kansas where cattle ranching and outdoor recreation define daily life. Brower Inc. extends our porta potty rental service to Elk County for construction, events, and agricultural needs in Howard, Longton, and beyond.",
      whyChooseUs: "We understand rural service areas because we come from one. Brower Inc. brings the same reliability to Elk County, Kansas that has earned us trust across northern Oklahoma, backed by fair pricing and professional crews.",
      servicesHighlight: "Elk County residents and contractors can count on us for portable restrooms at job sites, hand washing stations for livestock operations, VIP trailers for family reunions, and septic pumping for rural properties.",
    },
  },
  {
    name: "Greenwood County",
    slug: "greenwood-county-ks",
    type: "county",
    state: "KS",
    isPrimary: false,
    distance: "3 hours",
    coordinates: { lat: 37.77, lng: -96.23 },
    description: "Portable restroom rental and septic services for Greenwood County, Kansas.",
    metaTitle: "Portable Restroom Rental & Septic Services in Greenwood County, KS",
    metaDescription: "Porta potty rental, portable restrooms, and septic services in Greenwood County, KS. Serving Eureka and surrounding areas. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["eureka-ks", "butler-county-ks", "elk-county-ks"],
    content: {
      intro: "Greenwood County is the heart of the Kansas Flint Hills, with Eureka as its county seat and a landscape shaped by ranching and oil production. Brower Inc. delivers porta potty rental and septic services to Greenwood County for projects of every size.",
      whyChooseUs: "Our team regularly services south-central Kansas and knows the roads to Greenwood County well. Brower Inc. offers competitive rates and dependable scheduling that rural Kansas customers can rely on.",
      servicesHighlight: "From portable restrooms for Greenwood County oil-field crews to VIP trailers for Eureka community events and septic pumping for ranch properties, Brower Inc. has your sanitation needs covered.",
    },
  },
  // --- Kansas Cities ---
  {
    name: "Anthony",
    slug: "anthony-ks",
    type: "city",
    county: "Harper County",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.1533, lng: -98.0312 },
    description: "Portable restroom rentals and septic services for Anthony, KS.",
    metaTitle: "Portable Restroom Rental in Anthony, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in Anthony, Kansas. VIP trailers, hand washing stations & septic services. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["harper-county-ks", "harper-ks", "sumner-county-ks", "caldwell-ks"],
    content: {
      intro: "Anthony is the Harper County seat and a welcoming Kansas community just north of the Oklahoma border. Brower Inc. provides porta potty rental in Anthony for local events, home construction, agricultural projects, and more.",
      whyChooseUs: "Located just 1.5 hours from our base, Anthony receives prompt service and competitive pricing from Brower Inc. We are committed to treating every Anthony customer like a neighbor.",
      servicesHighlight: "Anthony residents and businesses trust us for portable restrooms at community gatherings, VIP restroom trailers for special occasions, hand washing stations for outdoor festivals, and septic pumping for properties in and around town.",
    },
  },
  {
    name: "Harper",
    slug: "harper-ks",
    type: "city",
    county: "Harper County",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.2867, lng: -98.0259 },
    description: "Portable restroom rentals and septic services for Harper, KS.",
    metaTitle: "Portable Restroom Rental in Harper, KS | Brower Inc.",
    metaDescription: "Porta potty rental and portable restrooms in Harper, Kansas. Septic services and VIP trailers available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["harper-county-ks", "anthony-ks", "kingman-county-ks"],
    content: {
      intro: "Harper, Kansas is a friendly small town surrounded by productive wheat fields and cattle ranches. Brower Inc. offers porta potty rental in Harper for everything from grain harvest operations to backyard celebrations.",
      whyChooseUs: "Harper is well within our regular Kansas delivery route, meaning you get reliable service and honest pricing without the big-city markup. Brower Inc. is proud to serve Harper and Harper County.",
      servicesHighlight: "We bring portable restrooms for Harper construction sites, hand washing stations for harvest crews, VIP restroom trailers for weddings and reunions, and septic services for rural Harper County homes.",
    },
  },
  {
    name: "Kingman",
    slug: "kingman-ks",
    type: "city",
    county: "Kingman County",
    state: "KS",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 37.6456, lng: -98.1137 },
    description: "Portable restroom rentals and septic services for Kingman, KS.",
    metaTitle: "Portable Restroom Rental in Kingman, KS | Brower Inc.",
    metaDescription: "Rent portable restrooms and porta potties in Kingman, Kansas. VIP trailers and septic pumping. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kingman-county-ks", "norwich-ks", "harper-county-ks"],
    content: {
      intro: "Kingman is the county seat of Kingman County and serves as a hub for the surrounding agricultural community. Brower Inc. delivers porta potty rental in Kingman for construction, events, and farm operations across the area.",
      whyChooseUs: "Two hours from our Oklahoma base, Kingman is a regular stop on our Kansas service routes. Brower Inc. provides on-time delivery and pickup with rates that respect your budget.",
      servicesHighlight: "Kingman customers choose us for portable restrooms at job sites and community events, VIP trailers for Kingman County Fair activities, hand washing stations, and residential septic services.",
    },
  },
  {
    name: "Norwich",
    slug: "norwich-ks",
    type: "city",
    county: "Kingman County",
    state: "KS",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 37.4564, lng: -97.8492 },
    description: "Portable restroom rentals and septic services for Norwich, KS.",
    metaTitle: "Portable Restroom Rental in Norwich, KS | Brower Inc.",
    metaDescription: "Porta potty rental in Norwich, Kansas. Portable restrooms, hand washing stations & septic services. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kingman-county-ks", "kingman-ks", "sumner-county-ks"],
    content: {
      intro: "Norwich is a small Kingman County community surrounded by open prairie and farmland. Brower Inc. serves Norwich with dependable porta potty rental for agricultural operations, private events, and residential projects.",
      whyChooseUs: "We never overlook small towns. Brower Inc. delivers the same top-quality service to Norwich that larger communities receive, with competitive rates and a commitment to punctuality.",
      servicesHighlight: "Norwich area customers rely on us for portable restrooms at farm sites, hand washing stations for outdoor gatherings, VIP trailers for special occasions, and septic pumping for rural properties.",
    },
  },
  {
    name: "Wichita",
    slug: "wichita-ks",
    type: "city",
    county: "Sedgwick County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.6872, lng: -97.3301 },
    description: "Portable restroom rentals and septic services for Wichita, KS.",
    metaTitle: "Portable Restroom Rental in Wichita, KS | Brower Inc.",
    metaDescription: "Porta potty rental and portable restrooms in Wichita, Kansas. VIP trailers, hand washing stations, long-term rentals & septic. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sedgwick-county-ks", "derby-ks", "haysville-ks", "goddard-ks", "andover-ks"],
    content: {
      intro: "Wichita is the largest city in Kansas, with a thriving construction scene, major festivals like Riverfest, and a growing metro area. Brower Inc. provides porta potty rental in Wichita for commercial construction, large-scale events, and residential projects across the Air Capital.",
      whyChooseUs: "We bring competitive Oklahoma pricing to the Wichita market, often saving customers money compared to local alternatives. Brower Inc. delivers reliability and professionalism that Wichita contractors and event planners demand.",
      servicesHighlight: "Our Wichita services include portable restrooms for construction sites, VIP restroom trailers for Riverfest and corporate events, hand washing stations for food festivals, and long-term rental solutions for ongoing projects.",
    },
  },
  {
    name: "Derby",
    slug: "derby-ks",
    type: "city",
    county: "Sedgwick County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.5456, lng: -97.2689 },
    description: "Portable restroom rentals and septic services for Derby, KS.",
    metaTitle: "Portable Restroom Rental in Derby, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in Derby, Kansas. VIP trailers and septic services available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sedgwick-county-ks", "wichita-ks", "haysville-ks"],
    content: {
      intro: "Derby is one of the fastest-growing suburbs south of Wichita, with new residential developments and community events year-round. Brower Inc. offers porta potty rental in Derby for home builders, neighborhood festivals, and commercial projects.",
      whyChooseUs: "Derby customers appreciate our straightforward pricing and dependable service. Brower Inc. treats every Derby job with professionalism, from a single-unit weekend rental to a multi-unit construction deployment.",
      servicesHighlight: "We provide portable restrooms for Derby subdivision construction, VIP restroom trailers for Derby Days and community celebrations, hand washing stations for outdoor markets, and septic services for properties on the outskirts of town.",
    },
  },
  {
    name: "Haysville",
    slug: "haysville-ks",
    type: "city",
    county: "Sedgwick County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.5647, lng: -97.3522 },
    description: "Portable restroom rentals and septic services for Haysville, KS.",
    metaTitle: "Portable Restroom Rental in Haysville, KS | Brower Inc.",
    metaDescription: "Portable restrooms and porta potty rental in Haysville, Kansas. VIP trailers, hand washing stations & septic. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sedgwick-county-ks", "wichita-ks", "derby-ks"],
    content: {
      intro: "Haysville is a close-knit community on the southern edge of the Wichita metro, known for its parks and friendly neighborhoods. Brower Inc. provides porta potty rental in Haysville for construction crews, park events, and private gatherings.",
      whyChooseUs: "We service Haysville as part of our regular Sedgwick County deliveries, ensuring on-time arrival and competitive rates. Brower Inc. is a trusted name for portable sanitation in southern Wichita suburbs.",
      servicesHighlight: "Haysville customers count on us for portable restrooms at residential build sites, VIP trailers for Haysville community events, hand washing stations for outdoor activities, and septic pumping for nearby rural homes.",
    },
  },
  {
    name: "Goddard",
    slug: "goddard-ks",
    type: "city",
    county: "Sedgwick County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.6597, lng: -97.5753 },
    description: "Portable restroom rentals and septic services for Goddard, KS.",
    metaTitle: "Portable Restroom Rental in Goddard, KS | Brower Inc.",
    metaDescription: "Porta potty rental and portable restrooms in Goddard, Kansas. VIP trailers and septic services. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sedgwick-county-ks", "wichita-ks", "kingman-county-ks"],
    content: {
      intro: "Goddard is a rapidly expanding community west of Wichita with new schools, homes, and commercial developments popping up regularly. Brower Inc. delivers porta potty rental in Goddard for construction sites, school events, and neighborhood celebrations.",
      whyChooseUs: "Goddard's growth means more demand for portable sanitation, and Brower Inc. meets that demand with reliable scheduling and honest pricing from our Oklahoma base. We are ready when Goddard needs us.",
      servicesHighlight: "We supply portable restrooms for Goddard construction projects, VIP restroom trailers for school and community events, hand washing stations for outdoor gatherings, and septic services for properties west of Wichita.",
    },
  },
  {
    name: "Wellington",
    slug: "wellington-ks",
    type: "city",
    county: "Sumner County",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.2653, lng: -97.3717 },
    description: "Portable restroom rentals and septic services for Wellington, KS.",
    metaTitle: "Portable Restroom Rental in Wellington, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in Wellington, Kansas. VIP trailers, septic services & more. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sumner-county-ks", "belle-plaine-ks", "caldwell-ks", "cowley-county-ks"],
    content: {
      intro: "Wellington is the Sumner County seat and a proud Kansas community famous for its annual Wheat Festival. Brower Inc. provides porta potty rental in Wellington for festivals, construction, agricultural operations, and private events throughout the year.",
      whyChooseUs: "Just 1.5 hours from our base, Wellington is one of our closest Kansas cities. Brower Inc. delivers fast, reliable service with competitive rates that Wellington businesses and residents appreciate.",
      servicesHighlight: "Wellington trusts Brower Inc. for portable restrooms at the Wheat Festival, VIP restroom trailers for weddings and receptions, hand washing stations for food vendors, and septic pumping for Sumner County properties.",
    },
  },
  {
    name: "Belle Plaine",
    slug: "belle-plaine-ks",
    type: "city",
    county: "Sumner County",
    state: "KS",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 37.3931, lng: -97.2811 },
    description: "Portable restroom rentals and septic services for Belle Plaine, KS.",
    metaTitle: "Portable Restroom Rental in Belle Plaine, KS | Brower Inc.",
    metaDescription: "Portable restrooms and porta potty rental in Belle Plaine, Kansas. Septic services available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sumner-county-ks", "wellington-ks", "wichita-ks"],
    content: {
      intro: "Belle Plaine is a charming Sumner County town situated between Wellington and Wichita along the Chisholm Trail corridor. Brower Inc. brings dependable porta potty rental to Belle Plaine for community events, rural construction, and residential needs.",
      whyChooseUs: "Belle Plaine may be small, but it deserves big-time service. Brower Inc. provides prompt delivery, clean units, and fair pricing to every Belle Plaine customer without exception.",
      servicesHighlight: "We offer portable restrooms for Belle Plaine construction and renovation projects, VIP trailers for local celebrations, hand washing stations for outdoor events, and septic services for surrounding rural properties.",
    },
  },
  {
    name: "Caldwell",
    slug: "caldwell-ks",
    type: "city",
    county: "Sumner County",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.0328, lng: -97.6075 },
    description: "Portable restroom rentals and septic services for Caldwell, KS.",
    metaTitle: "Portable Restroom Rental in Caldwell, KS | Brower Inc.",
    metaDescription: "Porta potty rental in Caldwell, Kansas. Portable restrooms, VIP trailers & septic services near the OK border. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["sumner-county-ks", "wellington-ks", "anthony-ks", "kay-county"],
    content: {
      intro: "Caldwell sits right on the Kansas-Oklahoma border, once known as the Border Queen of the Chisholm Trail. Today Brower Inc. provides porta potty rental in Caldwell for this historic community's events, agricultural operations, and building projects.",
      whyChooseUs: "Caldwell's border location makes it one of the easiest Kansas cities for us to reach. Brower Inc. delivers fast turnarounds and competitive Oklahoma-based pricing that Caldwell customers love.",
      servicesHighlight: "Caldwell area customers choose Brower Inc. for portable restrooms at ranch operations, VIP trailers for heritage celebrations, hand washing stations for community events, and septic pumping for homes in the southern Sumner County area.",
    },
  },
  {
    name: "Winfield",
    slug: "winfield-ks",
    type: "city",
    county: "Cowley County",
    state: "KS",
    isPrimary: false,
    distance: "2 hours",
    coordinates: { lat: 37.2395, lng: -96.9956 },
    description: "Portable restroom rentals and septic services for Winfield, KS.",
    metaTitle: "Portable Restroom Rental in Winfield, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in Winfield, Kansas. VIP trailers for the Walnut Valley Festival & more. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["cowley-county-ks", "arkansas-city-ks", "butler-county-ks"],
    content: {
      intro: "Winfield is the Cowley County seat and home to the internationally acclaimed Walnut Valley Festival, Southwestern College, and a vibrant downtown. Brower Inc. provides porta potty rental in Winfield for festivals, campus events, construction, and more.",
      whyChooseUs: "We have experience supporting large-scale events and understand the sanitation demands that Winfield's busy calendar requires. Brower Inc. brings reliable service and competitive rates from just two hours away.",
      servicesHighlight: "Winfield customers rely on us for portable restrooms at the Walnut Valley Festival, VIP restroom trailers for Southwestern College events, hand washing stations for community gatherings, and septic services for Cowley County residences.",
    },
  },
  {
    name: "Arkansas City",
    slug: "arkansas-city-ks",
    type: "city",
    county: "Cowley County",
    state: "KS",
    isPrimary: false,
    distance: "1.5 hours",
    coordinates: { lat: 37.0620, lng: -97.0386 },
    description: "Portable restroom rentals and septic services for Arkansas City, KS.",
    metaTitle: "Portable Restroom Rental in Arkansas City, KS | Brower Inc.",
    metaDescription: "Porta potty rental and portable restrooms in Arkansas City (Ark City), Kansas. VIP trailers & septic services. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["cowley-county-ks", "winfield-ks", "sumner-county-ks", "kay-county"],
    content: {
      intro: "Arkansas City, known locally as Ark City, sits at the confluence of the Arkansas and Walnut rivers near the Oklahoma border. Brower Inc. delivers porta potty rental in Arkansas City for construction sites, river events, and community gatherings throughout the year.",
      whyChooseUs: "Ark City's proximity to our Oklahoma base means quick delivery and pickup at prices that compete with anyone. Brower Inc. is proud to be a go-to sanitation provider for Arkansas City and southern Cowley County.",
      servicesHighlight: "We provide portable restrooms for Ark City construction projects, VIP restroom trailers for community festivals, hand washing stations for park events along the river, and septic pumping for homes in the Arkansas City area.",
    },
  },
  {
    name: "El Dorado",
    slug: "el-dorado-ks",
    type: "city",
    county: "Butler County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.8172, lng: -96.8622 },
    description: "Portable restroom rentals and septic services for El Dorado, KS.",
    metaTitle: "Portable Restroom Rental in El Dorado, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in El Dorado, Kansas. VIP trailers, septic services & long-term rentals. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["butler-county-ks", "augusta-ks", "andover-ks", "greenwood-county-ks"],
    content: {
      intro: "El Dorado is the Butler County seat with a rich oil heritage, beautiful El Dorado Lake, and a busy calendar of outdoor events. Brower Inc. provides porta potty rental in El Dorado for lake gatherings, oil-field operations, construction, and community festivals.",
      whyChooseUs: "We serve El Dorado with the professionalism and punctuality that this hardworking community expects. Brower Inc. offers competitive rates and clean, well-maintained equipment for every El Dorado project.",
      servicesHighlight: "El Dorado customers count on us for portable restrooms at El Dorado Lake campgrounds, VIP restroom trailers for oil industry events, hand washing stations for outdoor festivals, and septic services for Butler County properties.",
    },
  },
  {
    name: "Augusta",
    slug: "augusta-ks",
    type: "city",
    county: "Butler County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.6867, lng: -96.9764 },
    description: "Portable restroom rentals and septic services for Augusta, KS.",
    metaTitle: "Portable Restroom Rental in Augusta, KS | Brower Inc.",
    metaDescription: "Portable restrooms and porta potty rental in Augusta, Kansas. VIP trailers and septic pumping available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["butler-county-ks", "el-dorado-ks", "andover-ks", "wichita-ks"],
    content: {
      intro: "Augusta is a historic Butler County city near El Dorado Lake, known for its oil industry roots and strong community spirit. Brower Inc. delivers porta potty rental in Augusta for residential construction, outdoor recreation events, and local celebrations.",
      whyChooseUs: "Augusta deserves dependable sanitation service, and that is exactly what Brower Inc. provides. We offer on-time delivery, clean units, and pricing that works for Augusta families and businesses alike.",
      servicesHighlight: "We serve Augusta with portable restrooms for construction crews, VIP restroom trailers for community events and lake gatherings, hand washing stations for local markets, and septic pumping for Augusta-area residences.",
    },
  },
  {
    name: "Andover",
    slug: "andover-ks",
    type: "city",
    county: "Butler County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.7139, lng: -97.1364 },
    description: "Portable restroom rentals and septic services for Andover, KS.",
    metaTitle: "Portable Restroom Rental in Andover, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in Andover, Kansas. VIP trailers, hand washing stations & septic. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["butler-county-ks", "wichita-ks", "augusta-ks", "el-dorado-ks"],
    content: {
      intro: "Andover is a thriving suburb east of Wichita with rapid residential growth and top-rated schools. Brower Inc. provides porta potty rental in Andover for new home construction, school events, sports tournaments, and neighborhood celebrations.",
      whyChooseUs: "Andover's building boom needs reliable portable sanitation, and Brower Inc. delivers. We offer Andover builders and event organizers dependable service with competitive pricing from our Oklahoma base.",
      servicesHighlight: "Andover customers choose us for portable restrooms at subdivision developments, VIP trailers for school fundraisers and sports events, hand washing stations for community gatherings, and septic services for eastern Butler County properties.",
    },
  },
  {
    name: "Sedan",
    slug: "sedan-ks",
    type: "city",
    county: "Chautauqua County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.1286, lng: -96.1856 },
    description: "Portable restroom rentals and septic services for Sedan, KS.",
    metaTitle: "Portable Restroom Rental in Sedan, KS | Brower Inc.",
    metaDescription: "Porta potty rental in Sedan, Kansas. Portable restrooms and septic services for the Chautauqua County seat. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["chautauqua-county-ks", "cedar-vale-ks", "elk-county-ks"],
    content: {
      intro: "Sedan is the Chautauqua County seat, famous for its Yellow Brick Road and the Emmett Kelly Museum honoring the legendary clown. Brower Inc. provides porta potty rental in Sedan for community celebrations, rural projects, and events along the Yellow Brick Road.",
      whyChooseUs: "Sedan may be off the beaten path, but Brower Inc. makes the trip with reliable equipment and fair rates. We bring the same professionalism to Sedan that our closer customers have come to expect.",
      servicesHighlight: "We deliver portable restrooms for Sedan festivals and Yellow Brick Road events, VIP trailers for community gatherings, hand washing stations for outdoor celebrations, and septic pumping for Chautauqua County homeowners.",
    },
  },
  {
    name: "Cedar Vale",
    slug: "cedar-vale-ks",
    type: "city",
    county: "Chautauqua County",
    state: "KS",
    isPrimary: false,
    distance: "2.5 hours",
    coordinates: { lat: 37.1075, lng: -96.4989 },
    description: "Portable restroom rentals and septic services for Cedar Vale, KS.",
    metaTitle: "Portable Restroom Rental in Cedar Vale, KS | Brower Inc.",
    metaDescription: "Portable restrooms and porta potty rental in Cedar Vale, Kansas. Septic services for Chautauqua County. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["chautauqua-county-ks", "sedan-ks", "cowley-county-ks", "arkansas-city-ks"],
    content: {
      intro: "Cedar Vale is a small ranching community in western Chautauqua County near the Cowley County line. Brower Inc. brings porta potty rental to Cedar Vale for cattle operations, rural construction, and community events in this scenic Kansas prairie town.",
      whyChooseUs: "We serve Cedar Vale with the same care and attention we give every community in our territory. Brower Inc. offers reliable scheduling and honest pricing for even the most remote locations.",
      servicesHighlight: "Cedar Vale area customers trust us for portable restrooms at ranch and farm sites, hand washing stations for livestock events, VIP trailers for family celebrations, and septic pumping for rural Chautauqua County properties.",
    },
  },
  {
    name: "Howard",
    slug: "howard-ks",
    type: "city",
    county: "Elk County",
    state: "KS",
    isPrimary: false,
    distance: "3 hours",
    coordinates: { lat: 37.4700, lng: -96.2636 },
    description: "Portable restroom rentals and septic services for Howard, KS.",
    metaTitle: "Portable Restroom Rental in Howard, KS | Brower Inc.",
    metaDescription: "Rent porta potties and portable restrooms in Howard, Kansas. Septic services for Elk County. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["elk-county-ks", "longton-ks", "greenwood-county-ks"],
    content: {
      intro: "Howard is the Elk County seat, a peaceful Kansas town where ranching and small-town values go hand in hand. Brower Inc. extends porta potty rental service to Howard for agricultural projects, community events, and residential construction.",
      whyChooseUs: "Three hours from our base, Howard still gets the full Brower Inc. experience: clean equipment, on-time delivery, and pricing that respects your budget. We are happy to serve Elk County.",
      servicesHighlight: "Howard residents and ranchers rely on us for portable restrooms at construction sites, VIP trailers for Elk County community events, hand washing stations for agricultural operations, and septic pumping for rural properties.",
    },
  },
  {
    name: "Longton",
    slug: "longton-ks",
    type: "city",
    county: "Elk County",
    state: "KS",
    isPrimary: false,
    distance: "3 hours",
    coordinates: { lat: 37.3758, lng: -96.0800 },
    description: "Portable restroom rentals and septic services for Longton, KS.",
    metaTitle: "Portable Restroom Rental in Longton, KS | Brower Inc.",
    metaDescription: "Porta potty rental in Longton, Kansas. Portable restrooms and septic services for Elk County. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["elk-county-ks", "howard-ks", "chautauqua-county-ks"],
    content: {
      intro: "Longton is a quiet Elk County community surrounded by tallgrass prairie and cattle country. Brower Inc. provides porta potty rental in Longton for ranching operations, rural home projects, and the occasional community gathering.",
      whyChooseUs: "Even in the most rural corners of Kansas, Brower Inc. shows up on time with clean, well-maintained equipment. Longton customers get the same professional service and competitive pricing as everyone in our network.",
      servicesHighlight: "We serve Longton with portable restrooms for ranch and farm operations, hand washing stations for outdoor work sites, VIP trailers for local celebrations, and septic pumping for rural Elk County homes.",
    },
  },
  {
    name: "Eureka",
    slug: "eureka-ks",
    type: "city",
    county: "Greenwood County",
    state: "KS",
    isPrimary: false,
    distance: "3 hours",
    coordinates: { lat: 37.8236, lng: -96.2894 },
    description: "Portable restroom rentals and septic services for Eureka, KS.",
    metaTitle: "Portable Restroom Rental in Eureka, KS | Brower Inc.",
    metaDescription: "Portable restrooms and porta potty rental in Eureka, Kansas. Septic services for Greenwood County. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["greenwood-county-ks", "el-dorado-ks", "butler-county-ks", "elk-county-ks"],
    content: {
      intro: "Eureka is the Greenwood County seat, nestled in the heart of the Kansas Flint Hills where cattle ranching and oil production drive the local economy. Brower Inc. delivers porta potty rental in Eureka for oil-field crews, ranch operations, community events, and construction projects.",
      whyChooseUs: "Eureka and Greenwood County can count on Brower Inc. for dependable, scheduled service and fair pricing. We know the roads to Eureka and build our Kansas routes to serve this community reliably.",
      servicesHighlight: "Eureka customers trust Brower Inc. for portable restrooms at oil-field and ranch sites, VIP restroom trailers for Greenwood County events, hand washing stations for outdoor work crews, and septic pumping for rural properties around Eureka.",
    },
  },
];

// Simple list for backward compatibility
export const SERVICE_AREAS = SERVICE_AREAS_DATA.map((area) => area.name);

export const TESTIMONIALS = [
  {
    name: "Mike Johnson",
    role: "Construction Site Manager",
    text: "Brower Inc. has been our go-to for portable restrooms on every job site. Reliable delivery, clean units, and great service every time.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Event Planner",
    text: "The VIP restroom trailers were a huge hit at our outdoor wedding. Guests kept commenting on how nice they were. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Carter",
    role: "Property Manager",
    text: "We use Brower Inc. for all our septic maintenance. They are always professional, on time, and do thorough work. Would not trust anyone else.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Is a porta potty the same as a portable restroom?",
    answer:
      "Yes — porta potty is simply the common term for a portable restroom. Whether you search for porta potty rental, portable toilet, or portable restroom, you are looking at the same product. Brower Inc. provides clean, well-maintained porta potties and portable restrooms for events, construction sites, and more across Oklahoma and southern Kansas.",
  },
  {
    question: "Where can I rent a porta potty in Oklahoma or Kansas?",
    answer:
      "Brower Inc. offers porta potty rental throughout north-central Oklahoma and southern Kansas. We are based in Newkirk, OK and serve Kay County (Ponca City, Blackwell, Tonkawa), Garfield County (Enid), Kingfisher County, Logan County, Woods County, and in Kansas: Sedgwick County (Wichita), Sumner County (Wellington), Cowley County (Winfield, Arkansas City), Butler County (El Dorado), Harper County, and surrounding areas. Call (580) 747-6206 for a free quote.",
  },
  {
    question: "How far in advance should I book portable restrooms?",
    answer:
      "We recommend booking at least 1-2 weeks in advance for standard rentals and 3-4 weeks for VIP trailers or large events. However, we understand that needs can arise quickly and will do our best to accommodate last-minute requests.",
  },
  {
    question: "How many portable restrooms do I need for my event?",
    answer:
      "A general rule of thumb is one portable restroom per 50 guests for a 4-hour event. For longer events or events serving alcohol, we recommend one unit per 35 guests. Contact us for a personalized recommendation based on your specific event details.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Brower Inc. is based in Newkirk, Oklahoma, and primarily serves Kay County (Ponca City, Blackwell, Tonkawa). We also serve Kingfisher County (Hennessey), Logan County (Crescent, Guthrie), Garfield County (Enid), Woods County, and surrounding areas in Oklahoma. We also serve southern Kansas including Sedgwick County (Wichita), Sumner County (Wellington), Cowley County (Winfield, Arkansas City), Butler County (El Dorado), Harper County, Kingman County, Chautauqua County, Elk County, and Greenwood County. We're local — but willing to travel when the job makes sense.",
  },
  {
    question: "How often are the portable restrooms serviced?",
    answer:
      "For long-term rentals, our standard service schedule is once per week, which includes pumping, cleaning, restocking supplies, and sanitizing. For events, units are delivered freshly cleaned and serviced. Additional servicing can be arranged based on your needs.",
  },
  {
    question: "Do you offer ADA-compliant portable restrooms?",
    answer:
      "Yes, we offer large and spacious ADA-compliant portable restrooms specifically designed to meet and exceed the American Disability Association's portable restroom guidelines. These units feature wider doors, grab bars, and additional interior space to accommodate wheelchairs and mobility aids. They are also family friendly — great for parents who need to accompany their children to the restroom.",
  },
  {
    question: "What is included in your septic pumping service?",
    answer:
      "Our septic pumping service includes a thorough pump-out of your septic tank, inspection of the tank condition, checking inlet and outlet baffles, and proper disposal of waste at an approved facility. We can also provide maintenance recommendations to extend the life of your system.",
  },
  {
    question: "How much does it cost to rent a portable restroom?",
    answer:
      "Pricing varies based on the type of unit, rental duration, delivery distance, and servicing frequency. Contact us for a free, no-obligation quote tailored to your specific needs. We offer competitive rates and discounts for long-term rentals.",
  },
  {
    question: "Do you provide hand washing stations with restroom rentals?",
    answer:
      "Yes, we offer portable hand washing stations as an add-on to any restroom rental. Hand washing stations are recommended for events with food service and are required on many construction sites to meet health and safety regulations.",
  },
  {
    question: "What happens if a unit is damaged during my rental?",
    answer:
      "Normal wear and tear is expected and covered. However, excessive damage or vandalism may result in repair or replacement charges. We recommend discussing damage policies when booking so there are no surprises.",
  },
  {
    question: "Can I get a same-day delivery?",
    answer:
      "We strive to accommodate urgent requests whenever possible. Same-day delivery depends on availability and your location. Call us at (580) 747-6206 and we will do our best to help you out.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services/portable-restrooms",
    children: [
      { label: "Portable Restrooms", href: "/services/portable-restrooms" },
      {
        label: "VIP Shower & Restroom Trailers",
        href: "/services/vip-shower-restroom-trailers",
      },
      {
        label: "Hand Washing Stations",
        href: "/services/hand-washing-stations",
      },
      { label: "Septic Services", href: "/services/septic-services" },
      { label: "Long-Term Rentals", href: "/services/long-term-rentals" },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [
      { label: "All Service Areas", href: "/service-areas" },
      { label: "Kay County, OK", href: "/service-areas/kay-county" },
      { label: "Ponca City, OK", href: "/service-areas/ponca-city" },
      { label: "Garfield County, OK", href: "/service-areas/garfield-county" },
      { label: "Sedgwick County, KS", href: "/service-areas/sedgwick-county-ks" },
      { label: "Sumner County, KS", href: "/service-areas/sumner-county-ks" },
      { label: "Cowley County, KS", href: "/service-areas/cowley-county-ks" },
      { label: "Butler County, KS", href: "/service-areas/butler-county-ks" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
