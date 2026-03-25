import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calendar, Download, ArrowUpRight, ArrowDownRight, Wind } from "lucide-react";

export default function Dashboard() {
  const pieData = [
    { name: "Scope 1", value: 412, color: "var(--color-brand-green)" },
    { name: "Scope 2", value: 1065, color: "#FBBF24" },
    { name: "Scope 3", value: 1363, color: "#38BDF8" },
  ];

  const areaData = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1150 },
    { name: "Mar", total: 1250 },
    { name: "Apr", total: 1750 },
    { name: "May", total: 1700 },
    { name: "Jun", total: 2840 },
  ];

  const scorecardData = [
    { company: "Logistics Partner A", score: "+66.8", impact: "-564.5", status: "good" },
    { company: "Energy Provider", score: "-24.6", impact: "672.2", status: "bad" },
    { company: "Manufacturing Co.", score: "+44.6", impact: "800.2", status: "good" },
    { company: "Tech Services", score: "+55.6", impact: "-321.3", status: "good" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h2 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">
            Overview
          </h2>
          <p className="text-slate-500 text-sm mt-1">Real-time carbon accounting and sustainability metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white border-slate-200 text-slate-700 h-10 px-4 rounded-xl font-medium shadow-sm">
            <Calendar className="w-4 h-4 mr-2 text-slate-500" />
            YTD 2024
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-10 px-5 rounded-xl font-medium shadow-sm border-0">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          
          {/* Main Hero Metric + Graph */}
          <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-6 lg:p-8 bg-slate-50/50 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                  <Wind className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-slate-500 font-medium text-sm mb-1">Total Carbon Footprint</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold font-heading text-slate-900 tracking-tighter">2,840</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-md text-sm">
                    <ArrowDownRight className="w-4 h-4" /> 2.5%
                  </span>
                  <span className="text-slate-500 text-sm">vs last year</span>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 h-[300px] lg:h-auto min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#059669" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <Tooltip cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="total" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" activeDot={{ r: 6, fill: "#059669", stroke: "#fff", strokeWidth: 2 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Table */}
          <Card className="border-slate-200 shadow-sm rounded-2xl flex-1">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="text-lg font-heading text-slate-800">Supply Chain Partners</CardTitle>
              <CardDescription>Top contributors to your overall footprint</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 font-medium bg-slate-50/80">
                    <tr>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider">Organization</th>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider">Impact Ratio</th>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider">ESG Score Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {scorecardData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-slate-800">{row.company}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">{row.impact} tCO2e</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${row.status === 'good' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                            {row.status === 'good' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {row.score}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-4 flex flex-col gap-6">

          {/* ESG Score Mini Card */}
           <Card className="border-slate-200 shadow-sm rounded-2xl bg-slate-900 border-0 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-32 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <CardContent className="p-6 relative z-10">
              <p className="text-slate-400 text-sm font-medium mb-1">Corporate ESG Score</p>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-5xl font-bold font-heading tracking-tighter text-white">61</span>
                <span className="text-slate-400 text-lg mb-1">/ 100</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '61%' }}></div>
              </div>
              <p className="text-emerald-400 text-xs font-medium">Strong profile (+4 points from Q2)</p>
            </CardContent>
          </Card>

          {/* Scope Breakdown list */}
          <Card className="border-slate-200 shadow-sm rounded-2xl flex-1 flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-heading text-slate-800">Emissions by Scope</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-4">
              
              <div className="h-[220px] w-full relative mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                      cornerRadius={6}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} tCO2e`} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Scope 3 </span>
                    <span className="font-bold text-slate-900">1,363 <span className="text-slate-400 font-normal">tCO2e</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#38BDF8] h-full rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Scope 2 </span>
                    <span className="font-bold text-slate-900">1,065 <span className="text-slate-400 font-normal">tCO2e</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#FBBF24] h-full rounded-full" style={{ width: '37%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Scope 1 </span>
                    <span className="font-bold text-slate-900">412 <span className="text-slate-400 font-normal">tCO2e</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-green h-full rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
