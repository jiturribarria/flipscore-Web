import { useState, type FormEvent } from "react";
import { Instagram, Mail, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/flipscore-logo.png";

const quickLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Testimonials", href: "#testimonials" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    toast.success("Thanks for subscribing!");
  };

  return (
    <footer className="border-t border-border/50 px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
        {/* Column 1: Logo + copyright */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <img src={logo} alt="FlipScore" className="h-8 w-auto" />
          <p className="text-xs text-secondary">
            &copy; {new Date().getFullYear()} FlipScore. All rights reserved.
          </p>
        </div>

        {/* Column 2: Quick links */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <h4 className="text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Column 3: Newsletter + socials */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h4 className="text-xs font-semibold uppercase tracking-wider">Stay Updated</h4>
          {subscribed ? (
            <div className="flex items-center gap-2 text-sm text-secondary">
              <CheckCircle className="h-4 w-4 text-accent" />
              You're subscribed!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 w-48 rounded-md border-foreground/20 bg-transparent text-sm placeholder:text-secondary"
              />
              <Button className="h-10 rounded-md px-5 text-sm tracking-wide">Subscribe</Button>
            </form>
          )}
          <div className="flex items-center gap-5 pt-2">
            <a
              href="https://instagram.com/flipscore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-secondary transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@flipscore.com"
              aria-label="Email"
              className="text-secondary transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
