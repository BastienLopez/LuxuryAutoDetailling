import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Kit Microfibre Premium",
      description: "Pack de 6 microfibres ultra-douces 40x40cm pour un nettoyage sans rayures",
      price: "24.90€",
      image: "/public/img/kit_debutant.png"
    },
    {
      name: "Shampoing pH Neutre",
      description: "Formule professionnelle 500ml pour un lavage en douceur et sans traces",
      price: "19.90€",
      image: "/public/img/shampoing.png"
    },
    {
      name: "Mousse Céramique",
      description: "Protection céramique en spray 250ml, durée 3-6 mois, brillance extrême",
      price: "34.90€",
      image: "/public/img/mousse_ceramique.png"
    },
    {
      name: "Applicateurs en Mousse",
      description: "Set de 4 applicateurs professionnels pour cires et produits de protection",
      price: "12.90€",
      image: "/public/img/applicateur_mousse.png"
    },
    {
      name: "Polish Correcteur",
      description: "Polish professionnel 250ml pour éliminer les micro-rayures et oxydations",
      price: "29.90€",
      image: "/public/img/polish.png"
    },
    {
      name: "Coton Detailing Premium",
      description: "Disques en coton naturel pour application de produits, pack de 10",
      price: "9.90€",
      image: "/public/img/coton.png"
    },
    {
      name: "Brosse Jantes Soft",
      description: "Brosse à jantes avec poils doux pour un nettoyage efficace sans rayures",
      price: "16.90€",
      image: "/public/img/brosse_jante.png"
    },
    {
      name: "Kit Complet Débutant",
      description: "Tout le nécessaire pour débuter : shampoing, microfibres, cire et applicateurs",
      price: "79.90€",
      image: "/public/img/kit_debutant.png"
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Produits</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits professionnels pour l'entretien de votre véhicule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border hover:border-primary transition-all animate-fade-in-up hover:shadow-premium group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-md text-sm font-bold">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">
                  {product.description}
                </p>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
