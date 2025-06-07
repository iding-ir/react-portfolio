import Markdown from "markdown-to-jsx";

import { useData } from "../../hooks/use-data";
import { useHead } from "../../hooks/use-head";
import { usePage } from "../../hooks/use-page";
import { BumbleBee } from "../../templates/BumbleBee";

export const PortfolioPage = () => {
  const { appName } = useHead({});
  const { links, footer } = useData();
  const {
    markdown,
    page: { slug, title },
  } = usePage();

  return (
    <BumbleBee
      appName={appName}
      id={slug}
      pageTitle={title}
      links={links}
      content={<Markdown>{markdown}</Markdown>}
      footer={footer}
    />
  );
};
