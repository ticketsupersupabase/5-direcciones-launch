// Utilidad para construir URLs de WhatsApp con mensaje prellenado
// CAMBIAR: Número de WhatsApp aquí (se usa en toda la web)
const WA_NUMBER = "573013936616";

/**
 * Construye la URL de WhatsApp con mensaje prellenado
 * @param message - Texto del mensaje (sin codificar)
 * @returns URL completa de WhatsApp
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Construye URL de WhatsApp para compra de un plan específico
 * @param folios - Cantidad de folios
 * @param tipo - Tipo de documento (ej: "Facturación Electrónica")
 * @param precio - Precio formateado (ej: "$92.900 COP")
 * @returns URL completa de WhatsApp
 */
// CAMBIAR: Formato del mensaje prellenado de compra
export function buildPlanWhatsAppUrl(folios: number | string, tipo: string, precio: string): string {
  const message = `Hola, quiero comprar el paquete de ${folios} folios de ${tipo} por ${precio}.`;
  return buildWhatsAppUrl(message);
}
