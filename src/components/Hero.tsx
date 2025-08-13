import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MessageCircle, Shield } from "lucide-react";
import LogoFindfy from "@/components/LogoFindfy";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <LogoFindfy className="h-24 md:h-28 w-auto text-foreground" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ¿Perdiste un objeto en España?{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Te ayudamos a recuperarlo.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Servicio profesional de búsqueda de objetos perdidos en toda España. Localizamos móviles, maletas, documentos, llaves y más con nuestra red especializada de contactos. Seguimiento personalizado por email y WhatsApp hasta encontrar tu objeto perdido.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">Especialistas en recuperar objetos perdidos en España</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">Localizamos móviles, maletas, documentos y más</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">Seguimiento 1:1 por email y WhatsApp</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 shadow-strong hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://buy.stripe.com/7sY8wQ87og2S1Kq3I418c01', '_blank')}
              >
                Empezar búsqueda
              </Button>
              <div className="block">
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors"
                >
                  Rellenar datos de la búsqueda
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Pagas una sola vez. Empezamos en &lt;24h laborables.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-trust-badge text-trust-badge-foreground px-3 py-2 rounded-full text-sm">
                <Shield className="h-4 w-4" />
                <span>Pagos seguros con Stripe</span>
              </div>
              <div className="flex items-center space-x-2 bg-trust-badge text-trust-badge-foreground px-3 py-2 rounded-full text-sm">
                <Clock className="h-4 w-4" />
                <span>Respuesta en &lt;24h laborables</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/e8cc4be7-eb16-4c0b-b306-80d699cd4afc.png"
              alt="Mensaje de WhatsApp confirmando que Findfy ha encontrado el objeto perdido"
              className="w-full h-auto rounded-2xl shadow-strong object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;