"use client";

import { useEffect } from "react";
import { CONVERSION_PHONE_CLICK, gtagEvent, trackConversion } from "@/lib/conversions";

// Counts every tap on a tel: link anywhere on the site as a Google Ads "Website phone click".
export default function PhoneClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      trackConversion(CONVERSION_PHONE_CLICK);
      gtagEvent("event", "phone_click", { link_url: link.getAttribute("href") });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
