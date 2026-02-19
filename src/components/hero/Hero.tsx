
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
      <div className="relative z-10 flex flex-col items-start max-w-[420px] w-full px-6 pt-28 pb-10 sm:max-w-[540px] sm:px-8 sm:pt-32">
	<h1 className="text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white mb-6 [text-shadow:0_2px_8px_rgba(6,13,31,0.14)]">
	  Growth Systems Built<br className="hidden md:block" />to Book Qualified Calls.
	</h1>
      </div>
    </section>
  );
}
