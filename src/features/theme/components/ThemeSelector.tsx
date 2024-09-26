import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { Select } from "../../../components/Select";
import { THEMES, Theme } from "../theme";
import { selectTheme, setTheme } from "../theme-slice";

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const items = Object.values(THEMES).map((theme) => ({
    value: theme,
    label: t(`selects.theme.${theme}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as Theme));
  };

  return <Select items={items} value={theme} onChange={handleChange} />;
};
