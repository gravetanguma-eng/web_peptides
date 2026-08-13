"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { company, type CompanyMetric } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

function MetricValue({ metric }: { metric: CompanyMetric }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(metric.value ?? 0);

  useEffect(() => {
    if (!inView || metric.value === null || reducedMotion) {
      if (metric.value !== null && reducedMotion) setDisplay(metric.value);
      return;
    }

    const duration = 1000;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(metric.value! * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, metric.value, reducedMotion]);

  return (
    <div ref={ref} className="text-[clamp(3.5rem,6.5vw,7rem)] leading-none tracking-[-0.07em]">
      {metric.value === null ? metric.placeholder : `${metric.prefix ?? ""}${display}${metric.suffix}`}
    </div>
  );
}

export function Metrics() {
  return (
    <section className="section-pad bg-navy text-white" aria-labelledby="metrics-title">
      <div className="page-container">
        <SectionHeading
          eyebrow="Manufacturing data"
          title="Capability, made measurable."
          id="metrics-title"
          dark
        />
        <p className="ml-auto mt-12 max-w-xl text-sm leading-7 text-white/60">
          Values remain explicit placeholders until their source and reporting basis are approved.
        </p>
        <div className="mt-20 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3">
          {company.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="motion-reveal min-h-64 border-b border-r border-white/20 p-6"
            >
              <MetricValue metric={metric} />
              <p className="mt-16 text-sm">{metric.label}</p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-white/45">
                Pending verification
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
