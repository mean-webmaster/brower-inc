export interface CountyInfo {
  id: string;
  name: string;
  fips: string;
  color: string;
  colorHex: string;
  hoverHex: string;
  state: "KS" | "OK";
  description: string;
  cities: string[];
  stats: {
    population?: string;
    area?: string;
    founded?: string;
  };
  slug: string; // matches SERVICE_AREAS_DATA slug for linking
}

export const SERVICE_COUNTIES: CountyInfo[] = [
  // Kansas Counties
  {
    id: "kingman",
    name: "Kingman",
    fips: "20095",
    color: "fill-rose-200",
    colorHex: "#fecdd3",
    hoverHex: "#fda4af",
    state: "KS",
    description:
      "A key part of our western Kansas service area, known for its agricultural heritage. Brower Inc. delivers portable restrooms and septic services throughout Kingman County.",
    cities: ["Kingman", "Norwich", "Cunningham"],
    stats: { population: "7,470", area: "864 sq mi", founded: "1872" },
    slug: "kingman-county-ks",
  },
  {
    id: "harper",
    name: "Harper",
    fips: "20077",
    color: "fill-amber-200",
    colorHex: "#fde68a",
    hoverHex: "#fcd34d",
    state: "KS",
    description:
      "Serving the Kansas-Oklahoma border with dedicated local support. Harper County clients benefit from our proximity in Newkirk, OK.",
    cities: ["Anthony", "Harper", "Attica"],
    stats: { population: "5,485", area: "803 sq mi", founded: "1867" },
    slug: "harper-county-ks",
  },
  {
    id: "sedgwick",
    name: "Sedgwick",
    fips: "20173",
    color: "fill-red-100",
    colorHex: "#ffe4e6",
    hoverHex: "#fecdd3",
    state: "KS",
    description:
      "Home to Wichita — the largest city in Kansas. Brower Inc. provides portable restrooms, VIP trailers, and septic services for Sedgwick County events and construction.",
    cities: ["Wichita", "Derby", "Haysville", "Park City", "Goddard"],
    stats: { population: "523,824", area: "1,009 sq mi", founded: "1867" },
    slug: "sedgwick-county-ks",
  },
  {
    id: "sumner",
    name: "Sumner",
    fips: "20191",
    color: "fill-orange-200",
    colorHex: "#fed7aa",
    hoverHex: "#fdba74",
    state: "KS",
    description:
      "The wheat capital of the world. We provide extensive portable sanitation coverage across Sumner County, from Wellington to Belle Plaine.",
    cities: ["Wellington", "Mulvane", "Belle Plaine", "Caldwell"],
    stats: { population: "22,382", area: "1,185 sq mi", founded: "1870" },
    slug: "sumner-county-ks",
  },
  {
    id: "butler",
    name: "Butler",
    fips: "20015",
    color: "fill-yellow-100",
    colorHex: "#fef9c3",
    hoverHex: "#fef08a",
    state: "KS",
    description:
      "The largest county by land area in Kansas. From El Dorado to Augusta and Andover, we serve Butler County with quality portable sanitation.",
    cities: ["El Dorado", "Augusta", "Andover", "Rose Hill"],
    stats: { population: "67,380", area: "1,446 sq mi", founded: "1855" },
    slug: "butler-county-ks",
  },
  {
    id: "cowley",
    name: "Cowley",
    fips: "20035",
    color: "fill-red-200",
    colorHex: "#fecaca",
    hoverHex: "#fca5a5",
    state: "KS",
    description:
      "Rich in history and natural beauty along the southern Flint Hills. We serve Winfield, Arkansas City, and all of Cowley County.",
    cities: ["Winfield", "Arkansas City", "Udall"],
    stats: { population: "34,549", area: "1,132 sq mi", founded: "1867" },
    slug: "cowley-county-ks",
  },
  {
    id: "greenwood",
    name: "Greenwood",
    fips: "20073",
    color: "fill-amber-100",
    colorHex: "#fef3c7",
    hoverHex: "#fde68a",
    state: "KS",
    description:
      "Heart of the Flint Hills. Brower Inc. offers portable restroom and septic services for Greenwood County's ranching communities and events.",
    cities: ["Eureka", "Madison", "Hamilton"],
    stats: { population: "6,016", area: "1,153 sq mi", founded: "1855" },
    slug: "greenwood-county-ks",
  },
  {
    id: "elk",
    name: "Elk",
    fips: "20049",
    color: "fill-orange-100",
    colorHex: "#ffedd5",
    hoverHex: "#fed7aa",
    state: "KS",
    description:
      "Providing reliable portable restroom service to the scenic landscapes of Elk County, including Howard and surrounding communities.",
    cities: ["Howard", "Moline", "Grenola", "Longton"],
    stats: { population: "2,483", area: "650 sq mi", founded: "1875" },
    slug: "elk-county-ks",
  },
  {
    id: "chautauqua",
    name: "Chautauqua",
    fips: "20019",
    color: "fill-rose-100",
    colorHex: "#ffe4e6",
    hoverHex: "#fecdd3",
    state: "KS",
    description:
      "Our southeastern Kansas service area. Sedan's Yellow Brick Road community and Cedar Vale trust Brower Inc. for portable sanitation.",
    cities: ["Sedan", "Cedar Vale", "Peru"],
    stats: { population: "3,379", area: "645 sq mi", founded: "1875" },
    slug: "chautauqua-county-ks",
  },
  // Oklahoma Counties
  {
    id: "kay",
    name: "Kay",
    fips: "40071",
    color: "fill-red-300",
    colorHex: "#fca5a5",
    hoverHex: "#f87171",
    state: "OK",
    description:
      "Our home base! Brower Inc. is headquartered in Newkirk and serves all of Kay County with fast, reliable portable restrooms and septic services.",
    cities: ["Newkirk", "Ponca City", "Blackwell", "Tonkawa"],
    stats: { population: "43,700", area: "945 sq mi", founded: "1893" },
    slug: "kay-county",
  },
  {
    id: "kingfisher",
    name: "Kingfisher",
    fips: "40073",
    color: "fill-red-200",
    colorHex: "#fecaca",
    hoverHex: "#fca5a5",
    state: "OK",
    description:
      "Serving Kingfisher and Hennessey with reliable portable sanitation solutions and septic pumping.",
    cities: ["Kingfisher", "Hennessey", "Cashion"],
    stats: { population: "15,184", area: "906 sq mi", founded: "1890" },
    slug: "kingfisher-county",
  },
  {
    id: "logan",
    name: "Logan",
    fips: "40083",
    color: "fill-rose-200",
    colorHex: "#fecdd3",
    hoverHex: "#fda4af",
    state: "OK",
    description:
      "Providing portable restroom service to Logan County, including Guthrie and the Crescent area.",
    cities: ["Guthrie", "Crescent", "Coyle"],
    stats: { population: "49,555", area: "749 sq mi", founded: "1890" },
    slug: "logan-county",
  },
  {
    id: "garfield",
    name: "Garfield",
    fips: "40047",
    color: "fill-amber-200",
    colorHex: "#fde68a",
    hoverHex: "#fcd34d",
    state: "OK",
    description:
      "Comprehensive coverage for Garfield County and the Enid community with portable restrooms, VIP trailers, and septic services.",
    cities: ["Enid", "Waukomis", "Garber"],
    stats: { population: "62,846", area: "1,060 sq mi", founded: "1893" },
    slug: "garfield-county",
  },
  {
    id: "woods",
    name: "Woods",
    fips: "40151",
    color: "fill-orange-200",
    colorHex: "#fed7aa",
    hoverHex: "#fdba74",
    state: "OK",
    description:
      "Serving the northwestern regions of Oklahoma, including Alva and Waynoka, with dedicated portable restroom support.",
    cities: ["Alva", "Waynoka", "Freedom"],
    stats: { population: "8,624", area: "1,290 sq mi", founded: "1893" },
    slug: "woods-county",
  },
];
