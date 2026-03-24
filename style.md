# GreenLedger - Design System & Visual Identity

## Design Philosophy

**"Data-Driven Optimism"**

GreenLedger's visual identity reflects a modern, credible approach to sustainability. The design is:

- **Data-forward:** Clean layouts, prominent data visualization, numbers at the center (not trees)
- **Optimistic, not alarmist:** Shows progress, opportunities, and achievable targets
- **Tech-precise, not cold:** Warm nature-informed color palette with clean technical typography
- **Credible, not "greenwashing":** Functional European design, no trendy effects; emphasis on accuracy and trust
- **Accessible:** WCAG AA compliant, high contrast, readable typography, mobile-first

Think of a visual blend: **Stripe meets a sustainability report** — clean enterprise SaaS design with subtle nature warmth and scientific precision.

---

## Color Palette

### Primary Brand Colors

**Brand Green** — `#16A34A`
- Forest green, professional and trustworthy
- Primary color for buttons, accents, data highlights
- Strong enough for dark mode, warm enough for human connection
- Used in logo, primary CTAs, progress indicators (when "on track")

**Brand Emerald** — `#059669`
- Slightly deeper, more saturated variant for hover/active states
- Secondary accent, sidebar highlights
- Better contrast for small type

### Supporting Colors (Scope Breakdown)

These colors distinguish Scope 1, 2, 3 emissions across all visualizations. Highly consistent usage.

**Scope 1 (Direct) — Red** — `#EF4444`
- Represents direct, owned emissions (vehicles, boilers, factory operations)
- Warm, actionable signal
- Used in ring charts, treemap tiles, bars, category badges

**Scope 2 (Energy) — Amber** — `#F59E0B`
- Represents purchased energy (electricity, steam)
- Transition color between red and green; "middle" on the risk spectrum
- Used in ring charts, treemap tiles, bars, category badges

**Scope 3 (Value Chain) — Blue** — `#3B82F6`
- Represents indirect, distributed emissions (supply chain, travel, commuting)
- Cool, technical color; suggests complexity and breadth
- Used in ring charts, treemap tiles, bars, category badges

### Background & Neutral Colors

**Nature Background** — `#F0FDF4`
- Very light green tint (closest to white but with subtle warmth)
- Default page background; creates "fresh, natural" feeling without being distracting
- Used sparingly; most content on white

**White** — `#FFFFFF`
- Primary content background for cards, modals, forms
- Clean, high contrast for readability

**Neutral Grays** (Tailwind scale):
- `#F3F4F6` — Subtle backgrounds, dividers, disabled states
- `#E5E7EB` — Borders, secondary dividers
- `#9CA3AF` — Secondary text, labels, timestamps
- `#6B7280` — Body text, descriptions
- `#374151` — Primary text, headings
- `#1F2937` — Dark text, high emphasis, dark mode backgrounds

**Earth Accent** — `#D97706` (Amber-Orange)
- Optional accent for highlights, callouts, warnings
- Used sparingly for CTAs on special sections (e.g., offset purchase buttons)
- Provides warmth without competing with brand green

### Dark Mode (Future Support)
- Background: `#111827` (dark gray-black)
- Cards/surfaces: `#1F2937` (dark slate)
- Text: `#F9FAFB` (off-white)
- Accent: Brand green `#16A34A` remains primary
- Scope colors: Slightly desaturated to maintain contrast and ease eye strain

---

## Typography

### Typefaces

**Headings: "DM Sans"** (Google Fonts, free)
- Weight: 600 (SemiBold) for h1/h2, 500 (Medium) for h3/h4
- Characteristics: Geometric, friendly, technical (not serif, not decorative)
- Usage: Page titles, section headings, card titles, form labels
- Rationale: Approachable yet authoritative; used by Mailchimp, Supabase (modern SaaS brands)

**Body Text: "Inter"** (Google Fonts, free)
- Weight: 400 (Regular) for body, 500 (Medium) for emphasized text
- Line height: 1.6 (24px on 16px base for reading comfort)
- Usage: Paragraphs, descriptions, UI text, form fields
- Rationale: Highly readable at all sizes; default for modern web apps

