"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesMicroQuiz } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import CTAButton from "@/components/ui/CTAButton";

type PlanName = "Foundation" | "Growth" | "Scale";

export default function MicroQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<PlanName, number>>({
    Foundation: 0,
    Growth: 0,
    Scale: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { questions, results, headline, subheadline } = servicesMicroQuiz;
  const question = questions[currentQuestion];

  const handleSelect = (option: (typeof question.options)[number]) => {
    setSelectedOption(option.value);

    // Update scores
    const newScores = { ...scores };
    (Object.keys(option.points) as PlanName[]).forEach((plan) => {
      newScores[plan] += option.points[plan];
    });
    setScores(newScores);

    // Track event
    trackEvent("services_quiz_answer", {
      data: { question: question.id, answer: option.value },
    });

    // Move to next question or show result
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
        // Determine winner
        const winner = (Object.keys(newScores) as PlanName[]).reduce((a, b) =>
          newScores[a] > newScores[b] ? a : b
        );
        trackEvent("services_quiz_result", { data: { recommended_plan: winner } });
      }
    }, 300);
  };

  const getRecommendedPlan = (): PlanName => {
    return (Object.keys(scores) as PlanName[]).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ Foundation: 0, Growth: 0, Scale: 0 });
    setShowResult(false);
    setSelectedOption(null);
  };

  const recommendedPlan = getRecommendedPlan();
  const result = results[recommendedPlan];

  const getEventName = (plan: PlanName) => {
    const eventMap = {
      Foundation: "services_quiz_cta_click_foundation",
      Growth: "services_quiz_cta_click_growth",
      Scale: "services_quiz_cta_click_scale",
    } as const;
    return eventMap[plan];
  };

  return (
    <div className="micro-quiz">
      <div className="micro-quiz__header">
        <h3 className="micro-quiz__headline">{headline}</h3>
        <p className="micro-quiz__subheadline">{subheadline}</p>
      </div>

      <div className="micro-quiz__body">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="micro-quiz__question-wrapper"
            >
              {/* Progress indicator */}
              <div className="micro-quiz__progress">
                <span className="micro-quiz__progress-text">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="micro-quiz__progress-bar">
                  <div
                    className="micro-quiz__progress-fill"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <p className="micro-quiz__question">{question.question}</p>

              <div className="micro-quiz__options">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`micro-quiz__option ${
                      selectedOption === option.value ? "micro-quiz__option--selected" : ""
                    }`}
                    disabled={selectedOption !== null}
                  >
                    <span className="micro-quiz__option-indicator" />
                    <span className="micro-quiz__option-label">{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="micro-quiz__result"
            >
              <div className="micro-quiz__result-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="micro-quiz__result-icon"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>

              <h4 className="micro-quiz__result-title">{result.title}</h4>
              <p className="micro-quiz__result-reason">{result.reason}</p>

              <div className="micro-quiz__result-actions">
                <CTAButton
                  href="/apply"
                  variant="primary"
                  eventName={getEventName(recommendedPlan)}
                >
                  {result.cta}
                </CTAButton>

                <button onClick={resetQuiz} className="micro-quiz__reset">
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
