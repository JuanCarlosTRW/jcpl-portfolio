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
      "A complete, integrated system: positioning, conversion website, paid acquisition, AI automation, lead qualification, and ongoing optimization — engineered as one Growth Architecture™. Every component reinforces the others so your pipeline compounds instead of fragmenting.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses that depend on appointments and consultations — barbershops, RV rentals, dental practices, real estate, and local services. If your revenue comes from booked calls, this system applies to you.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most clients see their first qualified leads within 30 days of launch. One RV rental client generated $30,000 in revenue in month one. Timeline depends on your market, offer, and readiness.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "Agencies fragment work across siloed teams. I own the entire pipeline — strategy, website, ads, AI, booking. No coordination tax, no finger-pointing. One system, one accountable owner.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "If you don't see measurable ROI within 90 days, I continue working at no additional cost until we hit agreed targets. I can make that commitment because I control every piece of the system.",
  },
  {
    question: "What does this cost?",
    answer:
      "Engagements start at $5,000/month for the complete system — setup, management, and optimization included. Most clients see ROI within the first month. Specifics are discussed on the strategy call.",
  },
  {
    question: "Who is NOT a good fit?",
    answer:
      "Businesses under $5,000/month in revenue, companies looking for a quick logo or one-off landing page, or anyone who isn't ready to commit to a system. This is a growth partnership, not a one-time transaction.",
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
      className={`shrink-0 text-[#2563EB] transition-transform duration-300 ${
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
        <SectionLabel label="Questions" className="mb-5 text-[#8899BB]" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto text-glow-blue">
          Questions Serious Buyers Ask
        </h2>
        <p className="mt-5 text-[#E8EDF5] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
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
                    ? "border-[rgba(37,99,235,0.3)] border-l-[3px] border-l-[#2563EB] bg-[#0D1B3E] shadow-[0_4px_24px_rgba(37,99,235,0.06)]"
                    : "border-[rgba(37,99,235,0.1)] bg-[#0F2049] hover:border-[rgba(37,99,235,0.25)]"
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
                      isOpen ? "text-white" : "text-[#E8EDF5]"
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
                        <div className="h-px bg-[rgba(37,99,235,0.15)] mb-4" />
                        <p className="text-[15px] text-[#8899BB] leading-[1.75]">
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
          <p className="text-sm text-[#8899BB] mb-5">
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
