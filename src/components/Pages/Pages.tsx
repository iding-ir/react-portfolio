import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import { usePersist } from "../../hooks/use-persist";
import { Layout } from "../../layout";
import { getPath } from "../../methods/get-path";
import { NoMatch } from "../../pages";
import { ErrorPage } from "../../pages/ErrorPage";
import { DragonFly } from "../../templates/DragonFly";

export const Pages = () => {
  usePersist();
  const { pages, isLoading } = useData();

  if (isLoading) {
    return <Layout.Loader />;
  }

  const router = createBrowserRouter([
    ...pages.map(() => ({
      path: getPath({ slug: ":slug" }),
      element: <DragonFly />,
      errorElement: <ErrorPage />,
    })),
    {
      path: HOME_PATH,
      element: <Navigate to={getPath({ slug: pages[0].slug })} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <NoMatch />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
