'use client';

import React, { useState } from 'react';
import Header from '@/components/figma/Header';
import HeroSection from '@/components/figma/HeroSection';
import ExecutivesSection from '@/components/figma/ExecutivesSection';
import NewsSection from '@/components/figma/NewsSection';
import EventsCalendarSection from '@/components/figma/EventsCalendarSection';
import MembershipCTA from '@/components/figma/MembershipCTA';
import FooterSection from '@/components/figma/FooterSection';
import OvaScrollSlider from '@/components/figma/OvaScrollSlider';

import PortalModal from '@/components/PortalModal';
import Preloader from '@/components/Preloader';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#05b0f0] selection:text-[#001e5a]">
      {/* Preloader for smooth initial experience */}
      <RevealObserver />
      <Preloader />

      {/* 1. Header (Utility bar + Main navigation with preserved logo) */}
      <Header onOpenPortal={() => setIsPortalOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero (Hero feature card + 3 Community pillars) */}
        <HeroSection onOpenPortal={() => setIsPortalOpen(true)} />

        {/* 3. Student Executives (Section intro + 4 executive cards) */}
                <ExecutivesSection />

        {/* 4. News and Stories (Section intro + 3 story cards) */}
        <OvaScrollSlider />

        {/* 4. News and Stories */}
        <NewsSection />

        {/* 5. Calendar and Upcoming Events (Intro + Month calendar + 3 upcoming events) */}
        <EventsCalendarSection />

        {/* 6. Membership Invitation (High-contrast blue invitation banner) */}
        <MembershipCTA onOpenPortal={() => setIsPortalOpen(true)} />
      </main>

      {/* 7. Footer (4-column info + legal bar + preserved logo) */}
      <FooterSection />

      {/* Portal & Membership Modal */}
      <PortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </div>
  );
}
