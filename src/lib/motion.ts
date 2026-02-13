import gsap from "gsap";

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * GSAP intro sequence for premium hero
 */
export const heroIntroSequence = (
  elements: {
    logo?: HTMLElement | null;
    headline?: HTMLElement | null;
    subheadline?: HTMLElement | null;
    ctas?: HTMLElement | null;
    metrics?: HTMLElement | null;
    hud?: HTMLElement | null;
    object?: HTMLElement | null;
  },
  onComplete?: () => void
): gsap.core.Timeline | null => {
  if (prefersReducedMotion()) {
    // Show all elements immediately without animation
    Object.values(elements).forEach((el) => {
      if (el) gsap.set(el, { opacity: 1, y: 0 });
    });
    onComplete?.();
    return null;
  }

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete,
  });

  // 1) Logo
  if (elements.logo) {
    tl.fromTo(
      elements.logo,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6 },
      0
    );
  }

  // 2) Headline
  if (elements.headline) {
    tl.fromTo(
      elements.headline,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.15
    );
  }

  // 3) Subheadline
  if (elements.subheadline) {
    tl.fromTo(
      elements.subheadline,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.3
    );
  }

  // 4) CTAs stagger
  if (elements.ctas) {
    const ctaButtons = elements.ctas.querySelectorAll("a, button");
    tl.fromTo(
      ctaButtons,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      0.45
    );
  }

  // 5) Metrics
  if (elements.metrics) {
    const metricItems = elements.metrics.querySelectorAll("[data-metric]");
    tl.fromTo(
      metricItems,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
      0.6
    );
  }

  // 6) HUD labels
  if (elements.hud) {
    const hudLabels = elements.hud.querySelectorAll("[data-hud]");
    tl.fromTo(
      hudLabels,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, stagger: 0.1 },
      0.75
    );
  }

  // 7) Object reveal
  if (elements.object) {
    tl.fromTo(
      elements.object,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8 },
      0.4
    );
  }

  return tl;
};

/**
 * Subtle float animation for 3D object
 */
export const objectFloatAnimation = (
  element: HTMLElement | null,
  amplitude: number = 8
): gsap.core.Tween | null => {
  if (!element || prefersReducedMotion()) return null;

  return gsap.to(element, {
    y: amplitude,
    duration: 3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
};
