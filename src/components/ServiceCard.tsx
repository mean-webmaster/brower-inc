import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "portable-restrooms": {
    src: IMAGES.portableRestroomHero,
    alt: "Brower Inc. portable restrooms lineup ready for delivery in Newkirk, OK",
  },
  "vip-shower-restroom-trailers": {
    src: IMAGES.vipExteriorSide,
    alt: "Brower Inc. VIP luxury shower and restroom trailer exterior in Newkirk, OK",
  },
  "hand-washing-stations": {
    src: IMAGES.handWashingStation,
    alt: "Brower Inc. portable hand washing station in warehouse, Newkirk, OK",
  },
  "septic-services": {
    src: IMAGES.septicPumpingClose,
    alt: "Brower Inc. septic pumping service at residential property in Newkirk, OK",
  },
  "long-term-rentals": {
    src: IMAGES.portableRestroomConstruction,
    alt: "Brower Inc. portable restroom for long-term construction site rental in Newkirk, OK",
  },
};

interface ServiceCardProps {
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
}

export default function ServiceCard({ title, slug, shortDescription }: ServiceCardProps) {
  const image = serviceImages[slug];

  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-primary/30"
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600">{shortDescription}</p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
          Learn More
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
