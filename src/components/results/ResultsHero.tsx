"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const GridScan = dynamic(() => import("./GridScan"), { ssr: false });

export default function ResultsHero() {
  const { locale } = useLocale();
  const r = translations[locale].results.hero;

  const evidenceStats = [
    { value: r.stat1Value, label: r.stat1Label, note: r.stat1Note },
    { value: r.stat2Value, label: r.stat2Label, note: r.stat2Note },
    { value: r.stat3Value, label: r.stat3Label, note: r.stat3Note },
    { value: r.stat4Value, label: r.stat4Label, note: r.stat4Note },
  ];

  return (
    <section
      className="relative pt-36 pb-20 md:pb-28"
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
        <p className="text-[17px] text-[#D2C9B8] leading-[1.7] max-w-[560px] mx-auto mb-12">
          {r.sub}
        </p>

        {/* Evidence stats panel */}
        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{
            borderColor: "rgba(212,168,83,0.12)",
            background: "rgba(19,16,9,0.8)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {evidenceStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[24px] md:text-[28px] font-extrabold text-white tracking-[-0.02em] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-[13px] text-[#D2C9B8] leading-[1.4] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[rgba(255,255,255,0.3)]">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
