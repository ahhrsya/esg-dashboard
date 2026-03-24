import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Calculator() {
  const [energy, setEnergy] = useState("0");
  const [gas, setGas] = useState("0");

  const projectedTco2e = (parseFloat(energy || "0") * 0.365 / 1000) + (parseFloat(gas || "0") * 0.202 / 1000);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-semibold">Carbon Calculator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Log Emissions</CardTitle>
            <CardDescription>Enter consumption data across categories.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="energy" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="energy">Energy</TabsTrigger>
                <TabsTrigger value="travel">Travel</TabsTrigger>
                <TabsTrigger value="supply">Supply Chain</TabsTrigger>
                <TabsTrigger value="waste">Waste</TabsTrigger>
              </TabsList>
              
              <TabsContent value="energy" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="electricity">Electricity Consumption</Label>
                  <div className="flex items-center gap-4">
                    <Input 
                      id="electricity" 
                      type="number" 
                      placeholder="e.g. 5000" 
                      value={energy}
                      onChange={(e) => setEnergy(e.target.value)}
                    />
                    <span className="text-muted-foreground w-32">kWh / month</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Grid emission factor: 0.365 kgCO2e/kWh (EU Avg)</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gas">Natural Gas</Label>
                  <div className="flex items-center gap-4">
                    <Input 
                      id="gas" 
                      type="number" 
                      placeholder="e.g. 1000" 
                      value={gas}
                      onChange={(e) => setGas(e.target.value)}
                    />
                    <span className="text-muted-foreground w-32">kWh / month</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-brand-green hover:bg-brand-emerald text-white">
                  Save Template
                </Button>
              </TabsContent>
              {/* Other tabs can have placeholders for now */}
              <TabsContent value="travel" className="space-y-4 p-8 text-center text-muted-foreground border border-dashed rounded-lg">
                Travel logging form coming soon.
              </TabsContent>
              <TabsContent value="supply" className="space-y-4 p-8 text-center text-muted-foreground border border-dashed rounded-lg">
                Supply Chain logging form coming soon.
              </TabsContent>
              <TabsContent value="waste" className="space-y-4 p-8 text-center text-muted-foreground border border-dashed rounded-lg">
                Waste logging form coming soon.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="h-fit sticky top-8 bg-brand-green/5 outline-brand-green/20 outline outline-1 outline-offset-2">
          <CardHeader>
            <CardTitle className="text-brand-green">Live Result Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-5xl font-mono text-brand-green mb-2">
                {projectedTco2e.toFixed(3)}
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                tCO2e / month
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Electricity</span>
                <span className="font-mono">{(parseFloat(energy || "0") * 0.365 / 1000).toFixed(3)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Natural Gas</span>
                <span className="font-mono">{(parseFloat(gas || "0") * 0.202 / 1000).toFixed(3)}</span>
              </div>
            </div>

            <Button className="w-full bg-brand-green hover:bg-brand-emerald text-white" size="lg">
              Log Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
