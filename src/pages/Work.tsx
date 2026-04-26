import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const categories = ["ALL", "HOUSE", "PLOT", "COMMERCIAL", "APARTMENT"] as const;
const statuses = ["ANY", "FOR SALE", "FOR RENT"] as const;

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("ALL");
  const [activeStatus, setActiveStatus] = useState<(typeof statuses)[number]>("ANY");

  const filtered = properties.filter((p) => {
    const catOk = activeCategory === "ALL" || p.category === activeCategory;
    const statOk = activeStatus === "ANY" || p.status === activeStatus;
    return catOk && statOk;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-minimal text-gold mb-4">PROPERTIES</p>
            <h1 className="text-5xl md:text-7xl font-light text-architectural text-primary mb-6">
              Verified listings in <span className="text-gold">Peshawar</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Browse our curated selection of houses, plots, apartments, and commercial properties —
              every listing is personally verified by our team.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider font-medium transition-all ${
                    activeCategory === c
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-gold hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveStatus(s)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider font-medium transition-all ${
                    activeStatus === s
                      ? "bg-gold text-gold-foreground"
                      : "border border-border text-muted-foreground hover:border-gold hover:text-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">
                No properties match your filters. Try adjusting them.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Work;
