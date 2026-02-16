"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

const faqData = [
  {
    question: "What exactly is the Presence-to-Pipeline System™?",
    answer:
      "A 6-phase growth system that turns your online presence into qualified booked calls. It covers positioning, conversion website, traffic activation, AI automation, qualification, and ongoing optimization — all under one roof.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses that rely on appointments and consultations: barbershops, RV rental operations, dental practices, real estate, and local services. If your revenue depends on booked calls, this system applies.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most clients generate their first qualified leads within 30 days of launch. One client generated $20,000 in confirmed bookings in month one. Timeline depends on your market and readiness.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "Agencies hand off pieces to siloed teams. I own the entire pipeline — strategy, website, ads, AI, booking. No fragmented vendors, no coordination tax, no finger-pointing. One system, one owner.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "If you don't see measurable ROI in 90 days, I continue working at no additional cost until we hit the agreed targets. I can make that commitment because I control the entire system.",
  },
  {
    question: "What does this cost?",
    answer:
      "Engagements start at $5,000/month for the complete system — setup, management, and optimization included. Most clients see ROI within the first month. Specifics are discussed on the strategy call.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <SectionWrapper id="faq">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="Questions" className="mb-5" />
        <h2 className="heading-2 max-w-lg mx-auto">
          Before You Reach Out
        </h2>
      </Reveal>

      {/* Accessible accordion */}
      <div className="max-w-2xl mx-auto" role="list">
        {faqData.map((faq, i) => {
          const isOpen = activeIndex === i;
          const panelId = `faq-panel-${i}`;
          const triggerId = `faq-trigger-${i}`;

          return (
            <Reveal key={i} delay={0.03 * i}>
              <div
                className={`border-b border-[var(--border-soft)] ${
                  i === 0 ? "border-t" : ""
                }`}
                role="listitem"
              >
                <button
                  id={triggerId}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-full py-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <h3 className="text-[15px] font-medium text-[var(--text-primary)] leading-snug pr-4 group-hover:text-[var(--brand-alt)] transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-[var(--text-muted)] text-lg shrink-0 transition-transform duration-200 select-none ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}