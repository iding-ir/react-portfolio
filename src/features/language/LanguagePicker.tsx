import { useSelector } from "react-redux";

import { useAppDispatch } from "../../app/hooks";
import { LANGUAGES, Language } from "./language";
import { selectLanguage, setLanguage } from "./language-slice";

export const LanguagePicker = () => {
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.target.value as Language));
  };

  return (
    <select onChange={handleChange} defaultValue={language}>
      {Object.values(LANGUAGES).map((language) => {
        return (
          <option key={language} value={language}>
            {language}
          </option>
        );
      })}
    </select>
  );
};
