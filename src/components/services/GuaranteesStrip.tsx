"use client";

import { servicesGuarantees } from "@/lib/content";
import { Reveal } from "@/components/motion";
import { Clock, Flag, Shield, Unlock } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  milestone: Flag,
  shield: Shield,
  unlock: Unlock,
};

export default function GuaranteesStrip() {
  return (
    <div className="guarantees-strip" role="list" aria-label="Our guarantees">
      {servicesGuarantees.map((guarantee, i) => {
        const Icon = iconMap[guarantee.icon] || Shield;
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
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
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
