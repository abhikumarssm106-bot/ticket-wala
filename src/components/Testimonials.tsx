import { ShieldCheck, Lock, Award, MessageSquareHeart } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink } from '../lib/whatsapp';

export function Testimonials() {
  const iconMap = {
    ShieldCheck,
    Lock,
    Award,
  } as const;

  return (
    <Section id="reviews" className="bg-surface">
      <Container>
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Honest &amp; Transparent Concierge</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
            Customer Trust &amp; Service Standards
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
            We believe in complete transparency. We never publish fabricated or unverified reviews. Here is our solemn commitment to every client who contacts us for ticket booking assistance.
          </p>
        </div>

        {/* 3 Genuine Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.commitments.map((item) => {
            const IconComp = iconMap[item.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Customer Feedback Invitation Box */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
              <MessageSquareHeart className="w-6 h-6 text-whatsapp" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm sm:text-base text-primary">
                Booked with TicketWala Recently?
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                We value your genuine feedback! Message us on WhatsApp to share your experience or suggest improvements.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppLink('Hi TicketWala, I used your booking assistance service and would like to share my feedback:')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-whatsapp text-white text-xs sm:text-sm font-semibold hover:bg-whatsapp/90 active:scale-95 transition-all shadow-xs min-h-[44px]"
          >
            Share Your Experience
          </a>
        </div>
      </Container>
    </Section>
  );
}
