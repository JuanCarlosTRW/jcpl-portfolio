"use client";

export default function HeroCTAButtons() {
  return (
    <div className="w-full mt-2 space-y-5">
      {/* ── Row 1: Buttons ── */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Primary */}
        <a
          href="/apply"
          className="
            inline-flex items-center justify-center
            h-14 sm:h-[58px] px-7 rounded-2xl
            font-semibold text-[17px] text-white
            bg-gradient-to-r from-violet-500 to-cyan-500
            shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_rgba(124,58,237,0.18)]
            hover:translate-y-[-1px]
            hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_18px_55px_rgba(124,58,237,0.22)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70
            active:scale-[0.98]
            transition-all duration-200
          "
          data-analytics="hero-cta"
        >
          Apply for Growth Partnership&nbsp;&rarr;
        </a>

        {/* Secondary */}
        <a
          href="/case-studies"
          className="
            inline-flex items-center justify-center
            h-14 sm:h-[58px] px-7 rounded-2xl
            font-semibold text-[17px] text-white/90
            bg-transparent border border-white/[0.12]
            hover:border-white/20 hover:bg-white/[0.05] hover:translate-y-[-1px]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40
            active:scale-[0.98]
            transition-all duration-200
          "
          data-analytics="hero-secondary-cta"
        >
          See Case Studies
        </a>
      </div>

      {/* ── Row 2: Trust row ── */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
        <span className="inline-flex items-center gap-1.5">⚡ Response in 24h</span>
        <span className="inline-flex items-center gap-1.5">🔒 100% confidential</span>
        <span className="inline-flex items-center gap-1.5">🧩 Limited spots per quarter</span>
      </div>

      {/* ── Row 3: Microcopy ── */}
      <p className="text-sm text-white/50">
        2-minute application · if I don&apos;t see a clear ROI path, I&apos;ll tell you.
      </p>
    </div>
  );
}
