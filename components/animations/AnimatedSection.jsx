'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fadeInUp",
  delay = 0,
  stagger = 0.15 
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    if (animation === "fadeInUp") {
      const targets = el.querySelectorAll('.gsap-item') || [el];
      const itemsToAnimate = targets.length > 0 ? targets : [el];

      gsap.fromTo(
        itemsToAnimate,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: delay,
          stagger: stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    } else if (animation === "scaleUp") {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
