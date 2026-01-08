// src/auth/LoginPage.tsx
import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // Placeholder — backend auth call later
    alert("Login submitted. Backend will authenticate.");
  }

  return (
    <div style={{ padding: "24px", maxWidth: "400px", margin: "auto" }}>
      <h1>Login</h1>

      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "12px" }}>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <button disabled={!email || !password} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
