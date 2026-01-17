import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";
import { RequireAuth } from "./auth/RequireAuth";
import RequireRole from "./auth/RequireRole";

import MainLayout from "./layouts/MainLayout";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectListPage from "./pages/projects/ProjectListPage";
import AdminPage from "./pages/AdminPage";
import NotAuthorizedPage from "./pages/NotAuthorizedPage";

import { routeRoles } from "./navigation/routeRoles";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <MainLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />

            <Route
              path="dashboard"
              element={
                <RequireRole allowedRoles={routeRoles["/dashboard"]}>
                  <DashboardPage />
                </RequireRole>
              }
            />

            <Route
              path="projects"
              element={
                <RequireRole allowedRoles={routeRoles["/projects"]}>
                  <ProjectsPage />
                </RequireRole>
              }
            />

            <Route
              path="admin"
              element={
                <RequireRole allowedRoles={routeRoles["/admin"]}>
                  <AdminPage />
                </RequireRole>
              }
            />

            <Route path="not-authorized" element={<NotAuthorizedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
