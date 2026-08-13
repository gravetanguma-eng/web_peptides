import Image from "next/image";
import { FoldText } from "@/components/effects/FoldText";
import { SpeedingMetrics } from "@/components/effects/SpeedingMetrics";
import { Reveal } from "@/components/motion/Reveal";
import { ManufacturingFocusCarousel } from "@/components/sections/ManufacturingFocusCarousel";
import { ActionLink } from "@/components/ui/ActionLink";
import { company, type CompanyMetric } from "@/data/company";

const introductionMetrics: readonly CompanyMetric[] = company.metrics.slice(0, 4);

export function CompanyIntro() {
  return (
    <section id="about" className="bg-warm-white text-ink">
      <div className="page-container pb-20 pt-24 md:pb-28 md:pt-32 lg:pb-36 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-24 xl:gap-36">
          <Reveal>
            <p className="type-eyebrow flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Company Introduction
            </p>
            <h2 className="type-section-title mt-9 max-w-4xl sm:text-[clamp(2.6rem,4.4vw,4.2rem)] sm:leading-[1.01] sm:tracking-[-0.045em] sm:[word-spacing:0.08em]">
              <FoldText text={company.companyStatement} splitBy="word" />
            </h2>
          </Reveal>

          <div className="relative isolate grid min-h-[360px] overflow-hidden border-y border-white/25 bg-navy text-center sm:grid-cols-2 lg:min-h-full">
            <Image
              src="/company/10001.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="-z-20 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-navy/72" aria-hidden="true" />

            <div className="relative z-10 col-span-full flex items-center">
              <SpeedingMetrics metrics={introductionMetrics} />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.12fr_.88fr] lg:gap-24 xl:gap-36">
          <div className="hidden lg:block" aria-hidden="true" />
          <Reveal delay={0.08} className="flex flex-col justify-end lg:pb-2">
            <p className="type-body-large">{company.introduction}</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">{company.about}</p>
            <ActionLink href="/about" variant="text" className="mt-9">
              Learn About Our Company
            </ActionLink>
          </Reveal>
        </div>
      </div>

      <ManufacturingFocusCarousel />
    </section>
  );
}
