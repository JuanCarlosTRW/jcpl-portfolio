"use client";

import { servicesProof } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";

export default function ProofBlock() {
  return (
    <SectionWrapper id="proof">
      <Reveal className="text-center mb-10">
        <SectionLabel label={servicesProof.label} className="mb-4" />
      </Reveal>

      <div className="max-w-4xl mx-auto">
        <Reveal delay={0.05}>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start rounded-2xl border border-[rgba(37,99,235,0.12)] bg-cg-section-b p-8 md:p-10">
            {/* Left: mini case study */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cg-accent mb-4">
                {servicesProof.client}
              </p>

              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cg-secondary">Situation</span>
                  <p className="text-cg-body mt-1">{servicesProof.situation}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cg-secondary">Diagnosis</span>
                  <p className="text-cg-body mt-1">{servicesProof.diagnosis}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cg-secondary">Build</span>
                  <p className="text-cg-body mt-1">{servicesProof.build}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white">Outcome</span>
                  <p className="text-white font-semibold mt-1">{servicesProof.outcome}</p>
                </div>
              </div>

              <div className="mt-6">
                <CTAButton
                  href={`/results/${servicesProof.slug}`}
                  variant="ghost"
                  size="sm"
                  eventName="case_card_click"
                >
                  View full breakdown →
                </CTAButton>
              </div>
            </div>

            {/* Right: proof asset frame */}
            <div className="md:w-[220px] shrink-0">
              <div className="aspect-[4/3] rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0D1A2D] flex items-center justify-center overflow-hidden">
                <div className="text-center p-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="mx-auto mb-3 text-cg-secondary opacity-40">
                    <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 28l8-8 6 6 8-10 10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <p className="text-[0.65rem] text-cg-secondary leading-snug">
                    {servicesProof.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
