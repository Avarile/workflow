import React from "react"
import { Navigate, useLocation, RouteObject } from "react-router-dom"
import { Login, MainEntrance, DashboardMain, OrderManagment, WareHousing } from "./pages"
import { FallbackLoading } from "./pages/FallbackLoading"
import Storage from "./data/dataStore/cache"

type FallbackComponentType = boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null
type ChildComponentType = React.LazyExoticComponent<() => JSX.Element>

// load the component asyncly and while loading display  a fallback component.
const LazyLoadingWrapper = (Child: ChildComponentType, Fallback?: FallbackComponentType) => {
  return (
    <React.Suspense fallback={FallbackLoading || <>...</>}>
      <Child />
    </React.Suspense>
  )
}

// tool functions definition
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // Storage.getCachedDate("USER")
  const [user, setUser] = React.useState(Storage.getCachedDate("USER")) 

  let location = useLocation()

  if (Storage.isVoid(user)) {
    return <Navigate to="/login" state={{ from: location }} replace /> // redirect the user to the /login page, but save the current location the user were. this allows us to send the user back to the page them after they login, which is nicer user experience than drop them off on home page
  }
  return children
}

// route structure
//
export const routes: RouteObject[] = [
  {
    path: "/",
    element: LazyLoadingWrapper(Login),
  },
  {
    path: "/login",
    element: LazyLoadingWrapper(Login),
  },
  {
    path: "/mainentrance",
    element: <RequireAuth>{LazyLoadingWrapper(MainEntrance)}</RequireAuth>,
    children: [
      {
        index: true,
        path: "/mainentrance/dashboardmain",
        element: LazyLoadingWrapper(DashboardMain),
      },
      {
        path: "/mainentrance/ordermanagment",
        element: LazyLoadingWrapper(OrderManagment),
      },
      {
        path: "/mainentrance/warehousing",
        element: LazyLoadingWrapper(WareHousing),
      },
      {
        path: "*",
        element: <p style={{ position: "absolute", left: "50%", top: "50%" }}>404 Not Found</p>,
      },
    ],
  },
]
