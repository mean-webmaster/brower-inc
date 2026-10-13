"use client";

import { useEffect } from "react";
import { CONVERSION_QUOTE_FORM, gtagEvent, trackConversion } from "@/lib/conversions";

// Fires once when the quote form redirects here after a successful submit.
export default function QuoteConversion() {
  useEffect(() => {
    trackConversion(CONVERSION_QUOTE_FORM);
    gtagEvent("event", "generate_lead", { form: "quote" });
  }, []);
  return null;
}
