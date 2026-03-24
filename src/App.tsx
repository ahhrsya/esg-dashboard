import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Explorer from "./pages/Explorer";
import Targets from "./pages/Targets";
import Offsets from "./pages/Offsets";
import SupplyChain from "./pages/SupplyChain";
import Reports from "./pages/Reports";
import Benchmark from "./pages/Benchmark";
import DataSources from "./pages/DataSources";
import Settings from "./pages/Settings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

function AppLayout() {
  const location = useLocation();
  const titleMap: Record<string, string> = {
    "/dashboard": "ESG Overview",
    "/calculator": "Carbon Calculator",
    "/explorer": "Emissions Explorer",
    "/targets": "Reduction Targets",
    "/offsets": "Offset Manager",
    "/supply-chain": "Supply Chain",
    "/reports": "Report Builder",
    "/benchmark": "Benchmark & Peers",
    "/data-sources": "Data Sources",
    "/settings": "Settings",
  };
  const pageTitle = titleMap[location.pathname] || "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden bg-bg-nature text-foreground font-body">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-[88px] bg-transparent shrink-0 flex items-center justify-between px-8 pt-4">
          <h1 className="text-[1.75rem] font-bold font-heading text-slate-800 tracking-tight">
            {pageTitle}
          </h1>
          <div className="flex items-center gap-6 bg-white p-1.5 pr-6 rounded-2xl shadow-sm border border-slate-100">
            <button className="relative p-2.5 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 border-2 border-slate-50 rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border border-slate-100 shadow-sm rounded-xl">
                <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-sm">
                <p className="font-semibold text-slate-800 leading-tight">Robert Burner</p>
                <p className="text-slate-500 text-[11px] mt-0.5 tracking-tight">robertburner@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6 pb-12">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/targets" element={<Targets />} />
            <Route path="/offsets" element={<Offsets />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/benchmark" element={<Benchmark />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
