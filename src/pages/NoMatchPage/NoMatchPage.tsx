import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { BumbleBee } from "../../templates/BumbleBee";

export const NoMatchPage = () => {
  const { t } = useTranslation();

  return (
    <BumbleBee
      id="no-match"
      pageTitle={t("pages.noMatchPage.pageTitle")}
      content={
        <>
          <p>{t("pages.noMatchPage.content")}</p>

          <Link to={HOME_PATH}>{t("pages.noMatchPage.link")}</Link>
        </>
      }
    />
  );
};
