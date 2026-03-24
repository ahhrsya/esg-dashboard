# GreenLedger - Product Requirements Document

## Product Identity

**Product Name:** GreenLedger  
**Tagline:** Measure. Reduce. Report.  
**Category:** B2B SaaS — ESG & Carbon Footprint Tracking Platform  
**Target Markets:** Netherlands/Europe (primary), global B2B SaaS  
**Positioning:** Enterprise-grade carbon accounting and sustainability reporting for companies managing ESG compliance and net-zero commitments.

---

## Product Overview

GreenLedger is a comprehensive B2B sustainability and carbon footprint tracking platform designed to help companies measure, manage, and report their environmental impact. The platform enables organizations to:

- **Connect data sources** across their operations: energy bills, travel bookings, supply chain emissions, waste management, and more
- **Calculate total carbon footprint** across Scope 1 (direct), Scope 2 (energy-related), and Scope 3 (value chain) emissions
- **Set science-based reduction targets** aligned with climate goals (e.g., net-zero by 2050)
- **Track progress** against targets with real-time dashboards and trend analysis
- **Generate regulatory-compliant ESG reports** for stakeholders, investors, and regulators (CSRD, GRI, TCFD, CDP, EU Taxonomy)
- **Benchmark performance** against industry peers and best-in-class operators
- **Manage carbon offsets** and credits to complement reduction strategies

GreenLedger reduces complexity in sustainability reporting, automates data collection, and provides actionable insights for continuous emissions reduction.

---

## Landing Page

### Design Brief
- **Visual Tone:** Clean, nature-forward but tech-precise. No greenwashing — credible, data-driven aesthetics.
- **Hero Section:**
  - Headline: "Measure. Reduce. Report."
  - Subheading: "Enterprise-grade carbon accounting and ESG reporting, built for European companies."
  - Background: Full-width hero image (forest ecosystem, wind farm, or solar installation) with subtle gradient overlay
  - Floating Data Visualization: Interactive preview of dashboard analytics (ring chart, emissions breakdown) positioned over image
  - Primary CTA: "Start Free Trial" (green button, no credit card required)

### Key Sections
1. **Compliance & Trust Row**
   - Badges for: CSRD-Ready, GRI Standards, TCFD Framework, EU Taxonomy
   - Brief copy: "Built for European regulatory requirements"

2. **Features Overview** (3-column grid)
   - "Unified Data Integration" — Connect energy, travel, supply chain sources
   - "Scope 1/2/3 Tracking" — Complete emissions visibility
   - "Regulatory Reporting" — CSRD, GRI, TCFD, CDP export

3. **Dashboard Preview Section**
   - High-res mockup carousel of key dashboard pages (ESG Overview, Carbon Calculator, Emissions Explorer)
   - Each with brief benefit statement

4. **Testimonial/Social Proof** (optional for MVP)
   - Quote from sustainability manager or CFO at similar company

5. **Pricing Table**
   - **Starter:** €199/month — up to 50 employees, 1 reporting year
   - **Growth:** €799/month — up to 500 employees, unlimited reporting years, API access
   - **Enterprise:** Custom pricing — unlimited users, dedicated support, custom integrations
   - Per-month or annual billing (annual = 20% discount)

6. **CTA Section** (above footer)
   - "Ready to decarbonize your operations?"
   - Button: "Schedule Demo" + "Start Free Trial"

7. **Footer**
   - Navigation links, legal (Privacy, Terms, Cookie Policy)
   - Certification logos (ISO 14001, verification standards)

---

## Dashboard Application

### 1. ESG Overview Dashboard

**Purpose:** Executive summary of company's sustainability posture and regulatory obligations.

