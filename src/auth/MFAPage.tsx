// src/auth/MFAPage.tsx
import { useState } from "react";

export function MFAPage() {
  const [code, setCode] = useState("");

  function handleVerify() {
    // Placeholder — backend MFA verification
    alert("MFA code submitted for verification.");
  }

  return (
    <div style={{ padding: "24px", maxWidth: "400px", margin: "auto" }}>
      <h1>Multi-Factor Authentication</h1>

      <p>Please enter your verification code.</p>

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="6-digit code"
      />

      <div style={{ marginTop: "16px" }}>
        <button disabled={code.length !== 6} onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
}
