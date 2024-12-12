import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { BumbleBee } from "../../templates/BumbleBee";

export const NoMatchPage = () => {
  const { t } = useTranslation();

  return (
    <BumbleBee
      title={t("pages.noMatch.title")}
      content={
        <>
          <p>{t("pages.noMatch.content")}</p>

          <Link to={HOME_PATH}>{t("pages.noMatch.link")}</Link>
        </>
      }
    />
  );
};
