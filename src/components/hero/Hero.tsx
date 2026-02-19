import UnicornHeroBackground from "./UnicornHeroBackground";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[92vh] flex items-center">
      {/* Beam/scene background — UNTOUCHED */}
      <UnicornHeroBackground />

      {/* Content: strict left alignment, no overlays on beam */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col justify-center items-start max-w-[540px] py-16 md:py-24">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              For Service Businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Predictable Qualified Calls.
            <br />
            On Autopilot.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-[42ch] leading-[1.5] mb-10">
            We build and manage the complete system that turns traffic into consistent booked calls.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              Apply Now
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
