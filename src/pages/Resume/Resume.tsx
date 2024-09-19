import { useTranslation } from "react-i18next";

import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Layout } from "../../layout";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={t("pages.resume.title")} />
      </Layout.Header>

      <Layout.Main>
        <Main content={t("pages.resume.content")} />
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
