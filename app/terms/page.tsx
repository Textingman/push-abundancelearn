import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: June 15, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Acceptance of Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            By accessing or using Abundancelearn's service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Abundancelearn provides an AI-powered information and education service accessible through www.abundancelearn.com. The Service is intended for informational purposes only and does not constitute professional advice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. SMS Communications</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            Abundancelearn offers two types of SMS messaging programs that you may opt into separately:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            <li><strong>Customer Care SMS:</strong> Transactional and support-related messages, including account updates, responses to inquiries, and service notifications.</li>
            <li><strong>Promotional Marketing SMS:</strong> Marketing communications including offers, promotions, webinar notifications, and updates about Abundancelearn products and services.</li>
          </ul>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            Opting in to either SMS program is optional and not required to use our services. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. You may opt out at any time by replying STOP to any message. Reply HELP for assistance or contact support@abundancelearn.com. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Limitation of Liability</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Abundancelearn shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. Contact</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            For questions about these Terms, contact us at support@abundancelearn.com or 1112 17th St, Santa Monica, CA 90403.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
