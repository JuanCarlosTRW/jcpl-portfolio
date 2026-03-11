"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

const evidenceStats = [
  { value: "$41,085", label: "Revenue generated", note: "Google Ads · 30 days" },
  { value: "90", label: "New clients acquired", note: "Full acquisition system" },
  { value: "$33", label: "Cost per qualified call", note: "Paid search" },
  { value: "46×", label: "Return on ad spend", note: "Month one" },
];

export default function ResultsHero() {
  return (
    <section
      className="relative pt-36 pb-20 md:pb-28"
      style={{ backgroundColor: "#0D0B09" }}
    >
      {/* WebGL background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <UnicornScene
          projectId="b84EmKQXVeBLgLd1z0Yn"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          production={true}
          scale={1}
          dpi={1.5}
          fps={60}
          lazyLoad={true}
        />
      </div>

      <div className="relative max-w-[760px] mx-auto text-center px-6">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4A853] mb-6">
          Client Results — Verified Record
        </p>

        {/* Headline */}
        <h1 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.025em]">
          $41,085 in revenue. 90 new clients.
          <br className="hidden md:block" /> Built on the same system.
        </h1>

        {/* Sub */}
        <p className="text-[17px] text-[#D2C9B8] leading-[1.7] max-w-[560px] mx-auto mb-12">
          A structured record from live partnerships. Starting conditions, what
          was built, and what resulted. Every figure tied to a real account.
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
