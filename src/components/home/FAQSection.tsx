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
    question: "What exactly is the Growth Architecture™?",
    answer:
      "It's a complete acquisition system — not a website, not\njust ads, not an SEO package. All three, built together and\noptimized as one. Positioning, conversion website, paid\nacquisition, AI automation, and ongoing optimization.\nEvery component is designed to reinforce the others so your\npipeline compounds instead of fragmenting."
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses generating at least $5K/month who\nare ready to stop depending on referrals and start owning\ntheir market online. If you're a tradesperson, consultant,\nclinic, or local service provider who wants a predictable\nstream of qualified calls — this is built for you."
  },
  {
    question: "How fast will I see results?",
    answer:
      "The system goes live in 2–4 weeks. Triple W Rentals\ngenerated $30,000 in their first 30 days. Elite Barbershop\nhad 90 new clients in 90 days. Results depend on your\nmarket and offer — but the system is designed to produce\nthem fast."
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "Agencies sell deliverables. I sell outcomes. An agency\nbuilds your website and moves on. I build the system,\nwatch the numbers, and optimize every month until your\ncost per lead drops and your calendar fills. I don't\nget paid to hand things off — I get paid to make them work."
  },
  {
    question: "What if it doesn't work?",
    answer:
      "Before I take on any engagement, I do a diagnostic to\nconfirm there's real opportunity in your market. If I don't\nthink I can get you results, I'll tell you — and I won't\ntake your money. I only work with businesses I'm confident\nI can help."
  },
  {
    question: "What does this cost?",
    answer:
      "Engagements start at $2,500/month. There's no long-term\ncontract — you stay because it's working, not because\nyou're locked in. Apply to see if you qualify, and I'll\nwalk you through exactly what your system would look like\nand what it would cost."
  },
  {
    question: "Who is NOT a good fit?",
    answer:
      "If you're looking for a logo, a one-page website,\nor someone to 'try a few ads,' this isn't for you.\nI work with business owners who are serious about\nowning their market — and willing to invest in doing\nit properly."
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
        <SectionLabel label="Questions" className="mb-5" />
  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          Questions Serious Buyers Ask
        </h2>
        <p className="mt-5 text-cg-body max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          Straight answers to the questions serious business owners ask before
          committing.
        </p>
      </Reveal>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto space-y-3" role="list">
        {faqData.map((faq, i) => {
          const isOpen = activeIndex === i;
          const isNotFit = faq.question.includes("NOT");

          return (
            <Reveal key={i} delay={0.04 * i}>
              <div
                role="listitem"
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[rgba(37,99,235,0.4)] border-l-[3px] border-l-cg-accent bg-cg-card-alt shadow-[0_4px_24px_rgba(37,99,235,0.06)]"
                    : "border-[rgba(255,255,255,0.07)] bg-cg-card hover:border-[rgba(37,99,235,0.25)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className={`text-[16px] font-semibold leading-snug ${
                      isOpen ? "text-white" : "text-white"
                    } transition-colors duration-200`}
                  >
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
                        <p className="text-[15px] text-cg-secondary leading-[1.75]">
                          {faq.answer}
                        </p>
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
            Still have questions? Let&apos;s talk through them on a call.
          </p>
          <CTAButton
            href={ctaCopy.href}
            variant="primary"
            size="md"
            eventName="faq_cta_click"
          >
            {ctaCopy.primary}
          </CTAButton>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
