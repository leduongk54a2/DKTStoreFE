import React from "react";
import ROUTES from ".";

const Routers = [
  {
    path: ROUTES.HOME,
    component: React.lazy(() => import("../view/home")),
  },
];

export default Routers;
