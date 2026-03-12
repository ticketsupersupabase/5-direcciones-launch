// Sección RIPS - Bloque secundario para sector salud (sin precios)
// CAMBIAR: Textos, bullets, número WhatsApp
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const RIPSSection = () => {
  // CAMBIAR: Mensaje prellenado para asesoría RIPS
  const waUrl = buildWhatsAppUrl("Hola, quiero información sobre la solución de RIPS para el sector salud.");

  return (
    <section id="rips" className="py-14 md:py-20">
      <div className="container max-w-4xl">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            {/* CAMBIAR: Título RIPS */}
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-3">
              ¿Eres del sector salud? También tienes soporte para <span className="text-primary">RIPS</span>
            </h2>
            {/* CAMBIAR: Descripción RIPS */}
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Si tu operación requiere RIPS, contamos con una solución alineada para profesionales, IPS y entidades del sector salud.
            </p>
          </div>

          {/* CAMBIAR: Bullets de beneficios RIPS */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-muted-foreground max-w-2xl mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              Compatible con operación del sector salud
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              Soporte para generación de RIPS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              Acompañamiento para procesos relacionados
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              Integración dentro del ecosistema de facturación
            </li>
          </ul>

          {/* CTA sin precios */}
          <div className="text-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover-scale-cta"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RIPSSection;
