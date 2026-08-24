---
name: "Hu Jiao Personal Profile"
description: "A calm bilingual editorial profile built from white paper, graphite type, cobalt actions, and hairline structure."
colors:
  graphite: "#151515"
  muted-slate: "#656a73"
  rule: "#dfe2e8"
  rule-strong: "#c9cdd5"
  paper: "#ffffff"
  soft-panel: "#f5f7fb"
  cobalt: "#174bd6"
  cobalt-dark: "#123ca9"
  cobalt-tint: "#edf2ff"
  focus-amber: "#ffbf47"
typography:
  display:
    fontFamily: '"Manrope Profile", "Noto Sans SC Profile", sans-serif'
    fontSize: "clamp(2.45rem, 5.3vw, 5rem)"
    fontWeight: 680
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Manrope Profile", "Noto Sans SC Profile", sans-serif'
    fontSize: "clamp(2rem, 3.5vw, 3.4rem)"
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Manrope Profile", "Noto Sans SC Profile", sans-serif'
    fontSize: "1.14rem"
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: '"Manrope Profile", "Noto Sans SC Profile", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"Manrope Profile", "Noto Sans SC Profile", sans-serif'
    fontSize: "0.74rem"
    fontWeight: 720
    lineHeight: 1.65
    letterSpacing: "0.08em"
rounded:
  action: "0.25rem"
  pill: "999px"
spacing:
  page: "clamp(1.25rem, 3vw, 3rem)"
  section-y: "clamp(3rem, 6vw, 5.5rem)"
  content-x: "clamp(2rem, 8vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.action}"
    padding: "0.85rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-dark}"
    textColor: "{colors.paper}"
    rounded: "{rounded.action}"
    padding: "0.85rem 1rem"
  chip-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.65rem"
---

# Design System: Hu Jiao Personal Profile

## Overview

**Creative North Star: "The Editorial Dossier"**

The site presents Hu Jiao as a person and practitioner through the quiet authority of a beautifully typeset professional dossier. White paper, graphite typography, a restrained cobalt accent, and exact hairline rules make the experience calm, credible, and easy to scan rather than promotional or job-board-like.

The system is spacious but information-dense where a résumé needs precision. Its identity comes from the asymmetric profile composition, bilingual typography, and disciplined structural lines—not photography, illustration, ornamental effects, or technological decoration.

**Key Characteristics:**

- Personal thesis and biography lead on the left; localized name and concise facts occupy the Composition B rail on the right.
- Restrained cobalt is reserved for navigation state, labels, and primary contact actions.
- Self-hosted Manrope and Noto Sans SC, with exactly one language-specific name shown at a time.
- Flat white and cool-gray surfaces separated by one-pixel hairlines.
- Responsive editorial grids that collapse into a linear reading flow.
- No shipping imagery; the approved composition is an internal reference only.

## Colors

The palette is quiet and cool: graphite and slate carry the content, paper and pale blue-gray establish surfaces, and cobalt appears sparingly as the sole brand accent.

### Primary

- **Professional Cobalt** (`#174bd6`): Current navigation, section labels, selections, active language state, and primary email actions.
- **Deep Cobalt** (`#123ca9`): Hover state for cobalt actions and email links.
- **Cobalt Wash** (`#edf2ff`): The contact section's calm tonal field.

### Neutral

- **Graphite Ink** (`#151515`): Primary copy and the skip-link ground.
- **Muted Slate** (`#656a73`): Metadata, secondary identity copy, dates, and footer text.
- **Paper White** (`#ffffff`): Main page ground and action text.
- **Soft Panel** (`#f5f7fb`): Facts rail and language-switcher track.
- **Cool Rule** (`#dfe2e8`): Default one-pixel dividers.
- **Strong Rule** (`#c9cdd5`): Outlined controls and technology chips.
- **Focus Amber** (`#ffbf47`): High-visibility keyboard focus outline only.

**The One Accent Rule.** Cobalt is the only expressive hue and stays concentrated in state, navigation, and contact affordances; broad content fields remain quiet.

## Typography

**Display Font:** Manrope Profile (with Noto Sans SC Profile and `sans-serif` fallback)  
**Body Font:** Manrope Profile (with Noto Sans SC Profile and `sans-serif` fallback)  
**Chinese Font:** Noto Sans SC Profile (with Manrope Profile and `sans-serif` fallback)

**Character:** The variable sans-serif pairing is precise, contemporary, and neutral enough to let experience and education lead. The restrained rail identity is localized rather than duplicated: English shows “Hu Jiao,” while Simplified Chinese shows “胡娇” with Noto Sans SC first in the stack. Chinese hero copy receives a dedicated sizing and measure override.

### Hierarchy

