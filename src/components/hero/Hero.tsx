import UnicornHeroBackground from "./UnicornHeroBackground";
import { Button } from "../ui/Button";
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[92vh] flex items-center">
      {/* Beam/scene background (untouched) */}
      <UnicornHeroBackground />

      {/* Scrim: left-side gradient for readability — no glass card */}
      <div
        className="
          pointer-events-none
          absolute inset-0 z-[5]
          bg-gradient-to-r
          from-black/80 via-black/50 to-transparent
          md:from-black/70 md:via-black/40
        "
        aria-hidden="true"
      />

      {/* Content grid: left = text, right = beam breathing room */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-[minmax(0,600px)_1fr] max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-0">
        {/* LEFT COLUMN: Content (no card, clean left text) */}
        <div className="flex flex-col justify-center items-start max-w-[600px] w-full py-10 md:py-20">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px bg-cyan-400/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              For Service Businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.02] tracking-[-0.03em] text-white mb-5 max-w-[20ch] [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            Growth Systems Built to Book Qualified Calls.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-[46ch] leading-[1.5] mb-8">
            Conversion website, paid acquisition, and AI automation—engineered as one system to turn traffic into booked calls.
          </p>

          {/* Bullets */}
          <ul className="mb-8 space-y-3">
            <li className="flex items-start gap-2.5 text-[15px] text-white/90 leading-snug">
              <CheckCircle className="w-[18px] h-[18px] text-cyan-400 mt-0.5 shrink-0" />
              Conversion site + offer that attracts your ideal clients
            </li>
            <li className="flex items-start gap-2.5 text-[15px] text-white/90 leading-snug">
              <CheckCircle className="w-[18px] h-[18px] text-cyan-400 mt-0.5 shrink-0" />
              Paid ads with transparent ROI tracking
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
              className="!rounded-full !px-7 !py-3.5 text-base font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-cyan-400 active:translate-y-0 transition-all"
            >
              Apply Now
              <span className="ml-1.5 text-[11px] font-normal opacity-75">(2 min)</span>
            </Button>
            <Button
              variant="secondary"
              href="/case-studies"
              className="!rounded-full !px-7 !py-3.5 text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
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
            2-minute application — if there&apos;s no clear ROI path, I&apos;ll tell you.
          </p>
        </div>

        {/* RIGHT COLUMN: Empty — beam breathes here */}
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
