import React from "react";
import { heroCopy } from "@/content/siteCopy";

export const ProofStrip = () => (
  <div className="flex flex-wrap gap-2 mt-6">
    {heroCopy.proofChips.map((chip, i) => (
      <span key={i} className="bg-neutral-800 text-primary-400 px-3 py-1 rounded text-xs font-mono">
        {chip}
      </span>
    ))}
  </div>
);
