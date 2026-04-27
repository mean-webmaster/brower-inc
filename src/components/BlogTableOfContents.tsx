"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

interface BlogTableOfContentsProps {
  items: TOCItem[];
  /** CSS selector for the article element used to calculate reading progress. Defaults to "article". */
  articleSelector?: string;
}

export default function BlogTableOfContents({
  items,
  articleSelector = "article",
}: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* Lock body scroll while the mobile sheet is open */
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileOpen]);

  /* Close sheet on Escape */
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileOpen]);

  /* Track which section is currently in view */
  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          /* Pick the visible heading closest to the top of the viewport */
          const topMost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActiveId(topMost.target.id);
        }
      },
      {
        /* Trigger zone: from 100px below the top down to 70% from the top */
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    );

    const observed: Element[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [items]);

  /* Track reading progress through the article */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateProgress = () => {
      const article = document.querySelector(articleSelector) as HTMLElement | null;
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = window.scrollY - articleTop;
      const total = Math.max(1, articleHeight - viewportHeight);
      const pct = Math.max(0, Math.min(100, (scrolled / total) * 100));
      setProgress(pct);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [articleSelector]);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    /* Close the mobile sheet after jumping to a section */
    setIsMobileOpen(false);
  };

  if (items.length === 0) return null;

  const tocListAndProgress = (
    <>
      <nav className="mt-4 max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
        <ul className="space-y-2.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleClick(item.id)}
                  className={`block border-l-2 pl-3 text-sm leading-snug transition-colors ${
                    isActive
                      ? "border-primary font-semibold text-primary"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
          <span className="font-medium">Reading Progress</span>
          <span className="tabular-nums">{Math.round(progress)}%</span>
        </div>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Article reading progress"
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ─── DESKTOP SIDEBAR (xl and up) ──────────────────────────────────── */}
      <aside
        aria-label="Table of contents"
        className="hidden xl:block fixed top-32 z-30 w-56 left-[calc(50%_-_39.5rem)]"
      >
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            On This Page
          </p>
          {tocListAndProgress}
        </div>
      </aside>

      {/* ─── MOBILE FLOATING BUTTON (hidden on sm+) ───────────────────────── */}
      {/* Circular icon-only button sitting directly above the FloatingCTA ("Free Quote") */}
      <button
        type="button"
        onClick={() => setIsMobileOpen((v) => !v)}
        aria-label={isMobileOpen ? "Close table of contents" : "Open table of contents"}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-toc-sheet"
        className="fixed bottom-20 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition-colors sm:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isMobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10" />
          )}
        </svg>
      </button>

      {/* ─── MOBILE BOTTOM SHEET ──────────────────────────────────────────── */}
      {/* Overlay */}
      <div
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 sm:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Sheet */}
      <div
        id="mobile-toc-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Table of contents"
        className={`fixed inset-x-0 bottom-0 z-40 max-h-[75vh] overflow-y-auto rounded-t-2xl border-t border-gray-200 bg-white p-5 shadow-2xl transition-transform duration-300 ease-out sm:hidden ${
          isMobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle pill */}
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300" />
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            On This Page
          </p>
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close table of contents"
            className="rounded-full p-1 text-gray-400 hover:text-gray-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {tocListAndProgress}
      </div>
    </>
  );
}
