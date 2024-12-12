import { useParams } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { useGetPageQuery } from "../features/data/data-api";
import { selectLanguage } from "../features/language";
import { useData } from "./use-data";

export const usePage = () => {
  const { slug } = useParams();
  const language = useAppSelector(selectLanguage);
  const { pages } = useData();

  const page = pages.find((page) => page.slug === slug);

  if (!page) {
    throw new Error("usePage: page not found");
  }

  const { data, isLoading, isError } = useGetPageQuery({
    language,
    file: page.file,
  });

  if (isError) {
    throw new Error("usePage: error fetching page");
  }

  const getPageIndex = (slug: string) => {
    return pages.findIndex((page) => page.slug === slug);
  };

  return {
    markdown: data as string,
    isLoading,
    page,
    getPageIndex,
  };
};
