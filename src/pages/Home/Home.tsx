import { Navigate } from "react-router-dom";

import { useData } from "../../hooks/use-data";

export const Home = () => {
  const { pages, isLoading } = useData();

  if (isLoading) {
    return null;
  }

  return <Navigate to={pages[0].path} />;
};
