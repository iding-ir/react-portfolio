import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
import { usePersist } from "../../hooks/use-persist";

export const Pages = () => {
  usePersist();

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
