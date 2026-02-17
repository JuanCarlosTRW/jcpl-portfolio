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
            </div>
          ))}
        </div>
      </Reveal>

      {/* Logo row placeholder */}
      <Reveal delay={0.1}>
        <div className="proof-strip__logos">
          <p className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
            {servicesProofBar.logoRowLabel}
          </p>
          <div className="flex items-center justify-center gap-8 opacity-30">
            {/* Placeholder logo shapes — replace with real client logos */}
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="w-20 h-8 rounded bg-white/5 border border-[var(--border-soft)]"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
