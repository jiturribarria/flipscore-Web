import ScrollReveal from "./ScrollReveal";

const Testimonial = () => (
  <section id="testimonials" className="relative bg-surface px-6 py-28 md:py-36 overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
    <ScrollReveal variant="scale">
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="font-serif-display block text-8xl leading-none text-accent/30">"</span>
        <blockquote className="font-serif-display -mt-6 text-2xl italic leading-relaxed md:text-3xl">
          Hands down the best padel scoring system out there. It's simple, functional, and adds a sleek stainless steel touch that really elevates the court.
        </blockquote>
        <div className="divider-accent mx-auto mt-8" />
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-secondary">
          — Frederik Wittrup Andersen, Director of Operations @ Padel N9NE
        </p>
      </div>
    </ScrollReveal>
  </section>
);

export default Testimonial;
