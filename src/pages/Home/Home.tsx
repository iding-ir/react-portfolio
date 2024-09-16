import { Navigate } from "react-router-dom";

import { HOME_PAGE } from "../../routes/urls";

export const Home = () => {
  return <Navigate to={HOME_PAGE} />;
};
