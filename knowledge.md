# GreenLedger - Domain Knowledge & Reference Guide

## Domain Overview

**Category:** ESG (Environmental, Social, Governance) reporting, carbon accounting, corporate sustainability

GreenLedger operates at the intersection of environmental science, financial reporting, and enterprise data management. The product is built on internationally recognized carbon accounting standards and emerging EU regulatory frameworks designed to drive corporate climate action.

---

## Core Terminology & Definitions

### Carbon Accounting & Emissions

**tCO2e** — Tonnes of CO2 equivalent. Standard unit for measuring greenhouse gas emissions. Converts all GHGs (methane, nitrous oxide, etc.) into CO2 equivalency using global warming potential (GWP) factors.

**Carbon Footprint** — Total GHG emissions produced directly and indirectly by a company's operations and value chain over a defined period (typically 1 calendar year).

**Scope 1 Emissions** — Direct emissions from owned or controlled sources:
- Fuel combustion in owned vehicles, boilers, generators
- Process emissions from manufacturing
- Fugitive emissions from equipment leaks
- Livestock emissions (agriculture)
- Example: GreenLedger example Nexora BV = 412 tCO2e/year

**Scope 2 Emissions** — Indirect emissions from purchased electricity, steam, heat, or cooling:
- Grid electricity consumption
- District heating/cooling
- Purchased steam
- Example: Nexora BV = 1,065 tCO2e/year (37.5% of total)

**Scope 3 Emissions** — All other indirect emissions occurring outside company control, across the value chain:
- 15 sub-categories defined by GHG Protocol:
  - Cat. 1: Purchased goods & services
  - Cat. 2: Capital goods
  - Cat. 3: Fuel & energy-related activities
  - Cat. 4: Upstream transportation & distribution
  - Cat. 5: Waste generated in operations
  - Cat. 6: Business travel
  - Cat. 7: Employee commuting
  - Cat. 8: Upstream leased assets
  - Cat. 9: Downstream transportation & distribution
  - Cat. 10: Processing of sold products
  - Cat. 11: Use of sold products
  - Cat. 12: End-of-life treatment of sold products
  - Cat. 13: Downstream leased assets
  - Cat. 14: Franchises
  - Cat. 15: Investments
- Often largest emissions category, hardest to quantify
- Example: Nexora BV = 1,363 tCO2e/year (48% of total)

**GHG Protocol (Greenhouse Gas Protocol)** — Global standard for measuring and reporting GHG emissions:
- Developed by World Resources Institute (WRI), World Business Council for Sustainable Development (WBCSD)
- Defines Scope 1/2/3 methodology
- Most widely adopted standard globally, required for CSRD and other frameworks
- Basis for all GreenLedger calculations

**Emissions Factor** — Multiplier converting activity data into GHG emissions:
- Example: 1 kWh of UK grid electricity = 0.195 kgCO2e (2025 figure, variable annually)
- EU average: 0.365 kgCO2e/kWh (2024)
- Netherlands: 0.145 kgCO2e/kWh (2024) — low due to renewables + nuclear
- Flight: domestic ~0.255 kgCO2e/km; long-haul ~0.195 kgCO2e/km
- Varies by country, year, fuel type, distance class
- GreenLedger updates factors annually from DEFRA, IPCC, and regional agencies

**Materiality Assessment** — Identification of sustainability issues most relevant to a company and its stakeholders:
- Financial materiality: impacts on company financial performance
- Impact materiality: company's impacts on environment and society (CSRD term: "double materiality")
- GreenLedger helps surface material Scope 3 categories based on industry

**Carbon Neutral** — Emissions reduced to zero through offsets; net zero actual emissions not yet achieved.

**Net Zero** — Real emissions reductions to zero (or near-zero, max 10% offset-based); typically target year 2050 or earlier.

**Carbon Credit vs. Carbon Offset:**
- **Credit:** Tradable instrument representing 1 tCO2e reduced/removed; traded on carbon markets
- **Offset:** Emission reduction project purchased to neutralize emissions elsewhere; delivered via carbon credits

---

## Science-Based Targets (SBTs)

**SBTi (Science Based Targets initiative)** — Partnership of UNGC, CDP, WRI, WWF certifying company climate targets:
- Validates alignment with climate science (1.5°C, 2°C pathways per IPCC)
- Gold standard for corporate climate commitments
- GreenLedger flags targets aligned with 1.5°C pathway
- SBTi adoption: ~3,400 companies committed globally (2025), growing in Europe

