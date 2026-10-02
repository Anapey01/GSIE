'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { Play, Pause, ArrowDown } from 'lucide-react';

export default function HomeHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(() => {
    // Gentle ambient breathing effect on the photographic canvas
    if (isPlaying && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.018,
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
    <section className="relative w-full bg-white">
      {/* 1. EDITORIAL INSTITUTIONAL MASTHEAD */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-24 sm:pt-28 pb-10 sm:pb-14">
        {/* Institutional Overline with Hairline Accent */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#00a2e8]" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00a2e8]">
            Ghana Institution of Engineering • AAMUSTED Chapter
          </p>
        </div>

        {/* Commanding Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c2340] tracking-tight leading-[1.1] font-heading max-w-5xl">
          Advancing Engineering Excellence, Innovation & Professional Integrity
        </h1>

        {/* Lead Narrative & Direct Navigation Anchors */}
        <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
          <p className="lg:col-span-8 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            The official student body of the Ghana Institution of Engineering at the Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development. Operating under the authority of the Engineering Council Act 2011 (Act 819).
          </p>

          <div className="lg:col-span-4 flex items-center lg:justify-end gap-6 text-xs sm:text-sm font-semibold">
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-[#0c2340] hover:text-[#00a2e8] transition-colors py-1 group"
            >
              <span>Chapter Overview</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="#functions"
              className="inline-flex items-center gap-1.5 text-[#0c2340] hover:text-[#00a2e8] transition-colors py-1 group"
            >
              <span>Statutory Functions</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. SIGNATURE GEOMETRIC SHOWCASE CANVAS */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-[#0c2340] min-h-[380px] xs:min-h-[460px] sm:min-h-[580px] lg:min-h-[700px] flex flex-col justify-between"
      >
        {/* Top-Left Rectangular Notch Cutout */}
        <div
          className="absolute top-0 left-0 w-32 xs:w-44 sm:w-80 md:w-96 h-10 sm:h-16 bg-[#0c2340] z-30 border-b border-r border-slate-800/80 shadow-md"
          aria-hidden="true"
        />

        {/* Bottom-Right Rectangular Notch Cutout with Dateline Caption */}
        <div
          className="absolute bottom-0 right-0 w-48 xs:w-60 sm:w-80 md:w-[380px] h-10 sm:h-16 bg-white z-30 flex items-center justify-end px-4 sm:px-6"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
            Official Chapter Delegation
          </span>
        </div>

        {/* Full-Bleed Showcase Photographic Asset */}
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

        {/* Sleek Minimalist Circular Play/Pause Button */}
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
      </div>
    </section>
  );
}
