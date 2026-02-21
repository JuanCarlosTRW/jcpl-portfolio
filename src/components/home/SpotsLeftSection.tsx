import CTAButton from "@/components/ui/CTAButton";

export default function SpotsLeftSection() {
  return (
    <section className="bg-cg-section-a py-16 md:py-20 text-center">
      <div className="max-w-xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">3 Spots Left This Quarter. One Could Be Yours.</h2>
        <p className="text-cg-body text-lg mb-6">
          Every week without a system is pipeline you will not recover. Apply now. If there is a fit, I will reply within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CTAButton href="/apply" size="lg">
            Apply for Growth Partnership →
          </CTAButton>
          <CTAButton href="/results" variant="secondary" size="md">
            See Results
          </CTAButton>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {["Reply within 24 hours", "No long-term contracts", "3 spots per quarter"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs text-cg-secondary">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-cg-accent">
                <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M3.8 6 L5.3 7.5 L8.2 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
