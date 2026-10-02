'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { RotateCcw } from 'lucide-react';

export default function TheatreCurtainSection() {
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  
  const [isOpen, setIsOpen] = useState(false);

  // GSAP Cinema / Theatre Curtain-Opening Reveal Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut', duration: 2.4 },
      onComplete: () => setIsOpen(true)
    });

    // Start closed (covering entire design)
    gsap.set(leftCurtainRef.current, { xPercent: 0 });
    gsap.set(rightCurtainRef.current, { xPercent: 0 });

    // Smoothly roll/open outward from center toward left and right sides
    tl.to(leftCurtainRef.current, { xPercent: -100, delay: 0.3 })
      .to(rightCurtainRef.current, { xPercent: 100 }, '-=2.4');
  }, { scope: containerRef });

  // Replay theatre curtain reveal
  const handleReplayCurtains = () => {
    setIsOpen(false);
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut', duration: 2.2 },
      onComplete: () => setIsOpen(true)
    });

    // Close curtains first, then reopen smoothly from center
    tl.to([leftCurtainRef.current, rightCurtainRef.current], { xPercent: 0, duration: 1.2, ease: 'power2.inOut' })
      .to(leftCurtainRef.current, { xPercent: -100, delay: 0.2 })
      .to(rightCurtainRef.current, { xPercent: 100 }, '-=2.2');
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black min-h-[440px] xs:min-h-[540px] sm:min-h-[680px] lg:min-h-[780px] flex flex-col justify-between my-8 sm:my-12"
    >
      {/* ============================================================ */}
      {/* STATIC EXACT GEOMETRY (Preserved Untouched Behind Curtains)   */}
      {/* ============================================================ */}

      {/* 1. TOP-RIGHT WHITE RECTANGULAR NOTCH CUTOUT (Matches Reference Image 1) */}
      <div className="absolute top-0 right-0 w-40 xs:w-56 sm:w-80 md:w-96 h-10 xs:h-12 sm:h-16 bg-white z-40" />

      {/* 2. FULL-BLEED STAGE CANVAS & IMAGE 2 PHOTO (GhIE Duo Engineers) */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          <Image
            src="/images/ghie-young-engineers-duo.jpg"
            alt="GhIE Young Engineers Duo Official Showcase"
            width={1920}
            height={1080}
            className="w-full h-full object-contain sm:object-cover object-center brightness-95"
            priority
          />
          {/* Subtle Ambient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* CINEMA / THEATRE CURTAINS (Smooth Outward Center Reveal)      */}
      {/* ============================================================ */}

      {/* LEFT THEATRE CURTAIN PANEL */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full z-50 pointer-events-none border-r border-black/40 shadow-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #04070d 0%, #0c192c 25%, #060b13 50%, #0f223d 75%, #050a12 100%)',
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.8), 10px 0 30px rgba(0,0,0,0.9)'
        }}
      >
        {/* Realistic Vertical Velvet Drape Texture Lines */}
        <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.04)_20px,rgba(255,255,255,0.04)_40px)]" />
      </div>

      {/* RIGHT THEATRE CURTAIN PANEL */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full z-50 pointer-events-none border-l border-black/40 shadow-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #050a12 0%, #0f223d 25%, #060b13 50%, #0c192c 75%, #04070d 100%)',
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.8), -10px 0 30px rgba(0,0,0,0.9)'
        }}
      >
        {/* Realistic Vertical Velvet Drape Texture Lines */}
        <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.04)_20px,rgba(255,255,255,0.04)_40px)]" />
      </div>

      {/* ============================================================ */}
      {/* REPLAY THEATRE CURTAIN REVEAL CONTROL BUTTON                 */}
      {/* ============================================================ */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-40">
        <button
          type="button"
          onClick={handleReplayCurtains}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl hover:bg-black/80 hover:scale-105 transition-all focus:outline-none"
          title="Replay Cinema Stage Curtain Reveal"
          aria-label="Replay Cinema Stage Curtain Reveal"
        >
          <RotateCcw className="w-4 h-4 text-white hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>

    </section>
  );
}
