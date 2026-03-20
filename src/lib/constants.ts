export const SITE_NAME = "Brower Inc.";
export const SITE_URL = "https://browerinc.net";
export const SITE_TAGLINE =
  "Portable Restrooms, Luxury Trailers & Septic Services";
export const PHONE = "(580) 747-6206";
export const PHONE_HREF = "tel:+15807476206";
export const EMAIL = "info@browerinc.net";
export const ADDRESS = {
  street: "Newkirk",
  city: "Newkirk",
  state: "OK",
  zip: "74647",
  full: "Newkirk, OK 74647",
};
export const SOCIAL = {
  facebook: "https://www.facebook.com/braborinc",
  linkedin: "https://www.linkedin.com/company/brower-inc",
};
export const BUSINESS_HOURS = "Monday - Friday: 8:00 AM - 5:00 PM";

export const SERVICES = [
  {
    title: "Portable Restrooms",
    slug: "portable-restrooms",
    shortDescription:
      "Standard portable sanitation for events, construction sites, and temporary needs.",
    description:
      "Reliable, clean portable restrooms for any occasion. Whether you are hosting an outdoor event, managing a construction site, or need temporary sanitation solutions, Brower Inc. delivers and maintains high-quality portable restrooms throughout Oklahoma.",
    features: [
      "Regular cleaning and maintenance included",
      "ADA-compliant units available",
      "Flexible rental periods",
      "Fast delivery and pickup",
      "Hand sanitizer dispensers included",
      "Ideal for events, construction, and festivals",
    ],
    useCases: [
      "Outdoor weddings and receptions",
      "Construction sites",
      "Community festivals and fairs",
      "Sporting events",
      "Farm and ranch operations",
      "Emergency and disaster relief",
    ],
    icon: "restroom",
  },
  {
    title: "VIP Shower & Restroom Trailers",
    slug: "vip-shower-restroom-trailers",
    shortDescription:
      "High-end luxury mobile restroom trailers with premium amenities.",
    description:
      "Elevate your event with our VIP shower and restroom trailers. Featuring climate control, running water, flushing toilets, vanity mirrors, and premium finishes, our luxury trailers provide a comfortable, upscale restroom experience for your guests.",
    features: [
      "Climate-controlled interiors",
      "Running hot and cold water",
      "Flushing porcelain toilets",
      "Vanity mirrors and lighting",
      "Premium interior finishes",
      "Separate men's and women's sections available",
    ],
    useCases: [
      "Upscale weddings and galas",
      "Corporate events and retreats",
      "VIP areas at festivals",
      "Film and production sets",
      "Executive construction trailers",
      "Long-term luxury rental needs",
    ],
    icon: "vip",
  },
  {
    title: "Hand Washing Stations",
    slug: "hand-washing-stations",
    shortDescription:
      "Portable hand washing solutions for events and worksites.",
    description:
      "Keep your guests and workers safe and compliant with our portable hand washing stations. Essential for food service areas, construction sites, and any outdoor event, our stations provide convenient access to soap and clean water.",
    features: [
      "Fresh water supply with foot pump operation",
      "Soap and paper towel dispensers",
      "Multiple basin configurations",
      "Meets health code requirements",
      "Lightweight and easy to position",
      "Perfect companion to portable restrooms",
    ],
    useCases: [
      "Food festivals and outdoor dining",
      "Construction and industrial sites",
      "Health and safety compliance",
      "School events and field days",
      "Agricultural operations",
      "Emergency response situations",
    ],
    icon: "handwash",
  },
  {
    title: "Septic Services",
    slug: "septic-services",
    shortDescription:
      "Septic system maintenance, pumping, and sanitation support.",
    description:
      "Professional septic services to keep your system running smoothly. Brower Inc. offers septic tank pumping, maintenance, and inspection services for residential and commercial properties across Oklahoma. Regular maintenance prevents costly repairs and extends the life of your system.",
    features: [
      "Septic tank pumping and cleaning",
      "Routine maintenance programs",
      "System inspections and diagnostics",
      "Grease trap cleaning",
      "Emergency service available",
      "Residential and commercial service",
    ],
    useCases: [
      "Residential septic maintenance",
      "Commercial property management",
      "Real estate transaction inspections",
      "Restaurant grease trap service",
      "Rural property maintenance",
      "New construction inspections",
    ],
    icon: "septic",
  },
  {
    title: "Long-Term Rentals",
    slug: "long-term-rentals",
    shortDescription:
      "Extended rental options for ongoing construction or commercial projects.",
    description:
      "Cost-effective long-term portable restroom rentals for extended projects. Brower Inc. provides ongoing sanitation solutions with regular servicing for construction projects, commercial developments, and any situation requiring extended portable restroom access.",
    features: [
      "Discounted long-term rates",
      "Scheduled regular servicing",
      "Flexible contract terms",
      "Multiple unit configurations",
      "Add-on hand washing stations",
      "Dedicated account management",
    ],
    useCases: [
      "Multi-month construction projects",
      "Commercial building developments",
      "Oil and gas field operations",
      "Agricultural seasonal needs",
      "Temporary office facilities",
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
    description:
      "Our home county. Brower Inc. is based in Newkirk and serves all of Kay County with fast, reliable portable sanitation and septic services.",
    metaTitle: "Portable Restroom Rental & Septic Services in Kay County, OK",
    metaDescription:
      "Brower Inc. provides portable restroom rentals, VIP restroom trailers, hand washing stations, and septic services throughout Kay County, Oklahoma. Based in Newkirk. Call (580) 747-6206.",
    nearbyAreas: ["ponca-city", "newkirk", "blackwell", "tonkawa"],
    content: {
      intro:
        "As a Kay County-based business, Brower Inc. is proud to serve our home community with the highest quality portable sanitation solutions. From Ponca City to Newkirk, Blackwell to Tonkawa, we provide fast delivery and reliable service throughout the county.",
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
    description:
      "Brower Inc. provides reliable portable restrooms, VIP trailers, and septic services to Ponca City and the surrounding area.",
    metaTitle: "Portable Restroom Rental in Ponca City, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, luxury VIP trailers, and hand washing stations in Ponca City, Oklahoma. Septic pumping also available. Local service from Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kay-county", "newkirk", "blackwell", "tonkawa"],
    content: {
      intro:
        "Ponca City is one of the communities closest to our Newkirk headquarters, making it one of our fastest service areas. We regularly provide portable sanitation for construction sites, outdoor events, oil field operations, and community gatherings throughout Ponca City.",
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
    description:
      "Brower Inc. serves Kingfisher County with portable restrooms, VIP trailers, and septic services — including Hennessey and surrounding communities.",
    metaTitle: "Portable Restroom Rental in Kingfisher County, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, luxury VIP trailers, hand washing stations, and septic services for Kingfisher County, Oklahoma. Serving Hennessey and surrounding areas. Call (580) 747-6206.",
    nearbyAreas: ["hennessey", "garfield-county", "logan-county", "enid"],
    content: {
      intro:
        "Brower Inc. extends our portable sanitation services to Kingfisher County, covering Hennessey and surrounding communities. From agricultural operations to construction sites and community events, we bring the same reliable service our Kay County neighbors depend on.",
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
    description:
      "Portable restroom rentals and septic services available in Hennessey, OK from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Hennessey, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, VIP trailers, and hand washing stations in Hennessey, Oklahoma. Septic services also available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["kingfisher-county", "enid", "crescent", "garfield-county"],
    content: {
      intro:
        "Hennessey residents and businesses can count on Brower Inc. for professional portable sanitation services. We regularly deliver portable restrooms, VIP trailers, and hand washing stations to the Hennessey area for events, construction, and agricultural operations.",
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
    description:
      "Brower Inc. provides portable restroom rentals and septic services throughout Logan County, including Crescent and Guthrie.",
    metaTitle: "Portable Restroom Rental in Logan County, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, VIP trailers, and septic pumping in Logan County, Oklahoma. Serving Crescent, Guthrie, and surrounding areas. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["crescent", "guthrie", "kingfisher-county", "garfield-county"],
    content: {
      intro:
        "Brower Inc. serves Logan County with dependable portable sanitation and septic services. From Crescent to Guthrie, we deliver clean, well-maintained units for construction sites, events, and agricultural operations across the county.",
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
    description:
      "Portable restroom and septic services for Crescent, OK from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Crescent, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, VIP trailers, and hand washing stations in Crescent, Oklahoma. Septic pumping available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["logan-county", "guthrie", "kingfisher-county", "hennessey"],
    content: {
      intro:
        "Crescent is part of our Logan County service area. Brower Inc. delivers portable restrooms, VIP trailers, and hand washing stations to Crescent for construction, events, and agricultural needs.",
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
    description:
      "Brower Inc. serves Garfield County with portable restrooms, VIP trailers, hand washing stations, and septic services — including Enid.",
    metaTitle: "Portable Restroom Rental in Garfield County, OK | Brower Inc.",
    metaDescription:
      "Portable restroom rentals, luxury VIP trailers, and septic services for Garfield County, Oklahoma. Serving Enid and surrounding areas. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["enid", "kingfisher-county", "kay-county", "woods-county"],
    content: {
      intro:
        "Garfield County is one of our key service areas. Brower Inc. provides comprehensive portable sanitation and septic services throughout the county, with Enid being our primary delivery hub in the region.",
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
    description:
      "Full-service portable restroom rentals and septic services in Enid, OK from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Enid, OK | Brower Inc.",
    metaDescription:
      "Rent portable restrooms, VIP luxury trailers, and hand washing stations in Enid, Oklahoma. Professional septic services also available. Brower Inc. Call (580) 747-6206.",
    nearbyAreas: ["garfield-county", "kingfisher-county", "kay-county", "woods-county"],
    content: {
      intro:
        "Enid is one of the largest cities in our service area, and Brower Inc. is proud to serve its growing community. We deliver portable restrooms, VIP trailers, and hand washing stations for everything from major construction projects to weekend events.",
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
    description:
      "Extended service available to Woods County for portable restrooms and septic services from Brower Inc.",
    metaTitle: "Portable Restroom Rental in Woods County, OK | Brower Inc.",
    metaDescription:
      "Brower Inc. offers extended portable restroom rental and septic services to Woods County, Oklahoma. Serving Alva and surrounding areas. Call (580) 747-6206.",
    nearbyAreas: ["garfield-county", "kay-county", "enid"],
    content: {
      intro:
        "Brower Inc. offers extended service to Woods County, including Alva and surrounding communities. While farther from our Newkirk base, we are happy to travel when the job makes sense — whether it is a large event, a multi-unit construction delivery, or ongoing project support.",
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
      "Brower Inc. is based in Newkirk, Oklahoma, and primarily serves Kay County (Ponca City, Blackwell, Tonkawa). We also serve Kingfisher County (Hennessey), Logan County (Crescent, Guthrie), Garfield County (Enid), and surrounding areas. Extended service is available as far as Woods County. We're local — but willing to travel when the job makes sense.",
  },
  {
    question: "How often are the portable restrooms serviced?",
    answer:
      "For long-term rentals, our standard service schedule is once per week, which includes pumping, cleaning, restocking supplies, and sanitizing. For events, units are delivered freshly cleaned and serviced. Additional servicing can be arranged based on your needs.",
  },
  {
    question: "Do you offer ADA-compliant portable restrooms?",
    answer:
      "Yes, we offer ADA-compliant portable restrooms that meet accessibility requirements. These units feature wider doors, grab bars, and additional interior space to accommodate wheelchairs and mobility aids.",
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
      { label: "Kay County", href: "/service-areas/kay-county" },
      { label: "Ponca City", href: "/service-areas/ponca-city" },
      { label: "Garfield County (Enid)", href: "/service-areas/garfield-county" },
      { label: "Kingfisher County", href: "/service-areas/kingfisher-county" },
      { label: "Logan County", href: "/service-areas/logan-county" },
      { label: "Woods County", href: "/service-areas/woods-county" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
