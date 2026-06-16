import Link from 'next/link';
import { Sparkles, BookOpen, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#F0F7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#D1FAE5', color: '#113627' }}>
              <Sparkles className="w-4 h-4" />
              Life Lessons — 100% Free
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Discover Your Path to
              <span className="block" style={{ color: '#113627' }}>True Abundance</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Abundance isn't just about money — it's about living a full, meaningful life. Explore timeless life lessons that help you grow, thrive, and find joy in every area of your life.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#113627' }}>
                Start Your Journey — Free
              </Link>
              <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#113627', borderColor: '#113627', backgroundColor: '#FFFFFF' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Life Lessons for Every Area of Abundance</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Practical wisdom to help you grow in all dimensions of life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#11362733' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Sparkles className="w-7 h-7" style={{ color: '#113627' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Mindset & Growth</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Shift your perspective and unlock the mindset that attracts abundance. Learn how your thoughts shape your reality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#11362733' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Heart className="w-7 h-7" style={{ color: '#113627' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Relationships & Purpose</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Build meaningful connections and discover your life's purpose. True abundance flows from living with intention and love.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#11362733' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <BookOpen className="w-7 h-7" style={{ color: '#113627' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Wisdom & Learning</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Access timeless lessons from life's greatest teachers. Every challenge is a lesson, every setback a stepping stone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#F0F7F4' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Ready to Live in Abundance?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Join thousands of people discovering life lessons that transform how they live, love, and grow.</p>
          <Link href="/signup" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#113627' }}>
            Start Your Journey — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
