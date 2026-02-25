"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

const faqData = [
  {
    question: "I ran Google Ads before and lost money. Why would this be different?",
    answer:
      "Because ads without a conversion system are just expensive traffic. You got clicks. The website that received them was not built to close. The targeting was not built around purchase intent. The landing page was probably your home page.\n\nI've seen this exact story more times than I can count. A business owner spends $500 to $1,000, gets clicks, gets zero calls, and concludes ads don't work in their industry.\n\nThe clicks were real. Everything behind them was not built. I build it first. Then the ads run. When the funnel exists before the traffic, the calls come. The difference between losing money on ads and 46x return on ad spend is the infrastructure that receives the traffic.",
    featured: true,
  },
  {
    question: "What exactly is the Growth Architecture?",
    answer:
      "It's a complete acquisition system. Not just a website, not just ads. All of it, built together so each part makes the others stronger. Positioning, conversion website, Google Ads, AI automation, lead qualification, monthly optimization. Built once. Improved every month. It's the last marketing system you will need to think about.",
    featured: false,
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most clients receive their first booked call within 11 days of going live. The full system reaches peak efficiency at 60 to 90 days as the SEO compounds and the ad campaigns optimize. The tracking dashboard shows you every call, every cost, and every source from day one. You see exactly what is working before the first monthly review.",
    featured: false,
  },
  {
    question: "How is this different from hiring a regular agency?",
    answer:
      "An agency delivers a project and moves to the next client. I measure my success by one number: qualified calls on your calendar. If that number is not growing every month, I have not done my job. I own the full system, which means nothing falls through the gaps between vendors. And I have never sent a report full of impressions as a substitute for actual results.",
    featured: false,
  },
  {
    question: "What if it doesn't work?",
    answer:
      "If I can't move the needle in the first 90 days, I keep working until I do. I don't take clients I don't believe I can help. That's why there's an application. I review your business before agreeing to work with you, not after you have paid.",
    featured: false,
  },
  {
    question: "What does this cost?",
    answer:
      "Foundation Architecture is $2,500 to build, then $1,200 per month to maintain and optimize. Performance Engine is $2,500 per month plus ad spend minimum $500. Market Ownership is $4,000 per month plus ad spend minimum $1,500. Ad spend goes directly to Google, not to me. No long-term contracts. No hidden fees. No retainers for work not done.",
    featured: false,
  },
  {
    question: "Who is NOT a good fit?",
    answer:
      "Businesses under $5K per month in revenue. Businesses wanting a logo, a brochure site, or a one-off project. Anyone not ready to commit to a 90-day initial run. Anyone who wants to test the waters with no real system behind it.",
    featured: false,
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses generating $5K or more per month that rely too heavily on referrals and want a predictable, scalable way to get new clients from the internet. Painters, barbershops, RV rental companies, dental clinics, and any local service where the phone needs to ring with qualified buyers.",
    featured: false,
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-cg-accent-lt transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? null : i)),
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(i);
      }
    },
    [toggle]
  );

  return (
    <SectionWrapper id="faq" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label="QUESTIONS" className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          Questions Serious Buyers Ask.
        </h2>
        <p className="mt-5 text-cg-body max-w-lg mx-auto leading-[1.75] text-[18px]">
          I&apos;d rather answer the hard ones here than waste your time on a call.
        </p>
      </Reveal>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto space-y-3" role="list">
        {faqData.map((faq, i) => {
          const isOpen = activeIndex === i;

          return (
            <Reveal key={i} delay={0.04 * i}>
              <div
                role="listitem"
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  faq.featured && !isOpen
                    ? "border-[rgba(52,211,153,0.35)] bg-cg-card"
                    : isOpen
                    ? "border-[rgba(37,99,235,0.4)] border-l-[3px] border-l-cg-accent bg-cg-card-alt shadow-[0_4px_24px_rgba(37,99,235,0.06)]"
                    : "border-[rgba(255,255,255,0.07)] bg-cg-card hover:border-[rgba(37,99,235,0.25)]"
                }`}
              >
                {/* Featured label for first FAQ */}
                {faq.featured && (
                  <div className="px-5 md:px-6 pt-4 pb-0">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-[0.1em] uppercase"
                      style={{
                        background: "rgba(52,211,153,0.12)",
                        border: "1px solid rgba(52,211,153,0.3)",
                        color: "#34D399",
                      }}
                    >
                      Most common objection
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[17px] font-semibold leading-snug text-white transition-colors duration-200">
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="h-px bg-[rgba(255,255,255,0.07)] mb-4" />
                        {faq.answer.split("\n\n").map((para, j) => (
                          <p key={j} className="text-[17px] text-cg-secondary leading-[1.85] mb-3 last:mb-0">
                            {para}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Mini-CTA below FAQ */}
      <Reveal delay={0.3}>
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-cg-secondary mb-5">
            Still have a question I didn&apos;t answer? Let&apos;s talk.
          </p>
          <CTAButton
            href={ctaCopy.href}
            variant="primary"
            size="md"
            eventName="faq_cta_click"
          >
            Apply for Growth Partnership →
          </CTAButton>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
