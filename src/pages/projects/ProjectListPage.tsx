import { useEffect, useState } from "react";
import { getProjects, ProjectDTO } from "../../api/projects";
import { Link } from "react-router-dom";

export default function ProjectListPage() {
  const [projects, setProjects] = useState<ProjectDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    getProjects()
      .then((data) => {
        if (mounted) setProjects(data);
      })
      .catch(() => {
        if (mounted) setError("Failed to load projects");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <p>Loading projects…</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
            {project.description && (
              <div>{project.description}</div>
            )}
            <Link to={`/projects/${project.id}`}>
              Open project
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
