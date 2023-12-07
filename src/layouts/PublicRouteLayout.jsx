import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRouteLayout() {
  const isLoggedIn = false;
  if (isLoggedIn) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default PublicRouteLayout;
