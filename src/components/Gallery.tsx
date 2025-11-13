import { Card } from "@/components/ui/card";
import beforeInterior from "@/assets/before-interior.jpg";
import afterInterior from "@/assets/after-interior.jpg";
import beforePaint from "@/assets/before-paint.jpg";
import afterPaint from "@/assets/after-paint.jpg";

const Gallery = () => {
  const comparisons = [
    {
      before: beforeInterior,
      after: afterInterior,
      title: "Rénovation Intérieur",
      description: "Sièges traités et restaurés"
    },
    {
      before: beforePaint,
      after: afterPaint,
      title: "Correction Carrosserie",
      description: "Polish professionnel + céramique"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Avant / Après</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La transformation visible de vos véhicules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisons.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-destructive mb-2">AVANT</div>
                  <img 
                    src={item.before} 
                    alt="Avant" 
                    className="rounded-lg w-full h-64 object-cover border-2 border-destructive/50"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">APRÈS</div>
                  <img 
                    src={item.after} 
                    alt="Après" 
                    className="rounded-lg w-full h-64 object-cover border-2 border-primary/50"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
