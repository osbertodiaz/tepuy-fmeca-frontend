const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/*
  ======================================================
  Types
  ======================================================
*/

export type LoginResponse = {
  access_token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
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
    throw response;
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
    "/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
    },
    tenantId
  );
}
