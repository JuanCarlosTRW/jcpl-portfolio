
import UnicornHeroBackground from "./UnicornHeroBackground";

export default function Hero() {
       return (
	       <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-start">
			{/* Unicorn Studio WebGL Background — z-0 */}
			<div
				className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 md:translate-x-0 md:scale-100"
				aria-hidden="true"
			>
				<div className="w-full h-full translate-x-[28vw] scale-105 md:translate-x-0 md:scale-100">
					<UnicornHeroBackground />
				</div>
			</div>

			{/* Foreground content — z-10 */}
	       <div
		       className="relative z-10 flex flex-col items-start max-w-[420px] w-full px-6 pt-28 pb-10 sm:max-w-[540px] sm:px-8 sm:pt-32"
	       >
		       {/* Eyebrow */}
		       <div className="flex items-center gap-3 mb-6">
			       <span className="block w-8 h-px bg-white/30" />
			       <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
				       For Service Businesses
			       </span>
		       </div>
		       {/* Headline */}
			   <h1 className="text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white mb-6 [text-shadow:0_2px_8px_rgba(6,13,31,0.14)]">
			       Growth Systems Built
			       <br className="hidden md:block" />
			       to Book Qualified Calls.
		       </h1>
		       {/* Subhead */}
			   <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-[36ch]">
			       Conversion website, paid acquisition, and AI automation — engineered as one system to turn traffic into booked calls.
		       </p>
		       {/* CTA Block */}
		       <div className="flex flex-col gap-3 w-full sm:flex-row sm:flex-nowrap sm:items-center sm:w-auto mb-5">
			       <a
				       href="/apply"
				       className="w-full sm:w-auto bg-[#2563EB] text-white font-semibold text-[15px] px-7 py-[14px] rounded-[10px] whitespace-nowrap transition-colors duration-200 hover:bg-[#1D4ED8] text-center inline-flex items-center justify-center"
			       >
				       Apply for Growth Partnership →
			       </a>
			       <a
				       href="/results"
				       className="w-full sm:w-auto bg-transparent border border-white/20 text-white/85 font-medium text-[15px] px-6 py-[14px] rounded-[10px] whitespace-nowrap transition-all duration-200 hover:border-white/50 hover:text-white text-center inline-flex items-center justify-center"
			       >
				       View Results
			       </a>
		       </div>
			</div>
		</section>
	);
}
