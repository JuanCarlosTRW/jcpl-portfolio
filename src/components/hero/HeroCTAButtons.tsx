"use client";
import { useEffect, useRef } from "react";
import { ctaCopy } from "@/lib/content";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroCTAButtons() {
  // Pulse animation on mount (one-time)
  const primaryRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!primaryRef.current) return;
    primaryRef.current.classList.add("animate-hero-cta-pulse");
    const timeout = setTimeout(() => {
      primaryRef.current?.classList.remove("animate-hero-cta-pulse");
    }, 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 mt-8">
      {/* Primary Premium CTA */}
      <a
        ref={primaryRef}
        href={ctaCopy.href}
        className="group relative flex-1 min-w-[220px] px-10 py-5 rounded-xl font-bold text-xl text-white bg-gradient-to-r from-violet-600 via-cyan-400 to-blue-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
        style={{ boxShadow: "0 4px 32px 0 rgba(80,0,255,0.18)" }}
        data-analytics="hero-cta"
      >
        <span className="flex items-center gap-3">
          {ctaCopy.primary}
          <ArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
        </span>
        {/* Trust badge */}
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black bg-opacity-80 px-4 py-1 rounded-full text-white font-semibold shadow-md border border-cyan-400 flex items-center gap-2">
          <CheckCircle className="text-cyan-400 text-base" />
          Response in 24h · 100% confidential
        </span>
      </a>
      {/* Secondary CTA */}
      <a
        href="/case-studies"
        className="flex-1 min-w-[200px] px-10 py-5 rounded-xl border border-cyan-400 text-cyan-400 font-semibold text-lg bg-black bg-opacity-60 hover:bg-cyan-400 hover:text-white transition-all duration-200 flex items-center gap-3 justify-center shadow-md"
        data-analytics="hero-secondary-cta"
        style={{ position: "relative" }}
      >
        <CheckCircle className="text-xl" />
        {ctaCopy.secondary}
      </a>
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover .group-hover\:translate-x-1 {
            transform: none !important;
          }
        }
        @keyframes hero-cta-pulse {
          0% { box-shadow: 0 0 0 12px rgba(128,0,255,0.32), 0 8px 32px 0 rgba(80,0,255,0.22); }
          100% { box-shadow: 0 0 0 4px rgba(128,0,255,0.18), 0 4px 32px 0 rgba(80,0,255,0.18); }
        }
        .animate-hero-cta-pulse {
          animation: hero-cta-pulse 0.9s cubic-bezier(.4,0,.2,1) 1;
        }
      `}</style>
    </div>
  );
}
