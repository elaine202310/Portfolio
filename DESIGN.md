---
name: "Hu Jiao Personal Website"
description: "A restrained bilingual personal website with near-white paper, warm charcoal, and terracotta."
colors:
  paper: "#f9f8f6"
  ink: "#222222"
  muted: "#69635e"
  accent: "#a64f38"
  line: "#dedad5"
  soft: "#f5f3f0"
typography:
  display:
    fontFamily: "Manrope, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 3.6rem)"
    fontWeight: 550
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 550
    lineHeight: 1.25
  body:
    fontFamily: "Manrope, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "16px"
    lineHeight: 1.75
  intro:
    fontSize: "19px"
    lineHeight: 1.8
rounded:
  control: "4px"
spacing:
  small: "16px"
  medium: "24px"
  large: "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "white"
    rounded: "{rounded.control}"
    padding: "12px 21px"
  button-outline:
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "7px 16px"
---

# Design System: Hu Jiao Personal Website

## Overview

**Creative North Star: "A Quiet Personal Space"**

A restrained personal website that introduces Hu Jiao and makes room for work, independent projects, and photography. Near-white paper, warm charcoal type, and occasional terracotta actions keep the presentation approachable and clear.

The implemented source of visual truth is `site.css`. Four independent pages share this system: Home (`index.html`), Experience, Projects, and Photography. The approved home subtitle is “Exploring ideas. Making things.” Preserve the exact approved bilingual biography in `site-content.js`.

**Key Characteristics:**

- A modest name, personal subtitle, and readable biography lead Home.
- Four native page links replace the former scrolling dossier.
- Self-hosted Manrope pairs with native Chinese fonts.
- Flat surfaces and hairline rules organize information.
- Missing photographs produce a text empty state, without placeholder images.
- Motion stays brief and respects reduced-motion preferences.

## Colors

Terracotta is the primary accent for contact, active navigation, and focus. Warm charcoal carries primary text; muted text remains readable against paper and the soft project-status panel. Hairline rules use the line token.

Selection uses a warm pale wash (`#edd9cf`) with ink text. Contact hover deepens to `#853d2b`; the scrollbar thumb uses `#b5aaa2`. These are state-specific values in `site.css`.

## Typography

English uses the local Manrope variable font (400–800, swap). Chinese prioritizes PingFang SC, then Microsoft YaHei, then Manrope and sans-serif; the page does not load a Chinese webfont.

Headings use restrained weight and tight English tracking. Chinese headings reset tracking to zero, and Chinese body leading becomes 1.9. The subtitle scales from 1.4rem to 2rem, with a 23px mobile value. Home biography uses a 68ch maximum measure and becomes 17px on mobile. Date metadata uses tabular numerals.

## Layout

The shared header and footer have a 1240px maximum width. Inner pages have a 1060px maximum. Home uses an 820px centered column with left-aligned text, 90px top padding and 96px bottom padding on desktop. The introduction leads directly to the footer, following the user's September 8 reference screenshot. Experience, projects and photography remain on their own pages. English and Chinese each have static HTML pages so navigation does not flash the wrong language.

At 1320px the outer header/footer margin becomes 32px. At 900px navigation becomes a toggled two-column menu, content uses 32px side gutters, and page top padding becomes 56px. At 600px, gutters become 20px and page padding becomes 44px above and 56px below. Experience, education, skills, projects, and photographs collapse to one column.

The site uses normal document scrolling. There is no scroll snapping, pinned full-screen section, or scroll interception.

## Elevation & Depth

Surfaces are flat, with no shadows. Spacing and one-pixel rules separate sections; a soft neutral panel holds the project status. The photograph dialog uses a dark translucent backdrop.

## Shapes

Email controls have small 4px corners. Content remains open and rectangular, without raised cards. Supplied photographs use a 4:3 cropped preview; their enlarged view uses contain sizing.

## Components

Navigation uses native links and marks the active route with terracotta text, a short underline, and `aria-current="page"`. The mobile toggle is a 44px control; the expanded menu retains the four page destinations.

Language controls are plain EN / 中文 buttons with an underlined active choice and `aria-pressed`. The selection is retained through local storage and language query parameters on page-navigation links.

The primary email action pairs a terracotta fill with white text and an authored arrow. Its hover moves upward 2px. The header has a compact outlined email link, hidden below 600px. Focus uses a 2px accent outline with 5px offset.

Experience uses a date column and a content column; skills form two columns on desktop. Projects presents the supplied Shopify case as text, deliverables, and an honest status note. Do not invent screenshots or results.

Photography reads bilingual albums from `gallery-data.js`. Only successfully loaded supplied images become interactive previews. Albums without loaded photos display “Photographs will be added soon.” / “照片待更新。” The native dialog enlarges actual photographs and supports closing.

The page has one short entrance (420ms, opacity 0.7 to 1, vertical movement 8px), a 180ms cross-document view transition where supported, and small interaction transitions. The easing is `cubic-bezier(.16,1,.3,1)`. Reduced-motion preferences disable animation, transitions, and smooth scrolling.

## Do's and Don'ts

- Do preserve the approved home subtitle and bilingual biography.
- Do maintain all four independent pages and native navigation.
- Do use near-white paper, warm charcoal, and restrained terracotta.
- Do keep English and Chinese typography equally readable.
- Do use supplied facts and photographs only.
- Do preserve visible keyboard focus and reduced-motion support.
- Don't restore cobalt, the old profile rail, or scrolling section navigation.
- Don't add image placeholders, fabricated work, or invented metrics.
- Don't introduce scroll snapping, large motion, shadows, or decorative cards.
