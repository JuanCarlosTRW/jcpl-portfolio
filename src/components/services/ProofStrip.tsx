"use client";

import { servicesProofBar } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function ProofStrip() {
  return (
    <div className="proof-strip-wrapper">
      <Reveal>
        <div className="proof-strip" role="list" aria-label="Key results">
          {servicesProofBar.stats.map((stat, i) => (
            <div key={i} className="proof-strip__item" role="listitem">
              <span className="proof-strip__value">{stat.value}</span>
              <span className="proof-strip__label">{stat.label}</span>
              {stat.verifiable && (
                <span className="proof-strip__verified" aria-label="Verifiable">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="proof-strip__verified-icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.5 10.5L4 8l-.707.707L6.5 11.914l6.207-6.207L12 5 6.5 10.5z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Social proof row with client names */}
      <Reveal delay={0.1}>
        <div className="proof-strip__logos">
          <p className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
            {servicesProofBar.logoRowLabel}
          </p>
          <div className="proof-strip__clients">
            {servicesProofBar.socialProof.map((name, i) => (
              <span key={i} className="proof-strip__client">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
