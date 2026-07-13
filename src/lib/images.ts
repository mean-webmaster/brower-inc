const IMG = "/images";
const GHL = "https://assets.cdn.filesafe.space/Vil2untX5HPYLFH0yUEi/media";

export const IMAGES = {
  // Logos (kept on GHL since they're referenced externally)
  logo: `${GHL}/6727accb3c7a806cd8d83df0.png`,
  favicon: "/favicon.png",
  ogImage: `${GHL}/6727f81d38b82f89893ab29a.jpeg`,

  // Hero
  hero: `${IMG}/brower-inc-full-fleet-trucks-equipment-lineup-newkirk-ok.webp`,

  // Brand logos (local) — WebP with alpha preserves transparency on colored backgrounds
  logoFullTagline: `${IMG}/brower-inc-logo-full-tagline-phone.webp`,
  logoIconBMark: `${IMG}/brower-inc-logo-icon-b-mark.webp`,
  logoWordmarkFull: `${IMG}/brower-inc-logo-wordmark-full.webp`,

  // Team
  troyBrower: `${IMG}/troy-brower-owner-brower-inc-newkirk-ok.webp`,

  // Portable Restrooms
  portableRestroomHero: `${IMG}/brower-inc-portable-restrooms-lineup-hero-newkirk-ok.webp`,
  portableRestroomField: `${IMG}/brower-inc-portable-restroom-wind-farm-field-newkirk-ok.webp`,
  portableRestroomWarehouse: `${IMG}/brower-inc-portable-restroom-fleet-warehouse-inventory-newkirk-ok.webp`,
  portableRestroomLineup: `${IMG}/brower-inc-portable-restroom-lineup-outdoor-event-ready-newkirk-ok.webp`,
  portableRestroomTrio: `${IMG}/brower-inc-portable-restroom-trailer-mounted-trio-newkirk-ok.webp`,
  portableRestroomConstruction: `${IMG}/brower-inc-portable-restroom-construction-site-rental-newkirk-ok.webp`,
  portableRestroomEvent: `${IMG}/brower-inc-portable-restroom-event-venue-delivery-newkirk-ok.webp`,
  portableRestroomNight: `${IMG}/brower-inc-portable-restroom-night-service-call-newkirk-ok.webp`,

  // VIP Trailers
  vipExteriorSide: `${IMG}/brower-inc-vip-shower-restroom-trailer-exterior-side-newkirk-ok.webp`,
  vipExteriorAngle: `${IMG}/brower-inc-vip-shower-restroom-trailer-exterior-angle-newkirk-ok.webp`,
  vipExteriorCloseup: `${IMG}/brower-inc-vip-shower-restroom-trailer-exterior-closeup-newkirk-ok.webp`,
  vipInteriorVanity: `${IMG}/brower-inc-vip-restroom-trailer-interior-vanity-stalls-newkirk-ok.webp`,
  vipInteriorShower: `${IMG}/brower-inc-vip-shower-trailer-interior-shower-stalls-newkirk-ok.webp`,
  vipInteriorBathroom: `${IMG}/brower-inc-vip-restroom-trailer-interior-private-bathroom-newkirk-ok.webp`,
  vipWithHandwash: `${IMG}/brower-inc-vip-restroom-trailer-with-handwash-station-newkirk-ok.webp`,
  vipFloorPlan: `${IMG}/brower-inc-vip-restroom-trailer-floor-plan-newkirk-ok.webp`,
  vipExteriorWarehouse: `${IMG}/brower-inc-vip-shower-restroom-trailer-exterior-warehouse-newkirk-ok.webp`,
  vipFloorPlanAlt: `${IMG}/brower-inc-vip-shower-restroom-trailer-floor-plan-alt-newkirk-ok.webp`,
  vip3Station: `${IMG}/brower-inc-3-station-restroom-trailer-newkirk-ok.webp`,
  vipTrailersLot: `${IMG}/brower-inc-vip-trailers-portable-restrooms-lot-newkirk-ok.webp`,
  vip3StationFloorPlan: `${IMG}/brower-inc-3-station-restroom-trailer-floor-plan-newkirk-ok.webp`,

  // Hand Washing Stations
  handWashingStation: `${IMG}/brower-inc-hand-washing-station-warehouse-newkirk-ok.webp`,

  // Septic
  septicTruckRear: `${IMG}/brower-inc-septic-pump-truck-rear-view-branded-newkirk-ok.webp`,
  septicTruckDirect: `${IMG}/brower-inc-septic-pump-truck-rear-direct-newkirk-ok.webp`,
  septicPumpingWide: `${IMG}/brower-inc-septic-pumping-service-residential-wide-newkirk-ok.webp`,
  septicPumpingClose: `${IMG}/brower-inc-septic-pumping-service-residential-close-newkirk-ok.webp`,
  septicMobileHome: `${IMG}/brower-inc-septic-service-mobile-home-onsite-newkirk-ok.webp`,

  // Fleet & Delivery
  fleetLineup: `${IMG}/brower-inc-full-fleet-trucks-equipment-lineup-newkirk-ok.webp`,
  deliveryDaytime: `${IMG}/brower-inc-service-truck-portable-restroom-delivery-daytime-newkirk-ok.webp`,
  deliveryNight: `${IMG}/brower-inc-service-truck-portable-restroom-delivery-night-newkirk-ok.webp`,
  deliveryLot: `${IMG}/brower-inc-service-truck-portable-restroom-delivery-daytime-lot-newkirk-ok.webp`,
  loadedTrailer: `${IMG}/brower-inc-portable-restroom-loaded-trailer-yard-newkirk-ok.webp`,

  // Events
  rodeoEvent: `${IMG}/brower-inc-vip-trailer-rodeo-event-arena-newkirk-ok.webp`,
  communityEvent: `${IMG}/brower-inc-community-event-festival-service-newkirk-ok.webp`,

  // Team & Personality
  technician: `${IMG}/brower-inc-technician-industrial-jobsite-portrait-newkirk-ok.webp`,
  dogMascot: `${IMG}/brower-inc-company-dog-mascot-service-truck-newkirk-ok.webp`,
  christmasDisplay: `${IMG}/brower-inc-christmas-holiday-display-fun-newkirk-ok.webp`,

  // Blog Covers (AI-generated via Nano Banana, WebP-compressed)
  blogCoverPortaPottyRentalCostOklahoma: `${IMG}/brower-inc-porta-potty-rental-cost-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverPortaPottyRentalNearMeRuralOklahoma: `${IMG}/brower-inc-porta-potty-rental-near-me-rural-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverOshaConstructionCalculator: `${IMG}/brower-inc-porta-potty-construction-site-osha-calculator-newkirk-ok.webp`,
  blogCoverPortaPottyVsLuxuryTrailer: `${IMG}/brower-inc-porta-potty-vs-luxury-restroom-trailer-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverOilGasPortableSanitation: `${IMG}/brower-inc-oil-gas-portable-sanitation-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverConstructionSiteSanitation: `${IMG}/brower-inc-construction-site-sanitation-tips-blog-cover-newkirk-ok.webp`,
  blogCoverOshaComplianceChecklist: `${IMG}/brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverCompleteGuideEvents: `${IMG}/brower-inc-complete-guide-portable-restrooms-oklahoma-outdoor-events-blog-cover-newkirk-ok.webp`,
  blogCoverEventPlanningRestroom: `${IMG}/brower-inc-event-planning-restroom-guide-blog-cover-newkirk-ok.webp`,
  blogCoverPortableRestroomRentalGuide: `${IMG}/brower-inc-portable-restroom-rental-guide-blog-cover-newkirk-ok.webp`,
  blogCoverHowCleanArePortableRestrooms: `${IMG}/brower-inc-how-clean-are-portable-restrooms-blog-cover-newkirk-ok.webp`,
  blogCoverSepticSystemMaintenance: `${IMG}/brower-inc-septic-system-maintenance-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverHowToChooseProvider: `${IMG}/brower-inc-how-to-choose-portable-restroom-company-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverHowMuchPortaPottyRentalCost: `${IMG}/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp`,
  blogCoverAdaPortableRestroom: `${IMG}/brower-inc-ada-portable-restroom-construction-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverSepticTankPumpingCost: `${IMG}/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverEmergencyDeployment: `${IMG}/brower-inc-emergency-portable-restroom-deployment-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverLocalVsNational: `${IMG}/brower-inc-local-vs-national-portable-restroom-providers-oklahoma-blog-cover-newkirk-ok.webp`,
  blogCoverAerobicSepticSystem: `${IMG}/brower-inc-aerobic-septic-system-oklahoma-blog-cover-newkirk-ok.webp`,
  blogHeroAerobicSepticSystem: `${IMG}/brower-inc-aerobic-septic-system-oklahoma-blog-hero-newkirk-ok.webp`,
  blogCoverRestroomTrailerRental: `${IMG}/brower-inc-restroom-trailer-rental-oklahoma-blog-cover-newkirk-ok.webp`,
  blogHeroRestroomTrailerRental: `${IMG}/brower-inc-restroom-trailer-rental-oklahoma-blog-hero-newkirk-ok.webp`,
  blogCoverSepticWarningSigns: `${IMG}/brower-inc-signs-septic-tank-needs-pumping-oklahoma-blog-cover-newkirk-ok.webp`,
  blogHeroSepticWarningSigns: `${IMG}/brower-inc-signs-septic-tank-needs-pumping-oklahoma-blog-hero-newkirk-ok.webp`,
  blogCoverBarnWeddingBathrooms: `${IMG}/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-cover-newkirk-ok.webp`,
  blogHeroBarnWeddingBathrooms: `${IMG}/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-hero-newkirk-ok.webp`,
  blogCoverSepticNeverPumped: `${IMG}/brower-inc-septic-tank-never-pumped-oklahoma-blog-cover-newkirk-ok.webp`,
  blogHeroSepticNeverPumped: `${IMG}/brower-inc-septic-tank-never-pumped-oklahoma-blog-hero-newkirk-ok.webp`,
  blogCoverPortaPottyAmmoniaSummer: `${IMG}/brower-inc-porta-potty-smells-like-ammonia-summer-oklahoma-blog-cover-newkirk-ok.webp`,
  blogHeroPortaPottyAmmoniaSummer: `${IMG}/brower-inc-porta-potty-smells-like-ammonia-summer-oklahoma-blog-hero-newkirk-ok.webp`,
};
