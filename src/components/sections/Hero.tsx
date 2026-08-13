"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { company, companyLinks } from "@/data/company";

const lines = ["Precision for", "every peptide", "program."];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-svh overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
      {company.hero.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={company.hero.image}
          aria-label={company.hero.alt}
        >
          <source src={company.hero.video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={company.hero.image}
          alt={company.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] lg:object-center"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,15,24,.91)_0%,rgba(7,15,24,.55)_45%,rgba(7,15,24,.12)_82%)] max-md:bg-[linear-gradient(0deg,rgba(7,15,24,.93)_0%,rgba(7,15,24,.25)_80%)]" />

      <div className="page-container relative z-10 flex min-h-svh flex-col justify-end pb-24 pt-36 md:pb-28">
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="type-eyebrow mb-6 text-white/70"
        >
          Peptide manufacturing
        </motion.p>
        <h1
          id="hero-title"
          className="type-display max-w-6xl"
        >
          {lines.map((line, index) => (
            <motion.span
              key={line}
              className="block"
              initial={reducedMotion ? false : { opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.08 + index * 0.1 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={reducedMotion ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.45 }}
          className="mt-10 grid items-end gap-8 md:grid-cols-[minmax(260px,430px)_1fr]"
        >
          <p className="max-w-md text-[15px] leading-7 text-white/80">{company.introduction}</p>
          <div className="flex flex-col justify-end gap-2 sm:flex-row sm:gap-5 sm:[&>a]:min-h-14 sm:[&>a]:min-w-[260px] sm:[&>a]:px-7 sm:[&>a]:text-[15px]">
            <ActionLink href={companyLinks.whatsapp} external variant="whatsapp">
              Contact Us on WhatsApp
            </ActionLink>
            <ActionLink href="/products" variant="outline">
              Explore Our Products
            </ActionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
