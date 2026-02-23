// Header fijo con logo 5 Direcciones y navegación
// CAMBIAR: Links de navegación según secciones finales
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
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#planes" className="text-muted-foreground hover:text-primary transition-colors">
            Planes
          </a>
          <a href="#ventajas" className="text-muted-foreground hover:text-primary transition-colors">
            Ventajas
          </a>
          <a href="#implementacion" className="text-muted-foreground hover:text-primary transition-colors">
            Implementación
          </a>
          <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        {/* CTA Header - WhatsApp */}
        <a
          href="https://wa.me/573013936616?text=Hola%205Direcciones%2C%20quiero%20una%20consulta%20gratis%20sobre%20facturaci%C3%B3n%20electr%C3%B3nica"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold hover-scale-cta"
        >
          Consulta Gratis
        </a>
      </div>
    </header>
  );
};

export default Header;
