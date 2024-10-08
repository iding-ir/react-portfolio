import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { usePage } from "../hooks/use-page";
import { Layout } from "../layout";

export const DragonFly = () => {
  const { title, content, isLoading } = usePage();

  if (isLoading) {
    return <Layout.Loader />;
  }

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={title} />
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
