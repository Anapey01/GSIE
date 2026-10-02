'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

export default function HeroBanner() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    // Entrance Animation
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    ).fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.4 },
      '-=0.8'
    );

    // Ambient subtle breathing animation
    if (isPlaying && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.015,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });
    } else if (imageRef.current) {
      gsap.killTweensOf(imageRef.current);
    }
  }, { scope: containerRef, dependencies: [isPlaying] });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0c2340] pt-16 sm:pt-20 min-h-[340px] xs:min-h-[420px] sm:min-h-[600px] lg:min-h-[720px] flex flex-col justify-between"
    >
      {/* 1. TOP-LEFT RECTANGULAR NOTCH CUTOUT */}
      <div
        className="absolute top-0 left-0 w-32 xs:w-44 sm:w-80 md:w-96 h-10 sm:h-16 bg-[#0c2340] z-30 border-b border-r border-slate-800/80 shadow-md"
        aria-hidden="true"
      />

      {/* 2. BOTTOM-RIGHT RECTANGULAR NOTCH CUTOUT */}
      <div className="absolute bottom-0 right-0 w-48 xs:w-60 sm:w-80 md:w-[380px] h-10 sm:h-16 bg-white z-30 flex items-center justify-end px-4 sm:px-6">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 font-heading">
          Young Engineers Forum
        </span>
      </div>

      {/* 3. FULL-BLEED CANVAS & PHOTO */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center overflow-hidden">
        <div ref={imageRef} className="w-full h-full relative flex items-center justify-center">
          <Image
            src="/images/ghie-young-engineers.jpg"
            alt="GhIE Young Engineers Forum Official Showcase"
            width={1920}
            height={1080}
            className="w-full h-full object-contain sm:object-cover object-center brightness-95"
            priority
          />
          {/* Subtle Institutional Cyan Overlay Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/60 via-transparent to-[#00a2e8]/10 pointer-events-none" />
        </div>
      </div>

      {/* 4. SLEEK MINIMALIST SINGLE PLAY/PAUSE BUTTON */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-40">
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl hover:bg-black/85 hover:scale-105 transition-all focus:outline-none"
          aria-label={isPlaying ? 'Pause showcase animation' : 'Play showcase animation'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white fill-white" />
          ) : (
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          )}
        </button>
      </div>
    </section>
  );
}
