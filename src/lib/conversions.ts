// Google Ads conversion actions for Brower Inc. (account 765-211-9491)
export const GOOGLE_ADS_ID = "AW-17010629676";
export const CONVERSION_PHONE_CLICK = "AW-17010629676/UD16CLTT3ZsdEKy4pq8_";
export const CONVERSION_QUOTE_FORM = "AW-17010629676/MO_uCLfT3ZsdEKy4pq8_";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

// gtag is defined by the lazyOnload init script in layout.tsx, which also runs the
// AW config. Wait for it so events are never sent before their destination is configured.
export function gtagEvent(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  let tries = 0;
  const send = () => {
    if (typeof w.gtag === "function") {
      w.gtag(...args);
    } else if (tries++ < 120) {
      setTimeout(send, 250);
    }
  };
  send();
}

export function trackConversion(sendTo: string) {
  gtagEvent("event", "conversion", { send_to: sendTo, value: 1.0, currency: "USD" });
}
