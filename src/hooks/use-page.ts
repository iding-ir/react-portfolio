import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { useGetPageContentByFileQuery } from "../features/services/pages";
import { useData } from "./use-data";

export const usePage = ({ index }: { index: number }) => {
  const language = useAppSelector(selectLanguage);
  const { pages } = useData();
  const { title, file } = pages[index];
  const { data, isLoading } = useGetPageContentByFileQuery({
    language,
    file,
  });

  const content = data as string;

  return {
    title,
    content,
    isLoading,
  };
};
