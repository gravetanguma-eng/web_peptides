"use client";

import { useEffect, useRef, useState } from "react";
import type { CompanyMetric } from "@/data/company";

function AnimatedMetric({ metric, delay }: { metric: CompanyMetric; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(metric.value === null ? null : 0);

  useEffect(() => {
    const element = ref.current;
    if (!element || metric.value === null) return;
    const target = metric.value;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplayValue(target);
      return;
    }

    let frame = 0;
    let timeout = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      timeout = window.setTimeout(() => {
        const startedAt = performance.now();
        const duration = 2200;
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, delay);
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [delay, metric.value]);

  const value = metric.value === null
    ? metric.placeholder
    : `${metric.prefix ?? ""}${(displayValue ?? 0).toLocaleString("en-US")}${metric.suffix}`;

  return (
    <div ref={ref} className="speeding-metric">
      <span>{value}</span>
      <small>{metric.label}</small>
    </div>
  );
}

export function SpeedingMetrics({ metrics }: { metrics: readonly CompanyMetric[] }) {
  return (
    <div className="speeding-metrics" aria-label="Company metrics">
      {metrics.map((metric, index) => (
        <AnimatedMetric key={metric.label} metric={metric} delay={index * 90} />
      ))}
    </div>
  );
}
