import { useState, type FormEvent } from "react";
import { Instagram, Mail, Phone, CheckCircle, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/flipscore-logo-no-bg.png";

const quickLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
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
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-4">
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

        {/* Column 3: Contact */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <h4 className="text-xs font-semibold uppercase tracking-wider">Contact Us</h4>
          <a
            href="mailto:flipscorepadel@gmail.com"
            className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            flipscorepadel@gmail.com
          </a>
          <a
            href="tel:+18588881854"
            className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            +1 (858) 888-1854
          </a>
        </div>

        {/* Column 4: Social media */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h4 className="text-xs font-semibold uppercase tracking-wider">Follow Us on Social Media</h4>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/flipscorepadel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-primary transition-colors hover:text-primary/70"
            >
              <Instagram className="h-6 w-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/company/112696052/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-primary transition-colors hover:text-primary/70"
            >
              <Linkedin className="h-6 w-6" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
