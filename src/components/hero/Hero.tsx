
import UnicornHeroBackground from "./UnicornHeroBackground";
import { Button } from "../ui/Button";
import { CheckCircle } from "lucide-react";

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
				{/* Micro-benefit rows */}
				<ul className="mb-8 space-y-3">
					<li className="flex items-center gap-2 text-base text-white/90">
						<CheckCircle className="w-5 h-5 text-cyan-400" />
						Offer + positioning that converts
					</li>
					<li className="flex items-center gap-2 text-base text-white/90">
						<CheckCircle className="w-5 h-5 text-cyan-400" />
						Funnel + tracking that proves ROI
					</li>
					<li className="flex items-center gap-2 text-base text-white/90">
						<CheckCircle className="w-5 h-5 text-cyan-400" />
						Automation + follow-up so leads don’t leak
					</li>
				</ul>
				{/* CTA Block */}
				<div className="flex flex-col gap-3 w-full sm:flex-row sm:gap-4 mb-5">
					<Button
						variant="primary"
						href="/apply"
						className="rounded-full py-4 w-full text-base font-semibold shadow-sm hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] transition-all motion-reduce:transition-none motion-reduce:hover:transform-none sm:min-w-[240px]"
					>
						Apply for Growth Partnership
					</Button>
					<Button
						variant="secondary"
						href="/case-studies"
						className="rounded-full py-4 w-full border-white/20 hover:bg-white/5 text-base font-semibold hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white/50 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none sm:min-w-[180px]"
					>
						View Case Studies
					</Button>
				</div>
				{/* Trust row */}
				<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80 font-medium mb-2">
					<span className="inline-flex items-center gap-2">⚡ Response in 24h</span>
					<span className="inline-flex items-center gap-2">🔒 100% confidential</span>
					<span className="inline-flex items-center gap-2">🧩 Limited spots per quarter</span>
				</div>
				{/* Microcopy */}
				<div className="text-sm text-white/70 font-normal">
					2-minute application — if there’s no clear ROI path, I’ll tell you.
				</div>
			</div>
		</section>
	);
}
