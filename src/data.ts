export const NEXTORA_DATA = {
  overview: {
    total: 2840,
    scope1: { tco2e: 412, percent: 14.5, color: "#EF4444" },
    scope2: { tco2e: 1065, percent: 37.5, color: "#F59E0B" },
    scope3: { tco2e: 1363, percent: 48, color: "#3B82F6" },
    esgScore: 61,
    target2030: { current: 2840, goal: 1420, percent: 50 },
  },
  deadlines: [
    { name: "CSRD Report", date: "March 30, 2026", status: "In Progress" },
    { name: "CDP Response", date: "August 1, 2026", status: "Not Started" },
    { name: "GRI Report", date: "December 15, 2026", status: "Not Started" },
  ],
  targets: [
    { id: "A", name: "50% Scope 1+2 Reduction", baseline: 1477, goal: 738, status: "On Track", progress: 68, year: 2030 },
    { id: "B", name: "Net-Zero Scope 1", baseline: 412, goal: 0, status: "At Risk", progress: 40, year: 2028 },
    { id: "C", name: "Scope 3 Flight Emissions -40%", baseline: 420, goal: 252, status: "On Track", progress: 10, year: 2030 },
    { id: "D", name: "Supply Chain Engagement: 80%", baseline: 35, goal: 80, status: "On Track", progress: 45, year: 2026 },
  ],
  offsets: [
    { id: 1, name: "Rondônia Forest Protection", type: "Reforestation", location: "Amazon, Brazil", cost: 12.5, purchased: 500, tags: ["Biodiversity", "Livelihood"], image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Enel Geothermal", type: "Renewable energy", location: "El Salvador", cost: 18, purchased: 300, tags: ["Renewable", "Community"], image: "https://images.unsplash.com/photo-1548611716-e522383c3cce?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Biochar Soil Carbon", type: "Soil carbon", location: "Uganda", cost: 22, purchased: 0, tags: ["Agriculture", "Long-term"], image: "https://images.unsplash.com/photo-1605371720490-b19b25110eb9?auto=format&fit=crop&q=80&w=600" },
  ],
  hierarchy: [
    { name: "Scope 1 (Direct)", color: "#EF4444", children: [{ name: "Gas Heating", size: 180 }, { name: "Vehicle Fleet", size: 195 }, { name: "Refrigerant", size: 37 }] },
    { name: "Scope 2 (Energy)", color: "#F59E0B", children: [{ name: "Grid Electricity", size: 1040 }, { name: "Video Streaming", size: 25 }] },
    { name: "Scope 3 (Value Chain)", color: "#3B82F6", children: [{ name: "Business Flights", size: 420 }, { name: "Purchased Materials", size: 450 }, { name: "Employee Commuting", size: 290 }, { name: "Shipping/Logistics", size: 180 }, { name: "Waste", size: 23 }] },
  ],
  suppliers: [
    { id: "S1", name: "TechParts GmbH", category: "Raw Materials", scope3: 120, status: "Complete", score: 85, date: "2024-03-20" },
    { id: "S2", name: "EuroLogistics BV", category: "Logistics", scope3: 85, status: "Pending", score: 0, date: "2024-03-10" },
    { id: "S3", name: "CloudServe Ltd", category: "Services", scope3: 45, status: "Complete", score: 92, date: "2024-03-22" },
    { id: "S4", name: "SteelWorks AG", category: "Manufacturing", scope3: 200, status: "No Response", score: 0, date: "2024-02-15" },
  ],
  benchmarks: [
    { name: "Nexora BV (You)", value: 11.4 },
    { name: "Industry Average", value: 15.0 },
    { name: "Top Performer", value: 8.5 },
  ],
  integrations: [
    { id: "I1", name: "EDF Energy API", category: "Utility", status: "Connected", sync: "2 hours ago", records: 425 },
    { id: "I2", name: "Concur Expense", category: "Travel", status: "Error", sync: "3 days ago", records: 108 },
    { id: "I3", name: "Scope 3 Supplier Survey", category: "Supplier", status: "Connected", sync: "1 day ago", records: 56 },
  ]
};
