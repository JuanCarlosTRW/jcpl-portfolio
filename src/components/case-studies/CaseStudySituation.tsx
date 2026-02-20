"use client";
import type { CaseStudy } from "@/lib/caseStudiesContent";

export default function CaseStudySituation({ study }: { study: CaseStudy }) {
  const { situation } = study;
  const items = [
    { label: "Who They Were", value: situation.who },
    { label: "What Wasn't Working", value: situation.problem },
    { label: "Revenue Stage", value: situation.revenueStage },
    { label: "Core Bottleneck", value: situation.bottleneck },
  ];

  return (
    <section className="py-20 md:py-28 px-6 border-t border-white/[0.06]" style={{ background: "#0E0E0F" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Structured bullets */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] mb-4 block">
              01 / The Situation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
              Where They Were When I Met Them
            </h2>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.label} className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-base text-white/80 leading-relaxed pl-3.5 border-l border-white/10">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract visual card */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-sm rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)", filter: "blur(30px)" }}
              />
              <div className="relative z-10 space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6">
                  Situation Snapshot
                </div>
                {[
                  { icon: "⚠", label: "Problem Identified" },
                  { icon: "📍", label: "Industry: " + study.industry },
                  { icon: "📍", label: "Location: " + study.location },
                  { icon: "🔒", label: "Bottleneck: Infrastructure" },
                  { icon: "🎯", label: "Outcome Potential: High" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 py-2 border-b border-white/[0.05]">
                    <span className="text-sm">{row.icon}</span>
                    <span className="text-sm text-cg-body">{row.label}</span>
                  </div>
                ))}
                <div className="mt-6 pt-4">
                  <div className="text-xs text-[var(--text-muted)] mb-2">Engagement Status</div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-green-400">Results Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
