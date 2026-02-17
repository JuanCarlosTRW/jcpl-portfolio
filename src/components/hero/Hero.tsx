import UnicornHeroBackground from "./UnicornHeroBackground";
import { hero, ctaCopy } from "@/lib/content";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-center">
			{/* Unicorn Studio WebGL Background — z-0 */}
			<UnicornHeroBackground />

			{/* Foreground content — z-10 */}
			<div className="relative z-10 max-w-2xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
					{hero.headline}
				</h1>
				<p className="text-lg md:text-2xl text-white/80 mb-8 font-medium">
					{hero.subheadline}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
					<a
						href={ctaCopy.href}
						className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
						data-analytics="hero-cta"
					>
						{ctaCopy.primary}
					</a>
					<a
						href="/case-studies"
						className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 border border-white/20"
						data-analytics="hero-secondary-cta"
					>
						{ctaCopy.secondary}
					</a>
				</div>
			</div>
		</section>
	);
}
