const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">À Propos de ProDetailCar</h2>
          
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            ProDetailCar est une entreprise spécialisée dans le <span className="text-primary font-semibold">detailing automobile professionnel</span> : 
            nettoyage haut de gamme, rénovation esthétique et protection céramique.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nous mettons notre <span className="text-accent font-semibold">expertise</span>, notre <span className="text-accent font-semibold">rigueur</span> et 
            notre <span className="text-accent font-semibold">passion automobile</span> au service de particuliers exigeants et passionnés.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Années d'Expérience</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Véhicules Détaillés</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Satisfaction Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
