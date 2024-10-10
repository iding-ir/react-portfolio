import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { usePage } from "../hooks/use-page";
import { useRoutes } from "../hooks/use-routes";
import { Layout } from "../layout";
import { ROUTE_TYPES } from "../types";

export const DragonFly = () => {
  const { title, content, isLoading } = usePage();
  const { routes } = useRoutes();

  if (isLoading) {
    return <Layout.Loader />;
  }

  const links = routes.filter(({ type }) => type === ROUTE_TYPES.LINK);

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={title} />

        <Links links={links} />
      </Layout.Header>

      <Layout.Main>
        <Main content={content} />
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
