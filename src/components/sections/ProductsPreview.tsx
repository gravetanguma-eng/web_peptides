import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/effects/SplitText";
import { ProductCard } from "@/components/products/ProductCard";
import { ActionLink } from "@/components/ui/ActionLink";
import { products } from "@/data/products";

export function ProductsPreview() {
  return (
    <section id="products" className="section-pad bg-warm-white">
      <div className="page-container">
        <Reveal>
          <p className="type-eyebrow flex items-center gap-3 text-accent"><span className="h-px w-8 bg-current" aria-hidden="true" />Products</p>
          <SplitText text="Explore the peptide portfolio." className="type-section-title mt-8 max-w-5xl sm:whitespace-nowrap sm:text-[clamp(2.4rem,4.4vw,4.3rem)]" />
        </Reveal>
        <p className="ml-auto mt-10 max-w-xl text-[15px] leading-7 text-muted">
          Contact us via WhatsApp to purchase peptide products.
        </p>
        <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex justify-end">
          <ActionLink href="/products">View All Products</ActionLink>
        </div>
      </div>
    </section>
  );
}
