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
        {width > 50 && height > 30 ? (
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={12}
            className="font-medium font-body"
          >
            {name}
          </text>
        ) : null}
        {width > 50 && height > 50 ? (
          <text
            x={x + 4}
            y={y + 36}
            fill="#fff"
            fontSize={12}
            className="font-mono font-bold"
          >
            {value} tCO2e
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-semibold">Emissions Explorer</h1>
      <Card>
        <CardHeader>
          <CardTitle>Emissions Breakdown by Source</CardTitle>
          <CardDescription>
            Hierarchical view of all emission sources. Click tiles to drill down.
          </CardDescription>
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
