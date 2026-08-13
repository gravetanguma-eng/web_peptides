"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type DepthCarouselItem = { image: string; alt: string; label?: string };

type DepthCarouselProps = {
  items: readonly DepthCarouselItem[];
  ariaLabel: string;
  controlNoun?: string;
  documentMode?: boolean;
  onChange?: (index: number) => void;
};

export function DepthCarousel({ items, ariaLabel, controlNoun, documentMode = false, onChange }: DepthCarouselProps) {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedRef = useRef(false);

  const layout = useCallback((focus: number, animate = true) => {
    const count = items.length;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      let distance = (index - focus + count) % count;
      if (distance > count / 2) distance -= count;
      const behind = distance >= 0 ? distance : count + distance;
      const visible = behind < Math.min(count, 4);
      const vars = {
        xPercent: -50,
        yPercent: -50,
        x: behind * (documentMode ? 34 : 64),
        z: -behind * (documentMode ? 100 : 150),
        rotateY: behind * (documentMode ? 4 : 12),
        scale: 1 - behind * 0.035,
        opacity: visible ? Math.max(0.18, 1 - behind * 0.2) : 0,
        filter: `brightness(${Math.max(0.5, 1 - behind * 0.14)}) blur(${behind * 0.7}px)`,
        zIndex: 50 - behind,
        pointerEvents: behind === 0 ? "auto" : "none"
      };
      if (animate && !reducedRef.current) gsap.to(card, { ...vars, duration: 0.7, ease: "power3.out" });
      else gsap.set(card, vars);
    });
  }, [documentMode, items.length]);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    layout(active, false);
  }, [active, layout]);

  const goTo = (index: number) => {
    const next = (index + items.length) % items.length;
    setActive(next);
    layout(next);
    onChange?.(next);
  };

  return (
    <div className={`depth-carousel ${documentMode ? "depth-carousel--documents" : ""}`} role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="depth-carousel-stage">
        {items.map((item, index) => (
          <div
            key={item.image}
            ref={(element) => { cardRefs.current[index] = element; }}
            className="depth-carousel-card"
            aria-hidden={active !== index}
          >
            <Image src={item.image} alt={item.alt} fill sizes={documentMode ? "(max-width: 1024px) 72vw, 34vw" : "(max-width: 1024px) 82vw, 56vw"} className={documentMode ? "object-contain" : "object-cover"} />
          </div>
        ))}
      </div>
      <button type="button" className="depth-carousel-arrow depth-carousel-arrow--prev" aria-label={`Show previous ${controlNoun ?? ariaLabel.toLowerCase()}`} onClick={() => goTo(active - 1)}><ChevronLeft aria-hidden="true" /></button>
      <button type="button" className="depth-carousel-arrow depth-carousel-arrow--next" aria-label={`Show next ${controlNoun ?? ariaLabel.toLowerCase()}`} onClick={() => goTo(active + 1)}><ChevronRight aria-hidden="true" /></button>
      <div className="depth-carousel-dots" aria-label={`${ariaLabel} slides`}>
        {items.map((item, index) => <button key={item.image} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={active === index ? "true" : undefined} className={active === index ? "is-active" : ""} onClick={() => goTo(index)} />)}
      </div>
      {items[active]?.label ? <p className="depth-carousel-label" aria-live="polite">{items[active].label}</p> : null}
    </div>
  );
}
