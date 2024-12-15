import { useRoutes } from "react-router-dom";
import Admin from "./dashboard/admin/Admin";
import { Suspense } from "react";
import History from "./history/History";
import Dashboard from "./dashboard/Dashboard";

const RoutesControllers = () => {
  return useRoutes([
    {
      path: "",
      element: (
        <Suspense fallback="loading">
          <Dashboard />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback="loading">
              <Admin />
            </Suspense>
          ),  
        },
        {
          path: "history",
          element: (
            <Suspense fallback="loading">
              <History />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default RoutesControllers;
