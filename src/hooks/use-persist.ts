import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { selectTheme } from "../features/theme";
import { selectSize } from "../features/size";
import { changeLanguage } from "i18next";
import { changeSize } from "../features/size/size-middleware";
import { changeTheme } from "../features/theme/theme-middleware";

export const usePersist = () => {
  const language = useAppSelector(selectLanguage);
  const theme = useAppSelector(selectTheme);
  const size = useAppSelector(selectSize);

  useEffect(() => {
    changeLanguage(language);
    changeTheme(theme);
    changeSize(size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
