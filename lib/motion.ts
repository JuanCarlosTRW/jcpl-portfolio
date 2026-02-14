// Minimal motion utilities used across hero components
// These are placeholders to allow build and can be replaced with richer choreography.

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return true;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    return true;
  }
};

export function heroIntroSequence(refs: Record<string, any>) {
  // placeholder - real sequence is defined in PremiumHero/CinematicHero
  // Return an object with a `kill` method to match expected API
  return {
    kill: () => {
      // no-op
    },
  };
}
