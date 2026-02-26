

import UnicornHeroBackground from "./UnicornHeroBackground";
import BlurText from "./BlurText";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden min-h-[90vh]">
			{/* Gradient overlay for readability */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" aria-hidden="true" />
			{/* Unicorn Studio WebGL Background — z-0 */}
			<div
				className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 md:translate-x-0 md:scale-100"
				aria-hidden="true"
			>
				<div className="w-full h-full translate-x-[28vw] scale-105 md:translate-x-0 md:scale-100">
					<UnicornHeroBackground />
				</div>
			</div>

			{/* Foreground content — z-20, vertically centered */}
			<div className="absolute inset-0 flex items-center left-12 max-w-lg z-20">
				<div className="flex flex-col items-start w-full px-6 sm:px-8">
					<div className="flex flex-col gap-2 mb-6">
						{/* Eyebrow */}
						<BlurText
							text="For Service Businesses"
							className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-sv-text-muted"
							animateBy="words"
							delay={60}
						/>

						{/* Proof anchor line — NEW */}
						<div
							className="flex flex-col gap-0.5 rounded-[8px] px-3.5 py-2.5 mb-1"
							style={{
								borderLeft: "3px solid rgba(37,99,235,0.6)",
								background: "rgba(37,99,235,0.08)",
							}}
						>
							<p className="text-[13px] font-semibold text-[#93C5FD] leading-snug">
								Last result: $900 in ad spend. $41,084.85 in client revenue. Texas RV company. 30 days.
							</p>
							<p className="text-[12px] text-[#7BA6C8] leading-snug">
								Most clients see their first booked call within 11 days of going live.
							</p>
						</div>

						{/* Main Headline */}
						<BlurText
							text="Your Competitors Are Getting Calls You Should Be Getting."
							className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white mb-2"
							animateBy="words"
							delay={80}
						/>

						{/* Subhead */}
						<BlurText
							text="I build one complete system: a conversion website, Google Ads targeting people ready to hire today, and AI that qualifies leads before your phone rings. Your phone rings with buyers who already trust you before you pick up."
							className="text-[17px] text-sv-text-sub leading-[1.65] mb-2 max-w-[36ch]"
							animateBy="words"
							delay={100}
						/>
					</div>

					{/* CTA Block */}
					<div className="flex flex-col gap-4 w-full sm:w-auto mb-5">
						{/* Primary CTA */}
						<div className="flex flex-col gap-1">
							<a
								href="/apply"
								className="w-full sm:w-auto bg-sv-primary text-white font-semibold text-[15px] px-7 py-[14px] rounded-[10px] whitespace-nowrap transition-all duration-200 hover:bg-sv-primary-hov shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.5)] text-center inline-flex items-center justify-center"
							>
								Apply for Growth Partnership →
							</a>
							<p className="text-[12px] italic text-white/50 text-center sm:text-left pl-0.5">
								Short application. I review your business within 24 hours. No pitch call until I know I can help.
							</p>
						</div>

						{/* Secondary CTA */}
						<div className="flex flex-col gap-1">
							<a
								href="/results"
								className="w-full sm:w-auto bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] text-white font-medium text-[15px] px-6 py-[14px] rounded-[10px] whitespace-nowrap transition-all duration-200 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.5)] text-center inline-flex items-center justify-center"
							>
								See the $41,084.85 Result
							</a>
							<p className="text-[12px] italic text-white/50 text-center sm:text-left pl-0.5">
								Real client. Real numbers. No projections.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
