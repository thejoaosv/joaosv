"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";

    applyTheme(initialTheme);

    window.requestAnimationFrame(() => {
      setTheme(initialTheme);
    });
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle grid h-9 w-9 place-items-center text-[color:var(--page-muted)] transition-colors duration-500 hover:text-[color:var(--page-fg)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="relative grid size-4 place-items-center">
        <Sun
          className={`absolute size-4 transition-all duration-500 ${
            theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute size-4 transition-all duration-500 ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 -rotate-90 opacity-0"
          }`}
        />
        <Monitor className="sr-only" />
      </span>
    </button>
  );
}
