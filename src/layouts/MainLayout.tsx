import { Outlet } from "react-router-dom";
import { TopBar } from "../shared/TopBar";
import { SideNavigation } from "../shared/SideNavigation";
import { Breadcrumbs } from "../shared/Breadcrumbs";

export function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNavigation />
      <div style={{ flex: 1, padding: "16px" }}>
        <TopBar />
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  );
}