'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Award, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      leftColRef.current?.children || [],
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, delay: 0.1 }
    ).fromTo(
      rightColRef.current,
      { x: 40, opacity: 0, scale: 0.96 },
      { x: 0, opacity: 1, scale: 1, duration: 0.9 },
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] pt-28 sm:pt-36 pb-20 flex items-center px-4 sm:px-8 bg-slate-50/60 overflow-hidden"
    >
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#00a2e8]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Headline & Action */}
        <div ref={leftColRef} className="lg:col-span-7 space-y-6 text-left">
          
          {/* Editorial Kicker Text (No Pill Badge) */}
          <div className="text-xs font-extrabold tracking-widest text-[#00a2e8] uppercase">
            Official GhIE Student Chapter • AAMUSTED University
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0c2340] leading-[1.12]">
            Advancing Engineering Excellence with{' '}
            <span className="text-[#00a2e8]">GhIE Standards</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
            Empowering student engineers at the <strong className="text-slate-900 font-semibold">University of Skills Training and Entrepreneurial Development (AAMUSTED)</strong> through professional certification tracks, technical workshops, and direct mentorship with registered engineers of the <strong className="text-[#00a2e8] font-semibold">Ghana Institution of Engineering (GhIE)</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#join"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00a2e8] hover:bg-[#008bcb] text-white font-bold text-sm shadow-lg shadow-[#00a2e8]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Join GhIE Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-[#00a2e8] hover:border-[#00a2e8] font-bold text-sm shadow-sm transition-all duration-200"
            >
              <span>Explore Pillars</span>
              <ChevronRight className="w-4 h-4 text-[#00a2e8]" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="text-2xl font-extrabold text-[#0c2340]">500+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Student Members</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#00a2e8]">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">GhIE Aligned</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#0c2340]">20+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Annual Events</div>
            </div>
          </div>
        </div>

        {/* Right Column: Corporate Accreditation Card (Native Logo Layout - No Pill Badges) */}
        <div ref={rightColRef} className="lg:col-span-5">
          <div className="ice-card p-8 shadow-xl relative overflow-hidden">
            {/* Header Badge */}
            <div className="flex justify-between items-start mb-6 border-b border-sky-200 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#00a2e8] uppercase tracking-widest">
                  Chapter Accreditation
                </span>
                <h3 className="text-lg font-bold text-[#0c2340]">
                  Ghana Institution of Engineering
                </h3>
              </div>
              <Award className="w-8 h-8 text-[#00a2e8] shrink-0" />
            </div>

            {/* Native Institutional Logos */}
            <div className="bg-white p-5 rounded-xl border border-sky-100 mb-6">
              <div className="flex items-center justify-between gap-3">
                <Image
                  src="/images/ghie-association-logo.png"
                  alt="GhIE Logo"
                  width={140}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
                <span className="text-xs font-bold text-slate-400">×</span>
                <Image
                  src="/images/school-logo.png"
                  alt="AAMUSTED Logo"
                  width={160}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            {/* Key Benefits List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00a2e8] shrink-0 mt-0.5" />
                <span>Direct path to GhIE Graduate & Professional Registration</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00a2e8] shrink-0 mt-0.5" />
                <span>Hands-on technical workshops & AutoCAD/Civil 3D labs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00a2e8] shrink-0 mt-0.5" />
                <span>Mentorship from certified GhIE professional engineers</span>
              </div>
            </div>

            {/* Footer Text Line */}
            <div className="pt-3 border-t border-sky-200 text-center text-xs font-bold text-[#00a2e8]">
              AAMUSTED Campus • Kumasi & Mampong, Ghana
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
