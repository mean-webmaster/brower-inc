import Link from "next/link";
import type { LinkRef } from "@/lib/internal-links";

interface LinkGroup {
  heading: string;
  links: LinkRef[];
}

interface RelatedContentProps {
  /** Card heading. */
  title?: string;
  /** Pre-grouped links (services / related guides / service areas, etc.). */
  groups: LinkGroup[];
  className?: string;
}

/**
 * Standardized internal-link block used across blogs and money pages.
 * Renders one or more labeled groups of links from the internal-link registry,
 * so interlinking stays visually + structurally consistent sitewide.
 */
export default function RelatedContent({
  title = "Related reading",
  groups,
  className = "",
}: RelatedContentProps) {
  const visible = groups.filter((g) => g.links.length > 0);
  if (visible.length === 0) return null;

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 ${className}`}
    >
      <p className="font-semibold text-gray-900">{title}</p>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {visible.map((group) => (
          <div key={group.heading}>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {group.heading}
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <span aria-hidden="true">→</span>{" "}
                  <Link
                    href={link.href}
                    className="text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Convenience wrappers — keep call sites tiny + consistent           */
/* ------------------------------------------------------------------ */

import {
  getRelatedForBlog,
  getBlogsForService,
  getBlogsForIndustry,
  getBlogsForArea,
  getRelatedServices,
  getIndustriesForService,
  getServiceAreasForService,
} from "@/lib/internal-links";

/** Blog footer: related guides + our services + service areas. */
export function BlogRelatedContent({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const { blogs, services, areas } = getRelatedForBlog(slug);
  return (
    <RelatedContent
      className={className}
      groups={[
        { heading: "Related guides", links: blogs },
        { heading: "Our services", links: services },
        { heading: "Service areas", links: areas },
      ]}
    />
  );
}

/** Service/industry/area page footer: supporting blog guides. */
export function GuidesForService({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    <RelatedContent
      title="Related guides & resources"
      className={className}
      groups={[{ heading: "From our blog", links: getBlogsForService(slug) }]}
    />
  );
}

export function GuidesForIndustry({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    <RelatedContent
      title="Related guides & resources"
      className={className}
      groups={[{ heading: "From our blog", links: getBlogsForIndustry(slug) }]}
    />
  );
}

export function GuidesForArea({ className }: { className?: string }) {
  return (
    <RelatedContent
      title="Helpful guides for your area"
      className={className}
      groups={[{ heading: "From our blog", links: getBlogsForArea() }]}
    />
  );
}

/** Service page: cross-sell related services + industries served + areas covered. */
export function ServiceCrossLinks({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    <RelatedContent
      title="Explore more from Brower Inc."
      className={className}
      groups={[
        { heading: "Related services", links: getRelatedServices(slug) },
        { heading: "Industries we serve", links: getIndustriesForService(slug) },
        { heading: "Service areas", links: getServiceAreasForService() },
      ]}
    />
  );
}
