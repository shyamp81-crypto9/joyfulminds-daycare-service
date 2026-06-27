# Joyfulminds Daycare Service Website

A modern, conversion-focused static website prototype for Joyfulminds Daycare Service.

The site is designed to recruit individuals who want to operate a home-based childcare business while also supporting parent enrollment, daycare operations, CRM, and marketing automation workflows.

## Business details included

- Website name: Joyfulminds Daycare Service
- Phone: 1-674-778-9605
- Office address: 78 Braebrook Drive, Whitby, ON, L1R 0M9

## Files

- `index.html` — landing page, provider onboarding form, parent enrollment form, dashboard preview, operations and CRM sections
- `styles.css` — responsive modern brand styling
- `script.js` — mobile navigation, dashboard tab mock data, demo form handling, reveal animations
- `README.md` — this guide

## Core features represented

1. Provider recruitment and onboarding
   - Application intake
   - Eligibility checks
   - Document upload UI
   - Training status and approval workflow messaging

2. Parent client enrollment portal
   - Parent inquiry form
   - Child information intake
   - Document upload UI
   - Enrollment status preview

3. Daycare management dashboard
   - Admin/provider dashboard concept
   - Leads, inquiries, children, attendance, payments, tasks, and metrics

4. Childcare operations
   - Child profiles
   - Attendance tracking
   - Daily reports
   - Payments and invoices
   - Messaging and announcements
   - Emergency/document readiness
   - Activity logs

5. CRM and lead management
   - Provider lead stages
   - Parent lead stages
   - Follow-up tasks
   - Notes/reminder-style dashboard rows

6. Marketing automation
   - Lead capture forms
   - Automated sequence examples
   - Newsletter and campaign analytics positioning
   - Conversion tracking language

7. Mock data
   - Prospective providers
   - Parent inquiries
   - Enrolled children
   - Attendance records
   - Payment records
   - Upcoming tasks
   - Lead stages and performance metrics

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deployment

This is a static site and can be deployed on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static hosting provider.

Recommended Vercel settings:

- Framework preset: Other
- Build command: leave blank
- Output directory: leave blank or `/`

## Production upgrade recommendations

This prototype is front-end only. To make it production-ready, add:

1. Authentication for providers, parents, and administrators.
2. Database tables for leads, providers, families, children, attendance, payments, documents, and messages.
3. Secure file upload storage for provider and child documents.
4. Payment processing and invoice automation.
5. Email/SMS workflows for reminders, onboarding, enrollment, and marketing campaigns.
6. Privacy policy, terms, consent language, and childcare compliance review.
7. Real photography, licensing information, testimonials, and founder/team story.

## CTA links to connect later

Current CTAs point to in-page forms or phone links. Replace or connect them to:

- A real provider application backend
- A parent enrollment backend
- Calendly or booking system
- CRM forms
- Email/SMS automation platform
- Analytics/conversion tracking
