"use client";

import Link from "next/link";

/* ─── Proof Snapshot Data ─── */
const campaignMetrics = [
  { number: "33x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $30K revenue" },
];

/* ─── Shared bullet icon ─── */
function BulletCheck() {
  return (
    <svg
      className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5 8l2.5 2.5 4-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InfrastructureTiers() {
  return (
    <>
      {/* ── Main Tiers Section ── */}
      <section id="tiers" className="w-full bg-[#080C14] py-24 px-4">

        {/* PART 1: Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
            THE INFRASTRUCTURE STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Three Systems. Built Around Revenue Stage.
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Each tier is designed for a specific growth phase. Apply only if you meet the stage requirements.
          </p>
        </div>

        {/* PART 2: Metrics Strip */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 mb-16 border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="py-8 px-8 text-center border-r border-white/[0.06] last:border-r-0">
            <p className="text-3xl font-semibold text-white tracking-tight">$30,000</p>
            <p className="text-xs text-slate-500 mt-1 tracking-wide">Revenue in 30 days</p>
          </div>
          <div className="py-8 px-8 text-center border-r border-white/[0.06] last:border-r-0">
            <p className="text-3xl font-semibold text-white tracking-tight">$33</p>
            <p className="text-xs text-slate-500 mt-1 tracking-wide">Average cost per booked call</p>
          </div>
          <div className="py-8 px-8 text-center border-r border-white/[0.06] last:border-r-0">
            <p className="text-3xl font-semibold text-white tracking-tight">11 days</p>
            <p className="text-xs text-slate-500 mt-1 tracking-wide">Median time to first booked call</p>
          </div>
        </div>

        {/* PART 3: Tier Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* CARD 1: Foundation Architecture */}
          <div className="relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0D1117] p-8 transition-all duration-200 hover:border-white/[0.14] hover:-translate-y-[2px]">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
              TIER 01
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">Foundation Architecture</h3>
            <p className="text-sm text-slate-400 mb-5 leading-snug">
              Built before the first ad dollar runs.
            </p>
            <span className="inline-block text-xs text-slate-400 bg-white/[0.05] border border-white/[0.07] rounded-md px-3 py-1.5 mb-6">
              For businesses making under $15K/month
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              {[
                "Conversion-focused website built for your market",
                "Local SEO and AI search buildout",
                "Booking flow and calendar integration",
                "Lead tracking and analytics setup",
                "Infrastructure documentation delivered on completion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <BulletCheck />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="text-xs text-slate-600 border-t border-white/[0.05] pt-4 mb-6">
                Paid traffic not included. Foundation must exist before ads run.
              </p>
              <Link
                href="/apply"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Apply for Foundation Architecture →
              </Link>
            </div>
          </div>

          {/* CARD 2: Performance Engine */}
          <div className="order-first md:order-none relative flex flex-col rounded-2xl border border-white/[0.12] bg-[#111827] p-8 transition-all duration-200 hover:border-white/[0.14] hover:-translate-y-[2px]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-[0.15em] bg-white text-black px-3 py-1 rounded-full uppercase">
              RECOMMENDED
            </span>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
              TIER 02
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">Performance Engine</h3>
            <p className="text-sm text-slate-400 mb-5 leading-snug">
              Predictable booked calls. Tracked cost per call.
            </p>
            <span className="inline-block text-xs text-slate-400 bg-white/[0.05] border border-white/[0.07] rounded-md px-3 py-1.5 mb-6">
              For businesses making $10K–$30K/month
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              {[
                "Everything in Foundation Architecture",
                "Google Ads campaign architecture (intent-based)",
                "Dedicated landing pages per service and city",
                "AI voice agent for after-hours call capture",
                "Weekly performance optimization loop",
                "Monthly full-funnel growth report",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <BulletCheck />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 border border-white/[0.06] rounded-lg px-4 py-3 mb-4 leading-relaxed">
              Triple W Rentals. $900 ad spend. $30,000 revenue. 30 days.
            </p>
            <p className="text-xs text-slate-600 mb-6">
              Requires minimum $500/month ad spend. 90-day commitment.
            </p>
            <Link
              href="/apply"
              className="block w-full bg-white text-black text-sm font-semibold py-3 rounded-lg hover:bg-slate-100 transition-colors text-center"
            >
              Apply for Performance Engine
            </Link>
            <p className="text-xs text-slate-600 text-center mt-2">
              I review every application personally. Reply within 24 hours.
            </p>
          </div>

          {/* CARD 3: Market Ownership */}
          <div className="relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0D1117] p-8 transition-all duration-200 hover:border-white/[0.14] hover:-translate-y-[2px]">
            <span className="inline-block text-[10px] font-semibold tracking-[0.2em] text-amber-500/80 bg-amber-500/[0.08] border border-amber-500/20 rounded-md px-2.5 py-1 mb-4 uppercase">
              BY APPLICATION ONLY
            </span>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
              TIER 03
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">Market Ownership</h3>
            <p className="text-sm text-slate-400 mb-5 leading-snug">
              Limit competition structurally.
            </p>
            <span className="inline-block text-xs text-slate-400 bg-white/[0.05] border border-white/[0.07] rounded-md px-3 py-1.5 mb-6">
              For businesses making $25K–$50K/month
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              {[
                "Everything in Performance Engine",
                "Multi-city expansion structure",
                "Competitor gap targeting and SEO dominance buildout",
                "Priority weekly strategy call",
                "Market exclusivity. Two clients per city. No exceptions.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <BulletCheck />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="text-xs text-amber-500/60 border border-amber-500/15 rounded-lg px-4 py-3 mb-6 leading-relaxed">
                Hard limit: two clients per niche per city. When both slots are filled, this tier closes.
              </p>
              <Link
                href="/apply"
                className="text-sm text-amber-500/70 hover:text-amber-400 transition-colors"
              >
                Apply for this tier →
              </Link>
            </div>
          </div>
        </div>

        {/* PART 4: Below-cards disclaimer */}
        <div className="max-w-6xl mx-auto text-center mt-8">
          <p className="text-xs text-slate-600">
            No long-term contracts after the initial build. No hidden fees. No retainers for work not done.
          </p>
        </div>

      </section>

      {/* ── Proof Snapshot Strip (outside the section wrapper) ── */}
      <div className="w-full bg-[#080C14] px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Block 1: Before / After */}
          <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/40">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">BEFORE / AFTER</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                  BEFORE
                </span>
                <p className="text-sm text-slate-400">Bookings inconsistent. Website looked unprofessional. Most clients came from word of mouth.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                  AFTER
                </span>
                <p className="text-sm text-slate-400">Booking calendar full. New clients find them through search. Clients compliment the website on arrival.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">Barbershop. Local SEO + website rebuild.</p>
            <p className="text-sm text-slate-400 italic mt-2">Juan has been an amazing help.</p>
          </div>

          {/* Block 2: Outcome Summary */}
          <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/40">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">WHAT THIS LOOKS LIKE</p>
            <h4 className="text-xl font-bold text-white mb-4 leading-snug">A Full Calendar. Calls From Strangers. Zero Chasing.</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">Website rebuilt for conversion. SEO targeting buyers in your city. Paid campaigns running with tracked cost per call.</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">The system runs whether you are on a job or not.</p>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">Results depend on market size, ad spend, and service type. Specifics reviewed on application call.</p>
          </div>

          {/* Block 3: Campaign Metrics */}
          <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/40">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">CAMPAIGN METRICS</p>
            {campaignMetrics.map(({ number, label }) => (
              <div key={number} className="flex justify-between items-center py-2 border-b border-slate-700 last:border-0">
                <p className="text-white font-bold text-sm">{number}</p>
                <p className="text-slate-500 text-xs">{label}</p>
              </div>
            ))}
            <p className="text-xs text-slate-500 mt-4">Triple W Rentals. Texas. Google Ads.</p>
            <p className="text-xs text-blue-400/80 mt-2 font-medium">Triple W Rentals now dominates the RV rental niche across Texas.</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 text-center mt-6 max-w-6xl mx-auto">
          All results are from live client accounts. Updated as new data becomes available.
        </p>
      </div>
    </>
  );
}
