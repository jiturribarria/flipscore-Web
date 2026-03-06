import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/flipscore-logo-no-bg.png";
import PreOrderModal from "./PreOrderModal";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openModal = () => {
    setMobileOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="relative z-50">
            <img src={logo} alt="FlipScore" className="h-8 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="accent-gradient rounded-md px-6 text-sm tracking-wide text-white border-0 hover:opacity-90"
              onClick={openModal}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-50 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-md md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif-display text-2xl text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="accent-gradient mt-4 rounded-md px-10 text-base tracking-wide text-white border-0"
              onClick={openModal}
            >
              Order Now
            </Button>
          </div>
        )}
      </nav>

      <PreOrderModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Navbar;
