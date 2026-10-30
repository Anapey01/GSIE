'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  {
    role: 'Financial Secretary',
    name: 'Executive Member',
    image: '/images/executives/exec-5.png',
  },
  {
    role: 'Organizing Secretary',
    name: 'Executive Member',
    image: '/images/executives/exec-6.png',
  },
  {
    role: 'Technical Lead',
    name: 'Executive Member',
    image: '/images/executives/exec-7.png',
  },
  {
    role: 'Projects Head',
    name: 'Executive Member',
    image: '/images/executives/exec-8.jpg',
  },
  {
    role: 'Welfare Officer',
    name: 'Executive Member',
    image: '/images/executives/exec-9.jpg',
  },
];

const SLIDES = EXECUTIVES;
const SLIDE_COUNT = 9;
const SCROLL_LERP = 0.05;

export default function ExecutivesSection() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [activeTitle, setActiveTitle] = useState(EXECUTIVES[0]);

  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);
  const slideGapRef = useRef(125);

  useEffect(() => {
    const container = containerRef.current;
    const slideElements = slidesRef.current;
    if (!container) return;

    let containerWidth = container.clientWidth || window.innerWidth;
    let isMobile = containerWidth < 768;

    // Increased card dimensions while preserving the exact Codegrid Voku cosine physics & proportions:
    // Desktop: 250px x 344px (was 200x275)
    // Mobile: ~210px x 289px (was 185x254)
    let slideWidth = isMobile ? Math.min(containerWidth * 0.55, 215) : 250;
    let slideHeight = isMobile ? slideWidth * 1.375 : 344;
    let slideGap = isMobile ? 100 : 125;
    slideGapRef.current = slideGap;

    let arcDepth = isMobile ? 160 : 210;
    let centerLift = isMobile ? 80 : 105;

    let trackWidth = SLIDE_COUNT * slideGap;
    let windowCenterX = containerWidth / 2;
    // Stage baseline calibrated so cards arc naturally and stay clear of text
    let arcBaselineY = isMobile ? 220 : 240;

    function computeSlideTransform(slideIndex, scrollOffset) {
      let wrappedOffsetX =
        (((slideIndex * slideGap - scrollOffset) % trackWidth) + trackWidth) %
        trackWidth;
      if (wrappedOffsetX > trackWidth / 2) wrappedOffsetX -= trackWidth;

      const slideCenterX = windowCenterX + wrappedOffsetX;
      const normalizedDist =
        (slideCenterX - windowCenterX) / (containerWidth * 0.5);
      const absDist = Math.min(Math.abs(normalizedDist), 1.3);

      // Exact Voku scale equation: Math.max(1 - absDist * 0.8, 0.25)
      const scaleFactor = Math.max(1 - absDist * 0.8, 0.25);
      const scaledWidth = slideWidth * scaleFactor;
      const scaledHeight = slideHeight * scaleFactor;

      const clampedDist = Math.min(absDist, 1);
      // Exact Voku cosine arc drop: (1 - Math.cos(clampedDist * Math.PI)) * 0.5 * ARC_DEPTH
      const arcDropY = (1 - Math.cos(clampedDist * Math.PI)) * 0.5 * arcDepth;
      // Exact Voku center lift: Math.max(1 - absDist * 2, 0) * CENTER_LIFT
      const centerLiftY = Math.max(1 - absDist * 2, 0) * centerLift;

      return {
        x: slideCenterX - scaledWidth / 2,
        y: arcBaselineY - scaledHeight / 2 + arcDropY - centerLiftY,
        width: scaledWidth,
        height: scaledHeight,
        zIndex: Math.round((1 - absDist) * 100),
        distanceFromCenter: Math.abs(wrappedOffsetX),
      };
    }

    function layoutSlides(scrollOffset) {
      slideElements.forEach((slideEl, i) => {
        if (!slideEl) return;
        const { x, y, width, height, zIndex } = computeSlideTransform(
          i,
          scrollOffset
        );
        gsap.set(slideEl, { x, y, width, height, zIndex });
      });
    }

    layoutSlides(0);

    let activeSlideIndex = -1;
    function syncActiveTitle(scrollOffset) {
      let closestIndex = 0;
      let closestDist = Infinity;

      slideElements.forEach((_, i) => {
        const { distanceFromCenter } = computeSlideTransform(i, scrollOffset);
        if (distanceFromCenter < closestDist) {
          closestDist = distanceFromCenter;
          closestIndex = i;
        }
      });

      if (closestIndex !== activeSlideIndex) {
        activeSlideIndex = closestIndex;
        setActiveTitle(SLIDES[closestIndex]);
      }
    }

    // Exact Voku scroll multiplier: e.deltaY * 0.5
    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 1) {
        scrollTargetRef.current += delta * 0.5;
      }
    };

    let isDragging = false;
    let dragStartX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      dragStartX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const diff = dragStartX - e.clientX;
      scrollTargetRef.current += diff * 1.2;
      dragStartX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    let touchStartX = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      const touchCurrentX = e.touches[0].clientX;
      // Exact Voku touch delta multiplier: 1.2
      scrollTargetRef.current += (touchStartX - touchCurrentX) * 1.2;
      touchStartX = touchCurrentX;
    };

    container.addEventListener('wheel', onWheel, { passive: true });
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    let rafId;
    function animate() {
      scrollCurrentRef.current +=
        (scrollTargetRef.current - scrollCurrentRef.current) * SCROLL_LERP;

      layoutSlides(scrollCurrentRef.current);
      syncActiveTitle(scrollCurrentRef.current);

      rafId = requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      containerWidth = container.clientWidth || window.innerWidth;
      isMobile = containerWidth < 768;

      slideWidth = isMobile ? Math.min(containerWidth * 0.55, 215) : 250;
      slideHeight = isMobile ? slideWidth * 1.375 : 344;
      slideGap = isMobile ? 100 : 125;
      slideGapRef.current = slideGap;

      arcDepth = isMobile ? 160 : 210;
      centerLift = isMobile ? 80 : 105;

      trackWidth = SLIDE_COUNT * slideGap;
      windowCenterX = containerWidth / 2;
      arcBaselineY = isMobile ? 220 : 240;
    };

    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const slidePrev = () => {
    scrollTargetRef.current -= slideGapRef.current;
  };

  const slideNext = () => {
    scrollTargetRef.current += slideGapRef.current;
  };

  return (
    <section
      id="executives"
      data-reveal
      className="relative w-full bg-[#001e5a] text-white py-12 sm:py-16 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#05b0f0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-5 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="max-w-[650px] flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-[18px] h-[2.5px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[11px] text-[#05b0f0] tracking-[0.08em] uppercase">
                STUDENT-LED. STUDENT-FOCUSED.
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-tight">
              Meet the executive council.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#c6d5ed] leading-relaxed">
              Drag or swipe to explore our leadership team.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={slidePrev}
              aria-label="Previous executive"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.4} />
            </button>
            <button
              onClick={slideNext}
              aria-label="Next executive"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* 3D Arc Stage (Height: 410px mobile, 490px desktop) */}
        <div
          ref={containerRef}
          className="relative w-full h-[410px] sm:h-[470px] lg:h-[490px] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {SLIDES.map((exec, idx) => (
            <div
              key={idx}
              ref={(el) => (slidesRef.current[idx] = el)}
              className="absolute top-0 left-0 rounded-none overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.65)] will-change-transform bg-black border border-white/20"
            >
              <Image
                src={exec.image}
                alt={exec.name}
                fill
                sizes="(max-width: 768px) 250px, 320px"
                className="object-cover object-top pointer-events-none rounded-none"
                priority={idx < 4}
              />
            </div>
          ))}

          {/* Centered Title — Positioned closely right underneath the center card */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-40 pointer-events-none w-full px-4">
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#05b0f0] tracking-wider uppercase mb-0.5">
              {activeTitle.role}
            </span>
            <h3 className="font-heading font-medium text-sm sm:text-base lg:text-lg text-white tracking-normal drop-shadow-sm truncate max-w-full">
              {activeTitle.name}
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
