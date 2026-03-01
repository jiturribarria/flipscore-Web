import ScrollReveal from "./ScrollReveal";

const problems = [
  { title: "Built for Tournaments", description: "Keeps spectators and players aligned at all times. Step away for a moment and return knowing exactly where the match stands." },
  { title: "No More Score Debates", description: "Flipscore eliminates confusion, so players can stay focused on the game — not the argument." },
  { title: "Instant Court Awareness", description: "Walk through your club and instantly see who's up and who's chasing, thanks to clear, visible scoring." },
];

const Problem = () => (
  <section className="bg-surface px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          The Game Deserves Better.
        </h2>
        <p className="mt-4 text-center text-sm text-secondary">
          Three problems every padel player knows too well.
        </p>
      </ScrollReveal>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {problems.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.15}>
            <div className="rounded-lg border border-border/60 bg-background p-8 text-center transition-shadow hover:shadow-md">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif-display text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{p.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
