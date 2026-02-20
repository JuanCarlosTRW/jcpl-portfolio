"use client";

import { clientReality } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Pain Icons (updated to blue palette) ─── */
const icons: Record<string, React.ReactNode> = {
  ghost: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="#2563EB" strokeWidth="1.5" />
      <path d="M7 13c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="9" r="1" fill="#2563EB" />
      <circle cx="12" cy="9" r="1" fill="#2563EB" />
    </svg>
  ),
  leak: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 6h10v7a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" stroke="#2563EB" strokeWidth="1.5" />
      <path d="M8 15v3M10 15v4M12 15v2.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M5 6h10" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  scatter: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#2563EB" strokeWidth="1.5" />
      <rect x="12" y="2" width="6" height="6" rx="1.5" stroke="#2563EB" strokeWidth="1.5" />
      <rect x="2" y="12" width="6" height="6" rx="1.5" stroke="#2563EB" strokeWidth="1.5" />
      <rect x="12" y="12" width="6" height="6" rx="1.5" stroke="#2563EB" strokeWidth="1.5" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="#2563EB" strokeWidth="1.5" />
      <path d="M10 6v4l3 2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ClientReality() {
  return (
    <SectionWrapper id="reality" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={clientReality.label} className="mb-5 text-[#8899BB]" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto text-glow-blue">
          {clientReality.headline}
        </h2>
        <p className="mt-5 text-[#E8EDF5] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          {clientReality.subheadline}
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        {clientReality.pains.map((pain, i) => (
          <Reveal key={pain.icon} delay={0.08 * i}>
            <div className="group relative rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#0F2049] p-7 md:p-8 h-full transition-all duration-300 hover:border-[rgba(37,99,235,0.35)] hover:-translate-y-[2px] hover:bg-[#0D1B3E]">
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.25)] icon-glow">
                {icons[pain.icon]}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">
                {pain.title}
              </h3>

              {/* Detail */}
              <p className="text-[14px] text-[#8899BB] leading-[1.6]">
                {pain.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
