import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À Propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Galerie", href: "#gallery" },
    { label: "Avis", href: "#testimonials" },
    { label: "Produits", href: "#products" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            aria-label="Aller en haut de la page"
            onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LuxuryAutoDetailing
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Changer le thème"
              aria-pressed={theme === "dark"}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-4 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
