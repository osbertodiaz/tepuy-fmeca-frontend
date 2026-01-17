import React, { createContext, useContext, useState } from "react";
import { loginRequest } from "../api/apiClient";

type User = {
  id: string;
  email: string;
  role: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  tenantId: string | null;
  accessToken: string | null;
};

type AuthContextType = AuthState & {
  login: (tenantId: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    tenantId: null,
    accessToken: null,
  });

  const login = async (tenantId: string, email: string, password: string) => {
    const response = await loginRequest(tenantId, email, password);

    setAuth({
      isAuthenticated: true,
      user: response.user,
      tenantId,
      accessToken: response.access_token,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      tenantId: null,
      accessToken: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return ctx;
};
