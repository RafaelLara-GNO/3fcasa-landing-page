import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

export const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531993136914", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Localização</h3>
              <p className="text-primary-foreground/90">Belo Horizonte, MG</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="text-primary-foreground/90">(31) 99313-6914</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Horário</h3>
              <p className="text-primary-foreground/90">Segunda a Sábado</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Solicite seu Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};
