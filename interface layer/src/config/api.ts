export interface RfmMetric {
  value: number;
  info: string;
}

export interface CustomerResult {
  customer_id: number;
  segment: string;
  vip_subsegment: string | null;
  rfm: {
    recency: RfmMetric;
    frequency: RfmMetric;
    monetary: RfmMetric;
  };
}

const API_BASE = "https://intelligence-api-production-4a2e.up.railway.app";

export async function lookupCustomer(customerId: string): Promise<CustomerResult> {
  try {
  const res = await fetch(
    `${API_BASE}/customer/${encodeURIComponent(customerId.trim())}`
    );

  if (!res.ok) {
      const errorData = await res.json().catch(() => null);

      throw new Error(
        res.status === 404
          ? "Customer not found"
          : errorData?.detail || "Failed to fetch customer data"
      );
    }

    const data = await res.json();

    
    console.log("API DATA:", data);

    return data;


  } catch (err) {
    
    console.error("API ERROR:", err);
    throw err;
  }
}
