"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const background = dark ? "#18181b" : "#f3f2ed";
    const foreground = dark ? "#e4e4e7" : "#27272a";
    const root = document.documentElement;

    root.style.setProperty("--background", background);
    root.style.setProperty("--foreground", foreground);
  }, [dark]);

  const projects = [
    {
      name: "Ignition",
      desc: "x",
      tech: "python",
    },
    {
      name: "temp",
      desc: "x",
      tech: "python",
    },
  ];

  // const papers = [
  //   {
  //     title: "page",
  //     venue: "x",
  //     desc: "x",
  //   },
  // ];

  const work = [
    {
      role: "AI Engineer intern",
      company: "Bond Brand Loyalty",
      period: "May 2026 - Aug 2026",
      desc: "Internal Development + Client AI Solutions.",
    },

    {
      role: "Software Engineer intern",
      company: "KGS Group",
      period: "May 2024 - Aug 2024",
      desc: "Internal Platforms.",
    },

    {
      role: "Cloud Engineer Intern",
      company: "CIBC",
      period: "May 2024 - Aug 2024",
      desc: "Cloud Migrations and AI Integration.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-zinc-900 text-zinc-200" : "bg-[#f3f2ed] text-zinc-800"
      }`}
    >
      <div className="mx-auto max-w-3xl px-6 py-16">
        <button
          onClick={() => setDark(!dark)}
          className={`fixed right-6 top-6 rounded p-2 transition-colors duration-1000`}
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <header className="mb-16">
          <h1 className="mb-2 text-3xl font-mono">Collin Sobowale</h1>
          <p
            className={`text-sm font-mono ${
              dark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {" "}
          </p>

          <div
            className={`mt-6 space-y-4 max-w-xl ${dark ? "text-zinc-300" : "text-zinc-700"}`}
          >
            <p className="text-sm leading-relaxed">
              Interested in building products and solutions.
            </p>

            <div
              className={`flex items-center gap-2 text-sm font-mono ${dark ? "text-zinc-400" : "neutral-600"}`}
            >
              <span>Computer Science + Business @ Western/Ivey</span>
            </div>

            <div
              className={`pt-2 border-t ${dark ? "border-zinc-800" : "border-zinc-300"}`}
            >
              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                className={`font-mono text-xs uppercase tracking-wide transition-colors ${
                  dark
                    ? "text-zinc-400 hover:text-zinc-200"
                    : "text-zinc-600 hover:text-zinc-800"
                }`}
              >
                {showMore ? "↑ show less" : "↓ read more"}
              </button>

              {showMore && (
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p>Hey 👋.</p>
                  <p>x.</p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Work, Projects, Writing Sections */}
        <section className="mb-16">
          {/* Work*/}
          <section>
            <h2
              className={`mb-3 text-l font-mono ${
                dark ? "text-zinc-300" : "neutral-600"
              }`}
            >
              /work
            </h2>

            <div className="space-y-6">
              {work.map((item) => (
                <div key={`${item.role}-${item.company}`}>
                  {/*Company*/}
                  <div className="mb-1 text-md flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className={dark ? "text-zinc-200" : "neutral-600"}>
                        {item.company}
                      </span>
                      <span
                        className={`text-sm ${dark ? "text-zinc-200" : "neutral-600"}`}
                      >
                        {" · "}
                      </span>

                      {/*Role*/}
                      <span
                        className={`text-md ${
                          dark ? "text-zinc-200" : "neutral-600"
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>

                    {/*Time*/}
                    <span
                      className={`text-xs ${
                        dark ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* <div
                    className={`mb-1 text-sm ${
                      dark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {item.role}
                  </div> */}
                  {/*Description*/}
                  <p
                    className={`text-sm ${
                      dark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="mb-16">
          <h2
            className={`mb-6 text-xl font-mono ${
              dark ? "text-zinc-300" : "opacity-60"
            }`}
          >
            ~/projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name} className="font-mono">
                <div className="mb-1 flex items-baseline gap-3">
                  <span className={dark ? "text-zinc-200" : "text-zinc-800"}>
                    {project.name}
                  </span>
                  <span
                    className={`text-xs ${
                      dark ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {project.tech}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    dark ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="mb-6">
          <h2
            className={`mb-6 text-xl font-mono ${
              dark ? "text-zinc-300" : "opacity-60"
            }`}
          >
            ~/writing
          </h2>
          <div className="space-y-6">
            {papers.map((paper) => (
              <div key={paper.title} className="font-mono">
                <div className="mb-1 flex items-baseline gap-3">
                  <span className={dark ? "text-zinc-200" : "text-zinc-800"}>
                    {paper.title}
                  </span>
                  <span
                    className={`text-xs ${
                      dark ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {paper.venue}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    dark ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {paper.desc}
                </p>
              </div>
            ))}
          </div>
        </section> */}

        <footer
          className={`mt-16 border-t pt-8 ${
            dark ? "border-zinc-700" : "border-zinc-300"
          } flex flex-row`}
        >
          <div
            className={`text-sm font-mono ${
              dark ? "text-zinc-400" : "text-zinc-500"
            } flex flex-row`}
          >
            <Link href={"x"} className="underline">
              {" "}
              github{" "}
            </Link>
            <p> \ </p>
            <Link href={"x"} className="underline">
              {" "}
              linkedin{" "}
            </Link>
            <p> \ </p>
            <Link type="mail" href={"mailto:x"} className="underline">
              {" "}
              email{" "}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
