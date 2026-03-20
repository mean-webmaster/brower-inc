import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/structured-data";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(allItems)) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {allItems.map((item, i) => (
              <li key={item.href} className="flex items-center">
                {i > 0 && (
                  <svg className="mx-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {i === allItems.length - 1 ? (
                  <span className="font-medium text-gray-900" aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