**SBT Pathways:**
- **1.5°C pathway:** ~50% Scope 1+2 reduction by 2030 (from 2020 baseline); net-zero by 2045–2050
- **2°C pathway:** ~30% Scope 1+2 reduction by 2030; net-zero by 2070
- **Net-zero pathway:** Requires 90%+ real reduction + 10% offset; target date 2050 or earlier

---

## EU Regulatory Context

### CSRD (Corporate Sustainability Reporting Directive)
- **Scope:** Mandatory for large EU companies (>250 employees, >€50M revenue, or >€25M assets) from 2025
- **Timeline:** 2025 reporting (FY2024), 2026 report publication; phased in 2025–2028 for SMEs
- **Requirements:**

  - Double materiality assessment (financial + impact materiality)
  - Scope 1/2/3 emissions disclosure with targets
  - Climate risk scenario analysis
  - ESG assurance (third-party audit) required by 2026 reporting
  - Annual sustainability report required (integrated or separate from financial)
- **Netherlands:** 18,000+ companies currently scoped (2025), largest EU reporting requirement
- **GreenLedger alignment:** CSRD-ready templates, double materiality guidance, target validation

### EU Taxonomy Regulation
- **Scope:** Framework classifying economic activities as "environmentally sustainable"
- **Coverage:** Climate change mitigation, adaptation, water/marine, circular economy, pollution, biodiversity
- **Climate focus:** 72 technical screening criteria for mitigation activities
- **Requirement:** Large EU companies must disclose % of turnover/capex/opex in taxonomy-eligible activities
- **Exemption:** Eligible if <€25M turnover (microenterprises exempt from CSRD compliance)
- **GreenLedger alignment:** EU Taxonomy report template, alignment assessment

### SFDR (Sustainable Finance Disclosure Regulation)
- **Scope:** Financial institutions managing assets >€500M required to disclose principal adverse impacts (PAIs)
- **PAIs relevant to GreenLedger users:** GHG emissions intensity, energy consumption, biodiversity impact
- **Implication:** Large company investors (asset managers, pension funds) mandate ESG data from portfolio companies
- **GreenLedger alignment:** ESG report exports for investor disclosure, verified data trust score

### CBAM (Carbon Border Adjustment Mechanism)
- **Scope:** EU tariff on imports of high-carbon goods (cement, steel, aluminum, fertilizers, electricity, organic chemicals)
- **Purpose:** Prevent "carbon leakage" (offshoring of production to avoid EU carbon price)
- **Timeline:** Reporting phase 2023–2025, tariff phase begins 2026
- **Implication:** EU manufacturers must track embodied carbon in inputs to optimize CBAM exposure
- **GreenLedger alignment:** Scope 3 emissions categorization, supplier tracking, carbon reduction recommendations

### Dutch & Nordic Leadership

**Netherlands:**
- **Dutch Climate Agreement (2018):** 49% emissions reduction by 2030 (vs. 1990 baseline)
- **SER Energy Agreement:** Covers 50% of industrial emissions; voluntary agreements with energy-intensive industries
- **Tax incentives:** Energy Investment Allowance (EIA), Accelerated Capital Depreciation (VIA) for renewables
- **Green Finance Taxonomy:** Dutch banks (ING, ABN AMRO, Rabobank) lead sustainable finance integration
- **Data culture:** Strong digital infrastructure, high renewable penetration (30%+ grid), tech-savvy workforce
- **Primary market for GreenLedger MVP launch (Q2 2026)**

**Germany:**
- **Federal Climate Protection Act:** 65% reduction by 2030, all sectors mandated
- **Supply Chain Due Diligence Act:** Requires emissions tracking across supply chain
- **Energy transition (Energiewende):** 80% renewables by 2030
- **Manufacturing base:** Large Scope 1 & 3 footprints, high carbon accounting maturity

**Nordics (Denmark, Sweden):**
- **Early SBTi adoption:** 30%+ of large companies, net-zero commitments
- **Carbon pricing:** Nordic carbon markets highly developed; integrated climate reporting standard
- **ESG data maturity:** High voluntary disclosure, strong investor pressure

---

## Key Personas & Use Cases

