import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-heading font-semibold">Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
          <CardDescription>Manage your company profile and application settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid w-full lg:w-1/2 grid-cols-4 mb-6">
              <TabsTrigger value="company">Profile</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="factors">Factors</TabsTrigger>
              <TabsTrigger value="notifications">Alerts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="company" className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Legal Company Name</Label>
                  <Input defaultValue="Nexora BV" />
                </div>
                <div className="space-y-2">
                  <Label>NACE Code (Industry)</Label>
                  <Input defaultValue="28.11, 62.01" />
                </div>
                <div className="space-y-2">
                  <Label>Reporting Year</Label>
                  <Input defaultValue="Jan 1 - Dec 31 (Calendar)" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Employee Count (FTE)</Label>
                  <Input defaultValue="250" />
                </div>
              </div>
              <Button className="bg-brand-green hover:bg-brand-emerald text-white">Save Changes</Button>
            </TabsContent>

            <TabsContent value="team" className="p-8 text-center text-muted-foreground border border-dashed rounded-lg">
              Team Member Management (Invite, Roles: Admin/Manager/Viewer).
            </TabsContent>
            
            <TabsContent value="factors" className="p-8 text-center text-muted-foreground border border-dashed rounded-lg">
              Emissions Factors Library (Overriding Grid Averages, DEFRA standard definitions).
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 max-w-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium">Data Collection Reminders</h4>
                    <p className="text-sm text-muted-foreground">Monthly emails for pending utility data.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium">Anomaly Alerts</h4>
                    <p className="text-sm text-muted-foreground">Instant alerts for unusual emission spikes (±30%).</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium">Target Milestone Updates</h4>
                    <p className="text-sm text-muted-foreground">Weekly update on trajectory performance vs goals.</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
