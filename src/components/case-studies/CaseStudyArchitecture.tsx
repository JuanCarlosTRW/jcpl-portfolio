"use client";
import type { CaseStudy } from "@/lib/caseStudiesContent";

export default function CaseStudyArchitecture({ study }: { study: CaseStudy }) {
  const { architecture } = study;
  return (
  <section className="py-16 md:py-28 px-6 border-t border-white/[0.06]" style={{ background: "#0E0E0F" }}>
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] mb-4 block">
          03 / Growth Architecture
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          The Growth Architecture I Implemented
        </h2>
        <p className="text-[var(--text-secondary)] mb-14 max-w-xl">
          Every engagement runs on a four-layer system. No isolated deliverables. One integrated machine.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {architecture.layers.map((layer) => (
            <div
              key={layer.title}
              className="group rounded-2xl p-6 relative overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="text-2xl font-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(37,99,235,0.8), rgba(37,99,235,0.6))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {layer.icon}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  {layer.title}
                </h3>
                <div className="w-6 h-px bg-[var(--brand-accent)] mb-3 opacity-60" />
                <p className="text-sm text-cg-body leading-relaxed">{layer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
