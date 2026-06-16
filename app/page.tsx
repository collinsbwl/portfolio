"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";

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

  // const projects = [
  //   {
  //     name: "Ignition",
  //     desc: "x",
  //     tech: "python",
  //   },
  //   {
  //     name: "temp",
  //     desc: "x",
  //     tech: "python",
  //   },
  // ];

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
      desc: "Client AI Solutions + Internal Apps",
    },

    {
      role: "Software Engineer intern",
      company: "KGS Group",
      period: "May 2025 - Aug 2025",
      desc: "Internal Platforms",
    },

    {
      role: "Cloud Engineer Intern",
      company: "CIBC",
      period: "May 2024 - Aug 2024",
      desc: "Cloud Migrations and AI Integration",
    },
  ];

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        dark ? "bg-zinc-900 text-zinc-200" : "bg-[#f3f2ed] text-zinc-800"
      }`}
    >
      <div className="mx-auto max-w-2xl px-6 py-16">
        <FadeIn delay={0} className="mb-8">
          <header>
            <div className="mb-2 flex items-center justify-between">
              <h1 className="text-xl">Collin Sobowale</h1>
              <button
                onClick={() => setDark(!dark)}
                className="rounded p-2 transition-colors duration-1000"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <p
              className={`text-sm font-mono ${
                dark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {" "}
            </p>

            <div
              className={`mt-2 space-y-2 ${dark ? "text-zinc-300" : "text-zinc-700"}`}
            >
              <div className="max-w-xl space-y-2">
                <div
                  className={`flex items-center gap-2 text-sm font-mono ${dark ? "text-zinc-400" : "neutral-600"}`}
                >
                  <span>Computer Science + Business @ Western/Ivey</span>
                </div>
              </div>

              {/* Border Line */}
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

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: showMore ? 1 : 0,
                    height: showMore ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-3 text-sm leading-relaxed">
                    <p>
                      Passionate about what inspires me; people, problem
                      solving, chess, and tennis.
                    </p>
                    <p>
                      Currently researching AI ethics, cloud computing, data
                      centre flooding.
                    </p>
                    <p>
                      Building + engineering [at]{" "}
                      <a
                        className="hover:underline hover:underline-offset-4"
                        href="https://iveyproductsociety.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ivey Product Management Society
                      </a>
                      ,{" "}
                      <a
                        className="hover:underline hover:underline-offset-4"
                        href="https://www.autumn.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Autumn.co
                      </a>
                      .
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* Work, Projects, Writing Sections */}
        <FadeIn delay={0.2} className="mb-9">
          {/* Work*/}
          <section>
            <h2
              className={`mb-3 text-md font-mono ${
                dark ? "text-zinc-300" : "neutral-600"
              }`}
            >
              /work
            </h2>

            <div className="space-y-3">
              {work.map((item) => (
                <div key={`${item.role}-${item.company}`}>
                  {/*Company*/}
                  <div className="mb-1 text-sm flex items-baseline justify-between">
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
        </FadeIn>

        <FadeIn delay={0.4} className="mb-9">
          <h2
            className={`mb-3 text-md font-mono ${
              dark ? "text-zinc-300" : "neutral-600"
            }`}
          >
            /projects
          </h2>
          <div className="space-y-6">
            <span
              className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-500"}`}
            >
              section in progress.
            </span>
          </div>
          {/* <div className="space-y-6">
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
          </div> */}
        </FadeIn>

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
          className={`mt-4 border-t pt-4 ${
            dark ? "border-zinc-700" : "border-zinc-300"
          } flex flex-row`}
        >
          <div
            className={`text-sm font-mono ${
              dark ? "text-zinc-400" : "text-zinc-500"
            } flex flex-row`}
          >
            <Link href={"https://github.com/collinsbwl"} className="underline">
              {""}
              github{" "}
            </Link>
            <p> \ </p>
            <Link
              href={"https://www.linkedin.com/in/collinsbwle/"}
              className="underline"
            >
              {" "}
              linkedin{" "}
            </Link>
            <p> \ </p>
            <Link
              type="mail"
              href={"mailto:collinsbwle@gmail.com"}
              className="underline"
            >
              {" "}
              email{" "}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
