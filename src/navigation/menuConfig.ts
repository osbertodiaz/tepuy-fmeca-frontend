export type MenuItem = {
  label: string;
  path: string;
  allowedRoles: string[];
};

export const menuConfig: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    allowedRoles: ["ADMIN", "MANAGEMENT", "LEAD_ENGINEER", "ENGINEER", "VIEWER"],
  },
  {
    label: "Projects",
    path: "/projects",
    allowedRoles: ["ADMIN", "MANAGEMENT", "LEAD_ENGINEER", "ENGINEER"],
  },
  {
    label: "Administration",
    path: "/admin",
    allowedRoles: ["ADMIN"],
  },
];
