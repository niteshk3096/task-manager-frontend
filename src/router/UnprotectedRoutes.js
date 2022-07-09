import { Navigate } from "react-router-dom";
import { useAuth } from "../router/AuthProvider";

export const UnprotectedRoute = ({ children }) => {
  const { token } = useAuth();
  console.log("unn", token, typeof token);
  if (token !== null) {
    // user is not authenticated
    return <Navigate to="/home" />;
  }
  return children;
};
