
import UnicornHeroBackground from "./UnicornHeroBackground";
import { hero } from "@/lib/content";
import HeroCTAButtons from "./HeroCTAButtons";

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
				<HeroCTAButtons />
			</div>
		</section>
	);
}
