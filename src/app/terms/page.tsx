import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsIntroduction, termsSections } from "@/data/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions"
};

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms and Conditions"
      introduction={termsIntroduction}
      sections={termsSections}
    />
  );
}
