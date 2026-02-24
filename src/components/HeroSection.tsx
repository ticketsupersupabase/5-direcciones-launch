// Sección Hero - Split layout texto + imagen
// CAMBIAR: Textos de hero, CTAs
import confetti from "canvas-confetti";
import heroImg from "@/assets/hero-facturacion.jpg";

const HeroSection = () => {
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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto lado izquierdo */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 pulse-urgency">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-semibold">
                99% de nuestros clientes ahorran horas cada semana
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Digitaliza Tu Facturación <span className="text-secondary">YA</span>
            </h1>

            <p className="text-lg opacity-90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Facturación electrónica 100% DIAN. Planes desde <strong>$189.900/mes</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="#planes"
                onClick={handleCtaClick}
                className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta shadow-lg text-center"
              >
                🚀 Elegir Mi Plan
              </a>
              <a
                href="https://wa.me/573013936616?text=Hola%205Direcciones%2C%20quiero%20una%20consulta%20gratis%20sobre%20facturaci%C3%B3n%20electr%C3%B3nica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary-foreground/15 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta text-center"
              >
                💬 Consulta Gratis
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm opacity-80 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>100% DIAN</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span>Configuración rápida</span>
              </div>
            </div>
          </div>

          {/* Imagen lado derecho */}
          <div className="animate-fade-in-up hidden md:block" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImg}
              alt="Plataforma de facturación electrónica 5 Direcciones"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
