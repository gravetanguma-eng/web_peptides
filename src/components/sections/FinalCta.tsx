import { Aurora } from "@/components/effects/Aurora";
import { TextType } from "@/components/effects/TextType";
import { ActionLink } from "@/components/ui/ActionLink";
import { companyLinks } from "@/data/company";

export function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy py-28 text-white md:py-40">
      <Aurora />
      <div className="page-container relative z-10">
        <p className="type-eyebrow flex items-center gap-3 text-white/65"><span className="h-px w-7 bg-current" aria-hidden="true" />Start a conversation</p>
        <TextType as="h2" text="Ready to discuss your peptide requirements?" className="type-section-title mt-10 min-h-[1.9em] max-w-6xl" />
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <ActionLink href={companyLinks.whatsapp} external variant="whatsapp">Chat on WhatsApp</ActionLink>
          <ActionLink href="/products" variant="outline">Explore Products</ActionLink>
        </div>
      </div>
    </section>
  );
}
