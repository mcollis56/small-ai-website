'use client';
import { useState } from 'react';
import { Check, ArrowLeft } from 'lucide-react';

const questions = [
  { question: "What's your biggest business challenge right now?", answers: ["Getting more customers", "Saving time on admin tasks", "Improving customer service", "Making better decisions"] },
  { question: "How comfortable are you with new technology?", answers: ["Very comfortable, I love new tools", "Somewhat comfortable, I can learn", "Not very, I prefer simple methods", "I avoid it if possible"] },
  { question: "What's your monthly budget for new tools?", answers: ["Less than $50", "$50 - $200", "$200 - $500", "More than $500"] },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="bg-[#0D0D0D] text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Thanks for your answers!</h1>
          <p className="text-xl text-[#BDBDBD] mb-8">An AI recommendation has been sent to your email.</p>
          <a href="/" className="btn-primary">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#BDBDBD]">Question {currentQuestion + 1} of {questions.length}</span>
            {currentQuestion > 0 && (
              <button onClick={() => setCurrentQuestion(currentQuestion - 1)} className="text-sm text-[#c96a3b] flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back
              </button>
            )}
          </div>
          <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
            <div className="bg-[#c96a3b] h-2.5 rounded-full" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-10">{questions[currentQuestion].question}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswer(answer)} className="bg-[#1A1A1A] p-6 rounded-lg text-left hover:bg-[#c96a3b] transition-colors duration-300 border border-white/10">
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuizPage;
