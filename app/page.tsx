const lately = [
  "Writing code and exploring what's new in AI.",
  "Keeping up with cars and engineering.",
  "Taking photos, listening to music, and traveling when I can.",
];

export default function Home() {
  return (
    <main className="page">
      <p className="eyebrow">Hey, I&apos;m João.</p>
      <h1 className="title">I build things and figure out how they work.</h1>
      <p className="lede">
        I&apos;m a student, still learning as I go. The projects I put out ship through{" "}
        <a
          href="https://zulelabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--page-fg)] underline decoration-[color:var(--page-line-strong)] underline-offset-4 hover:decoration-[color:var(--page-fg)]"
        >
          Zule
        </a>
        .
      </p>
      <p className="mt-4 text-[15px] text-[color:var(--page-faint)]">
        Coding, AI, engineering, cars, music, photography, and travel.
      </p>

      <section className="mt-12">
        <h2 className="mb-3 text-[15px] font-medium text-[color:var(--page-muted)]">Lately</h2>
        <ul className="space-y-1.5">
          {lately.map((item) => (
            <li key={item} className="text-[17px] leading-relaxed text-[color:var(--page-prose)]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-[17px] text-[color:var(--page-muted)]">
        Say hi at{" "}
        <a
          href="mailto:hey@joaosv.com"
          className="text-[color:var(--page-fg)] underline decoration-[color:var(--page-line-strong)] underline-offset-4 hover:decoration-[color:var(--page-fg)]"
        >
          hey@joaosv.com
        </a>
      </p>
    </main>
  );
}
