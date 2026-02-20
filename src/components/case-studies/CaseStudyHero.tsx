"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudiesContent";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [labelRef.current, headlineRef.current, subRef.current, ctasRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 140);
    });
  }, []);

  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-24 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 0%, rgba(37,99,235,0.13) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(37,99,235,0.08) 0%, transparent 60%), #0E0E0F",
      }}
    >
      {/* Back link - updated style and link */}
      <div className="absolute top-8 left-6 z-20">
        <Link
          href="https://clientgrowth.ca/results"
          className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-lg px-4 py-2.5 text-[14px] font-medium text-[#D4DFF0] hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-200"
          style={{ marginBottom: 32 }}
        >
          <span className="text-lg">←</span> All Results
        </Link>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div ref={labelRef} className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] border border-[var(--brand-accent)]/30 px-3 py-1 rounded-full">
            {study.label}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            {study.industry} · {study.location}
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          {study.headline}
        </h1>

        <p ref={subRef} className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10">
          {study.subtext}
        </p>

        <div ref={ctasRef} className="flex flex-wrap gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-white text-[#0E0E0F] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all"
          >
            Apply for Strategy Call
          </Link>
          <Link
            href="https://clientgrowth.ca/results"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
          >
            View All Results →
          </Link>
        </div>
      </div>
    </section>
  );
}
