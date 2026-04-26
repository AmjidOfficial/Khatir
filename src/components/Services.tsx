import { Building2, Home, HardHat, Compass } from "lucide-react";

const services = [
  {
    number: "01",
    title: "PROPERTY CONSULTANCY",
    icon: Compass,
    description:
      "Expert guidance on buying, selling, and investing in residential and commercial properties across Peshawar.",
  },
  {
    number: "02",
    title: "REAL ESTATE",
    icon: Home,
    description:
      "Verified plots, houses, apartments, and shops for sale and rent in AWT, Hayatabad, and prime Kohat Road locations.",
  },
  {
    number: "03",
    title: "CONSTRUCTION",
    icon: HardHat,
    description:
      "Turn-key construction services — from foundation to finishing — delivered on time with premium materials.",
  },
  {
    number: "04",
    title: "PROJECT DEVELOPMENT",
    icon: Building2,
    description:
      "End-to-end development of housing schemes, commercial plazas, and custom-built homes.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-gold mb-4">SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural text-primary">
              What We Offer
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.number}
                  className="group p-8 rounded-lg border border-border bg-card hover:border-gold hover:shadow-elegant transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-gradient-emerald text-primary-foreground group-hover:bg-gradient-gold transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-minimal text-gold mb-2 block">{s.number}</span>
                      <h4 className="text-2xl font-light mb-3 text-primary">{s.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
