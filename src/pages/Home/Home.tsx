import { Navigate } from "react-router-dom";

import { useRoutes } from "../../hooks/use-routes";

export const Home = () => {
  const { routes, isLoading } = useRoutes();

  if (isLoading) {
    return null;
  }

  return <Navigate to={routes[0].path} />;
};
