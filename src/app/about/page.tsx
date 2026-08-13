import type { Metadata } from "next";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="pt-20">
      <CompanyIntro />
      <FinalCta />
    </main>
  );
}
