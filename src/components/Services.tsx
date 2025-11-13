import { Card } from "@/components/ui/card";
import { Sparkles, Droplet, Shield, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Nettoyage Premium",
      description: "Nettoyage intérieur et extérieur complet : sièges, tissus, plastiques, décontamination extérieure et protection rapide.",
      features: ["Aspiration profonde", "Nettoyage vapeur", "Traitement anti-odeurs"]
    },
    {
      icon: <Droplet className="w-12 h-12 text-primary" />,
      title: "Rénovation & Polissage",
      description: "Correction des micro-rayures, restauration de brillance et polish professionnel en plusieurs passes pour une finition parfaite.",
      features: ["Correction de peinture", "Polish multi-étapes", "Élimination des défauts"]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Protection Céramique",
      description: "Protection longue durée avec résistance UV, eau et poussières. Brillance miroir garantie et effet déperlant exceptionnel.",
      features: ["Durabilité 5 ans", "Effet hydrophobe", "Protection UV"]
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: "Forfaits Complets",
      description: "Des forfaits Bronze, Silver et Gold pensés pour chaque type de véhicule et budget. Solutions sur-mesure disponibles.",
      features: ["Formules adaptées", "Packages premium", "Devis personnalisé"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des prestations haut de gamme pour sublimer et protéger votre véhicule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
