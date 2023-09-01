import { Outlet, Navigate } from "react-router-dom";

import useAuth from "../../features/authentication/hooks/useAuth";

function PrivateRoutes() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
