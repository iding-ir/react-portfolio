import { useSelector } from "react-redux";

import { useAppDispatch } from "../../app/hooks";
import { THEMES, Theme } from "./theme";
import { selectTheme, setTheme } from "./theme-slice";

export const ThemePicker = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as Theme));
  };

  return (
    <select onChange={handleChange} defaultValue={theme}>
      {Object.values(THEMES).map((theme) => {
        return (
          <option key={theme} value={theme}>
            {theme}
          </option>
        );
      })}
    </select>
  );
};
