"use client";

import { useEffect, useRef, useState } from "react";

export function TextType({ text, className = "" }: { text: string; className?: string; as?: "h2" }) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(text);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let index = 0;
      const type = () => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index < text.length) timer = setTimeout(type, 38);
      };
      type();
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [text]);
  return <h2 ref={ref} className={className} aria-label={text}><span aria-hidden="true">{displayed}</span><span className="text-type-cursor" aria-hidden="true">|</span></h2>;
}
