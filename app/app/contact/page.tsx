'use client';
import { useState } from 'react';
import ContactForm from '../../components/contact-form';
import CalendlyWidget from '../../components/calendly-widget';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  if (showCalendly) {
    return <CalendlyWidget url="https://cal.com/mark-s28jyk/30min" />;
  }

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">
      <div className="container-custom py-12 md:py-20">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Have a question or want to discuss a project? Fill out the form below or schedule a call.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#c96a3b]" />
                  <span>info@small-ai.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#c96a3b]" />
                  <span>64 Burges Road, London, UK</span>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Schedule a Free Call</h2>
              <p className="text-[#BDBDBD] mb-6">
                Book a 30-minute discovery call to discuss your business needs and see how AI can help.
              </p>
              <button
                onClick={() => setShowCalendly(true)}
                className="w-full bg-[#c96a3b] text-white py-3 px-4 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
