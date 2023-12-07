import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LogInPage from "./LogInPage";
import DefaultLayout from "../layouts/DefaultLayout";
import "../index.css";
import SignUpPage from "./SignUpPage";
import PrivateRouteLayout from "../layouts/PrivateRouteLayout";
import PublicRouteLayout from "../layouts/PublicRouteLayout";

function pages() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        {/* PrivateRouteLayout */}
        <Route element={<PrivateRouteLayout />}>
          <Route path="/" exact element={<HomePage />} />
        </Route>

        {/* PublicRouteLayout */}
        <Route element={<PublicRouteLayout />}>
          <Route path="/log-in" exact element={<LogInPage />} />
          <Route path="/sign-up" exact element={<SignUpPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default pages;
