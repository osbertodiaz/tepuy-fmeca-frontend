// src/projects/ProjectListPage.tsx
import { ProjectCard } from "./ProjectCard";
import { NewProjectModal } from "./NewProjectModal";

export function ProjectListPage() {
  // Placeholder — backend will provide real data
  const projects = [
    {
      id: "p1",
      name: "Pump System FMEA",
      standard: "IEC 60812",
      status: "ACTIVE",
      lastModified: "2026-01-10",
    },
    {
      id: "p2",
      name: "Brake System FMEA",
      standard: "AIAG-VDA",
      status: "DRAFT",
      lastModified: "2026-01-05",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h1>Projects</h1>

      <NewProjectModal />

      <div style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
