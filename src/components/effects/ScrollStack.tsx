"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Capability } from "@/data/capabilities";

function StackCard({ item, index }: { item: Capability; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [1.5, 0, -1.5]);
  return (
    <motion.article ref={ref} style={{ rotate, top: `calc(6rem + ${index * 10}px)` }} className="scroll-stack-card">
      <div className="grid gap-8 lg:grid-cols-[72px_.78fr_1.22fr] lg:items-center">
        <span className="type-caption text-muted">{item.number}</span>
        <div><h3 className="type-subheading">{item.title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-muted">{item.description}</p></div>
        <figure className="relative aspect-video overflow-hidden bg-navy/5"><Image src={item.image ?? ""} alt={item.imageAlt ?? ""} fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /></figure>
      </div>
    </motion.article>
  );
}

export function ScrollStack({ items }: { items: Capability[] }) {
  return <div className="scroll-stack">{items.map((item, index) => <StackCard key={item.number} item={item} index={index} />)}</div>;
}
