import { useAppSelector } from "../app/hooks";
import { useGetDataQuery } from "../features/data/data-api";
import { selectLanguage } from "../features/language";
import { DataType } from "../types";

export const useData = () => {
  const language = useAppSelector(selectLanguage);
  const { data, isLoading, isError } = useGetDataQuery({ language });

  if (isError) {
    throw new Error("useData: error fetching data");
  }

  return { ...(data as DataType), isLoading };
};
