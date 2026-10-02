'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ArchitecturalRevealSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0c2340] min-h-[320px] xs:min-h-[420px] sm:min-h-[560px] lg:min-h-[680px] flex items-center justify-center my-12 sm:my-20"
    >
      {/* 1. TOP-RIGHT WHITE RECTANGULAR NOTCH CUTOUT (Matches Reference Image) */}
      <div className="absolute top-0 right-0 w-32 xs:w-44 sm:w-72 md:w-80 h-8 xs:h-10 sm:h-14 bg-white z-30" />

      {/* 2. FULL-BLEED SEAMLESS PHOTO CANVAS (No awkward box-in-box padding) */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ghie-young-engineers-duo-landscape.jpg"
          alt="GhIE Young Engineers Forum Official Landscape Showcase"
          fill
          className="object-contain sm:object-cover object-center brightness-98"
          priority
        />
        {/* Subtle Bottom Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
