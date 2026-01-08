import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  requireHierarchy?: boolean;
  requireFMEA?: boolean;
  children: ReactNode;
}

export function NavigationGuard({
  requireHierarchy,
  requireFMEA,
  children,
}: Props) {
  const hierarchyExists = true;
  const fmeaExists = true;

  if (requireHierarchy && !hierarchyExists) {
    return <Navigate to="/hierarchy-required" replace />;
  }

  if (requireFMEA && !fmeaExists) {
    return <Navigate to="/fmea-required" replace />;
  }

  return <>{children}</>;
}