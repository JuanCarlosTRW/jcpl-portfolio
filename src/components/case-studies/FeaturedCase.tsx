"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import MetricPanel from "@/components/ui/MetricPanel";

interface FeaturedCaseProps {
  client: string;
  context: string;
  problem: string;
  intervention: string;
  mechanism: string;
  primaryMetric: { label: string; value: number; suffix?: string };
  supportingMetrics: { label: string; value: string }[];
}

export default function FeaturedCase({
  client,
  context,
  problem,
  intervention,
  mechanism,
  primaryMetric,
  supportingMetrics,
}: FeaturedCaseProps) {
  const metricRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!metricRef.current) return;
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: primaryMetric.value,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: metricRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => setDisplayValue(Math.round(obj.val)),
      });
    }, metricRef);
    return () => ctx.revert();
  }, [primaryMetric.value]);

  return (
    <section className="my-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
      {/* Left: Context */}
      <div>
        <div className="mb-2 text-[13px] font-semibold text-[var(--brand-accent)] uppercase tracking-wider">
          {client}
        </div>
        <div className="mb-4 text-base text-[var(--text-secondary)]">{context}</div>
        <ul className="space-y-2 mb-6">
          <li>
            <span className="font-semibold text-[var(--text-primary)]">Problem:</span>{" "}
            <span className="text-[var(--text-secondary)]">{problem}</span>
          </li>
          <li>
            <span className="font-semibold text-[var(--text-primary)]">Intervention:</span>{" "}
            <span className="text-[var(--text-secondary)]">{intervention}</span>
          </li>
          <li>
            <span className="font-semibold text-[var(--text-primary)]">Mechanism:</span>{" "}
            <span className="text-[var(--text-secondary)]">{mechanism}</span>
          </li>
        </ul>
      </div>
      {/* Right: Metrics */}
      <div className="flex flex-col items-center md:items-end">
        <MetricPanel
          ref={metricRef}
          label={primaryMetric.label}
          value={displayValue}
          suffix={primaryMetric.suffix}
        />
        <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
          {supportingMetrics.map((m, i) => (
            <div
              key={i}
              className="flex justify-between text-sm text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-1"
            >
              <span>{m.label}</span>
              <span className="font-semibold text-[var(--text-primary)]">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
