import { ArrowUpRight, Code2, PenLine, Sparkles } from "lucide-react";
import { PersonalNav } from "@/components/personal-nav";
import { TransitionLink } from "@/components/transition-link";
import { Button } from "@/components/ui/button";
import { formatPostDate, getAllPosts } from "@/lib/blog";

const writingThemes = [
  {
    title: "Building",
    text: "Notes from projects, product ideas, tiny technical decisions, and what I learn while shipping.",
    icon: Code2,
  },
  {
    title: "Thinking",
    text: "Longer thoughts about AI, software, engineering, creativity, and the way tools change how we work.",
    icon: Sparkles,
  },
  {
    title: "Remembering",
    text: "Small observations from photos, places, music, cars, and everything else that keeps coming back.",
    icon: PenLine,
  },
];

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[color:var(--page-bg)] px-5 pb-16 pt-28 text-[color:var(--page-fg)] md:px-8 md:pt-32">
      <PersonalNav current="blog" />

      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-base text-[color:var(--page-muted)]">
              building, thinking, remembering
            </p>
            <h1 className="max-w-2xl text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.9]">
              Blog.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[color:var(--page-muted)] md:text-xl md:leading-9">
            Notes from projects, longer thoughts about software and creativity,
            and small observations from the things that keep coming back.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="mt-16 grid gap-px overflow-hidden border border-[color:var(--page-line)] bg-[color:var(--page-line)]">
            {posts.map((post) => (
              <TransitionLink
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-6 bg-[color:var(--page-bg)] p-6 transition-colors hover:bg-[color:var(--page-card)] md:grid-cols-[0.8fr_1.2fr] md:p-7"
              >
                <span className="text-sm text-[color:var(--page-muted)]">
                  {formatPostDate(post.date)} / {post.readingTime}
                </span>
                <span>
                  <span className="flex items-start justify-between gap-6">
                    <span className="text-2xl font-semibold">{post.title}</span>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-[color:var(--page-accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  {post.description ? (
                    <span className="mt-3 block text-base leading-7 text-[color:var(--page-muted)]">
                      {post.description}
                    </span>
                  ) : null}
                </span>
              </TransitionLink>
            ))}
          </div>
        ) : (
          <div className="mt-16 grid gap-px overflow-hidden border border-[color:var(--page-line)] bg-[color:var(--page-line)] md:grid-cols-3">
            {writingThemes.map((theme) => (
              <article
                key={theme.title}
                className="bg-[color:var(--page-bg)] p-6 md:p-7"
              >
                <theme.icon className="mb-10 size-6 text-[color:var(--page-accent)]" />
                <h2 className="mb-3 text-2xl font-semibold">{theme.title}</h2>
                <p className="text-base leading-7 text-[color:var(--page-muted)]">
                  {theme.text}
                </p>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--page-line)] pt-8 sm:flex-row">
          <Button asChild variant="page" size="cta-lg" className="w-full sm:w-44">
            <a href="mailto:hey@joaosv.com">
              Send an idea
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="page-outline"
            size="cta-lg"
            className="w-full sm:w-44"
          >
            <a
              href="https://trinnea.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Trinnea
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
