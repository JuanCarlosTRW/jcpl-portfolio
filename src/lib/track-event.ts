export function trackEvent(eventName: string, data?: Record<string, any>) {
  // Minimal no-op analytics shim used during cleanup/simplified builds.
  // Replace with your analytics implementation (GA, Plausible, etc.) as needed.
  if (typeof window !== "undefined" && (window as any).console) {
    // Keep a lightweight console debug in dev only
    if (process.env.NODE_ENV !== "production") {
      console.debug("trackEvent:", eventName, data);
    }
  }
}

export default trackEvent;
