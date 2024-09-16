import { Route, Routes } from "react-router-dom";

import { routes } from "../../routes";
import { Wrappers } from "../Wrappers";

export const App = () => {
  return (
    <Wrappers>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Wrappers>
  );
};
