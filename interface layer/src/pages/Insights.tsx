const PRIMARY_SEGMENTS = [
  {
    name: "Loyal Customers",
    color: "hsl(30, 80%, 50%)",
    description:
      "Clients who purchase regularly and demonstrate consistent engagement. They appear to be few in number but provide high revenue contribution.",
    action:
      "Strengthen retention through loyalty programs, exclusive rewards, and strategies that encourage higher spending and long-term value.",
  },
  {
    name: "Promising Customers",
    color: "hsl(220, 70%, 50%)",
    description:
      "Customers who show signs of becoming loyal but require further engagement. This is the largest segment and the highest revenue contributors, indicating strong growth potential.",
    action:
      "Drive repeat purchases through targeted campaigns, personalized recommendations, and engagement strategies to convert them to loyal customers.",
  },
  {
    name: "At-Risk / Churned Customers",
    color: "hsl(337, 70%, 50%)",
    description:
      "Customers whose purchasing activity has significantly declined/stopped. Relatively many in number but contribute the least revenue.",
    action:
      "Re-engage using targeted campaigns and limited-time offers. Reduce spend on unresponsive individuals to save costs.",
  },
  {
    name: "VIP Customers",
    color: "hsl(140, 60%, 40%)",
    description:
      "Fewer in number compared to other segments but deliver remarkably high revenue contribution.",
    action: "",
  },
];

const VIP_SUBSEGMENTS = [
  {
    name: "Premium VIPs",
    color: "hsl(140, 60%, 40%)",
    description:
      "Highest revenue contributors with strong engagement and spending behavior.",
    action:
      "Retain through elite rewards, early access privileges, and highly personalized premium experiences.",
  },
  {
    name: "Loyal Frequent VIPs",
    color: "hsl(30, 80%, 50%)",
    description:
      "Largest VIP subgroup with consistent purchasing behavior but slightly lower revenue contribution than Premium VIPs.",
    action:
      "Increase spending through premium recommendations, \"spend more–get more\" offers, and tailored suggestions to turn them to premium VIPs.",
  },
  {
    name: "At-Risk VIPs",
    color: "hsl(336, 70%, 50%)",
    description:
      "High-potential clients with declining engagement.",
    action:
      "Prevent churn through urgent retention campaigns, personalized outreach, and tailored recovery offers.",
  },
];

function SegmentCard({
  name,
  color,
  description,
  action,
}: {
  name: string;
  color: string;
  description: string;
  action: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <div className="flex items-center gap-3">
        <span
          className="h-3 w-3 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        <h3 className="text-base font-semibold text-foreground">{name}</h3>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      {action && (
        <div className="border-t border-border pt-3">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1 font-bold">
            Recommended Action
          </p>
          <p className="text-sm text-foreground">{action}</p>
        </div>
      )}
    </div>
  );
}

export default function Insights() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Segment Insights
        </h1>
        <p className="text-muted-foreground mt-1">
          Data-driven insights and recommended actions based on customer segments and revenue contribution.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          Primary Segments
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {PRIMARY_SEGMENTS.map((s) => (
            <SegmentCard key={s.name} {...s} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          VIP Subsegments
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {VIP_SUBSEGMENTS.map((s) => (
            <SegmentCard key={s.name} {...s} />
          ))}
        </div>
      </section>
    </div>
  );
}
