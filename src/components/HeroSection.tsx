// Sección Hero - Título principal, CTA agresivo, urgencia
// CAMBIAR: Textos de hero, porcentajes, CTAs
import confetti from "canvas-confetti";

const HeroSection = () => {
  // Confetti al hacer clic en CTA principal
  const handleCtaClick = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#00A676", "#FF9800", "#ffffff"],
    });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-gradient overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Badge urgencia */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 pulse-urgency">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-semibold">
              {/* CAMBIAR: Texto de urgencia */}
              99% de nuestros clientes ahorran horas cada semana
            </span>
          </div>

          {/* Título principal H1 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Digitaliza Tu Facturación <span className="text-secondary">YA</span> con 5 Direcciones
          </h1>

          {/* Subtítulo con propuesta de valor */}
          <p className="text-lg md:text-xl opacity-90 mb-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {/* CAMBIAR: Precio y porcentaje de ahorro */}
            Envía y recibe facturas electrónicas 100% DIAN compliant. Reduce <strong>80% del tiempo</strong> en facturación.
            Planes desde <strong>$189.900/mes</strong>. ¡Elige plan y empieza hoy!
          </p>

          <p className="text-base opacity-80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            ¡No pierdas más tiempo en papel! Plataforma #1 de facturación electrónica en Colombia.
          </p>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* CTA: Elegir Plan (scroll a planes) */}
            <a
              href="#planes"
              onClick={handleCtaClick}
              className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta shadow-lg"
            >
              🚀 Elegir Mi Plan
            </a>

            {/* CTA: Prueba Gratis WhatsApp */}
            <a
              href="https://wa.me/573013936616?text=Hola%205Direcciones%2C%20quiero%20probar%20facturaci%C3%B3n%20electr%C3%B3nica%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary-foreground/15 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta"
            >
              💬 Prueba Gratis por WA
            </a>
          </div>

          {/* Social proof rápido */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm opacity-80 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>100% DIAN Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>99% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span>App Móvil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
