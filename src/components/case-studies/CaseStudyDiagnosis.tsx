"use client";
import type { CaseStudy } from "@/lib/caseStudiesContent";

export default function CaseStudyDiagnosis({ study }: { study: CaseStudy }) {
  const { diagnosis } = study;
  return (
    <section
      className="py-20 md:py-28 px-6 border-t border-white/[0.06]"
      style={{ background: "linear-gradient(180deg, #0E0E0F 0%, #0f0f11 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] mb-4 block">
          02 / Strategic Diagnosis
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          {diagnosis.title}
        </h2>

        <div className="space-y-0">
          {diagnosis.paragraphs.map((para, i) => (
            <div key={i} className="flex gap-6 py-8 border-b border-white/[0.06] group">
              <div className="text-xs font-mono text-[var(--text-muted)] pt-1 w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-base md:text-lg text-white/75 leading-relaxed">{para}</p>
            </div>
          ))}
        </div>

        {/* Highlighted callout */}
        <div className="mt-14">
          <div
            className="rounded-2xl px-8 py-7 relative overflow-hidden"
            style={{
              background: "rgba(127,95,255,0.07)",
              border: "1px solid rgba(127,95,255,0.18)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 0% 50%, rgba(127,95,255,0.1) 0%, transparent 70%)",
              }}
            />
            <p
              className="relative z-10 text-xl md:text-2xl font-semibold text-white leading-snug"
              style={{ letterSpacing: "-0.01em" }}
            >
              "{diagnosis.highlighted}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
