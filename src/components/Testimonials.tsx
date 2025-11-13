import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marc D.",
      vehicle: "Porsche 911",
      rating: 5,
      text: "Service impeccable, ma voiture est revenue comme neuve. Le niveau de détail est impressionnant et l'équipe est très professionnelle."
    },
    {
      name: "Sophie L.",
      vehicle: "Mercedes AMG",
      rating: 5,
      text: "Protection céramique incroyable, la pluie glisse dessus ! Un investissement qui vaut vraiment le coup pour protéger mon véhicule."
    },
    {
      name: "Thomas R.",
      vehicle: "BMW M4",
      rating: 5,
      text: "J'ai essayé plusieurs détailers, ProDetailCar est de loin le meilleur. Travail méticuleux et résultat au-delà de mes attentes."
    },
    {
      name: "Élise M.",
      vehicle: "Audi RS6",
      rating: 5,
      text: "L'intérieur de ma voiture est impeccable après leur intervention. Je recommande vivement leurs services premium."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Avis Clients</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card 
                    className="p-6 bg-card border-border hover:border-primary transition-all relative h-full"
                  >
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
