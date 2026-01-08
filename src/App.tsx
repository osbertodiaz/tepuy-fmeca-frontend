import React, { useEffect, useState } from "react";
import { healthCheck } from "./api/apiClient";

const App: React.FC = () => {
  const [status, setStatus] = useState<string>("Checking backend...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    healthCheck()
      .then((data) => {
        setStatus(`Backend OK: ${JSON.stringify(data)}`);
      })
      .catch((err) => {
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
    </div>
  );
};

export default App;
