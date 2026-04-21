"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

export function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      props.target === "_blank" ||
      typeof href !== "string"
    ) {
      return;
    }

    event.preventDefault();

    const viewTransitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (viewTransitionDocument.startViewTransition) {
      viewTransitionDocument.startViewTransition(() => {
        router.push(href);
      });
      return;
    }

    document.documentElement.classList.add("page-leaving");
    window.setTimeout(() => {
      router.push(href);
      document.documentElement.classList.remove("page-leaving");
    }, 140);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
