import { Route, Routes } from "react-router-dom";

import { usePersist } from "../../hooks/use-persist";
import { routes } from "../../routes";

export const Pages = () => {
  usePersist();

  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};
