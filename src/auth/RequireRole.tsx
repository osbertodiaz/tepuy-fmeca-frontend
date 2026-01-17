import { Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

type RequireRoleProps = {
  allowedRoles: string[];
  children: JSX.Element;
};

const RequireRole: React.FC<RequireRoleProps> = ({ allowedRoles, children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
};

export default RequireRole;
