"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Phase Icons (inline SVGs for zero-dep, crisp rendering) ─── */
const PHASE_ICONS: Record<number, React.ReactNode> = {
  1: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" />
    </svg>
  ),
  2: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 3v18" />
    </svg>
  ),
  3: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  4: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4zM10 17h4M11 21h2" />
    </svg>
  ),
  5: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zM17 11l2 2 4-4" />
    </svg>
  ),
  6: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

export default function SystemSection() {
  return (
    <SectionWrapper id="system" variant="surface">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label="The System" className="mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          The Presence-to-Pipeline{" "}
          <span className="bg-gradient-to-r from-[#7f5fff] to-[#33ccff] bg-clip-text text-transparent">
            System™
          </span>
        </h2>
        <p className="mt-5 text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          Six engineered phases that transform your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </Reveal>

      {/* Timeline Grid */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop connecting line */}
        <div
          className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(127,95,255,0.3) 0%, rgba(51,204,255,0.3) 50%, rgba(127,95,255,0.1) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
          {systemSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={step.step} delay={0.08 * i}>
                <div
                  className={`group relative ${
                    isLeft ? "lg:text-right" : "lg:col-start-2"
                  }`}
                >
                  {/* Desktop connector dot */}
                  <div
                    className={`hidden lg:flex absolute top-6 ${
                      isLeft ? "-right-[2.52rem]" : "-left-[2.52rem]"
                    } h-4 w-4 items-center justify-center`}
                    aria-hidden="true"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)] shadow-[0_0_8px_rgba(127,95,255,0.5)] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(127,95,255,0.7)]" />
                  </div>

                  {/* Card */}
                  <div className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] p-7 md:p-8 transition-all duration-400 hover:border-[rgba(127,95,255,0.15)] hover:bg-[var(--bg-elevated)] hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(127,95,255,0.06)]">
                    {/* Phase badge + icon row */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isLeft ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(127,95,255,0.08)] border border-[rgba(127,95,255,0.12)] text-[var(--brand-accent)] shrink-0 transition-colors duration-300 group-hover:bg-[rgba(127,95,255,0.12)]">
                        {PHASE_ICONS[step.step]}
                      </div>

                      {/* Phase label */}
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-alt)]">
                        Phase {step.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
