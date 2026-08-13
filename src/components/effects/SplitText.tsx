"use client";

import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";

type SplitTextProps = { text: string; className?: string; tag?: "h2" | "p" };

export function SplitText({ text, className = "", tag = "h2" }: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  const Tag = tag;
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = el.querySelectorAll("[data-split-word]");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      gsap.fromTo(targets, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.07, ease: "power3.out" });
      observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);
  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement> & React.Ref<HTMLParagraphElement>} className={className} aria-label={text}>
      {words.map((word, index) => /^\s+$/.test(word) ? <span key={index}>{word}</span> : <span key={index} data-split-word className="inline-block" aria-hidden="true">{word}</span>)}
    </Tag>
  );
}
