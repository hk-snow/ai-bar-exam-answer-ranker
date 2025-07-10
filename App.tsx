
import React, { useState, useCallback } from 'react';
import { questions } from './data/mockData';
import { QuestionReviewer } from './components/QuestionReviewer';
import { Feedback } from './types';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNextQuestion = useCallback((feedback: Feedback) => {
    console.log(`Feedback for question ${questions[currentIndex].id}:`, feedback);

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCompleted(true);
    }
  }, [currentIndex]);

  const progress = (currentIndex / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="https://cdn.cookielaw.org/logos/77589374-55f6-4265-b440-2b4fecbfe1cf/64236ef1-906b-4715-8bb1-2c5bb16a55cb/c7f51176-a9bf-407e-9cac-cc6cb3294905/HKLogo_Blue-RGB.png" alt="Company Logo" className="h-10" />
            
          </div>
          <h1 className="text-2xl font-bold text-[#012169]">AI Answer Review</h1>
        </div>
        {!completed && (
           <div className="w-full bg-[#A6BBC8]/50 h-1.5">
             <div 
               className="bg-[#418FDE] h-1.5" 
               style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
             ></div>
           </div>
        )}
      </header>
      <main>
        {completed ? (
          <div className="max-w-3xl mx-auto text-center py-20 px-4">
             <div className="bg-white p-12 rounded-xl shadow-lg">
                <svg className="mx-auto h-16 w-16 text-[#6CC24A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="mt-4 text-3xl font-extrabold text-[#012169]">Thank You!</h2>
                <p className="mt-2 text-lg text-[#4B4F54]">You have reviewed all available questions.</p>
                <p className="mt-4 text-sm text-[#768692]">Your feedback is invaluable for improving our AI models.</p>
             </div>
          </div>
        ) : (
          <QuestionReviewer
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            onSubmit={handleNextQuestion}
          />
        )}
      </main>
    </div>
  );
};

export default App;
