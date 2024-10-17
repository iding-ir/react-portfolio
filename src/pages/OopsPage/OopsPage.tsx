import { useTranslation } from "react-i18next";

import { HOME_PATH } from "../../constants";
import { LadyBug } from "../../templates/LadyBug";

export const OopsPage = () => {
  const { t } = useTranslation();

  return (
    <LadyBug
      header={t("pages.oopsPage.title")}
      content={
        <>
          <h3>{t("pages.oopsPage.content")}</h3>

          <a href={HOME_PATH}>{t("pages.oopsPage.link")}</a>
        </>
      }
    />
  );
};
