// src/projects/ProjectCard.tsx
import { useNavigate } from "react-router-dom";

interface Props {
  project: {
    id: string;
    name: string;
    standard: string;
    status: string;
    lastModified: string;
  };
}

export function ProjectCard({ project }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      <h3>{project.name}</h3>

      <p>
        <strong>Standard:</strong> {project.standard}
      </p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>

      <p>
        <strong>Last modified:</strong> {project.lastModified}
      </p>
    </div>
  );
}
