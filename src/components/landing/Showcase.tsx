import ScrollReveal from "./ScrollReveal";
import productImage from "@/assets/flipscore-render.png";

const items = [
  { label: "Close-up detail", description: "Precision-cut numbers for maximum readability", aspect: "aspect-[4/5]", objectPosition: "object-[center_30%]", scale: "scale-150" },
  { label: "Mounted view", description: "Magnetic mount fits any court structure", aspect: "aspect-square", objectPosition: "object-center", scale: "scale-110" },
  { label: "Studio shot", description: "Premium materials built to last", aspect: "aspect-[4/5]", objectPosition: "object-[center_70%]", scale: "scale-125" },
];

const Showcase = () => (
  <section className="bg-surface px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Crafted in Every Detail.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.15} variant="scale">
            <div className={`group relative overflow-hidden rounded-md ${item.aspect} bg-foreground/5 ring-2 ring-transparent transition-all duration-500 hover:ring-accent/40`}>
              <img
                src={productImage}
                alt={`FlipScore ${item.label}`}
                className={`h-full w-full object-cover ${item.objectPosition} ${item.scale} transition-transform duration-700 group-hover:scale-[1.05]`}
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
