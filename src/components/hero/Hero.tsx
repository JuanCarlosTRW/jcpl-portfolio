import UnicornHeroBackground from "./UnicornHeroBackground";
import { Button } from "../ui/Button";
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[92vh] flex items-center">
      {/* Unicorn Studio WebGL Background — z-0 (UNTOUCHED) */}
      <UnicornHeroBackground />

      {/* 2-column grid: left = content, right = beam breathing room */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-0">
        {/* ── LEFT COLUMN: Content with luxury scrim ── */}
        <div className="hero-scrim relative flex flex-col justify-center items-start max-w-xl w-full px-6 sm:px-8 py-10 md:py-16 rounded-2xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-cyan-400/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
              For Service Businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] font-bold leading-[1.08] tracking-[-0.02em] text-white mb-5 max-w-[18ch]">
            Predictable Leads, On&nbsp;Autopilot.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-[42ch] leading-[1.55] mb-8">
            We build and run the system that turns cold traffic into booked
            calls—so you never worry about leads&nbsp;again.
          </p>

          {/* Bullets */}
          <ul className="mb-8 space-y-3">
            <li className="flex items-start gap-2.5 text-[15px] text-white/90 leading-snug">
              <CheckCircle className="w-[18px] h-[18px] text-cyan-400 mt-0.5 shrink-0" />
              Conversion site + offer that attracts your ideal clients
            </li>
            <li className="flex items-start gap-2.5 text-[15px] text-white/90 leading-snug">
              <CheckCircle className="w-[18px] h-[18px] text-cyan-400 mt-0.5 shrink-0" />
              Paid ads with full-funnel ROI tracking
            </li>
            <li className="flex items-start gap-2.5 text-[15px] text-white/90 leading-snug">
              <CheckCircle className="w-[18px] h-[18px] text-cyan-400 mt-0.5 shrink-0" />
              Automated follow-up so no lead slips through
            </li>
          </ul>

          {/* CTA Block */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
            <Button
              variant="primary"
              href="/apply"
              className="sm:min-w-[240px] !rounded-xl"
            >
              Apply for Growth Partnership
              <span className="ml-1.5 text-[11px] font-normal opacity-75">
                (2 min)
              </span>
            </Button>
            <Button
              variant="secondary"
              href="/case-studies"
              className="sm:min-w-[170px] !rounded-xl"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-white/70 font-medium mb-2.5">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400/80" />
              Response in 24h
            </span>
            <span className="w-px h-3 bg-white/15" />
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400/80" />
              100% confidential
            </span>
            <span className="w-px h-3 bg-white/15" />
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400/80" />
              Limited spots per quarter
            </span>
          </div>

          {/* Microcopy */}
          <p className="text-[13px] text-white/50 leading-relaxed">
            2-minute application — if there&apos;s no clear ROI path,
            I&apos;ll tell you.
          </p>
        </div>

        {/* ── RIGHT COLUMN: Empty — beam breathes here ── */}
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
