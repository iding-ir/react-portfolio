import { Layout } from "../../layout";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { Navigation } from "../Navigation";

export const App = () => {
  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Main>
        <Main />
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
