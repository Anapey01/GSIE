import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* Geometric Hero Visual Showcase */}
        <HeroBanner />

        {/* Official GhIE History & Institutional Narrative */}
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
