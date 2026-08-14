export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export function LegalDocument({
  eyebrow,
  title,
  introduction,
  sections
}: {
  eyebrow: string;
  title: string;
  introduction: readonly string[];
  sections: readonly LegalSection[];
}) {
  return (
    <main className="min-h-screen bg-warm-white pb-28 pt-36 text-ink md:pb-36 md:pt-44">
      <article className="page-container max-w-4xl">
        <p className="type-eyebrow flex items-center gap-3 text-accent">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="type-section-title mt-8">{title}</h1>
        <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-8 text-muted">
          {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="mt-16 border-t border-ink/20">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-6 border-b border-ink/20 py-10 md:grid-cols-[15rem_1fr] md:gap-12">
              <h2 className="text-xl font-medium tracking-[-0.025em]">{section.title}</h2>
              <div className="space-y-5 text-[15px] leading-8 text-muted">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5 marker:text-lab-blue">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
