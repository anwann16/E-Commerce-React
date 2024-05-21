import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";

type ProtectedLayoutType = {
  children: ReactNode;
  status: "no-authentication" | "authentication";
};

const ProtectedLayout = ({ children, status }: ProtectedLayoutType) => {
  const { user } = useAuth();

  if (status === "no-authentication") {
    if (!user) {
      return children;
    }
  } else if (status === "authentication") {
    if (user) {
      return children;
    }
  }

  return <Navigate to="/login"></Navigate>;
};

export default ProtectedLayout;
