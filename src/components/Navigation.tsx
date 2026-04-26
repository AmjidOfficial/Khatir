import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/khatir-logo.png";
import { COMPANY } from "@/lib/company";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { href: "/work", label: "PROPERTIES" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt={COMPANY.name} className="h-11 w-11 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold tracking-wider text-foreground">
              {COMPANY.shortName}
            </div>
            <div className="text-[10px] tracking-[0.2em] text-gold uppercase">
              Real Estate & Builders
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <SocialLinks className="hidden lg:flex" iconClassName="h-4 w-4" />
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <SocialLinks iconClassName="h-4 w-4" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
