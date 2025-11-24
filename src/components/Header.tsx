import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className="text-primary">3F</span>
              <span className="text-foreground"> Casa de Ferragens</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary"
            >
              Produtos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary"
            >
              Sobre
            </Button>
            <Button 
              variant="default"
              onClick={() => scrollToSection("contato")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
