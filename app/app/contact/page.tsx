
'use client';

import { useState } from 'react';
import ContactForm from '@/components/contact-form';
import CalendlyWidget from '@/components/calendly-widget';
import { Mail, MapPin, Clock, Instagram, Calendar, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-[#FFE36E]">Connect</span>
          </h1>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch and I'll show you 
            exactly how AI can save you time, money, and help you stay ahead of the competition.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="bg-[#FFE36E] p-4 rounded-full w-fit mx-auto mb-4">
              <Mail className="text-[#0D0D0D]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Get in touch directly</p>
            <a
              href="mailto:info@small-ai.com"
              className="text-[#0D0D0D] font-medium hover:text-[#FFE36E] transition-colors"
            >
              info@small-ai.com
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <div className="bg-[#FFE36E] p-4 rounded-full w-fit mx-auto mb-4">
              <MapPin className="text-[#0D0D0D]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Location</h3>
            <p className="text-gray-600 mb-4">Local expertise you can trust</p>
            <span className="text-[#0D0D0D] font-medium">Avalon</span>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <div className="bg-[#FFE36E] p-4 rounded-full w-fit mx-auto mb-4">
              <Clock className="text-[#0D0D0D]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Response Time</h3>
            <p className="text-gray-600 mb-4">Quick turnaround guaranteed</p>
            <span className="text-[#0D0D0D] font-medium">Within 24 hours</span>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="bg-[#FFE36E] p-4 rounded-full w-fit mx-auto mb-4">
                <Calendar className="text-[#0D0D0D]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
                Book Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to get started? Schedule a free 30-minute consultation to discuss 
                your specific AI needs and get personalized recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-semibold text-[#0D0D0D]">Free Consultation</h4>
                  <p className="text-sm text-gray-600">30 minutes • Virtual or In-person</p>
                </div>
                <button
                  onClick={() => setCalendlyOpen(true)}
                  className="bg-[#0D0D0D] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0D0D0D]/90 transition-colors flex items-center space-x-2"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-semibold text-[#0D0D0D]">AI Readiness Assessment</h4>
                  <p className="text-sm text-gray-600">45 minutes • Comprehensive review</p>
                </div>
                <button
                  onClick={() => setCalendlyOpen(true)}
                  className="bg-[#FFE36E] text-[#0D0D0D] px-4 py-2 rounded-lg font-medium hover:bg-[#FFE36E]/90 transition-colors flex items-center space-x-2"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>What to expect:</strong> We'll discuss your current processes, 
                identify AI opportunities, and create a tailored action plan for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow on Social Media</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/64Burgesroad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full hover:bg-[#FFE36E] transition-colors group"
            >
              <Instagram className="text-[#0D0D0D] group-hover:text-[#0D0D0D]" size={24} />
            </a>
            <a
              href="https://instagram.com/Marklionelhenry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full hover:bg-[#FFE36E] transition-colors group"
            >
              <Instagram className="text-[#0D0D0D] group-hover:text-[#0D0D0D]" size={24} />
            </a>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-16 bg-[#1A1A1A] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prefer a Quick Call?
          </h3>
          <p className="text-[#BDBDBD] mb-6">
            Sometimes it's easier to just have a conversation. Book a free 15-minute 
            discovery call to see if AI is right for your business.
          </p>
          <a
            href="mailto:mcollis56@gmail.com?subject=Quick Call Request&body=Hi Mark, I'd like to schedule a quick call to discuss AI for my business."
            className="btn-primary"
          >
            Request Quick Call
          </a>
        </div>
      </div>
      
      {/* Calendly Widget */}
      <CalendlyWidget
        url="https://calendly.com/mcollis56/30min"
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
        title="Free Consultation"
      />
    </div>
  );
};

export default ContactPage;
