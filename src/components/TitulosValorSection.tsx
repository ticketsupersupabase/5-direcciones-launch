// Sección Títulos Valor Gratis - Card con imagen
// CAMBIAR: Descripción de títulos valor, link WA
import imgTitulos from "@/assets/img-titulos-valor.jpg";

const TitulosValorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-primary/20 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src={imgTitulos}
                alt="Títulos Valor Electrónicos 5 Direcciones"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                  Recibe nuestra oferta de — <span className="text-primary">Aniversario</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  10 folios gratuitos para que inicies a facturar electrónicamente.   Aplica terminos y condiciones para clientes nuevos.
                  Recuerda que tenemos facturación para el sector salud; aun no emites facturación con RIPS Y el pos electrónico es una realidad cotiza con nosotros

                </p>
                <a
                  href="https://wa.me/573013936616?text=Quiero%20activar%20T%C3%ADtulos%20Valor%20gratis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover-scale-cta"
                >
                  🎁 Activa Gratis por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitulosValorSection;
