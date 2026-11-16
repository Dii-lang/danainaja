---
name: DanaIn Aja Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#c5dcfb'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e4efff'
  surface-container-high: '#dae9ff'
  surface-container-highest: '#d0e4ff'
  on-surface: '#021d33'
  on-surface-variant: '#414752'
  inverse-surface: '#1a324a'
  inverse-on-surface: '#e9f1ff'
  outline: '#717783'
  outline-variant: '#c1c7d4'
  surface-tint: '#005fad'
  primary: '#005eab'
  on-primary: '#ffffff'
  primary-container: '#1677d2'
  on-primary-container: '#fffeff'
  inverse-primary: '#a5c8ff'
  secondary: '#006494'
  on-secondary: '#ffffff'
  secondary-container: '#6dc1fd'
  on-secondary-container: '#004e74'
  tertiary: '#006b49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00875d'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a5c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#004784'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#8ecdff'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#004b71'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#021d33'
  surface-variant: '#d0e4ff'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.015em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
  numeric-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  numeric-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
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
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system establishes a high-trust, institutional, yet approachable financial technology environment tailored for the Indonesian UMKM (Micro, Small, and Medium Enterprises) investment and capital funding ecosystem. Guided by the positioning *"Investasi Lebih Mudah, Masa Depan Lebih Terarah,"* the aesthetic bridges corporate investment credibility with the intuitive, modern usability expected by retail and angel backers.

### Visual Aesthetic & Philosophy
The interface operates under a refined **Modern Corporate Minimalist** aesthetic:
- **Atmospheric Clarity:** Airy canvases with high-key tinting, structured around crisp data surfaces that eliminate visual noise while maximizing legibility.
- **Trust Through Precision:** Strict typographic hierarchy, subtle hairline boundaries, and restrained structural shadows convey institutional rigor.
- **Controlled Accents:** Intentional application of high-efficacy color coding for investment states, returns, and funding progress milestones, preventing cognitive fatigue.
- **Cultural & Regulatory Neutrality:** Content architecture maintains compliance-forward neutral financial framing, utilizing non-speculative funding terminologies (*Penyaluran Modal*, *Proyeksi Imbal Hasil*, *Tingkat Risiko Terukur*) paired with prominent simulation disclaimers.

## Colors

The palette leverages a coordinated blue-spectrum foundation representing stability and liquidity, complemented by a calibrated functional green for yield tracking and funding goals.

### Palette Architecture
- **Primary Brand Anchor (`#1677D2`):** Primary interactions, authoritative buttons, active navigation states, and key metric indicators.
- **Secondary Sky Blue (`#65B9F5`):** Secondary data visualizations, active focus halos, interactive highlights, and secondary graphic indicators.
- **Surface & Tint Layer (`#EAF5FF`):** Accent badges, hovered surface containers, segmented control pills, and soft highlight backdrops.
- **Canvas Base (`#F5F9FD`):** The persistent app shell background tone, formulated to prevent screen glare during prolonged data analysis.
- **Elevated Canvas (`#FFFFFF`):** Base fill for all interactive cards, modals, dropdown panels, and data tables.
- **Deep Navy Structural (`#173B5E`):** Shell headers, primary brand mark surfaces, navigation bars, and data visualization baselines.
- **Functional Accent Green (`#10B981` & `#ECFDF5`):** Reserved exclusively for successful funding trajectories, yield percentages, milestone progress bars, and verified validation badges.
- **Typography Scale:** Primary content uses Dark Slate (`#243B53`) for optimal contrast; supporting metadata and auxiliary copy use Slate Grey (`#71869B`).
- **Structural Outlines (`#E2EBF4`):** Card borders, data table dividers, and input field strokes.

## Typography

Typography relies on **Inter** configured with dynamic OpenType tabular numbers (`tnum`) across all monetary tables, funding metrics, and balance widgets to eliminate layout shifts and misalignments in Indonesian Rupiah (IDR) sums.

### Typographic Principles
- **Data Legibility:** Large capital figures utilize tighter negative tracking (`-0.02em`) to maintain cohesiveness.
- **Hierarchy Separation:** Strict pairing between Bold/Semi-Bold headers and regular weights for body texts guarantees rapid scanning of operational terms and yield statistics.
- **Financial Disclaimers:** Simulation footnotes and legal compliance disclaimers strictly use `body-sm` or `label-sm` rendered in Secondary Text (`#71869B`).

