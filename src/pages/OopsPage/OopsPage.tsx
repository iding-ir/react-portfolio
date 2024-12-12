import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { LadyBug } from "../../templates/LadyBug";

export const OopsPage = () => {
  const { t } = useTranslation();

  return (
    <LadyBug
      title={t("pages.oopsPage.title")}
      content={
        <>
          <p>{t("pages.oopsPage.content")}</p>

          <Link to={HOME_PATH}>{t("pages.oopsPage.link")}</Link>
        </>
      }
    />
  );
};