### Persona 1: Sustainability Manager / ESG Manager
- **Background:** 5–15 years environmental compliance experience; may lack formal accounting training
- **Goals:** Track company emissions, identify reduction opportunities, ensure regulatory compliance, manage CSRD/GRI reporting
- **Pain Points:** Fragmented data sources (energy bills, travel expense reports, supplier data scattered across teams); manual spreadsheets; hard to verify data quality
- **GreenLedger Usage:** Daily (data entry, dashboard monitoring), weekly (team syncs, report prep), monthly (report generation)
- **KPIs They Care About:** Emissions by scope, tCO2e per employee, on-track status vs. targets, report deadline compliance

### Persona 2: CFO / Finance Director
- **Background:** Financial accounting, strategic business planning, investor relations focus
- **Goals:** Understand financial risks from climate transition (stranded assets, carbon tax exposure), satisfy investor ESG demands, integrate sustainability into business strategy
- **Pain Points:** ESG data scattered across operations teams; hard to connect to financial metrics; unclear return on sustainability investments
- **GreenLedger Usage:** Monthly (executive dashboard review), quarterly (board reporting), annual (investor communications)
- **KPIs They Care About:** Emissions intensity (tCO2e/€ revenue), carbon tax/CBAM exposure, investor ESG questions answered, cost of offset purchases, decarbonization capex ROI

### Persona 3: ESG Reporting Officer / Investor Relations
- **Background:** Communications, investor relations, sometimes finance or compliance
- **Goals:** Create accurate, auditable ESG disclosures for investors; respond to CDP, MSCI, Bloomberg ESG questionnaires; achieve ESG ratings improvement
- **Pain Points:** Investor questionnaires demand real-time data; manual compilation from multiple sources; hard to explain methodology to auditors
- **GreenLedger Usage:** Weekly (data updates, anomaly review), monthly (questionnaire response), quarterly (interim reporting), annual (external audit prep)
- **KPIs They Care About:** CSRD compliance completion %, ESG disclosure audit readiness, investor questionnaire response accuracy, ESG rating rank

### Persona 4: Operations Manager / Facility Manager
- **Background:** Logistics, supply chain, manufacturing, facilities management
- **Goals:** Reduce energy costs and emissions from operations; optimize travel spending; engage suppliers on sustainability
- **Pain Points:** Energy bills overwhelming; hard to benchmark facility efficiency; supplier compliance tracking manual
- **GreenLedger Usage:** Bi-weekly (data entry: energy, waste, travel); monthly (facility benchmarking); quarterly (supplier engagement)
- **KPIs They Care About:** kWh reduction, fuel/travel spend, supplier engagement rate, facility emissions intensity (tCO2e per m² or per production unit)

---

## Dummy Data: Nexora BV (Reference Company)

**Company Profile:**
- **Name:** Nexora BV
- **Location:** Netherlands (headquarters in Amsterdam, manufacturing facility in Almelo)
- **Industry:** Precision manufacturing + software development (NACE 28.11 + 62.01)
- **Size:** 250 employees (200 manufacturing, 50 software)
- **Revenue:** €18M/year (2024)
- **Reporting Year:** Calendar (Jan–Dec)

**Emissions Footprint (2024 baseline):**
- **Total:** 2,840 tCO2e/year
- **Scope 1:** 412 tCO2e (14.5%)
  - Natural gas heating facility: 180 tCO2e
  - Company vehicle fleet (10 cars, 8 vans): 195 tCO2e
  - Compressed air leaks & refrigerant: 37 tCO2e
- **Scope 2:** 1,065 tCO2e (37.5%)
  - Grid electricity: 2,850 MWh @ 0.365 kgCO2e/kWh = 1,040 tCO2e
  - Streaming video for online training: 25 tCO2e
- **Scope 3:** 1,363 tCO2e (48%)
  - Business flights (staff): 420 tCO2e
  - Employee commuting: 290 tCO2e
  - Purchased materials (metal, electronics): 450 tCO2e
  - Shipping/logistics: 180 tCO2e
  - Waste (5 tonnes hazardous, 20 tonnes general): 23 tCO2e

**Intensity Metrics:**
- tCO2e per employee: 11.4
- tCO2e per € revenue: 0.158

**Reduction Targets (4 sample):**

1. **Target A: "50% Scope 1+2 Reduction by 2030"**
   - Baseline: 1,477 tCO2e (Scope 1+2, 2024)
   - Goal: 738 tCO2e by Dec 31, 2030
   - Status: On track (15% reduction achieved in 2024 via solar install + EV fleet transition)
   - Science-based: 1.5°C aligned (SBTi pending review)
   - Interim milestones: 2025: 20%, 2027: 35%, 2030: 50%

