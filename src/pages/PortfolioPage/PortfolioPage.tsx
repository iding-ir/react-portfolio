import Markdown from "markdown-to-jsx";

import { usePage } from "../../hooks/use-page";
import { BumbleBee } from "../../templates/BumbleBee";

export const PortfolioPage = () => {
  const {
    markdown,
    page: { slug, title },
  } = usePage();

  return (
    <BumbleBee
      id={slug}
      pageTitle={title}
      content={<Markdown>{markdown}</Markdown>}
    />
  );
};
