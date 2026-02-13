"use client";

import PremiumHero from "./PremiumHero";

/**
 * Thin compatibility wrapper named `Hero` so pages importing `Hero` keep working.
 * This keeps the implementation (PremiumHero) separate while providing the
 * requested `/src/components/hero/Hero.tsx` entry point.
 */
export default function Hero() {
  return <PremiumHero />;
}
