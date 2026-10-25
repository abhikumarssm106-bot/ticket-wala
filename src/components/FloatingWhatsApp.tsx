import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../lib/whatsapp';

/**
 * Floating green WhatsApp button visible on md+ screens (bottom-right).
 * On mobile, the MobileBottomBar is shown instead.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink('Hi TicketWala, I need help with a ticket booking')}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping-slow" aria-hidden="true" />
    </a>
  );
}
