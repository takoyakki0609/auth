import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteLayout() {
  const isLoggedIn = false;
  if (!isLoggedIn) return <Navigate to="/log-in" replace />;

  return <Outlet />;
}

export default PrivateRouteLayout;
