import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calendar, Upload, Leaf, Truck, Zap, Factory, MoreHorizontal, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const pieData = [
    { name: "Gas Heating (Scope 1)", value: 412, color: "var(--color-brand-green)" },
    { name: "Grid Energy (Scope 2)", value: 1065, color: "#FBBF24" },
    { name: "Supply Chain (Scope 3)", value: 1363, color: "#38BDF8" },
  ];

  const lineData = [
    { name: "Sep 10", scope1: 20, scope2: 40, scope3: 60 },
    { name: "Sep 11", scope1: 30, scope2: 35, scope3: 50 },
    { name: "Sep 12", scope1: 25, scope2: 45, scope3: 55 },
    { name: "Sep 13", scope1: 40, scope2: 60, scope3: 75 },
    { name: "Sep 14", scope1: 35, scope2: 55, scope3: 80 },
    { name: "Sep 15", scope1: 50, scope2: 70, scope3: 90 },
    { name: "Oct 16", scope1: 45, scope2: 65, scope3: 85 },
  ];

  const scorecardData = [
    { company: "Logistics Partner A", score: 66.8, mentions: "3,212", impact: "-564.5", color: "text-brand-green" },
    { company: "Energy Provider", score: -24.6, mentions: "2,249", impact: "672.2", color: "text-rose-500" },
    { company: "Manufacturing Co.", score: 44.6, mentions: "2,800", impact: "800.2", color: "text-brand-green" },
    { company: "Tech Services", score: 55.6, mentions: "813", impact: "-321.3", color: "text-brand-green" },
  ];

  const topCards = [
    { title: "Total Emissions", value: "2,840", diff: "-2.5%", isPositive: true, icon: Leaf, bg: "bg-emerald-100", text: "text-brand-emerald" },
    { title: "Scope 1 (Direct)", value: "412", diff: "+1.5%", isPositive: false, icon: Factory, bg: "bg-sky-100", text: "text-sky-500" },
    { title: "Scope 2 (Energy)", value: "1,065", diff: "+2.5%", isPositive: false, icon: Zap, bg: "bg-amber-100", text: "text-amber-500" },
    { title: "Scope 3 (Chain)", value: "1,363", diff: "-1.2%", isPositive: true, icon: Truck, bg: "bg-indigo-100", text: "text-indigo-500" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
            Hello Robert Burner 👋
          </h2>
          <p className="text-slate-500 text-sm mt-1 tracking-tight">Maintain your business insight to achieve a sustainable environment</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white text-slate-600 shadow-sm border-slate-200 rounded-xl h-10 px-4 font-medium">
            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
            Sep 10, 2024 - Sep 19, 2024
          </Button>
          <Button className="bg-brand-green hover:bg-brand-emerald text-white rounded-xl shadow-sm h-10 px-6 font-medium">
            <Upload className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCards.map((card, idx) => (
          <Card key={idx} className="border-border shadow-sm rounded-2xl">
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${card.bg} ${card.text}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-800 tracking-tight">{card.value}</span>
                  <span className={`text-xs font-semibold mb-1 ${card.isPositive ? 'text-brand-green' : 'text-rose-500'}`}>
                    {card.diff}
                  </span>
                </div>
                <p className="text-slate-500 text-[13px] font-medium mt-0.5">{card.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-heading text-slate-800">Emissions Trending</CardTitle>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-brand-green"></span> Scope 1</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber-400"></span> Scope 2</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-sky-400"></span> Scope 3</span>
            </div>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  cursor={{ stroke: '#94A3B8', strokeWidth: 1, strokeDasharray: '5 5' }}
                />
                <Line type="monotone" dataKey="scope1" stroke="var(--color-brand-green)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="scope2" stroke="#FBBF24" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="scope3" stroke="#38BDF8" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1 border-border shadow-sm rounded-2xl flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <CardTitle className="text-lg font-heading text-slate-800">Carbon Emission Analysis</CardTitle>
            <MoreHorizontal className="w-5 h-5 text-slate-400 cursor-pointer" />
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center pb-8">
            <div className="h-[220px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={70}
                    outerRadius={95}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={4}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} tCO2`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-slate-800">2.8k</span>
                <span className="text-xs text-slate-500 font-medium">tCO2e</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border shadow-sm rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <CardTitle className="text-lg font-heading text-slate-800">ESG Scorecard</CardTitle>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input className="w-64 pl-9 h-9 bg-slate-50 border-slate-200 rounded-lg text-sm" placeholder="Search..." />
            </div>
            <Button className="h-9 px-6 bg-brand-green hover:bg-brand-emerald text-white shadow-sm rounded-lg font-medium">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 font-semibold uppercase bg-slate-50/50 border-b">
                <tr>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Sentiment</th>
                  <th className="px-6 py-4">Mentions</th>
                  <th className="px-6 py-4">Impact Scorecard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {scorecardData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{row.company}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-sm ${row.score > 0 ? 'bg-brand-green' : 'bg-rose-500'}`}></span>
                        <span className="font-mono font-medium">{row.score > 0 ? `+${row.score}` : row.score}</span>
                      </div>
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
  );
}
