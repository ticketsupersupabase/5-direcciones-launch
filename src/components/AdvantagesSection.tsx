// Sección Ventajas - Cards con imágenes + testimonios
// CAMBIAR: Ventajas, testimonios, nombres de clientes
import { Star } from "lucide-react";
import imgTiempo from "@/assets/img-reduce-tiempo.jpg";
import imgDian from "@/assets/img-dian-compliant.jpg";
import imgReportes from "@/assets/img-reportes.jpg";

const advantages = [
  {
    image: imgTiempo,
    title: "Reduce 80% Tiempo",
    description: "Automatiza la generación, envío y recepción de facturas electrónicas.",
  },
  {
    image: imgDian,
    title: "100% DIAN Compliant",
    description: "Cumplimiento total con la normativa DIAN. Siempre actualizado.",
  },
  {
    image: imgReportes,
    title: "Reportes en Tiempo Real",
    description: "Dashboard con métricas, estados de facturas y alertas automáticas.",
  },
];

// CAMBIAR: Testimonios reales de clientes
const testimonials = [
  {
    name: "Valentina Acosta",
    company: "MICROTONER PC V&J S.A.S.",
    text: "Perfecto para mi negocio. Reduje el tiempo de facturación de 3 horas a 20 minutos al día.",
    rating: 5,
  },
  {
    name: "Fernando Hernandez",
    company: "Propietario de Granfer Percheros y repisas",
    text: "La implementación fue increíblemente rápida; en dos horas estábamos facturando electrónicamente.",
    rating: 5,
  },
];

const AdvantagesSection = () => {
  return (
    <section id="ventajas" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
            ¿Por Qué <span className="text-primary">5 Direcciones</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            La plataforma que más PYMEs eligen en Colombia.
          </p>
        </div>

        {/* Grid ventajas con imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={adv.image}
                alt={adv.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-bold text-foreground text-base mb-1">{adv.title}</h3>
                <p className="text-xs text-muted-foreground">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center text-foreground mb-8">
            Lo Que Dicen Nuestros Clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-muted/60 rounded-xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-foreground italic mb-3">"{t.text}"</p>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
