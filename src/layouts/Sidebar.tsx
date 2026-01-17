import { Link } from "react-router-dom";
import { menuConfig } from "../navigation/menuConfig";
import { useAuthContext } from "../auth/AuthContext";

export const Sidebar: React.FC = () => {
  const { user } = useAuthContext();

  if (!user) return null;

  return (
    <aside
      style={{
        width: "220px",
        background: "#f4f4f4",
        padding: "1rem",
        borderRight: "1px solid #ddd",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menuConfig
            .filter((item) => item.allowedRoles.includes(user.role))
            .map((item) => (
              <li key={item.path} style={{ marginBottom: "0.75rem" }}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
};
