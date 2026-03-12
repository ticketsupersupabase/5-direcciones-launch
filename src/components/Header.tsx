// Header fijo con logo 5 Direcciones y navegación
// CAMBIAR: Links de navegación según secciones finales, número WA
import logo from "@/assets/logo-5-direcciones.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo 5 Direcciones */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo 5 Direcciones - Facturación Electrónica Colombia"
            className="h-10 w-auto"
          />
        </a>

        {/* Navegación desktop */}
        {/* CAMBIAR: Links de navegación */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#planes" className="text-muted-foreground hover:text-primary transition-colors">
            Paquetes
          </a>
          <a href="#planes-facturacion" className="text-muted-foreground hover:text-primary transition-colors">
            Facturación
          </a>
          <a href="#planes-doc-soporte" className="text-muted-foreground hover:text-primary transition-colors">
            Doc. Soporte
          </a>
          <a href="#planes-nomina" className="text-muted-foreground hover:text-primary transition-colors">
            Nómina
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Header - WhatsApp */}
        {/* CAMBIAR: Número WA y texto prellenado */}
        <a
          href="https://wa.me/573013936616?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20paquetes%20de%20folios"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold hover-scale-cta"
        >
          Comprar Folios
        </a>
      </div>
    </header>
  );
};

export default Header;
