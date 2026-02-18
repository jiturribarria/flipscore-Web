import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
}

const variants: Record<AnimationVariant, { initial: object; animate: object }> = {
  fadeUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  fadeDown: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  fadeLeft: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  fadeRight: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

const ScrollReveal = ({ children, className = "", delay = 0, variant = "fadeUp" }: ScrollRevealProps) => {
  const v = variants[variant];
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
