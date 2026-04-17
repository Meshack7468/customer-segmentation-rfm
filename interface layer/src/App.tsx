import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Dashboard from "@/pages/Dashboard";
import CustomerLookup from "@/pages/CustomerLookup";
import Insights from "@/pages/Insights";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex">
        <Navbar />
        <main className="flex-1 ml-60 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lookup" element={<CustomerLookup />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}