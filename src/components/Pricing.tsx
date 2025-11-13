import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Bronze",
      price: "149€",
      description: "Nettoyage complet",
      features: [
        "Lavage extérieur premium",
        "Nettoyage intérieur complet",
        "Aspiration profonde",
        "Nettoyage vitres",
        "Protection rapide"
      ]
    },
    {
      name: "Silver",
      price: "299€",
      description: "Rénovation & Polish",
      features: [
        "Tout du forfait Bronze",
        "Décontamination carrosserie",
        "Polish 1 étape",
        "Traitement plastiques",
        "Cire de protection"
      ],
      popular: true
    },
    {
      name: "Gold",
      price: "599€",
      description: "Protection Céramique",
      features: [
        "Tout du forfait Silver",
        "Polish multi-étapes",
        "Protection céramique 5 ans",
        "Traitement jantes",
        "Garantie satisfaction"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Tarifs</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des forfaits adaptés à tous les besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card border-border hover:border-primary transition-all animate-fade-in-up relative ${
                pkg.popular ? 'border-primary shadow-glow scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-bold text-primary-foreground">
                    POPULAIRE
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-primary mb-2">
                  {pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">à partir de</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-gradient-primary hover:shadow-glow' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Choisir ce forfait
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Demander un Devis Personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
