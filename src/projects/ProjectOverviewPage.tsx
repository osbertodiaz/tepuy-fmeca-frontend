// src/projects/ProjectOverviewPage.tsx
import { useParams, useNavigate } from "react-router-dom";

export function ProjectOverviewPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Placeholder — backend will provide real metadata
  const project = {
    id: projectId,
    name: "Pump System FMEA",
    standard: "IEC 60812",
    status: "ACTIVE",
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>{project.name}</h1>

      <p>
        <strong>Standard:</strong> {project.standard}
      </p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>

      <hr />

      <h3>Next steps</h3>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => navigate(`/projects/${project.id}/hierarchy`)}>
          System Hierarchy
        </button>

        <button onClick={() => navigate(`/projects/${project.id}/fmea`)}>
          FMEA Table
        </button>

        <button onClick={() => navigate(`/projects/${project.id}/actions`)}>
          Actions
        </button>

        <button onClick={() => navigate(`/projects/${project.id}/reports`)}>
          Reports
        </button>
      </div>
    </div>
  );
}
