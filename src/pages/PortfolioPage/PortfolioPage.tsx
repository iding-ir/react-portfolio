import Markdown from "markdown-to-jsx";

import { usePage } from "../../hooks/use-page";
import { BumbleBee } from "../../templates/BumbleBee";

export const PortfolioPage = () => {
  const { markdown, page } = usePage();

  return (
    <BumbleBee
      pageTitle={page.title}
      content={<Markdown>{markdown}</Markdown>}
    />
  );
};
