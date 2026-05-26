/**
 * First-touch attribution — captures UTM parameters and ad-click ids on the
 * very first page load and persists them for 90 days (Meta attribution window).
 *
 * Why first-touch: a user lands from a Meta ad, browses, leaves, returns via
 * Google search, then buys. Last-touch credits Google. First-touch credits
 * Meta — the channel that actually paid to acquire the user.
 *
 * Both signals reach GA4 / Meta CAPI via the `purchase` event payload.
 */

const STORAGE_KEY = "mc_attribution_v1";
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

type Stored = {
  ts: number;
  first_utm_source?: string;
  first_utm_medium?: string;
  first_utm_campaign?: string;
  first_utm_content?: string;
  first_utm_term?: string;
  first_referrer?: string;
  first_landing_page?: string;
  fbclid?: string;
  gclid?: string;
  ttclid?: string;
};

function readSafe(): Stored | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Stored;
    if (!data?.ts || Date.now() - data.ts > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function writeSafe(data: Stored): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota / private mode — ignore */
  }
}

/**
 * Call once on app bootstrap. If we already have a stored first-touch, do
 * nothing. Otherwise capture current URL parameters and referrer.
 */
export function initAttribution(): void {
  if (typeof window === "undefined") return;
  if (readSafe()) return;

  const url = new URL(window.location.href);
  const p = url.searchParams;
  const ref = document.referrer || "";

  const payload: Stored = { ts: Date.now() };
  const utmSource = p.get("utm_source");
  const utmMedium = p.get("utm_medium");
  const utmCampaign = p.get("utm_campaign");
  const utmContent = p.get("utm_content");
  const utmTerm = p.get("utm_term");
  const fbclid = p.get("fbclid");
  const gclid = p.get("gclid");
  const ttclid = p.get("ttclid");

  if (utmSource) payload.first_utm_source = utmSource;
  if (utmMedium) payload.first_utm_medium = utmMedium;
  if (utmCampaign) payload.first_utm_campaign = utmCampaign;
  if (utmContent) payload.first_utm_content = utmContent;
  if (utmTerm) payload.first_utm_term = utmTerm;
  if (fbclid) payload.fbclid = fbclid;
  if (gclid) payload.gclid = gclid;
  if (ttclid) payload.ttclid = ttclid;
  if (ref) payload.first_referrer = ref;
  payload.first_landing_page = url.pathname;

  // If no UTM but a referrer exists, classify by host so the user still has
  // *some* source attribution rather than "(direct)".
  if (!payload.first_utm_source && ref) {
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host && !host.includes("founders-circle.space")) {
        payload.first_utm_source = host;
        payload.first_utm_medium = fbclid ? "paid_social" : "referral";
      }
    } catch {
      /* malformed referrer — ignore */
    }
  }

  writeSafe(payload);
}

/** Get stored first-touch payload to attach to conversion events. */
export function getFirstTouch(): Record<string, string> {
  const data = readSafe();
  if (!data) return {};
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(data)) {
    if (k === "ts") continue;
    if (typeof v === "string" && v) out[k] = v;
  }
  return out;
}
