import { FileText, Users, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Indícanos qué perdiste",
    description: "Rellena el formulario con los datos clave (objeto, lugar, fecha, circunstancias, datos de contacto)."
  },
  {
    icon: Users,
    title: "2. Activamos nuestra red",
    description: "Contactamos con hoteles, transportes, policías locales, aerolíneas, taxis, oficinas de objetos perdidos, comunidades y nuestra base propia de recuperadores."
  },
  {
    icon: MessageSquare,
    title: "3. Te mantenemos al tanto",
    description: "Seguimiento por email y WhatsApp con cada avance. Si localizamos el objeto, te pasamos el contacto para coordinar la recogida/envío (no incluido)."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y transparente en 3 pasos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-soft">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;