import { MoonStar, Sun } from "lucide-react";
// import Link from "next/link";

export function NavBar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
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
