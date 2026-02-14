import React from "react";
import { systemCopy } from "../../content/siteCopy";

export const SystemTimeline = () => (
  <section className="py-12 px-6 bg-neutral-950 text-white">
    <h2 className="text-2xl font-bold mb-8 text-primary-400">Presence-to-Pipeline System™</h2>
    <div className="flex flex-col md:flex-row gap-6">
      {systemCopy.steps.map((step, i) => (
        <div key={i} className="flex-1 bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col gap-2">
          <h4 className="text-lg font-bold text-primary-400">{step.title}</h4>
          <p className="text-neutral-300">{step.what}</p>
          <span className="text-xs text-neutral-500">KPI: {step.kpi}</span>
          <span className="text-xs text-neutral-400">Why: {step.why}</span>
        </div>
      ))}
    </div>
  </section>
);
