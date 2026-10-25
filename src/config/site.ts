export const siteConfig = {
  brand: {
    name: 'TicketWala',
    tagline: 'Personal Ticket Booking Assistance',
    description:
      'Independent personal ticket booking assistance across India. Genuine human guidance for bus, train, flight, and movie reservations via authorized platforms.',
  },

  business: {
    legalName: 'TicketWala Assistance Services',
    entityType: 'Independent Service Provider / Sole Proprietorship (India)',
    operatingLocation: 'Operating Across India (Offices in Delhi NCR & Mumbai)',
    phone: '+91 98765 43210',
    phoneRaw: '919876543210',
    whatsapp: '919876543210',
    email: 'hello@ticketwala.in',
    grievanceEmail: 'grievance@ticketwala.in',
    workingHours: '9:00 AM – 10:00 PM IST, Everyday',
    grievanceOfficer: 'Designated Grievance & Compliance Desk',
  },

  contact: {
    phone: '+91 98765 43210',
    phoneRaw: '919876543210',
    whatsapp: '919876543210',
    email: 'hello@ticketwala.in',
    grievanceEmail: 'grievance@ticketwala.in',
    location: 'India',
    workingHours: '9:00 AM – 10:00 PM IST, Everyday',
  },

  services: [
    {
      id: 'bus',
      title: 'Bus Tickets',
      description:
        'Route research and assistance with bus bookings across state transport and verified private bus aggregators.',
      icon: 'Bus' as const,
      enquiryText: 'Hi TicketWala, I need help with Bus ticket booking enquiry',
    },
    {
      id: 'train',
      title: 'Train Tickets',
      description:
        'Guidance on train schedules, route options, and booking assistance via official authorized IRCTC channels. No tatkal guarantees.',
      icon: 'TrainFront' as const,
      enquiryText: 'Hi TicketWala, I need help with Train ticket booking guidance',
    },
    {
      id: 'flight',
      title: 'Flight Tickets',
      description:
        'Fare search guidance and booking coordination for domestic and international flights. Baggage and cancellation rules governed by airlines.',
      icon: 'Plane' as const,
      enquiryText: 'Hi TicketWala, I need help with Flight ticket booking enquiry',
    },
    {
      id: 'movie',
      title: 'Movie Tickets',
      description:
        'Assistance discovering cinema showtimes, seat selections, and ticket coordination via official cinema platforms.',
      icon: 'Clapperboard' as const,
      enquiryText: 'Hi TicketWala, I need help with Movie ticket booking enquiry',
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: 'Share Your Requirements',
      description:
        'Submit your travel or movie details and preferred dates through WhatsApp or our accessible enquiry form.',
    },
    {
      step: 2,
      title: 'Discuss the Options',
      description:
        'We review real-time availability on authorized portals, explain legitimate options, applicable ticket costs, and our transparent service fee upfront.',
    },
    {
      step: 3,
      title: 'Get Booking Assistance',
      description:
        'Once you confirm passenger details, we assist with the reservation via authorized platforms and send your official e-ticket directly to you.',
    },
  ],

  whyChoose: [
    {
      title: 'Direct Human Support',
      description:
        'Talk directly with a real person dedicated to your booking, never an automated chatbot.',
      icon: 'MessageCircle' as const,
    },
    {
      title: 'Upfront Service Fee',
      description:
        'Our assistance charges are clearly stated before any booking action begins. No hidden charges.',
      icon: 'Eye' as const,
    },
    {
      title: 'Details Verified First',
      description:
        'Passenger spelling, age, seat class, and dates are confirmed with you before reservation.',
      icon: 'BadgeCheck' as const,
    },
    {
      title: 'Follow-up Assistance',
      description:
        'Guidance on platform policies, schedule updates, or cancellation requests whenever needed.',
      icon: 'RefreshCw' as const,
    },
  ],

  // Real satisfaction standards (All fake reviews removed)
  commitments: [
    {
      title: '100% Upfront Pricing',
      description: 'You are informed of the operator ticket cost and our assistance fee before paying anything.',
      icon: 'ShieldCheck' as const,
    },
    {
      title: 'Zero Card Data Storage',
      description: 'We never ask for or store credit/debit card numbers, CVVs, netbanking passwords, or UPI PINs.',
      icon: 'Lock' as const,
    },
    {
      title: 'Independent & Legitimate',
      description: 'Strictly compliant with Indian laws. We operate as an independent customer service concierge.',
      icon: 'Award' as const,
    },
  ],

  faq: [
    {
      question: 'How can I request ticket booking assistance?',
      answer:
        'Message us on WhatsApp or submit the enquiry form with your journey or movie details. We will check availability on authorized platforms and get back to you promptly.',
    },
    {
      question: 'Which types of tickets do you assist with?',
      answer:
        'We provide booking guidance and assistance for Bus, Train, Domestic & International Flights, and Movie tickets across India.',
    },
    {
      question: 'How much do you charge for your service?',
      answer:
        'Our assistance fee varies based on service complexity (e.g. standard bus enquiry vs multi-leg flight research) and is always quoted upfront before any booking action is taken. Official ticket prices are strictly as charged by the operator.',
    },
    {
      question: 'Do you guarantee confirmed train or tatkal tickets?',
      answer:
        'No. We do not guarantee ticket confirmation. Seat availability is governed strictly by the official operators (IRCTC, airlines, bus operators). We assist you in navigating the booking process via legitimate channels, but we cannot circumvent official quotas or waitlists.',
    },
    {
      question: 'Can I get help with an existing booking or cancellation?',
      answer:
        'Yes. Share your booking reference and we will guide you through the operator’s official cancellation or modification process. Refunds are subject entirely to the respective carrier’s terms.',
    },
    {
      question: 'What happens if I need to cancel a booking?',
      answer:
        'Cancellation and refund amounts are determined strictly by the respective transport or cinema operator policy. We guide you through submitting the cancellation request through the proper channel.',
    },
    {
      question: 'How will I receive my ticket and travel updates?',
      answer:
        'Your official e-ticket PDF / PNR confirmation will be delivered directly to your verified WhatsApp number and email once booked through the authorized platform.',
    },
  ],

  aboutPoints: [
    'Direct 1-on-1 communication via WhatsApp and phone call',
    'Transparent assistance charges disclosed upfront before booking',
    'Help with schedule verification, queries, and cancellation guidance',
    'Strict compliance with Indian consumer protection and railway guidelines',
  ],

  trustHighlights: [
    { label: 'Direct 1-on-1', icon: 'UserCheck' as const },
    { label: 'Clear Charges', icon: 'Receipt' as const },
    { label: 'Query Support', icon: 'HelpCircle' as const },
  ],

  disclaimer:
    'Statutory Notice: TicketWala is an independent customer assistance service. We are not an official portal, agent, or affiliated with IRCTC, Indian Railways, airlines, bus operators, or cinema chains. All bookings are facilitated on client behalf through authorized public platforms. All trademarks belong to their respective owners.',

  // Comprehensive Terms of Service
  termsAndConditions: {
    lastUpdated: 'October 2026',
    sections: [
      {
        title: '1. Nature of Service',
        content:
          'TicketWala operates exclusively as an independent personal booking concierge and customer assistance provider. We assist individuals in researching schedules, comparing options, and completing reservations on third-party authorized ticketing portals (such as IRCTC, airline websites, bus aggregator portals, and cinema ticketing platforms). We do not own, operate, or control any transport service or entertainment venue.',
      },
      {
        title: '2. Compliance with Indian Railways Act (Section 143)',
        content:
          'TicketWala strictly complies with Section 143 of the Railways Act, 1989. We do not engage in unauthorized procurement, hoarding, speculative booking, or commercial black-marketing of railway tickets. Assistance for train tickets is provided strictly within legal bounds: guiding users to book via their own IRCTC credentials or through authorized IRCTC Principal Service Provider channels. We never promise guaranteed Tatkal confirmation.',
      },
      {
        title: '3. Fees and Payments',
        content:
          'TicketWala charges a transparent, nominal concierge assistance fee that is communicated to and agreed upon by the client upfront. The actual ticket cost is determined solely by the third-party operator. We never ask for or store sensitive financial data such as credit/debit card numbers, CVVs, net banking credentials, or UPI PINs.',
      },
      {
        title: '4. No Guarantee of Confirmation & Operator Discretion',
        content:
          'Seat, berth, flight, and cinema availability is managed strictly by official carrier systems in real time. TicketWala cannot and does not guarantee confirmation for waitlisted tickets, high-demand Tatkal quotas, or sold-out cinema shows. All bookings are subject to operator terms, carriage conditions, and fare rules.',
      },
      {
        title: '5. Cancellations, Changes, and Refunds',
        content:
          'Cancellations, schedule modifications, and ticket refunds are strictly subject to the cancellation rules of the relevant operator (airline, railway, bus operator, or cinema). While TicketWala assists you in filing cancellation requests, we do not control refund timelines or deduction fees imposed by operators. Concierge assistance fees charged by TicketWala are non-refundable once the service has been rendered.',
      },
      {
        title: '6. User Responsibilities & Accuracy',
        content:
          'The client is solely responsible for ensuring that all passenger names (matching valid government ID proof), travel dates, contact details, and journey requirements provided to TicketWala are accurate. TicketWala is not liable for boarding denial, penalty, or cancellation resulting from inaccurate details provided by the client.',
      },
      {
        title: '7. Limitation of Liability',
        content:
          'To the fullest extent permitted by Indian law, TicketWala is not liable for any direct, indirect, or consequential loss arising from transport delays, carrier cancellations, technical downtime of official reservation portals, government travel restrictions, or force majeure events.',
      },
      {
        title: '8. Governing Law and Grievances',
        content:
          'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in India. For queries or complaints, contact our Grievance Desk at grievance@ticketwala.in.',
      },
    ],
  },

  // Comprehensive Privacy Policy (DPDP Act 2023 Compliant)
  privacyPolicy: {
    lastUpdated: 'October 2026',
    sections: [
      {
        title: '1. Introduction & Scope',
        content:
          'TicketWala ("we", "our", or "us") is committed to protecting your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000. This Privacy Policy explains what personal data we collect, why we collect it, how it is handled, and your rights.',
      },
      {
        title: '2. Personal Data We Collect',
        content:
          'We collect only the minimum personal data necessary to assist with your booking enquiry:\n• Identity & Contact Details: Name, WhatsApp mobile number, phone number, and optional email address.\n• Journey & Enquiry Details: Origin city, destination city, travel dates, passenger preferences (e.g., berth choice, seat type), and any specific notes provided in the form.\n• Transaction Identifiers: Booking reference / PNR numbers strictly for coordination purposes.\n\nWe NEVER collect, store, or process debit/credit card credentials, CVVs, netbanking passwords, or UPI PINs.',
      },
      {
        title: '3. Purpose of Processing',
        content:
          'Your personal data is processed solely for:\n• Responding to your booking enquiry and discussing available options.\n• Coordinating ticket reservations with authorized platforms on your behalf.\n• Sending ticket confirmations, PNR status, schedule reminders, and service updates via WhatsApp, SMS, or phone call.\n• Responding to your post-booking queries or cancellation requests.\n\nWe do NOT sell, lease, or rent your personal data to third-party marketing agencies.',
      },
      {
        title: '4. Consent & Notifications',
        content:
          'By checking the consent box on our enquiry form and submitting your request, you provide explicit, informed consent for TicketWala to contact you via WhatsApp and phone call for booking-related communications, service updates, and transactional notifications. You have the right to withdraw your consent at any time by messaging "STOP" or "UNSUBSCRIBE" on WhatsApp or emailing grievance@ticketwala.in.',
      },
      {
        title: '5. Sharing of Data with Service Providers',
        content:
          'To facilitate your booking, necessary passenger details (e.g., passenger names, ages, ID proof details where mandated by railways/airlines) are entered into the authorized reservation portal of the relevant service provider (such as IRCTC, airlines, bus operators, or cinema chains) as required for official ticket issuance.',
      },
      {
        title: '6. Data Security & Retention',
        content:
          'We implement reasonable technical and organizational security measures to protect your personal information against unauthorized access, loss, or misuse. Communication on WhatsApp is protected by end-to-end encryption. Data is retained only as long as necessary to fulfill the requested booking assistance, resolve disputes, or comply with legal obligations.',
      },
      {
        title: '7. Your Rights under the DPDP Act, 2023',
        content:
          'As a data principal, you have the right to:\n• Access a summary of the personal data processed by us.\n• Request correction or updating of inaccurate data.\n• Request erasure of your personal data when no longer needed.\n• Withdraw your consent at any time.\n• Nominate another individual in the event of death or incapacity.',
      },
      {
        title: '8. Grievance Officer & Contact Information',
        content:
          'In accordance with the Information Technology Rules and Consumer Protection (E-Commerce) Rules, 2020, our designated Grievance Contact is:\nGrievance & Data Privacy Desk, TicketWala Assistance Services\nEmail: grievance@ticketwala.in | Phone: +91 98765 43210\nOperating Hours: 9:00 AM – 10:00 PM IST (Mon–Sun)',
      },
    ],
  },
} as const;

export type Service = (typeof siteConfig.services)[number];
export type FAQ = (typeof siteConfig.faq)[number];
export type Commitment = (typeof siteConfig.commitments)[number];
export type HowItWorksStep = (typeof siteConfig.howItWorks)[number];
export type WhyChoosePoint = (typeof siteConfig.whyChoose)[number];
