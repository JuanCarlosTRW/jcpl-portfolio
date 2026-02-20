"use client";
import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudiesContent";

export default function CaseStudyFinalCTA({ study }: { study: CaseStudy }) {
  return (
    <section
      className="py-24 md:py-36 px-6 border-t border-white/[0.06] relative overflow-hidden"
      style={{ background: "#080809" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] mb-6 block">
          06 / If You're Facing Something Similar
        </span>

        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
          style={{ letterSpacing: "-0.025em" }}
        >
          Ready to Engineer Your Own Results?
        </h2>

        <p className="text-base md:text-lg text-cg-body leading-relaxed mb-12 max-w-lg mx-auto">
          I take on a limited number of growth partnerships each quarter. If your business is ready to stop guessing and start scaling with a system, apply now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0E0E0F] font-bold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-[1.02]"
          >
            Apply for Growth Strategy Call
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
          >
            View Another Transformation →
          </Link>
        </div>

        <p className="mt-8 text-xs text-[var(--text-muted)] tracking-wide">
          Limited spots available · Qualified businesses only
        </p>
      </div>
    </section>
  );
}
