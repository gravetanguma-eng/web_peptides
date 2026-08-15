import type { Metadata } from "next";
import { ProductCard } from "@/components/products/ProductCard";
import { FloatingBackLink } from "@/components/ui/FloatingBackLink";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the peptide product catalogue."
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-warm-white pb-28 pt-40">
      <div className="page-container">
        <FloatingBackLink href="/">Back to Homepage</FloatingBackLink>
        <p className="type-eyebrow mt-14 text-muted">Product catalogue</p>
        <h1 className="type-display mt-8 max-w-5xl">
          Peptide products, clearly specified.
        </h1>
        <p className="mt-10 max-w-xl text-base leading-8 text-muted">
          Current entries are structural placeholders. Replace them with approved product names,
          specifications, images and intended-use statements before publication.
        </p>
        <div className="mt-20 grid gap-x-7 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

