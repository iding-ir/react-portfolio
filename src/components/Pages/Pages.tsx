import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import { usePersist } from "../../hooks/use-persist";
import { Layout } from "../../layout";
import { getPath } from "../../methods/get-path";
import { CoverPage } from "../../pages/CoverPage";
import { ErrorPage } from "../../pages/ErrorPage";
import { NoMatch } from "../../pages/NoMatch";
import { OopsPage } from "../../pages/OopsPage";
import { DragonFly } from "../../templates/DragonFly";

export const Pages = () => {
  usePersist();
  const { pages, isLoading } = useData();

  const errorElement = import.meta.env.DEV ? <ErrorPage /> : <OopsPage />;

  if (isLoading) {
    return <Layout.Loader />;
  }

  const router = createBrowserRouter([
    {
      path: HOME_PATH,
      element: <CoverPage />,
      errorElement,
    },
    ...pages.map(() => ({
      path: getPath({ slug: ":slug" }),
      element: <DragonFly />,
      errorElement,
    })),
    {
      path: "*",
      element: <NoMatch />,
      errorElement,
    },
  ]);

  return <RouterProvider router={router} />;
};
