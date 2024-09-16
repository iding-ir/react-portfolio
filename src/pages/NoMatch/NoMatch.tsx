import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Layout } from "../../layout";

export const NoMatch = () => {
  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Main>404</Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
