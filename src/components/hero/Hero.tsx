import UnicornHeroBackground from "./UnicornHeroBackground";
import { hero, ctaCopy } from "@/lib/content";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-center">
			{/* Unicorn Studio WebGL Background — z-0 */}
			<UnicornHeroBackground />

			{/* Dark overlay for text readability — z-[1] */}
			<div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

			{/* Foreground content — z-10 */}
			<div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
					{hero.headline}
				</h1>
				<p className="text-lg md:text-2xl text-white/80 mb-8 font-medium">
					{hero.subheadline}
				</p>
				<a
					href={ctaCopy.href}
					className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
					data-analytics="hero-cta"
				>
					{hero.cta}
				</a>
			</div>
		</section>
	);
}
