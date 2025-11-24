import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-store.jpeg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531993136914", "_blank");
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl text-secondary">
            Tudo para Marcenaria e Serralheria
          </h1>
          <p className="mb-4 text-2xl font-semibold md:text-3xl text-primary-foreground">
            em um só lugar!
          </p>
          <p className="mb-8 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Localizada em Belo Horizonte, somos especialistas em materiais para marcenaria com atendimento personalizado
          </p>
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Fale Conosco pelo WhatsApp
          </Button>
          <p className="mt-4 text-primary-foreground/80">
            (31) 99313-6914
          </p>
        </div>
      </div>
    </section>
  );
};
