import Link from "next/link";
import { ReactNode } from "react";

export default function TechBadge({ title, icon, link }: { title: string; icon: ReactNode; link: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest hover:bg-accent/8 transition-all duration-300 group/badge shrink-0"
    >
      {icon}
      <span className="text-xs font-label font-medium text-on-surface-variant group-hover/badge:text-accent transition-colors whitespace-nowrap">
        {title}
      </span>
    </Link>
  );
}
