
import Image from 'next/image';
import Link from 'next/link';
import { Award, Clock, Users, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Small Businesses Helped'
    },
    {
      icon: Clock,
      number: '10+',
      label: 'Years Experience'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Client Satisfaction'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'Average Cost Savings'
    }
  ];

  const values = [
    {
      title: 'Simplicity First',
      description: 'We believe AI should be accessible to everyone, not just tech experts. We break down complex concepts into simple, actionable steps.'
    },
    {
      title: 'Practical Solutions',
      description: 'No theoretical fluff. Every recommendation we make is tested, practical, and designed to deliver real business results.'
    },
    {
      title: 'Local Expertise',
      description: 'As part of your community, we understand the unique challenges local businesses face and tailor our solutions accordingly.'
    },
    {
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end after the workshop. We provide ongoing guidance to ensure your AI implementation succeeds.'
    }
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-[#FFE36E]">Mark</span>
            </h1>
            <h2 className="text-2xl text-[#BDBDBD] mb-6">
              Your AI Partner for Small Business Success
            </h2>
            <p className="text-lg text-[#BDBDBD] mb-8 leading-relaxed">
              With years of experience in advertising and telecoms, I've seen firsthand how 
              technology can transform businesses. Now, I'm here to help small business owners 
              like you harness the power of AI to save time, cut costs, and grow your business.
            </p>
            <p className="text-lg text-[#BDBDBD] mb-8 leading-relaxed">
              I understand that as a small business owner, you don't have time for complicated 
              tech solutions or lengthy implementation processes. That's why I focus on practical, 
              easy-to-understand AI tools that deliver immediate value.
            </p>
            <Link href="/contact" className="btn-primary">
              Let's Talk About Your Business
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/mark-collis-portrait.jpg"
                alt="Mark Collis - AI Consultant for Small Businesses Action Figure"
                fill
                className="object-contain bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#FFE36E] p-4 rounded-full w-fit mx-auto mb-4">
                <stat.icon className="text-[#0D0D0D]" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-[#BDBDBD]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Me */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Why Choose <span className="text-[#FFE36E]">Me?</span>
          </h2>
          <p className="text-xl text-[#BDBDBD] text-center mb-12 max-w-3xl mx-auto">
            I'm not just another tech consultant. I'm a business partner who understands 
            the real challenges small businesses face.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-[#1A1A1A] rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">My Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Advertising & Marketing</h3>
              <p className="text-[#BDBDBD] mb-6">
                Years of experience helping businesses understand their customers and create 
                compelling marketing strategies. This background gives me unique insight into 
                how AI can enhance customer communication and content creation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Telecommunications</h3>
              <p className="text-[#BDBDBD] mb-6">
                Deep understanding of how technology transforms business operations. I've seen 
                the evolution from basic automation to sophisticated AI systems, and I know 
                what works in real-world business environments.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            My <span className="text-[#FFE36E]">Philosophy</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-[#BDBDBD] mb-8 leading-relaxed">
              "AI doesn't have to be complicated or expensive. The best AI solutions are the ones 
              that solve real problems and pay for themselves quickly. My job is to help you find 
              those solutions and implement them successfully."
            </p>
            <div className="bg-[#FFE36E] p-8 rounded-lg text-[#0D0D0D]">
              <h3 className="text-2xl font-bold mb-4">Three Principles I Live By</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">1. Tailored to You</h4>
                  <p className="text-sm">Every business is different. I take time to understand your specific challenges and goals.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Hands-On Learning</h4>
                  <p className="text-sm">Interactive workshops with real examples and immediate implementation guidance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Local Expertise</h4>
                  <p className="text-sm">I'm part of your community and invested in helping local businesses thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Let's Talk About How AI Can Transform Your Business
          </h3>
          <p className="text-xl text-[#BDBDBD] mb-8 max-w-2xl mx-auto">
            Got questions? Ready to book a workshop or consultation? I'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
            <Link href="/services" className="btn-outline">
              View AI Workshops
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