- **Display Thesis** (680, `clamp(2.45rem, 5.3vw, 5rem)`, 1.04): The personal thesis leading the left field, capped at 16ch. Chinese uses `clamp(2.3rem, 4.2vw, 4rem)`, 1.12, and 18ch.
- **Identity Name** (720, `clamp(1.65rem, 2.6vw, 2.4rem)`, 1.1): The active language's name in the right facts rail.
- **Headline** (`clamp(2rem, 3.5vw, 3.4rem)`, 1.08): Major résumé and contact section headings.
- **Title** (`1.14rem`, 1.4): Roles, project names, and education credentials.
- **Body** (400, `1rem`, 1.65): General copy; introductions and descriptions stay near 60–68ch.
- **Label** (720, `0.74rem`, `0.08em`, uppercase): English section eyebrows. Do not mechanically force uppercase styling onto Chinese content.

**The Bilingual Measure Rule.** Treat Chinese as authored typography: switch the family order, preserve natural spacing, and adjust measure and display scale instead of inserting translations into English metrics unchanged.

## Layout

The page is capped at 100rem and uses a fluid page inset of `clamp(1.25rem, 3vw, 3rem)`. The sticky 4.5rem header is a three-part grid: identity, centered section navigation, and language/contact actions. The first viewport pairs a wide left introduction—section label, personal thesis, biography, and email action—with a 29% right rail containing the localized name and facts. Résumé sections use a 24% labeled rail and a broad content column.

Dates and details align in two-column chronology grids, while skills form a ruled two-by-two matrix. At 72rem, grids tighten and the email shortcut disappears. At 52rem, primary navigation hides, the hero becomes a vertical reading flow, the facts rail moves below the thesis, and section rails stack above content. At 35rem, chronology, education, project, and skills grids become single-column. The header remains compact and the language switch stays available throughout.

## Elevation & Depth

The system uses no box shadows. Depth comes from tonal layering—the soft facts rail and cobalt-tinted contact field—plus one-pixel cool-gray rules that establish hierarchy without making content feel card-like.

**The Flat Dossier Rule.** Surfaces remain flat at rest; use tone and hairline structure, never floating cards or ambient shadow, to separate information.

## Shapes

Most containers are square and structural. The only small corner radius is `0.25rem` on primary email actions, while `999px` pills are reserved for the segmented language control and technology tags. One-pixel borders carry most grouping; avoid introducing rounded card shells around résumé content.

## Components

### Hero Introduction

- **Hierarchy:** Section label, personal thesis, two-part biography, then email action in the left field.
- **Measure:** Thesis stays within 16ch and biography within 68ch. Chinese thesis expands to 18ch and uses the localized `clamp(2.3rem, 4.2vw, 4rem)` size.
- **Alignment:** Left-aligned throughout, balanced by the separate facts rail.

### Primary Email Actions

- **Shape:** Compact rectangle with `0.25rem` corners and an inline arrow.
- **Primary:** Cobalt ground, white text, semibold weight, and `0.85rem 1rem` or `0.9rem 1.1rem` padding.
- **Hover / Focus:** Ground shifts to Deep Cobalt in 180ms; the arrow nudges horizontally over 380ms. Global focus is a 3px Focus Amber outline with 4px offset.

### Language Switcher

- **Style:** Soft Panel pill with a 1px Strong Rule border and 2px inset padding.
- **State:** Each option is at least 2.75rem tall; the active language fills with Professional Cobalt and white text, while inactive text is muted gray.

### Technology Chips

- **Style:** Transparent/paper pills with a 1px Strong Rule outline, `0.35rem 0.65rem` padding, and `0.76rem` type.
- **State:** Informational only; they do not imply an interactive filter.

### Navigation

- **Style:** Sticky paper header with a slightly translucent white ground and bottom rule. Links are compact semibold text.
- **State:** Hover and current-section text turn cobalt; the current item gains a 3px cobalt underline animated from the left over 240ms. Desktop navigation hides below 52rem rather than compressing into an unreadable row.

### Facts Rail

- **Style:** Soft Panel ground, left hairline on desktop, restrained localized identity heading, and definition-list rows separated by rules.
- **Responsive:** Moves below the thesis at tablet widths; low-priority facts are hidden to keep the compact presentation focused.

### Résumé Sections

- **Style:** A narrow labeled rail and broad detail field, separated by a hairline. Chronologies use aligned tabular dates; related entries are separated by horizontal rules rather than cards.

## Do's and Don'ts

### Do:

- **Do** keep the personal thesis and biography on the left and the localized name with facts in the right rail.
- **Do** reserve cobalt for meaningful emphasis and interaction state.
- **Do** use generous whitespace, 60–68ch text measures, and tabular dates for scanning.
- **Do** preserve natural English and Simplified Chinese typography as equal first-class layouts.
- **Do** use one-pixel rules and tonal panels to organize résumé information.
- **Do** keep all interactions keyboard-visible and respect reduced-motion preferences.

### Don't:

- **Don't** introduce gradients, heavy shadows, decorative tech motifs, or floating card grids.
- **Don't** show English and Chinese names simultaneously; render only the active language's restrained rail identity.
- **Don't** add portraits, logos, stock photography, or other shipping imagery without supplied and approved source material.
- **Don't** spread cobalt across large content areas or add competing accent hues.
- **Don't** force Chinese copy into English tracking, casing, or line-length assumptions.
- **Don't** fabricate contact channels, testimonials, metrics, or credentials.
