import Link from "next/link";
import { caseStudies } from "@/lib/caseStudiesContent";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Real Systems, Real Revenue",
  description: "Real growth systems built for real service businesses. See measurable results across Google Ads, web design, SEO, and AI automation.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main style={{ background: "#0E0E0F", minHeight: "100vh" }}>
      {/* Header */}
      <div className="pt-24 md:pt-32 pb-6 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] mb-4 block">
          Case Evidence
        </span>
        <h1
          className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
          style={{ letterSpacing: "-0.025em" }}
        >
          Proof of Work
        </h1>
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
          Every engagement below is a real system built for a real business. No mockups. No hypotheticals.
        </p>
      </div>

      {/* Unicorn Studio WebGL Hero */}
      <CaseStudiesHero />

      {/* Case Study Card Grid */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] border border-[#2563EB]/30 px-3 py-1 rounded-full">
                    {study.label}
                  </span>
                  <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors">→</span>
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-white/30 mb-2">
                  {study.industry} · {study.location}
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {study.headline}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  {study.subtext}
                </p>
                {/* Key metrics */}
                <div className="flex flex-wrap gap-3">
                  {study.results.metrics.slice(0, 2).map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl px-4 py-2"
                      style={{
                        background: "rgba(37,99,235,0.08)",
                        border: "1px solid rgba(37,99,235,0.20)",
                      }}
                    >
                      <div className="text-base font-bold text-white">{m.value}</div>
                      <div className="text-xs text-white/40">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center text-xs text-white/25 max-w-lg mx-auto leading-relaxed">
          All results are client-reported and independently verified. Your results will vary based on market, offer, and execution quality.
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-white text-[#0E0E0F] font-bold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-[1.02]"
          >
            Apply for Growth Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
