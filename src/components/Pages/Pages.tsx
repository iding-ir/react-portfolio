import { Route, Routes } from "react-router-dom";

import { usePersist } from "../../hooks/use-persist";
import { useRoutes } from "../../hooks/use-routes";
import { Layout } from "../../layout";
import { DragonFly } from "../../templates/DragonFly";

export const Pages = () => {
  usePersist();
  const { routes, isLoading } = useRoutes();

  if (isLoading) {
    return <Layout.Loader />;
  }

  return (
    <Routes>
      {routes.map(({ path }) => (
        <Route key={path} path={path} element={<DragonFly />} />
      ))}
    </Routes>
  );
};
