'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function HeroBanner() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    // Entrance Animation
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 }
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.4 },
      '-=0.8'
    );

    // Subtle ambient breathing scale
    gsap.to(imageRef.current, {
      scale: 1.015,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.easeInOut'
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0c2340] pt-16 sm:pt-20 min-h-[340px] xs:min-h-[420px] sm:min-h-[640px] lg:min-h-[740px] flex flex-col justify-between"
    >
      {/* 1. TOP-LEFT RECTANGULAR NOTCH CUTOUT */}
      <div className="absolute top-0 left-0 w-32 xs:w-44 sm:w-80 md:w-96 h-10 sm:h-16 bg-[#0c2340] z-30 border-b border-r border-slate-800/80 shadow-md" />

      {/* 2. BOTTOM-RIGHT RECTANGULAR NOTCH CUTOUT */}
      <div className="absolute bottom-0 right-0 w-44 xs:w-56 sm:w-80 md:w-[380px] h-10 sm:h-16 bg-white z-30 flex items-center justify-end px-4 sm:px-8 font-mono text-[10px] sm:text-sm text-slate-500 font-bold tracking-wider">
        <span>Content Script</span>
      </div>

      {/* 3. FULL-BLEED CANVAS & PHOTO (100% Full Width) */}
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

      {/* 4. PROFESSIONAL BOTTOM-LEFT PLAY/PAUSE & AUDIO CONTROL PILL */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-40">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white shadow-2xl transition-all hover:bg-black/75">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide text-white hover:text-[#00a2e8] transition-colors focus:outline-none"
            aria-label={isPlaying ? "Pause showcase" : "Play showcase"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-[#00a2e8] fill-[#00a2e8]" />
            ) : (
              <Play className="w-4 h-4 text-[#00a2e8] fill-[#00a2e8]" />
            )}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <div className="w-[1px] h-4 bg-white/20" />

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="p-1 rounded-full text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

    </section>
  );
}
