import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { companyLinks } from "@/data/company";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product?.name ?? "Product not found",
    description: product?.summary
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-warm-white pb-28 pt-36">
      <div className="page-container">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to products
        </Link>
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-24">
          <div className="relative aspect-square overflow-hidden bg-white">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain"
            />
          </div>
          <div className="self-center">
            <p className="type-caption text-muted">{product.category}</p>
            <h1 className="type-section-title mt-6">
              {product.name}
            </h1>
            <p className="mt-8 text-base leading-8 text-muted">{product.summary}</p>
            {product.specification ? (
              <div className="mt-10 border-y border-ink/20 py-6">
                <span className="type-caption text-muted">Specification</span>
                <p className="mt-3">{product.specification}</p>
              </div>
            ) : null}
            <p className="mt-6 text-[10px] uppercase tracking-[0.12em] text-lab-blue">
              Placeholder product record — verification required
            </p>
            <ActionLink href={companyLinks.whatsapp} external className="mt-10">
              Discuss This Requirement
            </ActionLink>
          </div>
        </div>
      </div>
    </main>
  );
}
