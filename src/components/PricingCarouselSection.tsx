// Componente reutilizable: Carrusel de planes con cards premium
// Se usa para Facturación Electrónica, Documento Soporte y Nómina Electrónica
// CAMBIAR: Estilos de cards, velocidad de autoplay, diseño de badges
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildPlanWhatsAppUrl } from "@/lib/whatsapp";

// Tipo para cada plan/paquete de folios
export interface FolioPlan {
  // CAMBIAR: Agregar o quitar campos según necesidad
  folios: string;       // Ej: "25 folios"
  price: string;        // Ej: "$92.900 COP"
}

interface PricingCarouselSectionProps {
  // CAMBIAR: Textos de la sección
  id: string;           // ID para ancla de navegación
  title: string;        // Título de la sección
  description: string;  // Descripción debajo del título
  plans: FolioPlan[];   // Lista de planes a mostrar
  tipo: string;         // Tipo para el mensaje WA (ej: "Facturación Electrónica")
  accentColor?: "primary" | "secondary"; // Color de acento para variedad visual
}

const PricingCarouselSection = ({
  id,
  title,
  description,
  plans,
  tipo,
  accentColor = "primary",
}: PricingCarouselSectionProps) => {
  // Autoplay con pausa en hover
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,        // CAMBIAR: Velocidad del autoplay (ms)
      stopOnInteraction: false,
      stopOnMouseEnter: true, // Pausa al hover
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      // Responsive: muestra varias cards según el ancho
      breakpoints: {},
    },
    [autoplayPlugin.current]
  );

  // Navegación manual
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Clases de acento según el color
  const btnClass = accentColor === "secondary"
    ? "bg-secondary text-secondary-foreground hover:opacity-90"
    : "bg-primary text-primary-foreground hover:opacity-90";

  const headerAccent = accentColor === "secondary" ? "text-secondary" : "text-primary";

  return (
    <section id={id} className="py-14 md:py-20">
      <div className="container">
        {/* Encabezado de sección */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3">
            {/* CAMBIAR: Título de la sección */}
            <span className={headerAccent}>{title}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {/* CAMBIAR: Descripción de la sección */}
            {description}
          </p>
        </div>

        {/* Carrusel con flechas */}
        <div className="relative">
          {/* Flecha izquierda */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Contenedor del carrusel */}
          <div className="overflow-hidden mx-6 md:mx-8" ref={emblaRef}>
            <div className="flex">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  // CAMBIAR: Ancho de cada card (basis) para mostrar más o menos cards
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 pl-4"
                >
                  {/* Card del plan */}
                  <div className="bg-card rounded-2xl border border-border p-5 md:p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    {/* Badge vigencia */}
                    <span className="inline-block self-start text-[10px] font-semibold bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full mb-4">
                      Vigencia 2 años
                    </span>

                    {/* Nombre del paquete */}
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {/* CAMBIAR: Formato del nombre del paquete */}
                      {plan.folios}
                    </p>

                    {/* Precio destacado */}
                    <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-5">
                      {plan.price}
                    </p>

                    {/* Spacer para alinear botones */}
                    <div className="mt-auto">
                      {/* CAMBIAR: Texto del botón y mensaje WA */}
                      <a
                        href={buildPlanWhatsAppUrl(plan.folios, tipo, plan.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center w-full py-2.5 rounded-xl text-sm font-bold transition-all hover-scale-cta ${btnClass}`}
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingCarouselSection;
