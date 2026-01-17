const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/*
  ======================================================
  Types
  ======================================================
*/

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

/*
  ======================================================
  Internal helper
  ======================================================
*/

async function apiFetch(
  endpoint: string,
  options: RequestInit,
  tenantId?: string,
  accessToken?: string
) {
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  if (tenantId) {
    headers["X-Tenant-ID"] = tenantId;
  }

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }

  return response.json();
}

/*
  ======================================================
  Public API calls
  ======================================================
*/

// ---------- Health ----------
export async function healthCheck(tenantId: string) {
  return apiFetch(
    "/health",
    {
      method: "GET",
    },
    tenantId
  );
}

// ---------- Auth ----------
export async function loginRequest(
  tenantId: string,
  email: string,
  password: string
): Promise<LoginResponse> {
  return apiFetch(
    "/login", // ✅ ENDPOINT CORRECTO
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,      // ✅ email (no username)
        password,
      }),
    },
    tenantId
  );
}
