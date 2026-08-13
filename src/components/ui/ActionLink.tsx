import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "outline" | "text" | "whatsapp";
  external?: boolean;
  className?: string;
};

const variants = {
  light: "bg-warm-white text-ink hover:bg-lab-blue hover:text-white",
  dark: "bg-ink text-white hover:bg-lab-blue",
  outline: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  text: "border-b border-current px-0 text-current",
  whatsapp: "bg-[#25d366] text-[#071b12] hover:bg-[#20bd5a]"
};

export function ActionLink({
  href,
  children,
  variant = "dark",
  external = false,
  className = ""
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-between gap-8 px-5 text-[13px] font-semibold transition-colors duration-300 motion-reduce:transition-none ${variants[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        strokeWidth={1.5}
      />
    </Link>
  );
}
