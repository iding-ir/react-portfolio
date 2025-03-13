import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { BumbleBee } from "../../templates/BumbleBee";

export const OopsPage = () => {
  const { t } = useTranslation();

  return (
    <BumbleBee
      pageTitle={t("pages.oopsPage.pageTitle")}
      content={
        <>
          <p>{t("pages.oopsPage.content")}</p>

          <Link to={HOME_PATH}>{t("pages.oopsPage.link")}</Link>
        </>
      }
    />
  );
};
