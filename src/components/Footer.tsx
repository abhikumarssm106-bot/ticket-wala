import { Ticket, MessageCircle, Phone, Mail, ShieldAlert, Building2, Clock } from 'lucide-react';
import { Container } from './Container';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink, buildPhoneLink } from '../lib/whatsapp';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Concierge', href: '#about' },
  { label: 'Trust & Standards', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

interface FooterProps {
  onOpenLegal?: (tab: 'terms' | 'privacy') => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { business } = siteConfig;

  return (
    <footer className="bg-primary text-white pt-12 md:pt-16 pb-28 md:pb-12 border-t border-primary-container">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Business Entity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center">
                <Ticket className="w-5 h-5" />
              </div>
              <span className="font-heading text-lg font-bold">{siteConfig.brand.name}</span>
            </div>
            <p className="text-xs text-outline-variant leading-relaxed">
              {siteConfig.brand.description}
            </p>
            <div className="pt-2 border-t border-primary-container space-y-1 text-xs text-outline-variant">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Building2 className="w-3.5 h-3.5 text-accent" />
                <span>{business.legalName}</span>
              </div>
              <p className="text-[11px] text-outline-variant">
                {business.entityType}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-outline-variant pt-1">
                <Clock className="w-3 h-3 text-accent" />
                <span>{business.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-surface-container-highest uppercase tracking-wider text-xs">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-outline-variant hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Grievance Redressal */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-surface-container-highest uppercase tracking-wider text-xs">
              Support &amp; Grievances
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-outline-variant hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                  <span>WhatsApp: {business.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildPhoneLink()}
                  className="flex items-center gap-2 text-outline-variant hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call: {business.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-outline-variant hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span>Email: {business.email}</span>
                </a>
              </li>
              <li className="pt-2 border-t border-primary-container">
                <div className="text-[11px] text-outline-variant">
                  <span className="font-semibold text-white">Grievance Officer:</span>
                  <br />
                  <a href={`mailto:${business.grievanceEmail}`} className="text-accent underline">
                    {business.grievanceEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Statutory Disclaimers */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm mb-3 text-surface-container-highest uppercase tracking-wider text-xs">
              Legal &amp; Policies
            </h3>
            <div className="p-3 rounded-xl bg-primary-container border border-on-primary-fixed-variant text-left">
              <div className="flex items-start gap-1.5 mb-1.5 text-amber-400">
                <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] font-semibold">Statutory Notice</span>
              </div>
              <p className="text-[11px] text-outline-variant leading-relaxed">
                {siteConfig.disclaimer}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <button
                type="button"
                onClick={() => onOpenLegal?.('terms')}
                className="text-white hover:text-accent underline transition-colors"
              >
                Terms &amp; Conditions
              </button>
              <span className="text-outline">•</span>
              <button
                type="button"
                onClick={() => onOpenLegal?.('privacy')}
                className="text-white hover:text-accent underline transition-colors"
              >
                Privacy Policy (DPDP)
              </button>
            </div>
          </div>
        </div>

        {/* Trademark & Copyright Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-primary-container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-outline-variant leading-relaxed max-w-2xl">
            <strong>Trademark Disclaimer:</strong> All third-party trademarks, service marks, logos, and brand names (including IRCTC, Indian Railways, MakeMyTrip, RedBus, BookMyShow, airlines, etc.) are the property of their respective owners. Mention on this site does not imply affiliation or endorsement.
          </p>
          <p className="text-[11px] text-outline-variant flex-shrink-0">
            © {currentYear} {business.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
