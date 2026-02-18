import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="relative overflow-hidden bg-primary px-6 py-28 md:py-36">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-foreground/90" />
    <ScrollReveal>
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-serif-display text-3xl font-medium text-primary-foreground md:text-5xl">
          Elevate Your Court.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
          Join the clubs already upgrading their courts with FlipScore.
          <br className="hidden sm:block" />
          Pre-order today and be among the first to experience effortless scoring.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="accent-gradient rounded-md px-10 py-6 text-base tracking-wide text-white border-0 hover:opacity-90"
          >
            Pre-Order Now
          </Button>
          <a
            href="#product"
            className="text-sm text-primary-foreground/60 underline underline-offset-4 transition-colors hover:text-primary-foreground/90"
          >
            Learn more about FlipScore
          </a>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default FinalCTA;
