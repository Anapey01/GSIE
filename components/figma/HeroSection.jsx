'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Users, Wrench, Lightbulb } from 'lucide-react';

export default function HeroSection({ onOpenPortal }) {
  return (
    <section className="w-full flex flex-col">
      {/* 1. Hero Feature (1440 x 610px, bg: #001e5a) */}
      <div className="w-full bg-[#001e5a] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto min-h-[580px] lg:h-[610px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Hero Introduction (w: 660px in 1440px container) */}
          <div className="lg:col-span-6 xl:col-span-6 px-6 sm:px-12 lg:pl-20 lg:pr-10 py-12 lg:py-16 flex flex-col justify-center">
            
            {/* Chapter overline */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-[26px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[12px] text-[#c6d5ed] tracking-[0.08em] uppercase">
                YOUR IDEAS. OUR SHARED FUTURE.
              </span>
            </div>

            {/* Hero heading */}
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-white tracking-tight mb-5">
              Great engineers<br />
              start with<br />
              connection.
            </h1>

            {/* Hero description */}
            <p className="font-sans font-normal text-base sm:text-lg lg:text-[19px] text-[#c6d5ed] leading-relaxed max-w-[480px] mb-8">
              Find your people. Build your skills. Turn bold ideas into real impact with a student engineering community in Ghana.
            </p>

            {/* Hero actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <button
                type="button"
                onClick={() => onOpenPortal ? onOpenPortal() : null}
                className="inline-flex items-center justify-center gap-3 bg-[#05b0f0] hover:bg-[#049ad3] text-[#001e5a] font-sans font-bold text-[16px] px-6 py-3.5 rounded-[4px] transition-all transform active:scale-95 shadow-md cursor-pointer"
              >
                <span>Join the community</span>
                <ArrowUpRight className="w-5 h-5 text-[#001e5a]" strokeWidth={2.4} />
              </button>

              <Link
                href="#events"
                className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 border border-white/30 text-white font-sans font-bold text-[16px] px-6 py-3.5 rounded-[4px] transition-all transform active:scale-95"
              >
                <span>Explore events</span>
                <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.4} />
              </Link>
            </div>

            {/* Membership welcome footnote */}
            <p className="font-sans text-[13px] text-[#c6d5ed]">
              All engineering disciplines. Every year of study.
            </p>
          </div>

          {/* Right Column: Student Engineering Feature (w: 780px in 1440px container) */}
          <div className="lg:col-span-6 xl:col-span-6 relative p-4 sm:p-6 lg:p-8 flex items-center justify-center">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[546px] rounded-md overflow-hidden shadow-2xl">
              <Image
                src="/images/figma/students_collaborating_in_workshop_841f0cec.jpg"
                alt="Students collaborating in engineering workshop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Gradient Scrim for subtle contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Docked Image Caption Box (716 x 81px in Figma) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#001e5a]/95 backdrop-blur-sm p-4 sm:p-5 rounded-[4px] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-bold text-[11px] text-[#05b0f0] tracking-wider uppercase">
                    BUILT TOGETHER
                  </span>
                  <span className="font-sans font-semibold text-[15px] sm:text-[18px] text-white leading-tight">
                    From classroom thinking to hands-on doing.
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Community Pillars (1440 x 104px, bg: #f7f8f9) */}
      <div className="w-full bg-[#f7f8f9] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            
            {/* Pillar 1 */}
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#001e5a] group-hover:bg-[#001e5a] group-hover:text-white transition-colors shadow-xs">
                <Users className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[16px] text-[#001e5a] leading-tight">
                  Find your community
                </h3>
                <p className="font-sans text-[15px] text-[#617086] leading-snug">
                  Connect across disciplines.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#001e5a] group-hover:bg-[#001e5a] group-hover:text-white transition-colors shadow-xs">
                <Wrench className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[16px] text-[#001e5a] leading-tight">
                  Learn by building
                </h3>
                <p className="font-sans text-[15px] text-[#617086] leading-snug">
                  Practical skills beyond lectures.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#001e5a] group-hover:bg-[#001e5a] group-hover:text-white transition-colors shadow-xs">
                <Lightbulb className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[16px] text-[#001e5a] leading-tight">
                  Create what’s next
                </h3>
                <p className="font-sans text-[15px] text-[#617086] leading-snug">
                  Ideas with real-world purpose.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
