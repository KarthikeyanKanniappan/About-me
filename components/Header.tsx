"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const links = [
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="container-page flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/" className="flex items-center gap-3">
        <span
          aria-hidden
          className="size-4 shrink-0 rounded-full bg-accent-orange motion-safe:animate-dot-pulse"
        />
        <span className="font-heading text-lg font-bold">{profile.name}</span>
        <span className="text-muted">{profile.role}</span>
      </Link>

      <nav aria-label="Main">
        <ul className="flex">
          {links.map(({ href, label }, i) => {
            const active = pathname === href;
            return (
              <li key={href} className={i > 0 ? "border-l border-line" : undefined}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-1 font-normal underline-offset-8 hover:underline ${
                    i === 0 ? "pl-0 sm:pl-4" : ""
                  } ${active ? "font-semibold underline decoration-2" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