## Layout & Spacing

The system enforces a **desktop-first fluid-grid architecture** designed for high-density dashboard layouts, analytical consoles, and portfolio tracking.

### Layout Mechanics
- **Grid Configuration:** Desktop layouts utilize a 12-column responsive layout spanning up to a maximum container constraint of `1440px`. Mobile viewports automatically collapse into a single-column sequence with standard `1rem` margins.
- **Dashboard Sidebar/Content Split:** Fixed navigation sidebar at `260px` width accompanied by a fluid main content canvas with `2rem` margin offsets.
- **Rhythm:** An 8pt spatial baseline controls all inner card layouts, metric blocks, and alignment gaps to maintain visual tempo across varying resolutions.

## Elevation & Depth

Visual hierarchy avoids heavy drop shadows, relying instead on tonal separation, hairlines, and ambient atmospheric depth.

### Elevation Levels
- **Level 0 (Flat Foundation):** Background canvas (`#F5F9FD`) containing passive structures and inactive rails.
- **Level 1 (Card & Module Resting):** Pure White (`#FFFFFF`) surface combined with a `1px` structural outline in `#E2EBF4` and an ambient, low-contrast shadow: `0px 2px 8px rgba(23, 59, 94, 0.04)`.
- **Level 2 (Hovered / Floating Containers):** Interactive cards upon cursor focus or active states lift subtly: `0px 8px 24px rgba(23, 59, 94, 0.08)` with border transitioning to `#D0E0EF`.
- **Level 3 (Overlays & Dialogs):** Filter menus, profile dropdowns, and simulation popups: `0px 16px 36px rgba(23, 59, 94, 0.12)`.

## Shapes

The geometric architecture balances modern ergonomics with high-credibility institutional contours.

- **Cards & Data Modules:** Enforce a uniform `16px` border-radius (`rounded-lg`), establishing friendly, contemporary modules.
- **Buttons & Input Fields:** Standardized at `8px` corner radiuses to reinforce structural precision and input responsiveness.
- **Badges, Tags, & Status Pills:** Configured with `9999px` (fully pill-shaped) to distinguish status signifiers from interactive content blocks.

## Components

### Buttons
- **Primary:** Solid `#1677D2` fill, text `#FFFFFF`, 8px radius, height 44px (desktop) / 40px (compact). Hover: `#125FB0`. Focus: 3px halo `#65B9F5` at 40% opacity.
- **Secondary / Outline:** Background transparent, 1px border `#E2EBF4`, text `#1677D2`. Hover: `#EAF5FF` fill.
- **Ghost:** Background transparent, text `#71869B`. Hover: text `#243B53`, background `#F5F9FD`.

### Investment & Funding Progress Bars
- Continuous horizontal bar, height 8px, background `#EAF5FF`, radius 9999px.
- Active fill: Solid `#10B981`.
- Accompanying indicators display total raised vs. funding cap (e.g., *Rp 450.000.000 / Rp 500.000.000*) paired with milestone status badges.

### Input Fields & Controls
- **Input Box:** Surface `#FFFFFF`, border 1px `#E2EBF4`, radius 8px, inner padding `10px 14px`. Text `#243B53`, placeholder `#71869B`. Focus: Border `#1677D2`, outline 2px `#65B9F5` (20% opacity).
- **Checkboxes & Radios:** 18px size, 4px corner radius for checkboxes, full circle for radios. Active state `#1677D2` with white inner tick/dot.

### Badges & Chips
- **Funding Status (Funded / Berjalan):** Background `#ECFDF5`, text `#10B981`, font `label-sm`, radius 9999px, padding `4px 10px`.
- **Category Pill (UMKM Sector):** Background `#EAF5FF`, text `#1677D2`, radius 9999px.

### Cards
- Standard data containers utilize `#FFFFFF` fill, `16px` radius, `1px` border in `#E2EBF4`, and internal padding of `24px`.
- Metric header, tabular payload, and bottom action bar are divided by `#E2EBF4` hairline dividers.

### Mandatory Compliance & Simulation Banner
- Contained module within `#EAF5FF` or light neutral tone, 1px border `#65B9F5` at 50% opacity, rounded `12px`.
- Features an informational icon, body text in `#71869B`, explicitly stating: *"Simulasi investasi bukan merupakan jaminan keuntungan pasti. Penyaluran modal UMKM memiliki risiko usaha."*