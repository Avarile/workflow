import React from "react"
import { Navigate, useRoutes } from "react-router-dom"
import { Login, Footer, Navbar, Sidebar, MainEntrance, DashboardMain } from "./pages"
import Storage from "./data/dataStore/cache"
import OrderManagment from "./pages/OrderManagment/OrderManagment"
import WareHousing from "./pages/WareHousing/WareHousing"

type FallbackComponentType = boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null
type ChildComponentType = React.LazyExoticComponent<() => JSX.Element>

// load the component asyncly and while loading display  a fallback component.
const LazyLoadingWrapper = (Child: ChildComponentType, Fallback?: FallbackComponentType) => {
  return (
    <React.Suspense fallback={Fallback || <>...</>}>
      <Child />
    </React.Suspense>
  )
}

// tool functions definition
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = Storage.getCachedDate("TOKEN")
  if (Storage.isVoid(auth)) {
    return <Navigate to="/login" state={{ from: location }} replace /> // redirect the user to the /login page, but save the current location the user were. this allows us to send the user back to the page them after they login, which is nicer user experience than drop them off on home page
  }
  return children
}

// route structure
//
export const RouteIntegration = () => {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/mainentrance",
      element: (
        <RequireAuth>
          <MainEntrance />
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          path: "/mainentrance/dashboardmain",
          element: <DashboardMain />,
        },
        {
          path: "/mainentrance/ordermanagment",
          element: <OrderManagment />,
        },
        {
          path: "/mainentrance/warehousing",
          element: <WareHousing />
        }
      ],
    },
  ])
}
