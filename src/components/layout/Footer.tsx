import Image from "next/image";
import Link from "next/link";
import { company, companyLinks } from "@/data/company";

export function Footer() {
  const hasResearchUseNotice = !company.researchUseNotice.toLowerCase().includes("pending");

  return (
    <footer className="bg-ink py-16 text-white md:py-20">
      <div className="page-container">
        <Image
          src={company.logo.src}
          alt={company.logo.alt}
          width={1370}
          height={310}
          sizes="180px"
          className="h-auto w-[168px] brightness-0 invert md:w-[180px]"
        />

        <p className="type-section-title mt-6 border-b border-white/20 pb-12 md:pb-14">
          {company.descriptor}
        </p>

        <div className="grid grid-cols-2 gap-x-7 gap-y-12 py-12 text-[13px] leading-6 text-white/72 md:py-14 lg:grid-cols-4 lg:gap-12 [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-white">
          <div className="flex flex-col items-start gap-2.5">
            <p className="footer-label">Company</p>
            <Link href="/#about">About</Link>
            <Link href="/#manufacturing">Manufacturing</Link>
            <Link href="/#quality">Quality</Link>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <p className="footer-label">Products</p>
            <Link href="/products">Product catalogue</Link>
            <Link href="/#manufacturing">Capabilities</Link>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <p className="footer-label">Contact</p>
            <a href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            {company.email ? <a href={companyLinks.email}>{company.email}</a> : null}
            {company.address ? <span>{company.address}</span> : null}
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <p className="footer-label">Legal</p>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms</Link>
            {hasResearchUseNotice ? <span>{company.researchUseNotice}</span> : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/20 pt-6 text-[10px] uppercase tracking-[0.1em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}</span>
          {company.legalName ? <span>{company.legalName}</span> : null}
          <Link href="/#top" className="transition-colors hover:text-white">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
