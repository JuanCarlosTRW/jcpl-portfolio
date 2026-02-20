"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesQuiz } from "@/lib/content";
import CTAButton from "@/components/ui/CTAButton";
import { trackEvent } from "@/lib/analytics";

type PlanName = "Foundation" | "Growth" | "Scale";

interface Props {
  onRecommend: (tier: string) => void;
}

export default function QuizRecommender({ onRecommend }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<PlanName | null>(null);

  const { questions, headline, subheadline } = servicesQuiz;
  const question = questions[step];
  const totalSteps = questions.length;

  const handleSelect = (option: (typeof question.options)[number]) => {
    setSelectedOption(option.value);
    const newAnswers = [...answers, option.value];
    setAnswers(newAnswers);

    trackEvent("services_quiz_answer", { data: { question: question.id, answer: option.value } });

    setTimeout(() => {
      if (step < totalSteps - 1) {
        setStep((s) => s + 1);
        setSelectedOption(null);
      } else {
        // Determine recommendation by counting votes
        const votes: Record<PlanName, number> = { Foundation: 0, Growth: 0, Scale: 0 };
        questions.forEach((q, qi) => {
          const answer = qi < newAnswers.length ? newAnswers[qi] : null;
          const opt = q.options.find((o) => o.value === answer);
          if (opt) votes[opt.rec]++;
        });
        const winner = (Object.keys(votes) as PlanName[]).reduce((a, b) =>
          votes[a] >= votes[b] ? a : b
        );
        setRecommendation(winner);
        onRecommend(winner);
        trackEvent("services_quiz_result", { data: { recommended_plan: winner } });
      }
    }, 250);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setRecommendation(null);
  };

  const resultData = recommendation
    ? servicesQuiz.questions[0] // just to satisfy TS
    : null;

  // Get result copy
  const resultText: Record<PlanName, { title: string; reason: string }> = {
    Foundation: { title: "We recommend: Foundation", reason: "You need a professional, conversion-ready presence before anything else." },
    Growth: { title: "We recommend: Growth", reason: "You\u2019re ready for ads, AI, and automated lead generation." },
    Scale: { title: "We recommend: Scale", reason: "You need multi-channel dominance and advanced automation." },
  };

  return (
    <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-cg-section-b p-7 md:p-9 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{headline}</h3>
        <p className="text-sm text-cg-secondary">{subheadline}</p>
      </div>

      <div className="min-h-[220px]">
        <AnimatePresence mode="wait">
          {recommendation === null ? (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Progress */}
              <div className="mb-5">
                <span className="text-[0.7rem] uppercase tracking-[0.1em] text-cg-secondary">
                  Question {step + 1} of {totalSteps}
                </span>
                <div className="h-1 bg-[rgba(255,255,255,0.06)] rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-cg-accent rounded-full transition-all duration-300"
                    style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <p className="text-base font-semibold text-white mb-4">{question.question}</p>

              <div className="space-y-2.5">
                {question.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt)}
                    disabled={selectedOption !== null}
                    className={`
                      w-full flex items-center gap-3 p-3.5 rounded-xl border text-left text-sm
                      transition-all duration-200 cursor-pointer
                      ${selectedOption === opt.value
                        ? "border-cg-accent bg-[rgba(37,99,235,0.1)]"
                        : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:border-cg-accent hover:bg-[rgba(37,99,235,0.05)] hover:translate-x-1"
                      }
                      disabled:cursor-default disabled:opacity-70
                    `}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 shrink-0 relative ${selectedOption === opt.value ? "border-cg-accent" : "border-[rgba(255,255,255,0.1)]"}`}>
                      {selectedOption === opt.value && (
                        <span className="absolute inset-[3px] bg-cg-accent rounded-full" />
                      )}
                    </span>
                    <span className="text-cg-body">{opt.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="text-center py-4"
            >
              {/* Result badge */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" aria-hidden="true">
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {resultText[recommendation].title}
              </h4>
              <p className="text-sm text-cg-body mb-6 max-w-sm mx-auto">
                {resultText[recommendation].reason}
              </p>

              <div className="flex flex-col items-center gap-3">
                <CTAButton
                  href={`/apply?tier=${encodeURIComponent(recommendation)}`}
                  eventName={`services_quiz_cta_click_${recommendation.toLowerCase()}` as "services_quiz_cta_click_foundation"}
                >
                  Apply (2 min)
                </CTAButton>
                <button
                  type="button"
                  onClick={reset}
                  className="text-xs text-cg-secondary hover:text-cg-accent transition-colors cursor-pointer"
                >
                  Retake quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
