import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects, ProjectDTO } from "../../api/projects";
import { useAuthContext } from "../../auth/AuthContext";

export default function ProjectListPage() {
  const { tenantId } = useAuthContext();

  const [projects, setProjects] = useState<ProjectDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tenantId) return;

    getProjects(tenantId)
      .then(setProjects)
      .catch(() => setError("Failed to load projects"))
      .finally(() => setLoading(false));
  }, [tenantId]);

  if (loading) return <p>Loading projects…</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Projects</h1>

      {projects.length === 0 && (
        <p>No projects found for this tenant.</p>
      )}

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>
            {project.description && <div>{project.description}</div>}
            <Link to={`/projects/${project.id}`}>Open project</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
