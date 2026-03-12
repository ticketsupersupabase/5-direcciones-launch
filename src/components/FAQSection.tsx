// Sección FAQ - Preguntas frecuentes sobre folios y planes
// CAMBIAR: Preguntas y respuestas según necesidad
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// CAMBIAR: Agregar, editar o quitar preguntas aquí
const faqs = [
  {
    question: "¿Los folios tienen vigencia?",
    answer: "Sí, todos los paquetes de folios tienen una vigencia de 2 años desde la fecha de compra.",
  },
  {
    question: "¿Puedo comprar solo folios?",
    answer: "Sí, puedes comprar paquetes individuales de folios para Facturación Electrónica, Documento Soporte o Nómina Electrónica según tu necesidad.",
  },
  {
    question: "¿Qué paquete me conviene?",
    answer: "Depende del volumen mensual de documentos que emitas. Si tienes dudas, escríbenos por WhatsApp y te asesoramos sin compromiso.",
  },
  {
    question: "¿Puedo comprar por WhatsApp?",
    answer: "Sí, todos los planes se pueden adquirir directamente por WhatsApp. Solo haz clic en el botón 'Comprar' del paquete que necesites.",
  },
  {
    question: "¿Tienen opciones para el sector salud?",
    answer: "Sí, contamos con soporte para generación de RIPS integrado al ecosistema de facturación electrónica.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 md:py-20 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
