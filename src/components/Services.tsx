import { ArrowRight, Bus, TrainFront, Plane, Clapperboard, Info } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink } from '../lib/whatsapp';

const iconMap = {
  Bus,
  TrainFront,
  Plane,
  Clapperboard,
} as const;

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">How I Can Help</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Personal assistance for different kinds of tickets.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.services.map((service) => {
            const IconComp = iconMap[service.icon];
            return (
              <a
                key={service.id}
                href={buildWhatsAppLink(service.enquiryText)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white border border-border flex flex-col justify-between gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-surface-container text-primary w-fit mb-3 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base text-primary">{service.title}</h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                  Enquire
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>

        {/* Disclaimer note */}
        <div className="mt-6 p-3 rounded-lg bg-surface-container text-on-surface-variant flex gap-2 items-start border border-outline-variant">
          <Info className="w-4 h-4 text-outline mt-0.5 flex-shrink-0" />
          <p className="text-xs leading-normal">
            <strong className="font-semibold text-on-surface">Notice:</strong> Independent assistance
            service. Actual ticket availability, pricing, and rules are determined by respective
            official operators.
          </p>
        </div>
      </Container>
    </Section>
  );
}
