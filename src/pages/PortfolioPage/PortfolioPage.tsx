import Markdown from "markdown-to-jsx";

import { usePage } from "../../hooks/use-page";
import { BumbleBee } from "../../templates/BumbleBee";

export const PortfolioPage = () => {
  const {
    markdown,
    page: { title },
  } = usePage();

  return <BumbleBee title={title} content={<Markdown>{markdown}</Markdown>} />;
};
