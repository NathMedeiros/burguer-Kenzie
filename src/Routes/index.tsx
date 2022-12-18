import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const token = localStorage.getItem("@TOKEN");
  if (!token) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default AuthRoutes;
