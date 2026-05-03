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
import { Button } from "@/components/ui/button";

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

      <section className="px-5 pb-10 pt-20 md:px-8 md:pb-14 md:pt-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-base text-[color:var(--page-muted)] md:text-lg">
            Hi, I am João.
          </p>
          <h1 className="max-w-4xl text-[clamp(2.75rem,6.8vw,5.6rem)] font-semibold leading-[0.95]">
            A student who likes to build things and understand how they work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--page-muted)] md:text-xl md:leading-9">
            Mostly into coding, AI, engineering and cars. I also care a lot
            about music, photography and travel. This site is meant to feel more
            like a small personal room than a polished showcase.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="page" size="cta" className="w-full sm:w-48">
              <TransitionLink href="/links">
                Find me elsewhere
                <ArrowUpRight className="size-4" />
              </TransitionLink>
            </Button>
            <Button
              asChild
              variant="page-outline"
              size="cta"
              className="w-full sm:w-48"
            >
              <a href="mailto:hey@joaosv.com">
                Say hi
                <Mail className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            How I see things
          </h2>
          <div className="space-y-5 text-lg leading-8 text-[color:var(--page-muted)]">
            <p>
              Pretty chill and easy to talk to. I like people who are curious,
              direct, and excited about making things better.
            </p>
            <p>
              Still learning, so I do not want this place to pretend everything
              is figured out. It is just a clear place for what I like, what I
              am making, and where to find me.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-18">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-semibold md:mb-14 md:text-5xl">
            Things I keep coming back to
          </h2>
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {interests.map((item) => (
              <article
                key={item.title}
                className="max-w-md"
              >
                <item.icon className="mb-6 size-6 text-[color:var(--page-accent)]" />
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="text-base leading-8 text-[color:var(--page-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
          <h2 className="text-3xl font-semibold md:text-5xl">Lately</h2>
          <div className="space-y-5 text-lg leading-8 text-[color:var(--page-muted)]">
            {now.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-14">
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
            <Button
              asChild
              variant="page-outline"
              size="icon-cta"
              aria-label="GitHub"
            >
              <a
                href="https://github.com/thejoaosv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="page-outline"
              size="icon-cta"
              aria-label="Instagram"
            >
              <a
                href="https://instagram.com/thejoaosv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-5" />
              </a>
            </Button>
            <Button asChild variant="page" size="icon-cta" aria-label="Email">
              <a href="mailto:hey@joaosv.com">
                <Mail className="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
