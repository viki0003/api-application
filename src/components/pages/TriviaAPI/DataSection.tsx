"use client";

import React, { useState } from "react";
import { useTriviaApi } from "@/src/APIHooks/TriviaApiContext";
import { RefreshCcw } from "lucide-react";

const DataSection: React.FC = () => {
  const { triviaData, loading, error } = useTriviaApi();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});

  // Handle answer selection for a specific question
  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    setRevealedQuestions((prev) => ({ ...prev, [questionIndex]: true }));
  };

  // Reload Questions
  const reloadQuestions = () => {
    window.location.reload();
  };

  if (loading) return <div className="text-center py-10">Loading questions...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Trivia Quiz</h1>
      <div className="space-y-8">
        {triviaData.map((question, index) => {
          const allAnswers = [...question.incorrect_answers, question.correct_answer].sort();
          const userAnswer = selectedAnswers[index];
          const isRevealed = revealedQuestions[index];

          return (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {index + 1}. {question.question}
              </h2>
              <div className="space-y-3">
                {allAnswers.map((answer) => (
                  <label
                    key={answer}
                    className={`block p-3 rounded-md cursor-pointer border ${
                      isRevealed
                        ? answer === question.correct_answer
                          ? "border-green-500 bg-green-100"
                          : userAnswer === answer
                          ? "border-red-500 bg-red-100"
                          : "border-gray-300 bg-gray-100"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={answer}
                      disabled={isRevealed}
                      className="mr-3"
                      onChange={() => handleAnswerSelect(index, answer)}
                    />
                    {answer}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">

        <button   onClick={reloadQuestions} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 w-fit m-auto">
        <span className="flex items-center mr-3 text-[#fff] group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <RefreshCcw strokeWidth={1.3} size={18} />
              </span>
              <span className="text-white"> Reload Questions</span>
            </button>
      </div>
    </div>
  );
};

export default DataSection;
