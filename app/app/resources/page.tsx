\'use client';
import { Download, BookOpen, Mic } from 'lucide-react';

const resources = [
  { type: 'Guide', title: 'The Small Business AI Starter Guide', description: 'A 10-page PDF covering the basics of AI and how you can implement it in your business today.', icon: BookOpen, link: '#' },
  { type: 'Podcast', title: 'AI in 5 Minutes', description: 'Listen to our weekly podcast where we break down complex AI news into actionable tips for small businesses.', icon: Mic, link: '#' },
  { type: 'Checklist', title: 'AI Readiness Checklist', description: "A one-page checklist to determine how ready your business is for an AI integration.", icon: Download, link: '#' },
];

const ResourcesPage = () => {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">
      <div className="container-custom py-12 md:py-20">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Free Resources</h1>
          <p className="text-lg md:text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Download our free guides, listen to our podcast, and use our tools to help you on your AI journey.
          </p>
        </header>
        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 flex flex-col hover:border-[#c96a3b] transition-colors duration-300">
              <div className="flex-grow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#c96a3b] p-3 rounded-lg">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#BDBDBD]">{resource.type}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">{resource.title}</h2>
                <p className="text-[#BDBDBD] text-sm mb-6">{resource.description}</p>
              </div>
              <a href={resource.link} className="w-full mt-auto bg-[#c96a3b] text-white py-3 px-4 rounded-full font-medium hover:opacity-90 transition-opacity text-center">
                Download Now
              </a>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
export default ResourcesPage;
