import { apiClient } from "./client";

export interface ProjectDTO {
  id: number;
  name: string;
  description?: string;
  standard?: string | null;
  created_at: string;
}

export async function getProjects(): Promise<ProjectDTO[]> {
  const response = await apiClient.get<ProjectDTO[]>("/projects");
  return response.data;
}
