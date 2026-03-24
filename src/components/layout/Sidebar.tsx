import { Link, useLocation } from "react-router-dom";
import { 
  BarChart4, 
  Target, 
  Leaf,
  Users,
  FileText,
  Activity,
  Link as LinkIcon,
  Settings,
  ChevronDown,
  Sun,
  Moon,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

const MAIN_NAV = [
  { name: "Overview", path: "/dashboard", icon: BarChart4 },
  { name: "Calculator", path: "/calculator", icon: Activity },
  { name: "Explorer", path: "/explorer", icon: BarChart4 },
  { name: "Targets", path: "/targets", icon: Target },
  { name: "Offsets", path: "/offsets", icon: Leaf },
  { name: "Supply Chain", path: "/supply-chain", icon: Users },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Benchmark", path: "/benchmark", icon: Activity },
  { name: "Data Sources", path: "/data-sources", icon: LinkIcon },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-border flex flex-col hidden md:flex h-full shadow-sm z-10">
      <div className="h-20 flex items-center px-6 shrink-0">
        <div className="flex items-center gap-2">
          <Leaf className="w-7 h-7 text-brand-green" strokeWidth={2.5} />
          <span className="font-heading font-bold tracking-tight text-xl text-foreground">
            GREEN<span className="text-brand-green">LEDGER</span>
          </span>
        </div>
      </div>
      
      <div className="flex-1 py-4 px-4 overflow-y-auto space-y-6">
        <div>
          <div className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-foreground cursor-pointer hover:bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-brand-green" />
              <span>ESG Actions</span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
          <ul className="mt-2 space-y-1">
            {MAIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2.5 text-sm font-medium transition-colors rounded-lg",
                      isActive
                        ? "text-brand-green bg-brand-green/10"
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
        </div>

        <div>
          <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Account
          </div>
          <ul className="space-y-1">
            <li>
              <Link
                to="/info"
                className="flex items-center px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-lg"
              >
                <Info className="w-4 h-4 mr-3" />
                Information
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium transition-colors rounded-lg",
                  location.pathname === "/settings"
                    ? "text-brand-green bg-brand-green/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Settings className="w-4 h-4 mr-3" />
                Setting
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-border/50 shrink-0">
        <div className="flex items-center justify-between text-sm font-medium text-muted-foreground px-2">
          <span>Light Mode</span>
          <div className="flex items-center gap-2 bg-muted rounded-full p-1">
            <div className="p-1 rounded-full bg-brand-green text-white shadow-sm">
              <Sun className="w-3.5 h-3.5" />
            </div>
            <div className="p-1 rounded-full text-muted-foreground hover:text-foreground cursor-pointer">
              <Moon className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
