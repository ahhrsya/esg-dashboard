import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NEXTORA_DATA } from "@/data";
import { ShieldCheck } from "lucide-react";

export default function Offsets() {
  const { offsets } = NEXTORA_DATA;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-semibold">Offset Marketplace</h1>
          <p className="text-muted-foreground mt-1">Discover verified carbon offset projects.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offsets.map(project => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
            <div className="h-48 overflow-hidden relative group">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-white/90 text-foreground backdrop-blur border-none hover:bg-white/90">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-lg line-clamp-1" title={project.name}>{project.name}</CardTitle>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span>{project.type}</span>
                <span>•</span>
                <span className="truncate">{project.location}</span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-2 mb-4 text-sm text-brand-green bg-brand-green/10 px-3 py-1.5 rounded-md w-fit font-medium border border-brand-green/20">
                <ShieldCheck className="w-4 h-4" />
                Verified Standard
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-2xl font-bold">€{project.cost.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground">/ tCO2e</span>
              </div>
            </CardContent>

            <CardFooter className="pt-2 pb-6">
              <Button className="w-full bg-brand-green hover:bg-brand-emerald text-white">Purchase Offsets</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
