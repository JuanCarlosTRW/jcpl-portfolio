import React from "react";
import { heroCopy } from "../../content/siteCopy";
import { trackEvent } from "../../lib/trackEvent";

export const HeroCommandCenter = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[60vh] bg-gradient-to-br from-neutral-900 to-black text-white px-6 py-12">
      <div className="flex-1 flex flex-col gap-4 max-w-xl">
        <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase">
          {heroCopy.eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {heroCopy.headline}
        </h1>
        <p className="text-lg md:text-xl text-neutral-300">
          {heroCopy.subheadline}
        </p>
        <div className="flex gap-3 mt-4">
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded shadow transition"
            onClick={() => trackEvent("hero_primary_cta", { location: "hero" })}
          >
            {heroCopy.primaryCTA}
          </button>
          <button
            className="bg-neutral-800 hover:bg-neutral-700 text-primary-400 font-bold py-3 px-6 rounded border border-primary-400 transition"
            onClick={() => trackEvent("hero_secondary_cta", { location: "hero" })}
          >
            {heroCopy.secondaryCTA}
          </button>
        </div>
        <div className="text-xs text-neutral-400 mt-2">
          {heroCopy.primaryMicrocopy}
        </div>
        <div className="text-xs text-neutral-400 mt-1">
          {heroCopy.secondaryMicrocopy}
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {heroCopy.proofChips.map((chip, i) => (
            <span key={i} className="bg-neutral-800 text-primary-400 px-3 py-1 rounded text-xs font-mono">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        {/* TODO: Command-center visual, animated flow from 3 pillars to pipeline. Placeholder for now. */}
        <div className="w-80 h-80 bg-neutral-900 rounded-xl shadow-lg flex items-center justify-center text-primary-400 text-lg font-bold">
          Command Center Visual (TODO)
        </div>
      </div>
    </section>
  );
};
