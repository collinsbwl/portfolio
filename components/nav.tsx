"use client";

import { MoonStar, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <nav>
      <ul
        className={`py-3 flex items-center justify-end gap-4 text-xs font-mono uppercase tracking-wide ${
          dark ? "text-zinc-400" : "text-zinc-600"
        }`}
      >
        {/*
        <li>
          <Link href="/" className={dark ? "hover:text-zinc-200" : "hover:text-zinc-800"}>
            home
          </Link>
        </li>
        <li>
          <a href="/#projects" className={dark ? "hover:text-zinc-200" : "hover:text-zinc-800"}>
            projects
          </a>
        </li>
        <li>
          <Link href="/writing" className={dark ? "hover:text-zinc-200" : "hover:text-zinc-800"}>
            writing
          </Link>
        </li>
        */}
        {[
          { href: "/", label: "home" },
          { href: "/projects", label: "projects" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`transition-colors ${
                pathname === href
                  ? dark
                    ? "text-zinc-200"
                    : "text-zinc-800"
                  : dark
                    ? "hover:text-zinc-200"
                    : "hover:text-zinc-800"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => setDark(!dark)}
            className="flex rounded p-1 transition-colors duration-1000"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <MoonStar size={16} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
