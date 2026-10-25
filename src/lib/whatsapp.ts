import { siteConfig } from '../config/site';

/**
 * Builds a WhatsApp deep link with an optional pre-filled message.
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a tel: link for the business phone number.
 */
export function buildPhoneLink(): string {
  return `tel:${siteConfig.contact.phoneRaw}`;
}
