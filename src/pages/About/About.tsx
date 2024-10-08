import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Navigation } from "../../components/Navigation";
import { selectLanguage } from "../../features/language";
import { useGetMarkdownByRouteQuery } from "../../features/services/markdown";
import { Layout } from "../../layout";

export const About = () => {
  const { pathname } = useLocation();
  const language = useAppSelector(selectLanguage);
  const { data } = useGetMarkdownByRouteQuery({ language, pathname });
  const { header, content } = data || {};

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={header} />
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
