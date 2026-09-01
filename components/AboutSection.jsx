'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Column: Pure Title */}
        <div className="md:col-span-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2340] tracking-tight leading-snug font-heading">
            The Ghana Institution of Engineering
          </h2>
        </div>

        {/* Right Column: Clean Historical & Mission Paragraphs */}
        <div className="md:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
          <p>
            The Ghana Institution of Engineering was officially founded in 1968 to succeed the Ghana Group of professional Engineers, as an autonomous professional body with no political affiliation. The Institution derives its authority from the Engineering Council Act 2011, Act 819 and the Professional Bodies Registration Decree NRCD 143 of 1973. The late Ing. Dr. E. Sackey became its first President.
          </p>

          <p className="text-[#0c2340] font-semibold pt-3 border-t border-slate-200/80">
            GhIE brings engineers, technicians, and innovators together to collaborate, build skills, and help shape national standards and policies. Start where you are, grow with us.
          </p>
        </div>

      </div>
    </section>
  );
}
