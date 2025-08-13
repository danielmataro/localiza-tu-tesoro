import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              ¿Perdiste algo importante?{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Empezamos a buscarlo hoy
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No esperes más. Cada hora cuenta cuando se trata de recuperar objetos perdidos. Nuestro equipo especializado comienza tu búsqueda inmediatamente.
            </p>
          </div>

          {/* Destacar características principales */}
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border shadow-lg">
              <div className="text-2xl font-bold text-primary mb-2">Pago único</div>
              <p className="text-sm text-muted-foreground">Sin suscripciones ni pagos recurrentes</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border shadow-lg">
              <div className="text-2xl font-bold text-primary mb-2">100% transparente</div>
              <p className="text-sm text-muted-foreground">Te informamos de cada paso del proceso</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border shadow-lg">
              <div className="text-2xl font-bold text-primary mb-2">Seguimiento 1:1</div>
              <p className="text-sm text-muted-foreground">Email y WhatsApp personalizado</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-2xl shadow-2xl">
              <div className="bg-background rounded-xl p-8">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-xl px-12 py-8 shadow-strong hover:shadow-2xl transition-all duration-300 text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  onClick={() => window.open('https://buy.stripe.com/7sY8wQ87og2S1Kq3I418c01', '_blank')}
                >
                  Pagar una sola vez y empezar
                </Button>
                <p className="text-sm text-muted-foreground mt-4 font-medium">
                  ✅ Pago único • ✅ Sin suscripciones • ✅ Seguimiento completo
                </p>
              </div>
            </div>
            
            <div className="block">
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors text-lg"
              >
                Rellenar datos de la búsqueda antes del pago
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