// Sección Títulos Valor Gratis - Card especial con CTA
// CAMBIAR: Descripción de títulos valor, link WA
import { Award } from "lucide-react";

const TitulosValorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-primary/20 text-center animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Títulos Valor Electrónicos — <span className="text-primary">¡Gratis!</span>
            </h2>

            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              {/* CAMBIAR: Descripción títulos valor */}
              Prueba la gestión de títulos valor electrónicos sin costo. Digitaliza pagarés, letras de cambio y más.
              Integrado con tu facturación electrónica.
            </p>

            {/* CTA Activar Gratis */}
            <a
              href="https://wa.me/573013936616?text=Quiero%20activar%20T%C3%ADtulos%20Valor%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta"
            >
              🎁 Activa Gratis por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitulosValorSection;
