// src/router/AppRouter.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthGuard } from "../auth/AuthGuard";
import { NavigationGuard } from "../guards/NavigationGuard";
import { MainLayout } from "../layouts/MainLayout";

// Auth
import { LoginPage } from "../auth/LoginPage";
import { AccessDenied } from "../auth/AccessDenied";

// Projects
import { ProjectListPage } from "../projects/ProjectListPage";
import { ProjectOverviewPage } from "../projects/ProjectOverviewPage";

// System Hierarchy
import { SystemHierarchyPage } from "../hierarchy/SystemHierarchyPage";

// FMEA
import { FMEATablePage } from "../fmea/FMEATablePage";

// Actions
import { ActionsPage } from "../actions/ActionsPage";

// Audit
import { AuditLogPage } from "../audit/AuditLogPage";

// Reports
import { ReportsPage } from "../reports/ReportsPage";

// Guard feedback pages
import { HierarchyRequiredPage } from "../guards/HierarchyRequiredPage";
import { FMEARequiredPage } from "../guards/FMEARequiredPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ─────────────────────────────
            PUBLIC ROUTES
           ───────────────────────────── */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/access-denied" element={<AccessDenied />} />

        {/* ─────────────────────────────
            AUTHENTICATED ROUTES
           ───────────────────────────── */}
        <Route
          path="/"
          element={
            <AuthGuard>
              <MainLayout />
            </AuthGuard>
          }
        >
          {/* PROJECT LEVEL */}
          <Route index element={<ProjectListPage />} />
          <Route path="projects/:projectId" element={<ProjectOverviewPage />} />

          {/* SYSTEM HIERARCHY (always allowed once project exists) */}
          <Route
            path="projects/:projectId/hierarchy"
            element={<SystemHierarchyPage />}
          />

          {/* FMEA TABLE (requires hierarchy) */}
          <Route
            path="projects/:projectId/fmea"
            element={
              <NavigationGuard requireHierarchy>
                <FMEATablePage />
              </NavigationGuard>
            }
          />

          {/* ACTIONS (requires FMEA) */}
          <Route
            path="projects/:projectId/actions"
            element={
              <NavigationGuard requireHierarchy requireFMEA>
                <ActionsPage />
              </NavigationGuard>
            }
          />

          {/* AUDIT LOG (requires FMEA) */}
          <Route
            path="projects/:projectId/audit"
            element={
              <NavigationGuard requireHierarchy requireFMEA>
                <AuditLogPage />
              </NavigationGuard>
            }
          />

          {/* REPORTS / EXPORT (requires FMEA) */}
          <Route
            path="projects/:projectId/reports"
            element={
              <NavigationGuard requireHierarchy requireFMEA>
                <ReportsPage />
              </NavigationGuard>
            }
          />

          {/* GUARD FEEDBACK ROUTES */}
          <Route
            path="hierarchy-required"
            element={<HierarchyRequiredPage />}
          />
          <Route
            path="fmea-required"
            element={<FMEARequiredPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
