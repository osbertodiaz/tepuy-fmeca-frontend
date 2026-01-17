import { useAuthContext } from "../auth/AuthContext";

export const Topbar: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <header
      style={{
        height: "56px",
        background: "#1f2937",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
      }}
    >
      <strong>Tepuy FMECA</strong>

      {user && (
        <div>
          <span style={{ marginRight: "1rem" }}>
            {user.email} ({user.role})
          </span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
};
