import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";

export default function InvestmentSection() {
  return (
    <SectionWrapper variant="surface" className="bg-[#060D1F] py-16 sm:py-20">
      <div className="text-center mb-8">
        <div className="uppercase text-[#8899BB] tracking-[0.1em] text-[0.75rem] font-semibold mb-3">INVESTMENT</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built Around Your Outcome.</h2>
        <p className="text-[#E8EDF5] max-w-xl mx-auto mb-6 text-base sm:text-lg font-medium">
          This isn't a subscription you pick off a shelf. Every engagement is scoped around your market, your baseline, and the specific outcome we're engineering toward.
        </p>
      </div>
      <div className="max-w-lg w-full bg-[#0F2049] border border-[rgba(37,99,235,0.15)] rounded-2xl p-6 sm:p-10 flex flex-col items-center mx-auto">
        <div className="uppercase text-[#8899BB] tracking-[0.1em] text-[0.75rem] font-semibold mb-2">ENGAGEMENTS START AT</div>
        <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">$2,500 / month</div>
        <div className="w-full border-t border-[rgba(37,99,235,0.15)] my-4"></div>
        <div className="text-[#E8EDF5] text-base sm:text-lg leading-7 text-center mb-6 font-medium">
          The right scope depends on your market, your current baseline, and what we're building toward. That's exactly what the strategy call is designed to figure out — before any commitment is made.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-6">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="opacity-80"><circle cx="11" cy="11" r="11" fill="#2563EB" fillOpacity="0.12"/><path d="M7 11.5l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[#8899BB] text-sm font-medium">No long-term contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="opacity-80"><circle cx="11" cy="11" r="11" fill="#2563EB" fillOpacity="0.12"/><path d="M7 11.5l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[#8899BB] text-sm font-medium">Milestone-based delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="opacity-80"><circle cx="11" cy="11" r="11" fill="#2563EB" fillOpacity="0.12"/><path d="M7 11.5l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[#8899BB] text-sm font-medium">I'll tell you upfront if it's not a fit</span>
          </div>
        </div>
        <CTAButton
          href="/apply"
          className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg py-4 px-6 font-semibold text-base sm:text-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          Apply to See If You Qualify →
        </CTAButton>
        <div className="text-[#E8EDF5] text-xs text-center mt-2 font-medium">
          Short application. I'll personally review it within 24 hours.
        </div>
        <div className="text-[#8899BB] text-xs text-center mt-2">
          Strategy call → Scope → Build → Launch → Optimize
        </div>
      </div>
    </SectionWrapper>
  );
}
