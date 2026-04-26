import heroImage from "@/assets/khatir-hero.jpg";
import { waLink } from "@/lib/company";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-minimal text-gold mb-6 reveal">CONSULTANCY · CONSTRUCTION · PROJECTS</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-architectural mb-8 reveal">
          Building Trust.
          <br />
          <span className="text-gold">Crafting Homes.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/85 font-light tracking-wide max-w-2xl mx-auto mb-10 reveal-delayed">
          Khatir Real Estate &amp; Builders — Peshawar's trusted partner for premium properties,
          plots, and turn-key construction.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-delayed">
          <a
            href="/work"
            className="inline-flex items-center justify-center bg-gold text-gold-foreground px-8 py-3 rounded-md font-medium tracking-wide hover:bg-gold/90 transition-colors shadow-gold"
          >
            View Properties
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40 mx-auto" />
        <div className="text-minimal text-white/70 mt-4 tracking-[0.3em]">SCROLL</div>
      </div>
    </section>
  );
};

export default Hero;
