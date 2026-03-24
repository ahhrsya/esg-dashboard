import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { NEXTORA_DATA } from "@/data";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

export default function Explorer() {
  const data = NEXTORA_DATA.hierarchy;

  const COLORS = ["#EF4444", "#F59E0B", "#3B82F6"];

  const CustomizedContent = (props: any) => {
    const { depth, x, y, width, height, index, name, value, colors } = props;
    const color = colors[index % colors.length];

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? color : "rgba(255,255,255,0.2)",
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 2 && width > 50 && height > 30 ? (
          <text
            x={x + 8}
            y={y + 20}
            fill="#fff"
            fontSize={13}
            className="font-medium font-body"
          >
            {name}
          </text>
        ) : null}
        {depth === 2 && width > 50 && height > 50 ? (
          <text
            x={x + 8}
            y={y + 40}
            fill="rgba(255,255,255,0.85)"
            fontSize={12}
            className="font-mono"
          >
            {value} tCO2e
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-3xl font-heading font-semibold text-slate-800">Emissions Explorer</h1>
      <Card className="border-border shadow-sm rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle className="text-xl font-heading text-slate-800">Emissions Breakdown by Source</CardTitle>
            <CardDescription className="mt-1">
              Hierarchical view of all emission sources. Click tiles to drill down.
            </CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-2 rounded-lg">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#EF4444]"></span> Scope 1 (Direct)</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#F59E0B]"></span> Scope 2 (Energy)</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#3B82F6]"></span> Scope 3 (Value Chain)</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[600px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={data}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
                content={<CustomizedContent colors={COLORS} />}
              >
                <Tooltip 
                  formatter={(value: any) => [`${value} tCO2e`, "Emissions"]}
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                />
              </Treemap>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
