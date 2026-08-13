"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const documents = [
  { name: "Reta30", src: "/COA/reta30.png" },
  { name: "Admax", src: "/COA/Admax.png" },
  { name: "BPC157", src: "/COA/BPC157.png" },
  { name: "GHK-CU", src: "/COA/GHK-CU.png" },
  { name: "HGH", src: "/COA/HGH.png" },
  { name: "KPV", src: "/COA/KPV.png" },
  { name: "NAD", src: "/COA/NAD.png" },
  { name: "TB500", src: "/COA/TB500.png" },
  { name: "Tirz", src: "/COA/tirz.png" }
] as const;

export function QualityDocumentViewer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = documents[activeIndex];
  const select = (index: number) => setActiveIndex((index + documents.length) % documents.length);

  return (
    <div className="mt-12 border-t border-ink/20 pt-5">
      <div className="mb-5 flex items-end justify-between gap-5">
        <div>
          <p className="type-eyebrow text-lab-blue">Certificate of Analysis</p>
          <p className="mt-2 text-sm font-medium" aria-live="polite">{active.name}</p>
        </div>
        <span className="type-caption tabular-nums text-muted">{String(activeIndex + 1).padStart(2, "0")} / {String(documents.length).padStart(2, "0")}</span>
      </div>

      <div className="coa-viewer" role="region" aria-roledescription="carousel" aria-label="Certificate carousel">
        <div className="relative aspect-[3/4] bg-white">
          <Image src={active.src} alt={`${active.name} Certificate of Analysis`} fill sizes="(max-width: 1024px) 88vw, 36vw" className="object-contain" priority={activeIndex === 0} />
        </div>
        <button type="button" className="coa-arrow coa-arrow--prev" aria-label="Show previous certificate" onClick={() => select(activeIndex - 1)}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" className="coa-arrow coa-arrow--next" aria-label="Show next certificate" onClick={() => select(activeIndex + 1)}><ChevronRight aria-hidden="true" /></button>
      </div>

    </div>
  );
}
