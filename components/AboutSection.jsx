'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Column: Clean Institutional Heading */}
        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight leading-[1.2] font-heading">
            The Ghana Institution of Engineering
          </h2>
        </div>

        {/* Right Column: Generous, Human Editorial Typography */}
        <div className="md:col-span-7 space-y-8 text-slate-700 text-lg sm:text-xl leading-relaxed">
          <p>
            The Ghana Institution of Engineering was officially founded in 1968 to succeed the Ghana Group of professional Engineers, as an autonomous professional body with no political affiliation. The Institution derives its authority from the Engineering Council Act 2011, Act 819 and the Professional Bodies Registration Decree NRCD 143 of 1973. The late Ing. Dr. E. Sackey became its first President.
          </p>

          <p className="text-[#0c2340] font-medium pt-6 border-t border-slate-200">
            GhIE brings engineers, technicians, and innovators together to collaborate, build skills, and help shape national standards and policies. Start where you are, grow with us.
          </p>
        </div>

      </div>
    </section>
  );
}
