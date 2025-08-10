import { Globe, Search, Heart, BarChart, DollarSign } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Red global y base de datos propia",
    description: "Cientos de puntos de contacto verificados y en crecimiento."
  },
  {
    icon: Search,
    title: "Metodología exhaustiva",
    description: "Guion de búsqueda estructurado, recordatorios y reintentos programados."
  },
  {
    icon: Heart,
    title: "Enfoque humano + tecnología",
    description: "Priorización por probabilidad, plantillas inteligentes multilingües, y trazabilidad de acciones."
  },
  {
    icon: BarChart,
    title: "Transparencia total",
    description: "Panel/cronograma de acciones y mensajes clave (resumen en el seguimiento)."
  },
  {
    icon: DollarSign,
    title: "Precio claro",
    description: "29€ por gestión, sin letra pequeña."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por qué elegirnos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hacemos el trabajo que nadie tiene tiempo de hacer: llamar, insistir, verificar y documentar. Conectamos con las personas y los lugares correctos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 border">
              <div className="space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-primary/5 p-6 rounded-xl border">
            <h4 className="text-2xl font-bold text-primary mb-2">Plantillas multilingües</h4>
            <p className="text-muted-foreground">(ES/EN) para acelerar respuestas</p>
          </div>
          <div className="bg-accent/5 p-6 rounded-xl border">
            <h4 className="text-2xl font-bold text-accent mb-2">Reintentos programados</h4>
            <p className="text-muted-foreground">Recordatorios automáticos a contactos clave</p>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl border">
            <h4 className="text-2xl font-bold text-primary mb-2">Priorización inteligente</h4>
            <p className="text-muted-foreground">Empezamos por los puntos calientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;