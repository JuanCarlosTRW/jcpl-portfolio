import gsap from "gsap";

/* ═══════════════════════════════════════════════════
   CONSTANTS — tweak these to retune the hero feel
   ═══════════════════════════════════════════════════ */
const INTRO_EASE = "power3.out";

export const HERO_TIMING = {
  eyebrow: { delay: 0, duration: 0.6, y: 14 },
  headline: { delay: 0.15, duration: 0.8, y: 24 },
  sub: { delay: 0.35, duration: 0.65, y: 18 },
  ctas: { delay: 0.55, duration: 0.55, y: 16, stagger: 0.12 },
  metrics: { delay: 0.7, duration: 0.45, y: 12, stagger: 0.1 },
} as const;

/* ═══════════════════════════════════════════════════
   REDUCED MOTION CHECK
   ═══════════════════════════════════════════════════ */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/* ═══════════════════════════════════════════════════
   HERO INTRO SEQUENCE
   Orchestrated stagger: eyebrow → headline → sub → CTAs → metrics
   ═══════════════════════════════════════════════════ */
export const heroIntroSequence = (
  elements: {
    eyebrow?: HTMLElement | null;
    headline?: HTMLElement | null;
    subheadline?: HTMLElement | null;
    ctas?: HTMLElement | null;
    metrics?: HTMLElement | null;
  },
  onComplete?: () => void
): gsap.core.Timeline | null => {
  if (prefersReducedMotion()) {
    Object.values(elements).forEach((el) => {
      if (el) gsap.set(el, { opacity: 1, y: 0, scale: 1 });
    });
    onComplete?.();
    return null;
  }

  const tl = gsap.timeline({
    defaults: { ease: INTRO_EASE },
    onComplete,
  });

  // Eyebrow
  if (elements.eyebrow) {
    tl.fromTo(
      elements.eyebrow,
      { opacity: 0, y: HERO_TIMING.eyebrow.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.eyebrow.duration },
      HERO_TIMING.eyebrow.delay
    );
  }

  // Headline
  if (elements.headline) {
    tl.fromTo(
      elements.headline,
      { opacity: 0, y: HERO_TIMING.headline.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.headline.duration },
      HERO_TIMING.headline.delay
    );
  }

  // Subheadline
  if (elements.subheadline) {
    tl.fromTo(
      elements.subheadline,
      { opacity: 0, y: HERO_TIMING.sub.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.sub.duration },
      HERO_TIMING.sub.delay
    );
  }

  // CTAs — staggered buttons
  if (elements.ctas) {
    const buttons = elements.ctas.querySelectorAll("a, button");
    if (buttons.length) {
      tl.fromTo(
        buttons,
        { opacity: 0, y: HERO_TIMING.ctas.y },
        {
          opacity: 1,
          y: 0,
          duration: HERO_TIMING.ctas.duration,
          stagger: HERO_TIMING.ctas.stagger,
        },
        HERO_TIMING.ctas.delay
      );
    }
  }

  // Metrics
  if (elements.metrics) {
    const items = elements.metrics.querySelectorAll("[data-metric]");
    if (items.length) {
      tl.fromTo(
        items,
        { opacity: 0, y: HERO_TIMING.metrics.y },
        {
          opacity: 1,
          y: 0,
          duration: HERO_TIMING.metrics.duration,
          stagger: HERO_TIMING.metrics.stagger,
        },
        HERO_TIMING.metrics.delay
      );
    }
  }

  return tl;
};
