import ScrollReveal from "./ScrollReveal";
import { Building2, GraduationCap, Users } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const cases: { who: string; benefit: string; icon: LucideIcon }[] = [
  { who: "Built for Tournaments", benefit: "Keeps spectators and players aligned at all times. Step away for a moment and return knowing exactly where the match stands.", icon: Building2 },
  { who: "No More Score Debates", benefit: "Flipscore eliminates confusion, so players can stay focused on the game — not the argument.", icon: GraduationCap },
  { who: "Instant Court Awareness", benefit: "Walk through your club and instantly see who's up and who's chasing, thanks to clear, visible scoring.", icon: Users },
];

const UseCases = () => (
  <section id="use-cases" className="bg-surface px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Built for Every Court.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {cases.map((c, i) => (
          <ScrollReveal key={c.who} delay={i * 0.15}>
            <div className="rounded-lg border-l-4 border-accent bg-background p-8 text-left">
              <c.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif-display text-xl font-medium">{c.who}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{c.benefit}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
