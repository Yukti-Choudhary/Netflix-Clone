import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/signIn" />;
};

export const IsUserRedirect = ({ user }) => {
  return user ? <Navigate to="/browse" /> : <Outlet />;
};
