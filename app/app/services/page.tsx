'use client';

import { useState } from 'react';
import Image from 'next/image';
import CalendlyWidget from '../../components/calendly-widget';
import PaymentWidget from '../../components/payment-widget';
import {
  Bot,
  MessageSquare,
  PenTool,
  Search,
  Check,
  ArrowRight,
  Calendar,
  CreditCard,
  Clock,
  Users,
  Star,
  Zap
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [currentCalendlyUrl, setCurrentCalendlyUrl] = useState('');
  const [currentServiceTitle, setCurrentServiceTitle] = useState('');
  const [currentPaymentService, setCurrentPaymentService] = useState<any>(null);

  const services = [
    {
      id: 'purpose-built-agent',
      icon: Zap,
      title: 'Purpose-Built AI Agent for You',
      price: 299,
      duration: '3-5 days',
      description: 'A custom AI agent designed to solve a specific problem in your business, delivered fast.',
      features: [
        'Detailed consultation to define the problem',
        'Development of a focused AI agent',
        'Integration with one existing tool (e.g., email, spreadsheet)',
        'Clear instructions for use',
        '30 days of email support'
      ],
      buttonText: 'Book a Call',
      buttonLink: 'https://cal.com/mark-s28jyk/purpose-build-agent' // CORRECTED LINK
    },
    {
      id: 'ai-basics',
      icon: Bot,
      title: 'AI Basics Workshop',
      price: 99,
      duration: '2 hours',
      description: 'A live, interactive workshop for you and your team to understand AI and identify opportunities.',
      features: [
        'Introduction to AI and machine learning concepts',
        'Hands-on demos of popular AI tools',
        'Brainstorming session for your business',
        'Q&A session with an AI expert',
        'Recording of the session'
      ],
      buttonText: 'Book Workshop',
      buttonLink: 'https://cal.com/mark-s28jyk/ai-audit-consultation' // CORRECTED LINK
    },
    {
      id: 'ai-strategy-consult',
      icon: MessageSquare,
      title: 'AI Strategy Consultation',
      price: 499,
      duration: '1-2 weeks',
      description: 'A comprehensive plan to integrate AI into your business for long-term growth and efficiency.',
      features: [
        'In-depth business process analysis',
        'Customized AI roadmap and strategy document',
        'Recommendations for tools and vendors',
        'Step-by-step implementation plan',
        'Follow-up session to review progress'
      ],
      buttonText: 'Book Consultation',
      buttonLink: 'https://cal.com/mark-s28jyk/ai-audit-consultation' // CORRECTED LINK
    }
  ];

  const handleBookClick = (service: any) => {
    // This function now directly opens the link in a new tab.
    if (service.buttonLink) {
      window.open(service.buttonLink, '_blank');
    }
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">
      <div className="container-custom py-12 md:py-20">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Services</h1>
          <p className="text-lg md:text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Choose a service below to get started. We offer everything from basic training to fully custom AI solutions.
          </p>
        </header>

        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 flex flex-col hover:border-[#c96a3b] transition-colors duration-300"
            >
              <div className="flex-grow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#c96a3b] p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{service.title}</h2>
                    <div className="text-sm text-[#BDBDBD]">
                      ${service.price} | {service.duration}
                    </div>
                  </div>
                </div>
                <p className="text-[#BDBDBD] mb-6 text-sm">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#FFE36E] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleBookClick(service)}
                className="w-full mt-auto bg-[#c96a3b] text-white py-3 px-4 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;
