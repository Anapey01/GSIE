import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import CreativeHero from '@/components/CreativeHero';
import CircuitTraceTransition from '@/components/CircuitTraceTransition';
import EventsSection from '@/components/EventsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* GridFolio-style Preloader customized for GhIE Platform */}
      <Preloader />

      <Navbar />
      
      <main className="flex-grow">
        {/* Creative Engineering Student Hero */}
        <CreativeHero />

        {/* Animated Circuit/Data Trace Transition flowing into Events */}
        <CircuitTraceTransition />

        {/* Minimalist Responsive Calendar & Dynamic Events Section */}
        <EventsSection />
      </main>

      <Footer />
    </div>
  );
}
