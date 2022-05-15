import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/dashboard",
  children,
}: {
  isAllowed: boolean;
  redirectPath?: string;
  children?: ReactNode;
}) => {
  console.log(redirectPath);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
