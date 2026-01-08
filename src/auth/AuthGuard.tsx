// src/auth/AuthGuard.tsx
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export function AuthGuard({ children }: Props) {
  // PLACEHOLDERS — backend integration later
  const isAuthenticated = true;
  const mfaRequired = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (mfaRequired) {
    return <Navigate to="/mfa" replace />;
  }

  return <>{children}</>;
}
