import ScrollReveal from "./ScrollReveal";
import { BatteryCharging, Sun, Sparkles } from "lucide-react";

const reasons = [
  { icon: BatteryCharging, title: "No Batteries Required", description: "Purely mechanical. Always ready to go." },
  { icon: Sun, title: "Built for Outdoor Play", description: "Weather-resistant materials that endure." },
  { icon: Sparkles, title: "Clean Aesthetic", description: "Professional look that elevates every court." },
];

const WhyFlipScore = () => (
  <section id="features" className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Why FlipScore.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-12 sm:grid-cols-3">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.1}>
            <div className="group text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                <r.icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{r.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFlipScore;
