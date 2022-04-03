import React from "react";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let routeIntegration = useRoutes(routes);
  return <>{routeIntegration}</>;
}

export default App;
