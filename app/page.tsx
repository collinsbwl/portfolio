"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { ProjectsSection } from "@/components/projects";
import { WritingSection } from "@/components/writing";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState<"work" | "projects" | "writing" | null>("work");
  const toggle = (section: "work" | "projects" | "writing") =>
    setActiveSection(section);
  useEffect(() => {
    const background = dark ? "#18181b" : "#f3f2ed";
    const foreground = dark ? "#e4e4e7" : "#27272a";
    const root = document.documentElement;

    root.style.setProperty("--background", background);
    root.style.setProperty("--foreground", foreground);
  }, [dark]);

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
              <h1 className="text-xl font-bold">Collin Sobowale</h1>
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
                <div
                  className={
                    'space-y-3 text-sm leading-relaxed" ${dark ? "text-zinc-300" : "text-zinc-700"}'
                  }
                >
                  I&apos;m passionate about solving complex problems and
                  building customer-facing products. You can likely find me
                  playing tennis, climbing, and exploring rainforests.
                </div>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
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
                      Autumn.co.
                    </a>
                  </p>
                </div>
              </div>

              {/* Border Line */}
              <div
                className={`pt-2 border-t flex gap-4 ${dark ? "border-zinc-800" : "border-zinc-300"}`}
              >
                {(["work", "projects", "writing"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggle(s)}
                    className={`font-mono text-xs uppercase tracking-wide transition-colors ${
                      dark
                        ? "text-zinc-400 hover:text-zinc-200"
                        : "text-zinc-600 hover:text-zinc-800"
                    }`}
                  >
                    {activeSection === s ? `↑ ${s}` : `↓ ${s}`}
                  </button>
                ))}

              </div>
            </div>
          </header>
        </FadeIn>

        {/* Work, Projects, Writing Sections */}
        <FadeIn delay={0.2}>
          {/* Work*/}
          <section>
            <motion.div
              initial={{ opacity: 1, height: "auto" }}
              animate={{
                opacity: activeSection === "work" ? 1 : 0,
                height: activeSection === "work" ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
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
            </motion.div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeSection === "projects" ? 1 : 0,
                height: activeSection === "projects" ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <h2
                className={`mb-3 text-md font-mono ${
                  dark ? "text-zinc-300" : "neutral-600"
                }`}
              >
                /projects
              </h2>
              <ProjectsSection dark={dark} />
            </motion.div>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeSection === "writing" ? 1 : 0,
                height: activeSection === "writing" ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <h2
                className={`mb-3 text-md font-mono ${
                  dark ? "text-zinc-300" : "neutral-600"
                }`}
              >
                /writing
              </h2>
              <WritingSection dark={dark} />
            </motion.div>
          </section>
        </FadeIn>

        <footer
          className={`mt-8 border-t pt-4 ${
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
