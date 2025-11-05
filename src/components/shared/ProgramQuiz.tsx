'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; score: { aspiring: number; early: number; scaling: number } }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What stage is your social enterprise at?",
    options: [
      { value: 'idea', label: 'I have an idea but haven\'t started yet', score: { aspiring: 3, early: 0, scaling: 0 } },
      { value: 'early', label: 'I\'ve launched and have early traction', score: { aspiring: 0, early: 3, scaling: 0 } },
      { value: 'growth', label: 'I\'m operating and ready to scale', score: { aspiring: 0, early: 0, scaling: 3 } },
    ],
  },
  {
    id: 2,
    question: "What's your biggest current challenge?",
    options: [
      { value: 'validation', label: 'Validating my idea and business model', score: { aspiring: 2, early: 1, scaling: 0 } },
      { value: 'funding', label: 'Securing funding and financial management', score: { aspiring: 1, early: 2, scaling: 1 } },
      { value: 'scaling', label: 'Growing my team and expanding markets', score: { aspiring: 0, early: 1, scaling: 2 } },
    ],
  },
  {
    id: 3,
    question: "How much revenue are you generating monthly?",
    options: [
      { value: 'none', label: 'No revenue yet', score: { aspiring: 2, early: 0, scaling: 0 } },
      { value: 'some', label: 'Some revenue (< $1,000/month)', score: { aspiring: 1, early: 2, scaling: 0 } },
      { value: 'growing', label: 'Growing revenue (> $1,000/month)', score: { aspiring: 0, early: 1, scaling: 2 } },
    ],
  },
];

interface ProgramResult {
  program: 'Foundation Program' | 'Growth Program' | 'Scale Program';
  description: string;
  nextSteps: string[];
  link: string;
}

export default function ProgramQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ProgramResult | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const scores = { aspiring: 0, early: 0, scaling: 0 };
      
      newAnswers.forEach((answer, index) => {
        const option = questions[index].options.find(opt => opt.value === answer);
        if (option) {
          scores.aspiring += option.score.aspiring;
          scores.early += option.score.early;
          scores.scaling += option.score.scaling;
        }
      });

      let programResult: ProgramResult;
      if (scores.aspiring > scores.early && scores.aspiring > scores.scaling) {
        programResult = {
          program: 'Foundation Program',
          description: 'Perfect for aspiring entrepreneurs validating their ideas',
          nextSteps: [
            'Join our next Idea Validation Workshop',
            'Get matched with a mentor in your industry',
            'Access our Business Model Canvas toolkit',
          ],
          link: '/programs#aspiring',
        };
      } else if (scores.scaling > scores.early) {
        programResult = {
          program: 'Scale Program',
          description: 'Ideal for established entrepreneurs ready to expand',
          nextSteps: [
            'Apply for our Strategic Growth Planning cohort',
            'Connect with expansion-focused mentors',
            'Access advanced impact measurement tools',
          ],
          link: '/programs#scaling',
        };
      } else {
        programResult = {
          program: 'Growth Program',
          description: 'Best suited for early-stage ventures seeking growth',
          nextSteps: [
            'Join our Funding Readiness Workshop',
            'Get matched with funding-experienced mentors',
            'Access our pitch deck and financial templates',
          ],
          link: '/programs#early-stage',
        };
      }

      setResult(programResult);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-accent text-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition font-semibold shadow-lg"
      >
        Find Your Perfect Program
      </button>

      {/* Quiz Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!result ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-light">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="text-sm font-medium text-secondary">
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 bg-neutral rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="font-heading font-bold text-2xl mb-6">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(option.value)}
                          className="w-full text-left p-4 rounded-lg border-2 border-neutral hover:border-secondary hover:bg-secondary/5 transition group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option.label}</span>
                            <ChevronRight className="w-5 h-5 text-text-light group-hover:text-secondary group-hover:translate-x-1 transition" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 text-text-light hover:text-foreground transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                /* Results */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="font-heading font-bold text-3xl mb-3">
                    Perfect Match: {result.program}
                  </h2>
                  <p className="text-text-light text-lg mb-8">
                    {result.description}
                  </p>

                  <div className="bg-neutral rounded-xl p-6 text-left mb-8">
                    <h3 className="font-heading font-semibold text-lg mb-4">
                      Your Next Steps:
                    </h3>
                    <ul className="space-y-3">
                      {result.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={result.link}
                      className="flex-1 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold text-center"
                    >
                      View Program Details
                    </Link>
                    <button
                      onClick={handleReset}
                      className="flex-1 border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition font-semibold"
                    >
                      Retake Quiz
                    </button>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 text-text-light hover:text-foreground transition"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

