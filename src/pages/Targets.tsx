import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { NEXTORA_DATA } from "@/data";
import { Plus } from "lucide-react";

export default function Targets() {
  const { targets } = NEXTORA_DATA;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track": return "bg-brand-green hover:bg-brand-emerald border-transparent text-white";
      case "At Risk": return "bg-scope-2 hover:bg-scope-2/80 border-transparent text-white";
      case "Off Track": return "bg-scope-1 hover:bg-scope-1/80 border-transparent text-white";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-heading font-semibold">Reduction Targets</h1>
        <Button className="bg-brand-green hover:bg-brand-emerald text-white">
          <Plus className="w-5 h-5 mr-2" /> Add Target
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {targets.map(target => (
          <Card key={target.id} className="hover:shadow-md transition-shadow border-border rounded-2xl">
            <CardHeader className="flex flex-row justify-between items-start gap-4 pb-2">
              <CardTitle className="text-xl leading-snug">{target.name}</CardTitle>
              <Badge className={`shrink-0 ${getStatusColor(target.status)}`}>{target.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Baseline Year</span>
                  <span className="font-mono font-medium">{target.baseline} tCO2e</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{target.year} Goal</span>
                  <span className="font-mono font-medium">{target.goal} tCO2e</span>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span>Current Progress</span>
                  <span className="font-mono font-bold text-brand-green">{target.progress}%</span>
                </div>
                <Progress value={target.progress} className="h-3 [&>div]:bg-brand-green" />
                <p className="text-xs text-muted-foreground text-right mt-1 italic">
                  Aligned with 1.5°C SBTi pathway
                </p>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 border-t pt-4">
              <Button variant="outline" className="w-full border-border">View Trajectory Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
