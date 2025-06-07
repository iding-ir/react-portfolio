import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import { useHead } from "../../hooks/use-head";
import { BumbleBee } from "../../templates/BumbleBee";

export const OopsPage = () => {
  const { t } = useTranslation();
  const { appName } = useHead({});
  const { links, footer } = useData();

  return (
    <BumbleBee
      id="oops"
      appName={appName}
      pageTitle={t("pages.oopsPage.pageTitle")}
      links={links}
      content={
        <>
          <p>{t("pages.oopsPage.content")}</p>
          <Link to={HOME_PATH}>{t("pages.oopsPage.link")}</Link>
        </>
      }
      footer={footer}
    />
  );
};
