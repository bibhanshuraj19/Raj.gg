import Link from "next/link";
import { ReactNode } from "react";

export default function TechBadge({ title, icon, link }: { title: string; icon: ReactNode; link: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-tertiary border border-border-subtle hover:border-cyan/25 hover:bg-cyan/5 transition-all duration-300 group/badge shrink-0 hover:shadow-[0_0_12px_-4px_var(--glow-cyan)]"
    >
      {icon}
      <span className="text-[11px] font-mono font-medium text-text-dim group-hover/badge:text-cyan transition-colors whitespace-nowrap">
        {title}
      </span>
    </Link>
  );
}
