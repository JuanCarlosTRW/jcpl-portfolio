"use client";

import { servicesDecisionAssist } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function DecisionAssist() {
  return (
    <Reveal>
      <div className="decision-assist">
        <h3 className="text-base font-semibold text-white mb-4 text-center">
          {servicesDecisionAssist.headline}
        </h3>
        <div className="decision-assist__grid">
          {servicesDecisionAssist.options.map((opt) => (
            <div key={opt.plan} className="decision-assist__item">
              <p className="text-sm font-medium text-white mb-1">{opt.stage}</p>
              <p className="text-xs text-[#8899BB]">
                <span className="text-[#2563EB] font-semibold">{opt.plan}</span>
                {" — "}
                {opt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
