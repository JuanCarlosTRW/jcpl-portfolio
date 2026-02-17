"use client";

import { servicesRiskReversal } from "@/lib/content";
import { Reveal } from "@/components/motion";
import { Check } from "lucide-react";

export default function RiskReversal() {
  return (
    <Reveal>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white">
          {servicesRiskReversal.headline}
        </h3>
      </div>
      <div className="risk-reversal" role="list" aria-label="Why this feels safe">
        {servicesRiskReversal.points.map((point) => (
          <div key={point} className="risk-reversal__item" role="listitem">
            <Check
              size={16}
              strokeWidth={2}
              className="risk-reversal__check"
              aria-hidden="true"
            />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
