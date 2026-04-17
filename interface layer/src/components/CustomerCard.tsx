import type { CustomerResult } from "../config/api";

const SEGMENT_COLORS: Record<string, string> = {
  "Loyal": "hsl(30, 80%, 50%)",
  "Promising": "hsl(220, 70%, 50%)",
  "Churned/At-Risk": "hsl(336, 70%, 50%)",
  "VIP": "hsl(140, 80%, 29%)",
};

const SUBSEGMENT_COLORS: Record<string, string> = {
  "Premium VIPs": "hsl(140, 83%, 28%)",
  "Loyal Frequent VIPs": "hsl(30, 80%, 50%)",
  "At-Risk VIPs": "hsl(336, 70%, 50%)",
};

export default function CustomerCard({ data }: { data: CustomerResult }) {
  const segmentColor = SEGMENT_COLORS[data.segment] ?? "hsl(var(--muted-foreground))";

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-lg font-semibold text-foreground">
        Customer {data.customer_id}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Segment">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: segmentColor }}
          >
            {data.segment}
          </span>
        </Field>

        <Field label="VIP Subsegment">
          {data.vip_subsegment ? (
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
              style={{ backgroundColor: SUBSEGMENT_COLORS[data.vip_subsegment] ?? "hsl(var(--muted-foreground))" }}
            >
              {data.vip_subsegment}
            </span>
          ) : (
            <span className="text-sm text-muted-foreground">N/A</span>
          )}
        </Field>

        <Field label="Recency">
          <span className="text-xl font-normal tabular-nums">{data.rfm.recency.value}</span>
          <span className="text-sm text-muted-foreground ml-1"></span>
          <p className="text-sm text-muted-foreground mt-1 basis-full font-semibold">
            {data.rfm.recency.value === 1
              ? "Last purchase was 1 day ago"
              : `Last purchase was ${data.rfm.recency.value} days ago`}
         </p>
        </Field>

        <Field label="Frequency">
          <span className="text-xl font-normal tabular-nums">{data.rfm.frequency.value}</span>
          <span className="text-sm text-muted-foreground ml-1"></span>
          <p className="text-sm text-muted-foreground mt-1 basis-full font-semibold">
            {data.rfm.frequency.value === 1
             ? "Customer has made 1 purchase"
             : `Customer has made ${data.rfm.frequency.value} purchases`}
         </p>
        </Field>

        <Field label="Monetary Value">
          <span className="text-lg font-normal tabular-nums">
            {data.rfm.monetary.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
          <p className="text-sm text-muted-foreground mt-1 basis-full font-semibold">
            {data.rfm.monetary.info}
          </p>
        </Field>

      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-lg uppercase tracking-wider mb-1 font-bold text-foreground">
        {label}
      </p>
      <div className="flex items-baseline gap-1 flex-wrap">{children}</div>
    </div>
  );
}
