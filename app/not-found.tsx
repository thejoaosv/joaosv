import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page flex flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="title">Page not found</h1>
      <p className="lede max-w-sm">That link might be broken, or it may have moved.</p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <Link href="/" className="btn-primary w-44">
          Go home
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <a
          href="mailto:hey@joaosv.com?subject=Broken%20link"
          className="text-[15px] text-[color:var(--page-muted)] transition-colors hover:text-[color:var(--page-fg)]"
        >
          Tell me what broke
        </a>
      </div>
    </main>
  );
}
