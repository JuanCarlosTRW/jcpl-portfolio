import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import RotatingText from "@/components/ui/RotatingText";
import UnicornEmbed from "@/components/ui/UnicornEmbed";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Results",
  description:
    "Real growth systems built for real service businesses. See measurable results across Google Ads, web design, SEO, and AI automation.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <div className="bg-cg-section-a min-h-screen">
      {/* HERO */}
      <section
        className="relative pt-36 pb-24"
        style={{ backgroundColor: "#060D1F" }}
      >
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
            Systems That{" "}
            <RotatingText
              texts={["Shipped", "Worked", "Dominated"]}
              rotationInterval={2000}
              mainClassName="inline-block text-cg-accent-lt"
            />
            .
          </h1>
          <p className="text-[18px] text-[#D4DFF0] leading-[1.7] max-w-[640px] mx-auto mt-3">
            Every client. Every result. Independently verifiable.
          </p>

          {/* UnicornStudio embed */}
          <div className="flex justify-center items-center w-full mt-8 mb-8">
            <div className="w-full max-w-[700px] aspect-video rounded-2xl overflow-hidden shadow-lg">
              <UnicornEmbed projectId="b84EmKQXVeBLgLd1z0Yn" />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <CaseStudiesSection />
    </div>
  );
}
