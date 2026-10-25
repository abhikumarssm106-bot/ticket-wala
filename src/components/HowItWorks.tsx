import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">How It Works</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Simple 3-step booking flow without confusion.
          </p>
        </div>

        {/* Mobile: vertical timeline, Desktop: 3 horizontal cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
          {/* Connecting line (mobile) */}
          <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-border lg:hidden" aria-hidden="true" />

          {siteConfig.howItWorks.map((step, index) => (
            <div key={step.step} className="flex-1 flex items-start gap-4 lg:flex-col lg:items-center lg:text-center relative">
              {/* Step number */}
              <div className="w-10 h-10 rounded-xl bg-primary-container text-white font-heading text-lg font-bold flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                {String(step.step).padStart(2, '0')}
              </div>
              <div className="flex flex-col lg:mt-4">
                <h3 className="font-semibold text-base text-primary">{step.title}</h3>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Desktop connector arrow (between cards, not after last) */}
              {index < siteConfig.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-5 text-border" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-outline-variant">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