2. **Target B: "Net-Zero Scope 1 by 2028"**
   - Baseline: 412 tCO2e (Scope 1, 2024)
   - Goal: 0 tCO2e by Dec 31, 2028 (via electrification + biogas)
   - Status: At risk (electrification cost overruns pushing timeline)
   - Interim: 2026: 60% reduction, 2027: 80%, 2028: 100%

3. **Target C: "Scope 3 Flight Emissions -40% by 2030"**
   - Baseline: 420 tCO2e (business flights, 2024)
   - Goal: 252 tCO2e by 2030 (via video conferencing, rail for EU travel)
   - Status: On track (10% reduction in 2024)
   - Interim: 2025: 15%, 2026: 25%, 2028: 35%, 2030: 40%

4. **Target D: "Scope 3 Supply Chain Engagement: 80% Supplier Emissions Visibility by 2026"**
   - Baseline: 35% supplier emissions reported (2024)
   - Goal: 80% by Dec 31, 2026
   - Status: On track (12 suppliers engaged; 45% now reporting)
   - Method: Pre-built supplier questionnaire, SBTi alignment incentive

**Carbon Offsets (3 projects purchased):**

1. **"Rondônia Forest Protection" (Verra VCS Gold Standard)**
   - Type: Reforestation / REDD+ (reduced deforestation)
   - Location: Amazon, Brazil
   - Tonnes purchased: 500 tCO2e (2024)
   - Cost: €12.50/tonne = €6,250 total
   - Certification: Verra VCS (Verified Carbon Standard), Gold Standard for biodiversity
   - Impact: Protects 150 hectares rainforest, supports 12 indigenous families
   - Retirement scheduled: Dec 2024 (offsets Scope 3 air travel)

2. **"Enel Geothermal, El Salvador"**
   - Type: Renewable energy (geothermal power plant expansion)
   - Location: La Paz, El Salvador
   - Tonnes purchased: 300 tCO2e (2024)
   - Cost: €18/tonne = €5,400 total
   - Certification: Gold Standard, Verra VCS
   - Impact: Powers 3,000 households, displaces coal energy
   - Retirement scheduled: Dec 2024

3. **"Biochar Soil Carbon, Uganda"**
   - Type: Soil carbon sequestration (biochar for smallholder farms)
   - Location: Kasese District, Uganda
   - Tonnes purchased: 200 tCO2e (2025 planned purchase)
   - Cost: €22/tonne = €4,400 total
   - Certification: Gold Standard (emerging standard for ag-based carbon)
   - Impact: Improves soil health, increases crop yields, sequesters carbon 100+ years
   - Retirement scheduled: Q2 2025

**ESG Scores & Ratings (2024):**
- **GreenLedger ESG Score:** 61/100 (Strong)
  - Environmental: 68/100 (science-based targets, renewable energy adoption)
  - Social: 65/100 (fair labor practices, local community engagement)
  - Governance: 48/100 (board composition, executive pay transparency gaps)
- **MSCI ESG Rating:** BBB (pending 2025 update)
- **SBTi Status:** Targets submitted for validation (pending review vs. 1.5°C criteria)

**Regulatory Status (2025):**
- **CSRD Scope:** Yes (>250 employees, >€25M assets)
- **CSRD Reporting Deadline:** March 30, 2026 (FY2024 report due)
- **CSRD Assurance:** External audit contracted Q1 2026
- **EU Taxonomy:** ~5% of capex eligible (solar, EV fleet — other capex in non-eligible activities)
- **CBAM Risk:** Low (manufacturing not in covered sectors; downstream logistics exposure monitored)

**Team & Roles at Nexora:**
- Sarah Derksen: Sustainability Manager (GreenLedger primary user, daily access)
- Erik van Dijk: CFO (quarterly dashboard review, board reporting)
- Carla Rossini: Supply Chain Manager (supplier data entry, engagement tracking)
- Tom Hendrickx: Facilities Manager (energy data upload, facility optimization)

---

## Industry Benchmarks

### By Sector (tCO2e per employee per year, 2024 global average):

