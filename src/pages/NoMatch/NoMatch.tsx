import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { LadyBug } from "../../templates/LadyBug";

export const NoMatch = () => {
  const { t } = useTranslation();

  return (
    <LadyBug
      header={t("pages.noMatch.title")}
      content={
        <>
          <p>{t("pages.noMatch.content")}</p>

          <Link to={HOME_PATH}>{t("pages.noMatch.link")}</Link>
        </>
      }
    />
  );
};
