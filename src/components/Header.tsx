"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSection(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label={`${SITE_NAME} Home`}
        >
          <Image
            src="https://assets.cdn.filesafe.space/Vil2untX5HPYLFH0yUEi/media/6727accb3c7a806cd8d83df0.png"
            alt="Brower Inc. Logo"
            width={180}
            height={60}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary group-hover:text-primary"
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Panel */}
                <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl ring-1 ring-black/5">
                    <div className="p-2">
                      {link.children.map((child) =>
                        child.isHeader ? (
                          <div
                            key={child.label}
                            className="mt-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 first:mt-0"
                          >
                            {child.label}
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href!}
                            className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/5"
                          >
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-primary">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="mt-0.5 text-xs text-gray-500">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-primary"
            aria-label={`Call us at ${PHONE}`}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile: Phone icon + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white"
            aria-label={`Call ${PHONE}`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <nav
          className="border-t bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="max-h-[calc(100vh-72px)] overflow-y-auto px-4 py-2">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-gray-900"
                    onClick={() => toggleMobileSection(link.label)}
                    aria-expanded={openSection === link.label}
                  >
                    {link.label}
                    <svg
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        openSection === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openSection === link.label && (
                    <div className="pb-3 pl-2">
                      {link.children.map((child) =>
                        child.isHeader ? (
                          <div
                            key={child.label}
                            className="mt-3 px-2 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 first:mt-0"
                          >
                            {child.label}
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href!}
                            className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                            onClick={closeMobile}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-gray-100 py-4 text-base font-semibold text-gray-900 last:border-b-0"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTAs */}
            <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
                onClick={closeMobile}
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {PHONE}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
