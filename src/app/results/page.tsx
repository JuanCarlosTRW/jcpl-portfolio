import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Results — Client Growth",
  description:
    "Real growth systems built for real service businesses. See measurable results across Google Ads, web design, SEO, and AI automation.",
  path: "/results",
});

const stats = [
  { value: "5", label: "SYSTEMS BUILT" },
  { value: "$30K+", label: "REVENUE GENERATED" },
  { value: "2–4 wks", label: "AVG. LAUNCH TIME" },
];

export default function ResultsPage() {
  return (
    <main className="bg-cg-section-a min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-36 pb-24" style={{ backgroundColor: "#060D1F" }}>
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />
        {/* CSS grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-[760px] mx-auto text-center px-6">
          <span className="block text-[11px] uppercase tracking-[0.15em] text-cg-secondary mb-5">
            RESULTS
          </span>
          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.02em]">
            Real Businesses. Real Results.
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.5)] leading-[1.65] max-w-[520px] mx-auto mb-12">
            Every system I build ships with measurable infrastructure — not just
            pages. Here&apos;s the proof.
          </p>

          {/* Stats row */}
          <div className="inline-flex items-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-xl py-5 px-10 max-sm:grid max-sm:grid-cols-3 max-sm:rounded-lg max-sm:py-4 max-sm:px-5">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-10 bg-[rgba(255,255,255,0.08)] flex-shrink-0 max-sm:hidden" />
                )}
                <div className="text-center px-8 max-sm:px-4">
                  <span className="text-[28px] font-extrabold text-white block">
                    {s.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-cg-secondary mt-1 block">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES GRID ═══ */}
      <CaseStudiesSection />
    </main>
  );
}
