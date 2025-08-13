import { Plane, MapPin, Car, Briefcase, Camera } from "lucide-react";

const useCases = [
  {
    icon: Plane,
    title: "Aeropuertos y viajes",
    items: "maletas extraviadas, móviles olvidados en vuelos, documentos perdidos en terminales"
  },
  {
    icon: MapPin,
    title: "Centros urbanos",
    items: "llaves perdidas en Madrid/Barcelona, carteras en restaurantes, DNI/pasaporte extraviados"
  },
  {
    icon: Car,
    title: "Transporte público",
    items: "móvil olvidado en taxi/uber, abrigos en metro, equipaje en autobuses"
  },
  {
    icon: Briefcase,
    title: "Trabajo y estudios",
    items: "portátiles perdidos en oficinas, tablets en universidades, documentos empresariales"
  },
  {
    icon: Camera,
    title: "Eventos y ocio",
    items: "cámaras en bodas, instrumentos musicales, prendas en discotecas"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Objetos perdidos que más recuperamos en España</h2>
          <p className="text-xl text-muted-foreground">
            Especializados en localizar móviles, documentos, maletas y objetos personales perdidos en aeropuertos, hoteles, transporte y más
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