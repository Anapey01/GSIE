'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadershipMessage() {
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
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-slate-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Context & Attribution */}
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-widest text-[#00a2e8] uppercase mb-3">
            CHAPTER LEADERSHIP
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2340] tracking-tight leading-snug font-heading">
            Developing Engineers with Competence & Integrity
          </h2>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm font-bold text-[#0c2340]">Faculty Patron & Student Executive</p>
            <p className="text-xs text-slate-500 mt-1">GhIE Student Chapter • AAMUSTED</p>
          </div>
        </div>

        {/* Right Column: Editorial Message */}
        <div className="lg:col-span-8 space-y-6 text-slate-700 text-lg sm:text-xl leading-relaxed">
          <p className="text-[#0c2340] font-medium">
            Engineering education at AAMUSTED is not merely about mastering formulas in the lecture hall; it is about learning how to solve tangible technical problems that uplift communities, build industry, and modernize national infrastructure.
          </p>

          <p>
            Through our direct affiliation with the Ghana Institution of Engineering (GhIE), students transition from passive learners to active members of the engineering fraternity. Our members gain early exposure to the regulatory frameworks governing professional practice in Ghana under Act 819, direct mentorship from practicing fellows, and access to technical conferences nationwide.
          </p>

          <p className="text-base text-slate-600 italic">
            &ldquo;Whether you are in your first year or preparing for your final design project, your journey toward becoming a recognized Professional Engineer begins here.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
