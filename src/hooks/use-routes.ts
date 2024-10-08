import { useLocation } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { useGetRoutesByLanguageQuery } from "../features/services/pages";
import { RouteType } from "../types";

export const useRoutes = () => {
  const { pathname } = useLocation();
  const language = useAppSelector(selectLanguage);
  const { data, isLoading, error } = useGetRoutesByLanguageQuery({
    language,
    pathname,
  });

  const routes = Object.values(data?.routes || {}) as RouteType[];
  const footer = data?.footer || ({} as string);

  return {
    routes,
    footer,
    isLoading,
    error,
  };
};
