import { Button } from "@/components/ui/button"; // Asumiendo shadcn/ui

const RIPSSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¡RIPS GRATIS para tu Salud!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al facturar con 5 Direcciones, accede inmediatamente a nuestro módulo RIPS. Todos los médicos y profesionales del sector salud generan sus RIPS aquí, gratis y compliant con MinSalud.[web:17][web:22]
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Beneficios */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">¿Por qué nuestro módulo RIPS?</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Gratis con cualquier paquete activo de folios electrónicos.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Genera RIPS validos para facturas DIAN y EPS en segundos.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Soporte para IPS, clínicas y profesionales independientes.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Cumple Resolución 2275/2023: FEV + RIPS automáticos.
              </li>
            </ul>
          </div>
          
         {/* CTA Principal - WhatsApp prellenado */}
<div className="text-center">
  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
    <h4 className="text-3xl font-bold text-blue-600 mb-4">¡Para el sector salud, los RIPS están ACÁ!</h4>
    <p className="text-gray-600 mb-8">
      Solo emite facturas desde nuestra plataforma y accede al módulo.
    </p>
    <a
      href="https://wa.me/573013936616?text=¡Hola!%0AQuiero%20activar%20mi%20paquete%20de%20facturación%20electrónica%20con%20RIPS%20GRATIS%20para%20el%20sector%20salud.%0A%0A¿Cuáles%20son%20las%20opciones%20disponibles?%0D%0A%0D%0AGracias!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 mb-4">
        Activa tu Paquete Ahora
      </Button>
    </a>
    <p className="text-sm text-gray-500">
      Desde $189k/mes + RIPS ilimitados
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default RIPSSection;