| Sector | Avg tCO2e/FTE | Range | Notes |
|--------|---------------|-------|-------|
| Technology/SaaS | 3–8 | 1–20 | Low-emission, office-based |
| Consulting | 4–12 | 2–25 | Travel-heavy, variable |
| Manufacturing (light) | 8–15 | 5–30 | Energy & transport mix |
| Manufacturing (heavy/chemicals) | 25–80 | 15–200 | Energy-intensive, Scope 1 dominant |
| Logistics/Transport | 12–40 | 5–100 | Fleet emissions dominant |
| Retail/Hospitality | 2–6 | 1–15 | Building energy primary |
| Financial Services | 2–5 | 1–10 | Office-based, low-travel |
| Real Estate/Property | 15–50 | 5–150 | Building operational & embodied carbon |
| Healthcare | 4–10 | 2–20 | Energy + medical waste |
| Construction | 10–30 | 5–80 | Equipment + transport |

**Nexora (precision manufacturing + software):** 11.4 tCO2e/FTE, within industry range (manufacturing/tech blend)

### SBTi Adoption Rates (% of large companies, 2024):
- **Europe:** 28% (highest globally)
- **Netherlands:** 35% (peer leaders: Belgium 32%, Germany 26%)
- **USA:** 18%
- **Global average:** 15%

### Scope Breakdown by Sector (typical % distribution):
- **Tech/SaaS:** Scope 1: 5%, Scope 2: 40%, Scope 3: 55% (travel, cloud infra, supply chain)
- **Manufacturing:** Scope 1: 20%, Scope 2: 35%, Scope 3: 45% (energy, materials, logistics)
- **Logistics:** Scope 1: 70%, Scope 2: 10%, Scope 3: 20% (fleet dominant)
- **Nexora:** Scope 1: 14.5%, Scope 2: 37.5%, Scope 3: 48% (mixed profile, Scope 3 rising as emissions awareness grows)

---

## Competitor Context

**Direct Competitors to GreenLedger:**

1. **Persefoni** (US, raised $650M)
   - Strengths: Enterprise-scale, AI-powered insights, deep supply chain features
   - Weaknesses: High cost, complex onboarding, US-centric (CSRD a later feature)
   - Market position: Leads in Fortune 500 segment

2. **Watershed** (US, raised $60M)
   - Strengths: Clean UI, rapid deployment, strong integrations (Slack, data warehouse focus)
   - Weaknesses: Limited Scope 3 supplier features, less emphasis on regulatory compliance
   - Market position: Growing mid-market (100–1000 employee) presence

3. **Sweep** (UK, raised $4.5M)
   - Strengths: Automated energy bill parsing, simple onboarding
   - Weaknesses: Limited reporting features, Scope 3 minimal, small team
   - Market position: SME focused, acquired by Persefoni (2023)

4. **Normative** (Sweden, raised $40M)
   - Strengths: European focus, strong CSRD compliance, AI-powered insights
   - Weaknesses: Newer product, less mature integrations, higher price point
   - Market position: Rapidly growing in Nordic/EU markets

5. **Microsoft Cloud for Sustainability** (Part of Microsoft Dynamics)
   - Strengths: Azure integration, ERP connectivity (SAP, Dynamics), global enterprise reach
   - Weaknesses: Generic tool (not specialized), expensive, requires existing Microsoft relationship
   - Market position: Dominant in large organizations already in Microsoft ecosystem

**Unique GreenLedger Positioning (differentiation):**
- **European regulatory expertise** (CSRD, EU Taxonomy focus from day 1, not retrofit)
- **Dual focus:** Data-driven + human-centered (not just API pipes; designed for Sustainability Managers to use daily)
- **Affordable pricing** (€199/month entry, vs. €5k+ for competitors) targeting mid-market EU
- **Netherlands/Europe first** (local team, local regulatory knowledge, multi-language support)
- **Science-based target validation** (integrated SBTi pathway recommendations)
- **Offset marketplace** (transparent, verified projects; not just referral to third parties)

---

## Regulatory & Compliance Checklist for Nexora (Reference)

- [ ] CSRD FY2024 report (due March 30, 2026)
  - [ ] Double materiality assessment
  - [ ] Scope 1/2/3 emissions disclosure (2024 baseline + 2023 comparative)
  - [ ] Reduction targets disclosure (4 targets documented in GreenLedger)
  - [ ] Climate risk scenario analysis (TCFD format)
  - [ ] Supply chain engagement (current: 45%, target: 80% by 2026)
  - [ ] External assurance booking (Jan 2026)

- [ ] GRI Standards reporting (voluntary, annually)
  - [ ] GRI 3: Materiality assessment
  - [ ] GRI 305: Emissions (Nexora using GreenLedger report template)
  - [ ] GRI 306: Waste

