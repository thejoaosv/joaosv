import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
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
    title: post.title,
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
    <main className="page">
      <article>
        <Link
          href="/blog"
          className="-my-2 mb-6 inline-flex items-center gap-2 py-2 text-sm text-[color:var(--page-muted)] transition-colors hover:text-[color:var(--page-fg)]"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All posts
        </Link>

        <header className="border-b border-[color:var(--page-line)] pb-10">
          <p className="mb-5 text-sm text-[color:var(--page-muted)]">
            {formatPostDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="title">
            {post.title}
          </h1>
          {post.description ? (
            <p className="lede">
              {post.description}
            </p>
          ) : null}
        </header>

        <div className="pt-10 [&>*:first-child]:mt-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ children, ...props }) => (
                <a
                  {...props}
                  className="font-medium text-[color:var(--page-fg)] underline decoration-[color:var(--page-line-strong)] underline-offset-4 hover:decoration-[color:var(--page-fg)]"
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
                // Fenced blocks without a language have no class but end in a newline.
                const isBlock =
                  className?.startsWith("language-") || String(children).endsWith("\n");

                return isBlock ? (
                  <code className={className}>{children}</code>
                ) : (
                  <code className="rounded bg-[color:var(--page-panel)] px-1.5 py-0.5 text-sm">
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
                  className="my-9 w-full rounded-xl border border-[color:var(--page-line)] object-cover"
                />
              ),
              li: ({ children }) => (
                <li className="pl-1 text-[17px] leading-8 text-[color:var(--page-prose)]">
                  {children}
                </li>
              ),
              ol: ({ children }) => (
                <ol className="my-6 list-decimal space-y-2 pl-5">
                  {children}
                </ol>
              ),
              p: ({ children }) => (
                <p className="my-5 text-[17px] leading-8 text-[color:var(--page-prose)]">
                  {children}
                </p>
              ),
              pre: ({ children }) => (
                <pre className="panel my-8 overflow-x-auto p-4 text-sm leading-6">
                  {children}
                </pre>
              ),
              table: ({ children }) => (
                <div className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[15px]">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border-b border-[color:var(--page-line-strong)] px-3 py-2 font-medium">{children}</th>
              ),
              td: ({ children }) => (
                <td className="border-b border-[color:var(--page-line)] px-3 py-2 text-[color:var(--page-prose)]">{children}</td>
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
          <Link
            href="/blog"
            className="-my-2 inline-flex items-center gap-2 py-2 text-sm text-[color:var(--page-muted)] transition-colors hover:text-[color:var(--page-fg)]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all posts
          </Link>
        </footer>
      </article>
    </main>
  );
}
