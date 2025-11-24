import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const features = [
    "Atendimento personalizado",
    "Produtos de qualidade",
    "Preços competitivos",
    "Localização em BH",
    "Vendas por unidade ou caixa",
    "Serviços de corte sob medida",
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre a 3F Casa de Ferragens
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Somos referência em Belo Horizonte no fornecimento de materiais para marcenaria e serralheria. 
            Com amplo catálogo de produtos, oferecemos desde MDF, metalon, ferragens até equipamentos de 
            proteção individual. Nossa missão é fornecer tudo que você precisa para seus projetos com 
            qualidade e preços competitivos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
