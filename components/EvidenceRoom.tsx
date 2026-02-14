import React from "react";
import { evidenceCopy } from "@/content/siteCopy";

export const EvidenceRoom = () => (
  <section className="py-12 px-6 bg-neutral-950 text-white">
    <h2 className="text-2xl font-bold mb-8 text-primary-400">{evidenceCopy.headline}</h2>
    <div className="flex gap-2 mb-6">
      {evidenceCopy.filterChips.map((chip, i) => (
        <span key={i} className="bg-neutral-800 text-primary-400 px-3 py-1 rounded text-xs font-mono">
          {chip}
        </span>
      ))}
    </div>
    {/* TODO: Proof artifact cards, placeholder for now */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-neutral-900 rounded-xl shadow-lg p-6 text-neutral-300 text-center">
        Proof Artifact Card (TODO)
      </div>
      <div className="bg-neutral-900 rounded-xl shadow-lg p-6 text-neutral-300 text-center">
        Proof Artifact Card (TODO)
      </div>
      <div className="bg-neutral-900 rounded-xl shadow-lg p-6 text-neutral-300 text-center">
        Proof Artifact Card (TODO)
      </div>
    </div>
  </section>
);
