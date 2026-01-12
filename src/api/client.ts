const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(
  path: string,
  options: RequestInit = {},
  tenantId: string = "test"
) {
  const headers: HeadersInit = {
    "X-Tenant-ID": tenantId,
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(text || `HTTP ${response.status}`);
  }

  return text ? JSON.parse(text) : null;
}
