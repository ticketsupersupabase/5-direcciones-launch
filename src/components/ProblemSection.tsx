// Sección Problema/Solución - Envía y recibe documentos electrónicos
// CAMBIAR: Textos y beneficios según producto actual
import { FileText, Download, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Envía Documentos Soporte Electrónicos",
    // CAMBIAR: Descripción del beneficio
    description: "Genera y envía documentos soporte a la DIAN de forma automática. Sin errores, sin demoras.",
  },
  {
    icon: Download,
    title: "Recibe Facturas Sin Papel",
    description: "Recibe y gestiona todas tus facturas electrónicas en un solo lugar. Adiós al papel.",
  },
  {
    icon: Shield,
    title: "Automatiza Todo con la DIAN",
    description: "Conexión directa con la DIAN. Validación automática, numeración autorizada, reportes al día.",
  },
  {
    icon: Zap,
    title: "Títulos Valor - Prueba Gratis",
    // CAMBIAR: Info de títulos valor
    description: "Gestiona títulos valor electrónicos. Activa la prueba gratis y descubre el poder digital.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
            ¿Aún Facturas en Papel? <span className="text-primary">Hay Una Mejor Forma</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            5 Direcciones automatiza tu facturación electrónica al 100%. DIAN compliant, rápido, fácil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-card rounded-xl p-6 shadow-card animate-fade-in-up flex gap-4"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <b.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
