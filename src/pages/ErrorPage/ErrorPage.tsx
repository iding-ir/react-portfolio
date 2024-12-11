import { useTranslation } from "react-i18next";
import { Link, useRouteError } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { LadyBug } from "../../templates/LadyBug";

export const ErrorPage = () => {
  const { t } = useTranslation();
  const error = useRouteError() as Error;

  return (
    <LadyBug
      header={t("pages.errorPage.title")}
      content={
        <>
          <p>{t("pages.errorPage.content")}</p>

          <p>{error.message}</p>

          <Link to={HOME_PATH}>{t("pages.errorPage.link")}</Link>
        </>
      }
    />
  );
};
