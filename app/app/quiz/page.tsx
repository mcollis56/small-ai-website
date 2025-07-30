
'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Star, Lightbulb, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

interface Result {
  title: string;
  description: string;
  recommendations: string[];
  color: string;
  icon: any;
}

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "How familiar are you with AI technology?",
      options: [
        { text: "Complete beginner - I've only heard the term", points: 1 },
        { text: "Some knowledge - I understand basic concepts", points: 2 },
        { text: "Moderate understanding - I know different AI types", points: 3 },
        { text: "Advanced - I understand AI implementation", points: 4 }
      ]
    },
    {
      id: 2,
      question: "What's your primary business goal for AI?",
      options: [
        { text: "I'm not sure yet - just exploring", points: 1 },
        { text: "Improve customer service efficiency", points: 3 },
        { text: "Automate repetitive business tasks", points: 4 },
        { text: "Gain competitive advantage through data insights", points: 4 }
      ]
    },
    {
      id: 3,
      question: "How many employees does your business have?",
      options: [
        { text: "Just me (solo business)", points: 2 },
        { text: "2-10 employees", points: 3 },
        { text: "11-50 employees", points: 4 },
        { text: "50+ employees", points: 4 }
      ]
    },
    {
      id: 4,
      question: "What's your monthly budget for new technology?",
      options: [
        { text: "Under $100", points: 1 },
        { text: "$100 - $500", points: 2 },
        { text: "$500 - $2,000", points: 3 },
        { text: "Over $2,000", points: 4 }
      ]
    },
    {
      id: 5,
      question: "How tech-savvy is your team?",
      options: [
        { text: "Basic - we handle email and basic software", points: 1 },
        { text: "Moderate - comfortable with most business software", points: 2 },
        { text: "Advanced - we adapt to new tech quickly", points: 3 },
        { text: "Expert - we implement and customize tech solutions", points: 4 }
      ]
    },
    {
      id: 6,
      question: "Which business area needs the most improvement?",
      options: [
        { text: "Customer communication and support", points: 3 },
        { text: "Data analysis and reporting", points: 4 },
        { text: "Process automation", points: 4 },
        { text: "Marketing and lead generation", points: 3 }
      ]
    },
    {
      id: 7,
      question: "How quickly do you need to see results?",
      options: [
        { text: "I'm in no rush - within 6+ months", points: 2 },
        { text: "Moderate timeline - within 3-6 months", points: 3 },
        { text: "Soon - within 1-3 months", points: 4 },
        { text: "Urgently - within 1 month", points: 3 }
      ]
    },
    {
      id: 8,
      question: "What's your biggest concern about AI?",
      options: [
        { text: "It's too complex for my business", points: 1 },
        { text: "Cost and return on investment", points: 2 },
        { text: "Security and privacy issues", points: 3 },
        { text: "Integration with existing systems", points: 3 }
      ]
    }
  ];

  const results: Result[] = [
    {
      title: "AI Explorer",
      description: "You're just starting your AI journey. That's perfectly fine! The most successful AI implementations start with learning the basics.",
      recommendations: [
        "Start with our 'AI Basics Workshop' to build foundational knowledge",
        "Focus on simple, low-risk AI tools like chatbots or basic automation",
        "Consider scheduling a consultation to create a personalized AI roadmap"
      ],
      color: "from-blue-500 to-purple-600",
      icon: Lightbulb
    },
    {
      title: "AI Ready",
      description: "You have good foundations and are ready to implement your first AI solutions. You understand the value and have realistic expectations.",
      recommendations: [
        "Perfect candidate for our 'Purpose Built Agent' service",
        "Start with customer service AI or process automation",
        "Consider a comprehensive AI audit to identify best opportunities"
      ],
      color: "from-green-500 to-teal-600",
      icon: CheckCircle
    },
    {
      title: "AI Accelerator",
      description: "You're well-positioned for advanced AI implementation. You have the knowledge, resources, and team to maximize AI benefits.",
      recommendations: [
        "Ready for multiple AI solutions across different business areas",
        "Consider our full AI Audit & Consultation for strategic planning",
        "Explore custom AI solutions tailored to your specific industry"
      ],
      color: "from-orange-500 to-red-600",
      icon: Star
    }
  ];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    
    const newAnswers = [...answers, questions[currentQuestion].options[selectedOption].points];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage < 40) return results[0]; // AI Explorer
    if (percentage < 75) return results[1]; // AI Ready
    return results[2]; // AI Accelerator
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  if (showResults) {
    const result = calculateResult();
    const IconComponent = result.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-20">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-[#FFE36E] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Resources
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your <span className="text-[#FFE36E]">Results</span>
            </h1>
          </div>

          {/* Results Card */}
          <div className="bg-white rounded-xl p-8 md:p-12 text-center mb-8">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center`}>
              <IconComponent size={40} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-4">{result.title}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{result.description}</p>

            <div className="text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-4 text-center">Recommended Next Steps:</h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#FFE36E] text-[#0D0D0D] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFE36E]/90 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link 
                href="/services" 
                className="bg-[#0D0D0D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0D0D]/90 transition-colors"
              >
                View AI Services
              </Link>
              <button 
                onClick={restartQuiz}
                className="border-2 border-[#0D0D0D] text-[#0D0D0D] px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0D0D] hover:text-white transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          </div>

          {/* Share Results */}
          <div className="text-center">
            <p className="text-[#BDBDBD] mb-4">Found this helpful? Share it with your team!</p>
            <div className="flex justify-center space-x-4">
              <button className="text-[#FFE36E] hover:text-white transition-colors">
                Share Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-[#FFE36E] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Are You Ready for <span className="text-[#FFE36E]">AI?</span>
          </h1>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Discover which AI solutions match your business needs with this quick assessment.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#BDBDBD]">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm text-[#BDBDBD]">{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-[#FFE36E] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-8 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedOption === index
                    ? 'border-[#FFE36E] bg-[#FFE36E]/10'
                    : 'border-gray-200 hover:border-[#FFE36E]/50 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedOption === index ? 'border-[#FFE36E] bg-[#FFE36E]' : 'border-gray-300'
                  }`}>
                    {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span className="text-gray-700 font-medium">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                selectedOption !== null
                  ? 'bg-[#0D0D0D] text-white hover:bg-[#0D0D0D]/90'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
            </button>
          </div>
        </div>

        {/* Quiz Info */}
        <div className="text-center text-[#BDBDBD]">
          <p className="flex items-center justify-center space-x-2">
            <AlertCircle size={16} />
            <span>This assessment takes about 2-3 minutes to complete</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
