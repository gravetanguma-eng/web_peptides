import { Capabilities } from "@/components/sections/Capabilities";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { Quality } from "@/components/sections/Quality";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <CompanyIntro />
      <Capabilities />
      <Quality />
      <ProductsPreview />
      <FinalCta />
    </main>
  );
}
