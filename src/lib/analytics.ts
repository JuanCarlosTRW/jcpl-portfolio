/* ─── Lightweight Analytics / Event Tracking Utility ─── */

type EventName =
  | "hero_primary_cta_click"
  | "hero_secondary_cta_click"
  | "hero_cta_click"
  | "section_cta_click"
  | "case_card_click"
  | "faq_cta_click"
  | "final_cta_primary_click"
  | "final_cta_secondary_click"
  | "apply_form_start"
  | "apply_form_submit"
  | "booking_complete"
  | "thank_you_view"
  | "form_start"
  | "form_step_complete"
  | "form_submit"
  | "lead_qualified_true"
  | "lead_qualified_false"
  | "calendly_view"
  | "services_hero_cta_click"
  | "services_card_cta_click"
  | "services_final_cta_click"
  | "services_comparison_view";

interface TrackOptions {
  /** Additional data payload */
  data?: Record<string, string | number | boolean>;
}

/**
 * Fire a custom analytics event.
 * Currently logs to console + pushes to dataLayer (Google Tag Manager-compatible).
 * Replace / extend with your analytics provider (Plausible, PostHog, GA4, etc.)
 */
export function trackEvent(name: EventName, options?: TrackOptions) {
  if (typeof window === "undefined") return;

  // Console (dev mode)
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${name}`, options?.data ?? "");
  }

  // Google Tag Manager dataLayer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...options?.data });
}
