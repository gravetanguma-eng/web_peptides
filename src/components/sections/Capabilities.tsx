import { FoldText } from "@/components/effects/FoldText";
import { ScrollStack } from "@/components/effects/ScrollStack";
import { Reveal } from "@/components/motion/Reveal";
import { capabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section id="manufacturing" className="section-pad bg-warm-white">
      <div className="page-container">
        <Reveal>
          <p className="type-eyebrow flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Manufacturing
          </p>
          <h2 className="type-section-title mt-8 max-w-5xl">
            <FoldText text="A controlled path through production." splitBy="word" />
          </h2>
        </Reveal>
        <ScrollStack items={capabilities} />
      </div>
    </section>
  );
}
