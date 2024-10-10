import Markdown from "markdown-to-jsx";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { useData } from "../hooks/use-data";
import { usePage } from "../hooks/use-page";
import { Layout } from "../layout";

export const DragonFly = ({ index }: { index: number }) => {
  const { title, content, isLoading } = usePage({ index });
  const { links } = useData();

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

        <Links links={links} />
      </Layout.Header>

      <Layout.Main>
        <Main>
          <Markdown>{content}</Markdown>
        </Main>
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