**Numbers (tCO2e, metrics, units): "IBM Plex Mono"** (Google Fonts, free) or system monospace
- Weight: 600 (SemiBold) for data headlines
- Usage: All emissions values (tCO2e), percentages, charts labels, code-like displays
- Rationale: Makes data scannable and precise; clear distinction from body text

### Type Scale

```
h1 (Page Title)       | 48px / 52px line height | DM Sans 600 | #1F2937
h2 (Section Header)   | 36px / 40px line height | DM Sans 600 | #1F2937
h3 (Card Title)       | 28px / 32px line height | DM Sans 500 | #1F2937
h4 (Subsection)       | 24px / 28px line height | DM Sans 500 | #374151
Body Large            | 18px / 28px line height | Inter 400   | #374151
Body (Default)        | 16px / 24px line height | Inter 400   | #6B7280
Body Small            | 14px / 20px line height | Inter 400   | #9CA3AF
Label / Caption       | 12px / 16px line height | Inter 500   | #9CA3AF
Data Metric (tCO2e)   | 36px / 40px line height | Mono 600    | #16A34A or #EF4444
```

### Color Application

- **Primary headings:** `#1F2937` (dark)
- **Secondary text:** `#6B7280` (medium gray)
- **Disabled/inactive:** `#D1D5DB` (light gray)
- **Links (body):** `#16A34A` (brand green), underlined or with subtle background on hover
- **Accent highlights:** `#D97706` (earth orange) for warnings, opportunities

---

## Layout & Composition

### Design Principles

1. **Data Visualization First**
   - Dashboards lead with charts, not tables
   - Charts occupy 50%+ of viewport on desktop
   - Mobile: charts stack vertically, full-width

2. **Whitespace & Breathing Room**
   - Generous padding: 32px/48px margins on desktop, 24px on mobile
   - Card spacing: 16px–24px between cards
   - Line height: 1.6+ for readability
   - Avoids dense, cluttered interfaces

3. **Visual Hierarchy via Contrast**
   - Key metrics (tCO2e totals) in largest type + brand green
   - Supporting data in smaller gray text
   - Buttons in brand green, secondary actions in gray outlines

4. **Grid & Consistency**
   - 12-column grid on desktop, responsive breakpoints
   - Mobile: single-column, card-based layout
   - Tablet: 2-column card layout
   - Consistent 4px spacing unit (padding: 4px, 8px, 12px, 16px, 24px, 32px, 48px)

5. **Progressive Disclosure**
   - Show summary first (ESG Overview), drill-down on click
   - Details in drawers/modals, not separate pages
   - Avoid info overload; tabs for secondary features

### Desktop Layout Patterns

**Dashboard (2-3 column grid):**
```
[Headline Metrics - Full Width]
[Chart / Visualization - Left 60%] [Summary Card / Controls - Right 40%]
[Secondary Chart / Details - Full Width or 2-column]
```

**Data Entry Forms (left panel + preview):**
```
[Category Tabs] [Form Fields] [Result Preview (sticky)]
```

**Admin Settings (sidebar + content):**
```
[Settings Nav - 20%] [Settings Content - 80%]
```

### Mobile Layout Patterns

**Cards stack vertically, full-width**
- 16px padding on sides
- 24px spacing between cards
- Charts: responsive height, maintain aspect ratio

**Sticky Header**
- Company logo (minimal)
- Breadcrumb or current page title
- Back button (if nested)

**Bottom Navigation / Floating Action Button**
- Primary CTA (e.g., "Quick Log") in floating action button (FAB) bottom-right, OR bottom nav with 4–5 key sections
- Follows native mobile conventions (iOS bottom tab bar, Android bottom nav)

---

## Component Design

### Ring / Donut Charts (Scope Breakdown)

**Visual Style:**
- 3 concentric rings (Scope 1 [outer], Scope 2 [middle], Scope 3 [inner]) OR 3 side-by-side donuts
- Stroke width: 12px
- Gap between rings: 8px
- Colors: Scope 1 red, Scope 2 amber, Scope 3 blue (as defined above)
- Center label: Total tCO2e in largest bold type, unit below in small gray
- Interactive: hover on ring segment → tooltip shows (tCO2e, %, category)
- Animation: rings fill smoothly on page load (500ms)

