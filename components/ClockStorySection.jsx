'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClockStorySection() {
  const container = useRef(null);
  const stickyRef = useRef(null);
  const handContainerRef = useRef(null);
  const handRef = useRef(null);
  const handImageRef = useRef(null);
  const introRef = useRef(null);
  const h1ElementRef = useRef(null);
  const introCopyRef = useRef(null);
  const websiteContentRef = useRef(null);

  const introHeaders = [
    '<span>Time to</span> innovate',
    '<span>Time to</span> build tomorrow',
    '<span>Time to</span> empower engineers',
    '<span>Time to</span> meet the leadership',
    '<span>Time to</span> shape the chapter',
  ];

  useGSAP(
    () => {
      let currentCycle = -1;
      let imageRevealed = false;

      const updateHeaderText = () => {
        if (h1ElementRef.current && currentCycle >= 0) {
          h1ElementRef.current.innerHTML =
            introHeaders[Math.min(currentCycle, introHeaders.length - 1)];
        }
      };

      const pinnedHeight = window.innerHeight * 5;

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: 'top top',
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const rotationProgress = Math.min((progress * 8) / 5, 1);
          const totalRotation = rotationProgress * 1800 - 90;
          const rotationInCycle = ((totalRotation + 90) % 360) - 90;
          gsap.set(handContainerRef.current, { rotationZ: rotationInCycle });

          const newCycle = Math.floor((totalRotation + 90) / 360);
          if (
            newCycle !== currentCycle &&
            newCycle >= 0 &&
            newCycle < introHeaders.length
          ) {
            currentCycle = newCycle;
            updateHeaderText();

            if (newCycle === 3 && !imageRevealed) {
              gsap.to(handImageRef.current, { opacity: 1, duration: 0.3 });
              if (introCopyRef.current) {
                gsap.to(introCopyRef.current.querySelectorAll('p'), {
                  x: 0,
                  opacity: 1,
                  duration: 0.5,
                  stagger: 0.1,
                });
              }
              imageRevealed = true;
            } else if (newCycle !== 3 && imageRevealed) {
              gsap.to(handImageRef.current, { opacity: 0, duration: 0.3 });
              if (introCopyRef.current) {
                gsap.to(introCopyRef.current.querySelectorAll('p'), {
                  x: 20,
                  opacity: 0,
                  duration: 0.5,
                  stagger: 0.1,
                });
              }
              imageRevealed = false;
            }
          }

          if (progress <= 6 / 8) {
            const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8));
            const newHeight = gsap.utils.interpolate(
              52.75,
              100,
              animationProgress
            );
            const newOpacity = gsap.utils.interpolate(1, 0, animationProgress);
            gsap.set(handRef.current, { height: `${newHeight}%` });
            gsap.set(introRef.current, { opacity: 1 });
            if (h1ElementRef.current) {
              gsap.set(h1ElementRef.current, { opacity: newOpacity });
            }
          } else {
            gsap.set(introRef.current, { opacity: 0 });
          }

          if (progress <= 7 / 8) {
            const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8));
            const newScale = gsap.utils.interpolate(1, 20, scaleProgress);
            gsap.set(handRef.current, { scale: newScale });
          }

          if (progress <= 7.5 / 8) {
            const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8));
            const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress);
            gsap.set(handRef.current, { opacity: newOpacity });
          }

          if (progress > 7.5 / 8) {
            const revealProgress = (progress - 7.5 / 8) / (0.5 / 8);
            const newOpacity = gsap.utils.interpolate(0, 1, revealProgress);
            gsap.set(websiteContentRef.current, { opacity: newOpacity });
          } else {
            gsap.set(websiteContentRef.current, { opacity: 0 });
          }
        },
      });

      updateHeaderText();

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#001438] text-white" ref={container}>
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center" ref={stickyRef}>
        
        {/* Revolving Hand / Dial */}
        <div
          ref={handContainerRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[800px] h-[340px] sm:h-[650px] lg:h-[800px] flex justify-center items-start origin-center pointer-events-none z-20"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <div
            ref={handRef}
            className="absolute w-[34px] sm:w-[44px] h-[52.75%] bg-white rounded-full overflow-hidden opacity-100 shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-white/20"
            style={{ willChange: 'transform' }}
          >
            <div ref={handImageRef} className="w-full h-full relative opacity-0">
              <Image
                src="/images/executives/emmanuel-sarfo-kantanka.jpg"
                alt="Chapter Leadership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Story Intro Text */}
        <div
          ref={introRef}
          className="absolute top-[35%] sm:top-[40%] left-[8%] sm:left-[15%] lg:left-[20%] max-w-[320px] sm:max-w-[420px] z-10 pointer-events-none"
        >
          <h2
            ref={h1ElementRef}
            className="font-heading font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight [&>span]:text-[#05b0f0] [&>span]:block"
          >
            <span>Time to</span> innovate
          </h2>

          <div ref={introCopyRef} className="mt-4 flex flex-col gap-2">
            <p className="font-sans text-xs sm:text-sm text-[#c6d5ed] leading-relaxed opacity-0 translate-x-5 transition-all">
              The Ghana Institution of Engineering (GhIE) Student Chapter at AAMUSTED is a premier hub for technological discovery and young engineering leaders.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#05b0f0] font-semibold opacity-0 translate-x-5 transition-all">
              Scroll down to explore our council and projects.
            </p>
          </div>
        </div>

        {/* Transition Reveal Message */}
        <div
          ref={websiteContentRef}
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-30 pointer-events-none bg-[#001640]"
        >
          <span className="text-xs font-bold text-[#05b0f0] tracking-widest uppercase mb-2">
            WELCOME TO THE CHAPTER
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight text-center px-4">
            GhIE Student Council
          </h2>
        </div>

      </section>
    </div>
  );
}
