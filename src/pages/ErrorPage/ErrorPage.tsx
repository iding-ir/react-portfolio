import { useTranslation } from "react-i18next";
import { Link, useRouteError } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import { useHead } from "../../hooks/use-head";
import { BumbleBee } from "../../templates/BumbleBee";

export const ErrorPage = () => {
  const { t } = useTranslation();
  const { appName } = useHead({});
  const { links, footer } = useData();
  const error = useRouteError() as Error;

  return (
    <BumbleBee
      id="error"
      appName={appName}
      pageTitle={t("pages.errorPage.title")}
      links={links}
      content={
        <>
          <p>{t("pages.errorPage.content")}</p>
          <p>{error.message}</p>
          <Link to={HOME_PATH}>{t("pages.errorPage.link")}</Link>
        </>
      }
      footer={footer}
    />
  );
};
