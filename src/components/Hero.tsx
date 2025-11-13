import { Button } from "@/components/ui/button";
import { Star, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-detailing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Le Detailing Automobile Professionnel
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-white font-light">
            Finition Parfaite, Protection Durable
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            ProDetailCar redonne éclat, protection et valeur à votre véhicule
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6"
            >
              Réserver un Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6"
            >
              Demander un Devis
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>Experts Certifiés</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Produits Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span>+500 Clients Satisfaits</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
