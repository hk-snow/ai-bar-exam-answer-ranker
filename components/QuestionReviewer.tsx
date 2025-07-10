import React, { useState, useMemo } from 'react';
import { Question, Feedback } from '../types';
import { FEEDBACK_CRITERIA } from '../constants';

interface QuestionReviewerProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onSubmit: (feedback: Feedback) => void;
}

const DEFAULT_FEEDBACK: Feedback = {
  accuracy: 50,
  relevance: 50,
  legalReasoning: 50,
  comprehensiveness: 50,
  clarity: 50,
  comments: '',
};

export const QuestionReviewer: React.FC<QuestionReviewerProps> = ({ question, questionNumber, totalQuestions, onSubmit }) => {
  const [feedback, setFeedback] = useState<Feedback>(DEFAULT_FEEDBACK);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ 
      ...prev, 
      [name]: parseInt(value, 10) 
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(prev => ({ ...prev, comments: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback(DEFAULT_FEEDBACK);
  };

  const weightedScore = useMemo(() => {
    return FEEDBACK_CRITERIA.reduce((total, criterion) => {
      const value = feedback[criterion.id];
      return total + value * criterion.weight;
    }, 0);
  }, [feedback]);


  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
        
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#012169] uppercase">Question {questionNumber} of {totalQuestions}</p>
          <h2 className="mt-1 text-2xl font-bold text-[#4B4F54]">{question.question}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Known Good Answer */}
          <div className="border border-[#50A684]/40 bg-[#50A684]/10 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#286140] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Known Good Answer
            </h3>
            <p className="text-[#4B4F54] leading-relaxed whitespace-pre-wrap">{question.goodAnswer}</p>
          </div>

          {/* AI Generated Answer */}
          <div className="border border-[#A6BBC8] bg-gray-50 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#4B4F54] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25v-4.507c0-.144.09-.27.224-.334l6.075-2.835a.75.75 0 000-1.352L10.05.908A.75.75 0 009 1.5v4.507c0 .144-.09.27-.224.334L2.699 9.175a.75.75 0 000 1.352l6.076 2.835a.75.75 0 00.975-.664z" />
              </svg>
              AI Generated Answer
            </h3>
            <p className="text-[#4B4F54] leading-relaxed whitespace-pre-wrap">{question.aiAnswer}</p>
          </div>
        </div>

        <hr className="my-8 border-[#A6BBC8]" />

        {/* Feedback Form */}
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-[#4B4F54] mb-5">Provide Feedback</h3>
          <div className="space-y-6">
            
            {FEEDBACK_CRITERIA.map(criterion => (
              <div key={criterion.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <label htmlFor={criterion.id} className="block text-sm font-medium text-[#4B4F54]">
                    {criterion.label} <span className="font-normal text-[#768692]">({criterion.weight * 100}%)</span>
                  </label>
                  <span className="font-semibold text-[#418FDE] w-10 text-right">{feedback[criterion.id]}</span>
                </div>
                 <p className="text-xs text-[#768692] mb-2">{criterion.description}</p>
                <input
                  type="range"
                  id={criterion.id}
                  name={criterion.id}
                  min="0"
                  max="100"
                  value={feedback[criterion.id]}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-[#A6BBC8]/50 rounded-lg appearance-none cursor-pointer accent-[#012169] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#418FDE]"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#012169]/10 border border-[#012169]/30 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-[#012169]">Overall Weighted Score</h4>
              <p className="text-sm text-[#007DBA]">Final score based on your ratings and category weights.</p>
            </div>
            <p className="text-4xl font-bold text-[#012169]">{weightedScore.toFixed(2)}</p>
          </div>

          {/* Comments */}
          <div className="mt-6">
            <label htmlFor="comments" className="block text-sm font-medium text-[#4B4F54]">
              Additional Comments
            </label>
            <div className="mt-1">
              <textarea
                id="comments"
                name="comments"
                rows={4}
                value={feedback.comments}
                onChange={handleTextChange}
                className="shadow-sm focus:ring-[#418FDE] focus:border-[#418FDE] mt-1 block w-full sm:text-sm border border-[#A6BBC8] rounded-md p-2"
                placeholder="e.g., The AI answer misinterprets the concept of substantial performance..."
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#012169] hover:bg-[#007DBA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#418FDE] transition-colors"
            >
              Submit & Next Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};