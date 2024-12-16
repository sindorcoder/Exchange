import { useRoutes } from "react-router-dom";
import Admin from "./dashboard/admin/Admin";
import { Suspense } from "react";
import History from "./history/History";
import Dashboard from "./dashboard/Dashboard";
import Balance from "./dashboard/balance/Balance";

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
        {
          path: "balance",
          element: (
            <Suspense fallback="loading">
              <Balance />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default RoutesControllers;
