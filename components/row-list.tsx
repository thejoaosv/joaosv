import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

type RowProps = {
  label: ReactNode;
  note?: ReactNode;
  href?: string;
  icon?: ComponentType<{ className?: string }>;
};

/** A light list: no surface, rows split by hairlines. */
export function RowList({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      {title ? <h2 className="mb-2.5 text-[15px] font-medium text-[color:var(--page-muted)]">{title}</h2> : null}
      <ul className="divide-y divide-[color:var(--page-line)] border-y border-[color:var(--page-line)]">{children}</ul>
    </section>
  );
}

export function Row({ label, note, href, icon: Icon }: RowProps) {
  const internal = href?.startsWith("/");
  const Trailing = internal ? ChevronRight : ArrowUpRight;
  const body = (
    <>
      {Icon ? <Icon className="size-[18px] shrink-0 text-[color:var(--page-muted)] transition-colors group-hover:text-[color:var(--page-fg)]" aria-hidden="true" /> : null}
      {/* Note sits under the label on phones, right-aligned beside it from sm up. */}
      <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span className="text-[17px] text-[color:var(--page-fg)]">{label}</span>
        {note ? <span className="text-[15px] text-[color:var(--page-muted)] transition-colors group-hover:text-[color:var(--page-fg)] sm:text-right">{note}</span> : null}
      </span>
      {href ? (
        <Trailing
          className={`size-4 shrink-0 text-[color:var(--page-faint)] transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--page-fg)] ${internal ? "" : "group-hover:-translate-y-0.5"}`}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
  const rowClass = "flex min-h-14 items-center gap-3.5 py-3";

  if (!href) return <li className={rowClass}>{body}</li>;

  const linkClass = `group ${rowClass} rounded-sm`;
  return (
    <li>
      {internal ? (
        <Link href={href} className={linkClass}>
          {body}
        </Link>
      ) : (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={linkClass}
        >
          {body}
        </a>
      )}
    </li>
  );
}
