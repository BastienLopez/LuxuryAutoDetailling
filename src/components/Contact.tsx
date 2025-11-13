import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  // Form removed: using direct contact actions (mailto / instagram / tel)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact & Réservation</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Réservez votre service dès maintenant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left column: actions + CTA stacked, full height */}
          <div className="flex flex-col gap-6 h-full">
            <Card className="p-8 bg-card border-border animate-fade-in-up rounded-xl shadow-lg flex-1 flex flex-col">
              <div className="space-y-6">
                <p className="text-lg">Pour toute demande, choisissez une option ci-dessous :</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:contact@prodetailcar.fr?subject=Demande%20de%20renseignement"
                    className="w-full"
                  >
                    <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Envoyer un Email
                    </Button>
                  </a>

                  <a
                    href="https://instagram.com/prodetailcar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button size="lg" variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </Button>
                  </a>
                </div>

                <a href="tel:+33123456789" className="block w-full">
                  <Button size="lg" className="w-full bg-secondary/80 text-foreground flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5 text-current" />
                    Appeler +33 1 23 45 67 89
                  </Button>
                </a>

                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>Ou contactez-nous via :</span>
                  <div className="flex gap-3">
                    <a href="mailto:contact@prodetailcar.fr" className="text-muted-foreground hover:text-primary">
                      Email
                    </a>
                    <a href="https://instagram.com/prodetailcar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      Instagram
                    </a>
                    <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary">
                      Téléphone
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-primary text-primary-foreground border-0 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Prêt à transformer votre véhicule ?</h3>
              <p className="mb-4 opacity-90">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons sublimer votre voiture.
              </p>
              <a href="tel:+33123456789" className="block w-full">
                <Button 
                  variant="secondary"
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  Appeler Maintenant
                </Button>
              </a>
            </Card>
          </div>
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card className="p-6 bg-card border-border rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-bold mb-4">Informations Pratiques</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted-foreground text-sm">123 Avenue de l'Automobile<br/>75001 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-muted-foreground text-sm">+33 1 23 45 67 89</p>
                    <a href="tel:+33123456789" className="text-primary text-sm block mt-1">Appeler maintenant</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground text-sm">contact@prodetailcar.fr</p>
                    <a href="mailto:contact@prodetailcar.fr" className="text-primary text-sm block mt-1">Envoyer un email</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a href="https://instagram.com/prodetailcar" target="_blank" rel="noopener noreferrer" className="text-primary text-sm block mt-1">@prodetailcar</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-muted-foreground text-sm">
                      Lun - Ven: 8h - 19h<br/>
                      Samedi: 9h - 18h<br/>
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
