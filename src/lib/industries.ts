import { IMAGES } from "./images";

export interface IndustryPainPoint {
  title: string;
  description: string;
  solution: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryPhoto {
  src: string;
  alt: string;
}

export interface IndustryData {
  name: string;
  slug: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  whyBrower: string;
  complianceTitle?: string;
  complianceContent?: string;
  painPoints: IndustryPainPoint[];
  faqs: IndustryFAQ[];
  stats: IndustryStat[];
  relatedServices: string[];
  ctaTitle: string;
  ctaDescription: string;
  image: string;
  imageAlt: string;
  icon: string;
  /** Extra real photos shown as a strip on the industry page. */
  gallery?: IndustryPhoto[];
}

// Reusable photo entries. Alt text describes what each photo actually shows
// (several filenames in images.ts don't match their content).
const PHOTO = {
  handWash: { src: IMAGES.handWashingStation, alt: "Row of Brower Inc. portable hand washing stations" },
  ada: { src: IMAGES.adaRestroom, alt: "Brower Inc. ADA wheelchair-accessible portable restroom" },
  trailer8: { src: IMAGES.trailer8DoorShower, alt: "Brower Inc. 8-door shower trailer" },
  trailer4: { src: IMAGES.trailer4Station, alt: "Brower Inc. 4-station restroom trailer" },
  vipVanity: { src: IMAGES.vipInteriorVanity, alt: "Vanity and private stalls inside a Brower Inc. VIP restroom trailer" },
  vipBathroom: { src: IMAGES.vipInteriorBathroom, alt: "Private bathroom with shower inside a Brower Inc. VIP trailer" },
  vipShower: { src: IMAGES.vipInteriorShower, alt: "Shower stalls inside a Brower Inc. VIP shower trailer" },
  vipShop: { src: IMAGES.vipExteriorWarehouse, alt: "Brower Inc. VIP shower and restroom trailer parked in the shop" },
  vipAngle: { src: IMAGES.vipExteriorAngle, alt: "Brower Inc. VIP shower and restroom trailer" },
  vip3: { src: IMAGES.vip3Station, alt: "Brower Inc. 3-station restroom trailer set up at an arena" },
  trailersLot: { src: IMAGES.vipTrailersLot, alt: "Brower Inc. restroom trailers and pink portable restrooms ready to go out" },
  loadedTrailer: { src: IMAGES.loadedTrailer, alt: "Trailer loaded with Brower Inc. portable restrooms in the yard" },
  colorsYard: { src: IMAGES.portableRestroomEvent, alt: "Brower Inc. truck with blue, pink, and tan portable restrooms" },
  warehouse: { src: IMAGES.portableRestroomHero, alt: "Row of Brower Inc. portable restrooms in the warehouse" },
  nightHaul: { src: IMAGES.vipWithHandwash, alt: "Brower Inc. truck and trailer hauling portable restrooms at night" },
  nightService: { src: IMAGES.deliveryLot, alt: "Brower Inc. truck servicing a portable restroom at night" },
  dayHaul: { src: IMAGES.vipExteriorCloseup, alt: "Brower Inc. truck and trailer hauling portable restrooms" },
  jobsite: { src: IMAGES.portableRestroomNight, alt: "Two Brower Inc. portable restrooms and a service truck at a home construction site" },
  septicPumping: { src: IMAGES.septicPumpingClose, alt: "Brower Inc. technician pumping a residential septic tank" },
  septicTruck: { src: IMAGES.septicTruckRear, alt: "Brower Inc. septic pump truck" },
};

export const INDUSTRIES: IndustryData[] = [
  // ─────────────────────────────────────────────
  // 1. CONSTRUCTION
  // ─────────────────────────────────────────────
  {
    name: "Construction",
    slug: "construction",
    shortDescription:
      "OSHA-ready restrooms, ADA units, and hand wash stations for Oklahoma and Kansas jobsites.",
    metaTitle:
      "Construction Porta Potty Rental Oklahoma | OSHA Compliant",
    metaDescription:
      "OSHA-compliant porta potty rental for Oklahoma construction sites. Standard, ADA & hand wash stations. Weekly servicing included. 1,375+ unit fleet. Call (580) 747-6206.",
    heroTitle: "Portable Restrooms for Oklahoma Construction Sites",
    heroDescription:
      "OSHA-compliant porta potties, ADA units, and hand wash stations, delivered and serviced weekly across north-central Oklahoma and southern Kansas.",
    whyBrower:
      "With 1,375+ units, we have inventory ready when your project starts. Troy schedules delivery for day one and pickup the day the job is done.",
    complianceTitle: "OSHA Compliance Made Simple",
    complianceContent:
      "OSHA (29 CFR 1926.51) calls for at least 1 toilet per 20 workers, and sanitizer alone doesn't cover crews handling chemicals. We size your order and keep service records for inspections.",
    painPoints: [
      {
        title: "OSHA Compliance",
        description: "How many units? Do you need ADA or hand wash stations?",
        solution: "We size it to your crew and keep service records for your inspection files.",
      },
      {
        title: "Dirty, Neglected Units",
        description: "Workers avoid filthy restrooms, and productivity drops.",
        solution: "Weekly pump-out, restock, sanitizing, and damage check on every long-term rental.",
      },
      {
        title: "Unreliable Delivery & Pickup",
        description: "No restroom on day one, or billing after the job ends.",
        solution: "We deliver on your schedule, pick up when you're done, and answer 24/7.",
      },
      {
        title: "Hidden Fees",
        description: "Surprise delivery, fuel, and environmental charges.",
        solution: "Delivery, pickup, servicing, and supplies are spelled out up front.",
      },
    ],
    faqs: [
      {
        question:
          "How many portable restrooms does my Oklahoma construction site need?",
        answer:
          "OSHA requires at least 1 toilet per 20 workers (29 CFR 1926.51), so a 40-worker site needs at least 2. We'll size it to your crew, shifts, and site layout.",
      },
      {
        question:
          "Does Brower Inc. provide ADA-compliant portable restrooms for construction sites?",
        answer:
          "Yes. Our ADA units are larger and wheelchair-accessible, and we'll help you decide if your project needs them.",
      },
      {
        question:
          "What's included in weekly portable restroom servicing for construction?",
        answer:
          "Each visit includes pump-out, restocking toilet paper and sanitizer, scrubbing and sanitizing, and a damage check. It's all included in your rental rate.",
      },
      {
        question:
          "Can you deliver portable restrooms to remote construction sites in rural Oklahoma?",
        answer:
          "Yes. We deliver to remote and rural jobsites across north-central Oklahoma and southern Kansas, including unpaved and farm access roads.",
      },
      {
        question: "How fast can Brower Inc. deliver portable restrooms to a construction site?",
        answer:
          "Planned projects typically get delivery within 24-48 hours of booking, and same-day is often available. Call Troy at (580) 747-6206.",
      },
    ],
    stats: [
      { value: "1,375+", label: "Unit Fleet" },
      { value: "OK & KS", label: "Rural Delivery" },
      { value: "24/7", label: "Support Available" },
      { value: "Weekly", label: "Servicing Included" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "hand-washing-stations",
    ],
    ctaTitle: "Keep Your Construction Site OSHA-Compliant",
    ctaDescription:
      "Tell us your crew size and we'll recommend the right number of units.",
    image: IMAGES.portableRestroomNight,
    imageAlt:
      "Two Brower Inc. portable restrooms and a service truck at a home construction site",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    gallery: [PHOTO.handWash, PHOTO.ada, PHOTO.trailer8],
  },

  // ─────────────────────────────────────────────
  // 2. EVENTS & WEDDINGS
  // ─────────────────────────────────────────────
  {
    name: "Events & Weddings",
    slug: "events-weddings",
    shortDescription:
      "Portable restrooms and luxury VIP trailers for weddings, festivals, and events.",
    metaTitle:
      "Event & Wedding Porta Potty Rental Oklahoma | VIP Trailers",
    metaDescription:
      "Portable restroom & luxury VIP trailer rental for Oklahoma weddings, festivals & events. 18-station climate-controlled trailers. Call (580) 747-6206.",
    heroTitle: "Portable Restrooms & Luxury Trailers for Oklahoma Events",
    heroDescription:
      "Standard units for casual gatherings, or climate-controlled VIP trailers with running water and private stalls for upscale events.",
    whyBrower:
      "Our VIP trailers have heat and A/C, running water, mirrors, and LED lighting. Standard Maxim 300 units come in blue, tan, or pink, with 24/7 support during your event.",
    painPoints: [
      {
        title: "The \"Gross Porta Potty\" Stigma",
        description: "Guests picture smelly blue boxes.",
        solution: "VIP trailers give guests climate-controlled private stalls, running water, and vanity mirrors.",
      },
      {
        title: "How Many Units to Rent",
        description: "Too few means lines. Too many wastes money.",
        solution: "Plan 1 unit per 50-60 guests for 4 hours, plus 20% with alcohol. We'll do the math free.",
      },
      {
        title: "Placement & Logistics",
        description: "Units need to be close but out of sight, and Oklahoma wind is real.",
        solution: "We place units downwind and out of photos, and tie them down. VIP trailers need 120V/20A power within 100 feet.",
      },
      {
        title: "Last-Minute Availability",
        description: "Peak season (May-October) books up, especially luxury trailers.",
        solution: "Book VIP trailers 3-6 months ahead for peak wedding season.",
      },
    ],
    faqs: [
      {
        question:
          "How many portable restrooms do I need for my Oklahoma outdoor wedding?",
        answer:
          "Plan 1 standard unit per 50-60 guests for a 4-hour event, and add 20% if alcohol is served. A 200-guest wedding needs about 4 standard units or 1 VIP trailer.",
      },
      {
        question:
          "What's the difference between a standard porta potty and a VIP luxury restroom trailer?",
        answer:
          "A standard unit is a single self-contained restroom with hand sanitizer. A VIP trailer is climate-controlled, with running water, private stalls, vanity mirrors, and LED lighting.",
      },
      {
        question:
          "How far in advance should I book portable restrooms for my event?",
        answer:
          "Book standard units 2-4 weeks ahead and VIP trailers 3-6 months ahead for May through October. Last-minute standard units are often available.",
      },
      {
        question:
          "Do you provide support during events if something goes wrong?",
        answer:
          "Yes. We offer 24/7 support, weekends and holidays included. Call (580) 747-6206.",
      },
      {
        question: "Where should portable restrooms be placed at an outdoor event?",
        answer:
          "Within a 1-2 minute walk of the main area, downwind from food and out of photo backdrops. VIP trailers need flat ground and 120V/20A power within 100 feet.",
      },
    ],
    stats: [
      { value: "18", label: "Station VIP Trailers" },
      { value: "1,375+", label: "Unit Fleet" },
      { value: "24/7", label: "Event Support" },
      { value: "3", label: "Unit Colors Available" },
    ],
    relatedServices: [
      "portable-restrooms",
      "vip-shower-restroom-trailers",
      "hand-washing-stations",
    ],
    ctaTitle: "Make Your Event Unforgettable",
    ctaDescription:
      "Get a free quote and we'll plan the right restroom setup for your guests.",
    image: IMAGES.rodeoEvent,
    imageAlt:
      "Brower Inc. VIP restroom trailer set up behind a rodeo arena",
    icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    gallery: [PHOTO.vipVanity, PHOTO.trailersLot, PHOTO.trailer4],
  },

  // ─────────────────────────────────────────────
  // 3. OIL & GAS / ENERGY
  // ─────────────────────────────────────────────
  {
    name: "Oil & Gas",
    slug: "oil-gas",
    shortDescription:
      "Sanitation for drilling sites, pipelines, pump stations, wind farms, and refineries.",
    metaTitle:
      "Oil Field Porta Potty Rental & Sanitation | Oklahoma",
    metaDescription:
      "Portable restroom rental for Oklahoma oil fields, drilling sites & pipeline construction. Remote delivery, flexible servicing, OSHA compliant. Call (580) 747-6206.",
    heroTitle:
      "Portable Sanitation for Oklahoma's Oil & Gas Industry",
    heroDescription:
      "Portable restrooms delivered to remote well pads and pipeline jobs, with servicing that matches 24/7 operations.",
    whyBrower:
      "Unpaved roads, locked gates, and cattle guards are routine for us. For 12-hour shifts around the clock, we offer servicing beyond the standard weekly visit.",
    complianceTitle: "Multi-Regulation Compliance Support",
    complianceContent:
      "OSHA (29 CFR 1926.51), Oklahoma DEQ rules, and company safety policies can all apply. We provide hand wash stations with running water and the service records audits require.",
    painPoints: [
      {
        title: "Extreme Remoteness",
        description: "Rural drilling sites have no infrastructure and rough access.",
        solution: "Unpaved roads, rough terrain, and restricted access are daily work for our fleet.",
      },
      {
        title: "Extreme Oklahoma Weather",
        description: "100°F+ summers, freezing winters, and high winds.",
        solution: "Extra ventilation in summer, freeze prevention in winter, and tie-downs for wind.",
      },
      {
        title: "24/7 Operations with Heavy Usage",
        description: "Round-the-clock 12-hour shifts put double or triple the normal use on each unit.",
        solution: "2x and 3x weekly servicing, sized to your crew and shifts.",
      },
      {
        title: "Multi-Regulation Compliance",
        description: "OSHA, DEQ, and company policies all apply at once.",
        solution: "Service records that hold up to OSHA, DEQ, and corporate audits.",
      },
    ],
    faqs: [
      {
        question:
          "Can Brower Inc. deliver portable restrooms to remote Oklahoma drilling sites?",
        answer:
          "Yes. We regularly run unpaved lease roads, cattle guards, and locked gates across north-central Oklahoma and southern Kansas.",
      },
      {
        question:
          "How often should portable restrooms be serviced at a 24/7 drilling site?",
        answer:
          "Weekly is usually not enough for 24/7 sites, so we recommend 2-3x weekly depending on crew size. We'll set the schedule for your operation.",
      },
      {
        question:
          "Do you provide hand washing stations for oil field sites?",
        answer:
          "Yes. OSHA requires running water, soap, and paper towels when workers handle chemicals, and our standalone stations need no water or power hookups.",
      },
      {
        question:
          "How do you handle portable restrooms in extreme Oklahoma heat?",
        answer:
          "We service more often during heat waves and check ventilation. We also advise on shaded placement when possible.",
      },
    ],
    stats: [
      { value: "OK & KS", label: "Remote Delivery" },
      { value: "24/7", label: "Delivery & Support" },
      { value: "2-3x", label: "Weekly Servicing Available" },
      { value: "1,375+", label: "Unit Fleet" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "hand-washing-stations",
    ],
    ctaTitle: "Sanitation That Reaches Your Remote Site",
    ctaDescription:
      "Get a free quote and a servicing schedule built around your shifts.",
    image: IMAGES.portableRestroomField,
    imageAlt:
      "Brower Inc. portable restroom in an open field with wind turbines on the horizon",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0 .628.134 1.227.377 1.767l-.377.377-3.172-3.172a1 1 0 00-1.414 0l-2.828 2.828a1 1 0 000 1.414l6.586 6.586a1 1 0 001.414 0l2.828-2.828a1 1 0 000-1.414L9.414 12.5",
    gallery: [PHOTO.loadedTrailer, PHOTO.handWash, PHOTO.trailer8],
  },

  // ─────────────────────────────────────────────
  // 4. AGRICULTURE & RANCHING
  // ─────────────────────────────────────────────
  {
    name: "Agriculture & Ranching",
    slug: "agriculture",
    shortDescription:
      "Restrooms for farms, ranches, harvest crews, and ag events.",
    metaTitle:
      "Farm & Ranch Porta Potty Rental Oklahoma | Ag Sanitation",
    metaDescription:
      "Portable restroom rental for Oklahoma farms & ranches. OSHA field sanitation compliant. Rural delivery to remote properties. Call (580) 747-6206.",
    heroTitle: "Portable Restrooms for Oklahoma Farms & Ranches",
    heroDescription:
      "Portable restrooms delivered to remote farms and ranches across north-central Oklahoma and southern Kansas, for harvest crews, auctions, and ranch events.",
    whyBrower:
      "We're based in Newkirk and run farm roads, mud, and livestock areas every day. One unit for harvest or a dozen for a rodeo, serviced weekly.",
    complianceTitle: "OSHA Field Sanitation Requirements",
    complianceContent:
      "Once you have 11 or more hand laborers, OSHA requires toilets within a 1/4-mile walk of each worker. Drinking water and hand washing are required too.",
    painPoints: [
      {
        title: "Seasonal Worker Sanitation Compliance",
        description: "With 11+ field workers, OSHA requires restrooms within 1/4 mile.",
        solution: "We place the right number of units within that distance, on rentals that fit your harvest.",
      },
      {
        title: "Remote Location Access",
        description: "Fields can be miles from pavement.",
        solution: "Mud, gravel, and cattle guards are routine for us.",
      },
      {
        title: "Ranch Event Needs",
        description: "Rodeos, weddings, and auctions happen where there are no restrooms.",
        solution: "Standard units for rodeos and auctions, VIP trailers for ranch weddings. Pink units are a local favorite.",
      },
    ],
    faqs: [
      {
        question:
          "Does OSHA require portable restrooms on Oklahoma farms?",
        answer:
          "Yes, once you have 11 or more hand laborers in the field. Toilets must be within a 1/4-mile walk, plus drinking water and hand washing.",
      },
      {
        question:
          "Can you deliver portable restrooms to remote Oklahoma ranch properties?",
        answer:
          "Yes. We're based in Newkirk and deliver to unpaved, muddy, and rural properties every week.",
      },
      {
        question:
          "Do you provide restrooms for ranch weddings and rodeos?",
        answer:
          "Yes. We bring standard units for rodeos and VIP trailers for weddings, and our pink units are popular at ranch weddings.",
      },
      {
        question:
          "How long can I rent portable restrooms for agricultural use?",
        answer:
          "Anywhere from a weekend to several months. Long-term rentals include weekly servicing.",
      },
    ],
    stats: [
      { value: "1/4 mi", label: "OSHA Max Distance" },
      { value: "11+", label: "Workers Triggers OSHA" },
      { value: "Rural", label: "Delivery Specialty" },
      { value: "Weekly", label: "Servicing Included" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "hand-washing-stations",
    ],
    ctaTitle: "Reliable Sanitation for Your Farm or Ranch",
    ctaDescription:
      "Get a free quote. We deliver to remote properties across north-central Oklahoma and southern Kansas.",
    image: IMAGES.portableRestroomTrio,
    imageAlt:
      "Three Brower Inc. trailer-mounted portable restrooms in a grassy pasture",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    gallery: [PHOTO.vip3, PHOTO.colorsYard, PHOTO.handWash],
  },

  // ─────────────────────────────────────────────
  // 5. GOVERNMENT & MUNICIPAL
  // ─────────────────────────────────────────────
  {
    name: "Government & Municipal",
    slug: "government-municipal",
    shortDescription:
      "Restrooms for parks, public events, road crews, and emergency response.",
    metaTitle:
      "Municipal Portable Restroom Rental | Government | Oklahoma",
    metaDescription:
      "Portable restroom rental for Oklahoma municipalities. Emergency deployment, park facilities, public events & road crews. 1,375+ unit fleet. Call (580) 747-6206.",
    heroTitle:
      "Portable Sanitation for Oklahoma Municipalities & Government",
    heroDescription:
      "From park trailheads to emergency deployment after storms, with the documentation public procurement requires.",
    whyBrower:
      "We provide W-9s, certificates of insurance, formal quotes, and itemized invoices. Choose per-event pricing or an annual contract.",
    complianceTitle: "Procurement-Ready Documentation",
    complianceContent:
      "Formal quotes, W-9s, certificates of insurance (general liability and auto), and line-item invoices. Annual or per-event agreements fit your budget cycle.",
    painPoints: [
      {
        title: "Emergency Mobilization Speed",
        description: "After a tornado, you may need dozens of units by tomorrow.",
        solution: "With 1,375+ units and 24/7 phones, we can mobilize dozens of units within hours.",
      },
      {
        title: "Budget & Procurement Process",
        description: "Public buyers need quotes, POs, W-9s, and clean invoices.",
        solution: "We provide all of it and work with PO numbers.",
      },
      {
        title: "Ongoing Public Facility Needs",
        description: "Parks need seasonal units. Parades and July 4th need units for hundreds or thousands.",
        solution: "Park installs include weekly servicing. Event setups include delivery, placement, and pickup.",
      },
    ],
    faqs: [
      {
        question:
          "Can Brower Inc. deploy portable restrooms for emergency disaster response in Oklahoma?",
        answer:
          "Yes. Our 1,375+ unit fleet and 24/7 operation let us mobilize dozens of units within hours for tornado, flood, wildfire, and ice storm response.",
      },
      {
        question:
          "Does Brower Inc. provide the documentation required for government procurement?",
        answer:
          "Yes. We provide formal quotes, W-9s, certificates of insurance, and itemized invoices, and we work with purchase orders.",
      },
      {
        question:
          "Do you offer annual contracts for municipal portable restroom services?",
        answer:
          "Yes. We offer per-event pricing and annual contracts, which can include pre-arranged emergency terms.",
      },
      {
        question:
          "Can you provide portable restrooms for public parks and trailheads?",
        answer:
          "Yes, seasonal or year-round, with weekly servicing included.",
      },
    ],
    stats: [
      { value: "1,375+", label: "Unit Fleet" },
      { value: "24/7", label: "Emergency Response" },
      { value: "W-9 & COI", label: "Procurement Docs" },
      { value: "OK & KS", label: "Service Area" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "vip-shower-restroom-trailers",
    ],
    ctaTitle: "Ready When Oklahoma Needs Us",
    ctaDescription:
      "Request a quote. We bring the fleet, the paperwork, and 24/7 readiness.",
    image: IMAGES.portableRestroomLineup,
    imageAlt:
      "Long row of Brower Inc. portable restrooms set up outdoors",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    gallery: [PHOTO.ada, PHOTO.warehouse, PHOTO.nightHaul],
  },

  // ─────────────────────────────────────────────
  // 6. FILM & TV PRODUCTION
  // ─────────────────────────────────────────────
  {
    name: "Film & TV Production",
    slug: "film-tv",
    shortDescription:
      "Restrooms and VIP trailers for film crews, talent, and sets.",
    metaTitle:
      "Film & TV Production Restroom Trailer Rental | Oklahoma",
    metaDescription:
      "Portable restroom & VIP trailer rental for Oklahoma film & TV productions. Climate-controlled trailers for talent. Remote location delivery. Call (580) 747-6206.",
    heroTitle:
      "Portable Restrooms & VIP Trailers for Oklahoma Film Productions",
    heroDescription:
      "Standard units for crew and VIP restroom trailers for talent, delivered to rural Oklahoma locations.",
    whyBrower:
      "Shoots on open prairie, small towns, and private ranches often have no facilities. Our VIP trailers bring climate control, private stalls, running water, and vanity mirrors to set.",
    painPoints: [
      {
        title: "Remote Location Access",
        description: "Rural locations and ranches have no sanitation.",
        solution: "If your scouts approved the location, we can get restrooms there.",
      },
      {
        title: "Talent Expectations",
        description: "Talent and key crew expect premium facilities on set.",
        solution: "VIP trailers with heat and A/C, running water, private stalls, and vanity mirrors.",
      },
      {
        title: "Flexible Production Timelines",
        description: "Schedules and locations shift constantly.",
        solution: "Add, move, or extend units as your schedule changes. Troy works directly with production managers.",
      },
    ],
    faqs: [
      {
        question:
          "Do you provide VIP restroom trailers for film talent in Oklahoma?",
        answer:
          "Yes. Our VIP trailers have heat and A/C, running water, private stalls, lit vanity mirrors, and counter space.",
      },
      {
        question:
          "Can you deliver to remote Oklahoma filming locations?",
        answer:
          "Yes. We deliver to remote ranches, small towns, and open-field locations across north-central Oklahoma.",
      },
      {
        question:
          "How does Oklahoma's film incentive program benefit productions?",
        answer:
          "Oklahoma offers a rebate of up to 38% on qualified film and TV spending, which draws more location shoots to the state.",
      },
    ],
    stats: [
      { value: "VIP", label: "Trailers for Talent" },
      { value: "OK & KS", label: "Location Delivery" },
      { value: "38%", label: "OK Film Rebate" },
      { value: "Flexible", label: "Production Schedules" },
    ],
    relatedServices: [
      "vip-shower-restroom-trailers",
      "portable-restrooms",
      "hand-washing-stations",
    ],
    ctaTitle: "Production-Ready Sanitation for Your Set",
    ctaDescription:
      "Get a free quote for crew restrooms and talent trailers, wherever you're shooting.",
    image: IMAGES.vipExteriorSide,
    imageAlt:
      "Brower Inc. VIP shower and restroom trailer, side view",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    gallery: [PHOTO.vipBathroom, PHOTO.vipShop, PHOTO.trailer8],
  },

  // ─────────────────────────────────────────────
  // 7. UTILITIES & TELECOM
  // ─────────────────────────────────────────────
  {
    name: "Utilities & Telecom",
    slug: "utilities-telecom",
    shortDescription:
      "Restrooms for line crews, substations, fiber installs, and storm restoration.",
    metaTitle:
      "Utility Crew Porta Potty Rental Oklahoma | Storm Crews",
    metaDescription:
      "Portable restroom rental for Oklahoma utility crews, line workers & storm restoration teams. Remote delivery, rapid deployment. Call (580) 747-6206.",
    heroTitle:
      "Portable Restrooms for Oklahoma Utility & Telecom Crews",
    heroDescription:
      "Portable restrooms for line crews, telecom installers, and storm restoration teams across north-central Oklahoma and southern Kansas.",
    whyBrower:
      "After ice storms and tornadoes, our 1,375+ units and 24/7 phones mean fast delivery to staging areas. For planned work, long-term rentals include weekly servicing.",
    painPoints: [
      {
        title: "Storm Restoration Urgency",
        description: "Out-of-state crews arrive for weeks and need restrooms now.",
        solution: "We scale from a few units to dozens on short notice.",
      },
      {
        title: "Remote Substations & Line Work",
        description: "Corridors and substations have no facilities, and crews rotate for weeks.",
        solution: "We deliver to rural substations and right-of-way, with weekly servicing.",
      },
      {
        title: "Serving Out-of-State Crews",
        description: "Mutual aid crews don't know the area.",
        solution: "Fully stocked units at staging areas and work zones from day one.",
      },
    ],
    faqs: [
      {
        question:
          "Can Brower Inc. deploy portable restrooms for storm restoration crews?",
        answer:
          "Yes. Our 1,375+ unit fleet and 24/7 availability let us respond fast to staging areas and work sites.",
      },
      {
        question:
          "Do you serve remote substations and utility work sites?",
        answer:
          "Yes, across north-central Oklahoma and southern Kansas, with long-term rentals and weekly servicing for extended projects.",
      },
      {
        question:
          "How quickly can you deploy units for emergency utility work?",
        answer:
          "For emergency storm work, we can typically deploy within hours. Call (580) 747-6206 any time.",
      },
    ],
    stats: [
      { value: "1,375+", label: "Unit Fleet" },
      { value: "24/7", label: "Emergency Deploy" },
      { value: "OK & KS", label: "Service Area" },
      { value: "Weekly", label: "Servicing Included" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "hand-washing-stations",
    ],
    ctaTitle: "Sanitation for Your Crews — Rain or Shine",
    ctaDescription:
      "Get a free quote for storm restoration or planned infrastructure work.",
    image: IMAGES.deliveryDaytime,
    imageAlt:
      "Brower Inc. service truck hauling two portable restrooms on a flatbed",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gallery: [PHOTO.nightService, PHOTO.dayHaul, PHOTO.trailer4],
  },

  // ─────────────────────────────────────────────
  // 8. DISASTER RELIEF & EMERGENCY
  // ─────────────────────────────────────────────
  {
    name: "Disaster Relief & Emergency",
    slug: "disaster-relief",
    shortDescription:
      "Fast restroom and shower trailer deployment for tornado, flood, wildfire, and ice storm response.",
    metaTitle:
      "Disaster Relief Portable Restrooms Oklahoma | Emergency",
    metaDescription:
      "Emergency portable restroom & shower trailer deployment for Oklahoma tornado recovery, floods & disaster relief. 1,375+ fleet, 24/7 response. Call (580) 747-6206.",
    heroTitle:
      "Emergency Portable Restroom Deployment for Oklahoma Disasters",
    heroDescription:
      "Large-scale restroom and shower trailer deployment for shelters, fire camps, and relief staging areas across north-central Oklahoma and southern Kansas.",
    whyBrower:
      "Our 1,375+ unit fleet lets us deploy dozens of restrooms and shower trailers within hours, 24/7. Troy coordinates directly with emergency managers and relief groups.",
    painPoints: [
      {
        title: "Speed of Deployment",
        description: "After a tornado, you need dozens of units on site by morning.",
        solution: "We can begin delivering within hours of your call, 24/7.",
      },
      {
        title: "Extended Displacement Needs",
        description: "Shelters and staging areas stay open for weeks or months.",
        solution: "Long-term installs with weekly servicing, scaled and moved as recovery shifts.",
      },
      {
        title: "Shower and Hygiene Facilities",
        description: "Fire camps and long operations need showers too.",
        solution: "VIP shower trailers with hot water, climate control, and privacy.",
      },
    ],
    faqs: [
      {
        question:
          "How fast can Brower Inc. deploy portable restrooms after a tornado?",
        answer:
          "We can begin deploying within hours of an emergency call, 24/7. Troy coordinates placement personally.",
      },
      {
        question:
          "Does Brower Inc. provide shower trailers for disaster relief?",
        answer:
          "Yes. Our VIP shower trailers have hot water, climate control, and private stalls for fire camps, shelters, and relief workers.",
      },
      {
        question:
          "Can Brower Inc. work with FEMA and emergency management agencies?",
        answer:
          "Yes. We work with purchase orders and provide certificates of insurance, detailed invoicing, and service records.",
      },
      {
        question:
          "How many portable restrooms can Brower Inc. deploy at once?",
        answer:
          "Our fleet has 1,375+ units, and we keep scaling as units free up from other jobs. Call (580) 747-6206.",
      },
    ],
    stats: [
      { value: "1,375+", label: "Unit Fleet" },
      { value: "Hours", label: "Not Days to Deploy" },
      { value: "OK & KS", label: "Service Area" },
      { value: "24/7", label: "Always Available" },
    ],
    relatedServices: [
      "portable-restrooms",
      "vip-shower-restroom-trailers",
      "long-term-rentals",
    ],
    ctaTitle: "Emergency Sanitation — Call Now",
    ctaDescription:
      "Call (580) 747-6206. We're available 24/7 and can begin delivering within hours.",
    image: IMAGES.fleetLineup,
    imageAlt:
      "Brower Inc. service trucks and portable restrooms lined up on grass",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    gallery: [PHOTO.loadedTrailer, PHOTO.vipShower, PHOTO.vipAngle],
  },

  // ─────────────────────────────────────────────
  // 9. REAL ESTATE & PROPERTY MANAGEMENT
  // ─────────────────────────────────────────────
  {
    name: "Real Estate & Property Management",
    slug: "real-estate",
    shortDescription:
      "Restrooms for new home construction and septic service for rental properties.",
    metaTitle:
      "Real Estate Septic & Porta Potty Rental Oklahoma",
    metaDescription:
      "Portable restroom rental for home construction & septic maintenance for rental properties in Oklahoma. One provider for both. Call (580) 747-6206.",
    heroTitle:
      "Portable Restrooms & Septic Services for Oklahoma Properties",
    heroDescription:
      "Portable restrooms during the build and septic maintenance after move-in, from one local provider.",
    whyBrower:
      "We handle portable restrooms plus septic pumping, repair, and installation. Property managers get one local provider for every property.",
    painPoints: [
      {
        title: "Construction Phase Sanitation",
        description: "Crews need restrooms, and agents need them for walkthroughs.",
        solution: "Weekly-serviced units from land clearing to final inspection, kept presentable for showings.",
      },
      {
        title: "Septic Maintenance for Managed Properties",
        description: "Rentals need scheduled pumping and fast help with backups.",
        solution: "Scheduled pumping (every 3-5 years recommended) and emergency pumping, on one account.",
      },
      {
        title: "One Provider, Full Lifecycle",
        description: "Separate vendors mean more invoices and more phone calls.",
        solution: "Restrooms during the build, septic after occupancy. One account, from dirt to done.",
      },
    ],
    faqs: [
      {
        question:
          "Does Brower Inc. provide portable restrooms for new home construction sites?",
        answer:
          "Yes. We provide weekly-serviced units for new builds, subdivisions, remodels, and land clearing, kept presentable for showings.",
      },
      {
        question:
          "Can Brower Inc. handle septic maintenance for multiple rental properties?",
        answer:
          "Yes. One account covers all your properties, with scheduled pumping (every 3-5 years recommended), emergency service, and inspections.",
      },
      {
        question:
          "Do you provide septic inspections for real estate transactions?",
        answer:
          "Yes. We inspect septic systems for sales and purchases and provide documentation for closing files.",
      },
    ],
    stats: [
      { value: "Both", label: "Rentals & Septic" },
      { value: "3-5 yr", label: "Recommended Pump Cycle" },
      { value: "Weekly", label: "Construction Servicing" },
      { value: "OK & KS", label: "Service Area" },
    ],
    relatedServices: [
      "portable-restrooms",
      "septic-services",
      "long-term-rentals",
    ],
    ctaTitle: "One Provider — Construction Through Occupancy",
    ctaDescription:
      "Get a free quote for jobsite restrooms or schedule septic maintenance for your properties.",
    image: IMAGES.septicMobileHome,
    imageAlt:
      "Brower Inc. septic trucks servicing a manufactured home",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    gallery: [PHOTO.septicPumping, PHOTO.jobsite, PHOTO.septicTruck],
  },
];
