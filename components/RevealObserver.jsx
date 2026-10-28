"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Reveals [data-reveal] elements as they scroll into view (matches AMTRAV motion engine).
// Uses Web Animations API so elements remain cleanly styled without hydration issues.
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const RISE = [
  { opacity: 0, translate: "0 24px" },
  { opacity: 1, translate: "0 0" },
];
const GROW = [{ scale: "0 1" }, { scale: "1 1" }];

const handled = new WeakSet();
let hydrated = false;

function delayOf(el) {
  const value = getComputedStyle(el).getPropertyValue("--motion-delay").trim();
  const n = parseFloat(value);
  if (Number.isNaN(n)) return 0;
  return value.endsWith("ms") ? n : n * 1000;
}

function hold(el) {
  const targets = el.dataset.reveal === "group" ? Array.from(el.children) : [el];
  return targets.map((target) => {
    const grow = target instanceof HTMLElement && target.dataset.reveal === "grow";
    const animation = target.animate(grow ? GROW : RISE, {
      duration: grow ? 900 : 700,
      delay: delayOf(target),
      easing: EASE,
      fill: "backwards",
    });
    animation.pause();
    return animation;
  });
}

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          pending.get(entry.target)?.forEach((animation) => animation.play());
          pending.delete(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    for (const el of document.querySelectorAll("[data-reveal]")) {
      if (handled.has(el)) continue;
      handled.add(el);
      if (!hydrated && el.getBoundingClientRect().top < window.innerHeight) continue;
      pending.set(el, hold(el));
      observer.observe(el);
    }
    hydrated = true;

    return () => {
      observer.disconnect();
      for (const [el, animations] of pending) {
        animations.forEach((animation) => animation.cancel());
        handled.delete(el);
      }
    };
  }, [pathname]);

  return null;
}
