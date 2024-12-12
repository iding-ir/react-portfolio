import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icon-language.svg";
import { Select } from "../../../components/Select";
import { LANGUAGES } from "../language";
import { selectLanguage, setLanguage } from "../language-slice";
import { LanguageType } from "../types";

export const LanguageSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);

  const items = Object.values(LANGUAGES).map((language) => ({
    value: language,
    label: t(`selects.language.${language}`),
  }));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.target.value as LanguageType));
  };

  return (
    <Select
      id="language-selector"
      items={items}
      value={language}
      icon={<Icon />}
      label={t("selects.language.label")}
      onChange={handleChange}
    />
  );
};
