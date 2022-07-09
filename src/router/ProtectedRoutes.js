import { Navigate } from "react-router-dom";
import { useAuth } from "../router/AuthProvider";
import Navbar from "../components/Navbar/Navbar";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (token === null) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
