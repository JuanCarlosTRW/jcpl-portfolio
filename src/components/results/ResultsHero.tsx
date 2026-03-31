"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const GridScan = dynamic(() => import("./GridScan"), { ssr: false });

export default function ResultsHero() {
  const { locale } = useLocale();
  const r = translations[locale].results.hero;

  return (
    <section
      className="relative pt-36 pb-12 md:pb-16"
      style={{ backgroundColor: "#0D0B09" }}
    >
      {/* GridScan background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2d1a00"
          gridScale={0.1}
          scanColor="#D4A853"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="relative max-w-[760px] mx-auto text-center px-6">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4A853] mb-6">
          {r.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.025em]">
          {r.h1}
        </h1>

        {/* Sub */}
        <p className="text-[17px] text-[#D2C9B8] leading-[1.7] max-w-[560px] mx-auto">
          {r.sub}
        </p>
      </div>
    </section>
  );
}
