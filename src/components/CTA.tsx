import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Activa tu búsqueda ahora
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No pierdas más tiempo. Comienza la búsqueda profesional de tu objeto perdido hoy mismo.
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-strong hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://buy.stripe.com/eVqbJ20EW7wm3Sya6s18c00', '_blank')}
            >
              Pagar y empezar
            </Button>
            <div className="block">
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors"
              >
                Rellenar datos de la búsqueda
              </a>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Nota legal:</strong> El servicio cubre exclusivamente la gestión de búsqueda y localización. Recogidas y envíos no están incluidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;