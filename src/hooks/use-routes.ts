import { useLocation } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { useGetRoutesByLanguageQuery } from "../features/services/pages";
import { Data } from "../types";

export const useRoutes = () => {
  const { pathname } = useLocation();
  const language = useAppSelector(selectLanguage);
  const { data, isLoading, error } = useGetRoutesByLanguageQuery({
    language,
    pathname,
  });

  const { routes, footer } = (data || {}) as Data;

  return {
    routes,
    footer,
    isLoading,
    error,
  };
};
