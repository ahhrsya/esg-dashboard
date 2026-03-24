import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NEXTORA_DATA } from "@/data";
import { Plus } from "lucide-react";

export default function DataSources() {
  const { integrations } = NEXTORA_DATA;

  const getSyncColor = (status: string) => {
    switch (status) {
      case "Connected": return "bg-brand-green text-white hover:bg-brand-emerald border-transparent";
      case "Error": return "bg-scope-1 text-white hover:bg-scope-1/80 border-transparent";
      case "Disconnected": return "bg-muted text-muted-foreground border-transparent";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-semibold">Data Sources & Integrations</h1>
          <p className="text-muted-foreground mt-1">Manage external APIs and manual data pipelines.</p>
        </div>
        <Button className="bg-brand-green hover:bg-brand-emerald text-white">
          <Plus className="w-5 h-5 mr-2" /> Add Integation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="col-span-1 bg-brand-green/5 border-brand-green/20">
          <CardHeader className="pb-2">
            <CardTitle>Data Quality</CardTitle>
            <CardDescription>Overall freshness & accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-mono text-brand-green mt-2 mb-4">95%</div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="bg-brand-green h-full w-[95%]" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-3">
          <CardHeader>
            <CardTitle>Connected Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Synced</TableHead>
                  <TableHead>Records</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {integrations.map(source => (
                  <TableRow key={source.id}>
                    <TableCell className="font-medium font-heading">{source.name}</TableCell>
                    <TableCell>{source.category}</TableCell>
                    <TableCell>
                      <Badge className={getSyncColor(source.status)}>{source.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{source.sync}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{source.records}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8">Configure</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
