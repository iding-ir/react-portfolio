import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { useGetDataQuery } from "../features/services/data";
import { Data } from "../types";

export const useData = () => {
  const language = useAppSelector(selectLanguage);
  const { data, isLoading, isError } = useGetDataQuery({ language });

  if (isError) {
    throw new Error("useData: error fetching data");
  }

  return { ...(data as Data), isLoading };
};
