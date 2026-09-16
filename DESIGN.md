---
name: FixPro Home Services
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d5e3fd'
  on-surface: '#0d1c2f'
  on-surface-variant: '#43474d'
  inverse-surface: '#233144'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777e'
  outline-variant: '#c3c6ce'
  surface-tint: '#49607c'
  primary: '#001428'
  on-primary: '#ffffff'
  primary-container: '#0f2942'
  on-primary-container: '#7991af'
  inverse-primary: '#b0c9e8'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#1f1000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b2200'
  on-tertiary-container: '#c77f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#b0c9e8'
  on-primary-fixed: '#011d35'
  on-primary-fixed-variant: '#314863'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0d1c2f'
  surface-variant: '#d5e3fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the dependable precision of high-end trade craft combined with modern digital efficiency. It positions home maintenance not as a stressful disruption, but as a solved problem handled by certified, punctilious professionals. 

The aesthetic is Modern Corporate with a tactile service orientation: authoritative without being cold, clear under stressful household situations (e.g., burst pipes, broken refrigerators), and instantly legible. High structural contrast, disciplined whitespace, and crisp, utilitarian components establish reassurance, competence, and immediate actionability.

## Colors

The palette balances deep industrial authority with high-visibility dispatch cues. 

- **Primary Navy (`#0F2942`)**: Anchors structural layouts, persistent top navigation, heavy headings, and primary brand indicators. Reflects enterprise stability and licensed credibility.
- **Service Blue (`#2563EB`)**: Drives directional hierarchy, links, active state fills, focus highlights, and verified credential elements.
- **Amber / Safety Orange (`#F59E0B`)**: Reserved strictly for high-conversion utility: urgent booking actions, diagnostic warning badges, and verified five-star ratings. It should never be diluted through decorative background washes.
- **Slate System Neutrals**: Surface tiers rest on pristine cool whites and slates (`#F8FAFC`, `#F1F5F9`, `#E2E8F0`), while primary text and microcopy resolve cleanly across slate tones (`#334155`, `#0F172A`).

## Typography

The type system blends the contemporary, welcoming geometry of Plus Jakarta Sans for titles and callouts with the systematic legibility of Inter for dense operational content, specs, invoices, and diagnostic booking flows.

- Keep headline weights strictly to 600 (SemiBold) and 700 (Bold) to preserve visual authority and avoid fragile thin weights in technical contexts.
- Body sizes default to 16px to safeguard readability in high-glare or handheld mobile environments.
- Use `caption` and `label-sm` with tabular numerical figures for tracking technician arrivals, pricing tallies, and serial numbers.

## Layout & Spacing

The layout is built on an 8pt spatial grid within a 12-column responsive fluid container (max-width: 1280px).

- **Desktop (1024px+)**: 12 columns, 24px (`1.5rem`) gutters, with page margins set at 32px (`2rem`) to 64px on wide screens.
- **Tablet (768px - 1023px)**: 8 columns, 20px gutters, 24px canvas margins.
- **Mobile (320px - 767px)**: 4 columns, 16px (`1rem`) gutters, and compact 16px (`1rem`) outer canvas margins to maximize actionable booking area.

Maintain dense internal card padding (`space-md` to `space-lg`) paired with generous macro section separation (`space-xl` and above) to visually compartmentalize multi-step scheduling, quote estimates, and service tiers.

## Elevation & Depth

Visual hierarchy uses a refined physical layering strategy—combining crisp perimeter keylines with soft, cool-tinted ambient shadows. Pure flat design is avoided to ensure critical booking tiles feel distinct and interactive.

- **Level 0 (Canvas)**: Surface `#F8FAFC`, flat.
- **Level 1 (Cards, Modules, Lists)**: White `#FFFFFF`, bounded by a subtle 1px border in `#E2E8F0`, paired with shadow: `0 1px 3px 0 rgba(15, 41, 66, 0.04), 0 1px 2px -1px rgba(15, 41, 66, 0.03)`.
- **Level 2 (Hover States, Active Selection, Flyouts)**: White `#FFFFFF`, bordered by `#CBD5E1`, shadow: `0 4px 6px -1px rgba(15, 41, 66, 0.07), 0 2px 4px -2px rgba(15, 41, 66, 0.05)`.
- **Level 3 (Modals, Technician Live Drawer, Sticky Booking CTA)**: White `#FFFFFF`, shadow: `0 20px 25px -5px rgba(15, 41, 66, 0.1), 0 8px 10px -6px rgba(15, 41, 66, 0.06)`.

## Shapes

The design system maintains a balanced, engineered roundness (`roundedness: 2`). 

- Default elements (inputs, standard buttons, basic panels) utilize 8px (`0.5rem`) radii.
- Larger groupings, containers, and booking summaries utilize 12px to 16px (`rounded-lg` / `rounded-xl`) to soften structural layouts without appearing overly casual or juvenile.
- Pill forms (`9999px`) are isolated exclusively to status chips, rating badges, and technician availability indicators.

## Components

### Buttons
- **Primary CTA (Amber)**: Solid `#F59E0B` with bold `#0F2942` text for urgent booking and estimate submission. Subtle hover lift with background shift to `#D97706`.
- **Secondary CTA (Service Blue)**: Solid `#2563EB` with white `#FFFFFF` text for general interactions, steps, and detail expansions.
- **Tertiary / Outline**: Transparent fill with 1.5px `#E2E8F0` border and `#0F2942` text. Hover transitions to `#F1F5F9`.
- **Sizing**: Fixed heights of 48px on mobile/desktop for primary touch targets; padding 0 24px; typography set to `label-lg`.

### Cards & Service Tiles
- Built with crisp white background, 1px border in `#E2E8F0`, and Level 1 elevation.
- Active or selectable appliance tiles (e.g., Refrigerator, HVAC, Washer) switch to a 2px `#2563EB` border with an interior light tint wash of `#EFF6FF`.

### Input Fields & Selectors
- Background: `#FFFFFF`, 1px outline of `#CBD5E1`, rounded at 8px (`0.5rem`).
- Height: 44px for field inputs; typography set to `body-md`.
- Focus state: Border transitions to `#2563EB` with an external 3px focus ring of `rgba(37, 99, 235, 0.15)`.

### Rating Stars & Trust Badges
- Verified star icons: Solid `#F59E0B`, displayed inline with `label-sm` numerical score and total review count in `#64748B`.
- Guarantee Badges: Enclosed pill containers (`rounded-full`) with a soft `#F1F5F9` background, a 1px border in `#E2E8F0`, and an iconography icon in `#0F2942`.

### Chips & Status Indicators
- **Available Today**: Green pill (`#ECFDF5` background, `#059669` text, 1px `#A7F3D0` border).
- **In Transit / En Route**: Blue pill (`#EFF6FF` background, `#2563EB` text, 1px `#BFDBFE` border).
- **Diagnostic Required**: Amber pill (`#FFFBEB` background, `#D97706` text, 1px `#FDE68A` border).
- Padding: 4px 10px; font set to `label-sm`.

### Checkboxes & Radios
- Size: 20x20px with 4px border-radius for checkboxes; fully rounded for radios.
- Unchecked: `#FFFFFF` with 1.5px `#CBD5E1` border.
- Checked: `#2563EB` background with sharp white checkmark or center pip.