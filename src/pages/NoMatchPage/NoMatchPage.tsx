import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import { useHead } from "../../hooks/use-head";
import { BumbleBee } from "../../templates/BumbleBee";

export const NoMatchPage = () => {
  const { t } = useTranslation();
  const { appName } = useHead({});
  const { links, footer } = useData();

  return (
    <BumbleBee
      id="no-match"
      appName={appName}
      pageTitle={t("pages.noMatchPage.pageTitle")}
      links={links}
      content={
        <>
          <p>{t("pages.noMatchPage.content")}</p>
          <Link to={HOME_PATH}>{t("pages.noMatchPage.link")}</Link>
        </>
      }
      footer={footer}
    />
  );
};
