import { useState } from "react";
import { Search, AlertCircle } from "lucide-react";
import { lookupCustomer, type CustomerResult } from "../config/api";
import CustomerCard from "../components/CustomerCard";

export default function CustomerLookup() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<CustomerResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await lookupCustomer(query.trim());
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Customer Lookup</h2>
        <p className="text-muted-foreground mt-1">
          Search for a customer using their ID number (e.g. 14646, 14735, 12350) to view their segment, and RFM profile insights.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Customer ID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={handleSearch}
            disabled={loading || !query.trim()}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none transition-colors"
          >
            <Search className="h-4 w-4" />
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-3 rounded-xl border border-destructive/50 bg-card p-5 text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {result && <CustomerCard data={result} />}
    </div>
  );
}
