import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
