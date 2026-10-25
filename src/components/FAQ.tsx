import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  // Split into 2 columns for desktop
  const midpoint = Math.ceil(siteConfig.faq.length / 2);
  const leftColumn = siteConfig.faq.slice(0, midpoint);
  const rightColumn = siteConfig.faq.slice(midpoint);

  const renderItem = (item: (typeof siteConfig.faq)[number], globalIndex: number) => {
    const isOpen = openIndex === globalIndex;
    const contentId = `faq-content-${globalIndex}`;
    const triggerId = `faq-trigger-${globalIndex}`;

    return (
      <div key={globalIndex} className="rounded-xl bg-white border border-border overflow-hidden">
        <button
          id={triggerId}
          type="button"
          onClick={() => toggle(globalIndex)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full px-5 py-4 text-left flex justify-between items-center gap-3 hover:bg-surface-container transition-colors min-h-[44px]"
        >
          <span className="text-sm font-medium text-primary pr-2">{item.question}</span>
          <ChevronDown
            className={`w-5 h-5 text-outline flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-4 pt-2 text-sm text-on-surface-variant leading-relaxed border-t border-border">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section id="faq">
      <Container>
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Clear answers regarding personal assistance and bookings.
          </p>
        </div>

        {/* Mobile: single column, Desktop: 2 columns */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1 flex flex-col gap-3">
            {leftColumn.map((item, i) => renderItem(item, i))}
          </div>
          <div className="flex-1 flex flex-col gap-3">
            {rightColumn.map((item, i) => renderItem(item, midpoint + i))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
