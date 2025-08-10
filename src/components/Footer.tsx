import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-trust-badge text-trust-badge-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LocalizaMi</h3>
            <p className="text-sm opacity-80">
              Servicio profesional de búsqueda de objetos perdidos con red global de contactos.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces legales</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:hola@localizami.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  hola@localizami.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="h-4 w-4" />
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Información legal</h4>
            <div className="text-xs opacity-80 space-y-1">
              <p>Cumplimos RGPD</p>
              <p>No garantizamos la recuperación, solo una gestión exhaustiva de la localización.</p>
              <p>No incluimos envíos/recogidas ni pagos a terceros.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 LocalizaMi. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;