**Key Metrics & Visualizations:**
- **Total Carbon Footprint (tCO2e/year):** Large headline number (e.g., "2,840 tCO2e")
- **Scope Breakdown Rings:** Concentric or side-by-side donut charts:
  - Scope 1 (Direct): red (#EF4444)
  - Scope 2 (Energy): amber (#F59E0B)
  - Scope 3 (Value Chain): blue (#3B82F6)
  - Each ring shows tCO2e and % of total
- **Reduction vs. Target Progress:** Large donut chart with progress bar (e.g., "892 tCO2e reduction needed to reach 2030 target")
- **Year-over-Year Comparison:** Small line chart showing trend (e.g., 2024 vs. 2025)
- **ESG Score Card:** Single numerical score (0–100) with interpretation (e.g., "61 — Strong ESG profile")
- **Upcoming Reporting Deadlines:** Card list showing (Regulation, Due Date, Status) e.g., "CSRD Report — Due March 30, 2026 — In Progress"

**Layout:**
- Top: headline metrics
- Middle-left: Scope breakdown rings
- Middle-right: Reduction progress + YoY comparison
- Bottom: ESG score, deadlines, quick actions

**Data Displayed (Nexora BV example):**
- Total: 2,840 tCO2e/year
- Scope 1: 412 tCO2e (14.5%)
- Scope 2: 1,065 tCO2e (37.5%)
- Scope 3: 1,363 tCO2e (48%)
- ESG Score: 61/100
- 2030 Target: 1,420 tCO2e (50% reduction)
- Deadlines: CSRD Report (March 30), CDP Response (August 1), GRI Report (annual, December)

---

### 2. Carbon Calculator

**Purpose:** Data entry point for emissions across all categories. Intuitive form-driven interface.

**Structure:**
- **Category Tabs:** Toggle between Energy, Travel, Supply Chain, Waste, Custom
  
**Energy Tab:**
- Electricity consumption (kWh/month) — input or upload utility bill
- Natural gas (kWh/month)
- Fuel (heating oil, propane) — liters/month
- Grid emission factor selector (default: EU average, or user-specific locale)
- Result: tCO2e/month, annual projection

**Travel Tab:**
- Business flight miles (domestic, short-haul, long-haul) — dropdown distance presets or manual entry
- Car travel miles — fuel type selector (petrol, diesel, EV)
- Rail travel miles
- Result: tCO2e per trip/month, annual total

**Supply Chain Tab:**
- Purchased goods and services (spend in €, category classification e.g., IT equipment, raw materials)
- Supplier-specific emission factors (if available via integration)
- Scope 3 category tagging (Cat. 1, Cat. 3, etc.)
- Result: tCO2e, attribution by supplier

**Waste Tab:**
- Waste disposed (kg/month) — type selector (general, hazardous, recycled)
- Water consumption (m³/month)
- Result: tCO2e/month

**Form Features:**
- Inline help text and "Learn More" tooltips explaining emissions factors
- Bulk upload option (CSV with historical data)
- Save as template for recurring entries (e.g., monthly utility bills)
- Calculate button shows real-time result with tCO2e equivalent breakdown
- Result display: large number (tCO2e), comparison to previous period, drill-down to line items

**Layout:**
- Left: category tabs (vertical or horizontal)
- Center: form with input fields, unit selectors, help text
- Right: live result preview (sticky), comparison metrics

---

### 3. Emissions Explorer

**Purpose:** Drill-down analysis of all emissions sources, identify hotspots and anomalies.

**Visualizations:**
- **Treemap Chart:** Hierarchical breakdown of all emission sources
  - First level: Scope 1, 2, 3
  - Second level: Category (Energy, Travel, Supply Chain, Waste)
  - Third level: Individual data points (specific supplier, facility, or trip)
  - Tile size = tCO2e magnitude; color = scope
  - Click to drill down or expand

- **Filter & Date Range Controls:**
  - Filter by Scope (1, 2, 3, or all)
  - Filter by Category (Energy, Travel, Supply Chain, Waste)
  - Filter by Facility/Department (for multi-site companies)
  - Date range selector (month, quarter, year)

- **Anomaly Flagging:**
  - Automated detection of unusual spikes (e.g., 30% above monthly average)
  - Anomaly indicator badge on tiles
  - Sidebar panel: "Anomalies Detected" with list and suggested causes

- **Data Point Details Drawer:**
  - On click: slide-out panel showing full metadata
  - Source type, date range, value, emissions factor used, supporting documents (receipts, bills)
  - Edit capability, historical versions

**Layout:**
- Top: title, filter controls, date range
- Left: filter sidebar (collapsible)
- Center: treemap visualization (responsive, zooms and pans)
- Right: anomalies panel or detail drawer (on selection)

---

### 4. Reduction Targets

**Purpose:** Define, track, and forecast progress toward emissions reduction goals.

**Target Cards (one per target):**
- **Target Name & Category:** e.g., "50% Scope 1 & 2 reduction by 2030"
- **Baseline & Goal:** e.g., "2024 Baseline: 1,477 tCO2e → 2030 Goal: 738 tCO2e"
- **Progress Bar:** Current reduction % vs. required annual reduction rate
  - Color coding: On track (green), at risk (amber), off track (red)
- **Trajectory Forecast:**
  - Small sparkline chart: historical trend + projected path to goal
  - Show if trajectory aligns with target or diverges
- **Status Badge:** "On Track" / "At Risk" / "Off Track"
- **Actions:** "View Details" (expands to full target management view), "Set Interim Milestones"

**Target Management Modal (on click "View Details"):**
- Target name, category, baseline year
- Science-based target (SBT) badge if aligned with SBTi standards
- Start and end date
- Baseline and goal emissions (tCO2e)
- Current progress (live)
- Historical progress chart (line chart showing quarterly progress)
- Milestone breakdown (e.g., 2025: -15%, 2027: -30%, 2030: -50%)
- Edit button (modify target parameters)
- Action plan links (associated reduction initiatives, offset purchases)

**Create New Target:**
- Modal form: target name, scope/category, baseline year, goal year
- Pre-filled options for common SBT pathways (1.5°C, 2°C aligned)
- Automatic calculation of required annual reduction rate
- Milestone auto-generation

**Layout:**
- Grid or list view of target cards
- Each card shows key metrics and status at a glance
- Click to expand for detailed analysis
- "Add Target" button (top right)

---

### 5. Offset Manager

**Purpose:** Browse, evaluate, and manage carbon offset projects to supplement reduction strategies.

**Offset Projects List:**
- **Tabular layout with columns:**
  - Project Name (e.g., "Amazon Rainforest Protection Initiative")
  - Type (Reforestation, Renewable Energy, Methane Capture, Soil Carbon, etc.)
  - Location (Country/Region)
  - Cost per tonne (€/tCO2e, e.g., €12.50)
  - Verification Standard (Gold Standard, Verra VCS, Plan Vivo, etc.)
  - Availability (number of tonnes available for purchase)
  - Impact co-benefits (biodiversity, livelihood, water, etc. — tags)

- **Filtering & Search:**
  - Filter by type, verification standard, cost range, impact co-benefits
  - Sort by cost, impact, verification standard
  - Full-text search

**Project Detail Card/Modal:**
- Project image (forest, wind farm, etc.)
- Full description and impact story
- Map showing project location
- Emission reduction methodology (how tCO2e are calculated)
- Verification credential (certificate/badge)
- Impact metrics (trees planted, households powered, etc.)
- Pricing: €/tCO2e, bulk discounts (1,000+ tonnes)
- "Purchase" button with quantity selector

**Offset Portfolio Summary:**
- Total offsets purchased (tCO2e)
- Breakdown by project/type (stacked bar or donut)
- Total spent (€)
- % of footprint offset
- Map visualization showing offset project locations globally

**Purchase Flow:**
1. Select project and quantity (tCO2e)
2. Review cost calculation
3. Confirm and complete payment (Stripe integration)
4. Confirmation + certificate preview/download
5. Offsets added to portfolio, retirement scheduled/tracked

**Layout:**
- Top: portfolio summary cards (total offset, spend, % of footprint)
- Middle: offset projects table with filtering sidebar
- Bottom: detail drawer or modal on project selection

---

### 6. Supply Chain Emissions (Scope 3)

**Purpose:** Manage Scope 3 emissions from suppliers and purchased goods/services.

**Supplier List:**
- **Table columns:**
  - Supplier Name
  - Category (raw materials, manufacturing, logistics, services, etc.)
  - Scope 3 Emissions (tCO2e/year, if known)
  - Data Collection Status (Complete, Pending, Not Started, No Response)
  - Sustainability Score (0–100, if supplier has shared ESG data)
  - Last Updated (date)
  - Actions (send data request, view details, edit)

**Filtering & Controls:**
- Filter by category, data collection status, score range
- Search by supplier name
- Sort by emissions, score, status
- Bulk actions (send data request to multiple suppliers)

**Supplier Detail View:**
- Supplier profile: name, location, contact, category
- Emissions data: last reported value, trend, methodology
- Data collection status: timeline, pending requests, response tracking
- Sustainability score breakdown (emissions, energy efficiency, certifications, etc.)
- Connected documents (sustainability reports, certifications, audit results)
- Data request form (email supplier, request specific emission categories or disclosure)
- Edit supplier data manually (if own calculations available)

**Data Collection Request Feature:**
- Pre-built template for supplier questionnaire (based on GHG Protocol, Product Life Cycle Account Standard)
- Email integration (automatic send with unique response link)
- Response tracking (opened, partially completed, submitted)
- Automated reminders (1 week, 2 weeks, 1 month after send)
- Response aggregation (pull data from submitted forms into supplier record)

**Scope 3 Category Mapping:**
- Automated categorization of suppliers into GHG Protocol Scope 3 categories (1–15)
- Display recommended focus categories based on company industry and business model

**Layout:**
- Top: quick stats (total suppliers, data collection status distribution, average score)
- Middle: supplier list with filtering sidebar
- Bottom: detail drawer or modal on supplier selection

---

### 7. ESG Report Builder

**Purpose:** Create and export regulatory-compliant ESG reports without manual assembly.

**Report Templates:**
- **GRI Standards (Universal, Sector-specific)**
  - Customizable sections: GRI 1 (Foundation), GRI 2 (General Disclosures), GRI 3 (Materiality), GRI 4+ (Topic-specific)
  - Auto-populate with GreenLedger data where applicable
- **TCFD (Task Force on Climate-related Financial Disclosures)**
  - Governance, Strategy, Risk Management, Metrics & Targets
- **CDP Climate Questionnaire**
  - Pre-filled with GreenLedger baseline emissions and reduction targets
- **EU Taxonomy Regulation**
  - Alignment assessment: Proportion of turnover/capex in taxonomy-eligible activities
  - Do-no-significant-harm (DNSH) assessment
- **Corporate Sustainability Reporting Directive (CSRD)**
  - Double materiality assessment integration
  - Reporting periods, scope, methodology

**Report Customization:**
- Drag-and-drop section ordering
- Include/exclude optional sections
- Add custom sections (free text, embedded charts)
- Branding: insert company logo, colors, custom fonts
- Data review: verify all metrics before export (tCO2e, targets, benchmarks, qualitative disclosures)

**Export Options:**
- PDF (formatted for printing/distribution)
- Excel workbook (data tables, charts, breakdowns)
- HTML (web-ready, shareable link)
- CSV (raw data for external tools)

**Report History:**
- Versioning: store all generated reports with version notes and date
- Comparison tool: view changes between report versions
- Archival and retention (for audit trails)

**Report Preview:**
- Live preview of generated PDF while in editor
- Side-by-side view of template and populated content

**Layout:**
- Left: template selector, outline of selected template sections
- Center: drag-to-reorder sections, edit content inline
- Right: live preview panel
- Top: export button, save as draft, version history

---

### 8. Benchmark & Peers

**Purpose:** Contextualize company's emissions performance against industry standards and peer companies.

**Key Benchmarks Displayed:**
- **Your Emissions vs. Industry Average:**
  - Metric: tCO2e per employee, tCO2e per € revenue, tCO2e per unit produced (if applicable)
  - Visual: horizontal bar chart comparing your company (highlighted), industry average, and best-in-class performer
  - Percentile ranking: "You rank in the top 25% of your industry"

- **Market Ranking:**
  - Table or ranking list of peers in same industry, sorted by emissions intensity
  - Your company highlighted
  - Filter by region, company size, sub-sector

- **Scope-Specific Comparison:**
  - Side-by-side comparison of Scope 1, 2, 3 intensities vs. peers
  - Identify where company is strongest/weakest relative to peers

- **Trend Analysis:**
  - Line chart: your company's emissions intensity trend vs. industry trend
  - Show if you're improving faster/slower than average

- **SBTi Adoption:**
  - Percentage of peers with science-based targets
  - Your target alignment status vs. peer adoption

**Improvement Recommendations:**
- AI-generated suggestions: "Peers in your sector have reduced Scope 2 emissions by avg. 18% in past 3 years through renewable energy procurement. Consider renewable PPAs."
- Actionable benchmarking data by category (energy, travel, supply chain, waste)

**Data Sources:**
- Anonymous peer data (opt-in from GreenLedger user base)
- Public ESG databases (e.g., Bloomberg, MSCI, RobecoSAM)
- Industry reports and averages (e.g., Carbon Trust, EPA, DEFRA)

**Caveats & Transparency:**
- Clear disclosure of benchmark data sources and calculation methodologies
- Definitions of peer groups (industry NACE code, company size, region filters)
- Timestamp: "Benchmarks updated January 2026 from X companies in your sector"

**Layout:**
- Top: your emissions intensity metric selector and peer group filters
- Left: benchmark comparison charts (your vs. industry average/best-in-class)
- Center: market ranking table
- Right: trend analysis and recommendations panel

---

### 9. Data Sources & Integrations

**Purpose:** Manage connections to external data providers and track data quality.

**Connected Data Sources Table:**
- **Columns:**
  - Source Name (e.g., "EDF Energy API," "Concur Expense Manager," "Scope 3 Supplier Survey")
  - Category (Utility, Travel, Supplier, Waste Management, Custom)
  - Connection Status (Connected, Disconnected, Error, Pending Reauth)
  - Last Synced (date/time)
  - Data Quality Score (% complete, accuracy, freshness) — visual indicator (green/amber/red)
  - Records Imported (number of data points from this source)
  - Actions (reconnect, settings, delete)

**Integration Management:**
- **Add New Integration:**
  - Browse catalog of pre-built connectors (utility APIs, travel platforms, expense systems, supplier databases)
  - OAuth/API key authentication flow
  - Field mapping (if needed): match external data columns to GreenLedger categories
  - Test connection before confirming
  - Schedule auto-sync frequency (daily, weekly, monthly)

- **Popular Integrations:**
  - Utility providers: EDF Energy, Engie, etc. (EU-specific)
  - Travel: Concur, Expensify, Airbnb, Booking.com, airline APIs
  - Expense management: Ramp, Brex, Xero, QuickBooks
  - Supplier platforms: Supplify, Arval (fleet management)
  - Internal ERP/HRIS: SAP, Oracle, Workday (custom)

**Manual Upload Fallback:**
- CSV upload template with pre-defined columns (date, category, value, unit, source)
- Drag-and-drop interface, validation on import (check data types, ranges)
- Historical bulk upload for backfilling data
- Monthly upload schedule for data sources without API

**Data Quality Score:**
- Composite metric combining:
  - **Completeness:** % of months with data vs. expected
  - **Accuracy:** % of records passing validation checks
  - **Freshness:** days since last update (current data = 100%, older data = lower score)
- Red flag: missing data for >1 month, duplicate records, outliers
- Recommendations: "Reconnect Concur API (disconnected 3 days ago)" or "Request missing March energy data from facilities team"

**Data Source Settings:**
- Sync frequency (daily, weekly, monthly)
- Date range for auto-sync (e.g., past 12 months)
- Category/scope assignment (which GreenLedger categories map to this source)
- Notifications (alert on connection failure, anomalies, missing data)

**Layout:**
- Top: "Connected Sources" count, overall data quality score
- Left: source list, status indicators, filtering options
- Center: source details and settings
- Right: data quality trend chart, import history log

---

### 10. Settings

**Purpose:** Configure company profile, team access, reporting preferences, and global emissions factors.

**Sections:**

**Company Profile:**
- Company name, legal name, VAT ID, country, industry (NACE code)
- Headquarters address, facilities list (multi-site management)
- Number of employees, annual revenue (optional, for benchmarking)
- Reporting year (calendar, fiscal, or custom)
- Logo upload (for reports)
- Edit permissions (admin only)

**Team Access & Permissions:**
- User list with columns: Name, Email, Role, Last Login, Status
- Roles: Admin (full access), Manager (view/edit emissions, create reports), Contributor (log entries), Viewer (read-only)
- Add team members: invite email, assign role
- Bulk user import (CSV)
- Deactivate users (retain their data)
- Single sign-on (SSO) setup option (for Enterprise tier)

**Emissions Factors Library:**
- **Default values:**
  - Grid emission factor (gCO2e/kWh) — pre-loaded by country/region, updatable
  - Flight emission factors (by distance class)
  - Car emission factors (by fuel type)
  - Industry-specific emission factors (for Scope 3, by NACE category)
- **Custom factors:**
  - Option to override defaults per company
  - Track versions and change history
- **Sources:** show methodology and data source (e.g., IPCC, EPA, IVL Swedish Environmental Research Institute)

**Notification Preferences:**
- Email notification schedule:
  - Data collection reminders (frequency: weekly, monthly)
  - Reporting deadline alerts (x days before due date)
  - Anomaly alerts (on detection)
  - Monthly emissions summary (optional digest)
  - Team activity notifications (optional)
- Notification recipients (which team members receive which alerts)

**Export & Data:**
- Request all company data export (GDPR)
- Data retention policy (store data for X years, then auto-delete or archive)
- Historical data backup & restore option

**Integrations Management (alternative location):**
- List of active integrations with quick settings access
- Manage auth tokens, reconnect, test connections

**Billing & Subscription (if admin):**
- Current plan, renewal date, invoice history
- Payment method on file
- Upgrade/downgrade plan, add-on features
- Contacts for billing inquiries

**Advanced Settings (Admin only):**
- SCIM provisioning (for SSO)
- Webhooks for custom integrations
- API key management (for custom integrations)
- Audit log (view all user actions, changes)

**Layout:**
- Left: navigation menu (tabs or accordion)
- Center: selected section settings
- Right: help text, support contact link

---

## Mobile App (20 Screens)

### Screen Overview

1. **Splash Screen** — Logo, brand name, loading indicator
2. **Onboarding Flow 1** — "Why Carbon Tracking Matters" — educational card with image, headline, description
3. **Onboarding Flow 2** — Company setup wizard — company name, industry, employees
4. **Home/Dashboard** — Carbon footprint summary card, reduction target ring, quick stats, quick action buttons
5. **Quick Log Entry Screen** — Prompt user to add emission source, category buttons
6. **Category Selector** — Buttons for Energy, Travel, Waste, Supply Chain, Custom
7. **Entry Form - Energy** — Inputs for electricity/gas consumption, unit selector, save/cancel
8. **Entry Form - Travel** — Flight/car/rail inputs, distance/duration, calculation
9. **Entry Form - Waste** — Waste type, quantity, unit
10. **Submission Confirmation** — "Entry saved! This adds X tCO2e to your footprint" — celebration micro-animation
11. **Emissions Trend Chart** — Line chart of total monthly emissions over past 12 months
12. **Scope Breakdown Pie Chart** — Pie chart: Scope 1/2/3 proportions, tap for details
13. **Reduction Targets List** — Cards for each target, progress bar, status (on track/at risk)
14. **Target Detail Screen** — Full target info, forecast chart, milestone timeline
15. **Offset Marketplace Browse** — Scrollable card deck of offset projects, images, basic info
16. **Offset Project Detail** — Project image, description, impact, cost, purchase button
17. **ESG Score Card** — Large score display (0–100), interpretation, "Share" button (screenshot or link)
18. **Report Status & Deadlines** — Cards for upcoming regulatory deadlines, status indicators
19. **Notifications** — List of alerts: data collection reminders, deadline approaching, anomaly detected
20. **Profile & Settings** — User profile edit, team info, notification prefs, logout

---

## Technical & Data Requirements

### Key Data Models
- **Company:** profile, employees, revenue, locations
- **EmissionEntry:** date, category, value, unit, scope assignment, supporting docs
- **ReductionTarget:** baseline, goal, target date, milestone, progress tracking
- **OffsetProject:** metadata, pricing, location, verification standard
- **Supplier:** contact, emissions data, score, data collection requests
- **User:** email, role, permissions, notification prefs

### Integrations & APIs
- OAuth integrations: utility providers (EDF, Engie), travel platforms (Concur, Expensify), expense systems
- Payment: Stripe for offset purchases
- PDF export: ReportLab or similar
- Maps: Mapbox (offset project locations)
- Authentication: JWT, SSO/SAML support

### Compliance & Standards
- GDPR data handling (EU user data)
- ISO 14064-2 carbon accounting methodology
- GHG Protocol Standard (Scope 1/2/3 definitions)
- CSRD reporting alignment
- SOC 2 security certification (for Enterprise customers)

---

## Success Metrics & KPIs

- **User Adoption:** Active companies, team members inviting colleagues
- **Data Quality:** Avg. data quality score per company, % of emissions from integrated sources (vs. manual)
- **Report Generation:** Number of reports exported per month, compliance certifications achieved
- **Engagement:** Monthly active users, frequency of data entry, dashboard visits
- **Retention:** Monthly/annual churn rate, net revenue retention
- **Impact:** Total tCO2e tracked, aggregate reduction commitments, offset tonnes purchased

---

## Roadmap & Future Enhancements

### Phase 1 (MVP Launch)
- Core dashboard (ESG Overview, Carbon Calculator, Emissions Explorer)
- Basic integrations (CSV upload, manual entry)
- Simple report export (GRI template)
- Mobile web (responsive design)

### Phase 2 (Months 3–6)
- Reduction Targets & Offset Manager
- Supply Chain Emissions module
- Native mobile app (iOS/Android)
- Advanced integrations (utility APIs, expense platforms)

### Phase 3 (Months 6–12)
- Full reporting suite (TCFD, CDP, CSRD, EU Taxonomy)
- AI-powered insights and recommendations
- Peer benchmarking & collaboration features
- Science-based target framework alignment

### Future Enhancements (Year 2+)
- Carbon accounting via blockchain for verification
- Real-time IoT sensor integration (smart meters, fleet tracking)
- Supply chain collaboration platform (multi-tier supplier engagement)
- Sustainability marketplace (offset projects, verified carbon credits)

---

## Success Criteria (MVP Launch)

- Launch in Netherlands and Germany by Q2 2026
- Achieve 50+ active companies within 6 months
- 95%+ data quality score across integrated sources
- Generate 100+ regulatory-compliant reports
- Net Promoter Score (NPS) > 50
- Customer acquisition cost (CAC) payback within 12 months
