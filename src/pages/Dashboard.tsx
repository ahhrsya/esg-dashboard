import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calendar, Download, Leaf, Truck, Zap, Factory, TrendingUp, Search, Activity } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const pieData = [
    { name: "Scope 1 (Direct)", value: 412, color: "var(--color-brand-green)" },
    { name: "Scope 2 (Energy)", value: 1065, color: "#FBBF24" },
    { name: "Scope 3 (Chain)", value: 1363, color: "#38BDF8" },
  ];

  const areaData = [
    { name: "Jan", scope1: 200, scope2: 400, scope3: 600 },
    { name: "Feb", scope1: 300, scope2: 350, scope3: 500 },
    { name: "Mar", scope1: 250, scope2: 450, scope3: 550 },
    { name: "Apr", scope1: 400, scope2: 600, scope3: 750 },
    { name: "May", scope1: 350, scope2: 550, scope3: 800 },
    { name: "Jun", scope1: 500, scope2: 700, scope3: 900 },
    { name: "Jul", scope1: 450, scope2: 650, scope3: 850 },
  ];

  const scorecardData = [
    { company: "Logistics Partner A", score: 66.8, mentions: "3,212", impact: "-564.5" },
    { company: "Energy Provider", score: -24.6, mentions: "2,249", impact: "672.2" },
    { company: "Manufacturing Co.", score: 44.6, mentions: "2,800", impact: "800.2" },
    { company: "Tech Services", score: 55.6, mentions: "813", impact: "-321.3" },
    { company: "Office Supplies", score: 72.1, mentions: "450", impact: "-110.0" },
  ];

  const topCards = [
    { title: "Total Emissions", value: "2,840", diff: "-2.5%", isPositive: true, icon: Leaf, bg: "bg-emerald-50 text-emerald-500" },
    { title: "Scope 1 (Direct)", value: "412", diff: "+1.5%", isPositive: false, icon: Factory, bg: "bg-sky-50 text-sky-500" },
    { title: "Scope 2 (Energy)", value: "1,065", diff: "+2.5%", isPositive: false, icon: Zap, bg: "bg-amber-50 text-amber-500" },
    { title: "Scope 3 (Chain)", value: "1,363", diff: "-1.2%", isPositive: true, icon: Truck, bg: "bg-indigo-50 text-indigo-500" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
            Home Overview
          </h2>
          <p className="text-slate-500 text-sm mt-1">Track and manage your corporate carbon footprint.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white text-slate-600 shadow-sm border-slate-200 rounded-lg h-9 px-4 text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
            Last 30 Days
          </Button>
          <Button className="bg-slate-800 hover:bg-slate-700 text-white rounded-lg shadow-sm h-9 px-4 text-sm font-medium">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCards.map((card, idx) => (
          <Card key={idx} className="border-border shadow-sm rounded-xl hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <p className="text-slate-500 text-sm font-medium">{card.title}</p>
                <div className={`p-2 rounded-lg ${card.bg}`}>
                  <card.icon className="w-4 h-4" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold font-heading text-slate-800">{card.value}</span>
                <div className="flex items-center gap-2 text-xs mt-1">
                  <span className={`font-semibold flex items-center gap-0.5 ${card.isPositive ? 'text-brand-green' : 'text-rose-500'}`}>
                    <Activity className="w-3 h-3" />
                    {card.diff}
                  </span>
                  <span className="text-slate-400">vs previous period</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <Card className="border-border shadow-sm rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-lg font-heading text-slate-800">Emissions Overview</CardTitle>
              <p className="text-xs text-slate-500 mt-1">Monthly carbon footprint tracking across all scopes</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500 px-3 py-1.5 bg-slate-50 rounded-lg">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-[3px] bg-brand-green"></span> Scope 1</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-[3px] bg-[#FBBF24]"></span> Scope 2</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-[3px] bg-[#38BDF8]"></span> Scope 3</span>
            </div>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillScope1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-green)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="var(--color-brand-green)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="fillScope2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#FBBF24" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="fillScope3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                />
                <Area type="monotone" dataKey="scope3" stroke="#38BDF8" fill="url(#fillScope3)" strokeWidth={2} />
                <Area type="monotone" dataKey="scope2" stroke="#FBBF24" fill="url(#fillScope2)" strokeWidth={2} />
                <Area type="monotone" dataKey="scope1" stroke="var(--color-brand-green)" fill="url(#fillScope1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 border-border shadow-sm rounded-xl flex flex-col">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-heading text-slate-800">Emissions by Source</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="h-[200px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={65}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={6}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} tCO2e`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold font-heading text-slate-800">2.8k</span>
                <span className="text-xs text-slate-500 font-medium">Total tCO2e</span>
              </div>
            </div>
            
            <div className="w-full mt-4 space-y-3">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-600">{item.name}</span>
                  </div>
                  <span className="font-semibold text-slate-800">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-border shadow-sm rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
            <CardTitle className="text-lg font-heading text-slate-800">Value Chain Sentiment</CardTitle>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input className="w-56 pl-9 h-9 bg-slate-50 border-slate-200 rounded-lg text-sm" placeholder="Search suppliers..." />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 font-semibold uppercase bg-slate-50/50 border-b">
                  <tr>
                    <th className="px-6 py-4">Partner</th>
                    <th className="px-6 py-4">Sentiment Score</th>
                    <th className="px-6 py-4">Media Mentions</th>
                    <th className="px-6 py-4">Impact Ratio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {scorecardData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">{row.company}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${row.score > 0 ? 'bg-brand-green/10 text-brand-green' : 'bg-rose-500/10 text-rose-500'}`}>
                          {row.score > 0 ? <TrendingUp className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
                          {row.score > 0 ? `+${row.score}` : row.score}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{row.mentions}</td>
                      <td className="px-6 py-4 font-mono text-slate-600">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
