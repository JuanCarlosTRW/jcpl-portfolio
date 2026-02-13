import gsap from "gsap";

/* ═══════════════════════════════════════════════════
   CONSTANTS — tweak these to retune the hero feel
   ═══════════════════════════════════════════════════ */
const INTRO_EASE = "power3.out";
const FLOAT_EASE = "sine.inOut";

export const HERO_TIMING = {
  eyebrow: { delay: 0, duration: 0.6, y: 14 },
  headline: { delay: 0.15, duration: 0.8, y: 24 },
  sub: { delay: 0.35, duration: 0.65, y: 18 },
  ctas: { delay: 0.55, duration: 0.55, y: 16, stagger: 0.12 },
  metrics: { delay: 0.7, duration: 0.45, y: 12, stagger: 0.1 },
  hud: { delay: 0.85, duration: 0.5, stagger: 0.12 },
  object: { delay: 0.3, duration: 1.0, scale: 0.92 },
  rings: { delay: 0.5, duration: 1.2, scale: 0.85 },
  glow: { delay: 0.6, duration: 1.4 },
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
   Orchestrated stagger: eyebrow → headline → sub → CTAs → metrics → HUD → object
   ═══════════════════════════════════════════════════ */
export const heroIntroSequence = (
  elements: {
    eyebrow?: HTMLElement | null;
    headline?: HTMLElement | null;
    subheadline?: HTMLElement | null;
    ctas?: HTMLElement | null;
    metrics?: HTMLElement | null;
    hud?: HTMLElement | null;
    object?: HTMLElement | null;
    rings?: HTMLElement | null;
    glow?: HTMLElement | null;
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

  // Rings (scale in)
  if (elements.rings) {
    tl.fromTo(
      elements.rings,
      { opacity: 0, scale: HERO_TIMING.rings.scale },
      { opacity: 1, scale: 1, duration: HERO_TIMING.rings.duration },
      HERO_TIMING.rings.delay
    );
  }

  // Glow
  if (elements.glow) {
    tl.fromTo(
      elements.glow,
      { opacity: 0 },
      { opacity: 1, duration: HERO_TIMING.glow.duration },
      HERO_TIMING.glow.delay
    );
  }

  // HUD labels — fade only (no translate, cleaner)
  if (elements.hud) {
    const labels = elements.hud.querySelectorAll("[data-hud]");
    if (labels.length) {
      tl.fromTo(
        labels,
        { opacity: 0 },
        {
          opacity: 1,
          duration: HERO_TIMING.hud.duration,
          stagger: HERO_TIMING.hud.stagger,
        },
        HERO_TIMING.hud.delay
      );
    }
  }

  // 3D Object — scale + opacity
  if (elements.object) {
    tl.fromTo(
      elements.object,
      { opacity: 0, scale: HERO_TIMING.object.scale },
      { opacity: 1, scale: 1, duration: HERO_TIMING.object.duration },
      HERO_TIMING.object.delay
    );
  }

  return tl;
};

/* ═══════════════════════════════════════════════════
   OBJECT FLOAT ANIMATION (yoyo)
   ═══════════════════════════════════════════════════ */
export const objectFloatAnimation = (
  element: HTMLElement | null,
  amplitude: number = 8
): gsap.core.Tween | null => {
  if (!element || prefersReducedMotion()) return null;

  return gsap.to(element, {
    y: amplitude,
    duration: 4,
    ease: FLOAT_EASE,
    yoyo: true,
    repeat: -1,
  });
};

/* ═══════════════════════════════════════════════════
   MOUSE GLOW DRIFT
   Moves a glow element subtly toward the cursor.
   Returns a cleanup function.
   ═══════════════════════════════════════════════════ */
export const mouseGlowDrift = (
  glowEl: HTMLElement | null,
  amplitude: number = 30
): (() => void) | null => {
  if (!glowEl || prefersReducedMotion()) return null;

  const onMove = (e: MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2; // -1 → 1
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(glowEl, {
      x: cx * amplitude,
      y: cy * amplitude,
      duration: 1.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  return () => window.removeEventListener("mousemove", onMove);
};
