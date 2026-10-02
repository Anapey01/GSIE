'use client';

import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import HeroChipDesign from './HeroChipDesign';

export default function CreativeHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        
        {/* Main Grid: 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[500px] lg:min-h-[580px]">
          
          {/* ========================================================
              LEFT COLUMN: Headings, Mission & Desktop CTA (~58% width)
              ======================================================== */}
          <div className="lg:col-span-7 z-20 space-y-7 relative">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-[-0.035em] leading-[1.08] font-heading">
              Empowering Next-Gen Ghanaian{' '}
              <span className="text-[#00a2e8]">Engineers</span>.
            </h1>

            {/* Context Subtext & Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Bridging academic technical training with statutory engineering standards under the Engineering Council Act 2011 (Act 819). Join the official student chapter at AAMUSTED to build industry-grade competence, access seasoned professional mentors, and participate in national symposia.
            </p>

            {/* Desktop CTA & Actions (shown on lg+ screens) */}
            <div className="hidden lg:flex items-center gap-6 pt-2">
              <a
                href="#join"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00a2e8] hover:bg-[#008bcb] text-white font-semibold text-sm tracking-[-0.01em] font-heading shadow-lg shadow-[#00a2e8]/25 hover:shadow-xl hover:shadow-[#00a2e8]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Join Student Chapter</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Chip Design on Background & Mobile CTA
              ======================================================== */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-6 lg:py-0">
            {/* Modern Processor Chip Design */}
            <HeroChipDesign />

            {/* Mobile CTA: Placed beneath modern processor on mobile screens */}
            <div className="flex lg:hidden flex-col items-center justify-center pt-8 w-full relative z-20">
              <a
                href="#join"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00a2e8] hover:bg-[#008bcb] text-white font-semibold text-sm tracking-[-0.01em] font-heading shadow-lg shadow-[#00a2e8]/25 hover:shadow-xl hover:shadow-[#00a2e8]/35 active:translate-y-0 transition-all duration-200"
              >
                <span>Join Student Chapter</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            FAR-RIGHT VERTICAL SOCIAL RAIL (Floating on Desktop)
            ======================================================== */}
        <div className="hidden xl:flex flex-col items-center gap-3 absolute right-0 top-1/2 -translate-y-1/2 z-30">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-[#00a2e8] hover:text-white hover:border-[#00a2e8] transition-all shadow-sm"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-[#00a2e8] hover:text-white hover:border-[#00a2e8] transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-[#00a2e8] hover:text-white hover:border-[#00a2e8] transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
