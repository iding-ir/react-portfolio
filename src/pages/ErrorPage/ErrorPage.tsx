import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";

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
          <h3>{t("pages.errorPage.content")}</h3>

          <p>{error.message}</p>

          <a href={HOME_PATH}>{t("pages.errorPage.link")}</a>
        </>
      }
    />
  );
};
