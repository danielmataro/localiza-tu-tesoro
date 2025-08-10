import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué incluye exactamente el servicio de 29€?",
    answer: "La gestión de búsqueda y localización del objeto: investigamos, contactamos y trazamos posibles ubicaciones. No incluye el envío, recogida u otras gestiones logísticas posteriores."
  },
  {
    question: "¿Garantizáis la recuperación?",
    answer: "No podemos garantizarla. Lo que garantizamos es una búsqueda exhaustiva con nuestra metodología y red de contactos. Si no hay pistas suficientes, te lo diremos pronto."
  },
  {
    question: "¿Cuánto tarda?",
    answer: "Empezamos en menos de 24h laborables. La duración depende del caso y los tiempos de respuesta de terceros. Te informamos de cada avance."
  },
  {
    question: "¿Y si el objeto aparece después?",
    answer: "Si tras cerrar la gestión te escriben con una pista, te lo reenviamos sin coste."
  },
  {
    question: "¿En qué países operáis?",
    answer: "Global. Adaptamos el canal y el idioma según el lugar (español/inglés y plantillas multilingües)."
  },
  {
    question: "¿Qué pasa con mis datos?",
    answer: "Solo usamos la información para la búsqueda. Cumplimos RGPD. Ver Política de Privacidad."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos tus dudas sobre nuestro servicio
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;