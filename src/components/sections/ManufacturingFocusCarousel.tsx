"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const manufacturingImages = [
  { image: "/media/company-freeze-drying.png", alt: "Clean manufacturing suite with stainless processing equipment and production staff", label: "Production environment" },
  { image: "/media/company-reactor.png", alt: "Technicians working with a large stainless steel industrial reactor", label: "Manufacturing equipment" },
  { image: "/media/company-purification.png", alt: "Technicians operating analytical and purification equipment in a cleanroom", label: "Controlled processing" }
] as const;

export function ManufacturingFocusCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = manufacturingImages[activeIndex];
  const select = (index: number) => setActiveIndex((index + manufacturingImages.length) % manufacturingImages.length);

  return (
    <div className="bg-surface py-20 md:py-24 lg:py-28">
      <div className="page-container">
        <Reveal className="mb-9 md:mb-12">
          <p className="type-eyebrow text-accent">Manufacturing focus</p>
          <h3 className="type-subheading mt-3">Precision begins with the environment.</h3>
        </Reveal>
        <div className="manufacturing-carousel" role="region" aria-roledescription="carousel" aria-label="Manufacturing image carousel">
          <div className="relative aspect-[16/9] overflow-hidden bg-navy/5 md:aspect-[16/8]">
            <Image key={active.image} src={active.image} alt={active.alt} fill sizes="100vw" className="object-cover object-center" priority={activeIndex === 0} />
          </div>
          <button type="button" className="manufacturing-arrow manufacturing-arrow--prev" aria-label="Show previous manufacturing image" onClick={() => select(activeIndex - 1)}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" className="manufacturing-arrow manufacturing-arrow--next" aria-label="Show next manufacturing image" onClick={() => select(activeIndex + 1)}><ChevronRight aria-hidden="true" /></button>
          <p className="manufacturing-label" aria-live="polite">{active.label}<span>{String(activeIndex + 1).padStart(2, "0")} / {String(manufacturingImages.length).padStart(2, "0")}</span></p>
        </div>
      </div>
    </div>
  );
}
