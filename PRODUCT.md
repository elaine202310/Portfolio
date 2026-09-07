# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated for this build: static HTML, CSS, and JavaScript, chosen for a lightweight personal résumé site with no application backend.

## Users

- Primary: people getting to know Hu Jiao through her computer-science interests, work, independent projects, photography, and hiking.
- Secondary: collaborators, peers, employers, and professional contacts.

## Product Purpose

Present Hu Jiao through a clear, credible bilingual personal website for her computer-science work, practical projects, professional experience, and future personal interests. It is broader than an academic profile or job-search landing page: visitors should be able to understand who she is, explore selected work, scan relevant experience, switch comfortably between English and Simplified Chinese, and contact her by email.

## Positioning

Hu Jiao combines three years of internal business-system and workflow support experience with formal computer-science education, hands-on front-end contribution, and the ability to communicate with both technical and non-technical users.

## Operating Context

- Visitors may explore professional and personal interests at their own pace; recruitment is one possible use, not the defining purpose.
- The site must work well from a link opened on desktop, tablet, or mobile.
- The content is based on the supplied casual-job CV.

## Capabilities and Constraints

- English and Simplified Chinese versions of all user-facing copy.
- A clear `EN / 中文` switcher in the navigation; switching language preserves layout and navigation.
- Responsive, mobile-first implementation.
- Primary contact currently confirmed: jiaohu368@gmail.com.
- Portfolio entries should be data-driven so Hu Jiao can add or reorder projects in one content file and replace images without editing the layout.
- Replacing an image with a file of the same name should require no code change.
- Phone number and LinkedIn URL are not yet supplied and must not be fabricated.
- The University of Sydney master's start date and prior employment end date are recorded in the CV as 2026; preserve the supplied facts unless the user corrects them.

## Brand Commitments

- Public name: Hu Jiao / 胡娇.
- The first viewport introduces Hu Jiao as a person and practitioner; it must not open with an explicit statement that she is seeking a particular job.
- Her name is a moderate-sized homepage heading, with “Exploring ideas. Making things.” below it.
- Tone: calm, polished, lightweight, professional, concise, and credible.
- Visual direction is binding: clean, modern, minimalist, editorial/product-like; strong readability, generous whitespace, clear hierarchy, restrained color, simple typography, subtle borders, and consistent spacing.
- Near-white background, warm charcoal type, and terracotta navigation/contact accents; no oatmeal canvas or duplicate right sidebar.
- Avoid gradients, heavy shadows, excessive decoration, unnecessary animation, visual clutter, and overly technological UI motifs.
- Chinese typography and spacing must feel natural rather than mechanically inserted into an English layout.

## Evidence on Hand

- Source CV: `/Users/a1/Documents/personal/IT_Support_Part_Time_Casual_CV.docx`.
- Confirmed content includes education, IT technical support and information-management experience, part-time remote front-end contribution, technical skills, a Flask/MySQL recruitment-data project, and part-time/casual availability.
- No portrait, logo, testimonials, employer references, performance metrics, phone number, LinkedIn URL, or downloadable public CV asset has been supplied; future work must not fabricate them.
- Confirmed freelance case study: a two-month Shopify independent-store channel experiment for an Amazon seller of hard outdoor-living products, including outdoor sofas, fire pits, BBQ grills, and camping equipment other than tents. Hu Jiao prepared the complete website content, drafted initial SEO work, published image/video content to Instagram and TikTok, and reviewed weekly click data. Google traffic acquisition was not performed. The client later paused the project.
- Original screenshots and client samples from the Shopify project were not retained. The case study therefore remains text-only and must not imply that reconstructed visuals are original client-site captures.
- Photography is a personal-interest section based on one confirmed New Year’s Eve event shoot. Portrait photography is a future interest, not an established portfolio or service. No hiking photography is claimed.
- Photography contains multiple named subtopics managed in gallery-data.js. Each album has a unique id, bilingual title and description, and a photo list with shared paths and bilingual captions/alt text. The first album retains assets/gallery/new-year-01.jpg through new-year-05.jpg. Only loaded photos appear; an empty album keeps its heading and a brief localized message. New albums and photos can be added by copying the commented template in assets/gallery/README.md.

## Product Principles

1. Introduce Hu Jiao as a person, not a product or a narrowly positioned job applicant.
2. Distinguish professional experience, current interests, and future explorations without inflated claims.
3. Give English and Chinese readers equally natural, complete experiences.
4. Use independent Home, Experience, Projects, and Photography pages with quiet transitions and no scroll snapping.
5. Maintain excellent readability and accessibility at every viewport size.

## Accessibility & Inclusion

- Use semantic structure, keyboard-operable navigation and language controls, visible focus states, sufficient contrast, and reduced-motion support.
- Declare the active document language and update it when visitors switch languages.
