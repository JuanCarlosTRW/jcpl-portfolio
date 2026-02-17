import UnicornHeroBackground from "./UnicornHeroBackground";
import { hero, ctaCopy } from "@/lib/content";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-start">
			{/* Unicorn Studio WebGL Background — z-0 */}
			<UnicornHeroBackground />

			{/* Foreground content — z-10 */}
			<div className="relative z-10 flex flex-col justify-center items-start h-full min-h-[70vh] max-w-2xl pl-8 pr-4 py-24">
				<h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl text-left leading-tight">
					{hero.headline}
				</h1>
				<p className="text-lg md:text-2xl text-white/90 mb-10 font-medium text-left max-w-xl">
					{hero.subheadline}
				</p>
				<div className="flex flex-row gap-5 w-full">
					<a
						href={ctaCopy.href}
						className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-yellow-200 via-pink-400 to-indigo-500 text-gray-900 shadow-xl hover:from-yellow-100 hover:to-indigo-400 transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
						style={{ boxShadow: "0 4px 32px 0 rgba(80, 0, 255, 0.25), 0 1.5px 8px 0 rgba(255,255,255,0.10)" }}
						data-analytics="hero-cta"
					>
						{ctaCopy.primary}
					</a>
					<a
						href="/case-studies"
						className="inline-block px-8 py-3 rounded-full font-semibold text-lg border border-white/30 text-white bg-white/10 hover:bg-white/20 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
						data-analytics="hero-secondary-cta"
					>
						{ctaCopy.secondary}
					</a>
				</div>
			</div>
		</section>
	);
}
