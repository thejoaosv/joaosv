"use client";

import { BookOpen, House, Link2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const items = [
  { href: "/", label: "Home", icon: House },
  { href: "/links", label: "Links", icon: Link2 },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: "Europe/Lisbon", // same zone as Porto
      timeZoneName: "shortOffset", // "GMT" or "GMT+0" in winter (varies by engine), "GMT+1" in summer
    });
    const update = () => {
      const parts = format.formatToParts(new Date());
      const part = (type: string) => parts.find((p) => p.type === type)?.value;
      const zone = part("timeZoneName") === "GMT+1" ? "WEST" : "WET";
      setTime(`${part("hour")}:${part("minute")} ${zone}`);
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  // Rendered after mount only, so server and client markup match.
  if (!time) return null;
  return (
    <span className="whitespace-nowrap text-[13px] max-[359px]:hidden text-[color:var(--page-faint)] tabular-nums" title="My local time in Portugal">
      {time}
    </span>
  );
}

export function PersonalNav() {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Phones: equal gaps between the three groups. From sm up: links truly centred.
  return (
    <nav className="sticky top-0 z-20 flex h-16 items-center justify-between gap-2 px-4 text-[15px] sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4 md:px-6">
      <Link
        href="/"
        className="-ml-2 justify-self-start p-2 text-[color:var(--page-fg)] transition-opacity hover:opacity-75"
        aria-label="João Vasconcelos, home"
      >
        {/* JV mark, brand/logo/jv-mark.svg */}
        <svg viewBox="0 0 16 16" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M3.55 2H5.05V11.43L4.185 14H1.45L1.921 12.6H3.121L3.55 11.326Z M6.25 2H7.833L10.4 11.15L12.967 2H14.55L10.4 14.3Z" />
        </svg>
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active(item.href) ? "page" : undefined}
            className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-2 transition-colors hover:text-[color:var(--page-fg)] ${
              active(item.href) ? "text-[color:var(--page-fg)]" : "text-[color:var(--page-muted)]"
            }`}
          >
            <item.icon className="hidden size-4 sm:block" aria-hidden="true" />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="justify-self-end">
        <LocalTime />
      </div>
    </nav>
  );
}
