# TicketWala â€“ Antigravity Master Prompt

Put the Stitch ZIP contents (`code.html`, `DESIGN.md`, `screen.png`) in a folder called `/stitch-reference` inside your project, then paste everything inside the box below into Antigravity.

---

```
You are a senior frontend engineer. Convert the Stitch export in /stitch-reference into a real, production-ready, fully responsive website for "TicketWala", a personal ticket booking assistant (Bus, Train, Flight and Movie tickets) in India.

## 1. What the Stitch export is (read these first)
- /stitch-reference/code.html: ONE single HTML file. It is MOBILE-ONLY (content wrapped in `max-w-lg mx-auto`, with `pb-28` space for a fixed bottom bar). It uses the Tailwind CDN, Google Fonts and Material Symbols, with inline JS.
- /stitch-reference/DESIGN.md: the design tokens (colors, typography, radius, spacing) and brand rules.
- /stitch-reference/screen.png: the visual reference for the mobile layout.
Read all three. Keep the content, tone, colors and fonts from Stitch. Do NOT copy the single-file/CDN structure.

## 2. Target stack
React + Vite + TypeScript + Tailwind CSS (installed via npm, NOT the CDN). Use lucide-react for icons instead of Material Symbols. Fonts: Manrope (headings) and Inter (body) via @fontsource or the Google Fonts link in index.html. No backend is needed. Everything is static and the enquiry form sends through WhatsApp.

## 3. Setup steps (do in this order)
1. Scaffold the Vite React TS project and install Tailwind, lucide-react and the fonts.
2. Move ALL color tokens from the Stitch `tailwind.config` / DESIGN.md into `tailwind.config.ts`. Keep the same token names (primary, secondary, surface, on-surface, and so on). Add the font families and the border radius.
   Brand rules: Deep Navy #10233F is the primary. Blue #1769D2 is the accent. WhatsApp Green #16A34A is ONLY for WhatsApp/chat actions. Canvas is #F5F7FA with #FFFFFF cards and #E2E8F0 borders.
3. Create `src/config/site.ts` with the business data in ONE place: brand name, tagline, phone number (+91 98765 43210), WhatsApp number (919876543210), email, working hours (9 AM â€“ 10 PM, everyday), service list, FAQ list, how-it-works steps and trust points. No hard-coded numbers anywhere else.
4. Create `src/lib/whatsapp.ts`: `buildWhatsAppLink(message?: string)` returns `https://wa.me/<number>?text=<encoded>`. Every WhatsApp button uses it. Service cards send a pre-filled message such as "Hi TicketWala, I need help with Bus ticket booking".
5. Build components in `src/components/`: Header, Hero, Services, About, HowItWorks, WhyChoose, Testimonials, FAQ, EnquiryForm, Footer, FloatingWhatsApp, MobileBottomBar, Section (shared wrapper), Container.
6. Compose them in `App.tsx` in this order: Header, Hero, Services, About, HowItWorks, WhyChoose, Testimonials, FAQ, EnquiryForm, Footer.

## 4. THE KEY CHANGES (Stitch mobile page â†’ real responsive website)
Stitch only gives a phone layout. Make it responsive with Tailwind breakpoints (mobile first). Design for 390px, 768px and 1280px.

A. Container: remove `max-w-lg`. Use a shared container: `max-w-7xl mx-auto px-4 md:px-8`. Sections get `py-12 md:py-20`.

B. Header (sticky):
- Mobile: logo left, hamburger right. The hamburger opens a full-width dropdown menu (Home, Services, About, Reviews, FAQ, Contact, plus a WhatsApp button). It closes on link click and on Esc.
- Desktop (lg+): logo left, centered nav links with smooth-scroll and an active-link highlight (use IntersectionObserver), and a green "WhatsApp Me" button on the right.

C. Hero:
- Mobile: text first, then two full-width stacked buttons (green "Chat on WhatsApp", outlined "Call Now" using tel:), then 3 trust points (Fast Response, Trusted Service, Flexible Support), then the hero image below.
- Desktop: 2 columns. Text and buttons on the left. On the right is a large hero image of an airplane, bus, train and cinema (`src/assets/hero.jpg`, use a clean placeholder until the real image is added). Add a short subtle handwritten-style tag "Bus Â· Train Â· Flight Â· Movie" over the image on desktop only.
- Keep the Stitch badge "Personal Ticket Booking Assistance" and the live "Online on WhatsApp" status chip.

D. Services ("How I Can Help"):
- Mobile: 2Ã—2 grid of compact cards (icon, title, one-line text, arrow). Tablet: 2 columns. Desktop: 4 columns.
- Each card is a link that opens WhatsApp with its own pre-filled message. Hover: slight lift and shadow.
- Keep the Stitch note about "assistance only, availability and pricing depend on the booking platform".

E. About ("A Real Person to Help With Your Booking"):
- Mobile: photo on top, then text, then the info card.
- Desktop: 3-part layout with the photo on the left, text in the middle (3 bullet points: personal communication, transparent service charges, help before and after booking) and a white info card on the right (serving customers across India, 9 AM â€“ 10 PM everyday, quick connect on WhatsApp, and a green WhatsApp button).
- Use `src/assets/profile.jpg` with a placeholder and a proper alt text.

