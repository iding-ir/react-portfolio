import { useLocation } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { useGetDataByLanguageQuery } from "../features/services/pages";
import { Data } from "../types";

export const useData = () => {
  const { pathname } = useLocation();
  const language = useAppSelector(selectLanguage);
  const { data, isLoading, error } = useGetDataByLanguageQuery({
    language,
    pathname,
  });

  const { pages, links, footer } = (data || {}) as Data;

  return {
    pages,
    links,
    footer,
    isLoading,
    error,
  };
};
