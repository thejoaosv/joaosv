import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import { Row, RowList } from "@/components/row-list";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="page">
      <h1 className="title">Blog</h1>
      <p className="lede">Notes from building, thoughts on AI and software, and small observations.</p>

      {posts.length > 0 ? (
        <RowList>
          {posts.map((post) => (
            <Row
              key={post.slug}
              href={`/blog/${post.slug}`}
              label={
                <>
                  <span className="block">{post.title}</span>
                  <span className="mt-0.5 block text-[15px] text-[color:var(--page-muted)]">
                    {formatPostDate(post.date)} · {post.readingTime}
                  </span>
                </>
              }
            />
          ))}
        </RowList>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <PenLine className="size-8 text-[color:var(--page-faint)]" aria-hidden="true" />
          <h2 className="mt-6 text-2xl font-semibold text-[color:var(--page-muted)]">Nothing published yet</h2>
          <p className="mt-2 max-w-sm text-[17px] leading-relaxed text-[color:var(--page-faint)]">
            If there&apos;s something you want me to write about, send me an email.
          </p>
          <a href="mailto:hey@joaosv.com?subject=Blog%20idea" className="btn-secondary mt-7">
            Suggest a topic
          </a>
        </div>
      )}
    </main>
  );
}
