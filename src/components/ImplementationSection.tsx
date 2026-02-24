// Sección Implementación - 4 pasos con imagen banner
// CAMBIAR: Pasos, textos, tiempos estimados
import { Settings, GraduationCap, ArrowRightLeft, CheckCircle2 } from "lucide-react";
import imgImplementacion from "@/assets/img-implementacion.jpg";

const steps = [
  {
    icon: Settings,
    title: "1. Configura",
    description: "Configuramos tu cuenta en menos de 24 horas. Sin complicaciones técnicas.",
  },
  {
    icon: GraduationCap,
    title: "2. Capacita",
    description: "Te entrenamos a ti y tu equipo. Videos, guías y soporte en vivo.",
  },
  {
    icon: ArrowRightLeft,
    title: "3. Migra",
    description: "Migramos tus datos y clientes. Sin perder información histórica.",
  },
  {
    icon: CheckCircle2,
    title: "4. ¡Listo!",
    description: "Empieza a facturar electrónicamente. Soporte continuo incluido.",
  },
];

const ImplementationSection = () => {
  return (
    <section id="implementacion" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
            Implementa en <span className="text-primary">4 Horas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Proceso simple, acompañamiento total. No necesitas ser experto en tecnología.
          </p>
        </div>

        {/* Imagen banner del proceso */}
        <div className="max-w-4xl mx-auto mb-10">
          <img
            src={imgImplementacion}
            alt="Proceso de implementación 5 Direcciones"
            className="w-full rounded-2xl shadow-card"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-xl p-6 text-center shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{step.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
