import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { NEXTORA_DATA } from "@/data";
import { Button } from "@/components/ui/button";

export default function SupplyChain() {
  const { suppliers } = NEXTORA_DATA;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete": return "bg-brand-green text-white hover:bg-brand-emerald border-transparent";
      case "Pending": return "bg-scope-2 text-white hover:bg-scope-2/80 border-transparent";
      case "No Response": return "bg-scope-1 text-white hover:bg-scope-1/80 border-transparent";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-semibold">Supply Chain Emissions</h1>
          <p className="text-muted-foreground mt-1">Manage Scope 3 emissions derived from purchased goods and services.</p>
        </div>
        <Button className="bg-brand-green hover:bg-brand-emerald text-white">Send Data Request</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supplier Reporting Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Scope 3 (tCO2e)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>ESG Score</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map(supplier => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.name}</TableCell>
                  <TableCell>{supplier.category}</TableCell>
                  <TableCell className="font-mono">{supplier.scope3}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(supplier.status)}>{supplier.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-green" 
                          style={{ width: `${supplier.score}%` }} 
                        />
                      </div>
                      <span className="text-xs font-mono">{supplier.score || "N/A"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{supplier.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
