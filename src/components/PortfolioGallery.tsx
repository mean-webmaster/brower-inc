"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface GalleryPhoto {
  url: string;
  alt: string;
}

interface Props {
  hero: GalleryPhoto;
  gallery: GalleryPhoto[];
  preload?: boolean;
}

export default function PortfolioGallery({ hero, gallery, preload = false }: Props) {
  const photos: GalleryPhoto[] = [
    hero,
    ...gallery.filter((g) => g.url !== hero.url),
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  const current = isOpen ? photos[openIndex!] : null;

  return (
    <>
      {/* Hero image */}
      <button
        type="button"
        onClick={() => setOpenIndex(0)}
        aria-label={`Open photo: ${hero.alt}`}
        className="group mt-6 block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-8"
      >
        <Image
          src={hero.url}
          alt={hero.alt}
          width={1600}
          height={900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 720px"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          preload={preload}
        />
      </button>

      {/* Thumbnail grid */}
      {gallery.length > 0 && (
        <div className="mt-8 sm:mt-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
            More photos
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery
              .filter((g) => g.url !== hero.url)
              .map((g, i) => {
                const indexInPhotos = i + 1;
                return (
                  <button
                    key={g.url}
                    type="button"
                    onClick={() => setOpenIndex(indexInPhotos)}
                    aria-label={`Open photo: ${g.alt}`}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Image
                      src={g.url}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10"
                    />
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close photo viewer"
            className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev (hidden on mobile in favor of swipe; visible from sm:) */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 sm:left-6 sm:block"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6 sm:block"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image (stop click propagation so taps on the image don't close) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full max-w-full items-center justify-center"
          >
            <Image
              src={current.url}
              alt={current.alt}
              width={1600}
              height={900}
              sizes="100vw"
              className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
              priority
            />
          </div>

          {/* Caption + index */}
          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex flex-col items-center gap-1 px-4 text-center text-white sm:bottom-6">
            <p className="max-w-2xl text-sm text-white/90">{current.alt}</p>
            {photos.length > 1 && (
              <p className="text-xs text-white/60">
                {openIndex! + 1} / {photos.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
