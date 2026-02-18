import ScrollReveal from "./ScrollReveal";

const BrandStatement = () => (
  <section className="relative px-6 py-28 md:py-36 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(37_40%_60%/0.06),_transparent_70%)]" />
    <ScrollReveal variant="fade">
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="divider-accent mx-auto mb-8" />
        <p className="font-serif-display text-2xl italic leading-relaxed text-secondary md:text-3xl">
          Designed for clubs that care about every detail.
        </p>
      </div>
    </ScrollReveal>
  </section>
);

export default BrandStatement;
