// Sección Hero - Enfocada en venta de folios
// CAMBIAR: Precios, textos, número WhatsApp, imagen hero
import heroImg from "@/assets/hero-facturacion.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-gradient overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto lado izquierdo */}
          <div className="text-primary-foreground">
            {/* CAMBIAR: Headline principal */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Inicia a facturar desde <span className="text-secondary">$92.900</span> con paquetes desde 25 folios
            </h1>

            {/* CAMBIAR: Subtítulo */}
            <p className="text-lg opacity-90 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Compra tus paquetes de folios con vigencia de 2 años para Facturación Electrónica, Documento Soporte y Nómina Electrónica.
            </p>

            {/* Microcopy de confianza */}
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <span>✅ Compra rápida por WhatsApp</span>
              <span>📅 Vigencia 2 años</span>
              <span>📦 Opciones para distintos volúmenes</span>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* CAMBIAR: Número WA y texto prellenado */}
              <a
                href="https://wa.me/573013936616?text=Hola%2C%20quiero%20comprar%20un%20paquete%20de%20folios%20para%20facturaci%C3%B3n%20electr%C3%B3nica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta shadow-lg text-center"
              >
                💬 Comprar por WhatsApp
              </a>
              <a
                href="#planes-facturacion"
                className="w-full sm:w-auto bg-primary-foreground/15 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta text-center"
              >
                📋 Ver paquetes
              </a>
            </div>
          </div>

          {/* Imagen lado derecho */}
          <div className="animate-fade-in-up hidden md:block" style={{ animationDelay: "0.2s" }}>
            {/* CAMBIAR: Imagen hero */}
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
