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
      {/* Back link - visible and styled */}
      <div className="max-w-[760px] mx-auto px-6 pt-10">
        <a
          href="https://clientgrowth.ca/results"
          className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-lg px-4 py-2.5 text-[14px] font-medium text-[#D4DFF0] hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-200"
          style={{ marginBottom: 32 }}
        >
          <span className="text-lg">←</span> All Results
        </a>
      </div>
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
          <span className="block text-[11px] uppercase tracking-[0.14em] text-[#7BA7D4] mb-5">
            REAL RESULTS
          </span>
          <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.025em]">
            Systems That Shipped.
          </h1>
          <p className="text-[18px] text-[#D4DFF0] leading-[1.7] max-w-[640px] mx-auto mt-3">
            Every client. Every result. Independently verifiable.
          </p>
          {/* Immersive, responsive UnicornStudio embed */}
          <div className="flex justify-center items-center w-full mt-8 mb-8">
            <div
              data-us-project="b84EmKQXVeBLgLd1z0Yn"
              style={{
                width: '100%',
                maxWidth: '700px',
                aspectRatio: '16/9',
                height: 'auto',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(37,99,235,0.10)',
              }}
              className="w-full max-w-[700px] aspect-video rounded-2xl overflow-hidden shadow-lg"
            ></div>
          </div>
          <script type="text/javascript" dangerouslySetInnerHTML={{__html:`!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();`}} />
        </div>
      </section>

      {/* ═══ CASE STUDIES GRID ═══ */}
      <CaseStudiesSection />
    </main>
  );
}
