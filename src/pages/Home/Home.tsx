import { Navigate } from "react-router-dom";

import { useRoutes } from "../../hooks/use-routes";

export const Home = () => {
  const { routes } = useRoutes();

  if (!routes) {
    return null;
  }

  return <Navigate to={routes[0].path} />;
};
