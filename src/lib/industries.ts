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
}

export const INDUSTRIES: IndustryData[] = [
  // ─────────────────────────────────────────────
  // 1. CONSTRUCTION
  // ─────────────────────────────────────────────
  {
    name: "Construction",
    slug: "construction",
    shortDescription:
      "OSHA-compliant portable restrooms for residential, commercial, and industrial construction sites across Oklahoma and Kansas.",
    metaTitle:
      "Construction Porta Potty Rental Oklahoma | OSHA Compliant",
    metaDescription:
      "OSHA-compliant porta potty rental for Oklahoma construction sites. Standard, ADA & hand wash stations. Weekly servicing included. 640+ unit fleet. Call (580) 747-6206.",
    heroTitle: "Portable Restrooms for Oklahoma Construction Sites",
    heroDescription:
      "Keep your crew compliant, productive, and satisfied with clean, reliable portable restrooms delivered and serviced weekly. Brower Inc. provides OSHA-compliant porta potties, ADA-accessible units, and hand washing stations for residential builds, commercial projects, road work, and industrial facilities across north-central Oklahoma and southern Kansas.",
    whyBrower:
      "Brower Inc. understands construction timelines. Our 640+ unit fleet means we always have inventory ready when your project starts — no delays, no excuses. Every long-term rental includes weekly servicing (waste removal, restocking, sanitizing, and damage inspection) so your site stays compliant without you lifting a finger. Troy Brower personally manages scheduling to make sure units arrive on day one and leave when the job is done — no continued billing after project completion.",
    complianceTitle: "OSHA Compliance Made Simple",
    complianceContent:
      "OSHA standard 29 CFR 1926.51 requires at least 1 toilet for every 20 workers on a construction site, with restrooms reachable within a 10-minute walk. Non-compliance can result in fines up to $16,131 per violation in 2025. If men and women work on the same site, you must provide separate or lockable facilities. Hand sanitizer alone does not satisfy OSHA requirements when workers handle chemicals — dedicated hand washing stations with running water, soap, and paper towels are mandatory. Brower Inc. helps you determine the right number of units, deliver ADA-compliant restrooms when required, and provides the documentation you need for inspections.",
    painPoints: [
      {
        title: "OSHA Compliance Anxiety",
        description:
          "Confusing regulations, surprise inspections, and fines up to $16,131 per violation keep site managers up at night. How many units do you actually need? Do you need ADA? What about hand washing stations?",
        solution:
          "We calculate the right number of units for your crew size and help you meet every OSHA requirement — standard units, ADA-accessible restrooms, and hand washing stations. We keep service records for your inspection files.",
      },
      {
        title: "Dirty, Neglected Units",
        description:
          "Previous providers delivered porta potties and never came back. Overflowing waste tanks, broken latches, no toilet paper — workers avoid filthy restrooms, killing productivity and morale.",
        solution:
          "Every Brower Inc. long-term rental includes weekly servicing: waste removal, restocking toilet paper and hand sanitizer, full sanitization, and damage inspection. We show up every week without fail.",
      },
      {
        title: "Unreliable Delivery & Pickup",
        description:
          "Units not delivered on day one means workers have no restrooms. Companies that don't pick up promptly after a project ends keep billing. Weekend emergencies go to voicemail.",
        solution:
          "We deliver on your schedule, pick up when the job is done (not a day later), and answer the phone 24/7 — including weekends. Troy personally coordinates logistics for every project.",
      },
      {
        title: "Hidden Fees & Confusing Billing",
        description:
          "Surprise delivery charges, environmental fees, fuel surcharges, and minimum rental periods you didn't know about turn a simple rental into a billing nightmare.",
        solution:
          "Transparent, all-inclusive pricing. We tell you exactly what's included upfront — delivery, pickup, servicing, supplies. No hidden fees, no surprises on your invoice.",
      },
    ],
    faqs: [
      {
        question:
          "How many portable restrooms does my Oklahoma construction site need?",
        answer:
          "OSHA requires at least 1 toilet per 20 workers (29 CFR 1926.51). For a site with 40 workers, you need a minimum of 2 units. If both men and women are on site, separate or lockable facilities are required. Brower Inc. helps you calculate the exact number based on your crew size, shift schedule, and site layout.",
      },
      {
        question:
          "Does Brower Inc. provide ADA-compliant portable restrooms for construction sites?",
        answer:
          "Yes. We carry ADA-compliant portable restrooms that are larger, wheelchair-accessible, and meet all accessibility requirements. We can help you determine whether your project requires ADA units based on site conditions and local regulations.",
      },
      {
        question:
          "What's included in weekly portable restroom servicing for construction?",
        answer:
          "Every weekly service visit includes: emptying the waste tank, restocking toilet paper and hand sanitizer, sanitizing and scrubbing the interior, rinsing the unit, and inspecting for damage. All of this is included in your rental rate — no extra charges.",
      },
      {
        question:
          "Can you deliver portable restrooms to remote construction sites in rural Oklahoma?",
        answer:
          "Absolutely. Brower Inc. specializes in delivering to remote and rural job sites across 20 counties in Oklahoma and Kansas. We navigate unpaved roads, farm access routes, and restricted-access sites regularly. If there's a road, we'll get there.",
      },
      {
        question: "How fast can Brower Inc. deliver portable restrooms to a construction site?",
        answer:
          "For planned projects, we typically deliver within 24-48 hours of booking. For urgent needs, same-day delivery is often available depending on your location. Call Troy directly at (580) 747-6206 to discuss your timeline.",
      },
    ],
    stats: [
      { value: "640+", label: "Unit Fleet" },
      { value: "20", label: "Counties Served" },
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
      "Get a free quote for construction site portable restrooms. We'll help you determine the right number of units for your crew.",
    image: IMAGES.portableRestroomConstruction,
    imageAlt:
      "Brower Inc. portable restroom at an Oklahoma construction site with workers in the background",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },

  // ─────────────────────────────────────────────
  // 2. EVENTS & WEDDINGS
  // ─────────────────────────────────────────────
  {
    name: "Events & Weddings",
    slug: "events-weddings",
    shortDescription:
      "Portable restrooms and luxury VIP trailers for weddings, festivals, corporate events, and gatherings across Oklahoma.",
    metaTitle:
      "Event & Wedding Porta Potty Rental Oklahoma | VIP Trailers",
    metaDescription:
      "Portable restroom & luxury VIP trailer rental for Oklahoma weddings, festivals & events. 18-station climate-controlled trailers. Call (580) 747-6206.",
    heroTitle: "Portable Restrooms & Luxury Trailers for Oklahoma Events",
    heroDescription:
      "From barn weddings on the Oklahoma prairie to community festivals with 5,000 attendees, Brower Inc. provides the portable sanitation that keeps your guests comfortable and your event running smoothly. Choose from standard portable restrooms for casual gatherings or upgrade to our 18-station VIP luxury restroom trailers with climate control, running water, and private stalls for upscale occasions.",
    whyBrower:
      "Your guests will remember the restrooms — make sure it's for the right reasons. Our VIP restroom trailers feature heat and air conditioning, running water with soap and paper towel dispensers, large countertops with full-size mirrors, superior LED lighting, and private enclosed stalls. For casual events, our standard Maxim 300 units are spacious, clean, and available in blue, tan, or pink (a crowd favorite at Oklahoma events). We provide 24/7 support during your event — if a unit needs restocking on Saturday night, we answer the phone.",
    painPoints: [
      {
        title: "The \"Gross Porta Potty\" Stigma",
        description:
          "Brides and corporate event planners are terrified of standard blue porta potties at their elegant event. Guests associate them with bad smells, filth, and discomfort.",
        solution:
          "Our 18-station VIP luxury restroom trailers change the game entirely. Climate-controlled private stalls, running water, vanity mirrors, and LED lighting give guests a premium experience. Many people don't even know these exist — let us show you.",
      },
      {
        title: "Not Knowing How Many Units to Rent",
        description:
          "Underestimating means long lines and guest complaints. Overestimating means wasted money. Alcohol, event duration, and guest count all change the math.",
        solution:
          "General rule: 1 unit per 50-60 guests for a 4-hour event. Serving alcohol? Add 20% more. We'll calculate the exact number based on your guest count, event duration, and venue layout — free of charge.",
      },
      {
        title: "Placement & Logistics Confusion",
        description:
          "Where do you put portable restrooms so they're accessible but not an eyesore? VIP trailers need a power source and flat ground. Oklahoma's wind can tip standard units.",
        solution:
          "We advise on optimal placement for every venue type — keeping units accessible, downwind, and out of photo backgrounds. VIP trailers need 120V/20A power within 100 feet. We secure units against Oklahoma winds with tie-downs.",
      },
      {
        title: "Last-Minute Availability Panic",
        description:
          "Restrooms are often the last thing booked and the first thing guests notice. Peak season (May through October) causes inventory shortages, especially for luxury trailers.",
        solution:
          "Book early for guaranteed availability. Our 640+ unit fleet means we rarely run out of standard units, but VIP trailers are limited — we recommend booking 3-6 months ahead for peak wedding season.",
      },
    ],
    faqs: [
      {
        question:
          "How many portable restrooms do I need for my Oklahoma outdoor wedding?",
        answer:
          "For a 4-hour event, plan for 1 portable restroom per 50-60 guests. A 200-guest wedding needs approximately 4 standard units or 1 VIP luxury trailer (which serves as a multi-station restroom). If alcohol is served, increase by 20%. Brower Inc. provides a free consultation to determine the exact number for your event.",
      },
      {
        question:
          "What's the difference between a standard porta potty and a VIP luxury restroom trailer?",
        answer:
          "Standard portable restrooms are self-contained single units with hand sanitizer. Our VIP luxury restroom trailers are 18-station climate-controlled trailers with heat and AC, running water, private enclosed stalls, full-size vanity mirrors, large countertops, LED lighting, and premium finishes. They're designed for weddings, galas, and corporate events where guest experience matters.",
      },
      {
        question:
          "How far in advance should I book portable restrooms for my event?",
        answer:
          "We recommend booking at least 2-4 weeks ahead for standard units and 3-6 months ahead for VIP luxury trailers during peak season (May through October). Last-minute requests can often be accommodated for standard units due to our 640+ fleet, but VIP trailers are limited inventory.",
      },
      {
        question:
          "Do you provide support during events if something goes wrong?",
        answer:
          "Yes. Brower Inc. offers 24/7 support including weekends and holidays. If a unit needs restocking, tips over in the wind, or any issue arises during your event, call (580) 747-6206 and we'll respond promptly.",
      },
      {
        question: "Where should portable restrooms be placed at an outdoor event?",
        answer:
          "Place units within a 1-2 minute walk of the main event area, downwind from food service and seating. Keep them accessible but not blocking photo backdrops or main walkways. VIP trailers need flat, level ground and a 120V/20A power source within 100 feet. We'll help you plan the optimal placement for your venue.",
      },
    ],
    stats: [
      { value: "18", label: "Station VIP Trailers" },
      { value: "640+", label: "Unit Fleet" },
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
      "Get a free quote for event portable restrooms or VIP luxury trailers. We'll help you plan the perfect restroom setup for your guests.",
    image: IMAGES.rodeoEvent,
    imageAlt:
      "Brower Inc. VIP restroom trailer set up at an Oklahoma outdoor event venue",
    icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  },

  // ─────────────────────────────────────────────
  // 3. OIL & GAS / ENERGY
  // ─────────────────────────────────────────────
  {
    name: "Oil & Gas",
    slug: "oil-gas",
    shortDescription:
      "Portable sanitation for drilling sites, pipeline construction, pump stations, wind farms, and refinery operations in Oklahoma.",
    metaTitle:
      "Oil Field Porta Potty Rental & Sanitation | Oklahoma",
    metaDescription:
      "Portable restroom rental for Oklahoma oil fields, drilling sites & pipeline construction. Remote delivery, flexible servicing, OSHA compliant. Call (580) 747-6206.",
    heroTitle:
      "Portable Sanitation for Oklahoma's Oil & Gas Industry",
    heroDescription:
      "Oklahoma's energy sector doesn't stop at 5 PM — and neither do we. Brower Inc. delivers and services portable restrooms at drilling sites, pipeline construction projects, pump stations, wind farm builds, and refinery turnarounds across north-central Oklahoma and southern Kansas. Our fleet reaches the most remote well pads and our flexible servicing schedules match your 24/7 operations.",
    whyBrower:
      "Oil and gas sites present unique challenges that most portable restroom companies can't handle: no paved roads, locked gates, cattle guards, and locations miles from the nearest town. Brower Inc. has the equipment and experience to navigate the roughest terrain across 20 counties. We offer flexible servicing schedules beyond the standard weekly visit — because a 24/7 drilling crew with 12-hour shifts puts double or triple the usage on a unit. Troy Brower works directly with site managers to build a sanitation plan that matches your operation's intensity.",
    complianceTitle: "Multi-Regulation Compliance Support",
    complianceContent:
      "Oklahoma oil and gas operations must comply with OSHA portable sanitation standards (29 CFR 1926.51), Oklahoma DEQ environmental regulations, and often company-specific safety policies. Hand washing stations with running water, soap, and paper towels are mandatory — hand sanitizer alone does not satisfy OSHA requirements. Brower Inc. provides the units, the servicing documentation, and the compliance knowledge to keep your operation audit-ready.",
    painPoints: [
      {
        title: "Extreme Remoteness",
        description:
          "Drilling sites in rural Oklahoma have zero infrastructure. Delivery requires navigating unpaved roads, cattle guards, and locked gates that most providers refuse to access.",
        solution:
          "We go where others won't. Brower Inc. delivers to the most remote sites in 20 counties across Oklahoma and Kansas. Unpaved roads, rough terrain, and restricted access are daily operations for our fleet.",
      },
      {
        title: "Extreme Oklahoma Weather",
        description:
          "100°F+ summers make standard units unbearable. Freezing winters crack chemicals and water lines. High winds topple unsecured units on the open plains.",
        solution:
          "We prepare units for Oklahoma's extremes — enhanced ventilation for summer, freeze-prevention protocols for winter, and tie-down anchoring for wind-exposed sites. Our servicing adjusts for heat-accelerated odor and waste breakdown.",
      },
      {
        title: "24/7 Operations with Heavy Usage",
        description:
          "Drilling doesn't stop. Crews work 12-hour shifts around the clock, putting double or triple normal usage on each unit. Standard weekly servicing isn't enough.",
        solution:
          "We offer 2x and 3x weekly servicing schedules for high-traffic operations. We calculate the right service frequency based on your crew size and shift pattern so units stay clean around the clock.",
      },
      {
        title: "Multi-Regulation Compliance",
        description:
          "OSHA requirements, Oklahoma DEQ regulations, and your company's internal safety policies all apply simultaneously. Documentation of servicing schedules is required for audits.",
        solution:
          "We maintain service records that satisfy OSHA, DEQ, and corporate safety audits. We deliver the right combination of restrooms and hand washing stations to meet every applicable regulation.",
      },
    ],
    faqs: [
      {
        question:
          "Can Brower Inc. deliver portable restrooms to remote Oklahoma drilling sites?",
        answer:
          "Yes. We specialize in remote delivery across 20 counties in Oklahoma and Kansas. Our fleet regularly navigates unpaved oil field roads, cattle guards, locked gates, and rough terrain. If you can get a crew there, we can get a restroom there.",
      },
      {
        question:
          "How often should portable restrooms be serviced at a 24/7 drilling site?",
        answer:
          "For 24/7 operations with 12-hour shifts, standard weekly servicing is typically insufficient. We recommend 2-3x weekly servicing depending on crew size. A site with 20+ workers on rotating shifts usually needs twice-weekly service at minimum. We'll assess your specific operation and recommend the right schedule.",
      },
      {
        question:
          "Do you provide hand washing stations for oil field sites?",
        answer:
          "Yes. OSHA requires hand washing facilities with running water, soap, and paper towels at construction and industrial sites — hand sanitizer alone does not meet compliance when workers handle chemicals or hazardous materials. Our standalone hand washing stations require no external water or power hookups.",
      },
      {
        question:
          "How do you handle portable restrooms in extreme Oklahoma heat?",
        answer:
          "Oklahoma summers regularly exceed 100°F. We increase servicing frequency during heat waves (heat accelerates odor and waste breakdown), advise on shaded placement when possible, and ensure ventilation systems are functioning properly. Our units are designed to withstand Oklahoma's climate extremes.",
      },
    ],
    stats: [
      { value: "20", label: "Counties Reached" },
      { value: "24/7", label: "Delivery & Support" },
      { value: "2-3x", label: "Weekly Servicing Available" },
      { value: "640+", label: "Unit Fleet" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "hand-washing-stations",
    ],
    ctaTitle: "Sanitation That Reaches Your Remote Site",
    ctaDescription:
      "Get a free quote for oil field portable restrooms. We'll build a servicing schedule that matches your 24/7 operations.",
    image: IMAGES.portableRestroomField,
    imageAlt:
      "Brower Inc. portable restroom deployed at a remote Oklahoma oil field site",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0 .628.134 1.227.377 1.767l-.377.377-3.172-3.172a1 1 0 00-1.414 0l-2.828 2.828a1 1 0 000 1.414l6.586 6.586a1 1 0 001.414 0l2.828-2.828a1 1 0 000-1.414L9.414 12.5",
  },

  // ─────────────────────────────────────────────
  // 4. AGRICULTURE & RANCHING
  // ─────────────────────────────────────────────
  {
    name: "Agriculture & Ranching",
    slug: "agriculture",
    shortDescription:
      "Portable restroom solutions for farms, ranches, harvest crews, livestock operations, and agricultural events in Oklahoma.",
    metaTitle:
      "Farm & Ranch Porta Potty Rental Oklahoma | Ag Sanitation",
    metaDescription:
      "Portable restroom rental for Oklahoma farms & ranches. OSHA field sanitation compliant. Rural delivery to remote properties. Call (580) 747-6206.",
    heroTitle: "Portable Restrooms for Oklahoma Farms & Ranches",
    heroDescription:
      "Oklahoma's agricultural economy depends on workers who spend full days in fields with zero infrastructure. Brower Inc. delivers portable restrooms to the most remote farms and ranches across north-central Oklahoma and southern Kansas — because your seasonal crew, auction yard staff, and ranch event guests need facilities, and the nearest indoor restroom might be miles away.",
    whyBrower:
      "We're based in Newkirk, Oklahoma — surrounded by agriculture. We navigate farm roads, mud, and livestock areas every day. Our fleet reaches remote properties that national companies won't serve. Whether you need one unit for harvest season or a dozen for a ranch wedding and rodeo, Brower Inc. delivers to your gate and services weekly throughout your rental period.",
    complianceTitle: "OSHA Field Sanitation Requirements",
    complianceContent:
      "OSHA field sanitation standards require agricultural employers with 11 or more hand laborers to provide toilet facilities within a quarter-mile walk of each worker's location. Potable drinking water and hand washing facilities must also be available. Failing to provide these facilities can result in OSHA citations and fines. Brower Inc. helps Oklahoma farmers and ranchers stay compliant during harvest season, livestock operations, and any period with temporary or seasonal workers.",
    painPoints: [
      {
        title: "Seasonal Worker Sanitation Compliance",
        description:
          "Harvest season brings temporary workers with no access to facilities. OSHA field sanitation standards require restrooms within 1/4 mile when you have 11+ agricultural workers — but most farmers don't know this.",
        solution:
          "We help you meet OSHA field sanitation requirements with the right number of units placed within the required 1/4-mile distance of workers. Flexible short-term rentals match your harvest timeline.",
      },
      {
        title: "Remote Location Access",
        description:
          "Farm and ranch properties can be miles from paved roads. Delivery trucks need to navigate farm roads, mud, and livestock areas that most providers refuse to drive.",
        solution:
          "Based in rural north-central Oklahoma, we navigate farm roads daily. Mud, gravel, cattle guards — we handle it all. If your crew can get to the field, we can deliver a restroom to it.",
      },
      {
        title: "Ranch Event Needs",
        description:
          "Rodeos, ranch weddings, trail rides, and livestock auctions draw crowds to locations with no permanent facilities. You need restrooms that match the scale and setting.",
        solution:
          "From standard units for rodeos and auctions to VIP luxury trailers for ranch weddings, we provide the right sanitation for every agricultural event. Pink units are a popular choice for Oklahoma ranch weddings.",
      },
    ],
    faqs: [
      {
        question:
          "Does OSHA require portable restrooms on Oklahoma farms?",
        answer:
          "Yes, when you have 11 or more hand laborers working in the field. OSHA's field sanitation standard requires toilet facilities within a 1/4-mile walk, plus drinking water and hand washing facilities. Brower Inc. helps Oklahoma farms stay compliant during harvest and other peak labor periods.",
      },
      {
        question:
          "Can you deliver portable restrooms to remote Oklahoma ranch properties?",
        answer:
          "Absolutely. We're based in Newkirk, OK — surrounded by agricultural land. Our fleet navigates unpaved farm roads, muddy fields, and rural properties across 20 counties in Oklahoma and Kansas every week. Remote delivery is our specialty.",
      },
      {
        question:
          "Do you provide restrooms for ranch weddings and rodeos?",
        answer:
          "Yes. We offer standard portable restrooms for rodeos and casual events, plus VIP luxury restroom trailers for ranch weddings and upscale gatherings. Our pink portable restrooms are especially popular at Oklahoma ranch weddings.",
      },
      {
        question:
          "How long can I rent portable restrooms for agricultural use?",
        answer:
          "We offer flexible rental periods from a single weekend to several months. Harvest season rentals, seasonal crew support, and year-round livestock operation needs are all accommodated. All long-term rentals include weekly servicing.",
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
      "Get a free quote for agricultural portable restrooms. We deliver to the most remote properties in Oklahoma.",
    image: IMAGES.portableRestroomField,
    imageAlt:
      "Brower Inc. portable restroom delivered to a rural Oklahoma farm field",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },

  // ─────────────────────────────────────────────
  // 5. GOVERNMENT & MUNICIPAL
  // ─────────────────────────────────────────────
  {
    name: "Government & Municipal",
    slug: "government-municipal",
    shortDescription:
      "Portable restroom services for Oklahoma municipalities — parks, public events, road crews, and emergency disaster response.",
    metaTitle:
      "Municipal Portable Restroom Rental | Government | Oklahoma",
    metaDescription:
      "Portable restroom rental for Oklahoma municipalities. Emergency deployment, park facilities, public events & road crews. 640+ unit fleet. Call (580) 747-6206.",
    heroTitle:
      "Portable Sanitation for Oklahoma Municipalities & Government",
    heroDescription:
      "Oklahoma's city, county, and state agencies rely on Brower Inc. for everything from park trailhead restrooms to rapid emergency deployment after tornadoes. With a 640+ unit fleet and 24/7 availability, we handle the scale and urgency that government operations demand — while providing the transparency and documentation public procurement requires.",
    whyBrower:
      "Brower Inc. understands government procurement. We provide W-9 forms, certificates of insurance, formal quotes on request, and transparent invoicing suitable for public accountability. Our 640+ unit fleet enables large-scale emergency deployment on short notice — essential during Oklahoma's tornado season. We offer both per-event pricing and annual contract options to fit your municipality's budget cycle.",
    complianceTitle: "Procurement-Ready Documentation",
    complianceContent:
      "Municipal portable restroom procurement requires transparency, documentation, and compliance with public bidding processes. Brower Inc. provides formal written quotes, W-9 forms, certificates of insurance (general liability and auto), and detailed invoicing with line-item breakdowns. We can set up annual service contracts or per-event agreements depending on your municipality's needs and budget cycle. All pricing is transparent with no hidden fees.",
    painPoints: [
      {
        title: "Emergency Mobilization Speed",
        description:
          "A tornado strikes and you need 50 units deployed by tomorrow. Most providers can't handle large emergency orders on short notice. You need someone who answers the phone 24/7, especially during storm season.",
        solution:
          "Our 640+ unit fleet enables rapid large-scale deployment. We answer the phone 24/7 — including during tornado season when you need us most. We can mobilize dozens of units within hours, not days.",
      },
      {
        title: "Budget & Procurement Process",
        description:
          "Government buyers need formal quotes, PO numbers, W-9 forms, and transparent billing for public accountability. Many portable restroom companies don't understand government purchasing.",
        solution:
          "We provide all required procurement documentation: formal quotes, W-9, certificates of insurance, and detailed invoicing. We work with PO numbers and offer both per-event and annual contract pricing.",
      },
      {
        title: "Ongoing Public Facility Needs",
        description:
          "Parks, trailheads, sports fields, and playgrounds need seasonal or year-round restroom access. Public events — parades, July 4th, memorial services — require temporary units that serve hundreds or thousands.",
        solution:
          "From seasonal park installations to single-day public event setups, we scale our services to match your community's needs. Long-term park installations include weekly servicing. Event setups include delivery, placement, and pickup.",
      },
    ],
    faqs: [
      {
        question:
          "Can Brower Inc. deploy portable restrooms for emergency disaster response in Oklahoma?",
        answer:
          "Yes. Our 640+ unit fleet enables rapid large-scale deployment for tornado recovery, flooding, wildfire staging, and ice storm response. We operate 24/7 and can mobilize dozens of units within hours. Oklahoma averages 56 tornadoes per year — emergency readiness is built into our operations.",
      },
      {
        question:
          "Does Brower Inc. provide the documentation required for government procurement?",
        answer:
          "Yes. We provide formal written quotes, W-9 forms, certificates of insurance (general liability and commercial auto), and itemized invoicing suitable for public auditing. We work with purchase orders and can accommodate municipal purchasing processes.",
      },
      {
        question:
          "Do you offer annual contracts for municipal portable restroom services?",
        answer:
          "Yes. We offer both per-event pricing and annual service contracts for ongoing needs like parks, recreation areas, and regular public events. Annual contracts can include pre-arranged emergency deployment terms for disaster response.",
      },
      {
        question:
          "Can you provide portable restrooms for public parks and trailheads?",
        answer:
          "Absolutely. We provide seasonal and year-round portable restroom installations for parks, trailheads, sports complexes, playgrounds, and other public recreation facilities. All installations include weekly servicing.",
      },
    ],
    stats: [
      { value: "640+", label: "Unit Fleet" },
      { value: "24/7", label: "Emergency Response" },
      { value: "56", label: "Avg OK Tornadoes/Year" },
      { value: "20", label: "Counties Covered" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "vip-shower-restroom-trailers",
    ],
    ctaTitle: "Ready When Oklahoma Needs Us",
    ctaDescription:
      "Request a quote for municipal portable restroom services. We provide the fleet, the documentation, and the 24/7 readiness your community requires.",
    image: IMAGES.communityEvent,
    imageAlt:
      "Brower Inc. portable restrooms set up at a community event in Oklahoma",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },

  // ─────────────────────────────────────────────
  // 6. FILM & TV PRODUCTION
  // ─────────────────────────────────────────────
  {
    name: "Film & TV Production",
    slug: "film-tv",
    shortDescription:
      "Portable restrooms and VIP luxury trailers for film crews, talent, and production sets across Oklahoma.",
    metaTitle:
      "Film & TV Production Restroom Trailer Rental | Oklahoma",
    metaDescription:
      "Portable restroom & VIP trailer rental for Oklahoma film & TV productions. Climate-controlled trailers for talent. Remote location delivery. Call (580) 747-6206.",
    heroTitle:
      "Portable Restrooms & VIP Trailers for Oklahoma Film Productions",
    heroDescription:
      "Oklahoma's film industry is booming — and every production, from major studio features to indie documentaries, needs reliable sanitation at remote shooting locations. Brower Inc. provides standard portable restrooms for crew and VIP luxury restroom trailers for talent and directors. We deliver to rural Oklahoma locations that other companies can't reach.",
    whyBrower:
      "Oklahoma has become a major filming destination thanks to its film incentive program — productions like Killers of the Flower Moon, Tulsa King, and Reservation Dogs were all filmed here. Film crews need restrooms at locations that often have zero existing infrastructure: open prairie, small towns, private ranches. Brower Inc.'s 20-county coverage and rural delivery expertise make us the go-to provider for productions shooting outside the OKC and Tulsa metros. Our VIP trailers provide premium accommodations for talent with climate control, private stalls, running water, and vanity mirrors.",
    painPoints: [
      {
        title: "Remote Location Access",
        description:
          "Oklahoma productions often shoot in rural areas, private ranches, and small towns with no existing sanitation infrastructure. Most rental companies only serve metro areas.",
        solution:
          "We cover 20 counties across north-central Oklahoma and southern Kansas, delivering to the most remote locations. If your scout team approved the location, we can get restrooms there.",
      },
      {
        title: "Talent Expectations",
        description:
          "Actors, directors, and key crew expect premium restroom facilities on set. Standard porta potties don't meet production rider requirements.",
        solution:
          "Our VIP luxury restroom trailers feature climate control (heat and AC), running water, private enclosed stalls, vanity mirrors, LED lighting, and premium finishes — meeting and exceeding typical production rider requirements.",
      },
      {
        title: "Flexible Production Timelines",
        description:
          "Film schedules shift constantly. You may need units for two weeks or two months. Locations change. Pickups and re-deliveries happen on short notice.",
        solution:
          "We offer flexible rental terms that adapt to production timelines. Add units, move units between locations, or extend rentals as your schedule evolves. Troy works directly with production managers to keep logistics smooth.",
      },
    ],
    faqs: [
      {
        question:
          "Do you provide VIP restroom trailers for film talent in Oklahoma?",
        answer:
          "Yes. Our VIP luxury restroom trailers are ideal for talent, directors, and key crew. They feature heat and air conditioning, running water, private enclosed stalls, vanity mirrors with lighting, and countertop space. These exceed the restroom standards typically required in production riders.",
      },
      {
        question:
          "Can you deliver to remote Oklahoma filming locations?",
        answer:
          "Absolutely. We cover 20 counties and specialize in rural delivery. We've delivered to remote ranches, small towns, and open-field locations across north-central Oklahoma. If your production is shooting outside OKC or Tulsa, we're your local provider.",
      },
      {
        question:
          "How does Oklahoma's film incentive program benefit productions?",
        answer:
          "Oklahoma offers a rebate of up to 38% on qualified spending for film and TV productions, making the state increasingly popular for location shoots. As more productions come to Oklahoma, having a reliable local sanitation provider is essential for remote and rural filming locations.",
      },
    ],
    stats: [
      { value: "VIP", label: "Trailers for Talent" },
      { value: "20", label: "Counties Covered" },
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
      "Get a free quote for film and TV production portable restrooms and VIP trailers. We handle rural Oklahoma locations others can't reach.",
    image: IMAGES.vipExteriorSide,
    imageAlt:
      "Brower Inc. VIP luxury restroom trailer suitable for film production talent in Oklahoma",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },

  // ─────────────────────────────────────────────
  // 7. UTILITIES & TELECOM
  // ─────────────────────────────────────────────
  {
    name: "Utilities & Telecom",
    slug: "utilities-telecom",
    shortDescription:
      "Portable restrooms for utility line crews, substations, fiber installation, and storm restoration teams in Oklahoma.",
    metaTitle:
      "Utility Crew Porta Potty Rental Oklahoma | Storm Crews",
    metaDescription:
      "Portable restroom rental for Oklahoma utility crews, line workers & storm restoration teams. Remote delivery, rapid deployment. Call (580) 747-6206.",
    heroTitle:
      "Portable Restrooms for Oklahoma Utility & Telecom Crews",
    heroDescription:
      "When power lines go down in an ice storm, fiber crews push into rural corridors, or substation work stretches across weeks, your field crews need restroom facilities at locations with zero infrastructure. Brower Inc. provides portable restrooms for utility line crews, telecom installers, and storm restoration teams across 20 counties in Oklahoma and southern Kansas.",
    whyBrower:
      "Storm restoration is urgent — when an ice storm or tornado takes down power lines across rural Oklahoma, utility companies deploy crews from multiple states who need immediate sanitation at staging areas and work sites. Brower Inc.'s 640+ unit fleet and 24/7 availability means we can deploy units to restoration staging areas on short notice. For planned utility work — power line maintenance, fiber optic installation, substation projects — we provide long-term rentals with weekly servicing at remote crew locations.",
    painPoints: [
      {
        title: "Storm Restoration Urgency",
        description:
          "When ice storms or tornadoes take down power lines, out-of-state crews are deployed for weeks. They need restrooms at staging areas and remote work sites — immediately.",
        solution:
          "Our 640+ fleet and 24/7 operations enable rapid deployment to storm restoration staging areas. We've supported emergency utility operations across our 20-county service area and can scale from a few units to dozens on short notice.",
      },
      {
        title: "Remote Substations & Line Work",
        description:
          "Substations, power line corridors, and fiber installation routes are often in remote locations with no facilities. Crews rotate in and out for weeks.",
        solution:
          "We deliver to rural substations, right-of-way corridors, and remote work sites throughout north-central Oklahoma and southern Kansas. Long-term rentals with weekly servicing keep facilities clean as crews rotate.",
      },
      {
        title: "Serving Out-of-State Crews",
        description:
          "During major storm events, utility companies bring in mutual aid crews from other states. These crews are unfamiliar with the area and need self-contained facilities.",
        solution:
          "We coordinate delivery to crew staging areas and work zones, providing fully stocked and serviced units so visiting crews have everything they need from day one.",
      },
    ],
    faqs: [
      {
        question:
          "Can Brower Inc. deploy portable restrooms for storm restoration crews?",
        answer:
          "Yes. We provide rapid deployment for storm restoration staging areas and work sites. Our 640+ unit fleet and 24/7 availability mean we can respond quickly when ice storms, tornadoes, or severe weather create urgent utility restoration needs.",
      },
      {
        question:
          "Do you serve remote substations and utility work sites?",
        answer:
          "Yes. We deliver to remote substations, power line corridors, fiber installation routes, and telecommunications infrastructure sites across 20 counties in Oklahoma and Kansas. Long-term rentals with weekly servicing are available for extended projects.",
      },
      {
        question:
          "How quickly can you deploy units for emergency utility work?",
        answer:
          "For emergency storm restoration, we can typically deploy units within hours. Our 24/7 availability means we respond to urgent needs regardless of time of day. Call (580) 747-6206 for emergency deployment.",
      },
    ],
    stats: [
      { value: "640+", label: "Unit Fleet" },
      { value: "24/7", label: "Emergency Deploy" },
      { value: "20", label: "Counties Covered" },
      { value: "Weekly", label: "Servicing Included" },
    ],
    relatedServices: [
      "portable-restrooms",
      "long-term-rentals",
      "hand-washing-stations",
    ],
    ctaTitle: "Sanitation for Your Crews — Rain or Shine",
    ctaDescription:
      "Get a free quote for utility crew portable restrooms. We deploy fast for storm restoration and provide long-term solutions for planned infrastructure work.",
    image: IMAGES.deliveryDaytime,
    imageAlt:
      "Brower Inc. portable restroom delivery truck serving utility crew work site in Oklahoma",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },

  // ─────────────────────────────────────────────
  // 8. DISASTER RELIEF & EMERGENCY
  // ─────────────────────────────────────────────
  {
    name: "Disaster Relief & Emergency",
    slug: "disaster-relief",
    shortDescription:
      "Rapid portable restroom and shower trailer deployment for tornado recovery, flood relief, wildfire staging, and ice storm response in Oklahoma.",
    metaTitle:
      "Disaster Relief Portable Restrooms Oklahoma | Emergency",
    metaDescription:
      "Emergency portable restroom & shower trailer deployment for Oklahoma tornado recovery, floods & disaster relief. 640+ fleet, 24/7 response. Call (580) 747-6206.",
    heroTitle:
      "Emergency Portable Restroom Deployment for Oklahoma Disasters",
    heroDescription:
      "Oklahoma averages 56 tornadoes per year. Add flooding, ice storms, and wildfires, and the demand for emergency sanitation is year-round. Brower Inc. provides rapid large-scale portable restroom and shower trailer deployment for disaster recovery operations, emergency shelters, fire camps, and community relief staging areas across north-central Oklahoma and southern Kansas.",
    whyBrower:
      "When disaster strikes, response time is everything. Our 640+ unit fleet — one of the largest in north-central Oklahoma — enables us to deploy dozens of portable restrooms and shower trailers within hours, not days. We operate 24/7, including during active storm events. Troy Brower coordinates emergency logistics personally, working with emergency managers, relief organizations, and government agencies to place units exactly where they're needed. Living and operating in tornado-prone Oklahoma means emergency readiness isn't a special service — it's how we operate.",
    painPoints: [
      {
        title: "Speed of Deployment",
        description:
          "After a tornado, you need 50 units at a shelter site by morning. Most providers don't have the fleet, the staff, or the 24/7 availability to mobilize at that scale and speed.",
        solution:
          "Our 640+ fleet enables rapid mass deployment. We operate 24/7 and can begin delivering within hours of your call. Troy personally coordinates emergency logistics to get units placed fast.",
      },
      {
        title: "Extended Displacement Needs",
        description:
          "Disaster displacement lasts weeks or months, not days. Displaced residents in shelters, temporary housing, and recovery staging areas need sustained sanitation services.",
        solution:
          "We provide long-term disaster relief installations with weekly servicing included. As the recovery evolves, we scale units up or down and relocate as staging areas shift.",
      },
      {
        title: "Shower and Hygiene Facilities",
        description:
          "Fire camps and extended emergency operations need more than just restrooms — crews and displaced families need shower access.",
        solution:
          "Our VIP shower and restroom trailers provide full shower facilities with hot water, climate control, and privacy — essential for fire camps, extended disaster shelters, and relief workers.",
      },
    ],
    faqs: [
      {
        question:
          "How fast can Brower Inc. deploy portable restrooms after a tornado?",
        answer:
          "We can begin deploying portable restrooms within hours of an emergency call. Our 640+ unit fleet and 24/7 availability mean we're ready when Oklahoma's severe weather strikes. Troy Brower coordinates emergency logistics personally to ensure rapid placement.",
      },
      {
        question:
          "Does Brower Inc. provide shower trailers for disaster relief?",
        answer:
          "Yes. Our VIP shower and restroom trailers include hot water showers, climate control, and private stalls — essential for fire camps, emergency shelters, and extended disaster recovery operations where displaced families and relief workers need hygiene facilities.",
      },
      {
        question:
          "Can Brower Inc. work with FEMA and emergency management agencies?",
        answer:
          "Yes. We provide the documentation, invoicing, and operational transparency that government agencies and relief organizations require. We work with purchase orders, provide certificates of insurance, and maintain detailed service records.",
      },
      {
        question:
          "How many portable restrooms can Brower Inc. deploy at once?",
        answer:
          "Our fleet of 640+ units is one of the largest in north-central Oklahoma. For emergency scenarios, we can deploy large quantities rapidly and continue scaling as additional units are freed from other assignments. Call (580) 747-6206 to discuss your emergency needs.",
      },
    ],
    stats: [
      { value: "640+", label: "Unit Fleet" },
      { value: "Hours", label: "Not Days to Deploy" },
      { value: "56", label: "Avg OK Tornadoes/Year" },
      { value: "24/7", label: "Always Available" },
    ],
    relatedServices: [
      "portable-restrooms",
      "vip-shower-restroom-trailers",
      "long-term-rentals",
    ],
    ctaTitle: "Emergency Sanitation — Call Now",
    ctaDescription:
      "Need emergency portable restroom deployment? Call (580) 747-6206 — we're available 24/7 and can begin delivering within hours.",
    image: IMAGES.fleetLineup,
    imageAlt:
      "Brower Inc. full fleet of trucks and equipment ready for emergency deployment in Oklahoma",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },

  // ─────────────────────────────────────────────
  // 9. REAL ESTATE & PROPERTY MANAGEMENT
  // ─────────────────────────────────────────────
  {
    name: "Real Estate & Property Management",
    slug: "real-estate",
    shortDescription:
      "Portable restrooms for new home construction and septic maintenance for rental properties throughout Oklahoma.",
    metaTitle:
      "Real Estate Septic & Porta Potty Rental Oklahoma",
    metaDescription:
      "Portable restroom rental for home construction & septic maintenance for rental properties in Oklahoma. One provider for both. Call (580) 747-6206.",
    heroTitle:
      "Portable Restrooms & Septic Services for Oklahoma Properties",
    heroDescription:
      "Oklahoma's real estate market depends on reliable sanitation at every stage — portable restrooms during new home construction and land development, and septic maintenance for the properties you manage long after the build is done. Brower Inc. is one of the only providers in north-central Oklahoma that handles both, giving property professionals a single trusted partner from groundbreaking through occupancy.",
    whyBrower:
      "Most portable restroom companies only do rentals. Most septic companies only do pumping. Brower Inc. does both — which means we understand waste management from both sides. During construction, we provide portable restrooms for your crew and subcontractors. Once the property is built and occupied, we handle septic pumping, repair, and installation for the same property. Real estate agents appreciate having restroom facilities available during showings at active construction sites. Property managers value having one local provider for all their sanitation needs across multiple properties.",
    painPoints: [
      {
        title: "Construction Phase Sanitation",
        description:
          "New home builds, subdivisions, and land clearing projects need portable restrooms for contractors and subcontractors. Agents need facilities for buyer walkthroughs during construction.",
        solution:
          "We provide portable restrooms with weekly servicing for the entire construction phase — from land clearing through final inspection. Units are clean and presentable for buyer walkthroughs and agent showings.",
      },
      {
        title: "Septic Maintenance for Managed Properties",
        description:
          "Rental property managers need reliable septic pumping on a schedule. Emergency backups at tenant-occupied properties require fast response.",
        solution:
          "We provide scheduled septic pumping for managed properties (recommended every 3-5 years) and emergency pumping when backups occur. We can service multiple properties under one account for simplified billing.",
      },
      {
        title: "One Provider, Full Lifecycle",
        description:
          "Coordinating separate companies for construction restrooms and property septic maintenance creates billing complexity and communication gaps.",
        solution:
          "Brower Inc. handles both portable restrooms during construction and septic maintenance after occupancy. One provider, one account, one relationship from dirt to done.",
      },
    ],
    faqs: [
      {
        question:
          "Does Brower Inc. provide portable restrooms for new home construction sites?",
        answer:
          "Yes. We provide portable restrooms with weekly servicing for residential construction projects — new home builds, subdivisions, remodels, and land clearing. Units are kept clean and presentable, even during buyer walkthroughs and real estate showings.",
      },
      {
        question:
          "Can Brower Inc. handle septic maintenance for multiple rental properties?",
        answer:
          "Yes. Property managers can set up one account for multiple properties. We provide scheduled septic pumping (recommended every 3-5 years per property), emergency pumping for tenant backup situations, and full septic system inspections for property transactions.",
      },
      {
        question:
          "Do you provide septic inspections for real estate transactions?",
        answer:
          "Yes. We offer septic system inspections for property sales and purchases. A pre-sale inspection gives buyers confidence and helps sellers avoid last-minute deal complications. We provide documentation suitable for closing files.",
      },
    ],
    stats: [
      { value: "Both", label: "Rentals & Septic" },
      { value: "3-5 yr", label: "Recommended Pump Cycle" },
      { value: "Weekly", label: "Construction Servicing" },
      { value: "20", label: "Counties Served" },
    ],
    relatedServices: [
      "portable-restrooms",
      "septic-services",
      "long-term-rentals",
    ],
    ctaTitle: "One Provider — Construction Through Occupancy",
    ctaDescription:
      "Get a free quote for construction site restrooms or schedule septic maintenance for your managed properties.",
    image: IMAGES.septicPumpingWide,
    imageAlt:
      "Brower Inc. septic service truck at a residential property in Oklahoma",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];
