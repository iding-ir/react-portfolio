import { useTranslation } from "react-i18next";

import { Cover } from "../../components/Cover";
import { useData } from "../../hooks/use-data";
import { useHead } from "../../hooks/use-head";
import { getPath } from "../../methods/get-path";
import { BumbleBee } from "../../templates/BumbleBee";

export const CoverPage = () => {
  const { t } = useTranslation();
  const { appName } = useHead({});
  const {
    cover: { title, caption },
    pages,
    links,
    footer,
  } = useData();

  return (
    <BumbleBee
      id="cover"
      appName={appName}
      pageTitle={t("pages.coverPage.title")}
      links={links}
      content={
        <Cover
          title={title}
          caption={caption}
          link={getPath({ slug: pages[0].slug })}
        />
      }
      footer={footer}
    />
  );
};
