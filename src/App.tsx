import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Explorer from "./pages/Explorer";
import Targets from "./pages/Targets";
import Offsets from "./pages/Offsets";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-bg-nature/30 text-foreground font-body">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/targets" element={<Targets />} />
            <Route path="/offsets" element={<Offsets />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
