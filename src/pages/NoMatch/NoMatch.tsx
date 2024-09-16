import { useTranslation } from "react-i18next";

import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Layout } from "../../layout";

export const NoMatch = () => {
  const { t } = useTranslation();

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Main>{t("pages.noMatch")}</Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
