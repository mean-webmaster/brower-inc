"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { CountyInfo } from "./counties";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface CountyModalProps {
  county: CountyInfo | null;
  onClose: () => void;
}

export default function CountyModal({ county, onClose }: CountyModalProps) {
  if (!county) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md overflow-hidden bg-white rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-24 bg-gradient-to-r from-primary to-primary-dark flex items-end p-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {county.name} County, {county.state}
            </h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-5">
            {/* Cities */}
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">
                Cities Served
              </p>
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-full text-xs font-semibold"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {county.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {county.stats.population && (
                <div className="p-3 bg-gray-50 rounded-xl text-center">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    Population
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    {county.stats.population}
                  </p>
                </div>
              )}
              {county.stats.area && (
                <div className="p-3 bg-gray-50 rounded-xl text-center">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    Area
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    {county.stats.area}
                  </p>
                </div>
              )}
              {county.stats.founded && (
                <div className="p-3 bg-gray-50 rounded-xl text-center">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    Founded
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    {county.stats.founded}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Link
                href={`/service-areas/${county.slug}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors text-sm"
              >
                View Service Area
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
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors text-sm"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
