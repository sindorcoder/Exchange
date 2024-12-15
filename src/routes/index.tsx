import { useRoutes } from "react-router-dom";
import Admin from "./admin/Admin";
import { Suspense } from "react";

const RoutesControllers = () => {
  return useRoutes([
    {
      path: "",
      element: (
        <Suspense fallback="loading">
          <Admin />
        </Suspense>
      ),
    },
  ]);
};

export default RoutesControllers;
