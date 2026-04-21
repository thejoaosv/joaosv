import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PersonalNav } from "@/components/personal-nav";
import { TransitionLink } from "@/components/transition-link";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | João Vasconcelos`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[color:var(--page-bg)] px-5 pb-16 pt-28 text-[color:var(--page-fg)] md:px-8 md:pt-32">
      <PersonalNav current="blog" />

      <article className="mx-auto max-w-3xl">
        <TransitionLink
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[color:var(--page-muted)] transition-colors hover:text-[color:var(--page-fg)]"
        >
          <ArrowLeft className="size-4" />
          Blog
        </TransitionLink>

        <header className="border-b border-[color:var(--page-line)] pb-10">
          <p className="mb-5 text-sm text-[color:var(--page-muted)]">
            {formatPostDate(post.date)} / {post.readingTime}
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.92]">
            {post.title}
          </h1>
          {post.description ? (
            <p className="mt-7 text-lg leading-8 text-[color:var(--page-muted)] md:text-xl md:leading-9">
              {post.description}
            </p>
          ) : null}
        </header>

        <div className="blog-content pt-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ children, ...props }) => (
                <a
                  {...props}
                  className="font-medium underline decoration-[color:var(--page-line-strong)] underline-offset-4 transition-colors hover:text-[color:var(--page-muted)]"
                  target={props.href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    props.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-8 border-l-2 border-[color:var(--page-fg)] pl-5 text-lg leading-8 text-[color:var(--page-muted)]">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.startsWith("language-");

                return isBlock ? (
                  <code className={className}>{children}</code>
                ) : (
                  <code className="bg-[color:var(--page-card)] px-1.5 py-0.5 text-sm">
                    {children}
                  </code>
                );
              },
              h2: ({ children }) => (
                <h2 className="mb-4 mt-12 text-3xl font-semibold leading-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-3 mt-9 text-2xl font-semibold leading-tight">
                  {children}
                </h3>
              ),
              img: ({ alt, src }) => (
                // Markdown posts use public image paths with unknown dimensions.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src ?? ""}
                  alt={alt ?? ""}
                  className="my-9 w-full border border-[color:var(--page-line)] bg-[color:var(--page-card)] object-cover"
                />
              ),
              li: ({ children }) => (
                <li className="pl-1 text-base leading-8 text-[color:var(--page-muted)]">
                  {children}
                </li>
              ),
              ol: ({ children }) => (
                <ol className="my-6 list-decimal space-y-2 pl-5">
                  {children}
                </ol>
              ),
              p: ({ children }) => (
                <p className="my-5 text-base leading-8 text-[color:var(--page-muted)]">
                  {children}
                </p>
              ),
              pre: ({ children }) => (
                <pre className="my-8 overflow-x-auto border border-[color:var(--page-line)] bg-[color:var(--page-card)] p-4 text-sm leading-6">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="my-6 list-disc space-y-2 pl-5">{children}</ul>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="mt-12 border-t border-[color:var(--page-line)] pt-8">
          <TransitionLink
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--page-muted)] transition-colors hover:text-[color:var(--page-fg)]"
          >
            <ArrowLeft className="size-4" />
            Back to all writing
          </TransitionLink>
        </footer>
      </article>
    </main>
  );
}
