import { Navigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login"></Navigate>;
}

export default ProtectedRoute;
