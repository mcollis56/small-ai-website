
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | small-ai',
  description: 'Privacy policy for small-ai services and website. Learn how we protect and handle your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/ai-solution-finder" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Back to AI Solution Finder
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We collect information you provide directly to us, such as when you contact us, 
                    book a consultation, or use our AI Solution Finder.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Business information you share during consultations</li>
                    <li>Responses to our AI Solution Finder tool</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide AI consulting and workshop services</li>
                    <li>Respond to your inquiries and communications</li>
                    <li>Generate personalized AI recommendations</li>
                    <li>Improve our services and website</li>
                    <li>Send you relevant information about our services (with your consent)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our AI Solution Finder is powered by Abacus.AI. When you use this tool, 
                    your responses may be processed by Abacus.AI according to their privacy policy. 
                    We recommend reviewing their privacy practices.
                  </p>
                  <p>
                    We also use Calendly for appointment booking, which has its own privacy policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We take reasonable measures to protect your personal information from unauthorized 
                    access, use, or disclosure. However, no internet transmission is completely secure.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you have questions about this privacy policy or how we handle your information, 
                    please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Email:</strong> info@small-ai.com</p>
                    <p><strong>Location:</strong> Avalon</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any 
                    significant changes by posting the new policy on our website.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Last updated:</strong> July 2024
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-8">
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
