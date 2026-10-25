import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoose } from './components/WhyChoose';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { LegalModal, type LegalTab } from './components/LegalModal';

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('terms');

  const handleOpenLegal = useCallback((tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  }, []);

  const handleCloseLegal = useCallback(() => {
    setIsLegalOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <EnquiryForm onOpenLegal={handleOpenLegal} />
      </main>
      <Footer onOpenLegal={handleOpenLegal} />
      <FloatingWhatsApp />
      <MobileBottomBar />

      {/* Accessible Terms & Privacy Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        activeTab={legalTab}
        onClose={handleCloseLegal}
        onSelectTab={setLegalTab}
      />
    </div>
  );
}
