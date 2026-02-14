// Simple analytics adapter — forwards to trackEvent for now
import { trackEvent as track } from "./trackEvent";

export function trackEvent(name: string, payload?: Record<string, any>) {
  return track(name, payload);
}
