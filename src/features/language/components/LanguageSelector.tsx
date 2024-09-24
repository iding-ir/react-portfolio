import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { LANGUAGES, Language } from "../language";
import { selectLanguage, setLanguage } from "../language-slice";
import { Select } from "../../../components/Select";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);

  const items = Object.values(LANGUAGES).map((language) => ({
    value: language,
    label: t(`selects.language.${language}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.target.value as Language));
  };

  return <Select items={items} value={language} onChange={handleChange} />;
};
