type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  dark?: boolean;
  id?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
  id,
  titleClassName = ""
}: SectionHeadingProps) {
  return (
    <header className="grid gap-8 md:grid-cols-[22%_1fr] md:gap-0">
      <p
        className={`type-eyebrow flex items-center gap-3 ${
          dark ? "text-white/55" : "text-muted"
        }`}
      >
        <span className="h-px w-7 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`type-section-title max-w-5xl ${
          dark ? "text-white" : "text-ink"
        } ${titleClassName}`}
      >
        {title}
      </h2>
    </header>
  );
}
