"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CountyModal from "./CountyModal";
import { SERVICE_COUNTIES, type CountyInfo } from "./counties";
import { PHONE, PHONE_HREF } from "@/lib/constants";

// Dynamic import to avoid SSR issues with D3
const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 font-medium">Loading Map...</p>
      </div>
    </div>
  ),
});

export default function ServiceAreaMapSection() {
  const [selectedCounty, setSelectedCounty] = useState<CountyInfo | null>(null);

  const ksCount = SERVICE_COUNTIES.filter((c) => c.state === "KS").length;
  const okCount = SERVICE_COUNTIES.filter((c) => c.state === "OK").length;

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Interactive Service Area Map
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Serving the Heart of{" "}
            <span className="text-primary">Oklahoma &amp; Kansas</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any county to explore our local services, see cities we
            serve, and get connected with our team.
          </p>
        </motion.div>

        {/* Map + Sidebar */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-8"
          >
            <InteractiveMap onCountyClick={setSelectedCounty} />
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {selectedCounty
                    ? `${selectedCounty.name} County`
                    : "Service Overview"}
                </h3>
              </div>

              <div className="space-y-3">
                {selectedCounty ? (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">State</span>
                      <span className="text-sm font-bold text-gray-900">
                        {selectedCounty.state === "KS" ? "Kansas" : "Oklahoma"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Population</span>
                      <span className="text-sm font-bold text-gray-900">
                        {selectedCounty.stats.population}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Land Area</span>
                      <span className="text-sm font-bold text-gray-900">
                        {selectedCounty.stats.area}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">
                        Cities Served
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {selectedCounty.cities.length}
                      </span>
                    </div>
                    <Link
                      href={`/service-areas/${selectedCounty.slug}`}
                      className="flex items-center justify-between w-full p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors group mt-2"
                    >
                      <span className="text-sm font-semibold text-primary">
                        View Full Details
                      </span>
                      <svg
                        className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">
                        Total Counties
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {SERVICE_COUNTIES.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">
                        Kansas Counties
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {ksCount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">
                        Oklahoma Counties
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {okCount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">
                        Headquarters
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        Newkirk, OK
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* HQ Button */}
              <button
                className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                onClick={() =>
                  setSelectedCounty(
                    SERVICE_COUNTIES.find((c) => c.id === "kay") || null
                  )
                }
              >
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Our Headquarters
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    Newkirk, OK (Kay County)
                  </p>
                </div>
                <svg
                  className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl"
            >
              <h3 className="text-lg font-bold mb-2">
                Need Service in Your Area?
              </h3>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">
                Our team is ready to deliver portable restrooms, VIP trailers,
                and septic services to any county on the map.
              </p>
              <div className="flex gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex-1 py-2.5 bg-white text-primary rounded-xl font-bold text-sm text-center hover:bg-gray-50 transition-colors"
                >
                  Call {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="flex-1 py-2.5 bg-white/15 text-white rounded-xl font-bold text-sm text-center hover:bg-white/25 transition-colors border border-white/20"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            View All Service Areas
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <CountyModal
        county={selectedCounty}
        onClose={() => setSelectedCounty(null)}
      />
    </section>
  );
}
