import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group flex h-full flex-col border-t border-ink/20 pt-4">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-contain transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-5 py-5">
        <div>
          <p className="type-caption text-muted">{product.category}</p>
          <h3 className="mt-3 text-2xl tracking-[-0.04em]">{product.name}</h3>
          <p className="mt-4 text-sm leading-6 text-muted">{product.summary}</p>
          {product.specification ? (
            <p className="mt-3 text-xs leading-5 text-muted">{product.specification}</p>
          ) : null}
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          strokeWidth={1.25}
        />
      </div>
      <span className="mt-auto pt-2 text-[13px] font-semibold">View Details</span>
    </Link>
  );
}
