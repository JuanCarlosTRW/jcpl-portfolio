import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const FinalConvictionSection = dynamic(() => import("@/components/home/FinalConvictionSection"));

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: WebGL background only */}
      <Hero />

      {/* 2 — FAQ: Objection handling */}
      <FAQSection />

      {/* 3 — Final CTA: Spots Left */}
      <SpotsLeftSection />

      {/* 4 — Conviction: Final visual momentum block before footer */}
      <FinalConvictionSection />
    </>
  );
}
