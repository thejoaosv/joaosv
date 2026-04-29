import { ArrowRight, ArrowUpRight, BookOpen, Home, Link2, Mail } from "lucide-react";
import { PersonalNav } from "@/components/personal-nav";
import { TransitionLink } from "@/components/transition-link";

const nextPlaces = [
  {
    label: "Home",
    note: "Back to the small personal room.",
    href: "/",
    icon: Home,
  },
  {
    label: "Links",
    note: "Email, socials, code, photos and the main stuff.",
    href: "/links",
    icon: Link2,
  },
  {
    label: "Blog",
    note: "Notes from projects, ideas and things I keep coming back to.",
    href: "/blog",
    icon: BookOpen,
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[color:var(--page-bg)] px-5 pb-10 pt-28 text-[color:var(--page-fg)] md:px-8 md:pt-32">
      <PersonalNav />

      <section className="mx-auto grid max-w-5xl gap-8 md:min-h-[calc(100vh-10rem)] md:grid-cols-[1fr_0.85fr] md:items-center">
        <div>
          <p className="mb-4 text-base text-[color:var(--page-muted)]">
            404 / page not found
          </p>
          <h1 className="max-w-2xl text-[clamp(3.1rem,7.5vw,6.25rem)] font-semibold leading-[0.9]">
            This corner is empty.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[color:var(--page-muted)]">
            The link might have moved, or I may have renamed something while
            cleaning up the site. Nothing dramatic.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TransitionLink
              href="/"
              className="inline-flex h-11 w-full items-center justify-center border border-transparent bg-[color:var(--page-fg)] px-5 text-sm font-medium text-[color:var(--page-bg)] transition-colors hover:opacity-85 sm:w-48"
            >
              Go home
              <ArrowRight className="ml-2 size-4" />
            </TransitionLink>
            <a
              href="mailto:hey@joaosv.com"
              className="inline-flex h-11 w-full items-center justify-center border border-[color:var(--page-line-strong)] px-5 text-sm font-medium text-[color:var(--page-fg)] transition-colors hover:bg-[color:var(--page-card)] sm:w-48"
            >
              Tell me what broke
              <Mail className="ml-2 size-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[color:var(--page-line)] pt-5 text-sm text-[color:var(--page-muted)]">
            <span>Try elsewhere:</span>
            {nextPlaces.slice(1).map((place) => (
              <TransitionLink
                key={place.href}
                href={place.href}
                className="inline-flex items-center gap-1.5 text-[color:var(--page-fg)] hover:text-[color:var(--page-muted)]"
              >
                <place.icon className="size-4" />
                {place.label}
              </TransitionLink>
            ))}
          </div>
        </div>

        <div className="border border-[color:var(--page-line)] bg-[color:var(--page-glass)] p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-[color:var(--page-line)] pb-4 text-sm text-[color:var(--page-muted)]">
            <span>missing route</span>
            <Home className="size-4" />
          </div>
          <div className="py-8 md:py-10">
            <p className="text-[clamp(6rem,18vw,12rem)] font-semibold leading-none tracking-normal text-[color:var(--page-fg)]">
              404
            </p>
            <p className="mt-4 max-w-sm text-base leading-7 text-[color:var(--page-muted)]">
              Kept short on purpose. The page is not here, but the rest of the
              site still is.
            </p>
          </div>
          <TransitionLink
            href="/"
            className="group flex items-center justify-between border-t border-[color:var(--page-line)] pt-4 text-sm font-medium"
          >
            Start from home
            <ArrowUpRight className="size-4 text-[color:var(--page-accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </TransitionLink>
        </div>
      </section>
    </main>
  );
}
