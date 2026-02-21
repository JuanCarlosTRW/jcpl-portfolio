"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 8.5l3 3 5-5.5" stroke="#5B9FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#FF7070" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const bestFor = [
  "You run a service business and your revenue is inconsistent. You know you should have more clients than you do.",
  "You are tired of being invisible online while competitors who do worse work rank above you.",
  "You want one person who owns the full system, not a web designer, an ad guy, and an SEO freelancer who all point at each other when nothing works.",
  "You are ready to invest in infrastructure that produces returns. Not a one-time project. A system.",
];
const notFor = [
  "You want the cheapest option and will shop around until you find someone who charges less.",
  "You want a website with no plan behind it and no intention to run it as an acquisition asset.",
  "You are not ready to commit to a real system. You want to test the waters with no skin in the game.",
  "Your business is under $5K per month in revenue. This system requires a baseline to build on.",
];

export default function FitCheck() {
  return (
    <SectionWrapper variant="surface" className="bg-[#060D1F] py-20">
      <Reveal className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cg-secondary mb-5">FIT CHECK</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Is This Right for You?</h2>
      </Reveal>
      <div className="grid gap-7 md:grid-cols-2 max-w-4xl mx-auto">
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-[rgba(37,99,235,0.25)] bg-cg-card p-8 h-full">
            <h3 className="text-[17px] font-bold mb-5 flex items-center gap-2 text-[#5B9FFF]">
              <CheckIcon /> This Is for You If...
            </h3>
            <ul className="space-y-4">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] text-cg-body leading-[1.7]">
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-cg-card p-8 h-full">
            <h3 className="text-[17px] font-bold mb-5 flex items-center gap-2 text-[#FF7070]">
              <XIcon /> This Is Not for You If...
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] text-cg-body leading-[1.7]">
                  <XIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
