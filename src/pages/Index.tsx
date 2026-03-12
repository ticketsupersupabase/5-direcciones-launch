// Página principal - Landing de venta de folios 5 Direcciones
// Orden optimizado para conversión desde anuncios pagos
// CAMBIAR: Orden de secciones, agregar/quitar secciones
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import PricingCarouselSection from "@/components/PricingCarouselSection";
import RIPSSection from "@/components/RIPSSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";

// ============================================================
// DATOS DE PLANES - CAMBIAR: precios, folios, agregar/quitar
// ============================================================

// CAMBIAR: Planes de Facturación Electrónica
const planesFacturacion = [
  { folios: "25 folios", price: "$92.900 COP" },
  { folios: "50 folios", price: "$109.900 COP" },
  { folios: "100 folios", price: "$169.900 COP" },
  { folios: "200 folios", price: "$255.900 COP" },
  { folios: "400 folios", price: "$383.900 COP" },
  { folios: "500 folios", price: "$429.900 COP" },
  { folios: "1.000 folios", price: "$642.900 COP" },
  { folios: "2.500 folios", price: "$1.342.900 COP" },
  { folios: "5.000 folios", price: "$2.347.900 COP" },
  { folios: "10.000 folios", price: "$4.279.900 COP" },
  { folios: "15.000 folios", price: "$6.253.900 COP" },
  { folios: "20.000 folios", price: "$8.142.900 COP" },
  { folios: "25.000 folios", price: "$9.822.900 COP" },
  { folios: "50.000 folios", price: "$18.636.900 COP" },
  { folios: "100.000 folios", price: "$33.442.900 COP" },
];

// CAMBIAR: Planes de Documento Soporte Electrónico
const planesDocSoporte = [
  { folios: "25 folios", price: "$92.900 COP" },
  { folios: "50 folios", price: "$109.900 COP" },
  { folios: "100 folios", price: "$169.900 COP" },
  { folios: "200 folios", price: "$255.900 COP" },
  { folios: "400 folios", price: "$383.900 COP" },
  { folios: "500 folios", price: "$429.900 COP" },
  { folios: "1.000 folios", price: "$642.900 COP" },
  { folios: "2.500 folios", price: "$1.342.900 COP" },
  { folios: "5.000 folios", price: "$2.347.900 COP" },
  { folios: "10.000 folios", price: "$4.279.900 COP" },
  { folios: "20.000 folios", price: "$8.142.900 COP" },
  { folios: "30.000 folios", price: "$11.472.900 COP" },
];

// CAMBIAR: Planes de Nómina Electrónica
const planesNomina = [
  { folios: "12 folios", price: "$46.900 COP" },
  { folios: "25 folios", price: "$92.900 COP" },
  { folios: "36 folios", price: "$100.900 COP" },
  { folios: "48 folios", price: "$105.900 COP" },
  { folios: "50 folios", price: "$109.900 COP" },
  { folios: "60 folios", price: "$122.900 COP" },
  { folios: "72 folios", price: "$132.900 COP" },
  { folios: "84 folios", price: "$146.900 COP" },
  { folios: "96 folios", price: "$165.900 COP" },
  { folios: "100 folios", price: "$169.900 COP" },
  { folios: "108 folios", price: "$180.900 COP" },
  { folios: "120 folios", price: "$193.900 COP" },
  { folios: "200 folios", price: "$255.900 COP" },
  { folios: "240 folios", price: "$293.900 COP" },
  { folios: "400 folios", price: "$383.900 COP" },
  { folios: "500 folios", price: "$429.900 COP" },
  { folios: "1.000 folios", price: "$642.900 COP" },
  { folios: "2.500 folios", price: "$1.342.900 COP" },
  { folios: "5.000 folios", price: "$2.347.900 COP" },
  { folios: "10.000 folios", price: "$4.279.900 COP" },
  { folios: "15.000 folios", price: "$6.253.900 COP" },
  { folios: "20.000 folios", price: "$8.142.900 COP" },
  { folios: "25.000 folios", price: "$9.822.900 COP" },
  { folios: "30.000 folios", price: "$11.472.900 COP" },
  { folios: "50.000 folios", price: "$18.636.900 COP" },
  { folios: "100.000 folios", price: "$33.442.900 COP" },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Header fijo con logo y nav */}
      <Header />

      {/* 1. Hero - Enfoque en venta de folios desde $92.900 */}
      <HeroSection />

      {/* 2. Planes combo destacados */}
      <PlansSection />

      {/* 3. Carrusel: Facturación Electrónica */}
      <PricingCarouselSection
        id="planes-facturacion"
        title="Documentos Electrónicos"
        description="Paquetes de folios para la transmisión de Factura Electrónica de Venta desde plataforma Facturatech. Vigencia dos años."
        plans={planesFacturacion}
        tipo="Facturación Electrónica"
        accentColor="primary"
      />

      {/* 4. Carrusel: Documento Soporte Electrónico */}
      <PricingCarouselSection
        id="planes-doc-soporte"
        title="Documento Soporte Electrónico"
        description="Paquetes de folios para la transmisión de Documento Soporte Electrónico desde plataforma Facturatech. Vigencia dos años."
        plans={planesDocSoporte}
        tipo="Documento Soporte Electrónico"
        accentColor="secondary"
      />

      {/* 5. Carrusel: Nómina Electrónica */}
      <PricingCarouselSection
        id="planes-nomina"
        title="Nómina Electrónica"
        description="Paquetes de folios para la transmisión del Documento Soporte de Pago de Nómina Electrónica desde plataforma Facturatech. Vigencia dos años."
        plans={planesNomina}
        tipo="Nómina Electrónica"
        accentColor="primary"
      />

      {/* 6. RIPS - Bloque secundario sector salud */}
      <RIPSSection />

      {/* 7. FAQ breve */}
      <FAQSection />

      {/* 8. CTA Final */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp flotante sticky */}
      <WhatsAppSticky />
    </main>
  );
};

export default Index;
