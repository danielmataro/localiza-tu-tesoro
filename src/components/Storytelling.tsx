import storyFound from "@/assets/story-found.jpg";

const Storytelling = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <article className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">¿Por qué es tan difícil encontrar objetos perdidos en España?</h2>
            <p className="text-lg text-muted-foreground">
              Buscar un objeto perdido implica contactar con decenas de lugares: aeropuertos, estaciones, hoteles, transporte público, oficinas municipales... Líneas ocupadas, formularios complejos y procesos que requieren paciencia y insistencia.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                <span>Dificultad para dar con la persona adecuada en cada organismo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                <span>Seguimientos que requieren reintentos y registros de cada avance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                <span>Coordinación entre distintos puntos (policía, transporte, hoteles, oficinas de objetos perdidos).</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground">
              Por eso decidimos hacerlo por ti: para que cuentes con un equipo de reclamación e insistencia mientras tú disfrutas de tu tiempo.
            </p>
          </div>
          <aside className="relative">
            <img
              src={storyFound}
              alt="Persona recuperando un objeto perdido"
              className="w-full h-auto rounded-2xl shadow-strong"
              loading="lazy"
            />
          </aside>
        </article>
      </div>
    </section>
  );
};

export default Storytelling;
