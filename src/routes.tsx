import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import {} from "./pages";

type FallbackComponentType =
  | boolean
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | null;
type ChildComponentType = React.LazyExoticComponent<() => JSX.Element>;

// load the component asyncly and while loading display  a fallback component.
const LazyLoadingWrapper = (
  Child: ChildComponentType,
  Fallback?: FallbackComponentType
) => {
  return (
    <React.Suspense fallback={Fallback || <>...</>}>
      <Child />
    </React.Suspense>
  );
};



// route structure
//
export const RouteIntegration = () => {
  return useRoutes([
    {
      path: "/",
      element: LazyLoadingWrapper(login)
    },
    {
      path: "/mainEntrance",
      element: LazyLoadingWrapper(MainEntrance),
      children:[
        index:true,
        element: LazyLoadingWrapper(DashBoardMain)
      ]
    }

  ])
}
