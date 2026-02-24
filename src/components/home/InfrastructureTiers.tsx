"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── KPI Strip Data ─── */
const kpiItems = [
  { number: "$30,000", label: "Revenue generated in 30 days from $900 ad spend" },
  { number: "$33", label: "Average cost per qualified call. Q4 2025." },
  { number: "11 days", label: "Median time from launch to first booked call" },
];

/* ─── Proof Snapshot Data ─── */
const campaignMetrics = [
  { number: "33x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $30K revenue" },
];

export default function InfrastructureTiers() {
  return (
    <SectionWrapper id="tiers" variant="alt" className="border-b border-slate-700/40">

      {/* ── 1A: Section Header ── */}
      <Reveal className="max-w-2xl mb-12 text-center lg:text-left">
        <SectionLabel label="THE INFRASTRUCTURE STACK" className="mb-5" />
        <h2 className="text-[clamp(30px,4vw,48px)] font-[800] text-white leading-[1.15] tracking-[-0.025em]">
          Three Tiers. Built Around Where You Are Right Now.
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mt-4 mb-12">
          Most businesses fail at paid acquisition because they skip the foundation. Each tier below is designed for a specific revenue stage. Read the constraints before applying.
        </p>
      </Reveal>

      {/* ── 1B: KPI Anchor Strip ── */}
      <div className="w-full border-y border-slate-700 bg-slate-800/30 py-6 mb-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
        {kpiItems.map(({ number, label }) => (
          <div key={number} className="flex flex-col items-center justify-center text-center px-6 py-4 sm:py-0">
            <p className="text-3xl font-black text-white">{number}</p>
            <p className="text-xs text-slate-400 mt-1 max-w-[140px]">{label}</p>
          </div>
        ))}
      </div>

      {/* ── 1C: Three-Tier Card Layout ── */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">

        {/* Card 1: Foundation Architecture — Left, 27% */}
        <div className="w-full lg:w-[27%] lg:mt-5 bg-slate-800/40 border border-slate-700 rounded-2xl p-6 flex flex-col">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">TIER 01</p>
          <h3 className="text-xl font-bold text-white mb-2">Foundation Architecture</h3>
          <p className="text-sm text-slate-400 mb-6">
            The infrastructure layer. Built before the first ad dollar runs.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700 text-xs text-slate-300 font-medium mb-6 w-fit">
            Live in 4 weeks
          </span>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">FOR</p>
          <p className="text-sm text-slate-400 mb-6">
            Service businesses at $5K to $15K/month. Referral-dependent. No consistent digital presence.
          </p>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">INCLUDES</p>
          <ul>
            {[
              "Conversion website built for your market",
              "Local SEO and GEO (AI search) buildout",
              "AI lead qualification chatbot",
              "Booking flow and calendar integration",
            ].map((item) => (
              <li key={item} className="text-sm text-slate-300 pl-3 border-l-2 border-slate-600 mb-2">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-1">NOT FOR YOU IF</p>
            <p className="text-xs text-slate-500">
              You are already running ads. Fix the foundation before spending on traffic.
            </p>
          </div>

          <Link
            href="/apply"
            className="mt-auto pt-6 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Start here if you are under $15K/month →
          </Link>
        </div>

        {/* Card 2: Performance Engine — Center, 46% */}
        <div className="w-full lg:w-[46%] lg:mt-0 bg-slate-800/80 border border-blue-500/30 rounded-2xl p-10 flex flex-col shadow-lg shadow-blue-500/10 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full">
            MOST SELECTED
          </span>

          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">TIER 02</p>
          <h3 className="text-2xl font-bold text-white mb-2">Performance Engine</h3>
          <p className="text-sm text-slate-300 mb-6">
            The full acquisition system. First qualified call within 11 days. $33 average cost per lead.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-300 font-medium mb-6 w-fit">
            $33 avg. cost per qualified call — Q4 2025
          </span>

          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">FOR</p>
          <p className="text-sm text-slate-300 mb-6">
            Service businesses at $10K to $30K/month. Inconsistent pipeline. Ready to replace referral dependency with predictable inbound.
          </p>

          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">INCLUDES</p>
          <ul>
            {[
              "Everything in Foundation Architecture",
              "Google Ads campaign architecture (intent-based)",
              "Dedicated landing pages per service and city",
              "AI voice agent for after-hours lead capture",
              "Weekly performance optimization loop",
              "Monthly full-funnel growth report",
            ].map((item) => (
              <li key={item} className="text-sm text-slate-300 pl-3 border-l-2 border-blue-500/50 mb-2">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
            <p className="text-xs text-blue-300/80 italic">
              This system generated $30,000 from $900 in ad spend. Triple W Rentals, Texas. 30 days from launch.
            </p>
          </div>

          <div className="mt-6 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-1">REQUIRES</p>
            <p className="text-xs text-slate-500">
              Minimum $500/month ad spend. 90-day commitment. This system compounds. It requires time to work.
            </p>
          </div>

          <div className="mt-auto pt-8">
            <Link
              href="/apply"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-sm text-center"
            >
              Apply for Performance Engine →
            </Link>
            <p className="text-xs text-slate-500 text-center mt-3">
              I review every application personally. Reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Card 3: Market Domination System — Right, 27% */}
        <div className="w-full lg:w-[27%] lg:mt-5 bg-slate-900/80 border border-slate-600 rounded-2xl p-6 flex flex-col">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700 border border-slate-600 text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 w-fit">
            BY APPLICATION ONLY
          </span>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">TIER 03</p>
          <h3 className="text-xl font-bold text-white mb-2">Market Domination System</h3>
          <p className="text-sm text-slate-400 mb-6">
            Built to make your competitors structurally irrelevant in your market. Two clients per city. No exceptions.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-xs text-slate-400 font-medium mb-6 w-fit">
            Market exclusivity included
          </span>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">FOR</p>
          <p className="text-sm text-slate-400 mb-6">
            Service businesses at $25K to $50K/month. Established demand. Ready to own every acquisition channel before a competitor does.
          </p>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">INCLUDES</p>
          <ul>
            {[
              "Everything in Performance Engine",
              "Expanded SEO and competitor gap targeting",
              "Multi-city or multi-service campaign architecture",
              "Priority weekly strategy call",
            ].map((item) => (
              <li key={item} className="text-sm text-slate-400 pl-3 border-l-2 border-slate-600 mb-2">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 p-3 bg-slate-900/50 rounded-lg border border-slate-600">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-1">HARD LIMIT</p>
            <p className="text-xs text-slate-500">
              Two clients per niche per city. When both slots are filled, this tier closes. No waitlist.
            </p>
          </div>

          <Link
            href="/apply"
            className="mt-auto pt-6 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Apply for this tier →
          </Link>
        </div>
      </div>

      {/* ── 1D: Proof Snapshot Strip ── */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[2fr_3fr_2fr] gap-6">

        {/* Block 1: Before / After */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">BEFORE / AFTER</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                BEFORE
              </span>
              <p className="text-sm text-slate-400">2 inbound calls per week. Zero from digital.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                AFTER
              </span>
              <p className="text-sm text-slate-400">11 inbound calls per week. $30K in 30 days.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Painting contractor. Dallas, TX.</p>
        </div>

        {/* Block 2: Pull Quote (center, larger) */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-8 flex flex-col justify-between">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">CLIENT RESULT</p>
          <p className="text-base text-white font-medium leading-relaxed">
            &ldquo;I went from 2 inbound calls a week to 11 in the first month. The system runs. I just do the work.&rdquo;
          </p>
          <p className="text-xs text-slate-500 mt-6">Owner, residential painting company, Dallas TX</p>
        </div>

        {/* Block 3: Campaign Metrics */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">CAMPAIGN METRICS</p>
          {campaignMetrics.map(({ number, label }) => (
            <div key={number} className="flex justify-between items-center py-2 border-b border-slate-700 last:border-0">
              <p className="text-white font-bold text-sm">{number}</p>
              <p className="text-slate-500 text-xs">{label}</p>
            </div>
          ))}
          <p className="text-xs text-slate-500 mt-4">Triple W Rentals. Texas. Google Ads.</p>
        </div>
      </div>

      <p className="text-xs text-slate-600 text-center mt-6">
        All results are from live client accounts. Updated as new data becomes available.
      </p>
    </SectionWrapper>
  );
}
