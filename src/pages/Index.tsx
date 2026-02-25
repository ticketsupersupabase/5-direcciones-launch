// Página principal - Landing page de ventas 5 Direcciones
// One-page scroll con todas las secciones de venta
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PlansSection from "@/components/PlansSection";
import ImplementationSection from "@/components/ImplementationSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import RIPSSection from "@/components/RIPSSection";
import TitulosValorSection from "@/components/TitulosValorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Header fijo con logo y nav */}
      <Header />

      {/* 1. Hero - Título principal y CTAs agresivos */}
      <HeroSection />

      {/* 2. Problema/Solución - Beneficios documentos electrónicos */}
      <ProblemSection />

      {/* 3. Planes - Cards comparativa con precios */}
      <PlansSection />

      {/* 4. Implementación - 4 pasos */}
      <ImplementationSection />

      {/* 5. Ventajas - Grid + testimonios */}
      <AdvantagesSection />

      {/* 6. Títulos Valor Gratis - Card especial */}
      <TitulosValorSection />

      {/* 7. RIPS Gratis - Sección destacada con beneficios y CTA */}
      <RIPSSection />

      {/* 7. CTA Final - Formulario + WA */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp flotante sticky */}
      <WhatsAppSticky />
    </main>
  );
};

export default Index;
