"use client";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudiesContent";

function useCountUp(target: string, isVisible: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!isVisible) return;
    // Try to extract a numeric value
    const match = target.match(/[\d.]+/);
    if (!match) { setDisplay(target); return; }
    const num = parseFloat(match[0]);
    const prefix = target.slice(0, target.indexOf(match[0]));
    const suffix = target.slice(target.indexOf(match[0]) + match[0].length);
    const duration = 1400;
    const steps = 60;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num * 10) / 10;
      setDisplay(prefix + (Number.isInteger(num) ? Math.round(current) : current.toFixed(1)) + suffix);
      if (step >= steps) { setDisplay(target); clearInterval(interval); }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, target]);
  return display;
}

function MetricBlock({ metric, isVisible }: { metric: { value: string; label: string }; isVisible: boolean }) {
  const display = useCountUp(metric.value, isVisible);
  return (
    <div className="flex flex-col items-center text-center py-10 px-6 group">
      <div
        className="text-5xl md:text-6xl font-bold mb-3 tabular-nums"
        style={{
          background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.03em",
        }}
      >
        {display}
      </div>
      <div className="w-8 h-px bg-[var(--brand-accent)] mb-3 opacity-60" />
      <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
        {metric.label}
      </div>
    </div>
  );
}

export default function CaseStudyResults({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 md:py-28 px-6 border-t border-white/[0.06]"
      style={{
        background: "linear-gradient(180deg, #0E0E0F 0%, #111113 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] mb-4 block">
          04 / Measured Outcomes
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          The Numbers Don't Lie
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/[0.07] rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {study.results.metrics.map((metric) => (
            <MetricBlock key={metric.label} metric={metric} isVisible={isVisible} />
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <div
            className="rounded-2xl px-7 py-6"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">Before</div>
            <div className="text-white/80 text-base">{study.beforeAfter.before}</div>
          </div>
          <div
            className="rounded-2xl px-7 py-6"
            style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.15)" }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">After</div>
            <div className="text-white/80 text-base">{study.beforeAfter.after}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
