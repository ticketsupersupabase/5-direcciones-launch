// Footer - Copyright, links, DIAN compliance
// CAMBIAR: Año, links de privacidad, redes sociales
import logo from "@/assets/logo-5-direcciones.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo 5 Direcciones" className="h-8 w-auto brightness-200" />
            <span className="text-sm">
              {/* CAMBIAR: Año y razón social */}
              © 2026 5 Direcciones. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span>✅ Compliant DIAN</span>
            {/* CAMBIAR: Links de privacidad y términos */}
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
