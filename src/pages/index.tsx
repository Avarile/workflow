import React from "react";

// Root pages
export const Login = React.lazy(() => import("./Login/Login"));
export const MainEntrance = React.lazy(
  () => import("./MainEntrance/MainEntrance")
);
export const Fallback = import("./FallbackLoading");

//common Components
export const Navbar = React.lazy(() => import("../common/Navbar"));
export const Sidebar = React.lazy(() => import("../common/Sidebar"));
export const Footer = React.lazy(() => import("../common/Footer"));

// Dashboard pages
export const DashboardMain = React.lazy(
  () => import("./DashBoardMain/DashBoardMain")
);
export const Delivery = React.lazy(
  () => import("./DashBoardMain/DashBoardMain")
);

export const Fabrication = React.lazy(
  () => import("./Fabrication/Fabrication")
);
