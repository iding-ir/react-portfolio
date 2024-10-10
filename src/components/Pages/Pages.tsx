import { Route, Routes } from "react-router-dom";

import { useData } from "../../hooks/use-data";
import { usePersist } from "../../hooks/use-persist";
import { Layout } from "../../layout";
import { Home, NoMatch } from "../../pages";
import { DragonFly } from "../../templates/DragonFly";

export const Pages = () => {
  usePersist();
  const { pages, isLoading } = useData();

  if (isLoading) {
    return <Layout.Loader />;
  }

  return (
    <Routes>
      {pages.map(({ path }, index) => (
        <Route key={path} path={path} element={<DragonFly index={index} />} />
      ))}

      <Route path="/" element={<Home />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
