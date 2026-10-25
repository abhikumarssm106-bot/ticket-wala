import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}
