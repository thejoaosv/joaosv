import {
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Mail,
  Music2,
  Sparkles,
  Wrench,
  Car,
  Plane,
} from "lucide-react";
import { PersonalNav } from "@/components/personal-nav";
import { TransitionLink } from "@/components/transition-link";

const interests = [
  {
    title: "Coding",
    text: "I like building useful things, learning by shipping, and making small ideas real.",
    icon: Code2,
  },
  {
    title: "AI",
    text: "As interesting to me as coding itself: tools, agents, automation, and new ways to think with software.",
    icon: Sparkles,
  },
  {
    title: "Engineering",
    text: "I like figuring out how systems work, from software architecture to machines and space.",
    icon: Wrench,
  },
  {
    title: "Cars",
    text: "Motorsport, road trips, design details, and the feeling of movement.",
    icon: Car,
  },
  {
    title: "Music",
    text: "A constant background for studying, coding, walking and thinking.",
    icon: Music2,
  },
  {
    title: "Photography & travel",
    text: "New places, roads, trains and small details I want to remember properly.",
    icon: Plane,
  },
];

const now = [
  "Studying, coding, learning AI, and trying to get better every week.",
  "Building web projects, small tools, and experiments when an idea keeps coming back.",
  "Taking photos, listening to music, and watching anything about cars or engineering.",
];

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[color:var(--page-bg)] text-[color:var(--page-fg)]">
      <PersonalNav current="home" />

      <section className="px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-base text-[color:var(--page-muted)] md:text-lg">
            Hi, I am João.
          </p>
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95]">
            A student who likes to build things and understand how they work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--page-muted)] md:text-xl md:leading-9">
            Mostly into coding, AI, engineering and cars. I also care a lot
            about music, photography and travel. This site is meant to feel more
            like a small personal room than a polished showcase.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TransitionLink
              href="/links"
              className="inline-flex h-12 items-center justify-center bg-[color:var(--page-fg)] px-6 font-medium text-[color:var(--page-bg)] transition-colors hover:opacity-85"
            >
              Find me elsewhere
              <ArrowUpRight className="ml-2 size-4" />
            </TransitionLink>
            <a
              href="mailto:hey@joaosv.com"
              className="inline-flex h-12 items-center justify-center border border-[color:var(--page-line-strong)] px-6 font-medium text-[color:var(--page-fg)] transition-colors hover:bg-[color:var(--page-card)]"
            >
              Say hi
              <Mail className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            How I see things
          </h2>
          <div className="space-y-5 text-lg leading-8 text-[color:var(--page-muted)]">
            <p>
              Pretty chill and easy to talk to. I like people who are
              curious, direct, and excited about making things better.
            </p>
            <p>
              Still learning, so I do not want this place to pretend everything
              is figured out. It is just a clear place for what I like, what I
              am making, and where to find me.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-semibold md:text-5xl">
            Things I keep coming back to
          </h2>
          <div className="grid gap-px overflow-hidden border border-[color:var(--page-line)] bg-[color:var(--page-line)] md:grid-cols-2 lg:grid-cols-3">
            {interests.map((item) => (
              <article key={item.title} className="bg-[color:var(--page-bg)] p-6 md:p-7">
                <item.icon className="mb-8 size-6 text-[color:var(--page-accent)]" />
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="text-base leading-7 text-[color:var(--page-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 border-y border-[color:var(--page-line)] py-12 md:grid-cols-[0.7fr_1.3fr] md:py-16">
          <h2 className="text-3xl font-semibold md:text-5xl">Lately</h2>
          <ul className="space-y-4 text-lg leading-8 text-[color:var(--page-muted)]">
            {now.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-3 size-2 shrink-0 bg-[color:var(--page-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="px-5 pb-12 pt-16 md:px-8 md:pb-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Say hi anytime.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--page-muted)]">
              Always happy to talk about code, AI, engineering, cars, music,
              photography, travel, or random ideas.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://github.com/thejoaosv"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-11 place-items-center border border-[color:var(--page-line)] text-[color:var(--page-fg)] transition-colors hover:bg-[color:var(--page-card)]"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://instagram.com/thejoaosv"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-11 place-items-center border border-[color:var(--page-line)] text-[color:var(--page-fg)] transition-colors hover:bg-[color:var(--page-card)]"
              aria-label="Instagram"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="mailto:hey@joaosv.com"
              className="grid size-11 place-items-center bg-[color:var(--page-fg)] text-[color:var(--page-bg)] transition-colors hover:opacity-85"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
