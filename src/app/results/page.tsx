import Link from "next/link";
import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import ResultsHeroWebGLLoader from "@/components/results/ResultsHeroWebGLLoader";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Results — Client Growth",
  description:
    "Real growth systems built for real service businesses. See measurable results across Google Ads, web design, SEO, and AI automation.",
  path: "/results",
});

const stats = [
  { value: "5+", label: "Systems Built" },
  { value: "$20K+", label: "Revenue Generated" },
  { value: "2–4 wks", label: "Avg. Launch Time" },
];

export default function ResultsPage() {
  return (
    <main className="bg-[#060D1F] min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20">
        <div className="max-w-[720px] mx-auto text-center px-6">
          <span className="block text-[11px] uppercase tracking-[0.12em] text-[#8899BB] mb-4">
            RESULTS
          </span>
          <h1 className="text-[clamp(32px,5vw,52px)] font-bold text-white leading-[1.15] mb-5">
            Real Businesses. Real Results.
          </h1>
          <p className="text-[17px] text-[rgba(255,255,255,0.55)] leading-[1.65] max-w-[540px] mx-auto">
            Every system I build ships with measurable infrastructure —
            not just pages. Here&apos;s the proof.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center mt-10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-10 bg-[rgba(255,255,255,0.08)] mx-6 sm:mx-8" />
                )}
                <div className="text-center">
                  <div className="text-[28px] font-bold text-white">{s.value}</div>
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#8899BB] mt-1">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WebGL hero animation — directly under stats */}
        <ResultsHeroWebGLLoader />
      </section>

      {/* ═══ CASE STUDIES GRID ═══ */}
      <CaseStudiesSection />

      {/* ═══ CTA ═══ */}
      <section className="py-20 text-center px-6">
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-[15px] px-8 py-4 rounded-lg hover:bg-[#1D4ED8] transition-all"
        >
          Apply for Growth Strategy Call
        </Link>
      </section>
    </main>
  );
}
