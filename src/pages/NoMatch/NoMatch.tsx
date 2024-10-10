import { useTranslation } from "react-i18next";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Navigation } from "../../components/Navigation";
import { Layout } from "../../layout";

export const NoMatch = () => {
  const { t } = useTranslation();

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={t("pages.noMatch.title")} />
      </Layout.Header>

      <Layout.Main>
        <Main>{t("pages.noMatch.content")}</Main>
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
