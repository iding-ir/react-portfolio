import { ReactNode } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { Layout } from "../layout";

export const LadyBug = ({
  header,
  content,
}: {
  header: string;
  content: ReactNode;
}) => {
  return (
    <Layout.Section>
      <Layout.Head />

      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={header} />
      </Layout.Header>

      <Layout.Main>
        <Main>{content}</Main>
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
