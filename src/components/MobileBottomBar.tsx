import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppLink, buildPhoneLink } from '../lib/whatsapp';

/**
 * Fixed bottom contact bar for mobile screens only (below md).
 * Never shown together with FloatingWhatsApp.
 */
export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-border px-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-3 py-2.5">
        <a
          href={buildWhatsAppLink('Hi TicketWala, I need help with a ticket booking')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-whatsapp text-white font-semibold text-sm active:scale-[0.97] transition-transform min-h-[44px]"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
        <a
          href={buildPhoneLink()}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-primary-container text-white font-semibold text-sm active:scale-[0.97] transition-transform min-h-[44px]"
        >
          <Phone className="w-5 h-5" />
          <span>Call Me</span>
        </a>
      </div>
    </div>
  );
}
