import { useLocation } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { useGetPageByPathQuery } from "../features/services/pages";
import { PageType } from "../types";

export const usePage = () => {
  const { pathname } = useLocation();
  const language = useAppSelector(selectLanguage);
  const { data, isLoading } = useGetPageByPathQuery({
    language,
    pathname,
  });

  const { title, content } = (data || {}) as PageType;

  return {
    title,
    content,
    isLoading,
  };
};
