// Sección Problema/Solución - Cards con imágenes
// CAMBIAR: Textos y beneficios según producto actual
import imgEnvio from "@/assets/img-envio-docs.png";
import imgRecibe from "@/assets/img-recibe-facturas.jpg";
import imgDian from "@/assets/img-automatiza-dian.avif";
import imgTitulos from "@/assets/img-titulos-valor.jpg";

const benefits = [
  {
    image: imgEnvio,
    title: "Envía Documentos Soporte Electrónicos",
    description: "Genera y envía documentos soporte a la DIAN de forma automática. Sin errores, sin demoras.",
  },
  {
    image: imgRecibe,
    title: "Recibe Facturas Sin Papel",
    description: "Recibe y gestiona todas tus facturas electrónicas en un solo lugar. Adiós al papel.",
  },
  {
    image: imgDian,
    title: "Automatiza Todo con la DIAN",
    description: "Conexión directa con la DIAN. Validación automática, numeración autorizada, reportes al día.",
  },
  {
    image: imgTitulos,
    title: "Títulos Valor Electrónicos",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card animate-fade-in-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-2 text-lg">{b.title}</h3>
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