F. How It Works: the 3 Stitch steps (Share Your Requirements, Discuss the Options, Get Booking Assistance). Mobile: vertical list with a connecting line. Desktop: 3 horizontal cards with numbers.

G. Why Choose TicketWala (the Stitch "Straightforward Service. Personal Support." block): the 4 points (Direct Communication, No Hidden Fees, Details Confirmed First, Follow-up Help). Mobile: 2Ã—2. Desktop: 4 columns with circular icon badges and thin dividers.

H. NEW SECTION â€“ Testimonials ("What My Customers Say"): Stitch does not have this. Add 3 review cards (stars, text, name, city). Mobile: stacked or a horizontal scroll-snap row. Desktop: 3 columns. IMPORTANT: the sample reviews are PLACEHOLDERS. Put them in `site.ts` with a clear `// TODO: replace with real customer reviews` comment. Do not present fake reviews as real in the final site.

I. FAQ: keep all 7 Stitch questions and answers. Build an accessible accordion (button with aria-expanded and aria-controls, smooth open/close height animation, chevron rotation). Mobile: 1 column. Desktop: 2 columns. Only one item open at a time is fine.

J. Enquiry Form ("Let's Sort Out Your Ticket"):
- Fields: Your Name, Ticket Type (Train/Bus/Flight/Movie), From City, Destination, Journey Date, Requirements/Preferred Timing, Preferred Contact Method (WhatsApp / Phone Call).
- Keep the Stitch behavior: when the type is Movie, labels change to "City", "Cinema / Movie Name" and "Show Date". Do this with React state, not DOM manipulation.
- Validation: name and ticket type are required, the date cannot be in the past. Show inline error messages.
- On submit, build a clean multi-line WhatsApp message from the fields and open it with `buildWhatsAppLink`. Do not store anything.
- Layout: mobile single column. Desktop: 2 columns (a short pitch and contact info on the left, the form card on the right). Date, From and Destination can sit in a 2-column grid.

K. Footer: navy background. Logo, short description, quick links, contact (call/WhatsApp, email, location India), social icons, and the Stitch disclaimer ("Independent Service Notice: TicketWala is an independent booking assistance service, not affiliated with IRCTC, Indian Railways, airlines or cinema chains") plus Privacy Policy / Terms links and the Â© line. Desktop: 3â€“4 columns.

L. Floating WhatsApp button: a green circular button bottom-right (with a subtle pulse), shown on md+ screens. On mobile show the Stitch fixed bottom bar instead (WhatsApp + Call buttons side by side, safe-area padding with `env(safe-area-inset-bottom)`). Never show both at once. Add enough bottom padding to the page so the bar never covers content.

## 5. Quality rules
- Semantic HTML: header, nav, main, section with ids (home, services, about, reviews, faq, contact), footer. One h1 only.
- Accessibility: all buttons/links â‰¥ 44px tall, visible focus rings, aria-labels on icon-only buttons, color contrast AA, labels linked to inputs, `prefers-reduced-motion` respected.
- Performance: lazy-load images below the fold, set width/height on images, no huge libraries.
- SEO: title, meta description, Open Graph tags, theme-color, a favicon, and LocalBusiness-style JSON-LD in index.html (name, telephone, areaServed India).
- Smooth scrolling with an offset for the sticky header (`scroll-mt-20`).
- Clean TypeScript: no `any`, typed props, no unused code. Small reusable components. Remove all Stitch CDN scripts and inline `onclick` handlers.
- Do not invent facts, prices or claims. Keep the Stitch wording where it exists.

## 6. Verify before finishing
1. `npm run build` passes with no TypeScript or lint errors.
2. Open the site at 390px, 768px and 1280px and confirm there is no horizontal scroll, nothing overlaps, and the bottom bar/floating button never covers content.
3. Test: the hamburger menu, the FAQ accordion, the Movie/Train form label switch, the form validation, and that every WhatsApp/Call button opens the right link.
4. Give me a short summary of the file structure, anything you could not do, and which images I need to add (hero.jpg, profile.jpg, logo).
```

---

## What changes from the Stitch version (quick view)

| Stitch export | Real website |
|---|---|
| One mobile-only `code.html` | Vite + React + TypeScript project, responsive 390 / 768 / 1280 |
| Tailwind CDN and inline config | Installed Tailwind with the same color tokens in `tailwind.config.ts` |
| `max-w-lg` phone column | Full-width container (`max-w-7xl`) with multi-column desktop layouts |
| Header with logo and WhatsApp only | Sticky header with desktop nav links and a mobile hamburger menu |
| No hero image | Hero with image (desktop 2 columns) |
| No reviews | New Testimonials section (placeholder text for now) |
| Material Symbols font | lucide-react icons |
| Inline `onclick` JS | React state for the FAQ, form and menu |
| Phone number repeated in many links | One `site.ts` config and one `buildWhatsAppLink()` helper |
| Fixed bottom bar on all screens | Bottom bar on mobile, floating WhatsApp button on desktop |

