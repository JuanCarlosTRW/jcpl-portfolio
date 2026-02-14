// Simple event tracking helper for CTA/form milestones
export function trackEvent(name: string, payload?: Record<string, any>) {
  // TODO: Integrate with analytics platform
  // For now, log to console
  console.log(`[trackEvent]`, name, payload);
}
