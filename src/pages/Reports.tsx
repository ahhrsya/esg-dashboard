import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2 } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-semibold">ESG Report Builder</h1>
          <p className="text-muted-foreground mt-1">Generate regulatory-compliant reports.</p>
        </div>
        <Button className="bg-brand-green hover:bg-brand-emerald text-white">
          <Download className="w-4 h-4 mr-2" /> Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-3 bg-brand-green/10 text-brand-green border border-brand-green rounded-md cursor-pointer font-medium text-sm flex items-center justify-between">
                <span>CSRD Template (2024)</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="p-3 hover:bg-muted border rounded-md cursor-pointer text-sm text-foreground">
                GRI Standards
              </div>
              <div className="p-3 hover:bg-muted border rounded-md cursor-pointer text-sm text-foreground">
                TCFD Framework
              </div>
              <div className="p-3 hover:bg-muted border rounded-md cursor-pointer text-sm text-foreground">
                CDP Questionnaire
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="col-span-1 md:col-span-3 min-h-[500px] flex flex-col bg-muted/20 border-dashed border-2">
          <CardHeader>
            <CardTitle>Report Preview: CSRD Disclosure</CardTitle>
            <CardDescription>Drag and drop sections to rearrange.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div className="bg-white border rounded-md p-6 shadow-sm">
              <h2 className="text-2xl font-heading mb-4 border-b pb-2">1. Company Profile (Nexora BV)</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>NACE Code: 28.11, 62.01</p>
                <p>Employees: 250</p>
                <p>Reporting Year: FY 2024</p>
              </div>
            </div>

            <div className="bg-white border rounded-md p-6 shadow-sm">
              <h2 className="text-2xl font-heading mb-4 border-b pb-2">2. Double Materiality Assessment</h2>
              <div className="h-20 flex items-center justify-center text-muted-foreground bg-muted/50 rounded border border-dashed">
                Materiality Matrix Visualization
              </div>
            </div>

            <div className="bg-white border rounded-md p-6 shadow-sm">
              <h2 className="text-2xl font-heading mb-4 border-b pb-2">3. Greenhouse Gas Emissions</h2>
              <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-muted-foreground">
                <li>Scope 1: 412 tCO2e</li>
                <li>Scope 2: 1,065 tCO2e</li>
                <li>Scope 3: 1,363 tCO2e</li>
              </ul>
            </div>
            
            <div className="w-full flex justify-center py-4">
              <Button variant="outline" className="text-muted-foreground border-dashed">
                + Add Section
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
