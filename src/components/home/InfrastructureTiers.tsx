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
      className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-slate-400"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="1.5"
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
      <section id="tiers" className="w-full bg-[#060912] py-24 px-4">

        {/* PART 1: Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
            THE INFRASTRUCTURE STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Three Systems. Built Around Revenue Stage.
          </h2>
          {/* FIX 9 */}
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Read the qualifier on each tier before applying. I only take on businesses I know I can move the needle for.
          </p>
        </div>

        {/* PART 2: Metrics Strip — FIX 1 */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-sm text-slate-500 mb-5">
            From the most recent active client account. Not projections.
          </p>
          <div className="grid grid-cols-3 rounded-xl border border-white/[0.08] divide-x divide-white/[0.08] overflow-hidden">
            <div className="py-10 px-6 text-center bg-[#0F1623]">
              <p className="text-[2.75rem] font-bold text-white tracking-tight leading-none">$30,000</p>
              <p className="text-xs text-slate-500 mt-2 tracking-wide uppercase">Revenue generated. 30 days.</p>
            </div>
            <div className="py-10 px-6 text-center bg-[#0F1623]">
              <p className="text-[2.75rem] font-bold text-white tracking-tight leading-none">$33</p>
              <p className="text-xs text-slate-500 mt-2 tracking-wide uppercase">Cost per booked call.</p>
            </div>
            <div className="py-10 px-6 text-center bg-[#0F1623]">
              <p className="text-[2.75rem] font-bold text-white tracking-tight leading-none">11 days</p>
              <p className="text-xs text-slate-500 mt-2 tracking-wide uppercase">Days to first booked call.</p>
            </div>
          </div>
        </div>

        {/* PART 3: Tier Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

          {/* CARD 1: Foundation Architecture — FIX 2, 4, 8 */}
          <div className="relative flex flex-col rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1623] p-8 h-full transition-all duration-200 hover:border-white/[0.13] hover:-translate-y-[2px]">
            <p className="text-[10px] font-medium tracking-[0.22em] text-slate-600 uppercase mb-2">
              TIER 01
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">
              Foundation Architecture
            </h3>
            <p className="text-sm text-slate-400 mb-5">
              Built before the first ad dollar runs.
            </p>
            {/* FIX 2: identity-activating badge */}
            <span className="block text-xs text-slate-300 bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 mb-7 leading-relaxed">
              Most clients come from referrals. Digital presence is minimal or nonexistent.
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-600 uppercase mb-4">
              INCLUDES
            </p>
            {/* FIX 4: outcome-framed bullets */}
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Website built to convert visitors into calls, not just look professional",
                "Local SEO so buyers in your city find you on Google before your competitors",
                "Booking flow that captures leads while you are on the job",
                "Analytics showing exactly where calls come from",
                "Full infrastructure documentation you own permanently",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletCheck />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {/* FIX 8: Tier 01 bottom section */}
            <div className="mt-auto pt-5 border-t border-white/[0.06]">
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Paid advertising is not included. This tier builds the foundation that makes ads work. Most clients move to Performance Engine within 60 days.
              </p>
              <Link
                href="/apply"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Apply for Foundation Architecture →
              </Link>
            </div>
          </div>

          {/* CARD 2: Performance Engine — FIX 2, 3, 4, 5, 10, 11 */}
          <div className="order-first md:order-none relative flex flex-col rounded-2xl border border-white/20 bg-[#141E30] p-8 h-full transition-all duration-200 hover:border-white/30 hover:-translate-y-[2px] md:-mt-4 md:-mb-4">
            {/* FIX 3: subtle top glow line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            {/* FIX 3: MOST SELECTED badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase bg-white text-black px-5 py-1.5 rounded-full shadow-lg">
                MOST SELECTED
              </span>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-slate-600 uppercase mb-2">
              TIER 02
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">
              Performance Engine
            </h3>
            <p className="text-sm text-slate-400 mb-5">
              Predictable booked calls. Tracked cost per call.
            </p>
            {/* FIX 2: identity-activating badge */}
            <span className="block text-xs text-slate-300 bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 mb-7 leading-relaxed">
              Strong work. Still waiting on the phone. No predictable way to get new clients this week.
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-600 uppercase mb-4">
              INCLUDES
            </p>
            {/* FIX 4: outcome-framed bullets */}
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Foundation Architecture",
                "Google Ads targeting buyers with purchase intent, not general traffic",
                "Dedicated landing pages per service so every ad leads somewhere that converts",
                "AI voice agent that captures calls after hours so leads never go to voicemail",
                "Weekly optimization loop so cost per call drops over time",
                "Monthly report showing revenue attributed to the system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletCheck />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {/* FIX 5: proof callout as hero */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-5 mb-5">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-500 mb-2">
                VERIFIED RESULT
              </p>
              <p className="text-white font-semibold text-base leading-snug mb-1">
                $900 in ad spend. $30,000 in revenue.
              </p>
              <p className="text-sm text-slate-400">
                Triple W Rentals, Texas. 30 days from system launch. They now hold the top position for RV rentals across their market.
              </p>
            </div>
            {/* FIX 11 */}
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Ad spend is separate from the partnership fee. Minimum $500/month. 90-day initial term.
            </p>
            {/* FIX 10: button */}
            <Link
              href="/apply"
              className="block w-full bg-white text-black text-sm font-semibold py-3.5 rounded-xl hover:bg-slate-100 transition-all duration-150 tracking-wide text-center"
            >
              Apply for Performance Engine →
            </Link>
            {/* FIX 10: sub-line */}
            <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
              Short application. No sales call unless I think it is a fit.
            </p>
          </div>

          {/* CARD 3: Market Ownership — FIX 2, 4, 6, 7 */}
          <div className="relative flex flex-col rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1623] p-8 h-full transition-all duration-200 hover:border-white/[0.14] hover:-translate-y-[2px]">
            {/* FIX 6: dot + text badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-400/70">
                BY APPLICATION ONLY
              </span>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-slate-600 uppercase mb-2">
              TIER 03
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">
              Market Ownership
            </h3>
            <p className="text-sm text-slate-400 mb-5">
              Limit competition structurally.
            </p>
            {/* FIX 2: identity-activating badge */}
            <span className="block text-xs text-slate-300 bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 mb-7 leading-relaxed">
              Proven demand. Ready to own the market before a competitor does.
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-600 uppercase mb-4">
              INCLUDES
            </p>
            {/* FIX 4: outcome-framed bullets */}
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Performance Engine",
                "Multi-city campaign architecture to expand without rebuilding from scratch",
                "Competitor gap analysis that identifies exactly where they are vulnerable",
                "SEO dominance buildout targeting every high-intent keyword in your market",
                "Priority weekly strategy call with campaign decisions made in real time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletCheck />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {/* FIX 7: scarcity block */}
            <div className="mt-auto pt-5 border-t border-white/[0.06]">
              <p className="text-xs text-amber-400/50 leading-relaxed mb-5">
                Two clients per niche per city. This is not a marketing device. I take on a second client in your niche only when the first is fully scaled. If your competitor applies first, this closes.
              </p>
              <Link
                href="/apply"
                className="text-sm text-amber-400/70 hover:text-amber-300 transition-colors"
              >
                Apply for this tier →
              </Link>
            </div>
          </div>
        </div>

        {/* PART 4: Below-cards disclaimer */}
        <div className="max-w-6xl mx-auto text-center mt-12">
          <p className="text-xs text-slate-600">
            No long-term contracts after the initial build. No hidden fees. No retainers for work not done.
          </p>
        </div>

      </section>

      {/* ── Proof Snapshot Strip (outside the section wrapper) ── */}
      <div className="w-full bg-[#060912] px-4 pb-16">
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
