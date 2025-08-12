import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MessageCircle, Shield } from "lucide-react";


const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/84d1d246-1de3-428a-ad25-ba13b5755c75.png" 
                alt="findfy logo"
                className="h-10 w-auto"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Perdiste algo.{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Nosotros lo encontramos.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Gestionamos la búsqueda de tu objeto perdido en cualquier lugar, con una red global de contactos y un seguimiento personalizado por email y WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">Precio fijo: 29€ por gestión</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">Búsqueda exhaustiva y metodología probada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">Cobertura: cualquier tipo de objeto, en cualquier lugar</span>
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
                onClick={() => window.open('#', '_blank')}
              >
                Empezar búsqueda por 29€
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
            <video 
              className="w-full h-auto rounded-2xl shadow-strong"
              controls
              poster="https://images.unsplash.com/photo-1518546305927-5a555bb7020b?auto=format&fit=crop&w=1200&q=80"
            >
              <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_24fps.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;