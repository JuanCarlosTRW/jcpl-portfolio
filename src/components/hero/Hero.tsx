
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
			       <h1 className="text-[2.9rem] md:text-[3.8rem] font-bold leading-[1.05] tracking-tight text-white mb-4">
			         Done-For-You Lead Engine for Service Businesses
			       </h1>
			       {/* Subhead */}
			       <p className="text-lg md:text-xl text-white/85 max-w-[52ch] leading-[1.5] mb-7">
			         We build and run the system that turns cold traffic into booked calls—so you never worry about leads again.
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
			       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 w-full">
			         <Button
			           variant="primary"
			           href="/apply"
			           className="sm:min-w-[240px]"
			         >
			           Apply for Growth Partnership
			           <span className="ml-2 text-xs font-normal text-white/80">(2-min, no spam)</span>
			         </Button>
			         <Button
			           variant="secondary"
			           href="/case-studies"
			           className="sm:min-w-[180px]"
			         >
			           View Case Studies
			         </Button>
			       </div>
			       {/* Trust/Proof Bar Placeholder */}
			       <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90 font-semibold mb-4">
			         {/* Example: Replace with real logo/stat/quote */}
			         <span className="inline-flex items-center gap-2">★ Booked 37 qualified calls in 60 days</span>
			         <span className="inline-flex items-center gap-2">— [Client Name], [Niche]</span>
			         {/* <img src="/path/to/logo.png" alt="Client Logo" className="h-6" /> */}
			       </div>
			       {/* Trust row */}
			       <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80 font-medium mb-2">
			         <span className="inline-flex items-center gap-2">⚡ Response in 24h</span>
			         <span className="inline-flex items-center gap-2">🔒 100% confidential</span>
			         <span className="inline-flex items-center gap-2">🧩 Limited spots per quarter</span>
			       </div>
			       {/* Microcopy */}
			       <div className="text-sm text-white/70 font-normal">
			         If there’s no clear ROI path, I’ll tell you.
			       </div>
		       </div>
	       </section>
       );
}
