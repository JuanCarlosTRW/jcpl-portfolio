"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const [nicheIndex, setNicheIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNicheIndex((prev) => (prev + 1) % hero.rotatingNiches.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const words = hero.headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Luxury atmospheric background */}
      <div className="absolute inset-0 overflow-hidden" style={{ background: 'var(--hero-atmo)' }}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217,230,218,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(217,230,218,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Niche proof rotating text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)] animate-pulse" />
            <span className="text-sm text-[var(--text-muted)]">Building growth systems for</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={nicheIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold text-[var(--brand-accent)]"
              >
                {hero.rotatingNiches[nicheIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Headline — word-split stagger */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.4 + i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                ["Growth", "Systems", "Calendar"].includes(word)
                  ? "gradient-text"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={ctaCopy.href}
            onClick={() => trackEvent("hero_cta_click")}
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-[var(--bg-base)] transition-all duration-300 hover:bg-[var(--brand-strong)] hover:scale-[1.02] shadow-[var(--glow-accent)]"
            style={{ boxShadow: 'var(--glow-accent)' }}
          >
            {ctaCopy.primary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-white/5 px-8 py-4 text-base font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--brand-accent)]/40 hover:bg-white/10"
          >
            See Results
          </Link>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">$20K+</span>
            <span>generated for clients</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">3+</span>
            <span>active growth systems</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)] hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">&lt;30</span>
            <span>days to first leads</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-base)] to-transparent" />
    </section>
  );
}
