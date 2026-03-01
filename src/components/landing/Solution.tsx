import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/flipscore-render.png";
import PreOrderModal from "./PreOrderModal";

const features = [
  "Magnetic mounting system",
  "Weather-resistant materials",
  "Clear, bold numbers",
  "Designed for padel courts",
];

const Solution = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="product" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 lg:gap-20">
        <ScrollReveal variant="fadeRight">
          <img
            src={productImage}
            alt="FlipScore magnetic scoreboard product render"
            className="w-full rounded-md"
            loading="lazy"
          />
        </ScrollReveal>
        <ScrollReveal variant="fadeLeft" delay={0.2}>
          <div>
            <h2 className="font-serif-display text-3xl font-medium md:text-5xl">
              Introducing FlipScore.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-secondary md:text-lg">
              A magnetic scoreboard crafted for clarity and simplicity.
              <br />
              No apps. No confusion. Just the game.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-secondary">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="accent-gradient mt-10 rounded-md px-10 py-6 text-base tracking-wide text-white border-0 hover:opacity-90"
              onClick={() => setModalOpen(true)}
            >
              Upgrade Your Court
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <PreOrderModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Solution;
