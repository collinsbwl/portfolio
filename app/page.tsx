"use client";

import Link from "next/link";
import { Mail, MoveUpRight } from "lucide-react";
import { ChessEmbed } from "@/components/chess-embed";
import { FadeIn } from "@/components/fade-in";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { NavBar } from "@/components/nav";
import { ProjectsSection } from "@/components/projects";
// import { WritingSection } from "@/components/writing";
import { useTheme } from "@/components/use-theme";

export default function Portfolio() {
  const [dark, setDark] = useTheme();

  const work = [
    {
      role: "Software Engineer intern",
      company: "Bond Brand Loyalty",
      href: "https://bondbl.com/bond-ai/",
      period: "May 2026 - Aug 2026",
      desc: "Client AI Solutions + Internal Apps",
    },

    {
      role: "Software Engineer intern",
      company: "KGS Group",
      href: "https://www.kgsgroup.com/about/#heading-2",
      period: "June 2025 - Aug 2025",
      desc: "Internal Platforms",
    },

    {
      role: "Cloud Engineer Intern",
      company: "CIBC",
      href: "https://cibc.mediaroom.com/2025-05-27-CIBC-launches-in-house-AI-platform-enterprise-wide-after-successful-pilot",
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
      <div className="mx-auto max-w-2xl px-6 py-8">
        <NavBar dark={dark} setDark={setDark} />
        <div className="mb-8 grid gap-6">
          <FadeIn delay={0}>
            <header>
              <h1 className="mb-2 text-3xl font-semibold">Collin Sobowale</h1>

              <div
                className={`max-w-xl space-y-1 text-sm leading-relaxed ${
                  dark ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                <p
                  className={`font-mono ${dark ? "text-zinc-400" : "text-zinc-800"}`}
                >
                  Computer Science + Business [at] Western / Ivey
                </p>
                <p>
                  Passionate about chess, tennis, climbing, and exploring
                  rainforests.
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
                  </a>{" "}
                  &{" "}
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href="https://www.autumn.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Autumn.co.
                  </a>
                </p>
                <div
                  className={`flex mt-4 items-center gap-4 ${
                    dark
                      ? "text-zinc-400 [&_a:hover]:text-zinc-200"
                      : "text-zinc-600 [&_a:hover]:text-zinc-800"
                  }`}
                >
                  <Link
                    href="https://github.com/collinsbwl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition-colors"
                  >
                    <GithubIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/collinsbwle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition-colors"
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link
                    href="mailto:collinsbwle@gmail.com"
                    aria-label="Email"
                    className="transition-colors"
                  >
                    <Mail size={17} />
                  </Link>
                </div>
              </div>

              {/* Border Line */}
              <div
                className={`mt-6 border-t ${dark ? "border-zinc-800" : "border-zinc-300"}`}
              />
            </header>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ChessEmbed dark={dark} />
          </FadeIn>
        </div>

        <div className="max-w-2xl">
          {/* Work, Projects, Writing Sections */}
          <FadeIn delay={0.2}>
            {/* Border Line */}
            <div
              className={`border-t ${dark ? "border-zinc-800" : "border-zinc-300"}`}
            />
            {/* Work*/}
            <section className="mt-8">
              <div>
                <h2
                  className={`mb-3 text-md font-mono ${
                    dark ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  /work [1]
                </h2>

                {/* While any experience is hovered the others fade, and the hovered one brightens */}
                <div className="group/list space-y-3">
                  {work.map((item) => (
                    <a
                      key={`${item.role}-${item.company}`}
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`group block transition duration-300 group-hover/list:opacity-50 hover:opacity-100! ${
                        dark
                          ? "text-zinc-300 hover:text-white"
                          : "text-zinc-800 hover:text-black"
                      }`}
                    >
                      {/*Company*/}
                      <div className="mb-1 text-sm flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="group-hover:underline underline-offset-4">
                            {item.company}
                          </span>
                          <span>{" · "}</span>

                          {/*Role*/}
                          <span>
                            {item.role}
                            <MoveUpRight
                              size={12}
                              aria-hidden="true"
                              className="ml-1 inline opacity-70"
                            />
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
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
            {/* Border Line */}
            <div
              className={`mt-8 border-t ${dark ? "border-zinc-800" : "border-zinc-300"}`}
            />
            <section id="projects" className="mt-8">
              <div>
                <h2
                  className={`mb-3 text-md font-mono ${
                    dark ? "text-zinc-300" : "text-zinc-800"
                  }`}
                >
                  /projects [2]
                </h2>
                <ProjectsSection dark={dark} />
              </div>
            </section>
          </FadeIn>

          {/*
          <FadeIn delay={0.5}>
            <section id="writing" className="mt-8">
              <div>
                <h2
                  className={`mb-3 text-md font-mono ${
                    dark ? "text-zinc-300" : "text-zinc-800"
                  }`}
                >
                  /writing
                </h2>
                <WritingSection dark={dark} />
              </div>
            </section>
          </FadeIn>
          */}
        </div>

        {/* Footer: closing line plus breathing room at the bottom of the page */}
        <footer
          className={`mt-8 h-24 border-t ${dark ? "border-zinc-800" : "border-zinc-300"}`}
        />
      </div>
    </div>
  );
}
