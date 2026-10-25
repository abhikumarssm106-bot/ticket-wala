import { MessageCircle, Eye, BadgeCheck, RefreshCw } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';

const iconMap = {
  MessageCircle,
  Eye,
  BadgeCheck,
  RefreshCw,
} as const;

export function WhyChoose() {
  return (
    <Section id="why-choose" className="bg-surface-container-low">
      <Container>
        <div className="mb-8">
          <span className="text-xs text-accent uppercase font-semibold tracking-wider">
            Genuine Standards
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mt-1">
            Straightforward Service. Personal Support.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.whyChoose.map((item, index) => {
            const IconComp = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center lg:items-start lg:text-left gap-3 ${
                  index > 0 ? 'lg:border-l lg:border-border lg:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center">
                  <IconComp className="w-5 h-5 text-whatsapp" />
                </div>
                <h3 className="font-semibold text-sm text-on-surface">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
