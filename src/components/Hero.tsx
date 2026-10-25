import {
  MessageCircle,
  Phone,
  UserCheck,
  Receipt,
  HelpCircle,
  CheckCircle,
} from 'lucide-react';
import { Container } from './Container';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink, buildPhoneLink } from '../lib/whatsapp';
import heroPlaceholder from '../assets/hero.jpg';

export function Hero() {
  return (
    <section id="home" className="pt-8 pb-12 md:pt-16 md:pb-20 scroll-mt-20 bg-surface">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high w-fit">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-xs text-on-surface-variant tracking-wider font-semibold uppercase">
                Independent Ticket Booking Assistance
              </span>
            </div>

            {/* Live status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-whatsapp/10 w-fit border border-whatsapp/20">
              <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
              <span className="text-xs font-semibold text-whatsapp">Active Assistance Desk</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Need a Ticket?{' '}
              <br />
              <span className="text-accent">We'll Guide &amp; Assist You.</span>
            </h1>

            <p className="text-on-surface-variant text-base leading-relaxed max-w-xl">
              From bus and train schedule research to flights and movie tickets, get personal booking
              guidance without the hassle of navigating complicated booking portals alone.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buildWhatsAppLink('Hi TicketWala, I would like assistance booking a ticket')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-whatsapp text-white font-semibold text-sm shadow-md hover:bg-whatsapp/90 active:scale-[0.97] transition-all min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={buildPhoneLink()}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-primary border border-border font-semibold text-sm shadow-sm hover:bg-surface-container active:scale-[0.97] transition-all min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                <span>Call Concierge</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-border text-center mt-2">
              {siteConfig.trustHighlights.map((item, index) => {
                const icons = { UserCheck, Receipt, HelpCircle };
                const IconComp = icons[item.icon as keyof typeof icons] ?? HelpCircle;
                return (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center gap-1 ${
                      index > 0 ? 'border-l border-border' : ''
                    }`}
                  >
                    <IconComp className="w-5 h-5 text-accent" />
                    <span className="text-xs text-on-surface-variant font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Hero visual */}
          <div className="flex-1 mt-8 lg:mt-0">
            {/* Desktop hero image */}
            <div className="relative">
              <div className="hidden lg:block absolute -top-3 left-4 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-on-surface-variant shadow-sm border border-border">
                  Bus · Train · Flight · Movie
                </span>
              </div>
              <img
                src={heroPlaceholder}
                alt="Travel assistance - Bus, Train, Flight and Movie ticket booking guidance"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] lg:aspect-[3/2]"
                width={600}
                height={400}
                loading="eager"
              />
            </div>

            {/* Consultation snapshot card */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-border relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-whatsapp" />
                  <span className="text-xs font-semibold text-primary">Live Concierge Sample</span>
                </div>
                <span className="text-xs text-accent bg-surface-container px-2 py-0.5 rounded font-medium">
                  Assistance Flow
                </span>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">Delhi (NDLS) → Mumbai (BCT)</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    Train Consultation
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed italic">
                  "Hello, I need 2 berths for next Tuesday. Rajdhani preferred or evening Duronto."
                </p>
                <div className="flex items-center gap-2 mt-1 pt-2 border-t border-surface-container-low text-on-surface-variant">
                  <CheckCircle className="w-4 h-4 text-whatsapp flex-shrink-0" />
                  <span className="text-xs">Availability verified via official portal &amp; details confirmed together</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
