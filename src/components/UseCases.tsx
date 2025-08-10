import { Plane, MapPin, Car, Briefcase, Camera } from "lucide-react";

const useCases = [
  {
    icon: Plane,
    title: "Viajes",
    items: "maletas, mochilas, neceseres, souvenirs"
  },
  {
    icon: MapPin,
    title: "Ciudad",
    items: "llaves, carteras, DNI/pasaporte, gafas"
  },
  {
    icon: Car,
    title: "Transporte",
    items: "móvil olvidado en taxi/uber, abrigos en metro, paquetes"
  },
  {
    icon: Briefcase,
    title: "Trabajo/estudio",
    items: "portátiles, tablets, USB, herramientas"
  },
  {
    icon: Camera,
    title: "Ocio/eventos",
    items: "cámaras, instrumentos, prendas"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de uso</h2>
          <p className="text-xl text-muted-foreground">
            Recuperamos todo tipo de objetos en cualquier situación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 border text-center">
              <div className="space-y-4">
                <div className="mx-auto bg-gradient-to-br from-primary to-accent p-4 rounded-full w-fit">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.items}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;