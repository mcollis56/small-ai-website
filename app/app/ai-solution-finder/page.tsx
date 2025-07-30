
import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, MessageSquare, FileText, Lightbulb } from 'lucide-react';
import AISolutionChat from '@/components/ai-solution-chat';

export const metadata: Metadata = {
  title: 'Free AI Solution Finder | small-ai',
  description: 'Discover how AI can transform your small business. Get instant, personalized recommendations with our interactive AI Solution Builder.',
  keywords: 'AI solution finder, small business AI tools, AI recommendations, business transformation',
};

export default function AISolutionFinderPage() {
  return (
    <div className="py-20" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-[#FFE36E] p-4 rounded-full">
              <Bot className="text-[#0D0D0D]" size={48} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D0D0D] mb-6">
            Free AI <span className="text-[#FFE36E]">Solution Finder</span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover how AI can transform your small business. Chat with our AI assistant to get instant, 
            personalized recommendations and professional quotes—see the advantages firsthand!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#FFE36E] p-3 rounded-full w-fit mx-auto mb-4">
              <MessageSquare className="text-[#0D0D0D]" size={24} />
            </div>
            <h3 className="font-semibold text-[#0D0D0D] mb-2">Interactive Chat</h3>
            <p className="text-gray-600 text-sm">Get personalized AI recommendations through natural conversation</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#FFE36E] p-3 rounded-full w-fit mx-auto mb-4">
              <FileText className="text-[#0D0D0D]" size={24} />
            </div>
            <h3 className="font-semibold text-[#0D0D0D] mb-2">Instant Quotes</h3>
            <p className="text-gray-600 text-sm">Request professional PDF quotes for AI implementation services</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#FFE36E] p-3 rounded-full w-fit mx-auto mb-4">
              <Lightbulb className="text-[#0D0D0D]" size={24} />
            </div>
            <h3 className="font-semibold text-[#0D0D0D] mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Get expert advice on the best AI solutions for your business</p>
          </div>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2">AI Solution Assistant</h2>
              <p className="text-gray-600">Ask me about AI services, get recommendations, or request a quote</p>
            </div>
            <AISolutionChat />
          </div>
        </div>

        {/* Example Questions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-4 text-center">Try These Questions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">💬 "What AI solutions would work best for my restaurant?"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">📄 "I need a quote for AI chatbot implementation"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">🔍 "How can AI help automate my customer service?"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">💼 "What's the ROI of implementing AI in my business?"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Implement Your AI Solution?
          </h3>
          <p className="text-[#BDBDBD] mb-6 max-w-2xl mx-auto">
            Book a free consultation to discuss your personalized recommendations and create 
            an implementation plan that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
            <Link href="/services" className="btn-outline">
              View AI Services
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Powered by Abacus.AI | Professional AI Solutions for Small Businesses
          </p>
        </div>
      </div>
    </div>
  );
}
