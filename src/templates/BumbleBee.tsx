import { ReactNode } from "react";

import { Content } from "../components/Content";
import { Copyright } from "../components/Copyright";
import { Hamburger } from "../components/Hamburger";
import { Heading } from "../components/Heading";
import { Links } from "../components/Links";
import { Navigation } from "../components/Navigation";
import { Settings } from "../components/Settings";
import { Title } from "../components/Title";
import { Layout } from "../layout";
import { LinkType } from "../types";

export const BumbleBee = ({
  id,
  appName,
  pageTitle,
  links,
  content,
  footer,
}: {
  id: string;
  appName: string;
  pageTitle: string;
  links: LinkType[];
  content: ReactNode;
  footer: string;
}) => {
  const titleId = `title-${id}`;

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

      <Layout.Section ariaDescribedBy={titleId}>
        <Title text={pageTitle} id={titleId} />
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
