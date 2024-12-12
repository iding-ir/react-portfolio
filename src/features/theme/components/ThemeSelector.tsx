import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icon-theme.svg";
import { Select } from "../../../components/Select";
import { THEMES } from "../theme";
import { selectTheme, setTheme } from "../theme-slice";
import { ThemeType } from "../types";

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const items = Object.values(THEMES).map((theme) => ({
    value: theme,
    label: t(`selects.theme.${theme}`),
  }));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as ThemeType));
  };

  return (
    <Select
      id="theme-selector"
      items={items}
      value={theme}
      icon={<Icon />}
      label={t("selects.theme.label")}
      onChange={handleChange}
    />
  );
};
