import Markdown from "markdown-to-jsx";

import { Content } from "../components/Content";
import { Copyright } from "../components/Copyright";
import { Hamburger } from "../components/Hamburger";
import { Links } from "../components/Links";
import { Navigation } from "../components/Navigation";
import { Settings } from "../components/Settings";
import { Title } from "../components/Title";
import { useData } from "../hooks/use-data";
import { usePage } from "../hooks/use-page";
import { Layout } from "../layout";

export const DragonFly = () => {
  const { links, footer } = useData();
  const {
    markdown,
    page: { title },
    isLoading,
  } = usePage();

  if (isLoading) {
    return <Layout.Loader />;
  }

  return (
    <Layout.Section>
      <Layout.Head subtitle={title} />

      <Layout.Aside>
        <Hamburger />

        <Navigation />
      </Layout.Aside>

      <Layout.Header>
        <Title text={title} />

        <Links links={links} />
      </Layout.Header>

      <Layout.Main>
        <Content>
          <Markdown>{markdown}</Markdown>
        </Content>
      </Layout.Main>

      <Layout.Footer>
        <Copyright>{footer}</Copyright>
      </Layout.Footer>

      <Layout.Dialog>
        <Settings />
      </Layout.Dialog>
    </Layout.Section>
  );
};
