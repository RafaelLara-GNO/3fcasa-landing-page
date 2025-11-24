export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container px-4 mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-secondary">3F</span> Casa de Ferragens
          </h3>
          <p className="text-background/80">
            Tudo para marcenaria e serralheria em Belo Horizonte
          </p>
        </div>
        
        <div className="border-t border-background/20 pt-6 mt-6">
          <p className="text-background/70">
            © {new Date().getFullYear()} 3F Casa de Ferragens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
