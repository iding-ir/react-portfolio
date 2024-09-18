import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { LANGUAGES, Language } from "../language";
import { selectLanguage, setLanguage } from "../language-slice";
import { Select } from "../../../components/Select";

export const LanguageSelector = () => {
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.target.value as Language));
  };

  return (
    <Select
      items={Object.values(LANGUAGES)}
      value={language}
      onChange={handleChange}
    />
  );
};
