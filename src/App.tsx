import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";
import { RequireAuth } from "./auth/RequireAuth";
import { LoginPage } from "./pages/LoginPage";

const ProtectedHome: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tepuy FMECA</h1>

      <p>
        Cloud-based FMEA / FMECA SaaS platform.
      </p>

      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        Authenticated session active.
      </p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <RequireAuth>
                <ProtectedHome />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
