import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NEXTORA_DATA } from "@/data";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function Dashboard() {
  const { overview, deadlines } = NEXTORA_DATA;

  const chartData = [
    { name: "Scope 1", value: overview.scope1.tco2e, color: overview.scope1.color },
    { name: "Scope 2", value: overview.scope2.tco2e, color: overview.scope2.color },
    { name: "Scope 3", value: overview.scope3.tco2e, color: overview.scope3.color },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-semibold">ESG Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Total Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-6xl font-mono font-bold text-foreground">
                {overview.total.toLocaleString()}
              </div>
              <div className="text-muted-foreground mt-2 font-mono">tCO2e / year</div>
            </div>
            
            <div className="w-full h-64 md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} tCO2e`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ESG Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[256px]">
            <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-brand-green/20">
              <div 
                className="absolute inset-0 rounded-full border-8 border-brand-green border-t-transparent" 
                style={{ transform: "rotate(-45deg)" }}
              />
              <div className="text-4xl font-mono font-bold text-brand-green">
                {overview.esgScore}
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-brand-green">Strong ESG profile</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 col-span-1 md:col-span-3">
          {[
            { title: "Scope 1 (Direct)", data: overview.scope1 },
            { title: "Scope 2 (Energy)", data: overview.scope2 },
            { title: "Scope 3 (Chain)", data: overview.scope3 }
          ].map((scope, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-heading font-medium text-muted-foreground">{scope.title}</h4>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-mono font-bold" style={{ color: scope.data.color }}>
                        {scope.data.tco2e}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">tCO2e</span>
                    </div>
                  </div>
                  <Badge variant="outline" style={{ borderColor: scope.data.color, color: scope.data.color }}>
                    {scope.data.percent}%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="col-span-1 md:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {deadlines.map((deadline, i) => (
                <div key={i} className="flex justify-between items-center p-4 border rounded-lg bg-card">
                  <div>
                    <h4 className="font-heading font-medium">{deadline.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1 text-accent-earth">{deadline.date}</p>
                  </div>
                  <Badge 
                    variant={deadline.status === "In Progress" ? "default" : "secondary"}
                    className={deadline.status === "In Progress" ? "bg-brand-green hover:bg-brand-emerald" : ""}
                  >
                    {deadline.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
