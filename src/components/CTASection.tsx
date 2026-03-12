// Sección CTA Final - Cierre comercial fuerte
// CAMBIAR: Textos, número WhatsApp, mensajes prellenados
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const CTASection = () => {
  // CAMBIAR: Mensajes prellenados de WhatsApp
  const waComprar = buildWhatsAppUrl("Hola, quiero comprar un paquete de folios.");
  const waAsesor = buildWhatsAppUrl("Hola, quiero hablar con un asesor sobre los paquetes de folios.");

  return (
    <section id="contacto" className="py-16 md:py-24 bg-hero-gradient">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center text-primary-foreground">
          {/* CAMBIAR: Título CTA final */}
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            Empieza hoy con el paquete que mejor se adapte a <span className="text-secondary">tu operación</span>
          </h2>

          {/* CAMBIAR: Descripción CTA final */}
          <p className="text-lg opacity-90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Compra tus folios de facturación, documento soporte o nómina electrónica con vigencia de 2 años y atención directa por WhatsApp.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a
              href={waComprar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta shadow-lg text-center"
            >
              🛒 Comprar ahora
            </a>
            <a
              href={waAsesor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary-foreground/15 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta text-center"
            >
              💬 Hablar con asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
