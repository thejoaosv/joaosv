"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { TransitionLink } from "@/components/transition-link";

type PersonalNavProps = {
  current?: "home" | "links";
};

export function PersonalNav({ current = "home" }: PersonalNavProps) {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    function updateLiftedState() {
      setLifted(window.scrollY > 18);
    }

    updateLiftedState();
    window.addEventListener("scroll", updateLiftedState, { passive: true });

    return () => window.removeEventListener("scroll", updateLiftedState);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 px-4 md:top-5">
      <div
        className={`mx-auto flex h-12 max-w-4xl items-center justify-between border px-2 text-sm text-[color:var(--page-fg)] backdrop-blur-xl transition-all duration-500 md:px-3 ${
          lifted
            ? "border-[color:var(--page-line-strong)] bg-[color:var(--page-nav)] shadow-[0_18px_50px_color-mix(in_srgb,var(--page-fg)_13%,transparent)]"
            : "border-transparent bg-transparent shadow-none"
        }`}
      >
        <TransitionLink
          href="/"
          className="flex items-center gap-2 font-medium"
          aria-label="Go home"
        >
          <span className="grid size-8 place-items-center bg-[color:var(--page-fg)] text-xs font-semibold text-[color:var(--page-bg)] transition-colors duration-500">
            JV
          </span>
          <span className="hidden sm:inline">João</span>
        </TransitionLink>

        <div className="flex items-center gap-1">
          <TransitionLink
            href="/"
            className={`px-3 py-2 transition-colors duration-500 hover:text-[color:var(--page-fg)] ${
              current === "home" ? "text-[color:var(--page-fg)]" : "text-[color:var(--page-muted)]"
            }`}
          >
            Home
          </TransitionLink>
          <TransitionLink
            href="/links"
            className={`px-3 py-2 transition-colors duration-500 hover:text-[color:var(--page-fg)] ${
              current === "links" ? "text-[color:var(--page-fg)]" : "text-[color:var(--page-muted)]"
            }`}
          >
            Links
          </TransitionLink>
          <a
            href="mailto:hey@joaosv.com"
            className="ml-1 hidden items-center gap-1 bg-[color:var(--page-fg)] px-3 py-2 font-medium text-[color:var(--page-bg)] transition-colors duration-500 hover:opacity-85 sm:inline-flex"
          >
            Write <ArrowUpRight className="size-3.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
