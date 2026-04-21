import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Camera,
  Github,
  Mail,
} from "lucide-react";
import { PersonalNav } from "@/components/personal-nav";
import { TransitionLink } from "@/components/transition-link";

type LogoProps = {
  className?: string;
};

function XLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
    </svg>
  );
}

function BlueskyLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" />
    </svg>
  );
}

function LinkedInLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.371 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.559V9h3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function TikTokLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

function TwitchLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
  );
}

const mainLinks = [
  {
    label: "Email",
    note: "Best way to reach me",
    href: "mailto:hey@joaosv.com",
    icon: Mail,
    featured: true,
  },
  {
    label: "Trinnea",
    note: "Company behind the projects I ship",
    href: "https://trinnea.com",
    icon: Building2,
    featured: true,
  },
  {
    label: "GitHub",
    note: "Code and experiments",
    href: "https://github.com/thejoaosv",
    icon: Github,
    featured: true,
  },
  {
    label: "Blog",
    note: "Writing and project notes",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "Gallery",
    note: "Photography and visual work",
    href: "https://joaovasconcelos.com",
    icon: Camera,
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/thejoaosv",
    icon: XLogo,
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/me.joaosv.com",
    icon: BlueskyLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joaosvasconcelos/",
    icon: LinkedInLogo,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@thejoaosv",
    icon: TikTokLogo,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/thejoaosv",
    icon: InstagramLogo,
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/thejoaosv",
    icon: TwitchLogo,
  },
];

export default function Links() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[color:var(--page-bg)] px-5 pb-12 pt-28 text-[color:var(--page-fg)] md:px-8 md:pt-32">
      <PersonalNav current="links" />

      <section className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <header className="md:sticky md:top-28">
          <p className="mb-4 text-base text-[color:var(--page-muted)]">
            quick ways to find me
          </p>
          <h1 className="max-w-sm text-[clamp(3.2rem,8vw,6.5rem)] font-semibold leading-[0.9]">
            My links.
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-8 text-[color:var(--page-muted)]">
            Simple place for the main stuff: email, Trinnea, writing, code,
            socials and photos.
          </p>
        </header>

        <div className="grid gap-4">
          <div className="grid gap-3">
            {mainLinks.map((link) => {
              const classes = `group flex items-center justify-between gap-5 border transition-all duration-300 ${
                link.featured
                  ? "border-[color:var(--page-fg)] bg-[color:var(--page-fg)] p-5 text-[color:var(--page-bg)] hover:opacity-90 md:p-6"
                  : "border-[color:var(--page-line)] bg-[color:var(--page-glass)] p-5 text-[color:var(--page-fg)] hover:border-[color:var(--page-line-strong)] hover:bg-[color:var(--page-card)]"
              }`;

              const content = (
                <>
                  <span className="flex min-w-0 items-center gap-4">
                    <span
                      className={`grid size-11 shrink-0 place-items-center ${
                        link.featured
                          ? "bg-[color:var(--page-bg)] text-[color:var(--page-fg)]"
                          : "bg-[color:var(--page-fg)] text-[color:var(--page-bg)]"
                      }`}
                    >
                      <link.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xl font-semibold">
                        {link.label}
                      </span>
                      <span
                        className={`mt-1 block text-sm leading-5 ${
                          link.featured
                            ? "text-[color:var(--page-inverse-muted)]"
                            : "text-[color:var(--page-muted)]"
                        }`}
                      >
                        {link.note}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      link.featured
                        ? "text-[color:var(--page-bg)]"
                        : "text-[color:var(--page-accent)]"
                    }`}
                  />
                </>
              );

              if (link.href.startsWith("/")) {
                return (
                  <TransitionLink key={link.href} href={link.href} className={classes}>
                    {content}
                  </TransitionLink>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={classes}
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-[color:var(--page-line)] pt-4 sm:flex-nowrap">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1.5 border border-[color:var(--page-line)] bg-[color:var(--page-glass)] px-2 text-[11px] font-medium text-[color:var(--page-fg)] transition-colors hover:border-[color:var(--page-line-strong)] hover:bg-[color:var(--page-card)] sm:text-xs"
                aria-label={link.label}
                title={link.label}
              >
                <span className="grid size-4 shrink-0 place-items-center text-[color:var(--page-fg)]">
                  <link.icon className="size-3.5" />
                </span>
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>

          <p className="text-sm leading-6 text-[color:var(--page-muted)]">
            Kept short on purpose. If something is missing, email is probably
            the right place.
          </p>
        </div>
      </section>
    </main>
  );
}
