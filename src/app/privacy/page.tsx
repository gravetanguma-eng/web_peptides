import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyIntroduction, privacySections } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      introduction={privacyIntroduction}
      sections={privacySections}
    />
  );
}
