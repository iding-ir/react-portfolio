import { useTranslation } from "react-i18next";

import { LadyBug } from "../../templates/LadyBug";

export const NoMatch = () => {
  const { t } = useTranslation();

  return (
    <LadyBug
      header={t("pages.noMatch.title")}
      content={t("pages.noMatch.content")}
    />
  );
};
