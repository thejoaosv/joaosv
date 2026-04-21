import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  content: string;
  date: string;
  description: string;
  draft: boolean;
  readingTime: string;
  slug: string;
  title: string;
  updated?: string;
};

type BlogFrontMatter = {
  date?: string;
  description?: string;
  draft?: boolean;
  title?: string;
  updated?: string;
};

function postFilePath(slug: string) {
  return path.join(BLOG_DIR, `${slug}.md`);
}

function postSlugs() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function parsePost(slug: string): BlogPost {
  const file = fs.readFileSync(postFilePath(slug), "utf8");
  const { content, data } = matter(file);
  const frontMatter = data as BlogFrontMatter;

  return {
    content,
    date: frontMatter.date ?? "",
    description: frontMatter.description ?? "",
    draft: frontMatter.draft ?? false,
    readingTime: readingTime(content),
    slug,
    title: frontMatter.title ?? titleFromSlug(slug),
    updated: frontMatter.updated,
  };
}

export function getAllPosts() {
  return postSlugs()
    .map((slug) => parsePost(slug))
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  if (!postSlugs().includes(slug)) {
    return null;
  }

  const post = parsePost(slug);

  if (post.draft) {
    return null;
  }

  return post;
}

export function formatPostDate(date: string) {
  if (!date) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