- [ ] TCFD Climate Risk Disclosure (voluntary, quarterly board reporting)
  - [ ] Governance (board oversight: quarterly ESG committee meeting)
  - [ ] Strategy (climate risk scenarios: 1.5°C, 2°C, business-as-usual)
  - [ ] Risk Management (carbon accounting, supply chain climate risk assessment)
  - [ ] Metrics & Targets (tracked in GreenLedger: 4 SBTs, ESG score)

- [ ] EU Taxonomy alignment (annual, as part of CSRD)
  - [ ] Capex calculation (€900k solar = taxonomy-eligible)
  - [ ] Revenue/opex (remainder non-eligible)

- [ ] CBAM monitoring (not yet applicable: manufacturing not in covered sectors)

- [ ] SBTi target validation (submitted, pending review Q1 2026)

---

## EU Regulatory Timeline (2025–2028)

| Date | Requirement | Nexora Action |
|------|-------------|---------------|
| March 30, 2026 | CSRD FY2024 report due | Report generated from GreenLedger, external audit |
| Dec 31, 2026 | EU Taxonomy disclosure due (CSRD report) | Included in March 2026 report |
| 2026 | CSRD assurance mandatory | External auditor engagement (Jan 2026) |
| Dec 31, 2027 | CSRD FY2026 reporting (larger companies) | Ongoing in GreenLedger |
| 2028 | SFDR reporting (if investor-faced) | Monitor investor requests |

---

## Key Learning Resources & Standards Documents

**International Standards:**
- **GHG Protocol Corporate Accounting & Reporting Standard** (gold standard, free download from ghgprotocol.org)
- **ISO 14064-2** (GHG quantification and monitoring)
- **IPCC Assessment Reports** (climate science basis for emissions factors; AR6, 2023 most recent)

**EU Regulatory Documents:**
- **CSRD Directive** (2022/2464) and Corporate Sustainability Due Diligence Directive (CSDDD)
- **ESRS (European Sustainability Reporting Standards)** (adopted July 2023, mandatory from 2025)
- **EU Taxonomy Technical Screening Criteria** (Dec 2021, climate delegated act)

**Climate Science:**
- **SBTi Corporate Net-Zero Standard** (2023) — defines 1.5°C, 2°C, net-zero pathways
- **UNFCCC NDCs (Nationally Determined Contributions)** — country climate targets (baseline for emissions factors)

**Practical Guides:**
- **Carbon Trust Supply Chain Standard** (Scope 3 methodology)
- **DEFRA Conversion Factors for Company Reporting** (annual UK/EU emissions factors)
- **Carbon Disclosure Project (CDP) Climate Questionnaire** (investor-requested disclosure format)

---

## Glossary Quick Reference

| Term | Definition |
|------|-----------|
| **Activity Data** | Quantitative measurement of operation (e.g., 1,000 kWh electricity, 50 flights) |
| **Baseline Year** | Reference year for emissions (often 2020 or 2024) against which reductions measured |
| **Biogenic Emissions** | CO2 from biological sources (e.g., biomass, food waste); often excluded or separately reported |
| **Carbon Accounting** | Process of quantifying, reporting, verifying GHG emissions per international standards |
| **Carbon Credit / Carbon Unit** | Tradable instrument representing 1 tonne CO2e; traded on compliance or voluntary markets |
| **Carbon Offset** | Emission reduction project purchased to neutralize GHG elsewhere (not prevented, but removed/reduced) |
| **Decarbonization** | Process of reducing carbon emissions, typically via efficiency, renewables, electrification |
| **Double Materiality** | CSRD term: financial materiality (impact on company) + impact materiality (company impact on environment) |
| **ESG (Environmental, Social, Governance)** | Broad framework for corporate sustainability; GreenLedger focuses on Environmental (E) |
| **Grid Emission Factor** | Intensity of GHG per unit electricity from grid (varies by country, year, fuel mix) |
| **Materiality Assessment** | Process identifying sustainability topics most relevant to company and stakeholders |
| **Net Zero** | Emissions reduced to zero (or near-zero with limited offsets); typically 2050 target |
| **Scope 1 / 2 / 3** | GHG Protocol categories (direct / indirect energy / value chain) |
| **SBT (Science-Based Target)** | Emissions reduction target aligned with climate science (1.5°C or 2°C pathway) |
| **SBTi** | Science Based Targets initiative; certifies company climate targets vs. IPCC pathways |
| **Verification Standard** | Third-party certification for carbon credits (Gold Standard, Verra VCS, Plan Vivo, etc.) |

