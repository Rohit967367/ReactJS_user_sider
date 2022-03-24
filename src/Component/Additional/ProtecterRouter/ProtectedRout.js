import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../DB/DB";

export const ProtectedRoute = ({ children }) => {
  const loaction = useLocation();

  return auth.currentUser ? (
    children
  ) : (
    <Navigate to={"/signIn"} replace state={{ path: loaction.pathname }} />
  );
};

export const CheckRouter = ({ children }) => {
  return auth.currentUser === null ? children : <Navigate to="/" replace />;
};
