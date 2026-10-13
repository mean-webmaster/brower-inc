import Link from "next/link";
import { SERVICE_AREAS_DATA } from "@/lib/constants";

type Props = {
  heading?: string;
  subheading?: string;
  className?: string;
};

const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);

function groupState(state: "OK" | "KS") {
  const areas = SERVICE_AREAS_DATA.filter((a) => a.state === state);
  const counties = areas.filter((a) => a.type === "county").sort(byName);
  const cities = areas.filter((a) => a.type === "city");
  const groups = counties.map((county) => ({
    county,
    cities: cities.filter((c) => c.county === county.name).sort(byName),
  }));
  const grouped = new Set(groups.flatMap((g) => g.cities.map((c) => c.slug)));
  const otherCities = cities.filter((c) => !grouped.has(c.slug)).sort(byName);
  return { groups, otherCities };
}

function StateColumn({ label, state }: { label: string; state: "OK" | "KS" }) {
  const { groups, otherCities } = groupState(state);
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">{label}</h3>
      <ul className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {groups.map(({ county, cities }) => (
          <li key={county.slug}>
            <Link
              href={`/service-areas/${county.slug}`}
              className="font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              {county.name}
            </Link>
            {cities.length > 0 && (
              <p className="mt-1 text-sm text-gray-600">
                {cities.map((city, i) => (
                  <span key={city.slug}>
                    {i > 0 && " · "}
                    <Link href={`/service-areas/${city.slug}`} className="hover:text-primary transition-colors">
                      {city.name}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
        {otherCities.length > 0 && (
          <li>
            <span className="font-semibold text-gray-900">More cities</span>
            <p className="mt-1 text-sm text-gray-600">
              {otherCities.map((city, i) => (
                <span key={city.slug}>
                  {i > 0 && " · "}
                  <Link href={`/service-areas/${city.slug}`} className="hover:text-primary transition-colors">
                    {city.name}
                  </Link>
                </span>
              ))}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function AreasWeServe({
  heading = "Areas We Serve",
  subheading = "North-central Oklahoma and southern Kansas.",
  className = "mt-16 border-t pt-12",
}: Props) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-900 text-center">{heading}</h2>
      <p className="mt-2 text-center text-gray-600">{subheading}</p>
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <StateColumn label="Oklahoma" state="OK" />
        <StateColumn label="Kansas" state="KS" />
      </div>
      <div className="mt-8 text-center">
        <Link href="/service-areas" className="text-sm font-medium text-primary hover:text-primary-dark">
          View All Service Areas →
        </Link>
      </div>
    </div>
  );
}
