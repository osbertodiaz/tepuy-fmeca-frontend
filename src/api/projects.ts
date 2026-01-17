import { apiFetch } from "./client";

export interface ProjectDTO {
  id: number;
  name: string;
  description?: string;
  standard?: string | null;
  created_at: string;
}

export async function getProjects(
  tenantId: string
): Promise<ProjectDTO[]> {
  return apiFetch("/projects", { method: "GET" }, tenantId);
}
