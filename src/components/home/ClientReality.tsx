"use client";

import { clientReality } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Pain Icons (updated to blue palette) ─── */
const icons: Record<string, React.ReactNode> = {
  ghost: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="rgba(37,99,235,0.25)" strokeWidth="1" />
      <path d="M10 18c0-2 2-3 4-3s4 1 4 3" stroke="rgba(37,99,235,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="12" r="1.5" fill="rgba(37,99,235,0.6)" />
      <circle cx="17" cy="12" r="1.5" fill="rgba(37,99,235,0.6)" />
      <path d="M9 7C10.5 5 12 4.5 14 4.5s3.5.5 5 2.5" stroke="rgba(37,99,235,0.4)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  leak: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M7 8h14v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8z" stroke="rgba(37,99,235,0.5)" strokeWidth="1.5" />
      <path d="M12 20v4M16 20v3M14 20v5" stroke="rgba(239,68,68,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M7 8h14" stroke="rgba(37,99,235,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  scatter: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="rgba(37,99,235,0.4)" strokeWidth="1.2" />
      <rect x="17" y="3" width="8" height="8" rx="2" stroke="rgba(37,99,235,0.4)" strokeWidth="1.2" />
      <rect x="3" y="17" width="8" height="8" rx="2" stroke="rgba(37,99,235,0.4)" strokeWidth="1.2" />
      <rect x="17" y="17" width="8" height="8" rx="2" stroke="rgba(37,99,235,0.4)" strokeWidth="1.2" />
      <path d="M11 7h6M11 21h6M7 11v6M21 11v6" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="rgba(239,68,68,0.4)" strokeWidth="1.2" />
      <path d="M14 8v6l4 3" stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 22l2-2M22 22l-2-2" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
};

export default function ClientReality() {
  return (
    <SectionWrapper id="reality" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={clientReality.label} className="mb-5 text-[#8899BB]" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {clientReality.headline}
        </h2>
        <p className="mt-5 text-[#E8EDF5] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          {clientReality.subheadline}
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        {clientReality.pains.map((pain, i) => (
          <Reveal key={pain.icon} delay={0.08 * i}>
            <div className="group relative rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#0F2049] p-7 md:p-8 h-full transition-all duration-400 hover:border-[rgba(37,99,235,0.25)] hover:bg-[#0D1B3E]">
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.2)] transition-colors duration-300 group-hover:bg-[rgba(37,99,235,0.2)]">
                {icons[pain.icon]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {pain.title}
              </h3>

              {/* Detail */}
              <p className="text-sm text-[#8899BB] leading-relaxed">
                {pain.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
