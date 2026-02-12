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
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[spin_60s_linear_infinite] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[#9a9ab0]">Building growth systems for</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={nicheIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold text-indigo-400"
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
          className="mt-6 text-lg md:text-xl text-[#9a9ab0] max-w-2xl mx-auto leading-relaxed"
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
            className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)]"
          >
            {ctaCopy.primary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10"
          >
            See Results
          </Link>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#5c5c72]"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">$20K+</span>
            <span>generated for clients</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">3+</span>
            <span>active growth systems</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">&lt;30</span>
            <span>days to first leads</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent" />
    </section>
  );
}
