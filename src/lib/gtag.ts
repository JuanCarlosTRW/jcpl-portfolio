// lib/gtag.ts
// Google Analytics utility for custom event tracking

export const GA_MEASUREMENT_ID = 'G-FXE32B1KDT';

// TypeScript-safe gtag declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Standard pageview tracking
export function pageview(url: string) {
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Custom event tracking
export function event({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}
