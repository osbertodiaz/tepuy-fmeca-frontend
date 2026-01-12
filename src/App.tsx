import React, { useEffect, useState } from "react";
import { login } from "./api/auth";

const App: React.FC = () => {
  const [status, setStatus] = useState<string>("Checking backend...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    login("admin", "admin")
      .then((data) => {
        console.log("LOGIN RESPONSE:", data);
        setStatus(`Login OK: ${JSON.stringify(data)}`);
      })
      .catch((err) => {
        console.error("LOGIN ERROR:", err.message);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div style={{ padding: "2rem", color: "red" }}>❌ {error}</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Tepuy FMECA</h2>
      <p>{status}</p>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        (Check browser console for details)
      </p>
    </div>
  );
};

export default App;
