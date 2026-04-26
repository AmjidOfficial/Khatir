import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/khatir-logo.png";
import { COMPANY, waLink } from "@/lib/company";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center bg-white rounded-lg p-3 mb-5 shadow-sm" aria-label={COMPANY.name}>
              <img src={logo} alt={COMPANY.name} className="h-20 w-auto object-contain" />
            </a>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-md">
              {COMPANY.services}. Trusted property and construction partners serving Peshawar and beyond.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              {COMPANY.contacts.map((c) => (
                <li key={c.phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <a href={`tel:${c.phoneRaw}`} className="hover:text-gold transition-colors">
                    {c.name}: {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="/work" className="hover:text-gold transition-colors">Properties</a></li>
              <li><a href="/services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="tracking-wider">{COMPANY.services.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
