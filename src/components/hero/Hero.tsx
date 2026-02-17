"use client";

/**
 * Thin compatibility wrapper named `Hero` so pages importing `Hero` keep working.
 * Delegates entirely to PremiumHero which contains the full hero implementation.
 */
export { default } from "./PremiumHero";
