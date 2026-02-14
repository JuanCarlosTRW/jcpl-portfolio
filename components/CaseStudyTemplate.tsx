import React from "react";
import { caseStudies } from "@/content/caseData";

export const CaseStudyTemplate = () => (
  <section className="py-12 px-6 bg-neutral-950 text-white">
    {caseStudies.map((caseData) => (
      <div key={caseData.id} className="mb-12 bg-neutral-900 rounded-xl shadow-lg p-6">
        <div className="flex gap-2 mb-4">
          {caseData.kpiStrip.map((kpi, i) => (
            <span key={i} className="bg-neutral-800 text-primary-400 px-3 py-1 rounded text-xs font-mono">
              {kpi}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <strong>Situation:</strong> {caseData.situation}
        </div>
        <div className="mb-4">
          <strong>Task:</strong> {caseData.task}
        </div>
        <div className="mb-4">
          <strong>Action:</strong> {caseData.action}
        </div>
        <div className="mb-4">
          <strong>Result:</strong> {caseData.result}
        </div>
        <div className="mb-4">
          <strong>Before vs After:</strong>
          <div className="flex gap-4 mt-2">
            <div className="flex-1 bg-neutral-800 rounded p-2 text-xs text-neutral-300">
              Before: {caseData.beforeAfter.before}
            </div>
            <div className="flex-1 bg-primary-900 rounded p-2 text-xs text-primary-400">
              After: {caseData.beforeAfter.after}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <strong>Proof Artifacts:</strong>
          <ul className="list-disc ml-6 text-xs text-neutral-400">
            {caseData.proofArtifacts.map((artifact, i) => (
              <li key={i}>{artifact}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded shadow transition">
            Apply for Similar System
          </button>
        </div>
      </div>
    ))}
  </section>
);
