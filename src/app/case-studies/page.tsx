import Link from "next/link";
import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Results — Client Growth",
  description:
    "Real growth systems built for real service businesses. See measurable results across Google Ads, web design, SEO, and AI automation.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main style={{ background: "#050B1A", minHeight: "100vh" }}>
      <CaseStudiesSection />

      {/* CTA */}
      <div className="pb-20 text-center">
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 bg-white text-[#0E0E0F] font-bold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-[1.02]"
        >
          Apply for Growth Strategy Call
        </Link>
      </div>
    </main>
  );
}
