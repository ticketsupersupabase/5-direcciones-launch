// Sección CTA Final - Formulario de captura de leads + CTA WhatsApp
// CAMBIAR: Acción del formulario (EmailJS), número WA, textos
import { useState, type FormEvent } from "react";
import confetti from "canvas-confetti";

const CTASection = () => {
  const [formData, setFormData] = useState({ nombre: "", empresa: "", telefono: "" });
  const [submitted, setSubmitted] = useState(false);

  // CAMBIAR: Conectar con EmailJS o backend real
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // AGREGAR: Envío real con EmailJS aquí
    // emailjs.send('service_id', 'template_id', formData)
    console.log("Lead capturado:", formData);
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00A676", "#FF9800", "#ffffff"],
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-hero-gradient">
      <div className="container">
        <div className="max-w-xl mx-auto text-center text-primary-foreground">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            ¡Digitaliza Tu Facturación <span className="text-secondary">Hoy!</span>
          </h2>
          <p className="text-lg opacity-90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {/* CAMBIAR: Texto CTA final */}
            Escribe por WhatsApp ahora y recibe una oferta especial. O déjanos tus datos y te contactamos.
          </p>

          {/* Formulario captura leads */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-4 border border-primary-foreground/20 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Nombre completo"
              />
              <input
                type="text"
                placeholder="Empresa"
                required
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Nombre de empresa"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Número de teléfono"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl text-lg font-bold hover-scale-cta"
              >
                📩 Quiero Que Me Contacten
              </button>
            </form>
          ) : (
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 animate-fade-in-up">
              <p className="text-2xl font-bold mb-2">🎉 ¡Gracias!</p>
              <p className="opacity-90">Te contactaremos muy pronto. ¡Prepárate para digitalizar!</p>
            </div>
          )}

          {/* CTA WhatsApp grande */}
          <a
            href="https://wa.me/573013936616?text=%C2%BFQu%C3%A9%20plan%20necesito%3F%20Quiero%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-primary-foreground text-primary px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            💬 Venta Directa WA +573013936616
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
