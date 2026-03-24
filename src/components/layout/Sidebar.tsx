import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calculator, 
  BarChart4, 
  Target, 
  Leaf,
  Users,
  FileText,
  Activity,
  Link as LinkIcon,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "ESG Overview", path: "/dashboard", icon: LayoutDashboard },
  { name: "Carbon Calculator", path: "/calculator", icon: Calculator },
  { name: "Emissions Explorer", path: "/explorer", icon: BarChart4 },
  { name: "Reduction Targets", path: "/targets", icon: Target },
  { name: "Offset Manager", path: "/offsets", icon: Leaf },
  { name: "Supply Chain", path: "/supply-chain", icon: Users },
  { name: "Report Builder", path: "/reports", icon: FileText },
  { name: "Benchmark & Peers", path: "/benchmark", icon: Activity },
  { name: "Data Sources", path: "/data-sources", icon: LinkIcon },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r flex flex-col hidden md:flex h-full">
      <div className="h-16 flex items-center px-6 border-b shrink-0">
        <Leaf className="w-6 h-6 text-brand-green mr-2" />
        <span className="font-heading font-semibold text-lg text-foreground">GreenLedger</span>
      </div>
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-6 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-green bg-brand-green/10 border-r-2 border-brand-green"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
