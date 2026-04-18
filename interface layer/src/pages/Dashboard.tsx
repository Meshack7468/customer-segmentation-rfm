import { BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground mt-1">
          Interactive Tableau-powered dashboard providing insights into customer segmentation, revenue performance, and behavioral insights.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden max-w-6xl mx-auto">
        <div className="relative w-full" style={{ paddingBottom: "52%" }}>
          <iframe
            src="https://public.tableau.com/views/Customer_Intelligence_Dashboard/CustomerSegmentationRevenueDashboard?:showVizHome=no&:embed=true"
            className="absolute w-full h-full border-0"
            style={{ top: 0, left: 0}}
            title="Customer Segmentation Tableau Dashboard"
            allowFullScreen
          />
          
        </div>
      </div>
    </div>
  );
}
