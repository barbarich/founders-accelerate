/**
 * Report Core Web Vitals to GA4 via dataLayer.
 *
 * Why: paid traffic landing on a slow page = wasted ad spend. LCP > 2.5s
 * roughly correlates with -20% conversion. Tracking this lets us correlate
 * device / source with field performance and prioritize fixes that move the
 * needle for *real* paying users, not lab numbers.
 */

import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from "web-vitals";
import { track } from "./analytics";

function report(metric: Metric): void {
  track("web_vital", {
    metric_name: metric.name,
    metric_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_rating: metric.rating,
    metric_id: metric.id,
    metric_navigation_type: metric.navigationType,
  });
}

export function initWebVitals(): void {
  if (typeof window === "undefined") return;
  onCLS(report);
  onINP(report);
  onLCP(report);
  onFCP(report);
  onTTFB(report);
}
