import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/effects/SplitText";
import { QualityDocumentViewer } from "@/components/sections/QualityDocumentViewer";
import { company } from "@/data/company";

export function Quality() {
  return (
    <section id="quality" className="section-pad bg-paper">
      <div className="page-container">
        <Reveal>
          <p className="type-eyebrow flex items-center gap-3 text-accent"><span className="h-px w-8 bg-current" aria-hidden="true" />Quality standards</p>
          <SplitText text="Evidence before claims." className="type-section-title mt-8 max-w-5xl" />
        </Reveal>

        <Reveal className="mt-16">
            <p className="max-w-xl text-[15px] leading-8 text-muted">
              Standards and testing capabilities are presented as replaceable fields. A label does not
              indicate certification until supporting documents have been approved.
            </p>
            <QualityDocumentViewer />
        </Reveal>

        <div className="mt-20 grid items-start gap-x-8 md:grid-cols-2 lg:mt-24">
            {company.qualityStandards.map((standard, index) => (
              <Reveal
                key={standard.name}
                delay={index * 0.035}
                className="grid min-h-32 grid-cols-[38px_1fr_14px] items-center gap-4 border-t border-ink/20 py-5 last:border-b"
              >
                <span className="type-caption text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{standard.name}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{standard.description}</p>
                </div>
                <span className="h-px w-3 bg-ink/35" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
      </div>
    </section>
  );
}
