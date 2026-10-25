import { useState, useEffect, useCallback } from 'react';
import { Menu, X, MessageCircle, Ticket } from 'lucide-react';
import { Container } from './Container';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink } from '../lib/whatsapp';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Trust', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Close menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // IntersectionObserver for active link highlight
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-border">
      <Container className="flex justify-between items-center py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" aria-label={`${siteConfig.brand.name} - Home`}>
          <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Ticket className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-primary tracking-tight leading-tight">
              {siteConfig.brand.name}
            </span>
            <span className="text-[10px] text-on-surface-variant leading-none font-normal">
              {siteConfig.brand.tagline}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent bg-accent/10'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp button */}
        <a
          href={buildWhatsAppLink('Hi TicketWala, I need help booking a ticket')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp/90 active:scale-95 transition-all shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Me</span>
        </a>

        {/* Mobile: status chip + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={buildWhatsAppLink('Hi TicketWala, I need help booking a ticket')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-primary text-xs font-semibold"
            aria-label="Chat on WhatsApp"
          >
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <MessageCircle className="w-4 h-4 text-whatsapp" />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-surface-container transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] z-50 bg-black/30" onClick={() => setMenuOpen(false)}>
          <nav
            className="bg-white border-b border-border shadow-lg animate-slide-down"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col py-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-accent bg-accent/10'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppLink('Hi TicketWala, I need help booking a ticket')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-2 mb-2 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-whatsapp text-white font-semibold text-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
