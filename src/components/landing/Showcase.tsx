import ScrollReveal from "./ScrollReveal";
import mountedImage from "@/assets/flipscore-mounted.png";
import simplicityImage from "@/assets/flipscore-simplicity.png";

const items = [
  { label: "Mounted view", description: "Magnetic mount fits any court structure", image: mountedImage },
  { label: "Designed for Simplicity", description: "Quick to learn, impossible to overlook.", image: simplicityImage },
];

const Showcase = () => (
  <section className="bg-surface px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Crafted in Every Detail.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.15} variant="scale">
            <div className="group relative overflow-hidden rounded-md aspect-square bg-foreground/5 ring-2 ring-transparent transition-all duration-500 hover:ring-accent/40">
              <img
                src={item.image}
                alt={`FlipScore ${item.label}`}
                className="h-full w-full object-cover object-center scale-110 transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/50 to-transparent p-6">
                <span className="block text-xs uppercase tracking-widest text-primary-foreground">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs text-primary-foreground/70">
                  {item.description}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Showcase;
