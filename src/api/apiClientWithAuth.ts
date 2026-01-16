import { useAuthContext } from "../auth/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ApiFetchOptions = RequestInit & {
  skipAuth?: boolean;
};

export function useApiClient() {
  const { accessToken, tenantId, logout } = useAuthContext();

  async function apiFetch(endpoint: string, options: ApiFetchOptions = {}) {
    const headers: Record<string, string> = {
      ...(options.headers as Record<string, string>),
    };

    if (!options.skipAuth) {
      if (!tenantId || !accessToken) {
        logout();
        throw new Error("Missing auth context");
      }

      headers["Authorization"] = `Bearer ${accessToken}`;
      headers["X-Tenant-ID"] = tenantId;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401 || response.status === 403) {
      logout();
      throw new Error("Session expired or unauthorized");
    }

    if (!response.ok) {
      throw response;
    }

    return response.json();
  }

  return {
    get: (endpoint: string) =>
      apiFetch(endpoint, { method: "GET" }),

    post: (endpoint: string, body: unknown) =>
      apiFetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
  };
}
