import { Navigate, Route, Routes } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import { usePersist } from "../../hooks/use-persist";
import { Layout } from "../../layout";
import { getPath } from "../../methods/get-path";
import { NoMatch } from "../../pages";
import { DragonFly } from "../../templates/DragonFly";

export const Pages = () => {
  usePersist();
  const { pages, isLoading } = useData();

  if (isLoading) {
    return <Layout.Loader />;
  }

  return (
    <Routes>
      {pages.map(({ slug }) => (
        <Route
          key={slug}
          path={getPath({ slug: ":slug" })}
          element={<DragonFly />}
        />
      ))}

      <Route
        path={HOME_PATH}
        element={<Navigate to={getPath({ slug: pages[0].slug })} />}
      />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
