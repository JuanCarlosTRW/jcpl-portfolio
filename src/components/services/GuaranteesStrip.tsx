"use client";

import { Reveal } from "@/components/motion";

export default function GuaranteesStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mt-12">

        {/* Left: Featured standard */}
        <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-10 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
              THE NON-NEGOTIABLE
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">Verifiable Results Only.</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every result I show is from a live client account. No projections. No hypotheticals. No &ldquo;typical results may vary&rdquo; disclaimers. If I cannot back a number with a real campaign, I do not publish it. Redacted case studies are available for serious prospects before you sign anything.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-3xl font-black text-white">$30,000</p>
            <p className="text-xs text-slate-400 mt-1">Most recent verifiable result. 30 days.</p>
          </div>
        </div>

        {/* Right: Three stacked smaller standards */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
            <p className="text-base font-semibold text-white mb-2">Milestone Delivery</p>
            <p className="text-sm text-slate-400">
              Clear checkpoints at every phase. You always know exactly where things stand and what is being built.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
            <p className="text-base font-semibold text-white mb-2">No Lock-In</p>
            <p className="text-sm text-slate-400">
              You own everything I build. Month-to-month after the initial build. Stay because it works. Not because you have to.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
            <p className="text-base font-semibold text-white mb-2">Honest Fit Assessment</p>
            <p className="text-sm text-slate-400">
              If I am not the right partner for your business, I will tell you upfront. Before you pay anything. No hard sell. No wasted time.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
