// Sección Planes - Cards comparativa con precios y CTAs WhatsApp
// CAMBIAR: Precios, nombres de planes, features, links WA
import confetti from "canvas-confetti";
import { Check } from "lucide-react";

// CAMBIAR: Datos de planes aquí
const plans = [
  {
    name: "Básico",
    // CAMBIAR: precio plan básico
    price: "$189.900",
    period: "/mes",
    invoices: "25 facturas/mes",
    features: [
      "Documentos soporte electrónicos",
      "Envíos básicos DIAN",
      "Panel de control",
      "Soporte por email",
    ],
    highlighted: false,
    // CAMBIAR: Texto prellenado WA
    waText: "Quiero%20plan%20B%C3%A1sico%20info",
  },
  {
    name: "Pro",
    // CAMBIAR: precio plan pro
    price: "$309.900",
    period: "/mes",
    invoices: "100 facturas/mes",
    features: [
      "Todo lo del Básico",
      "Títulos valor electrónicos",
      "Reportes avanzados",
      "Soporte prioritario",
      "Integraciones",
    ],
    highlighted: true,
    waText: "Quiero%20plan%20Pro%20info",
  },
  {
    name: "Max",
    // CAMBIAR: precio plan max
    price: "$699.900",
    period: "/mes",
    invoices: "400 facturas/mes",
    features: [
      "Todo lo del Pro",
      "API completa",
      "Soporte prioritario 24/7",
      "Multi-sucursal",
      "Personalización total",
      "Gerente de cuenta",
    ],
    highlighted: false,
    waText: "Quiero%20plan%20Max%20info",
  },
];

const PlansSection = () => {
  const handleSelectPlan = () => {
    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#00A676", "#FF9800"],
    });
  };

  return (
    <section id="planes" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
            Elige Tu Plan y <span className="text-secondary">Empieza Hoy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {/* CAMBIAR: Subtítulo planes */}
            Paga mensual, sin contratos. Implementa en 4 semanas. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 md:p-8 border transition-all duration-300 animate-fade-in-up ${
                plan.highlighted
                  ? "plan-highlight border-secondary"
                  : "border-border shadow-card hover:shadow-lg"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Badge plan popular */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  ⭐ MÁS POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  {/* CAMBIAR: Precio aquí */}
                  <span className="text-3xl md:text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-primary font-semibold mt-2">{plan.invoices}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA WhatsApp por plan */}
              <a
                href={`https://wa.me/573013936616?text=${plan.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSelectPlan}
                className={`block text-center w-full py-3 rounded-xl font-bold text-base hover-scale-cta transition-colors ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Seleccionar {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
