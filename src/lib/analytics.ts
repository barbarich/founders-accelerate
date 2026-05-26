/**
 * Analytics layer — single dataLayer entry point for GA4 + Meta Pixel (via GTM).
 *
 * All events follow GA4 standard ecommerce naming so they map 1:1 in GTM
 * to the GA4 tag. Meta Pixel triggers (Purchase / InitiateCheckout / ViewContent)
 * are configured separately in GTM and listen for the same events.
 *
 * Dedup with server-side CAPI is achieved via `event_id` — the browser pixel
 * and the Stripe webhook send the same id (Stripe checkout session id when
 * available).
 */

import { getFirstTouch } from "./attribution";

type PrimitiveOrArray = string | number | boolean | null | undefined | Array<unknown> | Record<string, unknown>;
type EventParams = Record<string, PrimitiveOrArray>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function ensureDataLayer(): unknown[] {
  if (typeof window === "undefined") return [];
  if (!window.dataLayer) window.dataLayer = [];
  return window.dataLayer;
}

function siteLanguage(): "ru" | "en" | "he" | "unknown" {
  if (typeof window === "undefined") return "unknown";
  const seg = window.location.pathname.split("/")[1];
  if (seg === "ru" || seg === "en" || seg === "he") return seg;
  return "ru";
}

/** Push a raw event onto the dataLayer. */
export function track(event: string, params: EventParams = {}): void {
  const dl = ensureDataLayer();
  dl.push({
    event,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    page_language: siteLanguage(),
    ...params,
  });
}

/** Set persistent user properties (sent to GA4 via GTM as user_properties). */
export function identify(traits: EventParams): void {
  ensureDataLayer().push({ event: "set_user_properties", user_properties: traits });
}

const MINI_COURSE_ITEM = {
  item_id: "mini-course-19",
  item_name: "Mini-course: AI-product that people buy",
  item_category: "course",
  price: 19,
  quantity: 1,
  currency: "USD",
};

/** Mini-course landing first rendered — top-of-funnel signal. */
export function trackViewItemList(listName: string = "mini-course-landing"): void {
  track("view_item_list", {
    item_list_name: listName,
    items: [MINI_COURSE_ITEM],
  });
}

/** Pricing section scrolled into view — qualified intent signal. */
export function trackViewItem(): void {
  track("view_item", {
    currency: "USD",
    value: 19,
    items: [MINI_COURSE_ITEM],
  });
}

/**
 * Buy button clicked, user is about to redirect to Stripe.
 * Returns the generated event_id so the caller can persist it for dedup
 * with the subsequent `purchase` event.
 */
export function trackBeginCheckout(cta: string): string {
  const eventId = `bc_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  try {
    sessionStorage.setItem("mc_last_event_id", eventId);
    sessionStorage.setItem("mc_last_event_ts", String(Date.now()));
  } catch {
    /* private mode — ignore */
  }
  track("begin_checkout", {
    event_id: eventId,
    cta_location: cta,
    currency: "USD",
    value: 19,
    items: [MINI_COURSE_ITEM],
    ...getFirstTouch(),
  });
  return eventId;
}

/**
 * Stripe redirected back to /thank-you. Fires once per transaction_id.
 * transaction_id is preferentially the Stripe checkout session id
 * (cs_xxx) so server-side CAPI/GA4 Measurement Protocol can dedup
 * against the same id.
 */
export function trackPurchase(args: { transactionId: string; value?: number; currency?: string }): boolean {
  const { transactionId, value = 19, currency = "USD" } = args;
  if (!transactionId) return false;
  const dedupKey = `mc_purchased_${transactionId}`;
  try {
    if (localStorage.getItem(dedupKey)) return false;
    localStorage.setItem(dedupKey, String(Date.now()));
  } catch {
    /* private mode — fire anyway */
  }
  track("purchase", {
    event_id: transactionId,
    transaction_id: transactionId,
    value,
    currency,
    items: [{ ...MINI_COURSE_ITEM, price: value }],
    ...getFirstTouch(),
  });
  return true;
}

export function trackSelectContent(contentType: string, contentId: string): void {
  track("select_content", { content_type: contentType, content_id: contentId });
}

export function trackOutboundClick(url: string, label?: string): void {
  track("click_outbound", { outbound_url: url, outbound_label: label });
}
