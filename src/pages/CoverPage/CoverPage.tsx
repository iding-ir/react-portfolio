import { Cover } from "../../components/Cover";
import { useData } from "../../hooks/use-data";
import { getPath } from "../../methods/get-path";
import { LadyBug } from "../../templates/LadyBug";

export const CoverPage = () => {
  const { cover, pages } = useData();

  const { title, caption } = cover;

  return (
    <LadyBug
      title={""}
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
