'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MembershipCTA() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section className="py-24 sm:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center" ref={containerRef}>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#0c2340] tracking-tight leading-tight">
          Start where you are, grow with us.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          GhIE brings engineers, technicians, and innovators together to collaborate, build skills, and help shape national standards and policies.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#0c2340] text-white font-medium text-sm sm:text-base hover:bg-[#00a2e8] transition-colors"
          >
            Join GhIE Student Chapter
          </a>

          <a
            href="#guide"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-100 text-[#0c2340] font-medium text-sm sm:text-base hover:bg-slate-200 transition-colors"
          >
            Read Chapter Guide
          </a>
        </div>
      </div>
    </section>
  );
}
