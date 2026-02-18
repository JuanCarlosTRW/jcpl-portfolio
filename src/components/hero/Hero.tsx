
import UnicornHeroBackground from "./UnicornHeroBackground";
import { Button } from "../ui/Button";
import { CheckCircle } from "lucide-react";

export default function Hero() {
       return (
	       <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-start">
		       {/* Unicorn Studio WebGL Background — z-0 */}
		       <UnicornHeroBackground />

		       {/* Foreground content — z-10 */}
		       <div className="relative z-10 flex flex-col justify-center items-start h-full min-h-[70vh] max-w-[620px] pl-8 pr-4 py-24 mx-auto">
			       {/* Eyebrow */}
			       <div className="text-xs uppercase tracking-widest text-white/60 mb-3 font-semibold">
				       FOR SERVICE BUSINESSES
			       </div>
			       {/* Headline */}
			       <h1 className="text-[2.7rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-white mb-5">
				       Growth Systems Built
				       <br className="hidden md:block" />
				       to Book Qualified Calls.
			       </h1>
			       {/* Subhead */}
			       <p className="text-lg md:text-xl text-white/85 max-w-[52ch] leading-[1.6] mb-6">
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
			       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 w-full">
				       <Button
					       variant="primary"
					       href="/apply"
					       className="sm:min-w-[240px]"
				       >
					       Apply for Growth Partnership
				       </Button>
				       <Button
					       variant="secondary"
					       href="/case-studies"
					       className="sm:min-w-[180px]"
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
