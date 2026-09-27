import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/constants/links";

interface LinkCardProps {
  link: LinkItem;
  isFirst?: boolean;
}

export function LinkCard({ link, isFirst = false }: LinkCardProps) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      className={`group flex items-center min-h-[4.375rem] border-b border-line no-underline text-foreground relative transition-all duration-300 hover:pl-4 hover:bg-white ${
        isFirst ? "border-t border-foreground" : ""
      }`}
    >
      <span className="w-12 font-mono text-xs text-neutral-400">
        {link.num}
      </span>
      <span className="flex-1 text-base font-bold tracking-tight">
        {link.title}
      </span>
      <span className="hidden sm:block mr-4 font-mono text-[0.625rem] uppercase text-neutral-500">
        {link.sub}
      </span>
      <ArrowUpRight
        className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        aria-hidden="true"
      />
    </a>
  );
}
