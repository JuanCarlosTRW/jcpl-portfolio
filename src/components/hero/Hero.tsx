
import UnicornHeroBackground from "./UnicornHeroBackground";
import HeroCTAButtons from "./HeroCTAButtons";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-start">
			{/* Unicorn Studio WebGL Background — z-0 */}
			<UnicornHeroBackground />

			{/* Foreground content — z-10 */}
			<div className="relative z-10 flex flex-col justify-center items-start h-full min-h-[70vh] max-w-2xl pl-8 pr-4 py-24">
				{/* Headline */}
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 drop-shadow-xl text-left leading-[1.08] tracking-tight">
					Growth Systems Built to Book Qualified Calls.
				</h1>

				{/* Subheadline */}
				<p className="text-lg md:text-xl text-white/80 mb-6 font-medium text-left max-w-xl leading-relaxed">
					Conversion website, paid acquisition, and AI automation — engineered as one system to generate booked calls for service businesses.
				</p>

				{/* Micro-bullets */}
				<ul className="space-y-2 mb-8 max-w-md">
					<li className="flex items-center gap-2.5 text-[15px] text-white/70">
						<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
						Offer + positioning that converts
					</li>
					<li className="flex items-center gap-2.5 text-[15px] text-white/70">
						<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
						Funnel path + tracking that proves ROI
					</li>
					<li className="flex items-center gap-2.5 text-[15px] text-white/70">
						<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
						Automation + follow-up so leads don&#39;t leak
					</li>
				</ul>

				<HeroCTAButtons />
			</div>
		</section>
	);
}
