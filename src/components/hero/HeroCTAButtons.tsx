"use client";
import { useEffect, useRef } from "react";
import { ctaCopy } from "@/lib/content";
import { ArrowRight } from "lucide-react";

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
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6">
      {/* Primary */}
      <a
        ref={primaryRef}
        href={ctaCopy.href}
        className={`
          group relative flex-1 min-w-[180px] px-8 py-3 rounded-full
          font-semibold text-lg text-gray-900
          bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400
          shadow-[0_0_0_4px_rgba(128,0,255,0.18),0_4px_32px_0_rgba(80,0,255,0.18)]
          ring-2 ring-violet-400/40
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/60
          hover:shadow-[0_0_0_8px_rgba(128,0,255,0.28),0_8px_32px_0_rgba(80,0,255,0.22)]
          hover:-translate-y-0.5 active:scale-95
          after:absolute after:inset-0 after:rounded-full after:pointer-events-none
          after:shadow-[0_0_32px_8px_rgba(128,0,255,0.25)]
          disabled:opacity-60 disabled:pointer-events-none
        `}
        style={{
          boxShadow:
            "0 0 0 4px rgba(128,0,255,0.18), 0 4px 32px 0 rgba(80,0,255,0.18)",
        }}
        data-analytics="hero-cta"
      >
        <span className="relative flex items-center justify-center w-full">
          {ctaCopy.primary}
          <ArrowRight
            className="ml-2 transition-transform duration-200 group-hover:translate-x-1.5 motion-reduce:transition-none"
            size={22}
            strokeWidth={2.2}
          />
        </span>
      </a>
      {/* Secondary */}
      <a
        href="/case-studies"
        className={`
          flex-1 min-w-[180px] px-8 py-3 rounded-full
          font-semibold text-lg text-white
          bg-gradient-to-br from-[#0a1020cc] to-[#1a2340cc] backdrop-blur
          border border-violet-300/30
          shadow-[0_2px_8px_0_rgba(80,0,255,0.10)]
          transition-all duration-200
          hover:border-violet-200/60 hover:bg-white/10
          hover:shadow-[0_4px_16px_0_rgba(80,0,255,0.18)]
          active:scale-95
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300/40
          before:absolute before:inset-0 before:rounded-full before:pointer-events-none
          before:bg-gradient-to-br before:from-white/10 before:to-transparent
          disabled:opacity-60 disabled:pointer-events-none
        `}
        data-analytics="hero-secondary-cta"
        style={{
          position: "relative",
        }}
      >
        <span className="relative z-10">{ctaCopy.secondary}</span>
      </a>
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover .group-hover\\:translate-x-1.5 {
            transform: none !important;
          }
        }
        @keyframes hero-cta-pulse {
          0% { box-shadow: 0 0 0 8px rgba(128,0,255,0.32), 0 4px 32px 0 rgba(80,0,255,0.22); }
          100% { box-shadow: 0 0 0 4px rgba(128,0,255,0.18), 0 4px 32px 0 rgba(80,0,255,0.18); }
        }
        .animate-hero-cta-pulse {
          animation: hero-cta-pulse 0.9s cubic-bezier(.4,0,.2,1) 1;
        }
      `}</style>
    </div>
  );
}
