"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

const faqData = [
  {
    question: "What is the Presence-to-Pipeline System™?",
    answer:
      "A proven 6-step framework that transforms your online presence into a predictable pipeline of qualified booked calls. It includes strategic positioning, conversion-optimized websites, paid traffic activation, AI automation, and booking system integration — all managed by one accountable partner.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "Service businesses that need predictable lead generation: barbershops, RV rental companies, dental practices, real estate businesses, and other local service providers. If your business relies on booking appointments or consultations, we can help.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "Most clients see their first qualified leads within 30 days of launch. One RV rental client generated $20,000 in confirmed bookings in their first month.",
  },
  {
    question: "What makes you different from a typical marketing agency?",
    answer:
      "I own the entire pipeline — from positioning to conversion website to traffic activation to AI automation to booking. No fragmented freelancers. One integrated system, one accountable partner.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "Yes. If you don't see measurable ROI in the first 90 days, I'll continue working at no additional cost until we hit the agreed targets. This confidence comes from owning the entire system end-to-end.",
  },
  {
    question: "How much does this cost?",
    answer:
      "Engagements start at $5,000/month for the complete system. This includes setup, management, and ongoing optimization. Most clients see ROI within the first month. We discuss specifics on the strategy call.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <SectionWrapper id="faq">
      <Reveal className="text-center mb-16 md:mb-20">
        <SectionLabel label="Common Questions" className="mb-6" />
        <h2 className="heading-2 max-w-lg mx-auto">
          Answers Before You Ask
        </h2>
      </Reveal>

      {/* Clean accordion — no colored badges, no category filters */}
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, i) => (
          <Reveal key={i} delay={0.04 * i}>
            <div
              className={`border-b border-[var(--border-soft)] ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full py-6 text-left flex items-center justify-between gap-4 group"
                aria-expanded={activeIndex === i}
              >
                <h3 className="text-[15px] font-medium text-[var(--text-primary)] leading-snug pr-4 group-hover:text-[var(--brand-alt)] transition-colors duration-200">
                  {faq.question}
                </h3>
                <span
                  className={`text-[var(--text-muted)] text-lg shrink-0 transition-transform duration-200 ${
                    activeIndex === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
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
        ))}
      </div>
    </SectionWrapper>
  );
}