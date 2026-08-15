import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function FloatingBackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-[5.5rem] z-40">
        <div className="page-container">
          <Link
            href={href}
            className="pointer-events-auto inline-flex min-h-11 w-fit items-center gap-3 border border-ink/25 bg-warm-white/95 px-5 text-sm font-semibold shadow-[0_8px_24px_rgba(7,15,24,0.08)] backdrop-blur-md transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lab-blue motion-reduce:transition-none"
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            {children}
          </Link>
        </div>
      </div>
      <div className="h-11" aria-hidden="true" />
    </>
  );
}

