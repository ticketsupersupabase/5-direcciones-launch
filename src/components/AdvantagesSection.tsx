// Sección Ventajas - Grid con iconos y testimonios placeholder
// CAMBIAR: Ventajas, testimonios, nombres de clientes
import { Clock, Shield, Smartphone, BarChart3, Star } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Reduce 80% Tiempo",
    description: "Automatiza la generación, envío y recepción de facturas electrónicas.",
  },
  {
    icon: Shield,
    title: "100% DIAN Compliant",
    description: "Cumplimiento total con la normativa DIAN. Siempre actualizado.",
  },
  {
    icon: Smartphone,
    title: "App Móvil",
    description: "Factura desde tu celular. Gestión completa en la palma de tu mano.",
  },
  {
    icon: BarChart3,
    title: "Reportes en Tiempo Real",
    description: "Dashboard con métricas, estados de facturas y alertas automáticas.",
  },
];

// CAMBIAR: Testimonios reales de clientes
const testimonials = [
  {
    name: "María López",
    company: "Distribuidora El Sol - Medellín",
    text: "Perfecto para mi PYME. Reduje el tiempo de facturación de 3 horas a 20 minutos al día.",
    rating: 5,
  },
  {
    name: "Carlos Restrepo",
    company: "Importaciones CR - Bogotá",
    text: "La implementación fue increíblemente rápida. En 2 semanas ya estábamos facturando electrónicamente.",
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

        {/* Grid ventajas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className="bg-card rounded-xl p-5 text-center shadow-card hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <adv.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{adv.title}</h3>
              <p className="text-xs text-muted-foreground">{adv.description}</p>
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
                {/* Estrellas */}
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
