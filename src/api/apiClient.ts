const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// TEMPORARY – for Phase 1 validation only
const TENANT_ID = "demo-tenant-id"; // replace with a real tenant UUID later

export async function healthCheck() {
  const response = await fetch(`${API_BASE_URL}/health`, {
    method: "GET",
    headers: {
      "X-Tenant-ID": TENANT_ID,
    },
  });

  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`);
  }

  return response.json();
}
