import { CheckCircle, MessageCircle, Clock, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink } from '../lib/whatsapp';
import profilePlaceholder from '../assets/profile.jpg';

export function About() {
  const { business } = siteConfig;

  return (
    <Section id="about" className="bg-surface-container-low">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left: Profile photo */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-primary-container overflow-hidden border-4 border-accent/20 shadow-lg">
              <img
                src={profilePlaceholder}
                alt="TicketWala - Personal booking concierge"
                className="w-full h-full object-cover"
                width={176}
                height={176}
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Concierge
              </span>
            </div>
          </div>

          {/* Middle: Text & bullet points */}
          <div className="flex-1">
            <span className="text-xs text-accent uppercase font-semibold tracking-wider">
              Human-First Concierge
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mt-1">
              A Real Person to Help With Your Booking
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4">
              We make travel and event planning straightforward. Share where you need to go, your preferred timing, and ticket category. We look up legitimate options across authorized platforms, explain the fare breakdown, and help you finalize your reservation.
            </p>

            <ul className="flex flex-col gap-3 mt-5">
              {siteConfig.aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-on-surface font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Business Details & Quick Connect Card */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-border">
                <Building2 className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Business Desk
                </span>
              </div>
              <div className="text-xs text-on-surface-variant space-y-1">
                <p className="font-semibold text-primary">{business.legalName}</p>
                <p>{business.entityType}</p>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{business.operatingLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{business.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                <MessageCircle className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <span>Encrypted 1-on-1 WhatsApp Chat</span>
              </div>
              <a
                href={buildWhatsAppLink('Hi TicketWala, I would like to enquire about your booking assistance services')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp/90 active:scale-[0.97] transition-all min-h-[44px] shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
