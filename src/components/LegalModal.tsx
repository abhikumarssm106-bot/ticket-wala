import { useEffect, useRef } from 'react';
import { X, Shield, FileText, Building2, Mail, Phone, Clock, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../config/site';

export type LegalTab = 'terms' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onSelectTab: (tab: LegalTab) => void;
}

export function LegalModal({ isOpen, activeTab, onClose, onSelectTab }: LegalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Trap body scroll & focus on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const { business, termsAndConditions, privacyPolicy } = siteConfig;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-primary/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-slide-down"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary-container text-white flex items-center justify-center shadow-sm">
              {activeTab === 'terms' ? <FileText className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="font-heading text-lg font-bold text-primary">
                {activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h2>
              <p className="text-xs text-on-surface-variant">
                TicketWala Legal &amp; Compliance Hub • Last Updated: October 2026
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-border bg-surface-container-low px-4 pt-2 gap-2" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'terms'}
            aria-controls="panel-terms"
            id="tab-terms"
            onClick={() => onSelectTab('terms')}
            className={`flex items-center gap-2 px-4 py-2.5 font-medium text-sm border-b-2 transition-all -mb-px ${
              activeTab === 'terms'
                ? 'border-accent text-accent bg-white rounded-t-lg shadow-xs font-semibold'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'privacy'}
            aria-controls="panel-privacy"
            id="tab-privacy"
            onClick={() => onSelectTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2.5 font-medium text-sm border-b-2 transition-all -mb-px ${
              activeTab === 'privacy'
                ? 'border-accent text-accent bg-white rounded-t-lg shadow-xs font-semibold'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Privacy Policy (DPDP Act)</span>
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-sm text-on-surface leading-relaxed">
          {/* Statutory Risk & Compliance Alert */}
          <div className="p-4 rounded-xl bg-surface-container border border-outline-variant flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs space-y-1">
              <p className="font-semibold text-primary">
                Important Compliance Notice (Railways Act 1989 &amp; Independent Disclaimer)
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                TicketWala is an independent customer assistance concierge. We do not sell or issue tickets directly, nor are we an official agent of IRCTC, Indian Railways, airlines, bus operators, or cinema chains. We facilitate booking guidance strictly via authorized portals adhering to Section 143 of the Railways Act, 1989.
              </p>
            </div>
          </div>

          {/* Business Details Card */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-accent" />
              <h3 className="font-semibold text-xs uppercase tracking-wider text-primary">
                Official Business &amp; Grievance Redressal Details
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface-variant">
              <div>
                <span className="font-medium text-primary">Legal Entity: </span>
                {business.legalName}
              </div>
              <div>
                <span className="font-medium text-primary">Entity Type: </span>
                {business.entityType}
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span className="font-medium text-primary">Support: </span>
                <a href={`mailto:${business.email}`} className="text-accent underline">
                  {business.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-error" />
                <span className="font-medium text-primary">Grievance Desk: </span>
                <a href={`mailto:${business.grievanceEmail}`} className="text-error underline">
                  {business.grievanceEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span className="font-medium text-primary">Phone: </span>
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span className="font-medium text-primary">Hours: </span>
                <span>{business.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Tab 1: Terms and Conditions */}
          {activeTab === 'terms' && (
            <div id="panel-terms" role="tabpanel" aria-labelledby="tab-terms" className="space-y-5">
              {termsAndConditions.sections.map((section, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-heading font-semibold text-primary text-sm sm:text-base">
                    {section.title}
                  </h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Privacy Policy */}
          {activeTab === 'privacy' && (
            <div id="panel-privacy" role="tabpanel" aria-labelledby="tab-privacy" className="space-y-5">
              {privacyPolicy.sections.map((section, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-heading font-semibold text-primary text-sm sm:text-base">
                    {section.title}
                  </h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-border bg-surface-container-lowest flex items-center justify-between">
          <p className="text-[11px] text-on-surface-variant">
            Governed by the laws of India • All trademarks belong to respective owners
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-primary-container text-white text-xs font-semibold hover:opacity-90 active:scale-95 transition-all min-h-[36px]"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
