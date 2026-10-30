'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const EXECUTIVES = [
  {
    role: 'President',
    name: 'Emmanuel Sarfo Kantanka',
    image: '/images/executives/emmanuel-sarfo-kantanka.jpg',
  },
  {
    role: 'Vice President',
    name: 'Lois Oforiwaa',
    image: '/images/executives/lois-oforiwaa.jpg',
  },
  {
    role: 'General Secretary',
    name: 'Amos Kwasi Nyarko Boamah',
    image: '/images/executives/amos-kwasi-nyarko-boamah.jpg',
  },
  {
    role: 'Media Head',
    name: 'Elizabeth',
    image: '/images/executives/elizabeth.jpg',
  },
];

export default function ExecutivesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const currentCardRef = useRef(null);
  const nextCardRef = useRef(null);
  const touchStartXRef = useRef(0);

  const swapTo = (nextIndex, direction = 1) => {
    if (animating) return;
    setAnimating(true);

    const currentCard = currentCardRef.current;
    const nextCard = nextCardRef.current;

    // Reset styles
    gsap.set(nextCard, {
      x: direction * 140,
      scale: 0.88,
      opacity: 0,
      zIndex: 20,
    });
    gsap.set(currentCard, {
      zIndex: 10,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.set(currentCard, { x: 0, scale: 1, opacity: 1 });
        setAnimating(false);
      },
    });

    // 3D smooth swap transition
    tl.to(
      currentCard,
      {
        x: -direction * 140,
        scale: 0.88,
        opacity: 0,
        duration: 0.55,
        ease: 'power2.inOut',
      },
      0
    );

    tl.to(
      nextCard,
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.55,
        ease: 'power2.inOut',
      },
      0
    );
  };

  const slidePrev = () => {
    const next = (currentIndex - 1 + EXECUTIVES.length) % EXECUTIVES.length;
    swapTo(next, -1);
  };

  const slideNext = () => {
    const next = (currentIndex + 1) % EXECUTIVES.length;
    swapTo(next, 1);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      slideNext();
    } else if (diff < -40) {
      slidePrev();
    }
  };

  const currentExec = EXECUTIVES[currentIndex];
  const nextPreviewIndex = (currentIndex + 1) % EXECUTIVES.length;
  const nextExec = EXECUTIVES[nextPreviewIndex];

  return (
    <section
      id="executives"
      data-reveal
      className="relative w-full bg-[#001e5a] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#05b0f0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-6 sm:gap-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div className="max-w-[650px] flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-[22px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[11px] sm:text-[12px] text-[#05b0f0] tracking-[0.08em] uppercase">
                STUDENT-LED. STUDENT-FOCUSED.
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight">
              Meet the executive council.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#c6d5ed] leading-relaxed">
              Swipe or use the arrows to meet each council leader.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={slidePrev}
              disabled={animating}
              aria-label="Previous executive"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.4} />
            </button>
            <button
              onClick={slideNext}
              disabled={animating}
              aria-label="Next executive"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Solo Spotlight Stage — ONLY 1 Image Visible at a time */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[280px] sm:h-[350px] lg:h-[380px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          {/* Current Active Executive Card */}
          <div
            ref={currentCardRef}
            className="absolute w-[210px] sm:w-[260px] lg:w-[280px] h-[280px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.7)] border border-white/20 bg-black will-change-transform z-10"
          >
            <Image
              src={currentExec.image}
              alt={currentExec.name}
              fill
              sizes="(max-width: 768px) 210px, 280px"
              className="object-cover object-top pointer-events-none"
              priority
            />
          </div>

          {/* Next Incoming Card (Completely HIDDEN until swap animation triggers) */}
          <div
            ref={nextCardRef}
            className="absolute w-[210px] sm:w-[260px] lg:w-[280px] h-[280px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.7)] border border-white/20 bg-black will-change-transform pointer-events-none opacity-0"
          >
            <Image
              src={nextExec.image}
              alt={nextExec.name}
              fill
              sizes="(max-width: 768px) 210px, 280px"
              className="object-cover object-top pointer-events-none"
            />
          </div>
        </div>

        {/* Minimalist Name & Role Placed Directly Below the Spotlight Photo */}
        <div className="w-full flex flex-col items-center text-center pt-2 sm:pt-3 pointer-events-none">
          <span className="text-[11px] sm:text-xs font-bold text-[#05b0f0] tracking-widest uppercase mb-1">
            {currentExec.role}
          </span>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
            {currentExec.name}
          </h3>
        </div>

      </div>
    </section>
  );
}
