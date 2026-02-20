"use client";

import { servicesGuarantees } from "@/lib/content";
import { Reveal } from "@/components/motion";
import { Clock, Flag, Shield, Unlock } from "lucide-react";

const guarantees = [
  {
    icon: Flag,
    title: "Milestone Delivery",
    description: "Clear checkpoints at every phase. You always know exactly where things stand and what is being built.",
  },
  {
    icon: Unlock,
    title: "No Lock-In",
    description: "You own everything I build. Month-to-month after the initial build. Stay because it works. Not because you have to.",
  },
  {
    icon: Shield,
    title: "Honest Fit Assessment",
    description: "If I am not the right partner for your business, I will tell you upfront. Before you pay anything. No hard sell. No wasted time.",
  },
  {
    icon: Clock,
    title: "Verifiable Results",
    description: "Real data from real clients. Redacted case studies available for serious prospects. Every result I show is one I can back up.",
  },
];

export default function GuaranteesStrip() {
  return (
    <div className="guarantees-strip" role="list" aria-label="My standards">
      {guarantees.map((guarantee, i) => {
        const Icon = guarantee.icon;
        return (
          <Reveal key={guarantee.title} delay={0.05 * i}>
            <div className="guarantee-item" role="listitem">
              <div className="guarantee-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  {guarantee.title}
                </p>
                <p className="text-xs text-cg-secondary leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
