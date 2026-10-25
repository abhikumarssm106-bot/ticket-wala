import { useState, type FormEvent } from 'react';
import { Send, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { siteConfig } from '../config/site';
import { buildWhatsAppLink, buildPhoneLink } from '../lib/whatsapp';

type TicketType = 'Train' | 'Bus' | 'Flight' | 'Movie';
type ContactMethod = 'WhatsApp' | 'Phone';

interface FormErrors {
  name?: string;
  ticketType?: string;
  date?: string;
  consent?: string;
}

interface EnquiryFormProps {
  onOpenLegal?: (tab: 'terms' | 'privacy') => void;
}

export function EnquiryForm({ onOpenLegal }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [ticketType, setTicketType] = useState<TicketType>('Train');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [notes, setNotes] = useState('');
  const [contactMethod, setContactMethod] = useState<ContactMethod>('WhatsApp');
  const [consentNotifications, setConsentNotifications] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const isMovie = ticketType === 'Movie';

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = 'Please enter your full name';
    if (!ticketType) newErrors.ticketType = 'Please select a ticket category';
    if (journeyDate) {
      const selected = new Date(journeyDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) newErrors.date = 'Journey date cannot be in the past';
    }
    if (!consentNotifications) {
      newErrors.consent = 'Please agree to receive booking notifications to proceed';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      'Hi TicketWala! I would like assistance booking a ticket:',
      `• Name: ${name}`,
      `• Category: ${ticketType}`,
      isMovie
        ? `• City / Cinema: ${fromCity || 'Any'} | ${toCity || 'Latest Show'}`
        : `• Route: ${fromCity || 'Origin'} to ${toCity || 'Destination'}`,
      `• ${isMovie ? 'Show' : 'Journey'} Date: ${journeyDate || 'Flexible'}`,
    ];
    if (notes.trim()) lines.push(`• Requirements: ${notes}`);
    lines.push(`• Preferred Contact: ${contactMethod}`);
    lines.push('• Notification Consent: Confirmed (Agreed to updates & Terms)');

    const message = lines.join('\n');
    window.open(buildWhatsAppLink(message), '_blank');
  };

  return (
    <Section id="contact" className="bg-surface-container-low">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: pitch + verified business contact */}
          <div className="flex-1 lg:max-w-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Concierge Desk</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Let's Sort Out Your Ticket
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-3">
              Tell us what journey or movie you need help with. We verify official availability on authorized platforms and guide you through each step.
            </p>

            {/* Quick contact buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href={buildWhatsAppLink('Hi TicketWala, I would like to enquire about ticket booking assistance')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp text-white font-semibold text-sm active:scale-[0.97] transition-all min-h-[44px] shadow-sm hover:bg-whatsapp/90"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={buildPhoneLink()}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-primary border border-border font-semibold text-sm active:scale-[0.97] transition-all min-h-[44px] shadow-sm hover:bg-surface-container"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>

            {/* Business & Support Details Card */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-border shadow-xs space-y-2.5">
              <h3 className="font-semibold text-xs text-primary uppercase tracking-wider">
                Business &amp; Support Contact
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-primary">Business:</strong> {siteConfig.business.legalName}
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-primary">Hours:</strong> {siteConfig.business.workingHours}
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-primary">Phone:</strong> {siteConfig.business.phone}
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-primary">Email:</strong>{' '}
                <a href={`mailto:${siteConfig.business.email}`} className="text-accent underline">
                  {siteConfig.business.email}
                </a>
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-primary">Grievance Officer:</strong>{' '}
                <a href={`mailto:${siteConfig.business.grievanceEmail}`} className="text-accent underline">
                  {siteConfig.business.grievanceEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Right: Accessible Form */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-white border border-border shadow-md flex flex-col gap-4"
              noValidate
              aria-label="Ticket booking enquiry form"
            >
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="userName" className="text-sm font-semibold text-primary">
                  Your Full Name <span className="text-error" aria-hidden="true">*</span>
                </label>
                <input
                  id="userName"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="e.g. Amit Sharma"
                  className={`w-full h-11 px-3.5 rounded-lg border bg-white text-on-surface text-sm transition-colors outline-none ${
                    errors.name
                      ? 'border-error focus:ring-2 focus:ring-error/20'
                      : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/20'
                  }`}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs text-error font-medium" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Ticket Type */}
              <div className="flex flex-col gap-1">
                <label htmlFor="ticketType" className="text-sm font-semibold text-primary">
                  Ticket Category <span className="text-error" aria-hidden="true">*</span>
                </label>
                <select
                  id="ticketType"
                  value={ticketType}
                  onChange={(e) => setTicketType(e.target.value as TicketType)}
                  className="w-full h-11 px-3.5 rounded-lg border border-border bg-white text-on-surface text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                >
                  <option value="Train">Train Booking Guidance (IRCTC Authorized)</option>
                  <option value="Bus">Bus Ticket Booking</option>
                  <option value="Flight">Flight Ticket Booking</option>
                  <option value="Movie">Movie Ticket Booking</option>
                </select>
              </div>

              {/* Dynamic From/To Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="fromCity" className="text-sm font-semibold text-primary">
                    {isMovie ? 'City' : 'From City'}
                  </label>
                  <input
                    id="fromCity"
                    type="text"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    placeholder={isMovie ? 'e.g. Pune' : 'e.g. New Delhi'}
                    className="w-full h-11 px-3.5 rounded-lg border border-border bg-white text-on-surface text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="toCity" className="text-sm font-semibold text-primary">
                    {isMovie ? 'Cinema / Movie Name' : 'Destination'}
                  </label>
                  <input
                    id="toCity"
                    type="text"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    placeholder={isMovie ? 'e.g. PVR Inox / Movie Name' : 'e.g. Mumbai'}
                    className="w-full h-11 px-3.5 rounded-lg border border-border bg-white text-on-surface text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Journey Date */}
              <div className="flex flex-col gap-1">
                <label htmlFor="journeyDate" className="text-sm font-semibold text-primary">
                  {isMovie ? 'Show Date' : 'Journey Date'}
                </label>
                <input
                  id="journeyDate"
                  type="date"
                  value={journeyDate}
                  min={new Date().toISOString().split('T')[0]}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                  onChange={(e) => {
                    setJourneyDate(e.target.value);
                    if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                  }}
                  className={`w-full h-11 px-3.5 rounded-lg border bg-white text-on-surface text-sm transition-colors outline-none ${
                    errors.date
                      ? 'border-error focus:ring-2 focus:ring-error/20'
                      : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/20'
                  }`}
                />
                {errors.date && (
                  <span id="date-error" className="text-xs text-error font-medium" role="alert">
                    {errors.date}
                  </span>
                )}
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1">
                <label htmlFor="userNotes" className="text-sm font-semibold text-primary">
                  Requirements / Timing Preferences
                </label>
                <textarea
                  id="userNotes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 2 AC Berths, morning train preferred, or cinema recliner seat"
                  rows={2}
                  className="w-full p-3 rounded-lg border border-border bg-white text-on-surface text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors resize-none"
                />
              </div>

              {/* Contact Method */}
              <fieldset className="flex flex-col gap-2 pt-1">
                <legend className="text-sm font-semibold text-primary">Preferred Communication Method</legend>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="WhatsApp"
                      checked={contactMethod === 'WhatsApp'}
                      onChange={() => setContactMethod('WhatsApp')}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-on-surface">WhatsApp Message</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Phone"
                      checked={contactMethod === 'Phone'}
                      onChange={() => setContactMethod('Phone')}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-on-surface">Phone Call</span>
                  </label>
                </div>
              </fieldset>

              {/* ACCESSIBLE NOTIFICATION & LEGAL CONSENT CHECKBOX */}
              <div className="pt-2 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      id="consentNotification"
                      type="checkbox"
                      required
                      aria-required="true"
                      checked={consentNotifications}
                      onChange={(e) => {
                        setConsentNotifications(e.target.checked);
                        if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
                      }}
                      className="w-5 h-5 rounded border border-border text-accent focus:ring-2 focus:ring-accent focus:ring-offset-1 cursor-pointer"
                    />
                  </div>
                  <label htmlFor="consentNotification" className="text-xs text-on-surface-variant leading-relaxed cursor-pointer select-none">
                    <span className="font-semibold text-primary">
                      I agree to receive booking updates, reminders, and notifications
                    </span>{' '}
                    via WhatsApp or phone call. I have reviewed and agree to the{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal?.('terms')}
                      className="text-accent underline hover:text-primary font-medium"
                    >
                      Terms &amp; Conditions
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal?.('privacy')}
                      className="text-accent underline hover:text-primary font-medium"
                    >
                      Privacy Policy
                    </button>
                    .
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-xs text-error font-medium mt-1.5" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-primary-container text-white font-semibold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm hover:opacity-95 min-h-[44px] mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry to TicketWala</span>
              </button>

              <p className="text-[11px] text-on-surface-variant text-center leading-tight">
                Your details open directly in WhatsApp for secure end-to-end encrypted coordination.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
