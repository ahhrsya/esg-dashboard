import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { NEXTORA_DATA } from "@/data";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { Activity } from "lucide-react";

export default function Benchmark() {
  const { benchmarks } = NEXTORA_DATA;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-semibold">Benchmark & Peers</h1>
          <p className="text-muted-foreground mt-1">Compare your emissions intensity against industry standards.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Emissions Intensity (tCO2e / FTE)</CardTitle>
            <CardDescription>Industry: Precision Manufacturing & Software (NACE 28.11)</CardDescription>
          </CardHeader>
          <CardContent className="h-80 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={benchmarks} margin={{ left: 40, right: 20 }}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                <Tooltip cursor={{ fill: "rgba(0,0,0,0)" }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                  {benchmarks.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.name.includes("You") ? "var(--color-brand-green)" : "var(--color-input)"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1 border-brand-green/30 bg-brand-green/5 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-green" />
              Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-heading text-brand-green font-semibold">
              Top 25%
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You rank in the top quartile of your industry. Your emissions intensity of <span className="font-mono text-foreground font-medium">11.4 tCO2e/FTE</span> is better than the industry average of <span className="font-mono">15.0</span>, but trails the top-performers (<span className="font-mono">8.5</span>).
            </p>
            
            <div className="border-t pt-4 mt-6">
              <h4 className="font-heading font-medium text-foreground mb-2">AI Recommendations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Peers in your sector reduced Scope 2 emissions by avg. 18% in the past 3 years. Consider renewable energy PPAs.</li>
                <li>Your Scope 3 supply chain emissions are slightly above peer median. Accelerate your tracking via <i>Data Requests</i>.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
