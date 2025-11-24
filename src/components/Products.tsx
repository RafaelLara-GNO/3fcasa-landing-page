import { ProductCard } from "./ProductCard";
import metalon from "@/assets/metalon.jpeg";
import corteFiletamento from "@/assets/corte-filetamento.jpeg";
import ferragens from "@/assets/ferragens.jpeg";
import abrasivosEpi from "@/assets/abrasivos-epi.jpeg";
import parafusos from "@/assets/parafusos.jpeg";

export const Products = () => {
  const products = [
    {
      title: "Metalon, Perfil e Cantoneira",
      description: "Roldanas dobradiças e fechaduras de alta qualidade",
      image: metalon,
    },
    {
      title: "Corte e Filetamento",
      description: "Peças sob medida em MDF com precisão",
      image: corteFiletamento,
    },
    {
      title: "Ferragens para Marcenaria",
      description: "Ferragens e utilidades no geral para seus projetos",
      image: ferragens,
    },
    {
      title: "Abrasivos, Eletrodos e EPI",
      description: "Luvas, máscaras, óculos e protetores auriculares",
      image: abrasivosEpi,
    },
    {
      title: "Parafusos na Unidade",
      description: "Vendemos por caixa ou na unidade conforme sua necessidade",
      image: parafusos,
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para seus projetos de marcenaria e serralheria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
