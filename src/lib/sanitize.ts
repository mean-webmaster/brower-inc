import sanitizeHtmlLib from "sanitize-html";

/** Sanitize HTML content to prevent XSS attacks.
 *  Uses sanitize-html (pure JS) — no jsdom, runs cleanly on Vercel's Node runtime. */
export function sanitizeHtml(dirty: string): string {
  return sanitizeHtmlLib(dirty, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "hr",
      "ul", "ol", "li",
      "a", "strong", "em", "b", "i", "u", "s",
      "blockquote", "pre", "code",
      "img", "figure", "figcaption",
      "table", "thead", "tbody", "tr", "th", "td",
      "div", "span",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      "*": ["class", "id"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["http", "https", "data"] },
  });
}
