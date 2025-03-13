import { useTranslation } from "react-i18next";

import { Cover } from "../../components/Cover";
import { useData } from "../../hooks/use-data";
import { getPath } from "../../methods/get-path";
import { BumbleBee } from "../../templates/BumbleBee";

export const CoverPage = () => {
  const { t } = useTranslation();
  const {
    cover: { title, caption },
    pages,
  } = useData();

  return (
    <BumbleBee
      pageTitle={t("pages.coverPage.title")}
      content={
        <Cover
          title={title}
          caption={caption}
          link={getPath({ slug: pages[0].slug })}
        />
      }
    />
  );
};
