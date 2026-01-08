import { useLocation, Link } from "react-router-dom";

export function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  return (
    <div style={{ fontSize: "12px", marginBottom: "8px" }}>
      <Link to="/">Home</Link>
      {parts.map((p, i) => (
        <span key={i}> › {p}</span>
      ))}
    </div>
  );
}