**Accessibility:**
- Actual data values in visible labels, not just colors
- Alt text: "Scope 1: 412 tCO2e (14.5%), Scope 2: 1,065 tCO2e (37.5%), Scope 3: 1,363 tCO2e (48%)"

### Treemap (Emissions Breakdown)

**Visual Style:**
- Hierarchical rectangular tiles, sized by emissions magnitude (tCO2e)
- Color: Scope-based (red/amber/blue) or category-based (custom palette)
- Tile padding: 2px (minimal borders)
- Labels: category name + tCO2e value, white text if tile dark enough, black if light
- Interaction: click tile to drill down to next level; back button to return
- Animation: tiles transition smoothly on drill-down (300ms)

**Accessibility:**
- Keyboard navigation: arrow keys to navigate tiles, enter to drill
- Screen reader: announces "Scope 1, Energy, 412 tCO2e" on focus

### Reduction Target Progress Card

**Visual Style:**
- Card: white background, `#E5E7EB` border, 4px border radius
- Header: Target name (left) + Status badge (right)
  - Status badge: green (#16A34A) for "On Track", amber (#F59E0B) for "At Risk", red (#EF4444) for "Off Track"
  - Badge style: filled pill, 12px padding, 14px font, bold
- Main content:
  - Baseline → Goal (e.g., "1,477 → 738 tCO2e by 2030")
  - Progress bar: full-width, height 24px
    - Unfilled: `#E5E7EB` (light gray)
    - Filled: brand green `#16A34A` (smoothly animated to current %)
    - Label: "68% on track to 2030 goal"
- Bottom: sparkline chart (small line chart showing quarterly trend + projected path) and "View Details" button
- Hover: subtle shadow lift (0 4px 12px rgba(0,0,0,0.05))

### Offset Project Card

**Visual Style:**
- Card: white background, `#E5E7EB` border, 4px border radius
- Image: top of card, 120px height, cover fit (forest, wind farm, solar)
- Content:
  - Project name (h4, brand green if verified)
  - Type + location (small gray text) e.g., "Reforestation • Amazon, Brazil"
  - Cost (prominent): "€12.50/tonne" in medium font, gray
  - Impact tags: "Biodiversity", "Livelihood", colored small pills (`#E5E7EB` background, `#374151` text)
  - Verification badge: Gold Standard or Verra VCS logo (16x16px) + "Verified" label (small green text)
- Bottom button: "View Project" or "Purchase"
- Hover: image zoom subtle (scale 1.02), card shadow lift
- Responsive: mobile = full-width card, tablet/desktop = 2–3 per row

### ESG Score Tile

**Visual Style:**
- Circular progress indicator (SVG ring), diameter 120px (mobile: 100px)
- Center: large bold number (48–100), color-coded:
  - 0–30: red (#EF4444) — "At Risk"
  - 31–60: amber (#F59E0B) — "Good"
  - 61–100: green (#16A34A) — "Strong"
- Below: interpretation text (e.g., "Strong ESG profile")
- Breakdown (optional, expandable):
  - Environmental score sub-ring
  - Social score sub-ring
  - Governance score sub-ring
- "Share" button below (screenshot or link)

### Emission Entry Form

**Visual Style:**
- Vertical stack: label → input field → help text
- Input fields: 
  - Background: `#F9FAFB` (very light gray)
  - Border: `#D1D5DB` (light gray), 2px
  - Focus: border color → brand green, box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1)
  - Padding: 12px (medium)
  - Font: 16px Inter, #374151
  - Placeholder: `#9CA3AF` (medium gray)
- Labels: 14px Inter 500, `#374151`, 12px margin-bottom
- Help text: 12px Inter, `#6B7280`, italicized
- "Learn More" links: brand green, cursor pointer, underline on hover
- Result display (sticky right panel on desktop):
  - Large tCO2e value in mono font, brand green
  - Comparison metric (e.g., "vs. last month: +15%")
  - Breakdown list: line items by category

### Data Quality Score Indicator

**Visual Style:**
- Circular progress: diameter 48px
- Percentage in center
- Color gradient: red (0–30%) → amber (31–70%) → green (71–100%)
- Tooltip on hover: "X% complete, Y% accurate, Z days fresh"
- Alternative: bar chart + traffic light icon (red/amber/green circle)

---

## Landing Page Design

### Hero Section

**Layout:**
```
[Full-width background image with gradient overlay]
[Center content: headline + subheading + CTA + floating dashboard preview]
```

**Visual Elements:**
- **Background Image:** High-res photo of nature + sustainability (forest canopy, wind farm, solar panels, water treatment)
  - Dimensions: 1920x900px (desktop), responsive crop for mobile
  - Overlay: linear gradient `rgba(0, 0, 0, 0.25)` (subtle darkening for text legibility)
  - Animation: subtle parallax scroll on desktop (moves slowly as user scrolls)

- **Headline:** "Measure. Reduce. Report."
  - Font: 48px (desktop) / 36px (mobile), DM Sans 600, white text
  - Letter spacing: 0.02em (professional spacing)
  - Text shadow: subtle `0 2px 8px rgba(0, 0, 0, 0.2)` (readability on image)

- **Subheading:** "Enterprise-grade carbon accounting and ESG reporting, built for European companies."
  - Font: 20px (desktop) / 16px (mobile), Inter 400, white
  - Max width: 600px, centered
  - Margin-top: 12px

- **CTA Button (Primary):** "Start Free Trial"
  - Size: 56px height (large touch target)
  - Background: brand green `#16A34A`
  - Text: white, 16px Inter 600, uppercase tracking +0.05em
  - Padding: 16px 48px
  - Hover: background brand emerald `#059669`
  - Margin-top: 32px

- **Floating Dashboard Preview:**
  - Position: absolute or "float" effect, ~40% from left, 30% from top (right side of text)
  - Content: high-res screenshot of ESG Overview dashboard (or animated carousel)
  - Style: white background, subtle shadow `0 20px 40px rgba(0, 0, 0, 0.15)`, border radius 8px
  - Size: 400x300px (desktop), responsive scale down on tablet/mobile
  - Animation: gentle float up/down (3s loop) or slight rotate on scroll

### Compliance & Trust Row

**Layout:**
```
[6–8 inline badges, centered below hero]
```

**Visual Elements:**
- Badges: "CSRD-Ready", "GRI Standards", "TCFD Framework", "EU Taxonomy", "ISO 14001"
- Style: 
  - Background: `#F0FDF4` (nature green tint)
  - Border: 1px solid `#D1D5DB`
  - Text: 12px Inter 600, `#374151`, all-caps
  - Padding: 8px 12px
  - Border-radius: 4px
  - Spacing: 16px between badges
  - Layout: flex wrap, justify-center
  - Mobile: stack vertically if width < 768px

**Heading Above:**
- "Built for European regulatory requirements"
- 16px Inter 500, `#6B7280`, centered, margin-bottom: 24px

### Features Overview Grid

**Layout:**
```
[3-column grid: "Unified Data" | "Scope Visibility" | "Reporting"]
[Each column: icon + headline + description]
```

**Card Style:**
- Background: white
- Border: none or 1px `#E5E7EB`
- Padding: 32px
- Border-radius: 8px
- Hover: subtle shadow lift (0 8px 24px rgba(0, 0, 0, 0.08))

**Content:**
- Icon: 48x48px SVG, brand green color
  - Icon 1: data flow/integration icon
  - Icon 2: pie chart or scope breakdown icon
  - Icon 3: document/report icon
- Headline: 20px DM Sans 600, `#1F2937`
- Description: 14px Inter 400, `#6B7280`, 2–3 sentences

**Mobile:** Stack to 1 column, 100% width per card

### Dashboard Preview Carousel

**Layout:**
```
[Title + Description above]
[Carousel: scrollable mock-ups with navigation dots]
[Each slide: 900px wide screenshot + caption]
```

**Visual Style:**
- Screenshots: high-res PNG/WebP, 2x for retina
- Captions: 16px Inter, `#374151`, centered below each slide, max-width 500px
- Navigation: dots (bullets), filled = current slide (brand green), unfilled = gray
- Arrows (< >) on desktop (hidden on mobile, swipe navigation)
- Auto-advance every 5 seconds (pause on hover)

**3 Sample Slides:**
1. ESG Overview — "See your total carbon footprint and progress toward reduction targets at a glance"
2. Carbon Calculator — "Log emissions from energy, travel, supply chain, and waste in minutes"
3. ESG Report Builder — "Generate CSRD, GRI, TCFD, and CDP-compliant reports instantly"

### Pricing Table

**Layout:**
```
[Pricing toggle: "Monthly / Annual" (annual = 20% off)]
[3-column card layout: Starter | Growth | Enterprise]
```

**Card Style (each pricing tier):**
- Background: white (Starter), or subtle highlight `#F0FDF4` (Growth/Enterprise recommended)
- Border: 2px solid, color varies
  - Starter: `#D1D5DB` (gray)
  - Growth: brand green `#16A34A` (recommended highlight)
  - Enterprise: `#D97706` (earth accent, premium)
- Padding: 32px
- Border-radius: 8px
- Hover: shadow lift

**Content:**
- Plan name: 20px DM Sans 600, `#1F2937`
- Price: 36px bold (mono font), brand green, followed by "/month" (14px gray)
  - Annual option: strike-through original monthly × 12, show annual price with 20% discount highlight
- Tagline: 14px Inter, `#6B7280`, italic
- Features list:
  - Bullet points (✓ icon in brand green)
  - 14px Inter, `#374151`
  - 6–8 key features per tier
- CTA button:
  - Starter/Growth: "Start Free Trial" (outline if not recommended, solid green if recommended)
  - Enterprise: "Contact Sales" (solid brand green)
  - Button: 48px height, full-width

**Comparison Table (optional, below cards):**
- Horizontal table showing 8–10 feature comparisons across tiers
- Column width: 25% each (3 tiers + feature names on left)

### CTA Section (Before Footer)

**Layout:**
```
[Centered content]
[Headline]
[Subheading]
[Two buttons: "Schedule Demo" + "Start Free Trial"]
```

**Visual:**
- Background: gradient from nature green `#F0FDF4` to white
- Headline: "Ready to decarbonize your operations?"
  - 32px DM Sans 600, `#1F2937`, centered
- Subheading: "Join 50+ companies tracking emissions with GreenLedger."
  - 16px Inter, `#6B7280`, centered
- Buttons (side-by-side on desktop, stacked on mobile):
  - Primary: "Start Free Trial" (brand green, solid)
  - Secondary: "Schedule Demo" (gray outline, green text on hover)
  - Both: 48px height, 16px padding, 14px font

### Footer

**Layout:**
```
[4-column layout: Logo+Description | Product | Company | Legal]
```

**Content Columns:**
1. **Brand Column:**
   - Logo (small, 32x32px or text logo)
   - 1-line mission statement (14px Inter, `#6B7280`)
   - Social icons (LinkedIn, Twitter, if relevant)

2. **Product Column:**
   - Links: Features, Dashboard, Integrations, Pricing, Roadmap
   - 14px Inter, `#6B7280`, hover: brand green

3. **Company Column:**
   - Links: About, Blog, Case Studies, Careers, Press
   - 14px Inter, `#6B7280`, hover: brand green

4. **Legal Column:**
   - Links: Privacy Policy, Terms of Service, Cookie Policy, Contact
   - 14px Inter, `#6B7280`, hover: brand green

**Bottom Section:**
- Divider: 1px `#E5E7EB`
- Copyright notice: "© 2026 GreenLedger. All rights reserved."
- Certification logos: ISO 14001, SOC 2 (if applicable), 32x32px, grayscale
- 12px Inter, `#9CA3AF`, centered

**Mobile:** Stack to 1 column, headers bold, spacing 24px

---

## Mobile UI Style Guide

### Navigation

**Bottom Tab Bar (iOS) or Bottom Navigation (Android):**
- Height: 64px (including safe area padding)
- Background: white, border-top: 1px `#E5E7EB`
- 4–5 tabs, spaced evenly:
  - Home (house icon) — Dashboard
  - Log (plus icon, possibly FAB) — Quick entry
  - Targets (target icon) — Reduction targets
  - Profile (person icon) — Settings
  - Menu (three lines, optional) — More options
- Icons: 24x24px, inactive: `#9CA3AF`, active: brand green `#16A34A`
- Labels: 12px Inter, inactive: gray, active: brand green
- Hover: subtle background tint `#F0FDF4`

### Quick Log Entry Flow (Mobile-First)

**Screen 1: Category Selection**
- Full-screen card with 5 large buttons:
  - "⚡ Energy" (amber tint)
  - "✈️ Travel" (blue tint)
  - "♻️ Waste" (gray tint)
  - "🏭 Supply Chain" (red tint)
  - "➕ Custom" (green tint)
- Each button: 56px height, full-width, white background, `#E5E7EB` border
- Heading: "What would you like to log today?"
- Back button (top-left): outline style

**Screen 2: Entry Form (Category-Specific)**
- Sticky header: back button + "Log Energy" (title) + close (X)
- Form fields (as per component design above)
- Submit button (bottom, full-width, green): "Save Entry"
- Optional: "Save as Template" checkbox (bottom, before submit)

**Screen 3: Confirmation**
- Large green checkmark animation (Lottie, 100ms duration)
- Headline: "Entry saved!"
- Body: "This adds X tCO2e to your footprint"
- Subtext: "Your monthly total is now Y tCO2e"
- Show comparison: "That's 15% more than last month"
- Button: "Log Another" or "Back to Home"
- Optional: sparkle/celebration confetti micro-animation (subtle)

### Card-Based Layouts

**Emissions Summary Card (Home):**
- Full-width card, 120px height (mobile), white background
- Left: large tCO2e number (mono, 32px, brand green)
- Right: small chart (sparkline) showing trend
- Bottom: "Total for this month" (12px gray text)
- Tap: navigates to detailed view

**Reduction Target Card (Targets List):**
- Full-width card, white background, 16px padding
- Header: target name (14px bold) + status badge (right)
- Progress bar: 24px height, green fill
- Footer: "On track" + milestones hint
- Tap: expands detail view or navigates to detail screen

### Large Data Displays

**CO2 Equivalent Number Display:**
- Font: monospace, 36px (mobile), 48px (tablet)
- Weight: 600 (bold)
- Color: brand green or scope color
- Unit below: "tCO2e" or "kg CO2" in 12px gray
- Example layout:
  ```
  2,840
  tCO2e
  ```

**Pie/Ring Chart (Scope Breakdown):**
- Full-width, height: 200px (mobile), responsive
- Center label: total tCO2e + unit
- Legend below: 3 rows, Scope 1/2/3 with color square + value + %

### Micro-interactions & Animation

**Celebration on Target Milestone:**
- Triggered: when user hits reduction target (e.g., "You've reached 50%!")
- Animation: brief (500–800ms)
  1. Large green checkmark appears center-screen (scale 0 → 1)
  2. Confetti-like particles (3–5) float upward, fade out
  3. Subtle spring bounce: transform scale 1 → 1.1 → 1.0
- Sound: optional soft "ding" (accessibility: mute available)
- Follow-up: modal "Celebrate this milestone on social" with share button

**Pull-to-Refresh (Data Update):**
- Swipe down on home screen
- Icon animation: spinner
- Success: data updates with subtle fade-in
- Haptic feedback (if device supports)

**Skeleton Loading:**
- Show shimmer animation while data loads
- Placeholder shapes: match final layout (2–3 lines for text, rounded rect for image)
- Duration: fade-out into real content (300ms)

### Mobile Form Usability

- **Input Field Focus:** Zoom in slightly on mobile when focused (prevents auto-zoom issues)
- **Keyboard Handling:**
  - Number inputs: show numeric keypad
  - Currency: show currency keypad with $ or €
  - Close keyboard on "Next" / "Return" key
- **Label Visibility:** Labels always visible (not placeholder-only)
- **Error Messages:**
  - Red text below field
  - Icon: red warning circle (!)
  - Background: light red tint if needed
  - Example: "Please enter a positive number"

---

## Accessibility & Inclusive Design

### Color Contrast
- All text vs. background: minimum 4.5:1 ratio (WCAG AA)
- Large text (18px+): minimum 3:1 ratio
- Links: underline or distinct visual indicator (not color alone)
- Status colors (red/amber/green) paired with icons or text labels

### Typography
- Minimum font size: 12px (labels/captions)
- Body text: 16px minimum (comfortable reading)
- Line height: 1.5–1.6 (breathing room)
- Max line length: 70–80 characters (readability)

### Motion & Animation
- Reduce Motion: respect prefers-reduced-motion media query; disable auto-animations for users who prefer it
- Duration: animations 300–500ms (not too slow, not jarring)
- Easing: ease-in-out (smooth, natural feel)

### Keyboard Navigation
- Tab order: logical left-to-right, top-to-bottom
- Focus indicator: visible outline (brand green, 3px) around focused element
- Escape key: closes modals, drawers
- Arrow keys: navigate charts, lists

### Screen Reader Support
- Semantic HTML: `<button>`, `<main>`, `<nav>`, `<section>` roles
- ARIA labels: chart descriptions, status updates, live regions for real-time updates
- Alt text: all images and icons
- Form associations: label → input via `for` attribute or `<label>` wrapping

### Color-Blind Considerations
- Charts: icons + colors, never color-only
- Scope colors: red/amber/blue chosen to be distinguishable for red/green colorblindness
- Contrast: sufficient separation even without color

---

## Design Tokens (CSS Variables)

```css
/* Colors */
--color-brand-green: #16A34A;
--color-brand-emerald: #059669;
--color-scope-1: #EF4444;
--color-scope-2: #F59E0B;
--color-scope-3: #3B82F6;
--color-accent-earth: #D97706;
--color-bg-nature: #F0FDF4;
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-600: #6B7280;
--color-gray-700: #374151;
--color-gray-900: #1F2937;

/* Typography */
--font-heading: 'DM Sans', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'IBM Plex Mono', monospace;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;
--spacing-2xl: 32px;
--spacing-3xl: 48px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15);

/* Transitions */
--transition-fast: 300ms ease-in-out;
--transition-normal: 500ms ease-in-out;
```

---

## Implementation Notes

### Frontend Stack
- **React 18** (component-driven, hooks-based)
- **Tailwind CSS** (utility-first, design tokens mapped to custom config)
- **Headless UI / Radix UI** (accessible component primitives)
- **Recharts or Apache ECharts** (data visualizations: ring charts, treemaps, line charts)
- **Framer Motion** (micro-animations, transitions)

### Tailwind Config Override
```javascript
// Example: custom colors, fonts
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-green': '#16A34A',
        'brand-emerald': '#059669',
        'scope-1': '#EF4444',
        'scope-2': '#F59E0B',
        'scope-3': '#3B82F6',
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
}
```

### Dark Mode Strategy
- Implement via `prefers-color-scheme` + class-based toggle (user preference)
- Brand colors remain consistent; backgrounds/text invert
- Consider separate dark-mode color palette for charts (reduce saturation slightly)

### Responsive Breakpoints
- **Mobile:** 320px–767px (single-column, large touch targets)
- **Tablet:** 768px–1024px (2-column cards, hybrid layout)
- **Desktop:** 1025px+ (3-column, full-featured layout)

### Performance Considerations
- Lazy-load dashboard visualizations (Recharts supports)
- Code-split dashboard pages (React.lazy)
- Image optimization: WebP with PNG fallback, responsive srcset
- Font subsetting: load only necessary characters (Latin + numbers)

---

## Style Guide Summary

GreenLedger's design system is rooted in **clarity, trust, and optimism**. Every design decision supports the core mission: making carbon accounting and ESG reporting accessible, transparent, and actionable. The visual identity—from color choices to typography to micro-interactions—reflects a balance between technical precision and human-centered design.

