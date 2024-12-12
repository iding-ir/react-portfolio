import { ReactNode } from "react";

import { Content } from "../components/Content";
import { Copyright } from "../components/Copyright";
import { Hamburger } from "../components/Hamburger";
import { Links } from "../components/Links";
import { Navigation } from "../components/Navigation";
import { Settings } from "../components/Settings";
import { Title } from "../components/Title";
import { useData } from "../hooks/use-data";
import { Layout } from "../layout";

export const LadyBug = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  const { links, footer } = useData();

  return (
    <Layout.Section>
      <Layout.Head />

      <Layout.Aside>
        <Hamburger />

        <Navigation />
      </Layout.Aside>

      <Layout.Header>
        <Title text={title} />

        <Links links={links} />
      </Layout.Header>

      <Layout.Main>
        <Content>{content}</Content>
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
