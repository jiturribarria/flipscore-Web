import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/flipscore-logo-no-bg.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleScroll = () => {
      if (!video || !video.duration) return;
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      {/* Scroll-driven video background */}
      <video
        ref={videoRef}
        src="/hero-bg.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        <motion.img
          src={logo}
          alt="FlipScore logo"
          className="mb-10 w-full max-w-3xl h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="font-serif-display w-full text-center text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Effortless Padel Scoring.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-lg text-center text-lg leading-relaxed text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          A refined scoreboard designed for modern courts.
          <br />
          Keep every match clear, elegant, and uninterrupted.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button size="lg" className="accent-gradient rounded-md px-10 py-6 text-base tracking-wide text-white border-0 hover:opacity-90">
            Pre-Order Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-md border-foreground/30 px-10 py-6 text-base tracking-wide hover:bg-foreground/5"
          >
            View Product
          </Button>
        </motion.div>
      </div>

      {/* Scroll-down chevron */}
      <motion.a
        href="#product"
        className="absolute bottom-8 z-10 animate-bounce-gentle text-foreground/40 hover:text-foreground/70 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
};

export default Hero;
