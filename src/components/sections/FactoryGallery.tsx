"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const gallery = [
  {
    src: "/media/hero-lab-placeholder.png",
    alt: "Concept image of a modern laboratory production environment",
    label: "Laboratory environment"
  },
  {
    src: "/media/capability-lab-placeholder.png",
    alt: "Concept image of controlled laboratory sample handling",
    label: "Process control"
  },
  {
    src: "/media/hero-lab-placeholder.png",
    alt: "Concept image of an analytical laboratory",
    label: "Quality testing"
  }
];

export function FactoryGallery() {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [30, -30]);

  return (
    <section ref={section} className="section-pad overflow-hidden bg-ink text-white">
      <div className="page-container">
        <SectionHeading eyebrow="Factory gallery" title="Inside the manufacturing environment." dark />
        <p className="mt-10 max-w-xl text-sm leading-7 text-white/55">
          These concept visuals define the intended photography direction. Replace every image with
          verified laboratory, equipment, testing and packaging photography.
        </p>
      </div>
      <motion.div
        style={{ y }}
        tabIndex={0}
        role="region"
        aria-label="Scrollable factory gallery"
        className="mt-20 flex snap-x gap-4 overflow-x-auto px-[max(1rem,calc((100vw-1440px)/2))] pb-5"
      >
        {gallery.map((image, index) => (
          <figure
            key={`${image.label}-${index}`}
            className={`relative shrink-0 snap-start overflow-hidden ${
              index === 1 ? "mt-16 w-[68vw] md:w-[38vw]" : "w-[82vw] md:w-[56vw]"
            }`}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 85vw, 56vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.12em] text-white/50">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{image.label} · concept placeholder</span>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </section>
  );
}
