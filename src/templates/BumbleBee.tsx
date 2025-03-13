import { ReactNode } from "react";

import { Content } from "../components/Content";
import { Copyright } from "../components/Copyright";
import { Hamburger } from "../components/Hamburger";
import { Heading } from "../components/Heading";
import { Links } from "../components/Links";
import { Navigation } from "../components/Navigation";
import { Settings } from "../components/Settings";
import { Title } from "../components/Title";
import { useData } from "../hooks/use-data";
import { Layout } from "../layout";

export const BumbleBee = ({
  pageTitle,
  content,
  id,
}: {
  pageTitle: string;
  content: ReactNode;
  id: string;
}) => {
  const appName = import.meta.env.VITE_DEFAULT_TITLE;
  const { links, footer } = useData();

  return (
    <Layout.Main>
      <Layout.Head page={pageTitle} />

      <Layout.Aside>
        <Hamburger />
        <Navigation />
      </Layout.Aside>

      <Layout.Header>
        <Heading text={appName} />
        <Links links={links} />
      </Layout.Header>

      <Layout.Section id={`section-${id}`}>
        <Title text={pageTitle} id={`section-${id}`} />
        <Content>{content}</Content>
      </Layout.Section>

      <Layout.Footer>
        <Copyright>{footer}</Copyright>
      </Layout.Footer>

      <Layout.Dialog>
        <Settings />
      </Layout.Dialog>
    </Layout.Main>
  );
};
