import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the peptide product catalogue."
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-warm-white pb-28 pt-40">
      <div className="page-container">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-3 border border-ink/25 px-5 text-sm font-semibold transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lab-blue motion-reduce:transition-none"
        >
          <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
          Back to Homepage
        </Link>
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
