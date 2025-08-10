import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "+500",
    label: "contactos activos",
    description: "Red global en crecimiento"
  },
  {
    number: "<12h",
    label: "tiempo medio de primera respuesta",
    description: "Empezamos rápido"
  },
  {
    number: "85%",
    label: "tasa de localización",
    description: "cuando hay pista suficiente"
  }
];

const testimonials = [
  {
    name: "María González",
    object: "iPhone 14",
    city: "Barcelona",
    quote: "Perdí mi móvil en el aeropuerto. En 2 días me contactaron desde la oficina de objetos perdidos. ¡Increíble servicio!",
    result: "Recuperado"
  },
  {
    name: "Carlos Ruiz",
    object: "Maleta",
    city: "Madrid",
    quote: "Mi maleta se perdió en el tren. LocalizaMi contactó con RENFE y la encontraron en la estación de destino.",
    result: "Recuperado"
  },
  {
    name: "Ana Martín",
    object: "Cartera",
    city: "Valencia",
    quote: "Excelente comunicación durante todo el proceso. Aunque no la encontramos, sé que hicieron todo lo posible.",
    result: "Gestión completa"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados y prueba social</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-soft hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-2 p-0">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-bold text-center">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4 p-0">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.object} • {testimonial.city}</div>
                    </div>
                    <div className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;