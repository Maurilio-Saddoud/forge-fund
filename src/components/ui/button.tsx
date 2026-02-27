import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-zinc-900 hover:bg-zinc-200 shadow-[0_12px_30px_-12px_rgba(255,255,255,.65)]",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/16",
  ghost: "text-zinc-200 hover:text-white",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-tight transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
