"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, companyLinks } from "@/data/company";
import { ActionLink } from "@/components/ui/ActionLink";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Manufacturing", href: "/#manufacturing" },
  { label: "Quality", href: "/#quality" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const solidHeader = pathname !== "/" || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButton.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && open && mobileMenu.current) {
        const focusable = Array.from(
          mobileMenu.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          solidHeader
            ? "h-18 border-ink/10 bg-warm-white/95 text-ink backdrop-blur-md"
            : "h-22 border-white/20 bg-transparent text-white"
        }`}
      >
        <div className="page-container grid h-full grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="flex w-fit items-center"
            aria-label={`${company.name} home`}
          >
            <Image
              src={company.logo.src}
              alt={company.logo.alt}
              width={1370}
              height={310}
              priority
              sizes="(max-width: 768px) 132px, 168px"
              className={`h-auto w-[132px] transition-[filter] duration-500 md:w-[168px] ${
                solidHeader ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-8 text-xs font-medium lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <ActionLink
              href={companyLinks.whatsapp}
              external
              variant={solidHeader ? "dark" : "light"}
              className="min-h-11"
            >
              Contact Us
            </ActionLink>
          </div>

          <button
            type="button"
            className="flex size-12 items-center justify-center justify-self-end lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        ref={mobileMenu}
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-ink p-5 text-white transition duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-5">
          <span className="text-[10px] uppercase tracking-[0.16em]">{company.descriptor}</span>
          <button
            ref={closeButton}
            type="button"
            className="flex size-12 items-center justify-center"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center" aria-label="Mobile">
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-5 py-2 text-[clamp(2.2rem,11vw,4rem)] leading-none tracking-[-0.06em]"
            >
              <span className="w-5 text-[10px] tracking-normal text-white/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
        <ActionLink href={companyLinks.whatsapp} external variant="light" className="w-full">
          Contact Us on WhatsApp
        </ActionLink>
      </div>
    </>
  );
}
