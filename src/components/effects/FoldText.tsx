"use client";

import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";

type FoldTextProps = {
  text: string;
  className?: string;
  splitBy?: "char" | "word";
  stagger?: number;
};

export function FoldText({ text, className = "", splitBy = "word", stagger = 0.055 }: FoldTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const pieces = useMemo(
    () => (splitBy === "char" ? Array.from(text) : text.split(/(\s+)/)),
    [splitBy, text]
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll("[data-fold-piece]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      gsap.fromTo(
        targets,
        { opacity: 0, rotateX: -82, transformOrigin: "50% 0%" },
        { opacity: 1, rotateX: 0, duration: 0.65, stagger, ease: "power3.out" }
      );
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(root);
    return () => observer.disconnect();
  }, [stagger, text]);

  return (
    <span ref={rootRef} className={`fold-text ${className}`}>
      <span className="sr-only">{text}</span>
      {pieces.map((piece, index) =>
        /^\s+$/.test(piece) ? (
          <span key={index} aria-hidden="true">{piece}</span>
        ) : (
          <span key={index} data-fold-piece className="fold-text-piece" aria-hidden="true">
            {piece}
          </span>
        )
      )}
    </span>
  );
}
