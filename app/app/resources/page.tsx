
'use client';

import Image from 'next/image';
import { Download, FileText, HelpCircle, Star, BookOpen, Lightbulb } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      id: 'ai-guide',
      title: 'Demystifying AI',
      description: 'Get to know the basics and how it can help your business',
      type: 'Free Guide',
      image: 'https://static.vecteezy.com/system/resources/previews/038/989/553/large_2x/ai-generated-craftsperson-working-in-a-pottery-workshop-shaping-clay-on-a-wheel-generated-by-ai-photo.jpg',
      file: '/resources/Home.pdf',
      icon: BookOpen,
      popular: true
    },
    {
      id: 'chatbot-sheet',
      title: 'How to Set Up a Basic AI Chatbot in 10 Minutes',
      description: 'Quick, easy steps for beginners',
      type: 'Free Sheet',
      image: 'https://media.istockphoto.com/id/985130024/photo/professional-businessman-works-on-his-desktop-computer-uses-laptop-in-the-background-busy.jpg?s=1024x1024&w=is&k=20&c=6bw6PKhTwFWh113A2dS2T1VQY9zjVSQK4sWVCRjl1p8=',
      file: '/resources/How-to-Set-Up-a-Basic-AI-Chatbot-in-10-Minutes.pdf',
      icon: FileText,
      popular: true
    },
    {
      id: 'ai-quiz',
      title: 'Are You Ready for AI?',
      description: 'Discover which AI solutions match your business needs',
      type: 'Free Quiz',
      image: 'https://thumbs.dreamstime.com/z/futuristic-dashboard-user-interface-technology-infographic-network-data-screen-diagram-graph-chart-digital-ui-panel-203989014.jpg',
      file: null, // Quiz is interactive, not a download
      icon: Lightbulb,
      popular: false
    }
  ];

  const handleDownload = (file: string, title: string) => {
    if (!file) return;
    
    const link = document.createElement('a');
    link.href = file;
    const filename = file.split('/').pop() || title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleQuiz = () => {
    window.location.href = '/quiz';
  };

  return (
    <div className="py-20 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free <span className="text-[#FFE36E]">Resources</span>
          </h1>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Start your AI journey with these helpful resources designed specifically for small business owners.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {resource.popular && (
                <div className="absolute z-10 top-4 left-4 bg-[#FFE36E] text-[#0D0D0D] px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star size={14} />
                  <span>Popular</span>
                </div>
              )}
              
              {/* Image Section */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#FFE36E] p-2 rounded-lg">
                      <resource.icon className="text-[#0D0D0D]" size={20} />
                    </div>
                    <span className="text-sm font-medium text-[#FFE36E] bg-[#FFE36E]/10 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3 line-clamp-2">
                  {resource.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {resource.description}
                </p>

                {/* CTA Button */}
                {resource.file ? (
                  <button
                    onClick={() => handleDownload(resource.file, resource.title)}
                    className="w-full bg-[#0D0D0D] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#0D0D0D]/90 transition-colors flex items-center justify-center space-x-2 group"
                  >
                    <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Free</span>
                  </button>
                ) : (
                  <button
                    onClick={handleQuiz}
                    className="w-full bg-[#FFE36E] text-[#0D0D0D] py-3 px-4 rounded-lg font-medium hover:bg-[#FFE36E]/90 transition-colors flex items-center justify-center space-x-2 group"
                  >
                    <HelpCircle size={18} className="group-hover:rotate-12 transition-transform" />
                    <span>Take Quiz</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FFE36E] to-[#FFE36E]/90 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
            Ready for Personalized AI Guidance?
          </h3>
          <p className="text-[#0D0D0D]/80 mb-6 max-w-2xl mx-auto">
            Book a consultation to get customized AI recommendations for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#0D0D0D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0D0D]/90 transition-colors"
            >
              Book Free Consultation
            </a>
            <a 
              href="/services" 
              className="bg-white text-[#0D0D0D] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors border-2 border-[#0D0D0D]"
            >
              View AI Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
